import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstanceService {
 
  deleteInstance(instanceid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/instance/instancedelete",instanceid);
  
  }


  constructor(private http:HttpClient) { }

  getInstanceDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/instance/list");
  
  }

  addInstance (instanceData :any):Observable<any>{
    console.log('Sending data to API', instanceData);
    return this.http.post("http://49.50.112.46:3002/instance/instancesave",instanceData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/city/list');
  }
}
