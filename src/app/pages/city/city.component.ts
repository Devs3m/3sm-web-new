import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{ CityService} from'../service/city.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-userrole',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

@ViewChild('formSection') formSection!: ElementRef; // Reference to form

  isFormOpen = false; // Controls the slider visibility
  city!:any[];
  cityForm!: FormGroup;
  dropdownOptions:any[]=[];
  selectedItem: any;
  dropdownItems: any[] =[];  
  data: { id: number; cityName: string; isActive: boolean }[] = [];
  apiData:any[] =[];
  longText: any;
  totalCity:number=0;
  activeCity:number=0;
  deactiveCity:number =0;
  private apiUrl = environment.apiUrl;
 
  constructor(private cityservice:CityService,
              private fromBuilder:FormBuilder,
              private http:HttpClient){

  }
  ngOnInit(): void {
    this.cityForm=this.fromBuilder.group({
    
    "cityname":[""],
    "citystate":[""],
    "citycountry":[""],
    "companypincode":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "isactive":[""],
    "createdby":[1],
    "updatedby":[1],
    })
    this.getCityDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalCity: number;activeCity: number; deactiveCity: number}>(`${this.apiUrl}/city/counts`)
        .subscribe(response => {
          this.totalCity = response.totalCity; // Assign API response to totalAccounts
          this.activeCity = response.activeCity; // Assign API response to totalAccounts
          this.deactiveCity = response.deactiveCity; // Assign API response to totalAccounts
          console.log(this.totalCity)
        });
       
    }

  }
  getDropDownValue() {
    this.cityservice.getDropdownItems().subscribe({
      next: (items) => (this.dropdownItems = items),
      error: (err) => console.error('Error fetching dropdown items', err),
    });
   }
  onSubmit():void{
    if(this.cityForm.valid){
      console.log('Select Status:',this.cityForm.value.cityisactive);
    }else{
      console.error('Form is Invalid');
    }
    if(this.cityForm.valid){
      console.log('Select Status:',this.cityForm.value.city);
    }else{
      console.error('Form is Invalid');
    }
  }
  createCity():void{
    this.cityservice.addCity(this.cityForm.value).subscribe(data=>{
      if(data){
        this.getCityDetails();
        this.cityForm.reset();
      }
      console.log(data);
    });
  }
  getCityDetails():void {
    this.cityservice.getCityDetails().subscribe({
      next:(apidata:any) => {
        this.city=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted Userrole Details:', this.city);
        this.cityservice.getCityDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
      });
  }
  editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.cityForm.patchValue(item); // Load item into form for editing
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.cityname}?`)) {
      this.cityservice.deleteCity(item.cityid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getCityDetails(); // Refresh grid after delete
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
        saveAs(blob, "CityData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;
    
  }
  restCityForm(): void {
   this.isFormOpen=false;
   this.cityForm.reset();
   this.cityForm.patchValue({
    cityname: null,  // Reset dropdown
    createdby: '',
    updatedby: '',
    isactive: true,      // Set default value
    createddate: new Date(),
    updateddate: new Date(),
  });
  }
  getDropDownValues(): void {
    this.http.get<any[]>(`${this.apiUrl}/city/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
}
export class InputPrefixSuffixExample {}