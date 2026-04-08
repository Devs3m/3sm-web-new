import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { merge, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { DX_FORMAT_FIXED_2 } from '../../core/display-number-format';
import { environment } from '../../../environments/environment';
import { AuthService } from '../service/auth.service';
import { CustomerService } from '../service/customer.service';
import { InventorysalesService } from '../service/inventorysales.service';
import { ReceiptRecord, ReceiptsService } from '../service/receipts.service';
import { FinanceCollectionFacade } from './finance-collection.facade';
import { CreditCollectionRow } from './finance.models';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css'],
})
export class FinanceComponent implements OnInit, OnDestroy {
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
  /** Text in the customer field: type to search; shows name when a customer is chosen */
  customerInputCtrl = new FormControl('', { nonNullable: true });

  readonly amountColumnFormat = DX_FORMAT_FIXED_2;

  /** Credit collection receipts are always recorded against credit sales. */
  readonly paymentReceiptType = 'Credit';

  private readonly destroy$ = new Subject<void>();
  /** Cancel prior credit-collections request when a new one starts (avoids aborted XHR showing as failed). */
  private creditCollectionsSub?: Subscription;
  /** Skip duplicate GET while the same query is already in flight (same dates + tenant). */
  private creditCollectionsInFlightKey = '';
  /** Last successful credit-collections request key (dates + tenant); used to avoid refetch when only customer filter changes. */
  private lastCreditCollectionsLoadKey = '';
  /** Same ref as service shared observable — avoid unsubscribe before 2nd getCreditCollections (would drop shareReplay cache). */
  private pendingCreditCollectionsObservable$?: Observable<any[]>;
  /** Cancel stale GET /receipt when a newer request starts (avoids failed/empty response overwriting good data). */
  private receiptsListSub?: Subscription;
  /** Deduplicate rapid repeated GET /receipt calls for same account/instance/customer context. */
  private receiptInFlightKey = '';
  private lastReceiptLoadKey = '';
  private lastReceiptLoadMs = 0;
  /** After a successful receipt save + full page reload, re-apply this customer once options load. */
  private pendingRestoreCustomerId: number | null = null;

  private static readonly RESTORE_CUSTOMER_SESSION_KEY = '3sm-finance-restore-customer';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private customerService: CustomerService,
    private inventorysalesService: InventorysalesService,
    private receiptsService: ReceiptsService,
    private financeCollectionFacade: FinanceCollectionFacade
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

