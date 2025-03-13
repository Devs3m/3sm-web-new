import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  deleteUserrole(userroleid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/userrole/userroledelete",userroleid);
  
  }

  constructor(private http:HttpClient) { }


  getUserroleDetails():Observable<any>{
    console.log('Fetching Userrole data from API');
    return this.http.get("http://49.50.112.46:3002/userrole/list");
  
  }

  addUserrole (userroleData :any):Observable<any>{
    console.log('Sending Userrole data to API', userroleData);
    return this.http.post("http://49.50.112.46:3002/userrole/userrolesave",userroleData)
  }
  
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/userrole/list');
  }
}
