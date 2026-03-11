import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { SaveSalessummaryDto, SaveSalessummaryResponse } from '../sales/models/save-salessummary.dto';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  
  private apiUrl = environment.apiUrl; 
  
  constructor(private http: HttpClient) { }

  getSalesById(salesId: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/sales/${salesId}`);
  }

  getSalesOrderby() {
    console.log('Fetching sales data from API');
    return this.http.get(`${this.apiUrl}/sales/salesorderby`);
  }
  
  deleteSales(salesid: any): Observable<any> {
    console.log('Deleting sales:', salesid);
    return this.http.delete(`${this.apiUrl}/sales/salesdelete/${salesid}`);
  }

  getSalesDetails(): Observable<any> {
    console.log('Fetching sales data from API');
    return this.http.get(`${this.apiUrl}/sales/list`);
  }

  addSales(salesData: any): Observable<any> {
    console.log('Sending sales data to API', salesData);
    return this.http.post(`${this.apiUrl}/sales/salessave`, salesData);
  }

  updateSales(sales: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/sales/salesupdate`, sales);
  }

  getSalesCounts(): Observable<{ totalSales: number; activeSales: number; deactiveSales: number; totalAmount: number }> {
    return this.http.get<{ totalSales: number; activeSales: number; deactiveSales: number; totalAmount: number }>(`${this.apiUrl}/sales/counts`);
  }

  getSalesSummary(): Observable<any> {
    return this.http.get(`${this.apiUrl}/salessummary`);
  }

  getSalesSummaryCounts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/salessummary/counts`);
  }

  getSalesSummaryList(): Observable<any[]>;
  getSalesSummaryList(accountId: number, instanceId?: number): Observable<any[]>;
  getSalesSummaryList(accountId?: number, instanceId?: number): Observable<any[]> {
    if (accountId != null && accountId !== undefined) {
      const params: { [k: string]: string } = { accountid: String(accountId) };
      if (instanceId != null && instanceId !== undefined) {
        params['instanceid'] = String(instanceId);
      }
      return this.http.get<any[]>(`${this.apiUrl}/salessummary/list`, { params });
    }
    return this.http.get<any[]>(`${this.apiUrl}/salessummary/list`);
  }

  /**
   * GET /salessummary/next-invoice-no?accountid=X&instanceid=Y
   * Returns { nextInvoiceNo: number } (MAX(invoiceno)+1 for that account+instance, or 1 if none).
   * Use on sales page load to set the default "Invoice #" for the new invoice form.
   */
  getNextInvoiceNo(accountId: number, instanceId: number): Observable<{ nextInvoiceNo: number }> {
    const params = { accountid: String(accountId), instanceid: String(instanceId) };
    return this.http.get<{ nextInvoiceNo: number }>(`${this.apiUrl}/salessummary/next-invoice-no`, { params }).pipe(
      catchError(() => of({ nextInvoiceNo: 1 }))
    );
  }

  /** Save salessummary + salesdetail in one transaction (Sales add page) */
  saveSalesSummaryWithDetails(dto: SaveSalessummaryDto): Observable<SaveSalessummaryResponse> {
    return this.http.post<SaveSalessummaryResponse>(`${this.apiUrl}/salessummary/save`, dto);
  }

  /** Get one salessummary by invoiceno (for edit) */
  getSalesSummaryByInvoice(invoiceno: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/salessummary/edit/${invoiceno}`);
  }

  /** Update salessummary + salesdetail in one transaction (PUT /salessummary/update) */
  updateSalesSummaryWithDetails(dto: SaveSalessummaryDto): Observable<SaveSalessummaryResponse> {
    return this.http.put<SaveSalessummaryResponse>(`${this.apiUrl}/salessummary/update`, dto);
  }

  /** Delete salessummary (and cascade salesdetail if DB supports) */
  deleteSalesSummary(invoiceno: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/salessummary/${invoiceno}`);
  }

  /** GET /salessummary/salesprint/:invoiceno – returns JSON: { salessummary, salesdetails, instance, customer }. */
  getSalesPrintData(invoiceno: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/salessummary/salesprint/${invoiceno}`);
  }

  /** GET /salessummary/salesprint/:invoiceno as PDF blob (if backend supports it). */
  getSalesPrint(invoiceno: number): Observable<Blob> {
    const headers = new HttpHeaders({ Accept: 'application/pdf' });
    return this.http.get(`${this.apiUrl}/salessummary/salesprint/${invoiceno}`, {
      headers,
      responseType: 'blob'
    });
  }

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/customer/list`);
  }

  getCustomerById(customerId: number | string): Observable<any> {
    return this.http.get(`${this.apiUrl}/customer/${customerId}`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/product/list`);
  }
}
