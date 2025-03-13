import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VatService {

  deleteVat(vatid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/vat/vatdelete",vatid);
  
  }

  constructor(private http:HttpClient) { }

  getVatDetails():Observable<any>{
    console.log('Fetching Vat data from API');
    return this.http.get("http://49.50.112.46:3002/vat/list");
  
  }

  addVat (vatData :any):Observable<any>{
    console.log('Sending Vat data to API', vatData);
    return this.http.post("http://49.50.112.46:3002/vat/vatsave",vatData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/user/list');
  }
}
