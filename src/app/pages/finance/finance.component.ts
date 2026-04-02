import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { DX_FORMAT_FIXED_2 } from '../../core/display-number-format';
import { AuthService } from '../service/auth.service';
import { CustomerService } from '../service/customer.service';
import { InventorysalesService } from '../service/inventorysales.service';
import { CreateReceiptPayload, ReceiptRecord, ReceiptsService } from '../service/receipts.service';

interface CreditCollectionRow {
  rowKey: string;
  date: string;
  source: 'SERVICE_SALES' | 'PRODUCT_SALES';
  rawInvoiceno: number;
  invoiceno: string;
  customerid: number;
  customerName: string;
  amount: number;
  paymentStatus: string;
}

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
})
export class FinanceComponent implements OnInit {
  form!: FormGroup;
  apiData: CreditCollectionRow[] = [];
  selectedRows: CreditCollectionRow[] = [];
  selectedRowKeys: string[] = [];
  isLoading = false;
  errorMessage = '';
  receiptNo = '';
  receivedAmountEdited = false;
  receiptRecords: ReceiptRecord[] = [];
  isLoadingReceipts = false;
  /** Populated from GET /customer/list for filter dropdown */
  customerOptions: { customerid: number; customername: string }[] = [];

  readonly amountColumnFormat = DX_FORMAT_FIXED_2;

  /** Credit collection receipts are always recorded against credit sales. */
  readonly paymentReceiptType = 'Credit';

