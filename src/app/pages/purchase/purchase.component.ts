import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { exportDataGrid as exportDataGridToExcel } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { Workbook } from 'exceljs';
import jsPDF from 'jspdf';
import { PurchaseService } from '../service/purchase.service';
import { SupplierService } from '../service/supplier.service';
import { ProductService } from '../service/product.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { SettingsService } from '../service/settings.service';
import { SavePurchaseDto } from './models/save-purchase.dto';
import { Observable, EMPTY, of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

type PurchaseLineEnterField =
  | 'productname'
  | 'qty'
  | 'free'
  | 'price'
  | 'mrp'
  | 'disc'
  | 'batch'
  | 'expiry';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['../sales/sales.component.css', 'purchase.component.css'],
})
export class PurchaseComponent implements OnInit {
  isFormOpen = false;
  isEditMode = false;
  isSaving = false;
  purchases: any[] = [];
  purchaseForm!: FormGroup;
  supplierOptions: any[] = [];
  productOptions: any[] = [];
  /** Per-line product autocomplete options (same pattern as sales). */
  filteredProducts: any[][] = [];
  supplierSearchCtrl = new FormControl('');
  errorMessage = '';
  successMessage = '';
  deleteCautionMessage = '';
  currentUserId = 1;
  /** Preview of next GRN for new purchases (max existing + 1); refreshed before save. */
  nextGrnPreview = '';
  /** When editing, supplier row may be missing from {@link supplierOptions}; cache details API here for the panel. */
  supplierPanelOverride: any | null = null;

  private readonly lineFieldEnterOrder: PurchaseLineEnterField[] = [
    'productname',
    'qty',
    'free',
    'price',
    'mrp',
    'disc',
    'batch',
    'expiry',
  ];

  private getLineEnterOrder(): PurchaseLineEnterField[] {
    if (this.hideBatchNoAndExpiry) {
      return this.lineFieldEnterOrder.filter((f) => f !== 'batch' && f !== 'expiry');
    }
    return this.lineFieldEnterOrder;
  }

  /** GRN for auto batch: saved GRN when editing, else next GRN preview for new purchases. */
  private buildGrnForAutoBatch(): string {
    const raw = this.purchaseForm?.get('purchasegrnno')?.value;
    if (raw != null && String(raw).trim() !== '') return String(raw).trim();
    if (this.nextGrnPreview) return String(this.nextGrnPreview).trim();
    return 'NEW';
  }

  /** Matches server default pattern prefix: GRN-{grn}-L{index} (server may append -D{detailId} if batch empty). */
  private buildAutoBatchNo(lineIndex: number): string {
    return `GRN-${this.buildGrnForAutoBatch()}-L${lineIndex}`;
  }

  /** When batch/expiry are hidden, set synthetic batch and clear expiry for lines that have a product. */
  private syncAutoBatchesForAllLines(): void {
    if (!this.hideBatchNoAndExpiry) return;
    this.items.controls.forEach((c, i) => {
      const g = c as FormGroup;
      const pid = Number(g.get('productid')?.value);
      if (!Number.isFinite(pid) || pid <= 0) return;
      g.patchValue(
        {
          stockBatchno: this.buildAutoBatchNo(i),
          expirydate: null,
        },
        { emitEvent: false }
      );
    });
  }

