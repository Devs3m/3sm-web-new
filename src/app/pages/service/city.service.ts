import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private apiUrl = environment.apiUrl;
 
  deleteCity(cityid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get(`${this.apiUrl}/city/citydelete`,cityid);
  
  }

  constructor(private http:HttpClient) { }

  getCityDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get(`${this.apiUrl}/city/list`);
  
  }

  addCity (cityData :any):Observable<any>{
    console.log('Sending data to API', cityData);
    return this.http.post(`${this.apiUrl}/city/citysave`,cityData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }
}


