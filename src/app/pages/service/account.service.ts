import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  getAccountOrderby() {
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/account/accountorderby");
  }
  deleteAccount(accountid :any):Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/account/accountdelete",accountid);
  
  }
  constructor(private http:HttpClient) { }

  
  getAccountDetails():Observable<any>{
    console.log('Fetching data from API');
    return this.http.get("http://49.50.112.46:3002/account/list");
  
  }

  addAccount (accountData :any):Observable<any>{
    console.log('Sending data to API', accountData);
    return this.http.post("http://49.50.112.46:3002/account/accountsave",accountData)
  }
  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>('http://49.50.112.46:3002/city/list');
  }
  
}
