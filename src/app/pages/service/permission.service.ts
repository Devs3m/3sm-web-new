import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';

// Permission interface - matches backend frontend-friendly format
// Backend automatically transforms permissioncode (e.g., "account:create:name") 
// into resource, action, field properties via transformPermissionToFrontendFormat()
export interface Permission {
  id?: number;
  name: string;
  description?: string;
  resource: string; // e.g., 'account', 'instance', 'user' - parsed from permissioncode by backend
  action: string; // e.g., 'create', 'read', 'update', 'delete', 'view' - parsed from permissioncode by backend
  field?: string; // For field-level permissions - parsed from permissioncode by backend
  permissioncode?: string; // Full permission code (e.g., "permission:settings:access", "account:create:name")
  // Backend may also include other fields (permissioncode, etc.) for backward compatibility
}

export interface RolePermission {
  roleId: number;
  roleName: string;
  permissions: Permission[];
}

export interface UserRole {
  userId: number;
  roleId: number;
  roleName?: string;
  permissions?: Permission[];
}

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiUrl = environment.apiUrl;
  private permissionsCache: Map<number, Permission[]> = new Map();
  private currentUserRole: UserRole | null = null;
  private permissionResultCache: Map<string, boolean> = new Map(); // Cache permission check results
  private lastPermissionCheckTime: number = 0;
  private isPermissionsLoaded: boolean = false;
  
  // Public getter to check if permissions are loaded
  get permissionsLoaded(): boolean {
    return this.isPermissionsLoaded;
  }
  
  private debugMode: boolean = false; // Set to true for debugging only
  private cachedIsSuperAdmin: boolean | null = null; // Cache Super Admin check
  private lastSuperAdminCheckTime: number = 0;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    // Check if permissions were stored from login response (avoids separate API call)
    const loginPermissions = localStorage.getItem('loginPermissions');
    if (loginPermissions) {
      try {
        const data = JSON.parse(loginPermissions);
        // Check if data is recent (within 5 minutes)
        if (data.timestamp && (Date.now() - data.timestamp) < 5 * 60 * 1000) {
          console.log('✅ Loading permissions from login response cache');
          this.setPermissionsFromLogin(data.permissions || [], data.user);
          localStorage.removeItem('loginPermissions'); // Clear after use
          return; // Don't make API call if we have permissions from login
        } else {
          // Cache expired, remove it
          localStorage.removeItem('loginPermissions');
        }
      } catch (e) {
        console.warn('Error parsing login permissions cache:', e);
        localStorage.removeItem('loginPermissions');
      }
    }
    
    // Load permissions after a short delay to ensure AuthService is ready
    // Also check if user is authenticated before loading
    setTimeout(() => {
      if (this.authService.isAuthenticated() && !this.isPermissionsLoaded) {
        this.loadCurrentUserPermissions();
      }
    }, 200);
  }

  // Set permissions directly from login response (avoids separate API call)
  setPermissionsFromLogin(permissions: Permission[], user?: any): void {
    console.log('✅ Setting permissions from login response:', permissions.length, 'permissions');
    
    const userId = user?.id || user?.userId || user?.userid || user?.user_id || 0;
    const roleId = user?.roleId || user?.roleid || user?.role_id || user?.userroleid || user?.userRoleId || 0;
    const roleName = user?.role || user?.roleName || user?.rolename || user?.role_name || user?.userrolename || user?.userRoleName;
    
    // Set current user role with permissions from login
    this.currentUserRole = {
      userId: userId,
      roleId: roleId,
      roleName: roleName,
      permissions: permissions || []
    };
    
    this.isPermissionsLoaded = true;
    this.permissionResultCache.clear(); // Clear cache when permissions reload
    this.cachedIsSuperAdmin = null; // Clear Super Admin cache to recalculate
    
    console.log('✅ Permissions set from login response');
    console.log('  - User ID:', userId);
    console.log('  - Role ID:', roleId);
    console.log('  - Role Name:', roleName);
    console.log('  - Permissions Count:', permissions.length);
  }

  // Load permissions for current logged-in user
  // Uses new authenticated user endpoints: GET /auth/permissions or GET /role/user/permissions
  // These endpoints don't require Super Admin access and return current user's permissions
  loadCurrentUserPermissions(): void {
    const user = this.authService.getUser();
    if (!user) {
      console.warn('No user found - cannot load permissions');
      return;
    }

    const userId = user.userId || user.userid || user.user_id || user.id;
    const roleId = user.roleId || user.roleid || user.role_id || user.userroleid || user.userRoleId;
    const fallbackRoleName = user.roleName || user.rolename || user.role_name || user.userrolename || user.userRoleName;

    console.log('Loading current user permissions...');
    console.log('User ID:', userId);
    console.log('Role ID:', roleId);
    
    // Use new authenticated user permissions endpoint (recommended)
    // GET /auth/permissions - Returns current logged-in user's permissions in frontend-friendly format
    this.http.get<any>(`${this.apiUrl}/auth/permissions`).subscribe({
      next: (response) => {
        console.log('✅ Received user permissions from /auth/permissions:', response);
        
        // Handle response format: { success: true, userId: 1, permissions: [...], count: 10 }
        let permissions: Permission[] = [];
        let roleName: string | undefined = fallbackRoleName;
        
        if (response && response.permissions) {
          permissions = Array.isArray(response.permissions) ? response.permissions : [];
          // Extract role name from response if available
          if (response.roleName || response.rolename || response.userrolename) {
            roleName = response.roleName || response.rolename || response.userrolename || fallbackRoleName;
          }
        } else if (Array.isArray(response)) {
          // Handle case where API returns array directly
          permissions = response;
        }
        
        // Permissions are already in frontend-friendly format with resource, action, field
        this.currentUserRole = {
          userId: response.userId || userId || 0,
          roleId: response.roleId || roleId || 0,
          roleName: roleName,
          permissions: permissions
        };
        
        this.isPermissionsLoaded = true;
        this.permissionResultCache.clear(); // Clear cache when permissions reload
        this.cachedIsSuperAdmin = null; // Clear Super Admin cache to recalculate
        
        console.log('✅ Loaded user permissions:', this.currentUserRole);
        console.log('  - Role name:', roleName);
        console.log('  - Permissions count:', permissions.length);
        console.log('  - Permissions sample:', permissions.slice(0, 3));
        
        // If role name is still undefined, try to fetch it from roleId
        if (!roleName && roleId) {
          console.log('⚠️ Role name still undefined, fetching from roleId:', roleId);
          this.getRoleDetails(roleId).subscribe({
            next: (roleDetails: any) => {
              if (roleDetails) {
                const fetchedRoleName = roleDetails.userrolename || roleDetails.roleName || roleDetails.rolename || roleDetails.name;
                if (fetchedRoleName && this.currentUserRole) {
                  this.currentUserRole.roleName = fetchedRoleName;
                  this.setRoleName(fetchedRoleName);
                  console.log('✅ Role name fetched and set:', fetchedRoleName);
                  console.log('  - isSuperAdmin check after setting role:', this.isSuperAdmin());
                }
              }
            },
            error: (err) => {
              console.warn('Failed to fetch role name:', err);
            }
          });
        } else if (roleName) {
          // Ensure role name is set in currentUserRole
          this.setRoleName(roleName);
          console.log('✅ Role name set from permissions response:', roleName);
          console.log('  - isSuperAdmin check:', this.isSuperAdmin());
        }
      },
      error: (err) => {
        console.warn('Failed to load permissions from /auth/permissions, trying fallback...', err);
        
        // Fallback: Try /role/user/permissions endpoint
        this.http.get<any>(`${this.apiUrl}/role/user/permissions`).subscribe({
          next: (response) => {
            console.log('✅ Received user permissions from /role/user/permissions:', response);
            
            let permissions: Permission[] = [];
            let roleName: string | undefined = fallbackRoleName;
            
            if (response && response.permissions) {
              permissions = Array.isArray(response.permissions) ? response.permissions : [];
              if (response.roleName || response.rolename || response.userrolename) {
                roleName = response.roleName || response.rolename || response.userrolename || fallbackRoleName;
              }
            } else if (Array.isArray(response)) {
              permissions = response;
            }
            
            this.currentUserRole = {
              userId: response.userId || userId || 0,
              roleId: response.roleId || roleId || 0,
              roleName: roleName,
              permissions: permissions
            };
            
            this.isPermissionsLoaded = true;
            this.permissionResultCache.clear();
            this.cachedIsSuperAdmin = null;
            
            console.log('✅ Loaded user permissions from fallback endpoint:', this.currentUserRole);
            console.log('  - Role name:', roleName);
            
            // If role name is still undefined, try to fetch it from roleId
            if (!roleName && roleId) {
              console.log('⚠️ Role name still undefined in fallback, fetching from roleId:', roleId);
              this.getRoleDetails(roleId).subscribe({
                next: (roleDetails: any) => {
                  if (roleDetails) {
                    const fetchedRoleName = roleDetails.userrolename || roleDetails.roleName || roleDetails.rolename || roleDetails.name;
                    if (fetchedRoleName && this.currentUserRole) {
                      this.currentUserRole.roleName = fetchedRoleName;
                      this.setRoleName(fetchedRoleName);
                      console.log('✅ Role name fetched and set from fallback:', fetchedRoleName);
                      console.log('  - isSuperAdmin check after setting role:', this.isSuperAdmin());
                    }
                  }
                },
                error: (err) => {
                  console.warn('Failed to fetch role name from fallback:', err);
                }
              });
            } else if (roleName) {
              this.setRoleName(roleName);
              console.log('✅ Role name set from fallback response:', roleName);
              console.log('  - isSuperAdmin check:', this.isSuperAdmin());
            }
          },
          error: (fallbackErr) => {
            console.error('❌ Both user permission endpoints failed, using role-based fallback');
            console.error('Primary error:', err);
            console.error('Fallback error:', fallbackErr);
            
            // Final fallback: Use role-based permissions (requires Super Admin or specific role access)
            if (roleId) {
              this.loadPermissionsForRole(userId, roleId, fallbackRoleName);
            } else {
              // Last resort: Use empty permissions
              this.currentUserRole = {
                userId: userId || 0,
                roleId: 0,
                roleName: fallbackRoleName,
                permissions: []
              };
              this.isPermissionsLoaded = true;
              console.warn('Using empty permissions - no role ID available');
            }
          }
        });
      }
    });
  }

  // Helper method to load permissions for a role
  private loadPermissionsForRole(userId: number | undefined, roleId: number, roleName: string | undefined): void {
    this.getRolePermissions(roleId).subscribe({
      next: (permissions) => {
        // Ensure permissions is always an array (even if empty)
        const permissionsArray = Array.isArray(permissions) ? permissions : [];
        this.currentUserRole = {
          userId: userId || 0,
          roleId: roleId,
          roleName: roleName,
          permissions: permissionsArray
        };
        this.isPermissionsLoaded = true; // Mark permissions as loaded
        this.permissionResultCache.clear(); // Clear cache when permissions reload
        console.log('Loaded user permissions from role:', this.currentUserRole);
        console.log('Role name from DB:', roleName);
        console.log('Permissions count:', permissionsArray.length);
      },
      error: (err) => {
        console.warn('Could not load permissions from role, using empty permissions array');
        // Even if API fails, set empty array so super admin check can still work
        this.currentUserRole = {
          userId: userId || 0,
          roleId: roleId,
          roleName: roleName,
          permissions: [] // Empty array, but roleName is set for super admin check
        };
        this.isPermissionsLoaded = true; // Mark permissions as loaded
        this.permissionResultCache.clear(); // Clear cache when permissions reload
        console.log('Role name (from error handler):', roleName);
      }
    });
  }

  // Get role details by roleId from database
  getRoleDetails(roleId: number): Observable<any> {
    if (!this.apiUrl || !this.apiUrl.startsWith('http')) {
      console.error('Invalid API URL:', this.apiUrl);
      return throwError(() => new Error(`Invalid API URL: ${this.apiUrl}`));
    }
    
    if (!roleId || isNaN(roleId) || roleId <= 0) {
      console.error('Invalid roleId:', roleId);
      return throwError(() => new Error(`Invalid roleId: ${roleId}`));
    }
    
    const url = `${this.apiUrl}/role/${roleId}/details`;
    console.log(`Fetching role details for roleId: ${roleId} from ${url}`);
    
    // Use the new role details endpoint
    return this.http.get<any>(url).pipe(
      map((role) => {
        if (role) {
          console.log('✅ Got role details from API:', role);
        }
        return role;
      }),
      catchError((err) => {
        console.log('Role details endpoint failed, trying list endpoint as fallback. Error:', err);
        // If specific endpoint doesn't exist, get from list and find by ID (fallback)
        return this.http.get<any[]>(`${this.apiUrl}/role/all`).pipe(
          map((roles) => {
            console.log('Got roles list, count:', roles?.length);
            if (!roles || !Array.isArray(roles)) {
              console.warn('⚠️ Invalid roles list response:', roles);
              return null;
            }
            // Try to find role by various possible ID field names
            const role = roles.find(r => {
              const match = r.userroleid === roleId || 
                           r.roleId === roleId || 
                           r.id === roleId ||
                           r.userRoleId === roleId ||
                           r.userroleId === Number(roleId) ||
                           r.roleId === Number(roleId) ||
                           r.id === Number(roleId) ||
                           r.userRoleId === Number(roleId);
              if (match) {
                console.log('✅ Found matching role:', r);
              }
              return match;
            });
            if (role) {
              console.log('✅ Found role from list:', role);
              console.log('Role name field:', role.userrolename || role.roleName || role.rolename || role.name);
            } else {
              console.warn(`❌ Role with ID ${roleId} not found in list`);
              console.log('Available roles:', roles.map(r => ({
                id: r.userroleid || r.roleId || r.id || r.userRoleId,
                name: r.userrolename || r.roleName || r.rolename || r.name
              })));
            }
            return role || null;
          }),
          catchError((listErr) => {
            console.error('❌ Error fetching role list:', listErr);
            return of(null);
          })
        );
      })
    );
  }

  // Get permissions for a specific role (Super Admin only)
  getRolePermissions(roleId: number): Observable<Permission[]> {
    // Check if user is Super Admin
    if (!this.isSuperAdmin()) {
      console.warn('getRolePermissions: Access denied - Super Admin required');
      return of([]);
    }

    if (!this.apiUrl || !this.apiUrl.startsWith('http')) {
      console.error('Invalid API URL:', this.apiUrl);
      return throwError(() => new Error(`Invalid API URL: ${this.apiUrl}`));
    }

    if (!roleId || isNaN(roleId) || roleId <= 0) {
      console.error('Invalid roleId:', roleId);
      return throwError(() => new Error(`Invalid roleId: ${roleId}`));
    }

    if (this.permissionsCache.has(roleId)) {
      return of(this.permissionsCache.get(roleId)!);
    }

    const url = `${this.apiUrl}/role/${roleId}/permissions`;
    console.log('Fetching role permissions from:', url);
    return this.http.get<Permission[]>(url).pipe(
      map((permissions) => {
        this.permissionsCache.set(roleId, permissions);
        return permissions;
      }),
      catchError((error) => {
        console.error('Error fetching role permissions:', error);
        console.error('Request URL:', url);
        console.error('Error status:', error.status);
        console.error('Error message:', error.message);
        
        // Handle CORS errors
        if (error.message && (error.message.includes('CORS') || error.message.includes('Failed to fetch'))) {
          console.error('CORS Error: Make sure the backend server is running on', this.apiUrl);
          console.error('If using a proxy, ensure proxy.conf.json is configured correctly');
        }
        
        // Handle 403 Forbidden (Super Admin required)
        if (error.status === 403) {
          console.error('getRolePermissions: Forbidden - Super Admin access required');
          alert('Access denied. Only Super Admin can view role permissions.');
        }
        // Return empty array if API fails
        return of([]);
      })
    );
  }

  // Get permissions for a specific user
  // Note: This endpoint may not exist on the backend. Use getRolePermissions instead if you have roleId.
  getUserPermissions(userId: number): Observable<UserRole> {
    return this.http.get<UserRole>(`${this.apiUrl}/user/${userId}/permissions`).pipe(
      map((userRole) => {
        this.currentUserRole = userRole;
        return userRole;
      }),
      catchError((error) => {
        // Silently return default if API endpoint doesn't exist (404)
        // This is expected if the backend doesn't implement this endpoint
        if (error.status === 404) {
          console.warn(`User permissions endpoint not found for user ${userId}. Using role-based permissions instead.`);
        }
        // Return default if API fails
        return of({ userId, roleId: 0, permissions: [] });
      })
    );
  }

  // Save/Update permissions for a role (Super Admin only)
  saveRolePermissions(roleId: number, permissions: Permission[]): Observable<any> {
    // Check if user is Super Admin
    if (!this.isSuperAdmin()) {
      console.warn('saveRolePermissions: Access denied - Super Admin required');
      alert('Access denied. Only Super Admin can assign permissions to roles.');
      return of(false);
    }

    return this.http.post(`${this.apiUrl}/role/${roleId}/permissions`, { permissions }).pipe(
      map(() => {
        // Clear cache after update
        this.permissionsCache.delete(roleId);
        return true;
      }),
      catchError((error) => {
        console.error('Error saving role permissions:', error);
        // Handle 403 Forbidden (Super Admin required)
        if (error.status === 403) {
          alert('Access denied. Only Super Admin can assign permissions to roles.');
        } else {
          const errorMessage = error.error?.message || error.message || 'Unknown error';
          alert(`Error saving permissions: ${errorMessage}`);
        }
        return of(false);
      })
    );
  }

  // Check if current user has permission for a resource and action (with caching)
  hasPermission(resource: string, action: string, field?: string): boolean {
    // Create cache key
    const cacheKey = `${resource}:${action}:${field || ''}`;
    
    // Check cache first (only if permissions are loaded and cache is recent)
    const now = Date.now();
    if (this.isPermissionsLoaded && this.permissionResultCache.has(cacheKey)) {
      const cachedResult = this.permissionResultCache.get(cacheKey);
      // Cache valid for 1 second
      if (now - this.lastPermissionCheckTime < 1000) {
        return cachedResult!;
      }
    }
    
    // First check if user is Super Admin - Super Admin has access to ALL resources and ALL actions
    const isSuperAdminUser = this.isSuperAdmin();
    
    // Super Admin has full access to everything
    if (isSuperAdminUser) {
      // Cache result
      this.permissionResultCache.set(cacheKey, true);
      this.lastPermissionCheckTime = now;
      return true;
    }
    
    if (!this.currentUserRole) {
      // Cache result
      this.permissionResultCache.set(cacheKey, false);
      this.lastPermissionCheckTime = now;
      return false;
    }

    const roleName = this.currentUserRole.roleName;
    const roleNameLower = roleName?.toLowerCase()?.trim() || '';

    // If no permissions array or empty array, return false (unless super admin check above passed)
    if (!this.currentUserRole.permissions || this.currentUserRole.permissions.length === 0) {
      // Cache result
      this.permissionResultCache.set(cacheKey, false);
      this.lastPermissionCheckTime = now;
      return false;
    }

    const permissions = this.currentUserRole.permissions;
    
    // Check for exact match (case-insensitive for resource and action)
    const hasExactPermission = permissions.some(p => {
      const resourceMatch = p.resource?.toLowerCase() === resource.toLowerCase();
      const actionMatch = p.action?.toLowerCase() === action.toLowerCase();
      const fieldMatch = !field || !p.field || p.field === field;
      
      return resourceMatch && actionMatch && fieldMatch;
    });

    if (hasExactPermission) {
      // Cache result
      this.permissionResultCache.set(cacheKey, true);
      this.lastPermissionCheckTime = now;
      return true;
    }
    
    // Debug logging only when needed (commented out to reduce console noise)
    // Uncomment below for detailed debugging of specific permission checks
    // if (resource === 'account' && action === 'create') {
    //   console.log('hasPermission DEBUG - account:create check:');
    //   console.log('  - Requested:', { resource, action, field });
    //   console.log('  - User Role:', this.currentUserRole.roleName);
    //   console.log('  - Permissions count:', permissions.length);
    //   console.log('  - All permissions:', permissions.map(p => ({
    //     resource: p.resource,
    //     action: p.action,
    //     field: p.field,
    //     id: p.id
    //   })));
    // }

    // Check for wildcard permissions (admin access)
    const hasWildcardPermission = permissions.some(p => 
      p.resource === '*' && p.action === '*'
    );

    // Cache result
    this.permissionResultCache.set(cacheKey, hasWildcardPermission);
    this.lastPermissionCheckTime = now;
    return hasWildcardPermission;
  }

  // Check if user has ANY permission for a resource (view, create, update, delete, etc.)
  // This is useful for showing/hiding menu items - if user has any permission, show the menu
  hasAnyPermissionForResource(resource: string): boolean {
    // First check if user is Super Admin - Super Admin has access to ALL resources
    if (this.isSuperAdmin()) {
      return true;
    }

    if (!this.currentUserRole || !this.currentUserRole.permissions || this.currentUserRole.permissions.length === 0) {
      return false;
    }

    const permissions = this.currentUserRole.permissions;
    const resourceLower = resource.toLowerCase();

    // Check if user has any permission for this resource (any action)
    const hasAnyPermission = permissions.some(p => 
      p.resource?.toLowerCase() === resourceLower
    );

    // Also check for wildcard permissions
    const hasWildcardPermission = permissions.some(p => 
      p.resource === '*' && p.action === '*'
    );

    return hasAnyPermission || hasWildcardPermission;
  }

  // Check if current user has access to a page/route
  hasPageAccess(page: string): boolean {
    // Map routes to resources
    const routeToResource: { [key: string]: string } = {
      'account': 'account',
      'instance': 'instance',
      'user': 'user',
      'userrole': 'userrole',
      'city': 'city',
      'gst': 'gst',
      'vat': 'vat',
      'product': 'product',
      'digicard': 'digicard',
      'dashboard': 'dashboard'
    };

    const resource = routeToResource[page] || page;
    return this.hasPermission(resource, 'read') || this.hasPermission(resource, 'view');
  }

  // Check if current user can perform action on resource
  canPerformAction(resource: string, action: 'create' | 'read' | 'update' | 'delete' | 'view'): boolean {
    return this.hasPermission(resource, action);
  }

  // Check if user has a specific permission code (e.g., "permission:settings:access")
  // This method checks both by permissioncode field and by parsing resource:action:field
  hasPermissionCode(permissionCode: string): boolean {
    if (!permissionCode) {
      return false;
    }

    // First check if user is Super Admin
    if (this.isSuperAdmin()) {
      return true;
    }

    if (!this.currentUserRole || !this.currentUserRole.permissions || this.currentUserRole.permissions.length === 0) {
      return false;
    }

    const permissions = this.currentUserRole.permissions;
    const permissionCodeLower = permissionCode.toLowerCase().trim();

    // Check for exact permissioncode match (case-insensitive)
    const hasExactCode = permissions.some(p => {
      if (p.permissioncode) {
        return p.permissioncode.toLowerCase().trim() === permissionCodeLower;
      }
      return false;
    });

    if (hasExactCode) {
      return true;
    }

    // Also check by parsing the permission code into resource:action:field
    // This handles cases where backend doesn't include permissioncode field
    const parts = permissionCode.split(':');
    if (parts.length >= 2) {
      const resource = parts[0];
      const action = parts[1];
      const field = parts.length >= 3 ? parts[2] : undefined;
      
      return this.hasPermission(resource, action, field);
    }

    return false;
  }

  // Alias for hasPermissionCode - matches the user's expected method name
  userHasPermission(permissionCode: string): boolean {
    return this.hasPermissionCode(permissionCode);
  }

  // Check if current user can access a specific field
  canAccessField(resource: string, field: string, action: string = 'read'): boolean {
    // If user has general access to resource, allow field access
    if (this.hasPermission(resource, action)) {
      return true;
    }

    // Check for specific field permission
    return this.hasPermission(resource, action, field);
  }

  // Get current user's role
  getCurrentUserRole(): UserRole | null {
    return this.currentUserRole;
  }

  // Get all available permissions (for configuration UI) - Super Admin only
  getAllPermissions(): Observable<Permission[]> {
    // Check if user is Super Admin
    if (!this.isSuperAdmin()) {
      console.warn('getAllPermissions: Access denied - Super Admin required');
      return of([]);
    }

    return this.http.get<any>(`${this.apiUrl}/role/permissions/all`).pipe(
      map((response: any) => {
        // Handle different response formats
        if (Array.isArray(response)) {
          // Direct array response
          return response;
        } else if (response && Array.isArray(response.permissions)) {
          // Object with permissions property: { permissions: [...] }
          return response.permissions;
        } else if (response && response.success && Array.isArray(response.data)) {
          // Object with success and data: { success: true, data: [...] }
          return response.data;
        } else {
          console.error('Unexpected response format from getAllPermissions:', response);
          return [];
        }
      }),
      catchError((error) => {
        // Handle 403 Forbidden (Super Admin required)
        if (error.status === 403) {
          console.error('getAllPermissions: Forbidden - Super Admin access required');
          alert('Access denied. Only Super Admin can view all permissions.');
        }
        return of([]);
      })
    );
  }

  // Get predefined permission templates
  getPermissionTemplates(): { [key: string]: Permission[] } {
    return {
      'account': [
        { name: 'Account View', resource: 'account', action: 'view' },
        { name: 'Account Create', resource: 'account', action: 'create' },
        { name: 'Account Update', resource: 'account', action: 'update' },
        { name: 'Account Delete', resource: 'account', action: 'delete' },
        { name: 'Account Export', resource: 'account', action: 'export' }
      ],
      'instance': [
        { name: 'Instance View', resource: 'instance', action: 'view' },
        { name: 'Instance Create', resource: 'instance', action: 'create' },
        { name: 'Instance Update', resource: 'instance', action: 'update' },
        { name: 'Instance Delete', resource: 'instance', action: 'delete' },
        { name: 'Instance Export', resource: 'instance', action: 'export' }
      ],
      'user': [
        { name: 'User View', resource: 'user', action: 'view' },
        { name: 'User Create', resource: 'user', action: 'create' },
        { name: 'User Update', resource: 'user', action: 'update' },
        { name: 'User Delete', resource: 'user', action: 'delete' }
      ],
      'userrole': [
        { name: 'Role View', resource: 'userrole', action: 'view' },
        { name: 'Role Create', resource: 'userrole', action: 'create' },
        { name: 'Role Update', resource: 'userrole', action: 'update' },
        { name: 'Role Delete', resource: 'userrole', action: 'delete' },
        { name: 'Role Configure', resource: 'userrole', action: 'configure' }
      ]
    };
  }

  // Clear cache (useful after permission updates)
  clearCache(): void {
    this.permissionsCache.clear();
    this.permissionResultCache.clear(); // Clear permission result cache too
    this.cachedIsSuperAdmin = null; // Clear Super Admin cache
    this.isPermissionsLoaded = false;
    this.loadCurrentUserPermissions();
  }

  // Force reload permissions (useful for debugging)
  reloadPermissions(): void {
    console.log('🔄 Force reloading permissions...');
    this.currentUserRole = null;
    this.permissionsCache.clear();
    this.loadCurrentUserPermissions();
  }

  // Get current role name (for debugging)
  getCurrentRoleName(): string | undefined {
    const roleName = this.currentUserRole?.roleName;
    console.log('getCurrentRoleName() called:');
    console.log('  - currentUserRole:', this.currentUserRole);
    console.log('  - roleName from currentUserRole:', roleName);
    
    if (roleName) {
      return roleName;
    }
    
    // Try to get from user object
    const user = this.authService.getUser();
    if (user) {
      const userRoleName = user.roleName || user.rolename || user.role_name || user.userrolename || user.userRoleName || user.role;
      console.log('  - roleName from user object:', userRoleName);
      if (userRoleName) {
        return userRoleName;
      }
    }
    
    // Try localStorage
    try {
      const userDataStr = localStorage.getItem('userData');
      if (userDataStr) {
        const userData = JSON.parse(userDataStr);
        const storedRoleName = userData.roleName || userData.rolename || userData.role_name || userData.userrolename || userData.userRoleName || userData.role;
        console.log('  - roleName from localStorage:', storedRoleName);
        if (storedRoleName) {
          return storedRoleName;
        }
      }
    } catch (e) {
      // Ignore
    }
    
    console.log('  - ❌ No role name found, returning undefined');
    return undefined;
  }

  // Debug method to check what permissions user has (can be called from browser console)
  debugPermissions(): void {
    console.log('=== PERMISSION DEBUG INFO ===');
    console.log('Current User Role:', this.currentUserRole);
    console.log('Is Super Admin:', this.isSuperAdmin());
    console.log('Permissions Loaded:', this.isPermissionsLoaded);
    console.log('Total Permissions:', this.currentUserRole?.permissions?.length || 0);
    console.log('All Permissions:', this.currentUserRole?.permissions || []);
    console.log('Account Permissions:', this.currentUserRole?.permissions?.filter(p => 
      p.resource?.toLowerCase() === 'account'
    ) || []);
    console.log('Create Permissions:', this.currentUserRole?.permissions?.filter(p => 
      p.action?.toLowerCase() === 'create'
    ) || []);
    console.log('Account:Create Check:', this.hasPermission('account', 'create'));
    console.log('===========================');
  }

  // Check if current user is Super Admin (with caching)
  isSuperAdmin(): boolean {
    // Check cache first (valid for 5 seconds)
    const now = Date.now();
    if (this.cachedIsSuperAdmin !== null && (now - this.lastSuperAdminCheckTime < 5000)) {
      return this.cachedIsSuperAdmin;
    }
    
    // Only log when cache is missed (not on every call)
    const shouldLog = !this.cachedIsSuperAdmin; // Only log on first check or when cache expired
    
    if (shouldLog) {
      console.log('========================================');
      console.log('isSuperAdmin() check (cache miss):');
      console.log('  - currentUserRole:', this.currentUserRole);
    }
    
    // First check currentUserRole
    let roleName = this.currentUserRole?.roleName;
    if (shouldLog) {
      console.log('  - roleName from currentUserRole:', roleName);
    }
    
    // If not in currentUserRole, try to get from user object (JWT token)
    if (!roleName) {
      const user = this.authService.getUser();
      if (shouldLog) {
        console.log('  - user object:', user);
      }
      if (user) {
        // Check all possible role field variations, including JWT 'role' field
        roleName = user.roleName || 
                   user.rolename || 
                   user.role_name || 
                   user.userrolename || 
                   user.userRoleName ||
                   (user as any).role || // JWT token uses 'role' field (e.g., "SuperAdmin")
                   user.role; // Also check 'role' field
        if (shouldLog) {
          console.log('  - roleName from user object:', roleName);
          console.log('  - user.role:', (user as any).role);
          console.log('  - All user fields:', Object.keys(user));
        }
      }
    }
    
    // If still not found, try to get from localStorage userData
    if (!roleName) {
      try {
        const userDataStr = localStorage.getItem('userData');
        if (userDataStr) {
          const userData = JSON.parse(userDataStr);
          roleName = userData.roleName || 
                     userData.rolename || 
                     userData.role_name || 
                     userData.userrolename || 
                     userData.userRoleName ||
                     userData.role; // Also check 'role' field
          if (shouldLog) {
            console.log('  - roleName from localStorage:', roleName);
            console.log('  - userData object:', userData);
          }
        }
      } catch (e) {
        if (shouldLog) {
          console.error('  - Error parsing userData:', e);
        }
      }
    }
    
    if (!roleName || roleName.trim() === '') {
      if (shouldLog) {
        console.log('  - ❌ No role name found, returning false (not Super Admin)');
        console.log('========================================');
      }
      this.cachedIsSuperAdmin = false;
      this.lastSuperAdminCheckTime = now;
      return false;
    }
    
    const roleNameLower = roleName.toLowerCase().trim();
    // Check for Super Admin in various formats (case-insensitive)
    // JWT token uses "SuperAdmin" (camelCase), database might use "Super Admin" (title case)
    const isSuperAdmin = roleNameLower === 'super admin' || 
                        roleNameLower === 'superadmin' || 
                        roleNameLower === 'super_admin' ||
                        roleNameLower === 'super-admin' ||
                        roleName === 'SuperAdmin' || // Check original case for camelCase (JWT format)
                        roleName === 'Super Admin' || // Check original case for title case
                        roleNameLower.startsWith('super admin') ||
                        roleNameLower.startsWith('superadmin') ||
                        roleNameLower.includes('super admin') ||
                        roleNameLower.includes('superadmin');
    
    if (shouldLog) {
      console.log('  - Final roleName:', roleName);
      console.log('  - roleNameLower:', roleNameLower);
      console.log('  - isSuperAdmin result:', isSuperAdmin);
      console.log('========================================');
    }
    
    // Cache result
    this.cachedIsSuperAdmin = isSuperAdmin;
    this.lastSuperAdminCheckTime = now;
    return isSuperAdmin;
  }

  // Check if user can manage permissions (Super Admin only)
  canManagePermissions(): boolean {
    return this.isSuperAdmin();
  }

  // Set role name in currentUserRole (used when role name is loaded from other sources)
  setRoleName(roleName: string): void {
    if (!roleName || roleName.trim() === '') {
      return;
    }
    
    if (this.currentUserRole) {
      this.currentUserRole.roleName = roleName;
    } else {
      // Create currentUserRole if it doesn't exist
      const user = this.authService.getUser();
      const userId = user?.userId || user?.userid || user?.user_id || user?.id || 0;
      const roleId = user?.roleId || user?.roleid || user?.role_id || user?.userroleid || user?.userRoleId || 0;
      
      this.currentUserRole = {
        userId: userId,
        roleId: roleId,
        roleName: roleName,
        permissions: []
      };
    }
    
    // Clear Super Admin cache when role name changes
    this.cachedIsSuperAdmin = null;
  }
}

