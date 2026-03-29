import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
