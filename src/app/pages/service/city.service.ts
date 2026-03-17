import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = environment.apiUrl;
 
  deleteCity(cityid: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/city/citydelete/${cityid}`);
  }

  constructor(private http:HttpClient) { }

  getDetailsById(cityid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/city/details/${cityid}`);
  }

  getCityDetails():Observable<any>{
    return this.http.get(`${this.apiUrl}/city/list`);
  
  }

  addCity(cityData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/city/citysave`, cityData);
  }

  updateCity(cityData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/city/cityupdate`, cityData);
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }
}


