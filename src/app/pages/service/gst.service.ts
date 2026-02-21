import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GstService {
  private apiUrl = environment.apiUrl;

  deleteGst(gstid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get(`${this.apiUrl}/gst/gstdelete`,gstid);
  
  }

  constructor(private http:HttpClient) { }

  getGstDetails():Observable<any>{
    console.log('Fetching GST data from API');
    return this.http.get(`${this.apiUrl}/gst/list`);
  
  }

  addGst (gstData :any):Observable<any>{
    console.log('Sending GST data to API', gstData);
    return this.http.post(`${this.apiUrl}/gst/gstsave`,gstData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vat/list`);
  }
}