    this.form.get('receivedAmount')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.receivedAmountEdited = true;
    });

    const customerFilterCtrl = this.form.get('customerFilter');
    // Pipeline: distinctUntilChanged → tap → debounceTime → takeUntil → maybeLoad.
    // Silent programmatic updates: patch customerFilter with { emitEvent: false }; syncCustomerInputFromForm() if needed.
    customerFilterCtrl?.valueChanges
      .pipe(
        distinctUntilChanged((a, b) => this.sameCustomerFilterValue(a, b)), // ✅ FIRST
        tap(() => {
          this.clearPendingSelectionAndReceived();
          if (!this.hasSpecificCustomerSelected()) {
            this.apiData = [];
            this.receiptRecords = [];
            this.lastCreditCollectionsLoadKey = '';
          }
        }),
        debounceTime(100),
        takeUntil(this.destroy$),
      )
      .subscribe(() => this.maybeLoadCreditCollectionsIfNotLoadedForCurrentRange('customerFilter'));

    this.customerInputCtrl.valueChanges.pipe(takeUntil(this.destroy$)).subscribe((text) => {
      if (text === '' && this.form.get('customerFilter')?.value != null) {
        this.form.patchValue({ customerFilter: null }, { emitEvent: true });
      }
    });

    this.resetPendingCreditUiState();
    this.tryRestorePendingCustomerFromReceiptSave();

    this.loadCustomers();

    const startDateCtrl = this.form.get('startDate');
    const endDateCtrl = this.form.get('endDate');
    merge(startDateCtrl!.valueChanges, endDateCtrl!.valueChanges)
      .pipe(debounceTime(400), takeUntil(this.destroy$))
      .subscribe(() => {
        if (!this.hasSpecificCustomerSelected()) {
          return;
        }
        if (!startDateCtrl?.value || !endDateCtrl?.value) {
          return;
        }
        const s = this.toIsoDateOnly(startDateCtrl.value);
        const e = this.toIsoDateOnly(endDateCtrl.value);
        if (s > e) {
          return;
        }
        this.onView('date-range');
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.creditCollectionsSub?.unsubscribe();
    this.receiptsListSub?.unsubscribe();
    this.pendingCreditCollectionsObservable$ = undefined;
  }

  /** True when a specific customer is chosen (not “All customers”). Pending list loads only in that case. */
  private hasSpecificCustomerSelected(): boolean {
    const v = this.form?.get('customerFilter')?.value;
    if (v == null || v === ('' as any)) {
      return false;
    }
    const n = Number(v);
    return Number.isFinite(n) && n > 0;
  }

  /** Empty pending grid and selection (e.g. on navigation). */
  private resetPendingCreditUiState(): void {
    this.apiData = [];
    this.selectedRows = [];
    this.selectedRowKeys = [];
    this.errorMessage = '';
    this.isLoading = false;
    this.lastCreditCollectionsLoadKey = '';
    this.pendingCreditCollectionsObservable$ = undefined;
  }

  /**
   * When customer filter changes: load if we have not successfully loaded for the current
   * date range + tenant yet; otherwise rely on client-side filtering only.
   */
  private sameCustomerFilterValue(a: unknown, b: unknown): boolean {
    const toN = (v: unknown): number | null => {
      if (v == null || v === ('' as any)) return null;
      const n = Number(v);
      return Number.isFinite(n) ? n : null;
    };
    return toN(a) === toN(b);
  }

  /** Clears pending-invoice selection and received amount (must sync with dx-data-grid via selectedRowKeys). */
  private clearPendingSelectionAndReceived(): void {
    this.selectedRows = [];
    this.selectedRowKeys = [];
    this.receivedAmountEdited = false;
    this.form.patchValue({ receivedAmount: 0 }, { emitEvent: false });
  }

  private maybeLoadCreditCollectionsIfNotLoadedForCurrentRange(source: string): void {
    const customerId = this.form.get('customerFilter')?.value;
    if (!this.hasSpecificCustomerSelected()) {
      this.financeDebug('Skip credit-collections load (select a customer first)', { source, customerId });
      this.receiptRecords = [];
      return;
    }
    if (this.isLoading) {
      this.financeDebug('Skip credit-collections load (already loading)', { source, customerId });
      return;
    }
    const startDate = this.form.get('startDate')?.value;
    const endDate = this.form.get('endDate')?.value;
    if (!startDate || !endDate) {
      this.financeDebug('Skip credit-collections load (missing date range)', { source, customerId });
      return;
    }
    const startDateIso = this.toIsoDateOnly(startDate);
    const endDateIso = this.toIsoDateOnly(endDate);
    if (startDateIso > endDateIso) {
      this.financeDebug('Skip credit-collections load (invalid date range)', { source, customerId, startDateIso, endDateIso });
      return;
    }
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    const cid = Number(customerId);
    const key = this.pendingCollectionsCacheKey(startDateIso, endDateIso, accountId, instanceId, cid);
    if (this.lastCreditCollectionsLoadKey === key) {
      this.financeDebug('No API call — pending data already loaded for this range + customer', {
        source,
        customerId,
        rangeKey: key,
      });
      return;
    }
    this.loadReceipts();
    this.onView('customer-filter');
  }

  /** Deduplicate loads by date range, tenant, and customer (must match InventorysalesService cache key). */
  private pendingCollectionsCacheKey(
    startDateIso: string,
    endDateIso: string,
    accountId: number,
    instanceId: number,
    customerId: number | 'all'
  ): string {
    return `${startDateIso}|${endDateIso}|${accountId}|${instanceId}|c${customerId}`;
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
        if (this.pendingRestoreCustomerId != null) {
          const cid = this.pendingRestoreCustomerId;
          this.pendingRestoreCustomerId = null;
          this.form.patchValue({ customerFilter: cid }, { emitEvent: true });
        }
        this.syncCustomerInputFromForm();
      },
      error: () => {
        this.customerOptions = [];
        if (this.pendingRestoreCustomerId != null) {
          const cid = this.pendingRestoreCustomerId;
          this.pendingRestoreCustomerId = null;
          this.form.patchValue({ customerFilter: cid }, { emitEvent: true });
        }
        this.syncCustomerInputFromForm();
      },
    });
  }

  private syncCustomerInputFromForm(): void {
    const cid = this.form?.get('customerFilter')?.value;
    if (cid == null || cid === ('' as any)) {
      this.customerInputCtrl.setValue('', { emitEvent: false });
      return;
    }
    const match = this.customerOptions.find((c) => Number(c.customerid) === Number(cid));
    this.customerInputCtrl.setValue(match?.customername ?? '', { emitEvent: false });
  }

  /** Customer dropdown options after search filter (typed text in customerInputCtrl) */
  get filteredCustomerOptions(): { customerid: number; customername: string }[] {
    const q = (this.customerInputCtrl.value || '').trim().toLowerCase();
    if (!q) {
      return this.customerOptions;
    }
    return this.customerOptions.filter((c) => c.customername.toLowerCase().includes(q));
  }

  onCustomerOptionSelected(event: MatAutocompleteSelectedEvent): void {
    // Runs even when patchValue does not emit (e.g. same option chosen again).
    this.clearPendingSelectionAndReceived();
    const raw = event.option.value;
    if (raw == null) {
      this.financeDebug('Customer selected', { choice: 'All customers', customerFilter: null });
      this.form.patchValue({ customerFilter: null }, { emitEvent: true });
      this.receiptRecords = [];
      this.customerInputCtrl.setValue('', { emitEvent: false });
      return;
    }
    const id = Number(raw);
    const c = this.customerOptions.find((x) => Number(x.customerid) === id);
    const customerFilter = Number.isFinite(id) ? id : null;
    this.financeDebug('Customer selected', {
      choice: 'Specific customer',
      customerid: customerFilter,
      customerName: c?.customername ?? '(unknown)',
    });
    this.form.patchValue({ customerFilter }, { emitEvent: true });
    /** Receipt list: loadReceipts() runs once from customerFilter debounced pipeline (maybeLoadCreditCollections…). */
    this.customerInputCtrl.setValue(c?.customername ?? '', { emitEvent: false });
  }

  /** Pending rows: GET /credit-collections already scopes by customerid when a customer is selected. */
  get filteredPendingData(): CreditCollectionRow[] {
    return this.apiData;
  }

  /** Receipt history after same customer filter */
  get filteredReceiptData(): ReceiptRecord[] {
    const cid = this.form.get('customerFilter')?.value;
    if (cid == null || cid === ('' as any)) {
      return [];
    }
    // GET /receipt now supports customerid; keep table binding simple and avoid double-filter mismatches.
    return this.receiptRecords;
  }

  get pendingInvoiceCount(): number {
    return this.filteredPendingData.length;
  }

  get receiptHistoryCount(): number {
    return this.filteredReceiptData.length;
  }

  /** Outstanding after this receipt: pending still due minus received amount entered. */
  get outstandingAmount(): number {
    return this.selectedTotalAmount - (Number(this.form?.get('receivedAmount')?.value ?? 0) || 0);
  }

  /** localStorage key for last assigned receipt sequence (per account + instance). */
  private receiptSeqStorageKey(): string {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    return `3sm-finance-receipt-seq-${accountId}-${instanceId}`;
  }

  private getLastReceiptSeq(): number {
    try {
      const raw = localStorage.getItem(this.receiptSeqStorageKey());
      const n = parseInt(raw ?? '0', 10);
      return Number.isFinite(n) && n >= 0 ? n : 0;
    } catch {
      return 0;
    }
  }

  /** Display id: RP 001, RP 002, … (running number; bumped after each successful receipt post). */
  private formatReceiptNo(seq: number): string {
    return `RP ${String(seq).padStart(3, '0')}`;
  }

  private setReceiptNo(): void {
    const next = this.getLastReceiptSeq() + 1;
    this.receiptNo = this.formatReceiptNo(next);
  }

  private bumpReceiptSeqAfterSuccessfulPost(): void {
    const next = this.getLastReceiptSeq() + 1;
    try {
      localStorage.setItem(this.receiptSeqStorageKey(), String(next));
    } catch {
      /* ignore quota / private mode */
    }
  }

  /** Session flag consumed on next init so the same customer stays selected after reload. */
  private tryRestorePendingCustomerFromReceiptSave(): void {
    try {
      const raw = sessionStorage.getItem(FinanceComponent.RESTORE_CUSTOMER_SESSION_KEY);
      if (!raw) {
        return;
      }
      sessionStorage.removeItem(FinanceComponent.RESTORE_CUSTOMER_SESSION_KEY);
      const o = JSON.parse(raw) as { customerId?: unknown; accountId?: unknown; instanceId?: unknown };
      const cur = this.getCurrentAccountAndInstance();
      if (Number(o.accountId) !== cur.accountId || Number(o.instanceId) !== cur.instanceId) {
        return;
      }
      const cid = Number(o.customerId);
      if (!Number.isFinite(cid) || cid <= 0) {
        return;
      }
      this.pendingRestoreCustomerId = cid;
    } catch {
      /* ignore */
    }
  }

  /** Full reload after save; customer is re-applied via sessionStorage + pendingRestoreCustomerId. */
  private persistCustomerAndReloadAfterReceiptSave(): void {
    const cid = this.form.get('customerFilter')?.value;
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    try {
      if (this.hasSpecificCustomerSelected() && cid != null) {
        sessionStorage.setItem(
          FinanceComponent.RESTORE_CUSTOMER_SESSION_KEY,
          JSON.stringify({
            customerId: Number(cid),
            accountId,
            instanceId,
          })
        );
      }
    } catch {
      /* ignore */
    }
    window.location.reload();
  }

  loadReceipts(): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    const customerFilter = this.form?.get('customerFilter')?.value;
    const cidRaw = customerFilter != null && customerFilter !== ('' as any) ? Number(customerFilter) : NaN;
    const cid = Number.isFinite(cidRaw) && cidRaw > 0 ? Math.trunc(cidRaw) : undefined;
    const receiptKey = `${accountId}|${instanceId}|c${cid ?? 'all'}`;
    const now = Date.now();
    if (this.isLoadingReceipts && this.receiptInFlightKey === receiptKey) {
      return;
    }
    if (this.lastReceiptLoadKey === receiptKey && now - this.lastReceiptLoadMs < 1200) {
      return;
    }
    this.receiptsListSub?.unsubscribe();
    this.receiptInFlightKey = receiptKey;
    this.isLoadingReceipts = true;
    this.receiptsListSub = this.receiptsService.list(accountId, instanceId, cid).subscribe({
      next: (rows: any) => {
        const list = Array.isArray(rows) ? rows : Array.isArray(rows?.data) ? rows.data : [];
        this.receiptRecords = list
          .map((r: any) => {
            const cidRaw = r?.customerid ?? r?.customerId;
            const customeridNum =
              cidRaw != null && cidRaw !== '' ? Number(cidRaw) : NaN;
            const customerid = Number.isFinite(customeridNum) ? Math.trunc(customeridNum) : 0;
            return {
              receiptsPaymentsid: String(
                r?.receiptsPaymentsid ?? r?.receipts_paymentsid ?? r?.receiptspaymentsid ?? r?.receiptId ?? ''
              ),
              accountid: Number(r?.accountid ?? r?.accountId ?? 0) || 0,
              instanceid: Number(r?.instanceid ?? r?.instanceId ?? 0) || 0,
              invoiceno:
                r?.invoiceno == null && r?.invoiceNo == null
                  ? null
                  : Number(r?.invoiceno ?? r?.invoiceNo ?? 0) || 0,
              customerid,
              customername: String(r?.customername ?? r?.customerName ?? ''),
              invoicedate: String(r?.invoicedate ?? r?.invoiceDate ?? ''),
              grandtotal: Number(r?.grandtotal ?? r?.grandTotal ?? 0) || 0,
              receiptamount: Number(r?.receiptamount ?? r?.receiptAmount ?? 0) || 0,
              receiptbalanceamount: Number(r?.receiptbalanceamount ?? r?.receiptBalanceAmount ?? 0) || 0,
              vouchertype: String(r?.vouchertype ?? r?.voucherType ?? ''),
              createdby: Number(r?.createdby ?? r?.createdBy ?? 0) || 0,
              updatedby: Number(r?.updatedby ?? r?.updatedBy ?? 0) || 0,
              createddate: String(r?.createddate ?? r?.createdDate ?? ''),
              updateddate: String(r?.updateddate ?? r?.updatedDate ?? ''),
              isactive: Boolean(r?.isactive ?? r?.isActive ?? true),
              receiptdate: String(r?.receiptdate ?? r?.receiptDate ?? ''),
              invoicepaymenttype: String(r?.invoicepaymenttype ?? r?.invoicePaymentType ?? ''),
              receiptpaymentmode: String(r?.receiptpaymentmode ?? r?.receiptPaymentMode ?? ''),
            };
          })
          .sort((a: any, b: any) => String(b.updateddate ?? '').localeCompare(String(a.updateddate ?? '')));
        this.lastReceiptLoadKey = receiptKey;
        this.lastReceiptLoadMs = Date.now();
        this.receiptInFlightKey = '';
        this.isLoadingReceipts = false;
      },
      error: (err: any) => {
        this.receiptInFlightKey = '';
        // Keep previous successful rows on transient failure/race.
        this.isLoadingReceipts = false;
      },
    });
  }

  private getCurrentAccountAndInstance(): { accountId: number; instanceId: number } {
    return {
      accountId: this.authService.getAccountId(),
      instanceId: this.authService.getInstanceId(),
    };
  }

  /** Calendar date in YYYY-MM-DD using local time (avoid UTC shift from toISOString()). */
  private toIsoDateOnly(value: any): string {
    const d = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(d.getTime())) {
      const n = new Date();
      return `${n.getFullYear()}-${String(n.getMonth() + 1).padStart(2, '0')}-${String(n.getDate()).padStart(2, '0')}`;
    }
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
  }

  onRefresh(): void {
    if (!this.hasSpecificCustomerSelected()) {
      this.errorMessage = 'Select a customer to load pending invoices.';
      return;
    }
    this.errorMessage = '';
    const today = new Date();
    const monthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    this.form.patchValue({ startDate: monthStart, endDate: today }, { emitEvent: false });
    this.onView('refresh');
  }

  /**
   * Sum of pending balance on selected rows: (invoice / inventory total − already paid).
   * Used for the Selected amount card, voucher defaults, and FULL vs PARTIAL collection.
   */
  get selectedTotalAmount(): number {
    return this.selectedRows.reduce((sum, r) => {
      const p = Number(r.pendingAmount);
      if (Number.isFinite(p) && p >= 0) {
        return sum + p;
      }
      const inv = Number(r.amount) || 0;
      const paid = Math.max(0, Number(r.paidAmount) || 0);
      return sum + Math.max(0, inv - paid);
    }, 0);
  }

  onView(
    trigger: 'customer-filter' | 'date-range' | 'refresh' | 'after-partial-payment' = 'customer-filter'
  ): void {
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
    const filterVal = this.form.get('customerFilter')?.value;
    const customerIdForApi =
      filterVal != null && filterVal !== ('' as any) && Number.isFinite(Number(filterVal)) && Number(filterVal) > 0
        ? Number(filterVal)
        : undefined;
    const requestKey = this.pendingCollectionsCacheKey(
      startDateIso,
      endDateIso,
      accountId,
      instanceId,
      customerIdForApi ?? 'all'
    );
    if (this.isLoading && this.creditCollectionsInFlightKey === requestKey) {
      this.financeDebug('Skip getCreditCollections (same request already in flight)', { trigger, requestKey });
      return;
    }

    this.creditCollectionsInFlightKey = requestKey;
    this.isLoading = true;

    this.financeDebug('API: GET credit collections (inventorysummary)', {
      trigger,
      startDate: startDateIso,
      endDate: endDateIso,
      accountId,
      instanceId,
      customerid: customerIdForApi ?? null,
    });

    // Single GET below; any OPTIONS to the same URL is browser CORS preflight (see InventorysalesService.getCreditCollections).
    const obs$ = this.inventorysalesService.getCreditCollections(
      startDateIso,
      endDateIso,
      accountId,
      instanceId,
      customerIdForApi
    );
    // Always subscribe. The service may return a shared shareReplay observable; skipping subscribe
    // when `obs$` is the same reference left apiData empty after it was cleared (e.g. customer change).
    // A fresh subscription still receives the cached replay.
    this.creditCollectionsSub?.unsubscribe();
    this.pendingCreditCollectionsObservable$ = obs$;
    this.creditCollectionsSub = obs$.subscribe({
      next: (rows) => {
        const raw = Array.isArray(rows) ? rows : [];
        this.financeDebug('API: GET credit collections — success', { trigger, rowCount: raw.length, requestKey });
        this.lastCreditCollectionsLoadKey = requestKey;
        this.apiData = raw.map((r: any, idx: number) => {
          const amount = Number(r.amount) || 0;
          const paidAmount = Math.max(0, Number(r.paidAmount) || 0);
          const pendingAmount =
            r.pendingAmount != null && r.pendingAmount !== ''
              ? Math.max(0, Number(r.pendingAmount))
              : Math.max(0, amount - paidAmount);
          const customerid = Number(r.customerid ?? 0) || 0;
          const rawInvoiceno = Number(r.rawInvoiceno ?? r.rawinvoiceno ?? r.invoiceno ?? 0) || 0;
          const source = (String(r.source ?? '').toUpperCase() === 'SERVICE_SALES' ? 'SERVICE_SALES' : 'PRODUCT_SALES') as
            | 'SERVICE_SALES'
            | 'PRODUCT_SALES';
          const rowKeyBase = `${source}-${rawInvoiceno || String(r.invoiceno ?? '').trim() || idx}`;
          return {
            ...r,
            source,
            rawInvoiceno,
            customerid,
            amount,
            paidAmount,
            pendingAmount,
            rowKey: `${rowKeyBase}-${idx}`,
          } as CreditCollectionRow;
        });
        this.selectedRows = [];
        this.selectedRowKeys = [];
        this.isLoading = false;
        this.creditCollectionsInFlightKey = '';
      },
      error: (err) => {
        this.isLoading = false;
        this.creditCollectionsInFlightKey = '';
        if (err?.status === 0) {
          return;
        }
        this.financeDebug('API: GET credit collections — error', { trigger, status: err?.status, message: err?.message });
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load credit collections.';
        this.apiData = [];
      },
    });
  }

  /** Dev-only structured logs for customer selection and credit-collection API calls. */
  private financeDebug(message: string, data?: Record<string, unknown>): void {
    if (environment.production) {
      return;
    }
    if (data !== undefined) {
      console.log(`[Finance] ${message}`, data);
    } else {
      console.log(`[Finance] ${message}`);
    }
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
    const totalPending = this.selectedTotalAmount;
    const mode: 'FULL' | 'PARTIAL' = receivedAmount + 0.000001 >= totalPending ? 'FULL' : 'PARTIAL';

    this.financeCollectionFacade
      .collectCreditPayment({
        invoices,
        accountId,
        instanceId,
        paymentDate,
        paymentType,
        paymentMode,
        mode,
      })
      .subscribe({
        next: () => {
          void this.financeCollectionFacade
            .postReceiptRowsForCreditCollection(rows, mode, receivedAmount, paymentDate, {
              receiptNo: this.receiptNo,
              paymentReceiptType: this.paymentReceiptType,
              paymentMode: String(this.form.get('paymentMode')?.value ?? 'Cash'),
              accountId,
              instanceId,
              resolvePaymentDate: (iso) => iso || this.toIsoDateOnly(new Date()),
            })
            .then(() => {
              this.bumpReceiptSeqAfterSuccessfulPost();
              this.persistCustomerAndReloadAfterReceiptSave();
            })
            .catch((e: any) => {
              this.errorMessage =
                e?.message ||
                'Payment was saved, but one or more receipt rows could not be written to possales.receipt.';
            });
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || err?.message || 'Failed to collect payment.';
        },
      });
  }

  formatDateDdMmYyyy(val: string | null | undefined): string {
    if (!val) return '';
    const s = String(val).trim();
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[3]}-${m[2]}-${m[1]}`;
    return s;
  }

  dateCellValue = (rowData: CreditCollectionRow): string => this.formatDateDdMmYyyy(rowData.date);

  /** Compare helper for mat-select customer ids (handles number/string/null safely). */
  compareCustomerFilter = (a: number | string | null, b: number | string | null): boolean => {
    if (a == null && b == null) return true;
    if (a == null || b == null) return false;
    return Number(a) === Number(b);
  };

  /** Grid display label for source values. */
  sourceCellValue = (rowData: CreditCollectionRow): string =>
    rowData?.source === 'SERVICE_SALES' ? 'Service Sales' : 'Product Sales';

  receiptDateCellValue = (rowData: ReceiptRecord): string =>
    this.formatDateDdMmYyyy(String(rowData.receiptdate ?? '').slice(0, 10));
  invoiceDateCellValue = (rowData: ReceiptRecord): string =>
    this.formatDateDdMmYyyy(String(rowData.invoicedate ?? '').slice(0, 10));
}
