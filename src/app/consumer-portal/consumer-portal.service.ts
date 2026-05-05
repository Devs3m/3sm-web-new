import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SaveOrderDto, SaveOrderResponse } from './models/consumer-order.dto';

@Injectable({ providedIn: 'root' })
export class ConsumerPortalService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAccountDetails(accountId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/account/details/${accountId}`);
  }

  getInstanceDetails(instanceId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/instance/details/${instanceId}`);
  }

  getProducts(accountId: number, instanceId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/product/portal`, {
      params: { accountid: String(accountId), instanceid: String(instanceId) }
    });
  }

  placeOrder(dto: SaveOrderDto): Observable<SaveOrderResponse> {
    return this.http.post<SaveOrderResponse>(`${this.apiUrl}/ordersummary/saveorder`, dto);
  }
}
