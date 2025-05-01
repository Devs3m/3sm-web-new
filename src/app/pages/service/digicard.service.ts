import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DigicardService {
 
  deleteDigicard(digicardid :any):Observable<any>{
    console.log('Fetching Digicard data from API');
    return this.http.get("http://49.50.112.46:3002/digicard/digicarddelete",digicardid);
  
  }

  constructor(private http:HttpClient) { }

  getDigicardDetails():Observable<any>{
    console.log('Fetching Digicard data from API');
    return this.http.get("http://49.50.112.46:3002/digicard/list");
  
  }

  addDigicard(digicardData :any):Observable<any>{
    console.log('Sending Digicard data to API', digicardData);
    return this.http.post("http://49.50.112.46:3002/digicard/digicardsave",digicardData)
  }

  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/digicard/list');
  }
}


