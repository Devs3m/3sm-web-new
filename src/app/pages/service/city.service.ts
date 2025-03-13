import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
 
  deleteCity(cityid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/city/citydelete",cityid);
  
  }

  constructor(private http:HttpClient) { }

  getCityDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/city/list");
  
  }

  addCity (cityData :any):Observable<any>{
    console.log('Sending data to API', cityData);
    return this.http.post("http://49.50.112.46:3002/city/citysave",cityData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/city/list');
  }
}


