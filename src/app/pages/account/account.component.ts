import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AccountService } from '../service/account.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],

})
export class AccountComponent implements OnInit {
 

  @ViewChild('formSection') formSection!: ElementRef; // Reference to form

  isFormOpen = false; // Controls the slider visibility
  account!: any[];
  accountForm!: FormGroup;
  dropdownOptions: any[] = [];
  selectedItem: any;
  dropdownItems: any[] = [];
  apiData: any[] = [];
  longText: any;
  totalAccounts: number = 0;  // Variable to store API data
  activeAccounts: number = 0;
  deactiveAccounts: number = 0;



  constructor(private accountservice: AccountService,
    private formBuilder: FormBuilder,
    private http: HttpClient) { }

  ngOnInit(): void {
  this.accountForm = this.formBuilder.group({
    companyname: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    ownername: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    ownermobile: ["", Validators.required],
    owneremail: [""],
    companyaddress: [""],
    companycity: [null, Validators.required],
    companystate: [""],
    companycountry: [""],
    companypincode: [""],
    licensecount: [""],
    createddate: [new Date()],
    updateddate: [new Date()],
    isactive: [true, Validators.required],
    createdby: [1],
    updatedby: [1],
    accountid: [0],
    cityid: [1]
  });

  this.getAccountDetails();
  this.getDropDownValue();

  // Fetch API data
  this.http.get<{ totalAccounts: number; activeAccounts: number; deactiveAccounts: number }>('http://49.50.112.46:3002/account/counts')
    .subscribe(response => {
      this.totalAccounts = response.totalAccounts;
      this.activeAccounts = response.activeAccounts;
      this.deactiveAccounts = response.deactiveAccounts;
    });
}

  get companyname() {
    return this.accountForm.get('companyname');
  }
  onSubmit(): void {
    if (this.accountForm.valid) {
      console.log('Select Status:', this.accountForm.value.accountisactive);
      setTimeout(() => {
        window.location.reload(); // Reloads after 1 second
      }, 100);
    } else {
      console.error('Form is Invalid');
    }

  }
  createAccount(): void {
    this.accountservice.addAccount(this.accountForm.value).subscribe(data => {
      if (data) {
        this.getAccountDetails();
        this.accountForm.reset();
      }
      console.log(data);
      console.log("Form submitted!");
      this.restaccountForm()
    });
  }
  getAccountDetails(): void {
    this.accountservice.getAccountDetails().subscribe({
      next: (apidata: any) => {
        this.account = apidata.sort((a: any, b: any) => b.createddate - a.createddate);

        console.log('Sorted Account Details:', this.account);
        this.accountservice.getAccountDetails().subscribe((data) => {
          this.apiData = data;
        });
      }

    });
  }

  getAccountOrderby(): void {
    this.accountservice.getAccountOrderby().subscribe({
      next: (apidata: any) => {
        this.account = apidata.sort((a: any, b: any) => b.createddate - a.createddate);

        console.log('Sorted Account Orderby Details:', this.account);
        this.accountservice.getAccountOrderby().subscribe((data) => {

        });
      }

    });
  }



  getDropDownValue() {
    this.accountservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
  }
  onSelectionChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    console.log('Selected City Name:', selectedValue)
    const selectedItem = this.dropdownItems.find((item) => item.cityname === selectedValue);
    console.log('Selected City', selectedValue)
    if (selectedItem) {
      this.accountForm.patchValue({
        cityid: selectedItem.cityId,
        companystate: selectedItem.citystate,
        companycountry: selectedItem.citycountry
      }); // Update cityId in the form
      console.log('Selected City ID:', selectedItem.cityId);
    }
  }
  editItem(item: any): void {
    this.isFormOpen = true;
    this.accountForm.patchValue(item);
  }

  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.companyname}?`)) {
      this.accountservice.deleteAccount(item.accountid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getAccountDetails(); // Refresh grid after delete
        },

        error: (err: any) => console.error('Error deleting account', err),
      });
    }
  }
  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Accounts Data');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "AccountsData.xlsx");
      });
    });

    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;

  }
  restaccountForm(): void {
    this.isFormOpen = false;
    this.accountForm.reset();
    this.accountForm.patchValue({
      companycity: '',  // Reset dropdown
      companystate: '',
      companycountry: '',
      isactive: true,      // Set default value
      createddate: new Date(),
      updateddate: new Date(),
    });
    setTimeout(() => {
      window.location.reload(); // Reloads after 1 second
    }, 100);
  }
  getDropDownValues(): void {
    this.http.get<any[]>('http://49.50.112.46:3002/city/list').subscribe(data => {
      this.dropdownItems = data;
    });
  }
  onCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.http.get<any>(`http://49.50.112.46:3002/account/${selectedCityId}`).subscribe(data => {
      this.accountForm.patchValue({
        cityid: data.cityid,
        companystate: data.citystate,
        companycountry: data.citycountry,

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




