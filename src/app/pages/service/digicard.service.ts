import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DigicardService {
  private apiUrl = environment.apiUrl;
 
  deleteDigicard(digicardid :any):Observable<any>{
    console.log('Fetching Digicard data from API');
    return this.http.get(`${this.apiUrl}/digicard/digicarddelete`,digicardid);
  
  }

  constructor(private http:HttpClient) { }

  getDigicardDetails():Observable<any>{
    console.log('Fetching Digicard data from API');
    return this.http.get(`${this.apiUrl}/digicard/list`);
  
  }

  addDigicard (digicardData :any):Observable<any>{
    console.log('Sending Digicard data to API', digicardData);
    return this.http.post(`${this.apiUrl}/digicard/digicardsave`,digicardData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/digicard/list`);
  }
}


