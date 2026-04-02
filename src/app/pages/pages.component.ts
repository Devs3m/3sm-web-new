import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './service/auth.service';
import { UserService } from './service/user.service';
import { PermissionService } from './service/permission.service';
import { InstanceService } from './service/instance.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  title = '3sm-web';
  shouldRun: any;
  hideNavForVCard: boolean = false;
  loggedInUser: any = null;
  userName: string = '';
  userEmail: string = '';
  userRole: string = '';
  /** 'sales' | 'inventory_sales' | 'ecommerce' | 'all' from current instance; null = loading or super admin (show both) */
  instanceSalestype: 'sales' | 'inventory_sales' | 'ecommerce' | 'all' | null = null;

  constructor(
    public authService: AuthService,
    private userService: UserService,
    public permissionService: PermissionService,
    private instanceService: InstanceService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {} // Inject AuthService here

  ngOnInit(): void {
    this.updateLayoutVisibility(this.router.url);
    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => this.updateLayoutVisibility(event.urlAfterRedirects));

    this.getLoggedInUser();
    this.fetchUserDetailsFromAPI();
    this.getUserRole();
    this.loadInstanceSalestype();
    
    // Wait for permissions to load before showing menus
    // Check periodically for permissions to be loaded
    let permissionCheckCount = 0;
    const maxPermissionChecks = 30; // Check for up to 15 seconds (30 * 500ms)
    const checkPermissionsInterval = setInterval(() => {
      permissionCheckCount++;
      const isLoaded = this.permissionService.permissionsLoaded;
      const currentRole = this.permissionService.getCurrentUserRole();
      const hasPermissions = currentRole?.permissions && currentRole.permissions.length > 0;
      const isSuperAdmin = this.permissionService.isSuperAdmin();
      
      if (isLoaded && (hasPermissions || isSuperAdmin)) {
        console.log('✅ Permissions loaded, menus will update');
        console.log('  - Permissions count:', currentRole?.permissions?.length || 0);
        console.log('  - Available resources:', currentRole?.permissions ? [...new Set(currentRole.permissions.map(p => p.key?.split('.')[0] || p.module?.toLowerCase()).filter(Boolean))] : []);
        if (isSuperAdmin) this.instanceSalestype = null;
        this.cdr.detectChanges();
        clearInterval(checkPermissionsInterval);
      } else if (permissionCheckCount >= maxPermissionChecks) {
        console.warn('⚠️ Permissions not loaded after max checks');
        console.warn('  - isLoaded:', isLoaded);
        console.warn('  - hasPermissions:', hasPermissions);
        console.warn('  - currentRole:', currentRole);
        // Fallback: try to restore from loginPermissions in localStorage (stored by AuthService during login)
        const loginPermissions = localStorage.getItem('loginPermissions');
        if (loginPermissions && !hasPermissions) {
          try {
            const data = JSON.parse(loginPermissions);
            if (data?.permissions && Array.isArray(data.permissions) && data.permissions.length > 0) {
              this.permissionService.setPermissionsFromLogin(data.permissions, data.user);
              localStorage.removeItem('loginPermissions');
              this.cdr.detectChanges();
              console.log('✅ Restored permissions from loginPermissions cache');
            }
          } catch (e) {
            console.warn('Error parsing loginPermissions fallback:', e);
          }
        }
        clearInterval(checkPermissionsInterval);
      }
    }, 500);
    
    // Check periodically for role name (since it loads asynchronously from API)
    let checkCount = 0;
    const maxChecks = 20; // Check for up to 10 seconds (20 * 500ms)
    const checkRoleInterval = setInterval(() => {
      checkCount++;
      const roleName = this.permissionService.getCurrentRoleName();
      if (roleName && roleName.trim() !== '') {
        this.userRole = roleName;
        // Ensure permission service has the role name
        this.permissionService.setRoleName(roleName);
        clearInterval(checkRoleInterval);
      } else if (checkCount >= maxChecks) {
        // After max checks, try fallback
        this.getUserRoleFallback();
        clearInterval(checkRoleInterval);
      }
    }, 500);
  }

  private updateLayoutVisibility(url: string): void {
    this.hideNavForVCard = /^\/pages\/digicard\/card(\/.*)?$/.test(url);
  }

  /** Fetch current instance salestype to control which sales menu (Service Sales vs Product Sales) to show */
  loadInstanceSalestype(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const instanceId = this.authService.getInstanceId();
    if (isSuperAdmin || !instanceId) {
      this.instanceSalestype = null;
      return;
    }
    this.instanceService.getDetailsById(instanceId).subscribe({
      next: (instance) => {
        if (this.permissionService.isSuperAdmin()) return;
        const st = instance?.salestype;
        this.instanceSalestype =
          st === 'inventory_sales'
            ? 'inventory_sales'
            : st === 'ecommerce'
              ? 'ecommerce'
              : st === 'all'
                ? 'all'
                : 'sales';
        this.cdr.detectChanges();
      },
      error: () => {
        if (this.permissionService.isSuperAdmin()) return;
        this.instanceSalestype = 'sales';
        this.cdr.detectChanges();
      }
    });
  }

  getUserRole(): void {
    // Try to get role name from permission service first
    const roleName = this.permissionService.getCurrentRoleName();

    if (roleName && roleName.trim() !== '') {
      this.userRole = roleName;
      return;
    }
    
    // If not available yet, try fallback
    this.getUserRoleFallback();
  }

  getUserRoleFallback(): void {
    console.log('getUserRoleFallback called');
    // Fallback: try to get from user object
    const user = this.authService.getUser();
    console.log('User object from auth service:', user);
    
    if (user) {
      const roleName = user.role ||
                      user.roleName || 
                      user.rolename || 
                      user.role_name || 
                      user.userrolename || 
                      user.userRoleName || 
                      '';
      console.log('Role name from user object:', roleName);
      
      if (roleName && roleName.trim() !== '') {
        this.userRole = roleName;
        console.log('✅ User role set from user object:', this.userRole);
      } else if (user.roleId || user.roleid || user.userroleid || user.userRoleId) {
        // If we have roleId but not role name, fetch it
        const roleId = user.roleId || user.roleid || user.userroleid || user.userRoleId;
        console.log('Found roleId, fetching role name:', roleId);
        this.fetchRoleNameFromRoleId(roleId);
      }
    }
  }

  getLoggedInUser(): void {
    this.loggedInUser = this.authService.getUser();

    // Get email from auth service (handles fallback to localStorage)
    this.userEmail = this.authService.getUserEmail();
    
    if (this.loggedInUser) {
      // Try different possible property names for user name
      this.userName = this.loggedInUser.name || 
                     this.loggedInUser.username || 
                     this.loggedInUser.userName || 
                     this.loggedInUser.fullName ||
                     this.loggedInUser.firstName ||
                     (this.loggedInUser.firstName && this.loggedInUser.lastName ? 
                       `${this.loggedInUser.firstName} ${this.loggedInUser.lastName}` : '') ||
                     '';
      
      // Get email if not already set
      if (!this.userEmail) {
        this.userEmail = this.loggedInUser.email || 
                        this.loggedInUser.userEmail || 
                        this.loggedInUser.useremail ||
                        '';
      }
    } else {
      console.warn('No user data found');
    }
  }

  // Fetch user details from API using email
  fetchUserDetailsFromAPI(): void {
    const email = this.authService.getUserEmail();
    if (!email) {
      console.warn('No email found to fetch user details');
      return;
    }

    // Try to get user details from user list API
    this.userService.getUserDetails().subscribe({
      next: (users: any[]) => {
        // Find user by email
        const user = users.find((u: any) => 
          u.useremail && u.useremail.toLowerCase() === email.toLowerCase() ||
          u.email && u.email.toLowerCase() === email.toLowerCase()
        );
        
        if (user) {
          // Extract user name from API response - try multiple property name variations
          this.userName = user.username || 
                         user.name || 
                         user.fullName ||
                         user.fullname ||
                         user.userName ||
                         user.user_name ||
                         (user.firstname && user.lastname ? `${user.firstname} ${user.lastname}` : '') ||
                         (user.firstName && user.lastName ? `${user.firstName} ${user.lastName}` : '') ||
                         user.firstname ||
                         user.firstName ||
                         user.lastname ||
                         user.lastName ||
                         '';
          
          // Update email if found in API
          if (user.useremail || user.email) {
            this.userEmail = user.useremail || user.email;
          }
          
          // Try to get role ID from user object - check multiple field name variations
          const roleId = user.userroleid || 
                        user.userRoleId || 
                        user.user_role_id ||
                        user.roleId || 
                        user.roleid || 
                        user.role_id ||
                        user.userroleId ||
                        user.userRoleID;
          
          // Try to get role name from user object - check multiple field name variations
          const roleName = user.userrole || 
                          user.userRole ||
                          user.roleName || 
                          user.rolename || 
                          user.role_name ||
                          user.userrolename ||
                          user.userRoleName ||
                          user.user_role_name;
          
          if (roleId) {
            // Fetch role name using roleId
            console.log('User roleId from API:', roleId);
            console.log('RoleId type:', typeof roleId);
            // Ensure roleId is a number
            const numericRoleId = typeof roleId === 'string' ? parseInt(roleId, 10) : roleId;
            if (!isNaN(numericRoleId) && numericRoleId > 0) {
              this.fetchRoleNameFromRoleId(numericRoleId);
            } else {
              console.warn('Invalid roleId:', roleId);
            }
          } else if (roleName) {
            // If role name is directly in user object
            this.userRole = roleName;
          } else {
            console.warn('No roleId or roleName found in user object');
            console.log('Available user properties:', Object.keys(user));
            console.log('Full user object:', user);
          }

        } else {
          console.warn('User not found in API with email:', email);
        }
      },
      error: (err) => {
        console.error('Error fetching user details from API:', err);
      }
    });
  }

  // Fetch role name from roleId
  fetchRoleNameFromRoleId(roleId: number): void {
    if (!roleId) {
      return;
    }
    // Use permission service to get role details
    this.permissionService.getRoleDetails(roleId).subscribe({
      next: (roleDetails: any) => {
        if (roleDetails) {
          const roleName = roleDetails.userrolename || 
                          roleDetails.roleName || 
                          roleDetails.rolename || 
                          roleDetails.name ||
                          roleDetails.userRoleName;
          if (roleName && roleName.trim() !== '') {
            this.userRole = roleName;
            console.log('✅ Role name fetched from API:', this.userRole);
          }
        }
      },
      error: (err) => {
        console.warn('Could not fetch role name from roleId:', roleId, err);
        // Try fallback
        this.getUserRoleFallback();
      }
    });
  }

  // Update permission service with role name
  updatePermissionServiceRoleName(roleName: string): void {
    if (!roleName || roleName.trim() === '') {
      return;
    }
    
    // Use the permission service's setRoleName method
    this.permissionService.setRoleName(roleName);
    const permissions = this.permissionService.getCurrentUserRole()?.permissions ?? [];
    console.log('Permission details:', permissions);
  }

  getUserDisplayName(): string {
    // First try to get name
    if (this.userName && this.userName.trim() !== '' && this.userName !== 'User') {
      return this.userName;
    }
    // Then try email (most reliable since it's stored during login)
    if (this.userEmail && this.userEmail.trim() !== '') {
      return this.userEmail;
    }
    // Fallback to showing any available property from user object
    if (this.loggedInUser) {
      // Try to find any string property that might be a name
      for (const key in this.loggedInUser) {
        if (typeof this.loggedInUser[key] === 'string' && 
            this.loggedInUser[key].trim() !== '' &&
            key !== 'iat' && key !== 'exp' && key !== 'sub') {
          return this.loggedInUser[key];
        }
      }
    }
    return 'User';
  }
}
