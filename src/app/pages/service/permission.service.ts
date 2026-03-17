import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { environment } from '../../../environments/environment';
import { RBAC_MANAGE_KEY } from './rbac.constants';
import {
  PermissionDto,
  UserPermissionsResponse,
  toPermissionDto,
  buildByKey,
  normalizeByKeyToLower,
  permissionCodeToKey,
  resourceActionToKey,
} from './permission.dto';

/** Unified permission shape – use PermissionDto for current user permissions. */
export type { PermissionDto, UserPermissionsResponse };

/** Legacy shape for role config / getAllPermissions (backend may still return resource, action, permissioncode). */
export interface Permission {
  id?: number;
  name?: string;
  description?: string;
  resource?: string;
  action?: string;
  field?: string | null;
  permissioncode?: string;
  allowed?: boolean;
  permissionid?: number;
  permissionname?: string;
  key?: string;
  module?: string;
  endpoint?: string;
  httpmethod?: string;
  controller?: string;
  methodName?: string;
  permissionisactive?: boolean;
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
  permissions?: PermissionDto[];
}

@Injectable({
  providedIn: 'root'
})
export class PermissionService {
  private apiUrl = environment.apiUrl;
  private permissionsCache: Map<number, Permission[]> = new Map();
  private currentUserRole: UserRole | null = null;
  /** O(1) map: permission key → true for allowed only (from GET /role/user/permissions or built from permissions). */
  private byKey: Record<string, boolean> = {};
  private permissionResultCache: Map<string, boolean> = new Map();
  private lastPermissionCheckTime: number = 0;
  private isPermissionsLoaded: boolean = false;
  
  // Public getter to check if permissions are loaded
  get permissionsLoaded(): boolean {
    return this.isPermissionsLoaded;
  }
  
  /** Role ID for Super Admin (roleId 1 = full permissions). */
  private static readonly SUPER_ADMIN_ROLE_ID = 1;

  /** Normalize role name for comparison; aligns with backend ("Super Admin" / "SuperAdmin" → "superadmin"). */
  private normalizeRoleName(roleName: string | undefined | null): string {
    if (!roleName || typeof roleName !== 'string') return '';
    return roleName.toLowerCase().trim().replace(/\s+/g, '');
  }

  private cachedIsSuperAdmin: boolean | null = null;
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

  /** Normalize raw permissions to PermissionDto[] and set currentUserRole + byKey. */
  private setPermissionsAndByKey(
    permissions: any[],
    userId: number,
    roleId: number,
    roleName?: string
  ): void {
    const list: PermissionDto[] = [];
    (permissions || []).forEach(p => {
      const dto = toPermissionDto(p);
      if (dto) list.push(dto);
    });
    this.byKey = buildByKey(list);
    this.currentUserRole = {
      userId,
      roleId,
      roleName,
      permissions: list
    };
    this.isPermissionsLoaded = true;
    this.permissionResultCache.clear();
    this.cachedIsSuperAdmin = null;
  }

  // Set permissions directly from login response (unified shape; no byKey in login response)
  setPermissionsFromLogin(permissions: any[], user?: any): void {
    const userId = user?.id || user?.userId || user?.userid || user?.user_id || 0;
    const roleId = user?.roleId || user?.roleid || user?.role_id || user?.userroleid || user?.userRoleId || 0;
    const roleName = user?.role || user?.roleName || user?.rolename || user?.role_name || user?.userrolename || user?.userRoleName;
    this.setPermissionsAndByKey(permissions || [], userId, roleId, roleName);
  }

  // Load permissions for current logged-in user
  // Single endpoint: GET /role/user/permissions (unified shape + byKey). Fallback: load by role or empty.
  loadCurrentUserPermissions(): void {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) return;

    const user = this.authService.getUser();
    if (!user) return;

    const userId = user.userId || user.userid || user.user_id || user.id;
    const roleId = user.roleId || user.roleid || user.role_id || user.userroleid || user.userRoleId;
    const numericRoleId = roleId != null ? Number(roleId) : 0;
    const fallbackRoleName = user.role || user.roleName || user.rolename || user.role_name || user.userrolename || user.userRoleName;

