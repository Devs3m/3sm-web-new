import { Component,ElementRef, OnInit, ViewChild  } from '@angular/core';
import{ ProductService} from'../service/product.service';
import { FormBuilder,FormGroup,Validators  } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

isFormOpen = false; // Controls the slider visibility
product!:any[];
productForm!: FormGroup;
dropdownOptions:any[]=[];
selectedItem: any;
dropdownItems: any[] =[];  
data: { id: number; productName: string; city: string; isActive: boolean }[] = [];
apiData:any[] =[];
longText: any;
totalProduct:number=0;
activeProduct:number=0;
deactiveProduct:number=0;

 
  constructor(private productservice:ProductService,
              private fromBuilder:FormBuilder,
              private http:HttpClient){

  }

  ngOnInit(): void {
    this.productForm=this.fromBuilder.group({
    
    "productname":[""],
    "productgeneric":[""],
    "manufacturerid":[1],
    "productmanufacturer":[""],
    "packid":[1],
    "productpackname":[""],
    "productpackqty":[""],
    "gstid":[1],
    "productgstpercent":[""],
    "taxid":[1],
    "producttaxpercent":[""],
    "productcategoryid":[1],
    "productcategory":[""],
    "productsubcategory":[""],
    "productlastmrp":[""],
    "productlastprice":[""],
    "productlastcost":[""],
    "productsaledisper":[""],
    "productpurdisper":[""],
    "productlastpuroffqty":[""],
    "productlastpurofffreeqty":[""],
    "productimage":[""],
    "productdescription":[""],
    "productlastsaloffqty":[""],
    "productlastsalofffreeqty":[""],
    "createddate":[new Date()],
    "updateddate":[new Date()],
    "createdby":[1],
    "updatedby":[1],
    "productisactive":["",Validators.required],
    "instanceid": [0],
    "accountid": [1],
    "userid": [1],
    "genericid": [""]
    })
    this.getProductDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get<{ totalProduct: number;activeProduct: number; deactiveProduct: number}>('http://49.50.112.46:3002/product/counts')
        .subscribe(response => {
          this.totalProduct = response.totalProduct; // Assign API response to totalAccounts
          this.activeProduct = response.activeProduct; // Assign API response to totalAccounts
          this.deactiveProduct = response.deactiveProduct; // Assign API response to totalAccounts
          console.log(this.totalProduct)
        });
       
    }

  }

  onSubmit():void{
    if(this.productForm.valid){
      console.log('Select Status:',this.productForm.value.productisactive);
    }else{
      console.error('Form is Invalid');
    }
  
  }

  createProduct():void{
    this.productservice.addProduct(this.productForm.value).subscribe(data=>{
      if(data){
        this.getProductDetails();
        this.productForm.reset();
      }
      console.log(data);
    });
  }

  getProductDetails():void {
    this.productservice.getProductDetails().subscribe({
      next:(apidata:any) => {
        this.product=apidata.sort((a: any, b: any) => b.createddate - a.createddate);
        
        console.log('Sorted Product Details:', this.product);
        this.productservice.getProductDetails().subscribe((data) =>{
          this.apiData=data;
        });}
     
    });
  }

 getDropDownValue (){
  this.productservice.getDropdownItems().subscribe({
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
      this.productForm.patchValue({ 
        cityid: selectedItem.cityId ,
      companystate:selectedItem.citystate,
    companycountry:selectedItem.citycountry}); // Update cityId in the form
      console.log('Selected City ID:', selectedItem.cityId);
    }
  }
  editItem(item: any): void {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.productForm.patchValue(item); // Load item into form for editing
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.productname}?`)) {
      this.productservice.deleteProduct(item.productid).subscribe({
        next:() => {
        console.log("Deleted:", item);
        this.getProductDetails(); // Refresh grid after delete
      },

      error: (err: any) => console.error('Error deleting Instance', err),
    });
  }
}
  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Product Data');
  
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "ProductData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;
    
  }
  restproductForm(): void {
   this.isFormOpen=false;
   this.productForm.reset();
   this.productForm.patchValue({
    productname: null,  // Reset dropdown
    productgeneric: '',
    productmanufacturer: '',
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
      this.productForm.patchValue({
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

