import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GstService {
  private apiUrl = environment.apiUrl;

  deleteGst(gstid: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/gst/gstdelete/${gstid}`);
  }

  constructor(private http:HttpClient) { }

  getDetailsById(gstid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/gst/details/${gstid}`);
  }

  getGstDetails():Observable<any>{
    console.log('Fetching GST data from API');
    return this.http.get(`${this.apiUrl}/gst/list`);
  
  }

  addGst(gstData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/gst/gstsave`, gstData);
  }

  updateGst(gstData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/gst/gstupdate`, gstData);
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/vat/list`);
  }
}
