import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import{ CityService} from'../service/city.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { environment } from '../../../environments/environment';
import { formatDateUtcDdSlashMmSlashYyyy } from '../service/date-utils';

@Component({
  selector: 'app-userrole',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

@ViewChild('formSection') formSection!: ElementRef; // Reference to form

  isFormOpen = false; // Controls the slider visibility
  isEditMode = false;
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

  createdDateCellValue = (rowData: any): string =>
    formatDateUtcDdSlashMmSlashYyyy(rowData?.createddate);
  updatedDateCellValue = (rowData: any): string =>
    formatDateUtcDdSlashMmSlashYyyy(rowData?.updateddate);

  /** Numeric sort when cityid is string/bigint from API */
  cityIdSortValue = (rowData: any): number => {
    const v = rowData?.cityid ?? rowData?.cityId ?? 0;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };
 
  constructor(private cityservice:CityService,
              private fromBuilder:FormBuilder,
              private http:HttpClient){

  }
  ngOnInit(): void {
    this.cityForm=this.fromBuilder.group({
    "cityid":[0],
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
  createCity(): void {
    const obs = this.isEditMode && this.cityForm.value.cityid
      ? this.cityservice.updateCity(this.cityForm.value)
      : this.cityservice.addCity(this.cityForm.value);
    obs.subscribe({
      next: (data) => {
        if (data) {
          this.getCityDetails();
          this.restCityForm();
        }
      },
      error: (err) => console.error(this.isEditMode ? 'Error updating city' : 'Error adding city', err),
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
    const row = item?.data ?? item;
    const cityid = row?.cityid ?? row?.cityId ?? (row ? row.cityid : null);
    if (!cityid) return;
    this.isEditMode = true;
    this.isFormOpen = true;
    this.cityservice.getDetailsById(cityid).subscribe({
      next: (r) => {
        if (!r) return;
        this.cityForm.patchValue({
          cityid: r.cityid ?? 0,
          cityname: r.cityname ?? '',
          citystate: r.citystate ?? '',
          citycountry: r.citycountry ?? '',
          isactive: r.isactive ?? true,
          createddate: r.createddate ?? new Date(),
          updateddate: r.updateddate ?? new Date(),
        });
      },
      error: (err) => console.error('Error fetching city details:', err)
    });
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
    this.isEditMode = false;
    this.restCityForm();
    this.isFormOpen = true;
  }
  restCityForm(): void {
   this.isFormOpen = false;
   this.isEditMode = false;
   this.cityForm.reset();
   this.cityForm.patchValue({
    cityid: 0,
    cityname: '',
    citystate: '',
    citycountry: '',
    createdby: 1,
    updatedby: 1,
    isactive: true,
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