    // SuperAdmin: roleId 1 or role name "Super Admin" – skip API; hasPermission uses isSuperAdmin() for full access
    const roleNorm = this.normalizeRoleName(fallbackRoleName);
    const isSuperAdminByRoleId = numericRoleId === PermissionService.SUPER_ADMIN_ROLE_ID;
    const isSuperAdminByName = roleNorm === 'superadmin' || roleNorm.startsWith('superadmin') || roleNorm.includes('superadmin');
    if (isSuperAdminByRoleId || isSuperAdminByName) {
      this.currentUserRole = { userId, roleId: roleId || 0, roleName: fallbackRoleName || 'SuperAdmin', permissions: [] };
      this.isPermissionsLoaded = true;
      this.byKey = {};
      this.cachedIsSuperAdmin = true;
      this.permissionResultCache.clear();
      return;
    }

    // When role name is missing (e.g. backend doesn't send it for Super Admin), fetch by roleId so sidebar shows User/User Role
    if ((!fallbackRoleName || fallbackRoleName.trim() === '') && roleId) {
      this.getRoleDetails(roleId).subscribe({
        next: (roleDetails: any) => {
          const name = roleDetails?.userrolename || roleDetails?.roleName || roleDetails?.rolename || roleDetails?.name || '';
          const fetchedNorm = this.normalizeRoleName(name);
          const isSuperAdminById = numericRoleId === PermissionService.SUPER_ADMIN_ROLE_ID;
          const isSuperAdminByName = fetchedNorm === 'superadmin' || fetchedNorm.startsWith('superadmin') || fetchedNorm.includes('superadmin');
          if (isSuperAdminById || isSuperAdminByName) {
            this.currentUserRole = { userId, roleId: roleId || 0, roleName: name || 'SuperAdmin', permissions: [] };
            this.isPermissionsLoaded = true;
            this.byKey = {};
            this.cachedIsSuperAdmin = true;
            this.permissionResultCache.clear();
            return;
          }
          // Not Super Admin; continue to load permissions via API
          this.loadCurrentUserPermissionsAfterRoleCheck(userId, roleId, fallbackRoleName || name);
        },
        error: () => this.loadCurrentUserPermissionsAfterRoleCheck(userId, roleId, fallbackRoleName)
      });
      return;
    }