  grnSortValue = (rowData: any): number => {
    const v = rowData?.purchasegrnno ?? 0;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  /** Grid: format GRN / total like sales listing. */
  grnCellValue = (rowData: any): string => {
    const v = rowData?.purchasegrnno ?? rowData?.purchaseGrnNo;
    return v != null ? String(v) : '';
  };

  totalAmountCellValue = (rowData: any): number => {
    const v = rowData?.totalamount ?? rowData?.totalAmount ?? 0;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  purchaseProfitCellValue = (rowData: any): number => {
    const v =
      rowData?.totalpurchaseprofitamt ??
      rowData?.totalPurchaseProfitAmt ??
      rowData?.totalpurchaseprofit ??
      0;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  paymentPeriodCellValue = (rowData: any): string => {
    const v = rowData?.paymentperiod ?? rowData?.paymentPeriod ?? '';
    return v != null ? String(v).trim() : '';
  };

  constructor(
    private purchaseService: PurchaseService,
    private supplierService: SupplierService,
    private productService: ProductService,
    private fb: FormBuilder,
    private authService: AuthService,
    private permissionService: PermissionService,
    private settingsService: SettingsService,
    private cdr: ChangeDetectorRef
  ) {}

  /** Same app setting as Product Sales: batch/expiry optional → hide columns and auto batch on purchase lines. */
  get hideBatchNoAndExpiry(): boolean {
    return !!this.settingsService.getSalesSettings().hideBatchNoAndExpiryInProductSales;
  }

  @HostListener('document:keydown', ['$event'])
  onCtrlS(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      if (!this.isFormOpen || !this.canSavePurchase()) return;
      if (this.isEditMode && !this.permissionService.hasPermission('purchase', 'update')) return;
      if (!this.isEditMode && !this.permissionService.hasPermission('purchase', 'create')) return;
      event.preventDefault();
      this.onSubmit();
    }
  }

  get totalPurchaseAmount(): number {
    return this.purchases.reduce((sum, row) => {
      const v = Number(row?.totalamount ?? row?.totalAmount ?? 0);
      return sum + (Number.isFinite(v) ? v : 0);
    }, 0);
  }

  get grnDisplayValue(): string {
    const v = this.purchaseForm?.get('purchasegrnno')?.value;
    if (v != null && v !== '') return String(v);
    if (!this.isEditMode && this.nextGrnPreview) return this.nextGrnPreview;
    return '—';
  }

  get filteredSuppliers(): any[] {
    const q = (this.supplierSearchCtrl?.value || '').trim().toLowerCase();
    if (!q) return this.supplierOptions;
    return this.supplierOptions.filter((s) => {
      const name = (s.suppliername || '').toLowerCase();
      const phone = (s.supplierphone || '').toString();
      return name.includes(q) || phone.includes(q);
    });
  }

  supplierDisplayFn = (_: any) => '';

  goBackToList(): void {
    this.resetForm();
  }

  /** Supplier record for the info panel (list match, else edit-mode API snapshot). */
  get supplierForPanel(): any | null {
    const id = this.purchaseForm?.get('supplierid')?.value;
    if (id == null || id === '') return null;
    const fromList = this.supplierOptions.find((x) => Number(x.supplierid) === Number(id));
    if (fromList) return fromList;
    return this.supplierPanelOverride;
  }

  formatSupplierAddress(s: any): string {
    if (!s) return '';
    const parts = [s.supplieraddress, s.suppliercity, s.supplierstate, s.suppliercountry]
      .filter((p) => p != null && String(p).trim() !== '')
      .map((p) => String(p).trim());
    const pin = s.supplierpin != null && String(s.supplierpin).trim() !== '' ? String(s.supplierpin).trim() : '';
    const line = parts.join(', ');
    if (line && pin) return `${line} - ${pin}`;
    return line || pin;
  }

  get supplierAddressLine(): string {
    return this.formatSupplierAddress(this.supplierForPanel);
  }

  ngOnInit(): void {
    this.getCurrentUserId();
    this.settingsService.refreshFromApi();
    this.initForm();
    this.loadPurchases();
    this.loadSuppliers();
    this.loadProducts();
  }

  get items(): FormArray {
    return this.purchaseForm.get('items') as FormArray;
  }

  /** Line with no product chosen (e.g. row added by Enter on last field). */
  private isPurchaseLineBlank(g: FormGroup): boolean {
    const pid = Number(g.get('productid')?.value);
    const name = String(g.get('productname')?.value ?? '').trim();
    return (!Number.isFinite(pid) || pid <= 0) && name === '';
  }

  /**
   * Save / Ctrl+S: header required fields valid, ≥1 non-blank line fully valid.
   * Blank trailing rows do not block save (they are omitted by {@link buildDto}).
   */
  canSavePurchase(): boolean {
    if (!this.purchaseForm || this.isSaving) return false;
    const f = this.purchaseForm;
    if (f.get('supplierid')?.invalid) return false;
    if (f.get('supplierinvoiceno')?.invalid) return false;
    if (f.get('purchasedate')?.invalid) return false;
    let hasReadyLine = false;
    for (const c of this.items.controls) {
      const g = c as FormGroup;
      if (this.isPurchaseLineBlank(g)) continue;
      if (g.invalid) return false;
      hasReadyLine = true;
    }
    return hasReadyLine;
  }

  getCurrentUserId(): void {
    const user = this.authService.getUser();
    this.currentUserId = user?.userId || user?.userid || user?.user_id || user?.id || 1;
  }

  private byAccountId(list: any[], accountId: number): any[] {
    if (!Array.isArray(list)) return [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  /** Same scope as the grid: account/instance for non–super-admin. */
  private scopePurchases(raw: any[]): any[] {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();
    const list = Array.isArray(raw) ? raw : [];
    if (accountId == null) return list;
    return this.byAccountAndInstance(list, accountId, instanceId ?? null);
  }

  /** Max GRN in list + 1 (bigint-safe); first GRN is 1. */
  private computeNextGrnFromList(list: any[]): string {
    let max: bigint | null = null;
    for (const row of list) {
      const v = row?.purchasegrnno ?? row?.purchaseGrnNo;
      if (v == null || v === '') continue;
      try {
        const n = BigInt(String(v).trim());
        if (max == null || n > max) max = n;
      } catch {
        /* ignore non-numeric */
      }
    }
    if (max == null) return '1';
    return (max + 1n).toString();
  }

  /** Fetches latest list and sets {@link nextGrnPreview} from last GRN + 1. */
  refreshNextGrnPreview(): Observable<void> {
    return this.purchaseService.getList().pipe(
      map((data) => {
        const filtered = this.scopePurchases(data || []);
        this.nextGrnPreview = this.computeNextGrnFromList(filtered);
        this.syncAutoBatchesForAllLines();
        this.cdr.markForCheck();
      }),
      map(() => void 0),
      catchError(() => {
        this.nextGrnPreview = '1';
        this.syncAutoBatchesForAllLines();
        this.cdr.markForCheck();
        return of(void 0);
      })
    );
  }

  private byAccountAndInstance(list: any[], accountId: number | null, instanceId: number | null): any[] {
    if (!Array.isArray(list)) return [];
    if (accountId == null) return list;
    return list.filter((item: any) => {
      const accId = item.accountid ?? item.accountId;
      if (accId == null || Number(accId) !== Number(accountId)) return false;
      if (instanceId != null && instanceId !== 0) {
        const instId = item.instanceid ?? item.instanceId;
        return instId != null && Number(instId) === Number(instanceId);
      }
      return true;
    });
  }

  initForm(): void {
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    this.purchaseForm = this.fb.group({
      purchasegrnno: [null],
      purchasedate: [new Date(), Validators.required],
      supplierid: [null, Validators.required],
      suppliername: [''],
      supplierinvoiceno: ['', Validators.required],
      paymenttype: [''],
      paymentperiod: [''],
      totalgrossamount: [0],
      totaldiscountper: [null],
      totaldiscountamt: [0],
      totalgstamt: [0],
      totalchessamt: [0],
      totalamount: [0],
      totalqtysum: [0],
      totalpurchaseprofitamt: [0],
      accountid: [accountId],
      instanceid: [instanceId],
      isactive: [true],
      items: this.fb.array([]),
    });
  }

  createLineGroup(partial?: Record<string, unknown>): FormGroup {
    const pqRaw = partial?.['purchaseqty'];
    const purchaseQtyInitial =
      pqRaw !== undefined && pqRaw !== null && String(pqRaw).trim() !== '' ? Number(pqRaw) : null;

    return this.fb.group({
      productid: [partial?.['productid'] ?? null, Validators.required],
      productname: [partial?.['productname'] ?? '', Validators.required],
      productpackqty: [
        partial?.['productpackqty'] != null && String(partial?.['productpackqty']).trim() !== ''
          ? Number(partial['productpackqty'])
          : null,
      ],
      purchaseqty: [purchaseQtyInitial, [Validators.required, Validators.min(1)]],
      purchaseeachqty: [partial?.['purchaseeachqty'] ?? 1],
      purchaseprice: [
        partial?.['purchaseprice'] != null && String(partial?.['purchaseprice']).trim() !== ''
          ? this.roundToTwoDecimals(Number(partial['purchaseprice']))
          : null,
      ],
      mrp: [
        partial?.['mrp'] != null && String(partial?.['mrp']).trim() !== ''
          ? this.roundToTwoDecimals(Number(partial['mrp']))
          : null,
      ],
      purchaseeachcost: [
        partial?.['purchaseeachcost'] ?? partial?.['purchaseeachprice'] ?? 0,
      ],
      purchasediscountPer: [partial?.['purchasediscountPer'] ?? partial?.['purchasediscount%'] ?? 0],
      purchasediscountamount: [partial?.['purchasediscountamount'] ?? 0],
      purchasegstPer: [partial?.['purchasegstPer'] ?? partial?.['purchasegst%'] ?? 0],
      purchasegstamount: [partial?.['purchasegstamount'] ?? 0],
      purchasecost: [partial?.['purchasecost'] ?? 0],
      purchasefreeqty: [partial?.['purchasefreeqty'] ?? 0],
      stockBatchno: [partial?.['stockBatchno'] ?? ''],
      expirydate: [partial?.['expirydate'] ?? null],
      purchaseinvoiceno: [partial?.['purchaseinvoiceno'] ?? ''],
    });
  }

  addLine(): void {
    const idx = this.items.length;
    this.items.push(this.createLineGroup());
    this.filteredProducts.push([...this.productOptions]);
    this.subscribeDescriptionFilter(idx);
    this.syncLinesFromHeader();
  }

  removeLine(index: number): void {
    if (this.items.length <= 1) return;
    this.items.removeAt(index);
    this.filteredProducts.splice(index, 1);
    this.recalcHeaderTotals();
    this.syncAutoBatchesForAllLines();
  }

  /** Show product name in the input when option value is the full product object. */
  productAutocompleteDisplayFn = (value: unknown): string => {
    if (value != null && typeof value === 'object' && 'productname' in (value as object)) {
      return String((value as { productname?: string }).productname ?? '');
    }
    return value != null ? String(value) : '';
  };

  private subscribeDescriptionFilter(index: number): void {
    const ctrl = this.items.at(index)?.get('productname');
    if (!ctrl) return;
    ctrl.valueChanges.subscribe((val: unknown) => {
      const search = this.productAutocompleteDisplayFn(val).trim().toLowerCase();
      this.filteredProducts[index] = search
        ? this.productOptions.filter((p) => (p.productname || '').toLowerCase().includes(search))
        : [...this.productOptions];
    });
  }

  syncLinesFromHeader(): void {
    const inv = this.purchaseForm.get('supplierinvoiceno')?.value ?? '';
    this.items.controls.forEach((c) => {
      (c as FormGroup).patchValue({ purchaseinvoiceno: inv }, { emitEvent: false });
    });
  }

  /** e.g. "30 days" from supplier master `suppliercreditdays`. */
  formatPaymentPeriodFromSupplier(s: any): string {
    const d = s?.suppliercreditdays ?? s?.supplierCreditdays ?? s?.supplier_credit_days;
    if (d == null || d === '') return '';
    const n = Number(d);
    if (Number.isFinite(n) && n > 0) {
      return `${Math.floor(n)} days`;
    }
    return String(d).trim();
  }

  private roundToTwoDecimals(n: number): number {
    if (!Number.isFinite(n)) return 0;
    return Math.round(n * 100) / 100;
  }

  /**
   * MRP for purchase lines must come only from product master last-MRP fields.
   * Avoid generic `mrp` / `productMrp` (often wrong or default). Reject booleans (Number(true) === 1).
   */
  private parseMoneyRupeeField(raw: unknown): number | null {
    if (raw === null || raw === undefined) return null;
    if (typeof raw === 'boolean') return null;
    const s = String(raw).trim();
    if (s === '') return null;
    const n = Number(raw);
    if (!Number.isFinite(n) || n < 0) return null;
    return this.roundToTwoDecimals(n);
  }

  private pickProductLastMrpFromProductPayload(p: any): number | null {
    if (p == null || typeof p !== 'object') return null;
    const keys = [
      'purchaselastmrp',
      'purchaseLastMrp',
      'purchase_last_mrp',
      'productlastmrp',
      'productLastMrp',
      'product_last_mrp',
    ] as const;
    for (const k of keys) {
      const v = this.parseMoneyRupeeField(p[k]);
      if (v != null) return v;
    }
    return null;
  }

  onSupplierSelect(supplier: any): void {
    if (!supplier) return;
    this.supplierPanelOverride = null;
    this.purchaseForm.patchValue(
      {
        supplierid: supplier.supplierid ?? supplier.id ?? null,
        suppliername: supplier.suppliername || '',
        paymentperiod: this.formatPaymentPeriodFromSupplier(supplier),
      },
      { emitEvent: false }
    );
    this.supplierSearchCtrl.setValue('', { emitEvent: false });
    this.syncLinesFromHeader();
    this.errorMessage = '';
    this.cdr.detectChanges();
  }

  clearSupplier(): void {
    this.supplierPanelOverride = null;
    this.purchaseForm.patchValue(
      { supplierid: null, suppliername: '', paymentperiod: '' },
      { emitEvent: false }
    );
    this.supplierSearchCtrl.setValue('', { emitEvent: false });
  }

  onProductLineSelect(index: number, event: any): void {
    const v = event.option?.value;
    const p =
      v != null && typeof v === 'object' && ('productid' in v || 'productname' in v)
        ? v
        : this.productOptions.find((x) => x.productname === v);
    this.applyProductToLine(index, p);
  }

  private applyProductToLine(index: number, p: any): void {
    if (!p) return;
    const row = this.items.at(index) as FormGroup;
    const pack = Number(p.productpackqty ?? p.productPackQty ?? p.packsize) || 1;
    const gst = Number(p.productgstpercent ?? p.totalgstpercent ?? p.gstpercent) || 0;
    const rawPrice =
      p.productlastprice ?? p.price ?? p.unitprice ?? p.purchaseprice ?? p.productpurchaseprice;
    const priceNum = Number(rawPrice);
    const price =
      rawPrice != null && rawPrice !== '' && Number.isFinite(priceNum)
        ? this.roundToTwoDecimals(priceNum)
        : null;
    const mrp = this.pickProductLastMrpFromProductPayload(p);
    const productId = p.productid ?? p.productId ?? null;
    row.patchValue(
      {
        productid: productId,
        productname: p.productname ?? '',
        productpackqty: pack,
        purchaseprice: price,
        mrp,
        purchasegstPer: gst,
      },
      { emitEvent: false }
    );
    this.recalcLine(index);
    this.recalcHeaderTotals();
    this.syncAutoBatchesForAllLines();
    if (productId != null && Number(productId) > 0) {
      this.hydrateLineMrpFromProductDetails(index, Number(productId));
    }
    setTimeout(() => this.focusPurchaseLineField(index, 'qty'), 0);
  }

  /** Prefer product details API for MRP (list rows can omit or shape fields differently). */
  private hydrateLineMrpFromProductDetails(rowIndex: number, productId: number): void {
    this.productService.getDetailsById(productId).subscribe({
      next: (d: any) => {
        if (!d) return;
        const mrp = this.pickProductLastMrpFromProductPayload(d);
        if (mrp == null) return;
        const row = this.items.at(rowIndex) as FormGroup;
        if (Number(row.get('productid')?.value) !== productId) return;
        row.patchValue({ mrp }, { emitEvent: false });
        this.cdr.markForCheck();
      },
      error: () => {},
    });
  }

  onPurchasePriceBlur(index: number): void {
    this.roundOptionalMoneyControl(index, 'purchaseprice', true);
  }

  onPurchaseMrpBlur(index: number): void {
    this.roundOptionalMoneyControl(index, 'mrp', false);
  }

  private roundOptionalMoneyControl(
    index: number,
    controlName: 'purchaseprice' | 'mrp',
    recalc: boolean
  ): void {
    const row = this.items.at(index) as FormGroup;
    const ctrl = row.get(controlName);
    const raw = ctrl?.value;
    if (raw === null || raw === undefined || String(raw).trim() === '') {
      ctrl?.setValue(null, { emitEvent: false });
      if (recalc) {
        this.recalcLine(index);
        this.recalcHeaderTotals();
      }
      return;
    }
    const v = Number(raw);
    if (!Number.isFinite(v)) return;
    ctrl?.setValue(this.roundToTwoDecimals(v), { emitEvent: false });
    if (recalc) {
      this.recalcLine(index);
      this.recalcHeaderTotals();
    }
  }

  /** Move focus to a line input (Enter-key navigation). */
  focusPurchaseLineField(rowIndex: number, field: PurchaseLineEnterField): void {
    setTimeout(() => {
      const rows = document.querySelectorAll('.purchase-items-table tbody tr');
      const row = rows.item(rowIndex);
      if (!row) return;
      const el = row.querySelector<HTMLInputElement>(`input[data-purchase-field="${field}"]`);
      el?.focus();
      el?.select?.();
    }, 0);
  }

  onLineEnterKey(event: Event, rowIndex: number, field: PurchaseLineEnterField): void {
    if (field === 'productname') {
      const ae = document.activeElement as HTMLElement | null;
      if (ae?.classList.contains('mat-mdc-option') || ae?.classList.contains('mat-option')) {
        return;
      }
      const panels = document.querySelectorAll('.mat-mdc-autocomplete-panel, .mat-autocomplete-panel');
      for (let pi = 0; pi < panels.length; pi++) {
        const p = panels[pi] as HTMLElement;
        if (p.offsetParent !== null) return;
      }
    }
    event.preventDefault();
    const order = this.getLineEnterOrder();
    const pos = order.indexOf(field);
    if (pos < 0) return;
    if (pos < order.length - 1) {
      this.focusPurchaseLineField(rowIndex, order[pos + 1]!);
      return;
    }
    if (rowIndex + 1 < this.items.length) {
      this.focusPurchaseLineField(rowIndex + 1, 'productname');
    } else {
      const nextRow = rowIndex + 1;
      this.addLine();
      setTimeout(() => this.focusPurchaseLineField(nextRow, 'productname'), 80);
    }
  }

  recalcLine(index: number): void {
    const g = this.items.at(index) as FormGroup;
    const packRaw = Number(g.get('productpackqty')?.value);
    const pack = packRaw > 0 ? packRaw : 1;
    const pq = Number(g.get('purchaseqty')?.value) || 0;
    const price = Number(g.get('purchaseprice')?.value) || 0;
    const dPer = Number(g.get('purchasediscountPer')?.value) || 0;
    const gPer = Number(g.get('purchasegstPer')?.value) || 0;
    const free = Number(g.get('purchasefreeqty')?.value) || 0;
    const gross = pq * price;
    const discAmt = gross * (dPer / 100);
    const taxable = Math.max(0, gross - discAmt);
    const gstAmt = taxable * (gPer / 100);
    const cost = taxable + gstAmt;
    const eachQty = pack * (pq + free);
    const eachPrice =
      eachQty > 0
        ? (pq * price - discAmt + gstAmt) / eachQty
        : pack > 0
          ? price / pack
          : price;
    g.patchValue(
      {
        purchaseeachqty: eachQty,
        purchaseeachcost: eachPrice,
        purchasediscountamount: discAmt,
        purchasegstamount: gstAmt,
        purchasecost: cost,
      },
      { emitEvent: false }
    );
  }

  getGrossSubtotal(): number {
    return Number(this.purchaseForm.get('totalgrossamount')?.value) || 0;
  }

  getTotalDiscount(): number {
    return Number(this.purchaseForm.get('totaldiscountamt')?.value) || 0;
  }

  getSubtotal(): number {
    return Math.max(0, this.getGrossSubtotal() - this.getTotalDiscount());
  }

  getTotalGst(): number {
    return Number(this.purchaseForm.get('totalgstamt')?.value) || 0;
  }

  getGrandTotal(): number {
    return Number(this.purchaseForm.get('totalamount')?.value) || 0;
  }

  getCgst(): number {
    return this.getTotalGst() / 2;
  }

  getSgst(): number {
    return this.getTotalGst() / 2;
  }

  /** Line amount before GST (taxable); matches recalcLine internals. */
  lineCostBeforeGst(item: AbstractControl): number {
    const g = item as FormGroup;
    const total = Number(g.get('purchasecost')?.value) || 0;
    const gst = Number(g.get('purchasegstamount')?.value) || 0;
    const v = total - gst;
    return Math.round(v * 100) / 100;
  }

  recalcHeaderTotals(): void {
    let tg = 0;
    let td = 0;
    let tgst = 0;
    let tc = 0;
    let tq = 0;
    this.items.controls.forEach((c, i) => {
      this.recalcLine(i);
      const v = (c as FormGroup).getRawValue();
      tg += (Number(v.purchaseqty) || 0) * (Number(v.purchaseprice) || 0);
      td += Number(v.purchasediscountamount) || 0;
      tgst += Number(v.purchasegstamount) || 0;
      tc += Number(v.purchasecost) || 0;
      tq += Number(v.purchaseeachqty) || 0;
    });
    this.purchaseForm.patchValue(
      {
        totalgrossamount: tg,
        totaldiscountamt: td,
        totalgstamt: tgst,
        totalamount: tc,
        totalqtysum: tq,
      },
      { emitEvent: false }
    );
  }

  loadPurchases(): void {
    this.purchaseService.getList().subscribe({
      next: (data) => {
        const filtered = this.scopePurchases(data || []);
        this.purchases = filtered.sort((a, b) => this.grnSortValue(b) - this.grnSortValue(a));
        if (this.isFormOpen && !this.isEditMode) {
          this.nextGrnPreview = this.computeNextGrnFromList(filtered);
          this.syncAutoBatchesForAllLines();
          this.cdr.markForCheck();
        }
      },
      error: (err) => {
        console.error(err);
        this.errorMessage = 'Failed to load purchases.';
      },
    });
  }

  loadSuppliers(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.supplierService.getSupplierList().subscribe({
      next: (list) => {
        const raw = Array.isArray(list) ? list : [];
        this.supplierOptions = accountId != null ? this.byAccountId(raw, accountId) : raw;
      },
      error: () => {},
    });
  }

  loadProducts(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.productService.getProductDetails().subscribe({
      next: (list) => {
        const raw = Array.isArray(list) ? list : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.productOptions = filtered;
        this.filteredProducts = this.items.controls.map(() => [...filtered]);
        this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
      },
      error: () => {},
    });
  }

  toggleForm(): void {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.deleteCautionMessage = '';
    this.supplierPanelOverride = null;
    this.getCurrentUserId();
    this.supplierSearchCtrl.setValue('', { emitEvent: false });
    this.initForm();
    this.filteredProducts = [];
    this.addLine();
    this.refreshNextGrnPreview().subscribe();
  }

  resetForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.errorMessage = '';
    this.successMessage = '';
    this.deleteCautionMessage = '';
    this.nextGrnPreview = '';
    this.supplierPanelOverride = null;
    this.supplierSearchCtrl.setValue('', { emitEvent: false });
    this.filteredProducts = [];
    this.initForm();
  }

  editItem(row: any): void {
    const grn = row?.purchasegrnno ?? row?.purchaseGrnNo;
    if (grn === null || grn === undefined || grn === '') {
      this.errorMessage = 'Invalid GRN.';
      return;
    }
    this.purchaseService.getByGrn(grn).subscribe({
      next: (res) => {
        const s = res?.summary;
        const details = res?.details ?? [];
        if (!s) {
          this.errorMessage = 'Purchase not found.';
          return;
        }
        this.isFormOpen = true;
        this.isEditMode = true;
        this.errorMessage = '';
        this.successMessage = '';
        const pd = s.purchasedate ? new Date(s.purchasedate) : new Date();
        const sidEdit = Number(s.supplierid);
        const supplierMatch = !Number.isNaN(sidEdit)
          ? this.supplierOptions.find((x) => Number(x.supplierid) === sidEdit)
          : null;
        const paymentPeriodFromSupplier = supplierMatch
          ? this.formatPaymentPeriodFromSupplier(supplierMatch)
          : '';
        this.purchaseForm.patchValue({
          purchasegrnno: s.purchasegrnno,
          purchasedate: pd,
          supplierid: Number(s.supplierid),
          suppliername: s.suppliername ?? '',
          supplierinvoiceno: s.supplierinvoiceno ?? '',
          paymenttype: s.paymenttype ?? '',
          paymentperiod: paymentPeriodFromSupplier || (s.paymentperiod ?? ''),
          totalgrossamount: Number(s.totalgrossamount) || 0,
          totaldiscountper: s.totaldiscountper != null ? Number(s.totaldiscountper) : null,
          totaldiscountamt: Number(s.totaldiscountamt) || 0,
          totalgstamt: Number(s.totalgstamt) || 0,
          totalchessamt: Number(s.totalchessamt) || 0,
          totalamount: Number(s.totalamount) || 0,
          totalqtysum: Number(s.totalqtysum) || 0,
          totalpurchaseprofitamt: Number(s.totalpurchaseprofitamt) || 0,
          accountid: Number(s.accountid) || this.authService.getAccountId() || 1,
          instanceid: Number(s.instanceid) || this.authService.getInstanceId() || 1,
          isactive: s.isactive === true || s.isactive === 'true' || s.isactive === 1,
        });
        this.items.clear();
        details.forEach((d: any) => {
          this.items.push(
            this.createLineGroup({
              productid: Number(d.productid),
              productname: d.productname ?? '',
              productpackqty: Number(d.productpackqty) || 1,
              purchaseqty: Number(d.purchaseqty) || 0,
              purchaseeachqty: Number(d.purchaseeachqty) || 0,
              purchaseprice: this.roundToTwoDecimals(Number(d.purchaseprice) || 0),
              mrp:
                (() => {
                  const raw = d.mrp ?? d.purchasemrp;
                  return raw != null && String(raw).trim() !== ''
                    ? this.roundToTwoDecimals(Number(raw))
                    : null;
                })(),
              purchaseeachcost:
                Number(d.purchaseeachcost ?? d.purchaseeachprice) || 0,
              purchasediscountPer: Number(d.purchasediscountPer ?? d['purchasediscount%']) || 0,
              purchasediscountamount: Number(d.purchasediscountamount) || 0,
              purchasegstPer: Number(d.purchasegstPer ?? d['purchasegst%']) || 0,
              purchasegstamount: Number(d.purchasegstamount) || 0,
              purchasecost: Number(d.purchasecost) || 0,
              purchasefreeqty: d.purchasefreeqty != null ? Number(d.purchasefreeqty) : 0,
              stockBatchno: String(d.stockBatchno ?? d.batchno ?? '').trim(),
              expirydate: (() => {
                const ex = d.expirydate ?? d.expiryDate;
                if (ex == null || ex === '') return null;
                return ex instanceof Date ? ex : new Date(ex);
              })(),
              purchaseinvoiceno: d.purchaseinvoiceno ?? '',
            })
          );
        });
        if (this.items.length === 0) {
          this.addLine();
        } else {
          this.filteredProducts = this.items.controls.map(() => [...this.productOptions]);
          this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
        }
        this.supplierSearchCtrl.setValue('', { emitEvent: false });
        this.syncLinesFromHeader();
        this.recalcHeaderTotals();
        this.syncAutoBatchesForAllLines();
        this.supplierPanelOverride = null;
        const sid = Number(s.supplierid);
        if (!Number.isNaN(sid) && sid > 0) {
          const match = this.supplierOptions.find((x) => Number(x.supplierid) === sid);
          if (!match) {
            this.supplierService.getDetailsById(sid).subscribe({
              next: (d) => {
                this.supplierPanelOverride = d;
                const pp = this.formatPaymentPeriodFromSupplier(d);
                if (pp) {
                  this.purchaseForm.patchValue({ paymentperiod: pp }, { emitEvent: false });
                }
                this.cdr.detectChanges();
              },
              error: () => {
                this.supplierPanelOverride = null;
              },
            });
          }
        }
      },
      error: () => {
        this.errorMessage = 'Failed to load purchase details.';
      },
    });
  }

  deleteItem(row: any): void {
    const grn = row?.purchasegrnno ?? row?.purchaseGrnNo;
    if (grn == null || grn === '') return;
    if (!confirm(`Delete purchase GRN ${grn}? Stock rows for this GRN will be removed.`)) return;
    this.deleteCautionMessage = '';
    this.purchaseService.delete(grn).subscribe({
      next: () => {
        this.successMessage = `GRN ${grn} deleted.`;
        this.loadPurchases();
      },
      error: (err) => {
        this.deleteCautionMessage = err?.error?.message || 'Delete failed.';
      },
    });
  }

  dismissMessages(): void {
    this.successMessage = '';
    this.deleteCautionMessage = '';
  }

  private buildDto(): SavePurchaseDto {
    this.syncLinesFromHeader();
    this.recalcHeaderTotals();
    this.syncAutoBatchesForAllLines();
    const v = this.purchaseForm.getRawValue();
    const d0 = v.purchasedate instanceof Date ? v.purchasedate : new Date(v.purchasedate);
    const dateStr = Number.isNaN(d0.getTime()) ? new Date().toISOString().slice(0, 10) : d0.toISOString().slice(0, 10);

    const items = (v.items as any[])
      .filter(
        (line) =>
          line.productid != null &&
          String(line.productid) !== '' &&
          Number(line.productid) > 0 &&
          (line.productname || '').toString().trim() !== ''
      )
      .map((line) => ({
      purchaseinvoiceno: String(line.purchaseinvoiceno || v.supplierinvoiceno || ''),
      purchasedate: dateStr,
      supplierid: Number(v.supplierid),
      suppliername: String(v.suppliername || ''),
      productid: Number(line.productid),
      productname: String(line.productname || ''),
      productpackqty: Number(line.productpackqty) || 1,
      purchaseqty: Number(line.purchaseqty) || 0,
      purchaseeachqty: Number(line.purchaseeachqty) || 0,
      purchaseprice: this.roundToTwoDecimals(Number(line.purchaseprice) || 0),
      mrp:
        line.mrp != null && String(line.mrp).trim() !== ''
          ? this.roundToTwoDecimals(Number(line.mrp))
          : null,
      purchaseeachcost: Number(line.purchaseeachcost) || 0,
      purchasediscountPer: Number(line.purchasediscountPer) || 0,
      purchasediscountamount: Number(line.purchasediscountamount) || 0,
      purchasegstPer: Number(line.purchasegstPer) || 0,
      purchasegstamount: Number(line.purchasegstamount) || 0,
      purchasecost: Number(line.purchasecost) || 0,
      purchasefreeqty: line.purchasefreeqty != null ? Number(line.purchasefreeqty) : null,
      stockBatchno: line.stockBatchno ? String(line.stockBatchno) : null,
      expirydate: line.expirydate
        ? (line.expirydate instanceof Date ? line.expirydate.toISOString().slice(0, 10) : line.expirydate)
        : null,
    }));

    const dto: SavePurchaseDto = {
      purchasedate: dateStr,
      supplierid: Number(v.supplierid),
      suppliername: String(v.suppliername || ''),
      supplierinvoiceno: String(v.supplierinvoiceno || ''),
      paymenttype: v.paymenttype || null,
      paymentperiod: v.paymentperiod || null,
      totalgrossamount: Number(v.totalgrossamount) || 0,
      totaldiscountper: v.totaldiscountper != null ? Number(v.totaldiscountper) : null,
      totaldiscountamt: Number(v.totaldiscountamt) || 0,
      totalgstamt: Number(v.totalgstamt) || 0,
      totalchessamt: Number(v.totalchessamt) || 0,
      totalamount: Number(v.totalamount) || 0,
      totalqtysum: Number(v.totalqtysum) || 0,
      totalpurchaseprofitamt: Number(v.totalpurchaseprofitamt) || 0,
      accountid: Number(v.accountid),
      instanceid: Number(v.instanceid),
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      isactive: v.isactive === true || v.isactive === 'true',
      items,
    };

    if (this.isEditMode && v.purchasegrnno != null) {
      dto.purchasegrnno = v.purchasegrnno;
    }
    return dto;
  }

  markFormGroupTouched(): void {
    Object.keys(this.purchaseForm.controls).forEach((key) => {
      const c = this.purchaseForm.get(key);
      c?.markAsTouched();
    });
    this.items.controls.forEach((item) => {
      const g = item as FormGroup;
      Object.keys(g.controls).forEach((key) => g.get(key)?.markAsTouched());
    });
  }

  onSubmit(): void {
    this.markFormGroupTouched();
    if (!this.canSavePurchase()) {
      this.errorMessage =
        'Fill supplier, supplier invoice no., date, and at least one line with a product and qty ≥ 1. Remove or complete extra blank lines.';
      return;
    }

    this.errorMessage = '';
    this.isSaving = true;

    const finishSave = (dto: SavePurchaseDto) => {
      const req = this.isEditMode ? this.purchaseService.update(dto) : this.purchaseService.save(dto);
      req.subscribe({
        next: (r) => {
          this.isSaving = false;
          this.successMessage = this.isEditMode
            ? `Purchase GRN ${r.purchasegrnno} updated. Stock refreshed.`
            : `Purchase saved. GRN ${r.purchasegrnno}. Stock updated.`;
          this.loadPurchases();
          this.resetForm();
        },
        error: (err) => {
          this.isSaving = false;
          this.errorMessage = err?.error?.message || err?.message || 'Save failed.';
        },
      });
    };

    if (!this.isEditMode) {
      this.refreshNextGrnPreview()
        .pipe(
          switchMap(() => {
            const dto = this.buildDto();
            if (!dto.items.length) {
              this.isSaving = false;
              this.errorMessage = 'Add at least one line with a product.';
              return EMPTY;
            }
            return this.purchaseService.save(dto);
          })
        )
        .subscribe({
          next: (r) => {
            this.isSaving = false;
            this.successMessage = `Purchase saved. GRN ${r.purchasegrnno}. Stock updated.`;
            this.loadPurchases();
            this.resetForm();
          },
          error: (err) => {
            this.isSaving = false;
            this.errorMessage = err?.error?.message || err?.message || 'Save failed.';
          },
        });
      return;
    }

    const dto = this.buildDto();
    if (!dto.items.length) {
      this.isSaving = false;
      this.errorMessage = 'Add at least one line with a product.';
      return;
    }
    finishSave(dto);
  }

  onExporting(e: any): void {
    if (e.format === 'pdf') {
      const doc = new jsPDF({ orientation: 'landscape' });
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: e.component,
      }).then(() => {
        doc.save('Purchases.pdf');
      });
    } else {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet('Purchases');
      exportDataGridToExcel({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          const blob = new Blob([buffer], {
            type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          });
          saveAs(blob, 'Purchases.xlsx');
        });
      });
    }
    e.cancel = true;
  }
}
