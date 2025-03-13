import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{ UserroleService} from'../service/userrole.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';



@Component({
  selector: 'app-userrole',
  templateUrl: './userrole.component.html',
  styleUrls: ['./userrole.component.css']
})
export class UserroleComponent implements OnInit {



@ViewChild('formSection') formSection!: ElementRef; // Reference to form

isFormOpen = false; // Controls the slider visibility
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
  
 
  constructor(private userroleservice:UserroleService,
              private fromBuilder:FormBuilder,
              private http:HttpClient){}

  
  ngOnInit(): void {
    this.userroleForm=this.fromBuilder.group({
    "userrolename":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "userroleisactive":[""],
    "createdby":[1],
    "updatedby":[1],
    "userroleid": [0],
    "accountid": [1],
    "instanceid": [1]
    })
    this.getUserroleDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalUserrole: number;activeUserrole: number; deactiveUserrole: number}>('http://49.50.112.46:3002/userrole/counts')
        .subscribe(response => {
          this.totalUserrole = response.totalUserrole; // Assign API response to totalAccounts
          this.activeUserrole = response.activeUserrole; // Assign API response to totalAccounts
          this.deactiveUserrole = response.deactiveUserrole; // Assign API response to totalAccounts
          console.log(this.totalUserrole)
        });
       
    }

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
    this.userroleservice.addUserrole(this.userroleForm.value).subscribe(data=>{
      if(data){
        this.getUserroleDetails();
        this.userroleForm.reset();
      }
      console.log(data);
    });
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
    this.isFormOpen = true; // Open the form for editing
    this.userroleForm.patchValue(item); // Load item into form for editing
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.companyname}?`)) {
      this.userroleservice.deleteUserrole(item.userroleid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getUserroleDetails(); // Refresh grid after delete
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
        saveAs(blob, "UserroleData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;
    
  }
  restuserroleForm(): void {
   this.isFormOpen=false;
   this.userroleForm.reset();
   this.userroleForm.patchValue({
    userrolename: null,  // Reset dropdown
    createdby: '',
    updatedby: '',
    userroleisactive: true,      // Set default value
    createddate: new Date(),
    updateddate: new Date(),
  });
  }
  getDropDownValues(): void {
    this.http.get<any[]>('http://49.50.112.46:3002/userrole/list').subscribe(data => {
      this.dropdownItems = data;
    });
  }
}
  
    export class InputPrefixSuffixExample {}




