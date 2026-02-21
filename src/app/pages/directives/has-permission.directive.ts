import { Directive, Input, OnInit, OnDestroy, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionService } from '../service/permission.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appHasPermission]'
})
export class HasPermissionDirective implements OnInit, OnDestroy {
  private permissionSubscription?: Subscription;
  private currentPermission: string = '';
  private checkInterval?: any;

  @Input() set appHasPermission(permission: string) {
    this.currentPermission = permission;
    this.updateView();
  }

  @Input() appHasPermissionResource?: string;
  @Input() appHasPermissionAction?: string;
  @Input() appHasPermissionField?: string;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.updateView();
    
    // Check if permissions are already loaded
    const currentUserRole = this.permissionService.getCurrentUserRole();
    if (currentUserRole && currentUserRole.permissions && currentUserRole.permissions.length > 0) {
      // Permissions already loaded, no need to poll
      return;
    }
    
    // Re-check permissions after a delay to account for async loading
    // Check less frequently and stop once permissions are loaded
    let checkCount = 0;
    const maxChecks = 15; // Increased to 15 checks (15 seconds total)
    this.checkInterval = setInterval(() => {
      checkCount++;
      
      // Check if permissions are now loaded
      const userRole = this.permissionService.getCurrentUserRole();
      if (userRole && userRole.permissions && userRole.permissions.length > 0) {
        // Permissions loaded, update view once and stop checking
        this.updateView();
        if (this.checkInterval) {
          clearInterval(this.checkInterval);
        }
        return;
      }
      
      // Update view every check to catch when permissions load
      const hadAccess = this.viewContainer.length > 0;
      this.updateView();
      const hasAccess = this.viewContainer.length > 0;
      
      // Only log when access actually changes
      if (hasAccess !== hadAccess) {
        console.log(`HasPermissionDirective: Permission "${this.currentPermission}" access changed: ${hadAccess} -> ${hasAccess}`);
      }
      
      // Log only if still waiting after 10 checks (warnings only)
      if (checkCount >= 10 && checkCount % 5 === 0) {
        console.warn(`HasPermissionDirective: Still waiting for permissions (check ${checkCount}/${maxChecks}) for "${this.currentPermission}"`);
      }
      
      if (checkCount >= maxChecks) {
        if (this.checkInterval) {
          clearInterval(this.checkInterval);
        }
      }
    }, 1000); // Check every 1 second
  }

  ngOnDestroy(): void {
    if (this.permissionSubscription) {
      this.permissionSubscription.unsubscribe();
    }
    if (this.checkInterval) {
      clearInterval(this.checkInterval);
    }
  }

  private updateView(): void {
    let hasAccess = false;

    // If permission string is provided (format: "resource:action" or "resource:action:field" or full permission code)
    if (this.currentPermission) {
      // First try checking as a full permission code (e.g., "permission:settings:access")
      // This handles cases where the backend returns permissioncode field
      hasAccess = this.permissionService.hasPermissionCode(this.currentPermission);
      
      // If that didn't work, try parsing as resource:action:field
      if (!hasAccess) {
        const parts = this.currentPermission.split(':');
        if (parts.length >= 2) {
          const resource = parts[0];
          const action = parts[1] || 'read';
          const field = parts[2];

          hasAccess = this.permissionService.hasPermission(resource, action, field);
        }
      }
      
      // Debug logging only when permission is denied (reduced logging)
      // Uncomment below for detailed debugging if needed
      // if (!hasAccess) {
      //   const userRole = this.permissionService.getCurrentUserRole();
      //   const permissions = userRole?.permissions || [];
      //   console.log(`HasPermissionDirective: Access DENIED for "${this.currentPermission}"`);
      //   console.log(`  - User Role: ${userRole?.roleName || 'none'}`);
      //   console.log(`  - Total Permissions: ${permissions.length}`);
      // }
    }
    // If separate inputs are provided
    else if (this.appHasPermissionResource && this.appHasPermissionAction) {
      hasAccess = this.permissionService.canAccessField(
        this.appHasPermissionResource,
        this.appHasPermissionField || '',
        this.appHasPermissionAction
      );
    }

    // Show or hide the element
    if (hasAccess) {
      if (this.viewContainer.length === 0) {
        this.viewContainer.createEmbeddedView(this.templateRef);
      }
    } else {
      this.viewContainer.clear();
    }
  }
}



