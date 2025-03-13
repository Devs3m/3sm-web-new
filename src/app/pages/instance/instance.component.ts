import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{ InstanceService} from'../service/instance.service';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';

@Component({
  selector: 'app-instance,input-prefix-suffix-example',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css'] 
})

export class InstanceComponent implements OnInit {


isFormOpen = false; // Controls the slider visibility
instance!:any[];
instanceForm!: FormGroup;
dropdownOptions:any[]=[];
selectedItem: any;
dropdownItems: any[] =[];  
data: { id: number; instanceName: string; city: string; isActive: boolean }[] = [];
apiData:any[] =[];
longText: any;
totalInstance:number=0;
activeInstance:number=0;
deactiveInstance:number=0;

 
  constructor(private instanceservice:InstanceService,
              private fromBuilder:FormBuilder,
              private http:HttpClient){

  }

  ngOnInit(): void {
    this.instanceForm=this.fromBuilder.group({
    
    "instancename":[""],
    "ownername":[""],
    "ownermobile":[""],
    "owneremail":[""],
    "managername":[""],
    "managermobile":["",Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
    "manageremail":[""],
    "instanceaddress":[""],
    "instancecity":["",Validators.required],
    "instancestate":[""],
    "instancecountry":[""],
    "instancepincode":[""],
    "instancesalesamount":[""],
    "instancesalesdate":[new Date()],
    "instanceasaenddate":[new Date()],
    "instanceasaamount":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "createdby":[1],
    "updatedby":[1],
    "instanceisactive":["",Validators.required],
    "instancegstno":[""],
    "instancevatno":[""],
    "instancefssaino":[""],
    "instanceid": [0],
    "accountid": [1],
    "cityid": [1]
    })
    this.getInstanceDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalInstance: number;activeInstance: number; deactiveInstance: number}>('http://49.50.112.46:3002/instance/counts')
        .subscribe(response => {
          this.totalInstance = response.totalInstance; // Assign API response to totalAccounts
          this.activeInstance = response.activeInstance; // Assign API response to totalAccounts
          this.deactiveInstance = response.deactiveInstance; // Assign API response to totalAccounts
          console.log(this.totalInstance)
        });
       
    }

  }

  onSubmit():void{
    if(this.instanceForm.valid){
      console.log('Select Status:',this.instanceForm.value.instanceisactive);
    }else{
      console.error('Form is Invalid');
    }
    if(this.instanceForm.valid){
      console.log('Select Status:',this.instanceForm.value.instancecity);
    }else{
      console.error('Form is Invalid');
    }
  }

  createInstance():void{
    this.instanceservice.addInstance(this.instanceForm.value).subscribe(data=>{
      if(data){
        this.getInstanceDetails();
        this.instanceForm.reset();
      }
      console.log(data);
    });
  }

  getInstanceDetails():void {
    this.instanceservice.getInstanceDetails().subscribe({
      next:(apidata:any) => {
        this.instance=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted Instance Details:', this.instance);
        this.instanceservice.getInstanceDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
    });
  }

 getDropDownValue (){
  this.instanceservice.getDropdownItems().subscribe({
    next: (items) => (this.dropdownItems = items),
    error: (err) => console.error('Error fetching dropdown items', err),
  });
 }

  onSelectionChange(event:Event):void{
    const selectedValue=  (event.target  as HTMLSelectElement).value;
    console.log('Selected City Name:',selectedValue)
    const selectedItem = this.dropdownItems.find((item) => item.cityname === selectedValue);
    console.log('Selected City',selectedValue)
    if (selectedItem) {
      this.instanceForm.patchValue({ 
        cityid: selectedItem.cityId ,
      companystate:selectedItem.citystate,
    companycountry:selectedItem.citycountry}); // Update cityId in the form
      console.log('Selected City ID:', selectedItem.cityId);
    }
  }
  editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.instanceForm.patchValue(item); // Load item into form for editing
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.instancename}?`)) {
      this.instanceservice.deleteInstance(item.instanceid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getInstanceDetails(); // Refresh grid after delete
      },

      error: (err: any) => console.error('Error deleting Instance', err),
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
    
  }
  restinstanceForm(): void {
   this.isFormOpen=false;
   this.instanceForm.reset();
   this.instanceForm.patchValue({
    companycity: null,  // Reset dropdown
    companystate: '',
    companycountry: '',
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
  onCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.http.get<any>(`http://49.50.112.46:3002/instance/${selectedCityId}`).subscribe(data => {
      this.instanceForm.patchValue({
        cityid:data.cityid,
        companystate: data.citystate,
        companycountry: data.citycountry,
       
      }); 
    });
  }
}



  export class InputPrefixSuffixExample {}
  
 
 //onSelectionChange(event: any): void {
    //this.selectedItem = event.target.value;
   // console.log('Selected item:', this.selectedItem);--
 // }
//}

