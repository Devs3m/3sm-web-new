import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentstockService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getByInstanceAndAccount(instanceId: number, accountId: number): Observable<any[]> {
    const params = { instanceid: String(instanceId), accountid: String(accountId) };
    return this.http.get<any[]>(`${this.apiUrl}/currentstock/by-instance`, { params });
  }

  getAllCurrentstocks(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/currentstock/list`);
  }

  /** Σ (qty × cost/price) and distinct product count (qty > 0) */
  getStockValueTotal(accountId: number, instanceId: number): Observable<{ totalStockValue: number; productsAvailable: number }> {
    const params = { accountid: String(accountId), instanceid: String(instanceId) };
    return this.http
      .get<{ totalStockValue: number; productsAvailable: number }>(`${this.apiUrl}/currentstock/stock-value-total`, { params })
      .pipe(catchError(() => of({ totalStockValue: 0, productsAvailable: 0 })));
  }
}
