import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  deleteProduct(productid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/product/productdelete",productid);
  
  }


  constructor(private http:HttpClient) { }

  getProductDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/product/list");
  
  }

  addProduct (productData :any):Observable<any>{
    console.log('Sending data to API', productData);
    return this.http.post("http://49.50.112.46:3002/product/productsave",productData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/city/list');
  }
}
