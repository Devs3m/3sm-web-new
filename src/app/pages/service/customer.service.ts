import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCustomerList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/customer/list`);
  }

  getCustomerById(customerId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/customer/${customerId}`);
  }

  getCustomerCounts(): Observable<{ totalCustomers: number; activeCustomers: number; deactiveCustomers: number }> {
    return this.http.get<{ totalCustomers: number; activeCustomers: number; deactiveCustomers: number }>(`${this.apiUrl}/customer/counts`);
  }

  addCustomer(customerData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/customer/customersave`, customerData);
  }

  updateCustomer(customerData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/customer/customerupdate`, customerData);
  }

  deleteCustomer(customerId: any): Observable<any> {
    return this.http.delete(`${this.apiUrl}/customer/customerdelete/${customerId}`);
  }

  getCityDropdown(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }
}
