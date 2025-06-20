import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { AbstractControl, ValidationErrors } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private apiUrl = 'http://49.50.112.46:3002'; 
  accountservice: any;
  
  

  getAccountById(accountId: any) {
    throw new Error('Method not implemented.');
  }
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
  updateAccount(account: any) {
    return this.http.put(`http://49.50.112.46:3002/account/accountupdate`, account);
  }
  
  isCompanyNameTaken(companyName: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/account/check-company-name?name=${companyName}`);
  }
  checkCompanyName = (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);
  
    return this.accountservice.isCompanyNameTaken(control.value).pipe(
      map((isTaken) => (isTaken ? { companyNameTaken: true } : null)),
      catchError(() => of(null))
    );
  };
  
}
