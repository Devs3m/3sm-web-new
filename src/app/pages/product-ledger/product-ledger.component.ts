import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { AuthService } from '../service/auth.service';
import { InventorysalesService } from '../service/inventorysales.service';
import { DX_FORMAT_FIXED_2, formatDisplayDecimal } from '../../core/display-number-format';

export interface LedgerRow {
  date: string;
  type: string;
  ref: string;
  description: string;
  batchNo: string;
  openingQty: number | null;
  qty: number;
  closingQty: number | null;
}

@Component({
  selector: 'app-product-ledger',
  templateUrl: './product-ledger.component.html',
  styleUrls: ['./product-ledger.component.css'],
})
export class ProductLedgerComponent implements OnInit {
  form!: FormGroup;
  productSearchCtrl = new FormControl<any>('');
  batchSearchCtrl = new FormControl<string | { all: boolean }>('');
  productOptions: any[] = [];
  batchOptions: string[] = [];
  apiData: LedgerRow[] = [];
  isLoading = false;
  errorMessage = '';
  /** Hidden until the first successful ledger load so batch options exist. */
  showBatchFilter = false;

  readonly qtyColumnFormat = DX_FORMAT_FIXED_2;

  private parseNullableNumber(v: unknown): number | null {
    if (v == null || v === '') return null;
    const n = Number(v);
    return Number.isFinite(n) ? n : null;
  }

  /** Accepts camelCase/snake_case/lowercase keys from API payloads. */
  private normalizeLedgerRow(row: any): LedgerRow {
    return {
      date: String(row?.date ?? ''),
      type: String(row?.type ?? ''),
      ref: String(row?.ref ?? ''),
      description: String(row?.description ?? ''),
      batchNo: String(row?.batchNo ?? row?.batchno ?? ''),
      openingQty: this.parseNullableNumber(row?.openingQty ?? row?.openingqty ?? row?.opening_qty),
      qty: this.parseNullableNumber(row?.qty ?? row?.quantity) ?? 0,
      closingQty: this.parseNullableNumber(row?.closingQty ?? row?.closingqty ?? row?.closing_qty ?? row?.stockqty_after),
    };
  }

