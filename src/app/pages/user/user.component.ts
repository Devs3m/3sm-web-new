import { Component, ElementRef, OnInit, ViewChild  } from '@angular/core';
import{ UserService} from'../service/user.service';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {


  restuserForm() {
    throw new Error('Method not implemented.');
    }
    isFormOpen = false; // Controls the slider visibility
    user!:any[];
    userForm!: FormGroup;
    dropdownOptions:any[]=[];
    selectedItem: any;
    dropdownItems: any[] =[];  
    data: { id: number; userName: string; city: string; isActive: boolean }[] = [];
    apiData:any[] =[];
    longText: any;
    totalUser:number=0;
    activeUser:number=0;
    deactiveUser:number=0;

    constructor(private userservice:UserService,
      private fromBuilder:FormBuilder,
      private http:HttpClient){}


  ngOnInit(): void {
    this.userForm=this.fromBuilder.group({
    "username":[""],
    "usermobile":["",Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
    "useremail":[""],
    "useraddress":[""],
    "usercity":["",Validators.required],
    "userstate":[""],
    "usercountry":[""],
    "userpincode":[""],
    "userrole":[""],
    "userasaenddate":[new Date()],
    "userasaamount":[""],
    "userpassword":[""],
    "userforgotpwquest":[""],
    "userforgotpwans":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "isactive":[""],
    "createdby":[1],
    "updatedby":[1],
    "accountid": [0],
    "instanceid": [0],
    "cityid": [1],
    "userisactive":[""],
    "userroleid":[""],
    })
    this.getUserDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalUser: number;activeUser: number; deactiveUser: number}>('http://49.50.112.46:3002/user/counts')
        .subscribe(response => {
          this.totalUser = response.totalUser; // Assign API response to totalAccounts
          this.activeUser = response.activeUser; // Assign API response to totalAccounts
          this.deactiveUser = response.deactiveUser; // Assign API response to totalAccounts
          console.log(this.totalUser)
        });
       
    }
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

  createUser():void{
    this.userservice.addUser(this.userForm.value).subscribe(data=>{
      if(data){
        this.getUserDetails();
        this.userForm.reset();
      }
      console.log('User Details:',data);
    });
  }

  getUserDetails():void {
    this.userservice.getUserDetails().subscribe({
      next:(apidata:any) => {
        this.user=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted User Details:', this.user);
        this.userservice.getUserDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
    });
  }
     
 getDropDownValue (){
  this.userservice.getDropdownItems().subscribe({
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
      this.userForm.patchValue({ 
        cityid: selectedItem.cityId ,
      companystate:selectedItem.citystate,
    companycountry:selectedItem.citycountry}); // Update cityId in the form
      console.log('Selected City ID:', selectedItem.cityId);
    }
  }
  editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.userForm.patchValue(item); // Load item into form for editing
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
    this.isFormOpen = true;}



  getDropDownValues(): void {
    this.http.get<any[]>('http://49.50.112.46:3002/user/list').subscribe(data => {
      this.dropdownItems = data;
    });
  }

  onCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.http.get<any>(`http://49.50.112.46:3002/user/${selectedCityId}`).subscribe(data => {
      this.userForm.patchValue({
        cityid:data.cityid,
        userstate: data.citystate,
        usercountry: data.citycountry,
       
      }); 
    });
  }
}
  export class InputPrefixSuffixExample {}
  


