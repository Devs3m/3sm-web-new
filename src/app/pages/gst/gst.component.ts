import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{ GstService} from'../service/gst.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';

@Component({
  selector: 'app-gst',
  templateUrl: './gst.component.html',
  styleUrls: ['./gst.component.css']
})
export class GstComponent implements OnInit {

  gst!:any[];
  gstForm!:FormGroup;
  isFormOpen = false; // Controls the slider visibility
  dropdownOptions:any[]=[];
  selectedItem: any;
  dropdownItems: any[] =[];  
  data: { id: number; gstName: string; isActive: boolean }[] = [];
  apiData:any[] =[];
  longText: any;
  totalGst:number=0;
  activeGst:number=0;
  deactiveGst:number=0;
  
 
  constructor(private gstservice:GstService,
              private fromBuilder:FormBuilder,
              private http:HttpClient){

  }
  ngOnInit(): void {
    this.gstForm=this.fromBuilder.group({
    

    "totalgstpercent":[""],
    "igstpercent":[""],
    "cgstpercent":[""],
    "sgstpercent":[""],
    "ugstpercent":[""],
    "chesspercent":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "isactive":[""],
    "createdby":[1],
    "updatedby":[1],
    "username":["",Validators.required],
    "userid":[1],
    })
    this.getGstDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalGst: number;activeGst: number; deactiveGst: number}>('http://49.50.112.46:3002/gst/counts')
        .subscribe(response => {
          this.totalGst = response.totalGst; // Assign API response to totalAccounts
          this.activeGst = response.activeGst; // Assign API response to totalAccounts
          this.deactiveGst = response.deactiveGst; // Assign API response to totalAccounts
          console.log(this.totalGst)
        });
       
    }

  }
  onSubmit():void{
    if(this.gstForm.valid){
      console.log('Select Status:',this.gstForm.value.gstisactive);
    }else{
      console.error('Form is Invalid');
    }
    if(this.gstForm.valid){
      console.log('Select GST Status:',this.gstForm.value.gst);
    }else{
      console.error('Form is Invalid');
    }
  }
  createGst():void{
    this.gstservice.addGst(this.gstForm.value).subscribe(data=>{
      if(data){
        this.getGstDetails();
        this.gstForm.reset();
      }
      console.log(data);
    });
  }
  getGstDetails():void {
    this.gstservice.getGstDetails().subscribe({
      next:(apidata:any) => {
        this.gst=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted GST Details:', this.gst);
        this.gstservice.getGstDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
      });
      }
  getDropDownValue (){
    this.gstservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
   }
   editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.gstForm.patchValue(item); // Load item into form for editing
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.gstname}?`)) {
      this.gstservice.deleteGst(item.gstid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getGstDetails(); // Refresh grid after delete
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
  restGstForm(): void {
   this.isFormOpen=false;
   this.gstForm.reset();
   this.gstForm.patchValue({
    totalgstpercent: null,  // Reset dropdown
    igstpercent:'',
    cgstpercent:'',
    sgstpercent:'',
    ugstpercent:'',
    chesspercent:'',
    createdby: '',
    updatedby: '',
    isactive: true,      // Set default value
    createddate: new Date(),
    updateddate: new Date(),
  });
  }
  getDropDownValues(): void {
    this.http.get<any[]>('http://49.50.112.46:3002/gst/list').subscribe(data => {
      this.dropdownItems = data;
    });
  }
}
export class InputPrefixSuffixExample {}