  dateCellValue = (rowData: LedgerRow): string => this.formatDateDdMmYyyy(rowData.date);
  openingQtyCellValue = (rowData: LedgerRow): string =>
    rowData.openingQty != null ? formatDisplayDecimal(rowData.openingQty) : '-';
  closingQtyCellValue = (rowData: LedgerRow): string =>
    rowData.closingQty != null ? formatDisplayDecimal(rowData.closingQty) : '-';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private inventorysalesService: InventorysalesService
  ) {}

  get filteredProducts(): any[] {
    const val = this.productSearchCtrl?.value;
    const q = typeof val === 'string' ? val.trim().toLowerCase() : '';
    if (!q) return this.productOptions;
    return this.productOptions.filter((p: any) =>
      (p.productname || p.product_name || p.description || '').toLowerCase().includes(q)
    );
  }

  productDisplayFn(product: any): string {
    if (!product) return '';
    if (typeof product === 'string') return product;
    if (product.all) return 'All Products';
    return product.productname || product.product_name || product.description || '';
  }

  get filteredBatches(): string[] {
    const val = this.batchSearchCtrl?.value;
    const q = typeof val === 'string' ? val.trim().toLowerCase() : '';
    if (!q) return this.batchOptions;
    return this.batchOptions.filter((b) => b.toLowerCase().includes(q));
  }

  batchDisplayFn(batch: string | { all: boolean } | null): string {
    if (!batch) return '';
    if (typeof batch === 'object' && batch.all) return 'All Batches';
    return typeof batch === 'string' ? batch : '';
  }

  ngOnInit(): void {
    const today = new Date();
    this.form = this.fb.group({
      startDate: [today],
      endDate: [today],
      productid: [null as number | null],
      batchno: [null as string | null],
    });
    this.productSearchCtrl.setValue({ all: true }, { emitEvent: false });
    this.batchSearchCtrl.setValue({ all: true }, { emitEvent: false });
    this.loadProducts();
  }

  private getCurrentAccountAndInstance(): { accountId: number; instanceId: number } {
    const user = this.authService.getUser();
    return {
      accountId: user?.accountid ?? user?.accountId ?? 1,
      instanceId: user?.instanceid ?? user?.instanceId ?? 1,
    };
  }

  loadProducts(): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.inventorysalesService.getProductsFromCurrentStock(accountId, instanceId).subscribe({
      next: (items) => {
        const raw = Array.isArray(items) ? items : [];
        const seen = new Set<number>();
        this.productOptions = raw.filter((p: any) => {
          const id = p.productid ?? p.product_id;
          if (id == null || seen.has(id)) return false;
          seen.add(id);
          return true;
        });
      },
      error: () => {
        this.productOptions = [];
      },
    });
  }

  onRefresh(): void {
    const today = new Date();
    this.form.patchValue({ startDate: today, endDate: today });
    this.clearProduct();
    this.clearBatch();
    this.onView();
  }

  onView(): void {
    this.errorMessage = '';
    const startDateVal = this.form.get('startDate')?.value;
    const endDateVal = this.form.get('endDate')?.value;
    if (!startDateVal || !endDateVal) {
      this.errorMessage = 'Please select date range.';
      return;
    }
    const startDate = startDateVal instanceof Date ? startDateVal : new Date(startDateVal);
    const endDate = endDateVal instanceof Date ? endDateVal : new Date(endDateVal);
    if (startDate > endDate) {
      this.errorMessage = 'Start date must be before or equal to end date.';
      return;
    }
    const startDateStr = startDate.toISOString().split('T')[0];
    const endDateStr = endDate.toISOString().split('T')[0];
    const productId = this.form.get('productid')?.value;
    const batchNo = this.form.get('batchno')?.value;
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();

    this.isLoading = true;
    const ledger$ = this.inventorysalesService.getProductLedger(
      startDateStr, endDateStr, accountId, instanceId, productId || null, batchNo || null
    );
    const batches$ = this.inventorysalesService.getProductLedgerBatches(
      startDateStr, endDateStr, accountId, instanceId, productId || null
    );

    ledger$.subscribe({
      next: (rows) => {
        const raw = Array.isArray(rows) ? rows : [];
        this.apiData = raw.map((r) => this.normalizeLedgerRow(r));
        this.isLoading = false;
        this.showBatchFilter = true;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load product ledger.';
        this.apiData = [];
        this.isLoading = false;
      },
    });

    batches$.subscribe({
      next: (batches) => {
        this.batchOptions = Array.isArray(batches) ? batches : [];
      },
      error: () => {
        this.batchOptions = [];
      },
    });
  }

  onProductSelect(product: any): void {
    if (product && product.productid != null) {
      this.form.patchValue({ productid: product.productid ?? product.product_id });
      this.productSearchCtrl.setValue(product, { emitEvent: false });
    } else {
      this.form.patchValue({ productid: null });
      this.productSearchCtrl.setValue({ all: true }, { emitEvent: false });
    }
  }

  clearProduct(): void {
    this.form.patchValue({ productid: null });
    this.productSearchCtrl.setValue({ all: true }, { emitEvent: false });
  }

  onBatchSelect(batch: string | { all: boolean }): void {
    if (typeof batch === 'string') {
      this.form.patchValue({ batchno: batch });
      this.batchSearchCtrl.setValue(batch, { emitEvent: false });
    } else {
      this.form.patchValue({ batchno: null });
      this.batchSearchCtrl.setValue({ all: true }, { emitEvent: false });
    }
  }

  clearBatch(): void {
    this.form.patchValue({ batchno: null });
    this.batchSearchCtrl.setValue({ all: true }, { emitEvent: false });
  }

  /** Format date string YYYY-MM-DD to dd-MM-yyyy without timezone conversion */
  formatDateDdMmYyyy(val: string | null | undefined): string {
    if (!val) return '';
    const s = String(val).trim();
    const m = s.match(/^(\d{4})-(\d{2})-(\d{2})/);
    if (m) return `${m[3]}-${m[2]}-${m[1]}`;
    return s;
  }

  onExporting(e: any): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Product Ledger');
    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(blob, 'ProductLedger.xlsx');
      });
    });
    e.cancel = true;
  }
}
