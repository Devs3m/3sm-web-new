import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GstService {

  deleteGst(gstid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/gst/gstdelete",gstid);
  
  }

  constructor(private http:HttpClient) { }

  getGstDetails():Observable<any>{
    console.log('Fetching GST data from API');
    return this.http.get("http://49.50.112.46:3002/gst/list");
  
  }

  addGst (gstData :any):Observable<any>{
    console.log('Sending GST data to API', gstData);
    return this.http.post("http://49.50.112.46:3002/gst/gstsave",gstData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/vat/list');
  }
}
