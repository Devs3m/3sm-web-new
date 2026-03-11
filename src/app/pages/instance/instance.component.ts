import { Component, OnInit } from '@angular/core';
import { InstanceService } from '../service/instance.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-instance,input-prefix-suffix-example',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})

export class InstanceComponent implements OnInit {


  isFormOpen = false; // Controls the slider visibility
  isEditMode = false;
  instance!: any[];
  instanceForm!: FormGroup;
  dropdownOptions: any[] = [];
  selectedItem: any;
  dropdownItems: any[] = [];
  apiData: any[] = [];
  longText: any;
  totalInstance: number = 0;
  activeInstance: number = 0;
  deactiveInstance: number = 0;
  dropdownAccountItems: any[]=[];

  constructor(
    private instanceservice: InstanceService,
    private authService: AuthService,
    private permissionService: PermissionService,
    private fromBuilder: FormBuilder,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    const accountId = this.authService.getAccountId() ?? 1;
    this.instanceForm = this.fromBuilder.group({
      instancename: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      ownername: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      ownermobile: [""],
      owneremail: [""],
      managername: [""],
      managermobile: ["",[ Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      manageremail: [""],
      instanceaddress: [""],
      instancecity: ["", Validators.required],
      instancestate: [""],
      instancecountry: [""],
      instancepincode: [""],
      instancesalesamount: [""],
      instancesalesdate: [new Date()],
      instanceasaenddate: [new Date()],
      instanceasaamount: [""],
      createddate: [new Date()],
      updateddate: [new Date()],
      createdby: [1],
      updatedby: [1],
      instanceisactive: ["", Validators.required],
      instancegstno: [""],
      instancevatno: [""],
      instancefssaino: [""],
      instanceid: [0],
      accountid: [accountId],
      cityid: [1]
    })
    this.getInstanceDetails();
    this.getDropDownValue();
    this.getDropdownAccountValue();

  }

  get instancename() {
    return this.instanceForm.get('instancename');
  }


  onSubmit(): void {
    if (this.instanceForm.valid) {
      if (this.isEditMode) {
        this.instanceservice.updateInstance(this.instanceForm.value).subscribe({
          next: (response: any) => {
            console.log('Instance updated:', response);
            this.getInstanceDetails();
            this.restinstanceForm();
          },
          error: (error: any) => {
            console.error('Error updating account:', error);
          }
        });
      } else {
        this.createInstance();
      }
      console.log('Select Status:', this.instanceForm.value.instanceisactive);
      setTimeout(() => {
        window.location.reload(); // Reloads after 1 second
      }, 100);
    } else {
      console.error('Form is Invalid');
    }

  }

  createInstance(): void {
    this.instanceservice.addInstance(this.instanceForm.value).subscribe(data => {
      if (data) {
        this.getInstanceDetails();
        this.instanceForm.reset();
      }
      console.log(data);
      console.log("Form submitted!");
      this.restinstanceForm()
    });
  }

  private byAccountId<T extends { accountid?: number; accountId?: number }>(list: T[], accountId: number): T[] {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  getInstanceDetails(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.instanceservice.getInstanceDetails().subscribe({
      next: (apidata: any) => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.instance = filtered.sort((a: any, b: any) => b.createddate - a.createddate);
        this.apiData = [...this.instance];
        this.totalInstance = filtered.length;
        this.activeInstance = filtered.filter((i: any) => i.instanceisactive === true || i.instanceisactive === 'true' || i.instanceisactive === 1).length;
        this.deactiveInstance = this.totalInstance - this.activeInstance;
        console.log('Sorted Instance Details:', this.instance);
      },
      error: (err) => console.error('Error fetching instance details:', err)
    });
  }

  getInstanceOrderby(): void {
    this.instanceservice.getInstanceOrderby().subscribe({
      next: (apidata: any) => {
        this.instance = apidata.sort((a: any, b: any) => b.createddate - a.createddate);

        console.log('Sorted Account Orderby Details:', this.instance);
        this.instanceservice.getInstanceOrderby().subscribe((data) => {

        });
      }

    });
  }

  getDropDownValue() {
    console.log('Loading city dropdown...');
    this.instanceservice.getDropdownItems().subscribe({
      next: (cityitems) => {
        console.log('City dropdown items received:', cityitems);
        // Filter only active cities if the API returns inactive ones
        if (cityitems && Array.isArray(cityitems)) {
          this.dropdownItems = cityitems.filter((item: any) => 
            item.cityisactive === true || 
            item.cityisactive === 'true' || 
            item.cityisactive === 1 ||
            item.cityisactive === undefined // Include if field doesn't exist
          );
          console.log('Filtered city dropdown items:', this.dropdownItems.length);
        } else {
          console.warn('City dropdown items is not an array:', cityitems);
          this.dropdownItems = [];
        }
      },
      error: (err) => {
        console.error('Error fetching city dropdown items:', err);
        console.error('Error details:', err.error || err.message);
        this.dropdownItems = [];
        // Try alternative method as fallback
        this.getDropDownValues();
      },
    });
  }
  getDropdownAccountValue(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.instanceservice.getDropdownAccountItems().subscribe({
      next: (items) => {
        const raw = Array.isArray(items) ? items : [];
        this.dropdownAccountItems = accountId != null ? this.byAccountId(raw, accountId) : raw;
      },
      error: (err) => console.error('Error fetching dropdown items', err),
    });
  }

  onSelectionAccountChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected Account ID:', selectedValue);
    
    // Find the selected account by accountid (since the dropdown uses accountid as value)
    const selectedItem = this.dropdownAccountItems.find((item) => item.accountid == selectedValue);
    console.log('Selected Account Item:', selectedItem);
    
    if (selectedItem) {
      this.instanceForm.patchValue({
        accountid: selectedItem.accountid,
        ownername: selectedItem.ownername || '',
        ownermobile: selectedItem.ownermobile || '',
        owneremail: selectedItem.owneremail || '',
      });
      console.log('Auto-filled Owner Name:', selectedItem.ownername);
      console.log('Auto-filled Owner Mobile:', selectedItem.ownermobile);
      console.log('Auto-filled Owner Email:', selectedItem.owneremail);
    }
  }

  onSelectionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected City Name:', selectedValue);
    const selectedItem = this.dropdownItems.find((item) => item.cityname === selectedValue);
    console.log('Selected City Item:', selectedItem);
    
    if (selectedItem) {
      this.instanceForm.patchValue({
        cityid: selectedItem.cityId || selectedItem.cityid,
        instancestate: selectedItem.citystate || '',
        instancecountry: selectedItem.citycountry || ''
      });
      console.log('Auto-filled State:', selectedItem.citystate);
      console.log('Auto-filled Country:', selectedItem.citycountry);
      console.log('Selected City ID:', selectedItem.cityId || selectedItem.cityid);
    }
  }
  editItem(item: any): void {
    this.isFormOpen = true;
    this.isEditMode = true;
    this.instanceForm.patchValue({
      ...item,
      instanceisactive: item.instanceisactive === true || item.instanceisactive === 'true' || item.instanceisactive === 1 ? 'true' : 'false'
    });
    console.log('Edit Item:', item);
  }

  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.instancename}?`)) {
      console.log('Deleting instance:', item);
      console.log('Instance ID:', item.instanceid);
      
      this.instanceservice.deleteInstance(item.instanceid).subscribe({
        next: (response: any) => {
          console.log("Instance deleted successfully:", response);
          this.getInstanceDetails(); // Refresh grid after delete
          this.getDropDownValue(); // Refresh dropdowns if needed
        },
        error: (err: any) => {
          console.error('Error deleting instance:', err);
          console.error('Error details:', err.error || err.message);
          alert(`Error deleting instance: ${err.error?.message || err.message || 'Unknown error'}. Please check the console for details.`);
        }
      });
    }
  }
  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Instance Data');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "InstanceData.xlsx");
      });
    });

    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;
    // Reload dropdowns when opening form to ensure fresh data
    this.getDropDownValue();
    this.getDropdownAccountValue();
  }
  restinstanceForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.instanceForm.reset();
    
    // Reload dropdowns when form is reset to ensure fresh data
    this.getDropDownValue();
    this.getDropdownAccountValue();
    
    const accountId = this.authService.getAccountId() ?? 1;
    this.instanceForm.patchValue({
      accountid: accountId,
      instancecity: '',
      instancestate: '',
      instancecountry: '',
      instanceisactive: '',
      createddate: new Date(),
      updateddate: new Date(),
      instanceid: 0,
      cityid: 1
    });
  }
  getDropDownValues(): void {
    console.log('Loading city dropdown (fallback method)...');
    this.http.get<any[]>(`${environment.apiUrl}/city/list`).subscribe({
      next: (data) => {
        console.log('City dropdown items received (fallback):', data);
        if (data && Array.isArray(data)) {
          // Filter only active cities if the API returns inactive ones
          this.dropdownItems = data.filter((item: any) => 
            item.cityisactive === true || 
            item.cityisactive === 'true' || 
            item.cityisactive === 1 ||
            item.cityisactive === undefined // Include if field doesn't exist
          );
          console.log('Filtered city dropdown items (fallback):', this.dropdownItems.length);
        } else {
          console.warn('City dropdown data is not an array:', data);
          this.dropdownItems = [];
        }
      },
      error: (err) => {
        console.error('Error fetching city dropdown (fallback):', err);
        console.error('Error details:', err.error || err.message);
        this.dropdownItems = [];
      }
    });
  }
  onCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.http.get<any>(`${environment.apiUrl}/instance/${selectedCityId}`).subscribe(data => {
      this.instanceForm.patchValue({
        cityid: data.cityid,
        instancestate: data.citystate,
        instancecountry: data.citycountry,

      });
    });
  }


renderActionButtons = (cellElement: { appendChild: (arg0: HTMLButtonElement) => void; }, cellInfo: { data: any; }) => {
  const editButton = document.createElement('button');
  editButton.innerText = 'Edit';
  editButton.classList.add('btn', 'btn-primary', 'action-button');
  editButton.addEventListener('click', () => this.editItem(cellInfo.data));

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  deleteButton.classList.add('btn', 'btn-danger', 'action-button');
  deleteButton.addEventListener('click', () => this.deleteItem(cellInfo.data));

  cellElement.appendChild(editButton);
  cellElement.appendChild(deleteButton);
};
}



export class InputPrefixSuffixExample { }



