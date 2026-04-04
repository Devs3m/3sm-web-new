import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { saveAs } from 'file-saver';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { DX_FORMAT_FIXED_2 } from '../../core/display-number-format';
import { AuthService } from '../service/auth.service';
import { InventorysalesService } from '../service/inventorysales.service';

interface SalesLedgerRow {
  date: string;
  source: string;
  invoiceno: string;
  customerName: string;
  paymentType: string;
  paymentStatus: string;
  amount: number;
  profit: number;
  profitPercent: number;
}

@Component({
  selector: 'app-sales-ledger',
  templateUrl: './sales-ledger.component.html',
  styleUrls: ['./sales-ledger.component.css'],
})
export class SalesLedgerComponent implements OnInit {
  form!: FormGroup;
  apiData: SalesLedgerRow[] = [];
  paymentTypeOptions: string[] = [];
  isLoading = false;
  errorMessage = '';

  /** Σprofit / Σamount × 100 for loaded rows; drives Profit % footer. */
  footerTotalProfitMarginPct = 0;

  readonly amountColumnFormat = DX_FORMAT_FIXED_2;

  /** Replace default "Sum: {0}" with "Total: {0}" for footer sums. */
  readonly summaryTexts = { sum: 'Total: {0}' };

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private inventorysalesService: InventorysalesService
  ) {}

  ngOnInit(): void {
    const today = new Date();
    this.form = this.fb.group({
      startDate: [today],
      endDate: [today],
      paymentType: [''],
    });
    this.loadPaymentTypes();
  }

  private getCurrentAccountAndInstance(): { accountId: number; instanceId: number } {
    const user = this.authService.getUser();
    return {
      accountId: user?.accountid ?? user?.accountId ?? 1,
      instanceId: user?.instanceid ?? user?.instanceId ?? 1,
    };
  }

  /** Weighted margin from current apiData (matches Amount/Profit sum footers). */
  private refreshFooterProfitMarginPct(): void {
    let amount = 0;
    let profit = 0;
    for (const row of this.apiData) {
      amount += Number(row.amount) || 0;
      profit += Number(row.profit) || 0;
    }
    this.footerTotalProfitMarginPct =
      amount > 0 ? Math.round((profit / amount) * 10000) / 100 : 0;
  }

  private loadPaymentTypes(): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.inventorysalesService.getSalesLedgerPaymentTypes(accountId, instanceId).subscribe({
      next: (types) => {
        this.paymentTypeOptions = Array.isArray(types) ? types : [];
      },
      error: () => {
        this.paymentTypeOptions = [];
      },
    });
  }

  onRefresh(): void {
    const today = new Date();
    this.form.patchValue({ startDate: today, endDate: today, paymentType: '' });
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
    const paymentType = this.form.get('paymentType')?.value || null;
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();

    this.isLoading = true;
    this.inventorysalesService
      .getSalesLedger(startDateStr, endDateStr, accountId, instanceId, paymentType)
      .subscribe({
        next: (rows) => {
          const list = Array.isArray(rows) ? rows : [];
          this.apiData = list.map((r: any) => {
            const amount = parseFloat(String(r.amount ?? 0)) || 0;
            const profit = parseFloat(String(r.profit ?? 0)) || 0;
            const profitPercentRaw = r.profitPercent ?? r.profit_percent;
            const profitPercent =
              profitPercentRaw != null && `${profitPercentRaw}` !== ''
                ? parseFloat(String(profitPercentRaw)) || 0
                : amount > 0
                  ? Math.round((profit / amount) * 10000) / 100
                  : 0;
            return { ...r, amount, profit, profitPercent } as SalesLedgerRow;
          });
          this.refreshFooterProfitMarginPct();
          this.isLoading = false;
        },
        error: (err) => {
          this.errorMessage = err?.error?.message || err?.message || 'Failed to load sales ledger.';
          this.apiData = [];
          this.footerTotalProfitMarginPct = 0;
          this.isLoading = false;
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

  dateCellValue = (rowData: SalesLedgerRow): string => this.formatDateDdMmYyyy(rowData.date);

  /** Footer label for the total row (count summary only supplies the cell; text is fixed). */
  grandTotalLabelText = (): string => 'Grand Total';

  /** Profit % column: show two decimals with percent sign. */
  profitPercentText = (cellInfo: { value?: number | null }): string => {
    const v = cellInfo.value;
    if (v == null || !Number.isFinite(Number(v))) {
      return '';
    }
    return `${Number(v).toFixed(2)}%`;
  };

  /** Footer for Profit %: weighted total margin (not sum of row %). */
  totalProfitPercentFooterText = (): string => {
    if (!this.apiData.length) {
      return '';
    }
    const v = this.footerTotalProfitMarginPct;
    if (!Number.isFinite(v)) {
      return '';
    }
    return `Total: ${v.toFixed(2)}%`;
  };

  onExporting(e: any): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sales Ledger');
    exportDataGrid({
      component: e.component,
      worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(blob, 'SalesLedger.xlsx');
      });
    });
    e.cancel = true;
  }
}
