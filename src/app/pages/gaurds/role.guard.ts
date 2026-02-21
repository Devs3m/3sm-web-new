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

    // Get required permissions from route data
    const requiredPermission = route.data['permission'] as { resource: string; action: string };
    const requiredRole = route.data['role'] as string | string[];

    // If no permission or role required, allow access
    if (!requiredPermission && !requiredRole) {
      return true;
    }

    // For dashboard, allow access by default (permissions may not be loaded yet)
    if (route.routeConfig?.path === 'dashboard' && !requiredPermission) {
      return true;
    }

    // Get current user role
    const userRole = this.permissionService.getCurrentUserRole();
    
    // If permissions haven't loaded yet and user just logged in, allow access to dashboard
    // This prevents blocking users immediately after login
    if (!userRole && route.routeConfig?.path === 'dashboard') {
      console.log('Permissions not loaded yet, allowing dashboard access');
      return true;
    }

    // Check role-based access
    if (requiredRole) {
      if (userRole) {
        const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
        const roleName = userRole.roleName?.toLowerCase();
        const hasRole = roles.some(role => role.toLowerCase() === roleName);
        
        if (!hasRole) {
          console.warn(`Access denied: User does not have required role. Required: ${roles.join(', ')}, User has: ${roleName}`);
          this.router.navigate(['/pages/dashboard']); // Redirect to dashboard
          return false;
        }
      } else {
        // If no role loaded yet, allow access (permissions still loading)
        console.log('User role not loaded yet, allowing access');
        return true;
      }
    }

    // Check permission-based access
    if (requiredPermission) {
      // First check if user is Super Admin - Super Admin has access to ALL resources and ALL actions
      const isSuperAdmin = this.permissionService.isSuperAdmin();
      if (isSuperAdmin) {
        console.log(`✅ Super Admin access granted to ${requiredPermission.resource}:${requiredPermission.action}`);
        return true; // Super Admin has full access
      }

      // If permissions haven't loaded yet, allow access to prevent blocking after login
      if (!userRole) {
        console.log('Permissions not loaded yet, allowing access');
        return true;
      }

      const hasPermission = this.permissionService.hasPermission(
        requiredPermission.resource,
        requiredPermission.action
      );

      if (!hasPermission) {
        console.warn(`Access denied: User does not have permission for ${requiredPermission.resource}:${requiredPermission.action}`);
        this.router.navigate(['/pages/dashboard']); // Redirect to dashboard
        return false;
      }
    }

    return true;
  }
}

