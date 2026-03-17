import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  
  private apiUrl = environment.apiUrl; 
  
  constructor(private http: HttpClient) { }

  getAccountById(accountId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/account/${accountId}`);
  }

  getDetailsById(accountid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/account/details/${accountid}`);
  }

  getAccountOrderby() {
    return this.http.get(`${this.apiUrl}/account/accountorderby`);
  }
  
  deleteAccount(accountid: any): Observable<any> {
    console.log('Deleting account:', accountid);
    return this.http.delete(`${this.apiUrl}/account/accountdelete/${accountid}`);
  }

  getAccountDetails(): Observable<any> {
    return this.http.get(`${this.apiUrl}/account/list`);
  }

  addAccount(accountData: any): Observable<any> {
    console.log('Sending data to API', accountData);
    return this.http.post(`${this.apiUrl}/account/accountsave`, accountData);
  }

  getDropdownItems(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/city/list`);
  }

  updateAccount(account: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/account/accountupdate`, account);
  }
  
  // Check if company name already exists
  checkCompanyNameExists(companyName: string, accountId?: number): Observable<boolean> {
    if (!companyName || companyName.trim() === '') {
      return of(false);
    }
    const url = `${this.apiUrl}/account/check-company-name?name=${encodeURIComponent(companyName.trim())}${accountId ? `&accountId=${accountId}` : ''}`;
    return this.http.get<{ exists: boolean } | boolean>(url).pipe(
      map((response: any) => {
        if (typeof response === 'boolean') {
          return response;
        }
        return response.exists === true || response === true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  // Check if mobile number already exists
  checkMobileNumberExists(mobileNumber: string, accountId?: number): Observable<boolean> {
    if (!mobileNumber || mobileNumber.trim() === '') {
      return of(false);
    }
    const cleanMobile = mobileNumber.trim().replace(/\D/g, '');
    const url = `${this.apiUrl}/account/check-mobile?mobile=${cleanMobile}${accountId ? `&accountId=${accountId}` : ''}`;
    return this.http.get<{ exists: boolean } | boolean>(url).pipe(
      map((response: any) => {
        if (typeof response === 'boolean') {
          return response;
        }
        return response.exists === true || response === true;
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  createUser(data: any) {
    return this.http.post(`${this.apiUrl}/api/user`, data).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
