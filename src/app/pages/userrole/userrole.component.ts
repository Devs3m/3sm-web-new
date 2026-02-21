import { Component, ElementRef, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import{ UserroleService} from'../service/userrole.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { PermissionService, Permission } from '../service/permission.service';
import { environment } from '../../../environments/environment';



@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent implements OnInit {



@ViewChild('formSection') formSection!: ElementRef; // Reference to form

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
  private userroleservice:UserroleService,
  private fromBuilder:FormBuilder,
  private http:HttpClient,
  public permissionService: PermissionService, // Public so it can be accessed in template
  private cdr: ChangeDetectorRef // For forcing change detection
){}

  
  ngOnInit(): void {
    this.userroleForm=this.fromBuilder.group({
    "userrolename":["", Validators.required],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "userroleisactive":["true", Validators.required],
    "createdby":[1],
    "updatedby":[1],
    "userroleid": [0],
    "accountid": [1],
    "instanceid": [1]
    })
    this.getUserroleDetails();
    this.getDropDownValue();
    this.loadPermissionTemplates();
    
    // Debug: Check button visibility conditions
    setTimeout(() => {
      this.debugButtonVisibility();
    }, 2000); // Check after 2 seconds to allow permissions to load
    {
      // Fetch data from API
      this.http.get<{ totalUserrole: number;activeUserrole: number; deactiveUserrole: number}>(`${environment.apiUrl}/userrole/counts`)
        .subscribe(response => {
          this.totalUserrole = response.totalUserrole;
          this.activeUserrole = response.activeUserrole;
          this.deactiveUserrole = response.deactiveUserrole;
          console.log(this.totalUserrole)
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
    if(this.userroleForm.valid){
      console.log('Select Userrole Status:',this.userroleForm.value.userroleisactive);
    }else{
      console.error('Form is Invalid');
    }
    if(this.userroleForm.valid){
      console.log('Select Userrole Status:',this.userroleForm.value.gst);
    }else{
      console.error('Form is Invalid');
    }
  }
  createUserrole():void{
    if (this.isEditMode) {
      this.userroleservice.updateUserrole(this.userroleForm.value).subscribe({
        next: (data) => {
          console.log('User role updated:', data);
          this.getUserroleDetails();
          this.restuserroleForm();
        },
        error: (err) => {
          console.error('Error updating user role:', err);
        }
      });
    } else {
      this.userroleservice.addUserrole(this.userroleForm.value).subscribe({
        next: (data) => {
          console.log('User role created:', data);
          this.getUserroleDetails();
          this.restuserroleForm();
        },
        error: (err) => {
          console.error('Error creating user role:', err);
        }
      });
    }
  }
  getUserroleDetails():void {
    this.userroleservice.getUserroleDetails().subscribe({
      next:(apidata:any) => {
        this.userrole=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted Userrole Details:', this.userrole);
        this.userroleservice.getUserroleDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
      });
  }
  getDropDownValue (){
    this.userroleservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
   }
   
  editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true;
    this.isEditMode = true;
    this.userroleForm.patchValue({
      ...item,
      userroleisactive: item.userroleisactive ? 'true' : 'false'
    });
  }

  configurePermissions(item: any): void {
    console.log('========================================');
    console.log('Configure Permissions Called:');
    console.log('  - Item:', item);
    console.log('  - User Role ID:', item.userroleid);
    console.log('  - User Role Name:', item.userrolename);
    console.log('========================================');
    
    // Check if user is Super Admin OR has permission:settings:access
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const hasPermissionSettingsAccess = this.permissionService.hasPermissionCode('permission:settings:access');
    const hasConfigurePermission = this.permissionService.hasPermission('userrole', 'configure');
    
    console.log('Is Super Admin?', isSuperAdmin);
    console.log('Has permission:settings:access?', hasPermissionSettingsAccess);
    console.log('Has userrole:configure?', hasConfigurePermission);
    console.log('Current role name:', this.permissionService.getCurrentRoleName());
    console.log('Current user role:', this.permissionService.getCurrentUserRole());
    
    if (!isSuperAdmin && !hasPermissionSettingsAccess && !hasConfigurePermission) {
      alert('Access denied. Only Super Admin or users with permission:settings:access can configure permissions.');
      return;
    }

    this.selectedRoleId = item.userroleid;
    this.selectedRoleName = item.userrolename;
    this.rolePermissions = []; // Reset permissions
    
    console.log('========================================');
    console.log('Opening Permission Config Panel:');
    console.log('  - Selected Role ID:', this.selectedRoleId);
    console.log('  - Selected Role Name:', this.selectedRoleName);
    console.log('========================================');
    console.log('isPermissionConfigOpen before setting:', this.isPermissionConfigOpen);
    
    // Open panel immediately
    this.isPermissionConfigOpen = true;
    console.log('isPermissionConfigOpen after setting:', this.isPermissionConfigOpen);
    console.log('Panel should now be visible');
    
    // Force change detection
    this.cdr.detectChanges();
    
    // Force change detection using setTimeout to ensure Angular processes the change
    setTimeout(() => {
      console.log('After timeout - isPermissionConfigOpen:', this.isPermissionConfigOpen);
      this.cdr.detectChanges();
    }, 100);
    
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
    console.log('Loading all available permissions from backend...');
    this.permissionService.getAllPermissions().subscribe({
      next: (response: any) => {
        console.log('Loaded available permissions from backend:', response);
        
        // Handle different response formats
        let permissions: Permission[] = [];
        if (Array.isArray(response)) {
          // Direct array response
          permissions = response;
        } else if (response && Array.isArray(response.permissions)) {
          // Object with permissions property: { permissions: [...] }
          permissions = response.permissions;
        } else if (response && response.success && Array.isArray(response.data)) {
          // Object with success and data: { success: true, data: [...] }
          permissions = response.data;
        } else {
          console.error('Unexpected response format from getAllPermissions:', response);
          console.error('Response type:', typeof response);
          console.error('Is Array:', Array.isArray(response));
          if (response) {
            console.error('Response keys:', Object.keys(response));
          }
          permissions = [];
        }
        
        console.log('Processed permissions array:', permissions.length, 'permissions');
        this.allAvailablePermissions = permissions;
        
        // Create lookup map: "resource:action:field" -> Permission with ID
        // Backend already provides resource, action, field in frontend-friendly format
        this.permissionLookup.clear();
        permissions.forEach(p => {
          // Use resource:action:field format for lookup key
          const key = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
          this.permissionLookup.set(key, p);
          console.log(`Added to lookup: ${key} -> ID: ${p.id}`);
        });
        
        console.log('Permission lookup map created with', this.permissionLookup.size, 'entries');
        
        if (callback) {
          callback();
        }
      },
      error: (err) => {
        console.error('Error loading available permissions:', err);
        console.warn('Will try to proceed without permission IDs - backend may need to handle this');
        if (callback) {
          callback();
        }
      }
    });
  }

  // Load existing permissions for a role
  loadRolePermissions(roleId: number): void {
    console.log('========================================');
    console.log('Loading Role Permissions:');
    console.log('  - User Role ID:', roleId);
    console.log('  - User Role Name:', this.selectedRoleName);
    console.log('========================================');
    
    this.userroleservice.getRolePermissions(roleId).subscribe({
      next: (response: any) => {
        console.log('API returned permissions:', response);
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
              console.log(`Found ID for permission ${lookupKey}: ${permissionId}`);
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
        
        console.log('========================================');
        console.log('Processed Role Permissions:');
        console.log('  - User Role ID:', this.selectedRoleId);
        console.log('  - User Role Name:', this.selectedRoleName);
        console.log('  - Total Permissions:', this.rolePermissions.length);
        console.log('  - Permission IDs:', this.rolePermissions.map(p => p.id).filter(id => id !== undefined && id !== null));
        console.log('  - All Permissions:', this.rolePermissions.map(p => ({
          id: p.id,
          resource: p.resource,
          action: p.action,
          field: p.field,
          name: p.name
        })));
        console.log('========================================');
      },
      error: (err) => {
        console.error('Error loading permissions:', err);
        console.error('Error details:', err.error || err.message);
        
        // Handle 403 Forbidden (Super Admin required)
        if (err.status === 403) {
          alert('Access denied. Only Super Admin can view role permissions.');
          this.closePermissionConfig();
          return;
        }
        
        // If API endpoint doesn't exist or other error, keep panel open with empty permissions
        // User can still configure permissions even if we couldn't load existing ones
        this.rolePermissions = [];
        console.log('Panel remains open. User can configure permissions.');
        // Don't show alert - panel is open, user can proceed
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
      // Remove permission
      this.rolePermissions.splice(index, 1);
      console.log('Removed permission:', permission);
    } else {
      // Add permission - try to find ID from lookup map
      const lookupKey = `${permission.resource}:${permission.action}${permission.field ? `:${permission.field}` : ''}`;
      const permissionWithId = this.permissionLookup.get(lookupKey);
      
      const newPermission: Permission = {
        id: permissionWithId?.id || permission.id, // Use ID from lookup or existing permission
        name: permission.name || `${permission.resource} ${permission.action}`,
        resource: permission.resource,
        action: permission.action,
        field: permission.field,
        description: permission.description || permissionWithId?.description
      };
      
      console.log('Adding permission - Lookup key:', lookupKey);
      console.log('Found permission with ID:', permissionWithId?.id);
      console.log('New permission object:', newPermission);
      
      this.rolePermissions.push(newPermission);
      console.log('Added permission:', newPermission);
    }
    console.log('Current role permissions:', this.rolePermissions);
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
      console.error('Invalid selectedRoleId:', this.selectedRoleId);
      return;
    }

    // Ensure selectedRoleId is a number, not a string
    const roleId = typeof this.selectedRoleId === 'number' ? this.selectedRoleId : Number(this.selectedRoleId);
    if (isNaN(roleId) || roleId <= 0) {
      alert('Invalid role ID. Please select a valid role.');
      console.error('Invalid roleId after conversion:', roleId, 'original:', this.selectedRoleId);
      return;
    }

    console.log('Saving permissions for role:', this.selectedRoleId);
    console.log('Role name:', this.selectedRoleName);
    console.log('Permissions to save:', this.rolePermissions);
    console.log('Permissions count:', this.rolePermissions.length);

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

    // Log each permission to see what fields it has
    this.rolePermissions.forEach((p, index) => {
      console.log(`Permission ${index}:`, p);
      console.log(`  - id: ${p.id} (type: ${typeof p.id})`);
      console.log(`  - permissionid: ${(p as any).permissionid} (type: ${typeof (p as any).permissionid})`);
      console.log(`  - permissionId: ${(p as any).permissionId} (type: ${typeof (p as any).permissionId})`);
      console.log(`  - resource: ${p.resource}, action: ${p.action}`);
    });

    let permissionIds: number[];

    // If this is Super Admin role, use permission ID 1
    if (isSuperAdminRole) {
      console.log('✅ This is Super Admin role - using permission ID 1');
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
              console.log(`Found ID from lookup for ${lookupKey}: ${id}`);
            }
          }
          
          // Ensure id is a primitive value, not an object
          if (id === undefined || id === null) {
            console.warn('Permission has no ID:', p);
            return null;
          }
          
          // Check if id is an object (which would cause the error)
          if (typeof id === 'object') {
            console.error('Permission ID is an object, not a number!', id, 'for permission:', p);
            // Try to extract ID from the object if it has an id property
            if ((id as any).id !== undefined) {
              id = (id as any).id;
              console.log('Extracted ID from object:', id);
            } else {
              return null;
            }
          }
          
          // Convert to number, handling string numbers
          const numId = typeof id === 'number' ? id : (typeof id === 'string' ? parseInt(id, 10) : null);
          
          // Validate it's a valid number
          if (numId === null || isNaN(numId) || numId <= 0) {
            console.warn('Invalid permission ID:', id, '(type:', typeof id, ') for permission:', p);
            return null;
          }
          
          return numId;
        })
        .filter((id): id is number => id !== null && !isNaN(id) && id > 0);
    }

    console.log('Extracted permission IDs:', permissionIds);
    
    if (permissionIds.length === 0) {
      console.error('No valid permission IDs found!');
      console.error('Role permissions:', this.rolePermissions);
      console.error('Available permissions from backend:', this.allAvailablePermissions);
      console.error('Permission lookup map size:', this.permissionLookup.size);
      
      // Try to find IDs from lookup map for permissions that don't have IDs
      const permissionsWithoutIds = this.rolePermissions.filter(p => !p.id);
      console.error('Permissions without IDs:', permissionsWithoutIds);
      
      if (permissionsWithoutIds.length > 0) {
        // Try to match them with available permissions
        permissionsWithoutIds.forEach(p => {
          const lookupKey = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
          const found = this.permissionLookup.get(lookupKey);
          console.error(`  ${lookupKey}: ${found ? `Found ID ${found.id}` : 'NOT FOUND in lookup'}`);
        });
      }
      
      alert(`Error: No valid permission IDs found for ${this.rolePermissions.length} selected permissions.\n\n` +
            `The backend permissions list may not contain these permissions, or they may need to be created first.\n\n` +
            `Please check the browser console for details.`);
      return;
    }

    // Send permission IDs in the format expected by backend
    // Backend expects array of objects with permissionid property: [{ permissionid: 1 }, { permissionid: 2 }]
    // The roleId is sent in the URL path, not in the body
    const permissionsToSave = permissionIds.map(permissionId => {
      // Double-check that permissionId is a number (not an object)
      if (typeof permissionId === 'object') {
        console.error('ERROR: permissionId is an object!', permissionId);
        throw new Error(`Invalid permission ID: permissionId must be a number, got object`);
      }
      const numId = typeof permissionId === 'number' ? permissionId : Number(permissionId);
      if (isNaN(numId) || numId <= 0) {
        console.error('ERROR: Invalid permission ID:', permissionId, 'type:', typeof permissionId);
        throw new Error(`Invalid permission ID: ${permissionId} (must be a positive number)`);
      }
      // Return object with permissionid property (backend expects this format)
      return {
        permissionid: numId
      };
    });

    console.log('=== SENDING TO API ===');
    console.log('RoleId:', roleId, '(type:', typeof roleId, ')');
    console.log('Body (array of objects):', permissionsToSave);
    console.log('Body (JSON):', JSON.stringify(permissionsToSave));
    console.log('Body type:', typeof permissionsToSave);
    console.log('Body is array:', Array.isArray(permissionsToSave));
    console.log('Body length:', permissionsToSave.length);
    if (permissionsToSave.length > 0) {
      console.log('First item:', permissionsToSave[0]);
      console.log('First item keys:', Object.keys(permissionsToSave[0]));
      console.log('First item.permissionid:', permissionsToSave[0].permissionid, '(type:', typeof permissionsToSave[0].permissionid, ')');
    }
    console.log('======================');

    this.userroleservice.saveRolePermissions(roleId, permissionsToSave).subscribe({
      next: (response) => {
        console.log('Permissions saved successfully:', response);
        alert('Permissions saved successfully!');
        this.closePermissionConfig();
        // Clear cache to reload permissions
        this.permissionService.clearCache();
      },
      error: (err: any) => {
        console.error('Error saving permissions:', err);
        console.error('Error status:', err.status);
        console.error('Error details:', err.error || err.message);
        console.error('Full error object:', err);
        
        // Log the request that was sent for debugging
        console.error('Request that failed:');
        console.error('  - RoleId:', this.selectedRoleId);
        console.error('  - Body:', permissionsToSave);
        console.error('  - Body JSON:', JSON.stringify(permissionsToSave));
        
        const errorMessage = err.error?.message || err.error || err.message || 'Unknown error';
        alert(`Error saving permissions: ${errorMessage}\n\nPlease check the browser console for details.`);
      }
    });
  }

  closePermissionConfig(): void {
    console.log('Closing permission config panel');
    this.isPermissionConfigOpen = false;
    this.selectedRoleId = 0;
    this.selectedRoleName = '';
    this.rolePermissions = [];
  }

  // Helper method to check if configure button should be visible
  canConfigurePermissions(): boolean {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const roleName = this.permissionService.getCurrentRoleName();
    console.log('canConfigurePermissions check - isSuperAdmin:', isSuperAdmin, 'roleName:', roleName);
    return isSuperAdmin;
  }


  // Debug method to check button visibility
  debugButtonVisibility(): void {
    console.log('========================================');
    console.log('DEBUG: Configure Permissions Button Visibility');
    console.log('========================================');
    
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const hasPermissionSettingsAccess = this.permissionService.hasPermissionCode('permission:settings:access');
    const hasConfigurePermission = this.permissionService.hasPermission('userrole', 'configure');
    const currentRole = this.permissionService.getCurrentUserRole();
    const roleName = this.permissionService.getCurrentRoleName();
    
    console.log('  - isSuperAdmin():', isSuperAdmin);
    console.log('  - hasPermissionCode("permission:settings:access"):', hasPermissionSettingsAccess);
    console.log('  - hasPermission("userrole", "configure"):', hasConfigurePermission);
    console.log('  - Current Role Name:', roleName);
    console.log('  - Current User Role:', currentRole);
    console.log('  - Button Should Be Visible:', isSuperAdmin || hasPermissionSettingsAccess || hasConfigurePermission);
    
    if (currentRole) {
      console.log('  - Role Permissions:', currentRole.permissions);
      console.log('  - Permissions Count:', currentRole.permissions?.length || 0);
      
      const permissionSettingsPerms = currentRole.permissions?.filter(p => 
        p.permissioncode?.toLowerCase() === 'permission:settings:access' ||
        (p.resource?.toLowerCase() === 'permission' && p.action?.toLowerCase() === 'settings')
      ) || [];
      console.log('  - permission:settings:access permissions found:', permissionSettingsPerms);
      
      const configurePerms = currentRole.permissions?.filter(p => 
        p.resource?.toLowerCase() === 'userrole' && 
        p.action?.toLowerCase() === 'configure'
      ) || [];
      console.log('  - userrole:configure permissions found:', configurePerms);
    }
    
    console.log('========================================');
  }

  // Method to check if configure button should be visible
  canShowConfigureButton(): boolean {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    // Check for permission:settings:access permission (the actual permission code in DB)
    const hasPermissionSettingsAccess = this.permissionService.hasPermissionCode('permission:settings:access');
    // Also check for userrole:configure (backward compatibility)
    const hasConfigurePermission = this.permissionService.hasPermission('userrole', 'configure');
    const result = isSuperAdmin || hasPermissionSettingsAccess || hasConfigurePermission;
    
    // Log when button is hidden (for debugging)
    if (!result) {
      console.warn('Configure button hidden - isSuperAdmin:', isSuperAdmin, 
                   'hasPermissionSettingsAccess:', hasPermissionSettingsAccess,
                   'hasConfigurePermission:', hasConfigurePermission);
    } else {
      console.log('✅ Configure button visible - isSuperAdmin:', isSuperAdmin,
                  'hasPermissionSettingsAccess:', hasPermissionSettingsAccess,
                  'hasConfigurePermission:', hasConfigurePermission);
    }
    
    return result;
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
        next:() => {
        console.log("Deleted:", item);
        this.getUserroleDetails(); // Refresh grid after delete
      },
      error: (err: any) => console.error('Error deleting user role', err),
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
    this.isFormOpen = true;
    this.isEditMode = false;
    this.restuserroleForm();
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
    accountid: 1,
    instanceid: 1
  });
  }

  getDropDownValues(): void {
    this.http.get<any[]>(`${environment.apiUrl}/userrole/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
}




