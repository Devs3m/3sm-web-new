import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  
  private apiUrl = environment.apiUrl; 
  
  constructor(private http: HttpClient) { }

  getSalesById(salesId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/sales/${salesId}`);
  }

  getSalesOrderby() {
    console.log('Fetching sales data from API');
    return this.http.get(`${this.apiUrl}/sales/salesorderby`);
  }
  
  deleteSales(salesid: any): Observable<any> {
    console.log('Deleting sales:', salesid);
    return this.http.delete(`${this.apiUrl}/sales/salesdelete/${salesid}`);
  }

  getSalesDetails(): Observable<any> {
    console.log('Fetching sales data from API');
    return this.http.get(`${this.apiUrl}/sales/list`);
  }

  addSales(salesData: any): Observable<any> {
    console.log('Sending sales data to API', salesData);
    return this.http.post(`${this.apiUrl}/sales/salessave`, salesData);
  }

  updateSales(sales: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sales/salesupdate`, sales);
  }

  getSalesCounts(): Observable<{ totalSales: number; activeSales: number; deactiveSales: number; totalAmount: number }> {
    return this.http.get<{ totalSales: number; activeSales: number; deactiveSales: number; totalAmount: number }>(`${this.apiUrl}/sales/counts`);
  }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/customer/list`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/product/list`);
  }
}
