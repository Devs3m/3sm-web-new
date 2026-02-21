import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl;

  deleteProduct(productid: any): Observable<any> {
    console.log('Deleting product from API');
    return this.http.delete(`${this.apiUrl}/product/productdelete/${productid}`);
  }

  updateProduct(productData: any): Observable<any> {
    console.log('Updating product in API', productData);
    return this.http.put(`${this.apiUrl}/product/productupdate`, productData);
  }


  constructor(private http:HttpClient) { }

  getProductDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get(`${this.apiUrl}/product/list`);
  
  }

  addProduct (productData :any):Observable<any>{
    console.log('Sending data to API', productData);
    return this.http.post(`${this.apiUrl}/product/productsave`,productData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }
}
