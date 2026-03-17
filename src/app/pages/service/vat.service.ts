import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VatService {
  private apiUrl = environment.apiUrl;

  deleteVat(vatid :any):Observable<any>{
    return this.http.get(`${this.apiUrl}/vat/vatdelete`,vatid);
  
  }

  constructor(private http:HttpClient) { }

  getDetailsById(vatid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/vat/details/${vatid}`);
  }

  getVatDetails():Observable<any>{
    console.log('Fetching Vat data from API');
    return this.http.get(`${this.apiUrl}/vat/list`);
  
  }

  addVat (vatData :any):Observable<any>{
    console.log('Sending Vat data to API', vatData);
    return this.http.post(`${this.apiUrl}/vat/vatsave`,vatData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/user/list`);
  }
}
