import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { SavePurchaseDto, SavePurchaseResponse } from '../purchase/models/save-purchase.dto';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/purchase/list`);
  }

  getByGrn(purchasegrnno: string | number): Observable<{ summary: any; details: any[] }> {
    return this.http.get<{ summary: any; details: any[] }>(
      `${this.apiUrl}/purchase/grn/${encodeURIComponent(String(purchasegrnno))}`
    );
  }

  /**
   * GET /purchase/next-grn-no — same encoding rules as sales invoice (per account + instance).
   */
  getNextGrnNo(accountId: number, instanceId: number): Observable<{ nextGrnNo: number; displayGrnNo: number }> {
    const params = new HttpParams().set('accountid', String(accountId)).set('instanceid', String(instanceId));
    return this.http
      .get<{ nextGrnNo: number; displayGrnNo: number }>(`${this.apiUrl}/purchase/next-grn-no`, { params })
      .pipe(catchError(() => of({ nextGrnNo: 1, displayGrnNo: 1 })));
  }

  save(dto: SavePurchaseDto): Observable<SavePurchaseResponse> {
    return this.http.post<SavePurchaseResponse>(`${this.apiUrl}/purchase/save`, dto);
  }

  update(dto: SavePurchaseDto): Observable<SavePurchaseResponse> {
    return this.http.put<SavePurchaseResponse>(`${this.apiUrl}/purchase/update`, dto);
  }

  delete(purchasegrnno: string | number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(
      `${this.apiUrl}/purchase/delete/${encodeURIComponent(String(purchasegrnno))}`
    );
  }
}
