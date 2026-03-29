import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getSupplierList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/supplier/list`);
  }

  getDetailsById(supplierid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/supplier/details/${supplierid}`);
  }

  addSupplier(payload: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/supplier/suppliersave`, payload);
  }

  updateSupplier(payload: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/supplier/supplierupdate`, payload);
  }

  deleteSupplier(supplierid: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/supplier/supplierdelete/${supplierid}`);
  }

  getCityDropdown(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }
}
