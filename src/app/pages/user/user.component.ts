import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import { UserService } from '../service/user.service';
import { InstanceService } from '../service/instance.service';
import { UserroleService } from '../service/userrole.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
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

    constructor(
      private userservice: UserService,
      private instanceService: InstanceService,
      private userroleService: UserroleService,
      private authService: AuthService,
      private permissionService: PermissionService,
      private fromBuilder: FormBuilder,
      private http: HttpClient
    ) {}


  ngOnInit(): void {
    const accountId = this.authService.getAccountId() ?? 0;
    const instanceId = this.authService.getInstanceId() ?? 0;
    const userId = this.authService.getUserId() ?? 1;
    this.userForm = this.fromBuilder.group({
      username: [""],
      usermobile: ["", Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
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
      instanceid: [instanceId],
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
    const raw = this.userForm.getRawValue();
    const roleId = raw.userroleid != null && raw.userroleid !== '' ? Number(raw.userroleid) : null;
    const selectedRole = roleId != null ? this.userroleDropdownItems.find((r: any) => Number(r.userroleid) === roleId) : null;
    const payload = {
      ...raw,
      userrole: selectedRole ? selectedRole.userrolename : (raw.userrole || ''),
      userroleid: roleId ?? raw.userroleid,
      userisactive: raw.userisactive == null || raw.userisactive === '' ? 'true' : raw.userisactive,
    };
    delete (payload as any).verifypassword;
    this.userservice.addUser(payload).subscribe(data => {
      if (data) {
        this.getUserDetails();
        this.restuserForm();
      }
      console.log('User Details:', data);
    });
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
        cityid: selectedItem.cityId ,
      companystate:selectedItem.citystate,
    companycountry:selectedItem.citycountry}); // Update cityId in the form
      console.log('Selected City ID:', selectedItem.cityId);
    }
  }
  editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true;
    this.isEditMode = true;
    const userisactive = item.userisactive === true || item.userisactive === 'true' || item.userisactive === 1 ? 'true' : 'false';
    this.userForm.patchValue({ ...item, userisactive });
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.username}?`)) {
      this.userservice.deleteUser(item.userid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getUserDetails(); // Refresh grid after delete
      },

      error: (err: any) => console.error('Error deleting Instance', err),
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
    this.isFormOpen = true;
    if (!this.isEditMode) {
      this.loadInstanceList();
      this.loadUserroleList();
    }
  }

  restuserForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.userForm.reset();
    const accountId = this.authService.getAccountId() ?? 0;
    const instanceId = this.authService.getInstanceId() ?? 0;
    this.userForm.patchValue({
      instanceid: instanceId,
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
  


