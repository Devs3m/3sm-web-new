import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class OrdersService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getOrders(accountId: number, instanceId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/ordersummary/list`, {
      params: { accountid: String(accountId), instanceid: String(instanceId) }
    });
  }

  getOrderCounts(accountId: number, instanceId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/ordersummary/counts`, {
      params: { accountid: String(accountId), instanceid: String(instanceId) }
    });
  }

  updateOrderStatus(orderid: number, orderstatus: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/ordersummary/status`, { orderid, orderstatus });
  }

  getOrderDetails(orderid: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/orderdetails/byorder/${orderid}`);
  }

  deleteOrder(orderid: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/ordersummary/delete/${orderid}`);
  }
}
