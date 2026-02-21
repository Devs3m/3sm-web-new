import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{ VatService} from'../service/vat.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-userrole',
  templateUrl: './vat.component.html',
  styleUrls: ['./vat.component.css']
})
export class VatComponent implements OnInit {

  vat!:any[];
  vatForm!:FormGroup;
  isFormOpen = false; // Controls the slider visibility
  dropdownOptions:any[]=[];
  selectedItem: any;
  dropdownItems: any[] =[];  
  data: { id: number; gstName: string; isActive: boolean }[] = [];
  apiData:any[] =[];
  longText: any;
  totalVat:number=0;
  activeVat:number=0;
  deactiveVat:number=0;
  private apiUrl = environment.apiUrl;
  
 
  constructor(private vatservice:VatService,
              private fromBuilder:FormBuilder,
              private http:HttpClient){


  }
  ngOnInit(): void {
    this.vatForm=this.fromBuilder.group({
    "vatpercent":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "vatisactive":[""],
    "createdby":[1],
    "updatedby":[1],
    "userid":[1],
    })
    this.getVatDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalVat: number;activeVat: number; deactiveVat: number}>(`${this.apiUrl}/vat/counts`)
        .subscribe(response => {
          this.totalVat = response.totalVat; // Assign API response to totalAccounts
          this.activeVat = response.activeVat; // Assign API response to totalAccounts
          this.deactiveVat = response.deactiveVat; // Assign API response to totalAccounts
          console.log(this.totalVat)
        });
       
    }

  }
  onSubmit():void{
    if(this.vatForm.valid){
      console.log('Select Status:',this.vatForm.value.vatisactive);
    }else{
      console.error('Form is Invalid');
    }
    if(this.vatForm.valid){
      console.log('Select GST Status:',this.vatForm.value.vat);
    }else{
      console.error('Form is Invalid');
    }
  }
  createVat():void{
    this.vatservice.addVat(this.vatForm.value).subscribe(data=>{
      if(data){
        this.getVatDetails();
        this.vatForm.reset();
      }
      console.log(data);
    });
  }
  getVatDetails():void {
    this.vatservice.getVatDetails().subscribe({
      next:(apidata:any) => {
        this.vat=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted VAT Details:', this.vat);
        this.vatservice.getVatDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
      });
      }
  getDropDownValue (){
    this.vatservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
   }
   editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.vatForm.patchValue(item); // Load item into form for editing
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.vatname}?`)) {
      this.vatservice.deleteVat(item.vatid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getVatDetails(); // Refresh grid after delete
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
        saveAs(blob, "GstData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;
    
  }
  restvatForm(): void {
   this.isFormOpen=false;
   this.vatForm.reset();
   this.vatForm.patchValue({
    vatpercent:'',
    createdby: '',
    updatedby: '',
    vatisactive: true,      // Set default value
    createddate: new Date(),
    updateddate: new Date(),
  });
  }
  getDropDownValues(): void {
    this.http.get<any[]>(`${this.apiUrl}/vat/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
}
export class InputPrefixSuffixExample {}

