import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { DigicardService } from '../../service/digicard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-digicard-form',
  templateUrl: './digicard-form.component.html',
  styleUrls: ['./digicard-form.component.css']
})
export class DigicardFormComponent {
  onSelectionChange($event: Event) {
    throw new Error('Method not implemented.');
  }

  @ViewChild('formSection') formSection!: ElementRef; // Reference to form

  isFormOpen = false; // Controls the slider visibility
  digicard!: any[];
  digicardForm!: FormGroup;
  dropdownOptions: any[] = [];
  selectedItem: any;
  dropdownItems: any[] = [];
  data: { id: number; cityName: string; isActive: boolean }[] = [];
  apiData: any[] = [];
  longText: any;
  totalDigicard: number = 0;
  activeDigicard: number = 0;
  deactiveDigicard: number = 0;

  constructor(
    private digicardservice: DigicardService,
    private fromBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {

  }
  ngOnInit(): void {
    this.digicardForm = this.fromBuilder.group({

      "accountid": [null],
      "Instanceid": [null],
      "companyname": [""],
      "companyaddress": [""],
      "companycity": [""],
      "companystate": [""],
      "companycountry": [""],
      "companypincode": [""],
      "companylogo": [""],
      "digicarddesignation": [""],
      "digicardcontactname": [""],
      "digicardmobile1": [""],
      "digicardalternatemobile": [""],
      "digicardemail": [""],
      "digicardwhatsapp": [""],
      "digicardwebsite": [""],
      "digicardlinkedin": [""],
      "digicardtwitter": [""],
      "digicardfacebook": [""],
      "digicardinstagram": [""],
      "digicardbusinesstype": [""],
      "digicardservice": [""],
      "digicardworkinghours": [""],
      "digicardqrcode": [""],
      "digicardprofileimage": [""],
      "digicardid": [null],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "digicardisactive": [""],
      "createdby": [1],
      "updatedby": [1],
    })
    this.getDigicardDetails()
    {
      // Fetch data from API
      this.http.get<{ totalDigicard: number; activeDigicard: number; deactiveDigicard: number }>('http://49.50.112.46:3002/digicard/counts')
        .subscribe(response => {
          this.totalDigicard = response.totalDigicard; // Assign API response to totalAccounts
          this.activeDigicard = response.activeDigicard; // Assign API response to totalAccounts
          this.deactiveDigicard = response.deactiveDigicard; // Assign API response to totalAccounts
          console.log(this.totalDigicard)
        });

    }

    this.getDropDownValues();

  }

  onSubmit(): void {
    if (this.digicardForm.valid) {
      console.log('Select Status:', this.digicardForm.value.digicardisactive);
    } else {
      console.error('Form is Invalid');
    }
    if (this.digicardForm.valid) {
      console.log('Select Status:', this.digicardForm.value.digicard);
    } else {
      console.error('Form is Invalid');
    }
  }

  createDigicard(): void {
    this.digicardservice.addDigicard(this.digicardForm.value).subscribe((data: any) => {
      if (data) {
        this.getDigicardDetails();
        this.digicardForm.reset();
      }
      console.log(data);
    });
  }

  getDigicardDetails(): void {
    this.digicardservice.getDigicardDetails().subscribe({
      next: (apidata: any) => {
        this.digicard = apidata.sort((a: any, b: any) => b.createddate - a.createddate);

        console.log('Sorted Digicard Details:', this.digicard);
        this.digicardservice.getDigicardDetails().subscribe((data) => {
          this.apiData = data;
        });
      }

    });
  }
  editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.digicardForm.patchValue(item); // Load item into form for editing
  }

  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.digicardname}?`)) {
      this.digicardservice.deleteDigicard(item.digicardid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getDigicardDetails(); // Refresh grid after delete
        },

        error: (err: any) => console.error('Error deleting account', err),
      });
    }
  }
  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('City Data');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "DigicardData.xlsx");
      });
    });

    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;

  }
  restDigicardForm(): void {
    this.isFormOpen = false;
    this.digicardForm.reset();
    this.digicardForm.patchValue({
      cityname: null,  // Reset dropdown
      createdby: '',
      updatedby: '',
      isactive: true,      // Set default value
      createddate: new Date(),
      updateddate: new Date(),
    });
  }

  getDropDownValues(): void {
    this.http.get<any[]>('http://49.50.112.46:3002/city/list').subscribe(data => {
      this.dropdownItems = data;
    });
  }

  routeToCard(id: number) {
    this.router.navigate(['/pages/digicard/card/'+id]);
  }
}