    this.loadCurrentUserPermissionsAfterRoleCheck(userId, roleId, fallbackRoleName);
  }

  private loadCurrentUserPermissionsAfterRoleCheck(userId: number | undefined, roleId: number | undefined, fallbackRoleName: string | undefined): void {
    const applyResponse = (response: any, roleName?: string) => {
      const uid = response?.userId ?? userId;
      const rid = response?.roleId ?? roleId;
      const rn = roleName ?? response?.roleName ?? response?.rolename ?? response?.userrolename ?? fallbackRoleName;
      let list: PermissionDto[] = [];
      const rawPermissions =
        response?.permissions ??
        response?.data?.permissions ??
        (Array.isArray(response?.data) ? response.data : null) ??
        (Array.isArray(response) ? response : null);
      if (Array.isArray(rawPermissions)) {
        rawPermissions.forEach((p: any) => {
          const dto = toPermissionDto(p);
          if (dto) list.push(dto);
        });
      }
      const byKeyFromApi = response?.byKey ?? response?.data?.byKey;
      this.byKey = (byKeyFromApi && typeof byKeyFromApi === 'object')
        ? normalizeByKeyToLower(byKeyFromApi)
        : buildByKey(list);
      this.currentUserRole = { userId: uid, roleId: rid, roleName: rn, permissions: list };
      this.isPermissionsLoaded = true;
      this.permissionResultCache.clear();
      this.cachedIsSuperAdmin = null;
      if (!rn && roleId) {
        this.getRoleDetails(roleId).subscribe({
          next: (roleDetails: any) => {
            if (roleDetails && this.currentUserRole) {
              const name = roleDetails.userrolename || roleDetails.roleName || roleDetails.rolename || roleDetails.name;
              if (name) this.currentUserRole!.roleName = name;
            }
          },
          error: () => {}
        });
      } else if (rn) {
        this.setRoleName(rn);
      }
    };

    // Primary: GET /role/user/permissions (unified response with permissions + byKey)
    this.http.get<UserPermissionsResponse>(`${this.apiUrl}/role/user/permissions`).subscribe({
      next: (response) => {
        const roleName = response?.roleName ?? fallbackRoleName;
        applyResponse(response, roleName);
      },
      error: () => {
        // Fallback: /auth/permissions may not exist on backend; use role-based load or empty
        if (roleId) {
          this.loadPermissionsForRole(userId, roleId, fallbackRoleName);
        } else {
          this.setPermissionsAndByKey([], userId || 0, 0, fallbackRoleName);
        }
      }
    });
  }

  private loadPermissionsForRole(userId: number | undefined, roleId: number, roleName: string | undefined): void {
    this.getRolePermissions(roleId).subscribe({
      next: (permissions) => {
        const raw = Array.isArray(permissions) ? permissions : [];
        const list: PermissionDto[] = [];
        raw.forEach((p: any) => {
          const dto = toPermissionDto(p);
          if (dto) list.push(dto);
        });
        this.byKey = buildByKey(list);
        this.currentUserRole = { userId: userId || 0, roleId, roleName, permissions: list };
        this.isPermissionsLoaded = true;
        this.permissionResultCache.clear();
      },
      error: () => {
        this.byKey = {};
        this.currentUserRole = { userId: userId || 0, roleId, roleName, permissions: [] };
        this.isPermissionsLoaded = true;
        this.permissionResultCache.clear();
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
      this.permissionResultCache.set(cacheKey, false);
      this.lastPermissionCheckTime = now;
      return false;
    }

    // If no permissions, return false
    if (!this.currentUserRole.permissions || this.currentUserRole.permissions.length === 0) {
      // Cache result
      this.permissionResultCache.set(cacheKey, false);
      this.lastPermissionCheckTime = now;
      return false;
    }

    // O(1) check via byKey; treat view/read/list as equivalent for route access
    const key = resourceActionToKey(resource, action, field);
    if (key && this.byKey[key] === true) {
      this.permissionResultCache.set(cacheKey, true);
      this.lastPermissionCheckTime = now;
      return true;
    }
    const actionLower = (action || '').toLowerCase();
    const equivalentActions: string[] = [];
    if (actionLower === 'view' || actionLower === 'read') equivalentActions.push('view', 'read', 'list');
    else if (actionLower === 'list') equivalentActions.push('list', 'view', 'read');
    for (const alt of equivalentActions) {
      if (alt === actionLower) continue;
      const altKey = resourceActionToKey(resource, alt, field);
      if (altKey && this.byKey[altKey] === true) {
        this.permissionResultCache.set(cacheKey, true);
        this.lastPermissionCheckTime = now;
        return true;
      }
    }
    const wildcard = this.byKey['*.*'] === true;
    this.permissionResultCache.set(cacheKey, wildcard);
    this.lastPermissionCheckTime = now;
    return wildcard;
  }

  hasAnyPermissionForResource(resource: string): boolean {
    if (this.isSuperAdmin()) return true;
    if (this.byKey['*.*'] === true) return true;
    const prefix = resource.trim().toLowerCase() + '.';
    return Object.keys(this.byKey).some(k => this.byKey[k] && k.toLowerCase().startsWith(prefix));
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

  // Check by permission key; accepts "account:create" or "account.create".
  // Backend may alias update→edit in byKey; we treat edit and update as equivalent so either key grants access.
  hasPermissionCode(permissionCode: string): boolean {
    if (!permissionCode) return false;
    if (this.isSuperAdmin()) return true;
    const key = permissionCodeToKey(permissionCode);
    if (key && this.byKey[key] === true) return true;
    const suffix = key?.split('.').pop();
    if (suffix === 'edit') {
      const updateKey = key.replace(/\.edit$/, '.update');
      if (this.byKey[updateKey] === true) return true;
    } else if (suffix === 'update') {
      const editKey = key.replace(/\.update$/, '.edit');
      if (this.byKey[editKey] === true) return true;
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

  getCurrentUserRole(): UserRole | null {
    return this.currentUserRole;
  }

  /** O(1) permission checks: byKey['account.create'] === true */
  getByKey(): Record<string, boolean> {
    return { ...this.byKey };
  }

  /** List of permissions in unified shape (for menus, grouping). */
  getPermissions(): PermissionDto[] {
    // Super Admin has no stored permissions array; return full list so dashboard/UI can show "all permissions"
    if (this.isSuperAdmin()) {
      return this.getSuperAdminPermissionDtoList();
    }
    return this.currentUserRole?.permissions ? [...this.currentUserRole.permissions] : [];
  }

  /** Build full PermissionDto list from templates so Super Admin sees all permissions in dashboard/UI. */
  private getSuperAdminPermissionDtoList(): PermissionDto[] {
    const templates = this.getPermissionTemplates();
    const list: PermissionDto[] = [];
    Object.keys(templates).forEach(resourceKey => {
      const perms = templates[resourceKey] || [];
      perms.forEach(p => {
        const dto = toPermissionDto({ ...p, resource: p.resource || resourceKey });
        if (dto) {
          list.push({ ...dto, allowed: true });
        }
      });
    });
    return list;
  }

  /** Group permissions by module (e.g. sidebar). */
  getByModule(): Record<string, PermissionDto[]> {
    const list = this.getPermissions();
    return list.reduce((acc, p) => {
      const m = p.module || 'Other';
      if (!acc[m]) acc[m] = [];
      acc[m].push(p);
      return acc;
    }, {} as Record<string, PermissionDto[]>);
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

  // Get predefined permission templates (all pages/resources - used when backend list is empty)
  getPermissionTemplates(): { [key: string]: Permission[] } {
    const actions = ['view', 'create', 'update', 'delete', 'export'];
    const resources: { key: string; label: string; extraActions?: string[] }[] = [
      { key: 'account', label: 'Account' },
      { key: 'instance', label: 'Instance' },
      { key: 'user', label: 'User' },
      { key: 'userrole', label: 'User Role', extraActions: ['configure'] },
      { key: 'city', label: 'City' },
      { key: 'gst', label: 'GST' },
      { key: 'vat', label: 'VAT' },
      { key: 'product', label: 'Product' },
      { key: 'digicard', label: 'Digicard' },
      { key: 'sales', label: 'Sales' },
      { key: 'customer', label: 'Customer' },
      { key: 'dashboard', label: 'Dashboard' }
    ];
    const out: { [key: string]: Permission[] } = {};
    resources.forEach(({ key, label, extraActions = [] }) => {
      const perms: Permission[] = [...actions, ...extraActions].map(action => ({
        name: `${label} ${action.charAt(0).toUpperCase() + action.slice(1)}`,
        resource: key,
        action
      }));
      out[key] = perms;
    });
    return out;
  }

  clearCache(): void {
    this.permissionsCache.clear();
    this.permissionResultCache.clear();
    this.cachedIsSuperAdmin = null;
    this.byKey = {};
    this.isPermissionsLoaded = false;
    this.loadCurrentUserPermissions();
  }

  reloadPermissions(): void {
    this.currentUserRole = null;
    this.byKey = {};
    this.permissionsCache.clear();
    this.permissionResultCache.clear();
    this.cachedIsSuperAdmin = null;
    this.loadCurrentUserPermissions();
  }

  getCurrentRoleName(): string | undefined {
    const roleName = this.currentUserRole?.roleName;

    if (roleName) {
      return roleName;
    }

    // Try to get from user object
    const user = this.authService.getUser();
    if (user) {
      const userRoleName = user.roleName || user.rolename || user.role_name || user.userrolename || user.userRoleName || user.role;
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
        if (storedRoleName) {
          return storedRoleName;
        }
      }
    } catch (e) {
      // Ignore
    }

    return undefined;
  }

  // Debug method to check what permissions user has (can be called from browser console)
  debugPermissions(): void {
    const perms = this.currentUserRole?.permissions || [];
    console.log('=== PERMISSION DEBUG INFO ===');
    console.log('Current User Role:', this.currentUserRole);
    console.log('Is Super Admin:', this.isSuperAdmin());
    console.log('Permissions Loaded:', this.isPermissionsLoaded);
    console.log('byKey:', this.getByKey());
    console.log('Total Permissions:', perms.length);
    console.log('All Permissions:', perms);
    console.log('Account Permissions:', perms.filter(p => p.key?.startsWith('account.') || p.module === 'Account'));
    console.log('Create Permissions:', perms.filter(p => p.action === 'create' || p.key?.endsWith('.create')));
    console.log('Account:Create Check:', this.hasPermission('account', 'create'));
    console.log('===========================');
  }

  // Check if current user is Super Admin (with caching). Role ID 1 or role name "Super Admin".
  isSuperAdmin(): boolean {
    const now = Date.now();
    if (this.cachedIsSuperAdmin !== null && (now - this.lastSuperAdminCheckTime < 5000)) {
      return this.cachedIsSuperAdmin;
    }

    // Check by role ID first (userrole/roleId 1 = Super Admin)
    let roleId: number | undefined = this.currentUserRole?.roleId != null ? Number(this.currentUserRole.roleId) : undefined;
    if (roleId === undefined) {
      const user = this.authService.getUser();
      if (user) {
        const rid = user.roleId ?? user.roleid ?? user.role_id ?? user.userroleid ?? user.userRoleId;
        if (rid != null) roleId = Number(rid);
      }
    }
    if (roleId === undefined) {
      try {
        const userDataStr = localStorage.getItem('userData');
        if (userDataStr) {
          const userData = JSON.parse(userDataStr);
          const rid = userData.roleId ?? userData.roleid ?? userData.userroleid ?? userData.userRoleId;
          if (rid != null) roleId = Number(rid);
        }
      } catch {
        // ignore
      }
    }
    if (roleId === PermissionService.SUPER_ADMIN_ROLE_ID) {
      this.cachedIsSuperAdmin = true;
      this.lastSuperAdminCheckTime = now;
      return true;
    }

    let roleName = this.currentUserRole?.roleName;
    if (!roleName) {
      const user = this.authService.getUser();
      if (user) {
        roleName = user.roleName || user.rolename || user.role_name || user.userrolename ||
                   user.userRoleName || (user as any).role || user.role;
      }
    }
    if (!roleName) {
      try {
        const userDataStr = localStorage.getItem('userData');
        if (userDataStr) {
          const userData = JSON.parse(userDataStr);
          roleName = userData.roleName || userData.rolename || userData.role_name ||
                     userData.userrolename || userData.userRoleName || userData.role;
        }
      } catch {
        // ignore
      }
    }

    const normalized = this.normalizeRoleName(roleName);
    const isSuperAdmin = normalized === 'superadmin' ||
                        normalized === 'super_admin' ||
                        normalized === 'super-admin' ||
                        normalized.startsWith('superadmin') ||
                        normalized.includes('superadmin');

    this.cachedIsSuperAdmin = isSuperAdmin;
    this.lastSuperAdminCheckTime = now;
    return isSuperAdmin;
  }

  // Check if user can manage permissions (Super Admin only)
  canManagePermissions(): boolean {
    return this.isSuperAdmin();
  }

  /**
   * Only Super Admin (or user with RBAC.MANAGE) can access Role & Permission screens/APIs.
   * Admin/Manager/User cannot access Role & Permission.
   */
  canManageRbac(): boolean {
    return this.isSuperAdmin() || this.hasPermissionCode(RBAC_MANAGE_KEY);
  }

  // Set role name in currentUserRole (used when role name is loaded from other sources)
  // IMPORTANT: Never create currentUserRole with empty permissions - it would overwrite
  // permissions loaded from login. Only update roleName when currentUserRole already exists,
  // or when we can restore permissions from loginPermissions cache.
  setRoleName(roleName: string): void {
    if (!roleName || roleName.trim() === '') {
      return;
    }

    if (this.currentUserRole) {
      this.currentUserRole.roleName = roleName;
      this.cachedIsSuperAdmin = null;
      return;
    }

    // currentUserRole is null - do NOT create with permissions: [] as that would block menus.
    // Try to restore from loginPermissions cache first (in case constructor hasn't run or cache was used)
    const loginPermissions = localStorage.getItem('loginPermissions');
    if (loginPermissions) {
      try {
        const data = JSON.parse(loginPermissions);
        if (data.permissions && Array.isArray(data.permissions) && data.permissions.length > 0 && data.user) {
          this.setPermissionsFromLogin(data.permissions, data.user);
          const role = this.currentUserRole as UserRole | null;
          if (role) {
            role.roleName = roleName;
          }
          this.cachedIsSuperAdmin = null;
          return;
        }
      } catch {
        // ignore parse errors
      }
    }

    // No permissions available - do not create empty role. Let loadCurrentUserPermissions handle it.
    this.cachedIsSuperAdmin = null;
  }
}

