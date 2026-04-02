import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import {
  SaveInventorysummaryDto,
  SaveInventorysummaryResponse,
} from '../inventorysales/models/save-inventorysummary.dto';

@Injectable({
  providedIn: 'root',
})
export class InventorysalesService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getInventorySummaryCounts(
    accountId?: number,
    instanceId?: number
  ): Observable<{
    totalInventorysummary: number;
    activeInventorysummary: number;
    deactiveInventorysummary: number;
    totalAmount: number;
  }> {
    const params: Record<string, string> = {};
    if (accountId != null) params['accountid'] = String(accountId);
    if (instanceId != null) params['instanceid'] = String(instanceId);
    return this.http.get<any>(`${this.apiUrl}/inventorysummary/counts`, { params });
  }

  getInventorySummaryList(): Observable<any[]>;
  getInventorySummaryList(accountId: number, instanceId?: number): Observable<any[]>;
  getInventorySummaryList(accountId?: number, instanceId?: number): Observable<any[]> {
    if (accountId != null && accountId !== undefined) {
      const params: Record<string, string> = { accountid: String(accountId) };
      if (instanceId != null && instanceId !== undefined) {
        params['instanceid'] = String(instanceId);
      }
      return this.http.get<any[]>(`${this.apiUrl}/inventorysummary/list`, { params });
    }
    return this.http.get<any[]>(`${this.apiUrl}/inventorysummary/list`);
  }

  getNextInvoiceNo(
    accountId: number,
    instanceId: number
  ): Observable<{ nextInvoiceNo: number; displayInvoiceNo?: number }> {
    const params = { accountid: String(accountId), instanceid: String(instanceId) };
    return this.http
      .get<{ nextInvoiceNo: number; displayInvoiceNo?: number }>(
        `${this.apiUrl}/inventorysummary/next-invoice-no`,
        { params }
      )
      .pipe(catchError(() => of({ nextInvoiceNo: 1, displayInvoiceNo: 1 })));
  }

  saveInventorySummaryWithDetails(
    dto: SaveInventorysummaryDto
  ): Observable<SaveInventorysummaryResponse> {
    return this.http.post<SaveInventorysummaryResponse>(
      `${this.apiUrl}/inventorysummary/save`,
      dto
    );
  }

  getInventorySummaryByInvoice(
    invoiceno: number,
    accountId?: number,
    instanceId?: number
  ): Observable<any> {
    const params: Record<string, string> = {};
    if (accountId != null) params['accountid'] = String(accountId);
    if (instanceId != null) params['instanceid'] = String(instanceId);
    return this.http.get(`${this.apiUrl}/inventorysummary/edit/${invoiceno}`, { params });
  }

  updateInventorySummaryWithDetails(
    dto: SaveInventorysummaryDto
  ): Observable<SaveInventorysummaryResponse> {
    return this.http.put<SaveInventorysummaryResponse>(
      `${this.apiUrl}/inventorysummary/update`,
      dto
    );
  }

  deleteInventorySummary(
    invoiceno: number,
    accountId?: number,
    instanceId?: number
  ): Observable<any> {
    const params: Record<string, string> = {};
    if (accountId != null) params['accountid'] = String(accountId);
    if (instanceId != null) params['instanceid'] = String(instanceId);
    return this.http.delete(
      `${this.apiUrl}/inventorysummary/inventorysummarydelete/${invoiceno}`,
      { params }
    );
  }

  getInventoryPrintData(
    invoiceno: number,
    accountId?: number,
    instanceId?: number
  ): Observable<any> {
    const params: Record<string, string> = {};
    if (accountId != null) params['accountid'] = String(accountId);
    if (instanceId != null) params['instanceid'] = String(instanceId);
    return this.http.get(`${this.apiUrl}/inventorysummary/inventoryprint/${invoiceno}`, {
      params,
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

  getProductDetails(productid: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/product/details/${productid}`);
  }

  getProductLedger(
    startDate: string,
    endDate: string,
    accountId: number,
    instanceId: number,
    productId?: number | null,
    batchNo?: string | null
  ): Observable<
    { date: string; type: string; ref: string; description: string; batchNo: string; openingQty: number | null; qty: number; closingQty: number | null }[]
  > {
    const params: Record<string, string> = {
      startDate,
      endDate,
      accountid: String(accountId),
      instanceid: String(instanceId),
    };
    if (productId != null && productId > 0) params['productid'] = String(productId);
    if (batchNo != null && batchNo.trim() !== '') params['batchno'] = batchNo.trim();
    return this.http.get<any[]>(`${this.apiUrl}/inventorysummary/product-ledger`, { params });
  }

  getProductLedgerBatches(
    startDate: string,
    endDate: string,
    accountId: number,
    instanceId: number,
    productId?: number | null
  ): Observable<string[]> {
    const params: Record<string, string> = {
      startDate,
      endDate,
      accountid: String(accountId),
      instanceid: String(instanceId),
    };
    if (productId != null && productId > 0) params['productid'] = String(productId);
    return this.http.get<string[]>(`${this.apiUrl}/inventorysummary/product-ledger-batches`, { params });
  }

  getSalesLedger(
    startDate: string,
    endDate: string,
    accountId: number,
    instanceId: number,
    paymentType?: string | null
  ): Observable<
    {
      date: string;
      source: string;
      invoiceno: string;
      customerName: string;
      paymentType: string;
      paymentStatus: string;
      amount: number;
    }[]
  > {
    const params: Record<string, string> = {
      startDate,
      endDate,
      accountid: String(accountId),
      instanceid: String(instanceId),
    };
    if (paymentType != null && paymentType.trim() !== '') params['paymenttype'] = paymentType.trim();
    return this.http.get<any[]>(`${this.apiUrl}/inventorysummary/sales-ledger`, { params });
  }

  getSalesLedgerPaymentTypes(accountId: number, instanceId: number): Observable<string[]> {
    const params: Record<string, string> = {
      accountid: String(accountId),
      instanceid: String(instanceId),
    };
    return this.http.get<string[]>(`${this.apiUrl}/inventorysummary/sales-ledger-payment-types`, { params });
  }

  getCreditCollections(
    startDate: string,
    endDate: string,
    accountId: number,
    instanceId: number
  ): Observable<
    {
      date: string;
      source: 'SERVICE_SALES' | 'PRODUCT_SALES';
      rawInvoiceno: number;
      invoiceno: string;
      customerid: number;
      customerName: string;
      amount: number;
      paymentStatus: string;
    }[]
  > {
    const params: Record<string, string> = {
      startDate,
      endDate,
      accountid: String(accountId),
      instanceid: String(instanceId),
    };
    return this.http.get<any[]>(`${this.apiUrl}/inventorysummary/credit-collections`, { params });
  }

  collectCreditPayment(
    invoices: Array<{ source: 'SERVICE_SALES' | 'PRODUCT_SALES'; invoiceno: number }>,
    accountId: number,
    instanceId: number,
    paymentDate?: string | null,
    paymentType?: string | null,
    paymentMode?: string | null,
    collectionMode?: 'FULL' | 'PARTIAL' | null
  ): Observable<{ success: boolean; updatedCount: number }> {
    return this.http.put<{ success: boolean; updatedCount: number }>(`${this.apiUrl}/inventorysummary/credit-collections/collect`, {
      invoices,
      accountid: accountId,
      instanceid: instanceId,
      paymentDate: paymentDate ?? null,
      paymentType: paymentType ?? null,
      paymentMode: paymentMode ?? null,
      collectionMode: collectionMode ?? null,
    });
  }

  /** For inventory sales: products from currentstock with qty > 0 */
  getProductsFromCurrentStock(
    accountId: number,
    instanceId: number
  ): Observable<any[]> {
    const params = {
      accountid: String(accountId),
      instanceid: String(instanceId),
    };
    return this.http.get<any[]>(`${this.apiUrl}/currentstock/available-for-sale`, {
      params,
    });
  }
}
