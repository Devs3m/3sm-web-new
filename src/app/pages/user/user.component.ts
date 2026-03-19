import { Component, ChangeDetectorRef, OnInit, ViewChild  } from '@angular/core';
import { UserService } from '../service/user.service';
import { InstanceService } from '../service/instance.service';
import { UserroleService } from '../service/userrole.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { forkJoin } from 'rxjs';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { environment } from '../../../environments/environment';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {


    isFormOpen = false; // Controls the slider visibility
    isEditMode = false; // Controls edit mode
    user!:any[];
    userForm!: FormGroup;
    dropdownOptions: any[] = [];
    selectedItem: any;
    dropdownItems: any[] = [];
    instanceList: any[] = [];
    userroleDropdownItems: any[] = [];
    data: { id: number; userName: string; city: string; isActive: boolean }[] = [];
    apiData: any[] = [];
    longText: any;
    totalUser: number = 0;
    activeUser: number = 0;
    deactiveUser: number = 0;
    private apiUrl = environment.apiUrl;
    editingUserId: number | null = null;
    errorMessage = '';
    /** Ensure numeric sorting in DevExtreme when userid comes as string/bigint. */
    userIdSortValue = (rowData: any): number => {
      const v = rowData?.userid ?? rowData?.userId ?? 0;
      const n = Number(v);
      return Number.isFinite(n) ? n : 0;
    };

    constructor(
      private userservice: UserService,
      private instanceService: InstanceService,
      private userroleService: UserroleService,
      private authService: AuthService,
      private permissionService: PermissionService,
      private fromBuilder: FormBuilder,
      private http: HttpClient,
      private cdr: ChangeDetectorRef
    ) {}


  ngOnInit(): void {
    const accountId = this.authService.getAccountId() ?? 0;
    const userId = this.authService.getUserId() ?? 1;
    this.userForm = this.fromBuilder.group({
      username: [""],
      usermobile: ["", [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      useremail: [""],
      userpassword: [""],
      verifypassword: [""],
      useraddress: [""],
      usercity: ["", Validators.required],
      userstate: [""],
      usercountry: [""],
      userpincode: [""],
      userrole: [""],
      userroleid: [""],
      userasaenddate: [new Date()],
      userasaamount: [""],
      userforgotpwquest: [""],
      userforgotpwans: [""],
      createddate: [new Date()],
      updateddate: [new Date()],
      isactive: [""],
      createdby: [userId],
      updatedby: [userId],
      accountid: [accountId],
      instanceid: [''],
      cityid: [1],
      userisactive: ["true"],
    });
    this.getUserDetails();
    this.getDropDownValue();
    this.loadInstanceList();
    this.loadUserroleList();
  }

  onSubmit():void{
    if(this.userForm.valid){
      console.log('Select Status:',this.userForm.value.userisactive);
    }else{
      console.error('Form is Invalid');
    }
    if(this.userForm.valid){
      console.log('Select Status:',this.userForm.value.usercity);
    }else{
      console.error('Form is Invalid');
    }
  }

  createUser(): void {
    this.errorMessage = '';
    if (!this.userForm.valid) {
      this.errorMessage = 'Please fill all required fields (User Mobile, City).';
      this.cdr.detectChanges();
      return;
    }
    const raw = this.userForm.getRawValue();
    const userrolename = raw.userrole != null && raw.userrole !== '' ? String(raw.userrole).trim() : null;
    const rawRoleId = raw.userroleid != null && raw.userroleid !== '' ? Number(raw.userroleid) : null;
    let selectedRole = userrolename
      ? this.userroleDropdownItems.find((r: any) => this.toRoleName(r) === userrolename)
      : null;
    if (!selectedRole && rawRoleId != null) {
      selectedRole = this.userroleDropdownItems.find((r: any) => this.toRoleId(r) === rawRoleId);
    }
    const roleId = selectedRole ? this.toRoleId(selectedRole) : rawRoleId;
    const instanceId = raw.instanceid != null && raw.instanceid !== '' ? Number(raw.instanceid) : null;
    const selectedInstance = instanceId != null ? this.instanceList.find((i: any) => Number(i.instanceid) === instanceId) : null;
    if (!this.isEditMode && (!selectedInstance || !instanceId)) {
      this.errorMessage = 'Please select an Instance.';
      this.cdr.detectChanges();
      return;
    }
    if (!roleId || !selectedRole) {
      this.errorMessage = 'Please select a User Role.';
      this.cdr.detectChanges();
      return;
    }
    const payload: any = {
      ...raw,
      userrole: this.toRoleName(selectedRole),
      userroleid: roleId,
      userisactive: raw.userisactive == null || raw.userisactive === '' ? 'true' : raw.userisactive,
      accountid: selectedInstance ? selectedInstance.accountid : (raw.accountid ?? 0),
      instanceid: selectedInstance ? selectedInstance.instanceid : (instanceId ?? raw.instanceid ?? 0),
    };
    delete payload.verifypassword;

    if (this.isEditMode && this.editingUserId != null) {
      payload.userid = this.editingUserId;
      payload.updateddate = new Date();
      if (!payload.userpassword) delete payload.userpassword; // Don't overwrite password when empty
      payload.userroleid = roleId;
      this.userservice.updateUser(payload).subscribe({
        next: (data) => {
          this.getUserDetails();
          this.restuserForm();
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || err?.message || 'Error updating user. Please try again.';
          this.cdr.detectChanges();
        }
      });
    } else {
      this.userservice.addUser(payload).subscribe({
        next: (data) => {
          this.getUserDetails();
          this.restuserForm();
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || err?.message || 'Error adding user. Please try again.';
          this.cdr.detectChanges();
        }
      });
    }
  }

  private byAccountId<T extends { accountid?: number; accountId?: number }>(list: T[], accountId: number): T[] {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  getUserDetails(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.userservice.getUserDetails().subscribe({
      next: (apidata: any) => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.user = filtered.sort((a: any, b: any) => (b.createddate || 0) - (a.createddate || 0));
        this.apiData = [...this.user];
        this.totalUser = filtered.length;
        this.activeUser = filtered.filter((u: any) => u.userisactive === true || u.userisactive === 'true' || u.userisactive === 1).length;
        this.deactiveUser = this.totalUser - this.activeUser;
      },
      error: (err) => console.error('Error fetching user details:', err)
    });
  }
     
  getDropDownValue(): void {
    this.userservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
  }

  loadInstanceList(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.instanceService.getInstanceDetails().subscribe({
      next: (list) => {
        const raw = list || [];
        const byAccount = accountId != null
          ? raw.filter((i: any) => {
              const id = i.accountid ?? i.accountId;
              return id != null && Number(id) === Number(accountId);
            })
          : raw;
        this.instanceList = byAccount.filter(
          (i: any) => i.instanceisactive === true || i.instanceisactive === 'true' || i.instanceisactive === 1
        );
      },
      error: (err) => console.error('Error fetching instance list', err),
    });
  }

  private toRoleId(r: any): number | null {
    const v = r?.userroleid ?? r?.userroleId;
    return v != null && v !== '' ? Number(v) : null;
  }
  private toRoleName(r: any): string {
    return (r?.userrolename ?? r?.userroleName ?? '').trim();
  }

  loadUserroleList(): void {
    this.userroleService.getDropdownItems().subscribe({
      next: (list) => {
        this.userroleDropdownItems = (list || []).filter(
          (r: any) => r.userroleisactive === true || r.userroleisactive === 'true' || r.userroleisactive === 1
        );
      },
      error: (err) => console.error('Error fetching user role list', err),
    });
  }

  onInstanceSelectionChange(event: Event): void {
    const select = event.target as HTMLSelectElement;
    const instanceId = select.value ? Number(select.value) : 0;
    if (!instanceId) {
      return;
    }
    const instance = this.instanceList.find((i: any) => Number(i.instanceid) === instanceId);
    if (instance) {
      this.userForm.patchValue({
        instanceid: instance.instanceid,
        accountid: instance.accountid != null ? instance.accountid : 0,
        useraddress: instance.instanceaddress || '',
        usercity: instance.instancecity || '',
        userstate: instance.instancestate || '',
        usercountry: instance.instancecountry || '',
        userpincode: instance.instancepincode || '',
        cityid: instance.cityid || 1,
      });
    }
  }

  onSelectionChange(event:Event):void{
    const selectedValue=  (event.target  as HTMLSelectElement).value;
    console.log('Selected City Name:',selectedValue)
    const selectedItem = this.dropdownItems.find((item) => item.cityname === selectedValue);
    console.log('Selected City',selectedValue)
    if (selectedItem) {
      this.userForm.patchValue({ 
        cityid: selectedItem.cityid ?? selectedItem.cityId,
        userstate: selectedItem.citystate,
        usercountry: selectedItem.citycountry,
      });
    }
  }

  editItem(item: any): void {
    const row = item?.data ?? item;
    const userid = row?.userid ?? row?.userId ?? (typeof row === 'object' ? row?.userid : null);
    if (!userid) return;
    this.editingUserId = Number(userid);
    this.isFormOpen = true;
    this.isEditMode = true;
    this.loadInstanceList();
    forkJoin({
      user: this.userservice.getUserDetailsById(Number(userid)),
      roles: this.userroleService.getDropdownItems()
    }).subscribe({
      next: ({ user: row, roles }) => {
        if (!row || typeof row !== 'object') return;
        // Prefer userrole2.userrolename (e.g. SuperAdmin) over top-level userrole (e.g. Administrator)
        const userrolenameFromApi = (row.userrole2?.userrolename ?? row.userrole ?? '').toString().trim();
        let roleId = this.toRoleId(row.userrole2) ?? this.toRoleId(row);
        const instanceidRaw = row.instanceid ?? row.instance?.instanceid ?? null;
        const userisactive = row.userisactive === true || row.userisactive === 'true' || row.userisactive === 1 ? 'true' : 'false';
        const roleList = roles || [];
        const activeRoles = roleList.filter(
          (r: any) => r.userroleisactive === true || r.userroleisactive === 'true' || r.userroleisactive === 1
        );
        if (roleId == null && userrolenameFromApi) {
          const matched = activeRoles.find((r: any) => this.toRoleName(r) === userrolenameFromApi);
          roleId = matched ? this.toRoleId(matched) : null;
        }
        // When API provides userrole2, use its userrolename for display and ensure dropdown shows it (not top-level userrole)
        if (roleId != null && row.userrole2) {
          const roleFromUser = {
            userroleid: row.userrole2.userroleid ?? row.userrole2.userroleId,
            userrolename: this.toRoleName(row.userrole2) || userrolenameFromApi,
            userroleisactive: true
          };
          const rest = activeRoles.filter((r: any) => this.toRoleId(r) !== roleId);
          this.userroleDropdownItems = [roleFromUser, ...rest];
        } else if (userrolenameFromApi && roleId != null) {
          const roleFromApi = {
            userroleid: roleId,
            userrolename: userrolenameFromApi,
            userroleisactive: true
          };
          const rest = activeRoles.filter((r: any) => this.toRoleId(r) !== roleId);
          this.userroleDropdownItems = [roleFromApi, ...rest];
        } else if (userrolenameFromApi) {
          const matched = activeRoles.find((r: any) => this.toRoleName(r) === userrolenameFromApi);
          const roleFromApi = matched
            ? null
            : { userroleid: roleId ?? '', userrolename: userrolenameFromApi, userroleisactive: true };
          this.userroleDropdownItems = roleFromApi ? [roleFromApi, ...activeRoles] : activeRoles;
        } else {
          this.userroleDropdownItems = activeRoles;
        }
        const patch: Record<string, unknown> = {
          username: row.username ?? '',
          usermobile: row.usermobile ?? '',
          useremail: row.useremail ?? '',
          useraddress: row.useraddress ?? '',
          usercity: row.usercity ?? '',
          userstate: row.userstate ?? '',
          usercountry: row.usercountry ?? '',
          userpincode: row.userpincode ?? '',
          userrole: userrolenameFromApi,
          // Native <select> option values are strings; patch as string so selection matches.
          userroleid: roleId != null ? String(roleId) : '',
          instanceid: instanceidRaw != null && instanceidRaw !== '' ? instanceidRaw : '',
          accountid: row.accountid ?? 0,
          cityid: row.cityid ?? row.city?.cityid ?? 1,
          userasaenddate: row.userasaenddate ? new Date(row.userasaenddate) : new Date(),
          userasaamount: row.userasaamount ?? '',
          userforgotpwquest: row.userforgotpwquest ?? '',
          userforgotpwans: row.userforgotpwans ?? '',
          userpassword: '',
          verifypassword: '',
          userisactive,
          createddate: row.createddate ? new Date(row.createddate) : new Date(),
          updateddate: row.updateddate ? new Date(row.updateddate) : new Date(),
          createdby: row.createdby ?? 0,
          updatedby: row.updatedby ?? 0,
        };
        this.userForm.patchValue(patch, { emitEvent: true });
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error fetching user details:', err)
    });
  }
  
  deleteItem(item: any): void {
    const row = item?.data ?? item;
    const userid = row?.userid ?? row?.userId ?? null;
    if (!userid) {
      this.errorMessage = 'Invalid user data. Cannot delete.';
      this.cdr.detectChanges();
      return;
    }
    if (confirm(`Are you sure you want to delete ${row?.username ?? 'this user'}?`)) {
      this.userservice.deleteUser(Number(userid)).subscribe({
        next: () => {
          this.getUserDetails();
          this.errorMessage = '';
          this.cdr.detectChanges();
        },
        error: (err: any) => {
          this.errorMessage = err?.error?.message || err?.message || 'Error deleting user. Please try again.';
          this.cdr.detectChanges();
        }
      });
    }
  }

  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('User Data');
  
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "UserData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
   }

  toggleForm(): void {
    this.errorMessage = '';
    this.editingUserId = null;
    this.isFormOpen = true;
    this.isEditMode = false; // Add button always opens in add mode
      this.loadInstanceList();
      this.loadUserroleList();
      // Full reset for add mode, then set only required defaults
      this.userForm.reset();
      const accountId = this.authService.getAccountId() ?? 0;
      const userId = this.authService.getUserId() ?? 1;
      this.userForm.patchValue({
        username: '',
        userpassword: '',
        verifypassword: '',
        userrole: '',
        userroleid: '',
        instanceid: '',
        useraddress: '',
        usercity: '',
        userstate: '',
        usercountry: '',
        userpincode: '',
        usermobile: '',
        useremail: '',
        cityid: 1,
        accountid: accountId,
        createdby: userId,
        updatedby: userId,
        userisactive: 'true',
        createddate: new Date(),
        updateddate: new Date(),
      });
  }

  restuserForm(): void {
    this.errorMessage = '';
    this.editingUserId = null;
    this.isFormOpen = false;
    this.isEditMode = false;
    this.userForm.reset();
    const accountId = this.authService.getAccountId() ?? 0;
      this.userForm.patchValue({
        instanceid: '',
        userroleid: '',
      cityid: 1,
      accountid: accountId,
      userisactive: 'true',
      createddate: new Date(),
      updateddate: new Date(),
    });
  }



  getDropDownValues(): void {
    this.http.get<any[]>(`${this.apiUrl}/user/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }

  onCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.http.get<any>(`${this.apiUrl}/user/${selectedCityId}`).subscribe(data => {
      this.userForm.patchValue({
        cityid:data.cityid,
        userstate: data.citystate,
        usercountry: data.citycountry,
       
      }); 
    });
  }
}
  export class InputPrefixSuffixExample {}
  


