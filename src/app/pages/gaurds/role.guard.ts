import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { PermissionService } from '../service/permission.service';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private permissionService: PermissionService,
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // First check if user is authenticated
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
      return false;
    }

    if (route.data['superAdminOnly'] === true) {
      if (!this.permissionService.isSuperAdmin()) {
        this.router.navigate(['/pages/dashboard']);
        return false;
      }
      return true;
    }

    // RBAC: Only Super Admin can access Role & Permission screens
    const path = route.routeConfig?.path || '';
    if (path === 'userrole') {
      if (!this.permissionService.canManageRbac()) {
        this.router.navigate(['/pages/dashboard']);
        return false;
      }
      return true;
    }

    // Get required permissions from route data
    const requiredPermission = route.data['permission'] as { resource: string; action: string };
    const requiredRole = route.data['role'] as string | string[];

    // If no permission or role required, allow access
    if (!requiredPermission && !requiredRole) {
      return true;
    }

    // For dashboard, allow access by default (permissions may not be loaded yet)
    if (path === 'dashboard' && !requiredPermission) {
      return true;
    }

    // Get current user role
    const userRole = this.permissionService.getCurrentUserRole();
    
    // If permissions haven't loaded yet and user just logged in, allow access to dashboard
    // This prevents blocking users immediately after login
    if (!userRole && route.routeConfig?.path === 'dashboard') {
      return true;
    }

    // Check role-based access
    if (requiredRole) {
      if (userRole) {
        const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
        const roleName = userRole.roleName?.toLowerCase();
        const hasRole = roles.some(role => role.toLowerCase() === roleName);
        
        if (!hasRole) {
          this.router.navigate(['/pages/dashboard']);
          return false;
        }
      } else {
        return true;
      }
    }

    // Check permission-based access
    if (requiredPermission) {
      // First check if user is Super Admin - Super Admin has access to ALL resources and ALL actions
      const isSuperAdmin = this.permissionService.isSuperAdmin();
      if (isSuperAdmin) {
        return true;
      }

      if (!userRole) {
        return true;
      }

      const hasPermission = this.permissionService.hasPermission(
        requiredPermission.resource,
        requiredPermission.action
      );

      if (!hasPermission) {
        this.router.navigate(['/pages/dashboard']); // Redirect to dashboard
        return false;
      }
    }

    return true;
  }
}

