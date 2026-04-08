import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { InventorysalesService } from '../service/inventorysales.service';
import { CreateReceiptPayload, ReceiptsService } from '../service/receipts.service';
import { CreditCollectionRow } from './finance.models';

export interface CollectCreditPaymentParams {
  invoices: Array<{ source: 'SERVICE_SALES' | 'PRODUCT_SALES'; invoiceno: number }>;
  accountId: number;
  instanceId: number;
  paymentDate: string | null;
  paymentType: string;
  paymentMode: string | null;
  mode: 'FULL' | 'PARTIAL';
}

/**
 * Orchestrates inventory credit collection (PUT) then receipt rows (POST /receipt).
 * Keeps HTTP and payload rules out of the FinanceComponent template.
 */
@Injectable({ providedIn: 'root' })
export class FinanceCollectionFacade {
  constructor(
    private inventorysalesService: InventorysalesService,
    private receiptsService: ReceiptsService,
    private authService: AuthService
  ) {}

  collectCreditPayment(p: CollectCreditPaymentParams): Observable<{ success: boolean; updatedCount: number }> {
    return this.inventorysalesService.collectCreditPayment(
      p.invoices,
      p.accountId,
      p.instanceId,
      p.paymentDate,
      p.paymentType,
      p.paymentMode,
      p.mode
    );
  }

  /**
   * Writes one possales.receipt row per invoice after a successful collect call.
   */
  async postReceiptRowsForCreditCollection(
    rows: CreditCollectionRow[],
    mode: 'FULL' | 'PARTIAL',
    receivedAmount: number,
    paymentDateIso: string | null,
    ctx: {
      receiptNo: string;
      paymentReceiptType: string;
      paymentMode: string;
      accountId: number;
      instanceId: number;
      resolvePaymentDate: (isoOrNull: string | null) => string;
    }
  ): Promise<void> {
    const paymentDate = ctx.resolvePaymentDate(paymentDateIso);
    const uid = this.authService.getUserId();
    const userId = Number.isFinite(uid) && (uid as number) > 0 ? (uid as number) : 1;
    const sortForFifo = (a: CreditCollectionRow, b: CreditCollectionRow): number => {
      const ad = String(a.date ?? '');
      const bd = String(b.date ?? '');
      const byDate = ad.localeCompare(bd);
      if (byDate !== 0) return byDate;
      const byInvoice = Number(a.rawInvoiceno) - Number(b.rawInvoiceno);
      if (byInvoice !== 0) return byInvoice;
      return String(a.source ?? '').localeCompare(String(b.source ?? ''));
    };
    const rowsForPosting = [...rows].sort(sortForFifo);
    let remaining = Math.max(0, Number(receivedAmount) || 0);

    for (const row of rowsForPosting) {
      if (!row.customerid || row.customerid <= 0) {
        throw new Error('Missing customer id for receipt row.');
      }
      const invGrandTotal = Number(row.amount) || 0;
      const pendingBefore = Number(row.pendingAmount) || 0;
      let receiptAmt: number;
      let balance: number;
      if (mode === 'FULL') {
        receiptAmt = pendingBefore;
        balance = Math.max(0, Number((pendingBefore - receiptAmt).toFixed(6)));
      } else {
        // FIFO for partial collections: consume received amount from oldest pending invoice first.
        receiptAmt = Math.max(0, Math.min(pendingBefore, remaining));
        remaining = Math.max(0, Number((remaining - receiptAmt).toFixed(6)));
        balance = Math.max(0, Number((pendingBefore - receiptAmt).toFixed(6)));
      }
      const invoicenoFk = row.source === 'PRODUCT_SALES' ? row.rawInvoiceno : null;

      const payload: CreateReceiptPayload = {
        receiptsPaymentsid: `${ctx.receiptNo}-${row.rawInvoiceno}-${row.source}`,
        accountid: ctx.accountId,
        instanceid: ctx.instanceId,
        invoiceno: invoicenoFk,
        customerid: row.customerid,
        customername: row.customerName,
        invoicedate: row.date,
        grandtotal: invGrandTotal,
        receiptamount: Number(receiptAmt.toFixed(6)),
        receiptbalanceamount: balance,
        vouchertype: 'CREDIT_COLLECTION',
        createdby: userId,
        updatedby: userId,
        receiptdate: paymentDate,
        invoicepaymenttype: ctx.paymentReceiptType,
        receiptpaymentmode: ctx.paymentMode,
      };
      await firstValueFrom(this.receiptsService.create(payload));
    }
  }
}
