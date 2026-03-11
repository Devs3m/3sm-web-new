import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import{ UserroleService} from'../service/userrole.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { PermissionService, Permission } from '../service/permission.service';
import { AuthService } from '../service/auth.service';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent implements OnInit {



isFormOpen = false; // Controls the slider visibility
isPermissionConfigOpen = false; // Controls permission configuration panel
isEditMode = false;
userrole!:any[];
userroleForm!: FormGroup;
dropdownOptions:any[]=[];
selectedItem: any;
dropdownItems: any[] =[];  
data: { id: number; companyName: string; city: string; isActive: boolean }[] = [];
apiData:any[] =[];
longText: any;
totalUserrole:number=0;
activeUserrole:number=0;
deactiveUserrole:number=0;
selectedRoleId: number = 0;
selectedRoleName: string = '';
availablePermissions: Permission[] = [];
rolePermissions: Permission[] = [];
permissionTemplates: { [key: string]: Permission[] } = {};
permissionResourceKeys: string[] = []; // Array to hold resource keys for template
allAvailablePermissions: Permission[] = []; // All permissions from backend with IDs
permissionLookup: Map<string, Permission> = new Map(); // Lookup map: "resource:action" -> Permission with ID
 
constructor(
  private userroleservice: UserroleService,
  private fromBuilder: FormBuilder,
  private http: HttpClient,
  public permissionService: PermissionService, // Public so it can be accessed in template
  private authService: AuthService,
  private cdr: ChangeDetectorRef // For forcing change detection
) {}

  
  ngOnInit(): void {
    this.userroleForm=this.fromBuilder.group({
    "userrolename":["", Validators.required],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "userroleisactive":["true", Validators.required],
    "createdby":[1],
    "updatedby":[1],
    "userroleid": [0],
    "accountid": [this.authService.getAccountId() ?? 1],
    "instanceid": [this.authService.getInstanceId() ?? 1]
    })
    this.getUserroleDetails();
    this.getDropDownValue();
    this.loadPermissionTemplates();
    // Audit/compliance: verify RBAC access via backend (GET /role/permissions/userrole-check)
    // Pass current user's instanceId so instance-scoped Super Admins can access RBAC
    const instanceId = this.authService.getUser()?.instanceid ?? this.authService.getUser()?.instanceId ?? undefined;
    this.userroleservice.getUserRoleCheck(instanceId).subscribe({
      next: () => {},
      error: () => { /* endpoint may not exist yet */ }
    });
    {
      // Fetch data from API
      this.http.get<{ totalUserrole: number;activeUserrole: number; deactiveUserrole: number}>(`${environment.apiUrl}/userrole/counts`)
        .subscribe(response => {
          this.totalUserrole = response.totalUserrole;
          this.activeUserrole = response.activeUserrole;
          this.deactiveUserrole = response.deactiveUserrole;
        });
       
    }

  }

  loadPermissionTemplates(): void {
    this.permissionTemplates = this.permissionService.getPermissionTemplates();
    // Flatten all permissions into availablePermissions
    this.availablePermissions = Object.values(this.permissionTemplates).flat();
    // Update the resource keys array for template use
    this.permissionResourceKeys = Object.keys(this.permissionTemplates);
  }
  onSubmit():void{
    if (!this.userroleForm.valid) { return; }
  }
  createUserrole():void{
    if (this.isEditMode) {
      this.userroleservice.updateUserrole(this.userroleForm.value).subscribe({
        next: () => {
          this.getUserroleDetails();
          this.restuserroleForm();
        },
        error: () => {}
      });
    } else {
      this.userroleservice.addUserrole(this.userroleForm.value).subscribe({
        next: () => {
          this.getUserroleDetails();
          this.restuserroleForm();
        },
        error: () => {}
      });
    }
  }
  getUserroleDetails():void {
    this.userroleservice.getUserroleDetails().subscribe({
      next:(apidata:any) => {
        this.userrole=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        this.userroleservice.getUserroleDetails().subscribe((data) => {
          this.apiData=data;
        });
      }
    });
  }
  getDropDownValue (){
    this.userroleservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: () => {}
    });
   }

  editItem(item: any): void {
    this.isFormOpen = true;
    this.isEditMode = true;
    this.userroleForm.patchValue({
      ...item,
      userroleisactive: item.userroleisactive ? 'true' : 'false'
    });
  }

  configurePermissions(item: any): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const hasPermissionSettingsAccess = this.permissionService.hasPermissionCode('permission:settings:access');
    const hasConfigurePermission = this.permissionService.hasPermission('userrole', 'configure');
    if (!isSuperAdmin && !hasPermissionSettingsAccess && !hasConfigurePermission) {
      alert('Access denied. Only Super Admin or users with permission:settings:access can configure permissions.');
      return;
    }

    this.selectedRoleId = item.userroleid;
    this.selectedRoleName = item.userrolename;
    this.rolePermissions = [];
    this.isPermissionConfigOpen = true;
    this.cdr.detectChanges();
    setTimeout(() => this.cdr.detectChanges(), 100);
    
    // First, load all available permissions from backend (these have IDs)
    this.loadAllAvailablePermissions(() => {
      // After permissions are loaded, load existing role permissions
      this.loadRolePermissions(item.userroleid);
    });
  }

  // Load all available permissions from backend (these have IDs)
  // Backend returns permissions in frontend-friendly format: { id, resource, action, field, ... }
  // The backend automatically parses permissioncode (e.g., "account:create:name") into resource, action, field
  loadAllAvailablePermissions(callback?: () => void): void {
    this.permissionService.getAllPermissions().subscribe({
      next: (response: any) => {
        let permissions: Permission[] = [];
        if (Array.isArray(response)) {
          permissions = response;
        } else if (response && Array.isArray(response.permissions)) {
          permissions = response.permissions;
        } else if (response && response.success && Array.isArray(response.data)) {
          permissions = response.data;
        }
        this.allAvailablePermissions = permissions;
        
        // Create lookup map: "resource:action:field" -> Permission with ID
        this.permissionLookup.clear();
        permissions.forEach(p => {
          const key = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
          this.permissionLookup.set(key, p);
        });
        
        if (permissions.length > 0) {
          // Build permission templates from backend list (all pages) grouped by resource
          const byResource: { [key: string]: Permission[] } = {};
          permissions.forEach(p => {
            const r = (p.resource || 'other').toLowerCase();
            if (!byResource[r]) byResource[r] = [];
            byResource[r].push({
              id: p.id,
              name: p.name || `${p.resource} ${p.action}`,
              resource: p.resource,
              action: p.action,
              field: p.field,
              description: p.description
            });
          });
          this.permissionTemplates = byResource;
          this.permissionResourceKeys = Object.keys(byResource).sort();
        } else {
          this.loadPermissionTemplates();
        }
        if (callback) {
          callback();
        }
      },
      error: () => {
        this.loadPermissionTemplates();
        if (callback) {
          callback();
        }
      }
    });
  }

  loadRolePermissions(roleId: number): void {
    this.userroleservice.getRolePermissions(roleId).subscribe({
      next: (response: any) => {
        let permissionsArray: any[] = [];
        
        // Handle different response formats
        if (Array.isArray(response)) {
          permissionsArray = response;
        } else if (response && typeof response === 'object' && 'permissions' in response) {
          permissionsArray = response.permissions || [];
        }
        
        // Map permissions - backend returns in frontend-friendly format with resource, action, field
        // Backend automatically parses permissioncode into these fields via transformPermissionToFrontendFormat()
        this.rolePermissions = permissionsArray.map((p: any) => {
          // Backend already provides resource, action, field in frontend-friendly format
          // If permission doesn't have ID, try to find it from lookup using resource:action:field
          let permissionId = p.id || p.permissionid || p.permissionId;
          if (!permissionId && p.resource && p.action) {
            const lookupKey = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
            const foundPermission = this.permissionLookup.get(lookupKey);
            if (foundPermission && foundPermission.id) {
              permissionId = foundPermission.id;
            }
          }
          
          // Return permission in frontend format (already in this format from backend)
          return {
            id: permissionId,
            name: p.name || `${p.resource} ${p.action}`,
            resource: p.resource, // Already parsed from permissioncode by backend
            action: p.action, // Already parsed from permissioncode by backend
            field: p.field, // Already parsed from permissioncode by backend
            description: p.description
          };
        });
        this.cdr.detectChanges();
      },
      error: (err) => {
        if (err.status === 403) {
          alert('Access denied. Only Super Admin can view role permissions.');
          this.closePermissionConfig();
          return;
        }
        this.rolePermissions = [];
      }
    });
  }

  togglePermission(permission: Permission): void {
    const index = this.rolePermissions.findIndex(p => {
      const resourceMatch = p.resource === permission.resource;
      const actionMatch = p.action === permission.action;
      const fieldMatch = !permission.field || !p.field || p.field === permission.field;
      return resourceMatch && actionMatch && fieldMatch;
    });

    if (index >= 0) {
      this.rolePermissions.splice(index, 1);
    } else {
      const lookupKey = `${permission.resource}:${permission.action}${permission.field ? `:${permission.field}` : ''}`;
      const permissionWithId = this.permissionLookup.get(lookupKey);
      const newPermission: Permission = {
        id: permissionWithId?.id || permission.id,
        name: permission.name || `${permission.resource} ${permission.action}`,
        resource: permission.resource,
        action: permission.action,
        field: permission.field,
        description: permission.description || permissionWithId?.description
      };
      this.rolePermissions.push(newPermission);
    }
  }

  hasPermission(permission: Permission): boolean {
    const hasPerm = this.rolePermissions.some(p => {
      const resourceMatch = p.resource === permission.resource;
      const actionMatch = p.action === permission.action;
      const fieldMatch = !permission.field || !p.field || p.field === permission.field;
      return resourceMatch && actionMatch && fieldMatch;
    });
    return hasPerm;
  }

  saveRolePermissions(): void {
    // Check if user is Super Admin
    if (!this.permissionService.isSuperAdmin()) {
      alert('Access denied. Only Super Admin can assign permissions to roles.');
      return;
    }

    if (!this.selectedRoleId || this.selectedRoleId <= 0) {
      alert('Invalid role selected. Role ID must be a positive number.');
      return;
    }

    const roleId = typeof this.selectedRoleId === 'number' ? this.selectedRoleId : Number(this.selectedRoleId);
    if (isNaN(roleId) || roleId <= 0) {
      alert('Invalid role ID. Please select a valid role.');
      return;
    }

    // Check if this is the Super Admin role
    const roleNameLower = (this.selectedRoleName || '').toLowerCase().trim();
    const isSuperAdminRole = roleNameLower === 'super admin' || 
                            roleNameLower === 'superadmin' || 
                            roleNameLower === 'super_admin' ||
                            roleNameLower === 'super-admin' ||
                            roleNameLower.startsWith('super admin') ||
                            roleNameLower.startsWith('superadmin') ||
                            roleNameLower.includes('super admin') ||
                            roleNameLower.includes('superadmin');

    let permissionIds: number[];

    if (isSuperAdminRole) {
      permissionIds = [1];
    } else {
      // Extract permission IDs as numbers - backend expects { permissionid: Number }
      // Try multiple field name variations and ensure we only get numbers
      permissionIds = this.rolePermissions
        .map(p => {
          // Try to get ID from various fields
          let id: any = p.id || (p as any).permissionid || (p as any).permissionId || (p as any).permission_id;
          
          // If ID is still not found, try to get from lookup map
          if ((id === undefined || id === null) && p.resource && p.action) {
            const lookupKey = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
            const foundPermission = this.permissionLookup.get(lookupKey);
            if (foundPermission && foundPermission.id) {
              id = foundPermission.id;
            }
          }
          if (id === undefined || id === null) {
            return null;
          }
          if (typeof id === 'object') {
            if ((id as any).id !== undefined) {
              id = (id as any).id;
            } else {
              return null;
            }
          }
          
          // Convert to number, handling string numbers
          const numId = typeof id === 'number' ? id : (typeof id === 'string' ? parseInt(id, 10) : null);
          
          if (numId === null || isNaN(numId) || numId <= 0) {
            return null;
          }
          
          return numId;
        })
        .filter((id): id is number => id !== null && !isNaN(id) && id > 0);
    }

    if (permissionIds.length === 0) {
      alert(`Error: No valid permission IDs found for ${this.rolePermissions.length} selected permissions.\n\n` +
            `The backend permissions list may not contain these permissions, or they may need to be created first.\n\n` +
            `Please check the browser console for details.`);
      return;
    }

    // Send permission IDs in the format expected by backend
    // Backend expects array of objects with permissionid property: [{ permissionid: 1 }, { permissionid: 2 }]
    // The roleId is sent in the URL path, not in the body
    const permissionsToSave = permissionIds.map(permissionId => {
      if (typeof permissionId === 'object') {
        throw new Error(`Invalid permission ID: permissionId must be a number, got object`);
      }
      const numId = typeof permissionId === 'number' ? permissionId : Number(permissionId);
      if (isNaN(numId) || numId <= 0) {
        throw new Error(`Invalid permission ID: ${permissionId} (must be a positive number)`);
      }
      // Return object with permissionid property (backend expects this format)
      return {
        permissionid: numId
      };
    });

    this.userroleservice.saveRolePermissions(roleId, permissionsToSave).subscribe({
      next: () => {
        alert('Permissions saved successfully!');
        this.closePermissionConfig();
        this.permissionService.clearCache();
      },
      error: (err: any) => {
        const errorMessage = err.error?.message || err.error || err.message || 'Unknown error';
        alert(`Error saving permissions: ${errorMessage}`);
      }
    });
  }

  closePermissionConfig(): void {
    this.isPermissionConfigOpen = false;
    this.selectedRoleId = 0;
    this.selectedRoleName = '';
    this.rolePermissions = [];
  }

  // Helper method to check if configure button should be visible
  canConfigurePermissions(): boolean {
    return this.permissionService.isSuperAdmin();
  }

  canShowConfigureButton(): boolean {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const hasPermissionSettingsAccess = this.permissionService.hasPermissionCode('permission:settings:access');
    const hasConfigurePermission = this.permissionService.hasPermission('userrole', 'configure');
    return isSuperAdmin || hasPermissionSettingsAccess || hasConfigurePermission;
  }

  selectAllPermissions(resource: string): void {
    const resourcePermissions = this.permissionTemplates[resource] || [];
    resourcePermissions.forEach(permission => {
      if (!this.hasPermission(permission)) {
        this.rolePermissions.push({ ...permission });
      }
    });
  }

  deselectAllPermissions(resource: string): void {
    const resourcePermissions = this.permissionTemplates[resource] || [];
    this.rolePermissions = this.rolePermissions.filter(p => 
      !resourcePermissions.some(rp => 
        rp.resource === p.resource && 
        rp.action === p.action
      )
    );
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.userrolename || item.companyname}?`)) {
      this.userroleservice.deleteUserrole(item.userroleid).subscribe({
        next: () => this.getUserroleDetails(),
        error: () => {}
      });
    }
  }

  onExporting(e: any): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Userrole Data');
  
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "UserroleData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
  }

  toggleForm(): void {
    this.isEditMode = false;
    this.userroleForm.reset();
    this.userroleForm.patchValue({
      userrolename: '',
      createdby: 1,
      updatedby: 1,
      userroleisactive: 'true',
      createddate: new Date(),
      updateddate: new Date(),
      userroleid: 0,
      accountid: this.authService.getAccountId() ?? 1,
      instanceid: this.authService.getInstanceId() ?? 1
    });
    this.isFormOpen = true;
  }

  restuserroleForm(): void {
   this.isFormOpen=false;
   this.isEditMode = false;
   this.userroleForm.reset();
   this.userroleForm.patchValue({
    userrolename: '',
    createdby: 1,
    updatedby: 1,
    userroleisactive: 'true',
    createddate: new Date(),
    updateddate: new Date(),
    userroleid: 0,
    accountid: this.authService.getAccountId() ?? 1,
    instanceid: this.authService.getInstanceId() ?? 1
  });
  }

  getDropDownValues(): void {
    this.http.get<any[]>(`${environment.apiUrl}/userrole/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
}




