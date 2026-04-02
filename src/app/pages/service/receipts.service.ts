import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

/** POST /receipt body (matches Nest CreateReceiptDto). */
export interface CreateReceiptPayload {
  receiptsPaymentsid?: string;
  accountid: number;
  instanceid: number;
  invoiceno?: number | null;
  customerid: number;
  customername: string;
  invoicedate: string;
  grandtotal: number;
  receiptamount: number;
  receiptbalanceamount: number;
  vouchertype: string;
  createdby: number;
  updatedby: number;
  createddate?: string;
  updateddate?: string;
  isactive?: boolean;
  receiptdate: string;
  invoicepaymenttype: string;
  receiptpaymentmode: string;
}

/** Row from GET /receipt */
export interface ReceiptRecord {
  receiptsPaymentsid: string;
  accountid: number;
  instanceid: number;
  invoiceno: number | null;
  customerid: number;
  customername: string;
  invoicedate: string;
  grandtotal: number;
  receiptamount: number;
  receiptbalanceamount: number;
  vouchertype: string;
  createdby: number;
  updatedby: number;
  createddate: string;
  updateddate: string;
  isactive: boolean;
  receiptdate: string;
  invoicepaymenttype: string;
  receiptpaymentmode: string;
}

@Injectable({ providedIn: 'root' })
export class ReceiptsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  list(accountId: number, instanceId: number): Observable<ReceiptRecord[]> {
    return this.http.get<ReceiptRecord[]>(`${this.apiUrl}/receipt`, {
      params: {
        accountid: String(accountId),
        instanceid: String(instanceId),
      },
    });
  }

  create(body: CreateReceiptPayload): Observable<{ success: boolean; message: string; data: ReceiptRecord }> {
    return this.http.post<{ success: boolean; message: string; data: ReceiptRecord }>(`${this.apiUrl}/receipt`, body);
  }
}