  /** mat-select: compare null vs "All customers" */
  compareCustomerFilter = (a: number | null, b: number | null): boolean => {
    if (a == null && b == null) return true;
    if (a == null || b == null) return false;
    return Number(a) === Number(b);
  };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private customerService: CustomerService,
    private inventorysalesService: InventorysalesService,
    private receiptsService: ReceiptsService
  ) {}

  ngOnInit(): void {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    this.setReceiptNo();

    this.form = this.fb.group({
      customerFilter: [null as number | null],
      startDate: [monthStart],
      endDate: [today],
      paymentDate: [today],
      paymentMode: ['Cash'],
      receivedAmount: [0],
    });

    this.form.get('receivedAmount')?.valueChanges.subscribe(() => {
      this.receivedAmountEdited = true;
    });

    this.form.get('customerFilter')?.valueChanges.subscribe(() => {
      this.selectedRows = [];
      this.selectedRowKeys = [];
      this.receivedAmountEdited = false;
      this.form.patchValue({ receivedAmount: 0 }, { emitEvent: false });
    });

    this.loadCustomers();
    this.loadReceipts();
  }

  private loadCustomers(): void {
    this.customerService.getCustomerList().subscribe({
      next: (list) => {
        const raw = Array.isArray(list) ? list : [];
        this.customerOptions = raw
          .map((c: any) => ({
            customerid: Number(c.customerid ?? c.customer_id ?? 0),
            customername: String(c.customername ?? c.customer_name ?? '').trim(),
          }))
          .filter((c) => c.customerid > 0 && c.customername)
          .sort((a, b) => a.customername.localeCompare(b.customername));
      },
      error: () => {
        this.customerOptions = [];
      },
    });
  }

  /** Pending rows after optional customer filter */
  get filteredPendingData(): CreditCollectionRow[] {
    const cid = this.form.get('customerFilter')?.value;
    if (cid == null || cid === ('' as any)) {
      return this.apiData;
    }
    const id = Number(cid);
    return this.apiData.filter((r) => r.customerid === id);
  }

  /** Receipt history after same customer filter */
  get filteredReceiptData(): ReceiptRecord[] {
    const cid = this.form.get('customerFilter')?.value;
    if (cid == null || cid === ('' as any)) {
      return this.receiptRecords;
    }
    const id = Number(cid);
    return this.receiptRecords.filter((r) => Number(r.customerid) === id);
  }

  private setReceiptNo(): void {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const suffix = String(Math.floor(Date.now() % 100000)).padStart(5, '0');
    this.receiptNo = `RP-${yyyy}${mm}${dd}-${suffix}`;
  }

  loadReceipts(): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.isLoadingReceipts = true;
    this.receiptsService.list(accountId, instanceId).subscribe({
      next: (rows) => {
        const list = Array.isArray(rows) ? rows : [];
        this.receiptRecords = [...list].sort((a, b) =>
          String(b.updateddate ?? '').localeCompare(String(a.updateddate ?? ''))
        );
        this.isLoadingReceipts = false;
      },
      error: () => {
        this.receiptRecords = [];
        this.isLoadingReceipts = false;
      },
    });
  }

  private getCurrentAccountAndInstance(): { accountId: number; instanceId: number } {
    const user = this.authService.getUser();
    return {
      accountId: user?.accountid ?? user?.accountId ?? 1,
      instanceId: user?.instanceid ?? user?.instanceId ?? 1,
    };
  }

  private toIsoDateOnly(value: any): string {
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().split('T')[0];
  }

  onRefresh(): void {
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    this.form.patchValue({ startDate: monthStart, endDate: today });
    this.onView();
  }

  get selectedTotalAmount(): number {
    return this.selectedRows.reduce((sum, r) => sum + (Number(r.amount) || 0), 0);
  }

  onView(): void {
    this.errorMessage = '';
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;
    if (!startDate || !endDate) {
      this.errorMessage = 'Please select date range.';
      return;
    }
    const startDateIso = this.toIsoDateOnly(startDate);
    const endDateIso = this.toIsoDateOnly(endDate);
    if (startDateIso > endDateIso) {
      this.errorMessage = 'Start date must be before or equal to end date.';
      return;
    }

    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.isLoading = true;
    this.inventorysalesService.getCreditCollections(startDateIso, endDateIso, accountId, instanceId).subscribe({
      next: (rows) => {
        const raw = Array.isArray(rows) ? rows : [];
        this.apiData = raw.map((r: any) => ({
          ...r,
          rowKey: `${r.source}-${r.rawInvoiceno}`,
        }));
        this.selectedRows = [];
        this.selectedRowKeys = [];
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load credit collections.';
        this.apiData = [];
        this.isLoading = false;
      },
    });
  }

  collectPayment(row: CreditCollectionRow): void {
    this.collectRows([row]);
  }

  collectSelectedPayments(): void {
    if (!this.selectedRows.length) {
      this.errorMessage = 'Please select at least one invoice.';
      return;
    }
    this.collectRows(this.selectedRows);
  }

  onSelectionChanged(e: any): void {
    this.selectedRows = (e?.selectedRowsData ?? []) as CreditCollectionRow[];
    this.selectedRowKeys = (e?.selectedRowKeys ?? []) as string[];

    if (!this.receivedAmountEdited) {
      this.form.patchValue({ receivedAmount: this.selectedTotalAmount }, { emitEvent: false });
    }
  }

  private collectRows(rows: CreditCollectionRow[]): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    const invoices = rows
      .map((r) => ({ source: r.source, invoiceno: Number(r.rawInvoiceno) }))
      .filter((r) => Number.isFinite(r.invoiceno) && r.invoiceno > 0);
    if (!invoices.length) {
      this.errorMessage = 'Invalid invoice number for collection.';
      return;
    }
    for (const r of rows) {
      if (!r.customerid || r.customerid <= 0) {
        this.errorMessage = 'Missing customer id on a selected row; cannot record receipts.';
        return;
      }
    }
    const paymentDateVal = this.form.get('paymentDate')?.value;
    const paymentDate = paymentDateVal ? this.toIsoDateOnly(paymentDateVal) : null;
    const paymentType = this.paymentReceiptType;
    const paymentMode = this.form.get('paymentMode')?.value || null;
    const receivedAmountVal = Number(this.form.get('receivedAmount')?.value ?? 0);
    const receivedAmount = Number.isFinite(receivedAmountVal) ? receivedAmountVal : 0;
    const totalAmount = this.selectedTotalAmount;
    const mode: 'FULL' | 'PARTIAL' = receivedAmount + 0.000001 >= totalAmount ? 'FULL' : 'PARTIAL';

    this.inventorysalesService
      .collectCreditPayment(invoices, accountId, instanceId, paymentDate, paymentType, paymentMode, mode)
      .subscribe({
        next: () => {
          void this.postReceiptsForRows(rows, mode, receivedAmount, paymentDate)
            .then(() => {
              this.setReceiptNo();
              this.loadReceipts();
            })
            .catch((e: any) => {
              this.errorMessage =
                e?.message ||
                'Payment was saved, but one or more receipt rows could not be written to possales.receipt.';
            })
            .then(() => {
              this.selectedRows = [];
              this.selectedRowKeys = [];
              this.receivedAmountEdited = false;
              this.form.patchValue({ receivedAmount: 0 }, { emitEvent: false });

              if (mode === 'FULL') {
                const keySet = new Set(rows.map((r) => r.rowKey));
                this.apiData = this.apiData.filter((r) => !keySet.has(r.rowKey));
              } else {
                this.onView();
              }
            });
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || err?.message || 'Failed to collect payment.';
        },
      });
  }

  private async postReceiptsForRows(
    rows: CreditCollectionRow[],
    mode: 'FULL' | 'PARTIAL',
    receivedAmount: number,
    paymentDateIso: string | null
  ): Promise<void> {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    const paymentDate = paymentDateIso || this.toIsoDateOnly(new Date());
    const paymentMode = String(this.form.get('paymentMode')?.value ?? 'Cash');
    const uid = this.authService.getUserId();
    const userId = Number.isFinite(uid) && (uid as number) > 0 ? (uid as number) : 1;
    const total = rows.reduce((s, r) => s + (Number(r.amount) || 0), 0);

    for (const row of rows) {
      if (!row.customerid || row.customerid <= 0) {
        throw new Error('Missing customer id for receipt row.');
      }
      const invTotal = Number(row.amount) || 0;
      let receiptAmt: number;
      let balance: number;
      if (mode === 'FULL') {
        receiptAmt = invTotal;
        balance = 0;
      } else {
        receiptAmt = total > 0 ? (receivedAmount * invTotal) / total : 0;
        balance = Math.max(0, Number((invTotal - receiptAmt).toFixed(6)));
      }
      const invoicenoFk = row.source === 'PRODUCT_SALES' ? row.rawInvoiceno : null;

      const payload: CreateReceiptPayload = {
        receiptsPaymentsid: `${this.receiptNo}-${row.rawInvoiceno}-${row.source}`,
        accountid: accountId,
        instanceid: instanceId,
        invoiceno: invoicenoFk,
        customerid: row.customerid,
        customername: row.customerName,
        invoicedate: row.date,
        grandtotal: invTotal,
        receiptamount: Number(receiptAmt.toFixed(6)),
        receiptbalanceamount: balance,
        vouchertype: 'CREDIT_COLLECTION',
        createdby: userId,
        updatedby: userId,
        receiptdate: paymentDate,
        invoicepaymenttype: this.paymentReceiptType,
        receiptpaymentmode: paymentMode,
      };
      await firstValueFrom(this.receiptsService.create(payload));
    }
  }

  formatDateDdMmYyyy(val: string | null | undefined): string {
    if (!val) return '';
    const s = String(val).trim();
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[3]}-${m[2]}-${m[1]}`;
    return s;
  }

  dateCellValue = (rowData: CreditCollectionRow): string => this.formatDateDdMmYyyy(rowData.date);
  sourceCellValue = (rowData: CreditCollectionRow): string =>
    rowData.source === 'SERVICE_SALES' ? 'Service Sales' : 'Product Sales';

  receiptDateCellValue = (rowData: ReceiptRecord): string =>
    this.formatDateDdMmYyyy(String(rowData.receiptdate ?? '').slice(0, 10));
  invoiceDateCellValue = (rowData: ReceiptRecord): string =>
    this.formatDateDdMmYyyy(String(rowData.invoicedate ?? '').slice(0, 10));
}
