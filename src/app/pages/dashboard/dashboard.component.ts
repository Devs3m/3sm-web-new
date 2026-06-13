import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { AccountService } from '../service/account.service';
import { InstanceService } from '../service/instance.service';
import { CustomerService } from '../service/customer.service';
import { SalesService } from '../service/sales.service';
import { InventorysalesService } from '../service/inventorysales.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { SupplierService } from '../service/supplier.service';
import { PurchaseService } from '../service/purchase.service';
import { OrdersService } from '../orders/orders.service';
import { ProductService } from '../service/product.service';
import { MenuSettingsService } from '../service/menu-settings.service';
import * as Highcharts from 'highcharts';
import { formatDisplayDecimal } from '../../core/display-number-format';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  // Stat card values
  accountCount = 0;
  instanceCount = 0;
  customerCount = 0;
  supplierCount = 0;
  /** Purchase GRN count and sum of total amount (scoped). */
  purchaseCount = 0;
  purchaseTotalValue = 0;
  /** Σ (stock qty × unit value) from currentstock + product; scoped account+instance only. */
  currentStockValue = 0;
  /** Distinct products with stock qty &gt; 0 (from same API as current stock value). */
  stockProductsAvailable = 0;
  /** Service (salessummary) invoice count and value. */
  serviceSalesCount = 0;
  serviceSalesValue = 0;
  /** Product / inventory (inventorysummary) invoice count and value. */
  productSalesCount = 0;
  productSalesValue = 0;
  /** Combined totals for header / chart. */
  salesCount = 0;
  salesValue = 0;

  /**
   * From current instance `salestype` (see Instance form). `null` = super admin or unknown → show both.
   * Aligns with sidebar: sales = service page; inventory_sales / ecommerce = product; all = both.
   */
  instanceSalestype: 'sales' | 'inventory_sales' | 'ecommerce' | 'all' | null = null;

  isLoading = true;

  /** `YYYY-MM` — filters sales, product sales, totals, purchases, and chart (3‑month window ending this month). */
  filterMonth = '';

  /** Scoped lists from API; month filter applied client-side without re-fetching. */
  private dataCache: {
    salesFiltered: any[];
    inventoryFiltered: any[];
    purchasesFiltered: any[];
    accountList: any[];
    instanceList: any[];
    customerList: any[];
    suppliersFiltered: any[];
    stockValue: { totalStockValue: number; productsAvailable: number };
  } | null = null;

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  /** Company and Instances cards are hidden for tenant Administrator (single account/instance context). */
  get showAccountAndInstanceCards(): boolean {
    const raw =
      this.permissionService.getCurrentUserRole()?.roleName ??
      this.permissionService.getCurrentRoleName() ??
      '';
    return raw.trim().toLowerCase() !== 'administrator';
  }

  /** Service (salessummary) stats/cards — matches instance types `sales` and `all`. */
  get showServiceSalesDashboard(): boolean {
    if (this.instanceSalestype === null) {
      return true;
    }
    return this.instanceSalestype === 'sales' || this.instanceSalestype === 'all';
  }

  /** Product (inventorysummary) stats/cards — `inventory_sales`, `ecommerce`, and `all`. */
  get showProductSalesDashboard(): boolean {
    if (this.instanceSalestype === null) {
      return true;
    }
    return (
      this.instanceSalestype === 'inventory_sales' ||
      this.instanceSalestype === 'ecommerce' ||
      this.instanceSalestype === 'all'
    );
  }

  /** Combined total card only when both service and product modes apply. */
  get showTotalSalesCard(): boolean {
    return this.showServiceSalesDashboard && this.showProductSalesDashboard;
  }

  /** Only when instance is explicitly configured for both service + product sales. */
  get isInstanceBothSalesMode(): boolean {
    return this.instanceSalestype === 'all';
  }

  // Order metrics
  orderTotal = 0;
  orderPending = 0;
  orderConfirmed = 0;
  orderCancelled = 0;
  orderValue = 0;
  orderPendingValue = 0;
  orderTotalValue = 0;

  get showOrdersCard(): boolean {
    return this.menuSettings.isEnabled('orders');
  }

  get dynamicHint(): string {
    if (!this.filterMonthDisplayLabel) return '';
    const monthFiltered: string[] = [];
    const overall: string[] = [];

    if (this.menuSettings.isEnabled('sales') || this.menuSettings.isEnabled('inventorysales')) {
      monthFiltered.push('Sales');
    }
    if (this.menuSettings.isEnabled('purchase')) monthFiltered.push('Purchases');
    if (this.menuSettings.isEnabled('orders'))   monthFiltered.push('Orders');

    if (this.showAccountAndInstanceCards) {
      overall.push('Company', 'Instances');
    }
    if (this.menuSettings.isEnabled('supplier')) overall.push('Suppliers');
    if (this.menuSettings.isEnabled('product'))  overall.push('Products');
    overall.push('Customers');

    const parts: string[] = [];
    if (monthFiltered.length) {
      parts.push(`${monthFiltered.join(', ')} use <strong>${this.filterMonthDisplayLabel}</strong>`);
    }
    if (overall.length) {
      parts.push(`${overall.join(', ')} show overall figures`);
    }
    return parts.join('. ') + (parts.length ? '.' : '');
  }

  /** Product sales only (no service sales dashboard) — inventory or ecommerce instance. */
  get isInstanceProductSalesOnly(): boolean {
    return (
      this.instanceSalestype === 'inventory_sales' || this.instanceSalestype === 'ecommerce'
    );
  }

  /** Service sales only — instance `salestype` is `sales`. */
  get isInstanceServiceSalesOnly(): boolean {
    return this.instanceSalestype === 'sales';
  }

  /**
   * Hide Overview and put Customers first under Sales for instance modes: `all`, `sales`, or product-only.
   * Super-admin / unknown (`null`) keeps the classic Overview + Sales layout.
   */
  get showCustomersCardInSalesFirst(): boolean {
    return (
      this.isInstanceBothSalesMode ||
      this.isInstanceProductSalesOnly ||
      this.isInstanceServiceSalesOnly
    );
  }

  /** Stock valuation requires a scoped account (not super admin). */
  get showCurrentStockValueCard(): boolean {
    const a = this.authService.getAccountId();
    const i = this.authService.getInstanceId();
    return a != null && i != null;
  }

  /** Human-readable selected month for hints (e.g. Apr 2026). */
  get filterMonthDisplayLabel(): string {
    const p = this.parseYm(this.filterMonth);
    if (!p) {
      return '';
    }
    const names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${names[p.m]} ${p.y}`;
  }

  constructor(
    private accountService: AccountService,
    private instanceService: InstanceService,
    private customerService: CustomerService,
    private salesService: SalesService,
    private inventorysalesService: InventorysalesService,
    private supplierService: SupplierService,
    private purchaseService: PurchaseService,
    private ordersService: OrdersService,
    private productService: ProductService,
    private authService: AuthService,
    private permissionService: PermissionService,
    public menuSettings: MenuSettingsService
  ) {}

  ngOnInit(): void {
    this.filterMonth = this.getCurrentMonthYm();
    this.buildProductChart();
    this.buildOrderRoseChart();
    this.buildOverviewBarChart();
    this.buildPurchaseBarChart();
    this.buildSalesBarChart();
    this.serviceSalesBarOptions = this.miniBarOptions(['Invoices'], [{ y: 0, color: '#ff9800' }]);
    this.productSalesBarOptions = this.miniBarOptions(['Invoices'], [{ y: 0, color: '#00acc1' }]);
    this.loadDashboardData();
    if (this.menuSettings.isEnabled('product')) {
      this.loadProductMetrics();
    }
    if (this.showOrdersCard) {
      this.loadOrderMetrics();
    }
  }

  loadOrderMetrics(): void {
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();
    if (!accountId || !instanceId) return;
    this.ordersService.getOrders(accountId, instanceId)
      .pipe(catchError(() => of([])))
      .subscribe((orders: any[]) => {
        const list = Array.isArray(orders) ? orders : [];
        this.orderTotal     = list.length;
        this.orderPending   = list.filter(o => o.orderstatus === 'PENDING').length;
        this.orderConfirmed = list.filter(o => o.orderstatus === 'CONFIRMED').length;
        this.orderCancelled = list.filter(o => o.orderstatus === 'CANCELLED').length;
        const val = (o: any) => Number(o.order_grand_total ?? o.grandtotal ?? 0) || 0;
        this.orderValue        = list.filter(o => o.orderstatus === 'CONFIRMED').reduce((s, o) => s + val(o), 0);
        this.orderPendingValue = list.filter(o => o.orderstatus === 'PENDING').reduce((s, o) => s + val(o), 0);
        this.orderTotalValue   = list.reduce((s, o) => s + val(o), 0);
        this.buildOrderRoseChart();
      });
  }

  // Product metrics
  productTotal = 0;
  productActive = 0;
  productInactive = 0;
  productBarOptions: Highcharts.Options = {};

  orderRoseOptions: Highcharts.Options = {};
  overviewBarOptions: Highcharts.Options = {};
  purchaseBarOptions: Highcharts.Options = {};
  salesBarOptions: Highcharts.Options = {};
  serviceSalesBarOptions: Highcharts.Options = {};
  productSalesBarOptions: Highcharts.Options = {};

  loadProductMetrics(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();

    this.productService.getProductDetails().pipe(catchError(() => of([]))).subscribe((data: any[]) => {
      const raw = Array.isArray(data) ? data : [];
      const list = this.filterScopedRows(raw, accountId, instanceId);
      this.productTotal    = list.length;
      this.productActive   = list.filter(p => p.productisactive === true || p.productisactive === 'true' || p.productisactive === 1).length;
      this.productInactive = this.productTotal - this.productActive;
      this.buildProductChart();
    });
  }

  buildProductChart(): void {
    this.productBarOptions = {
      chart: { type: 'pie', backgroundColor: 'transparent', height: 140, plotBorderWidth: 0, margin: [0,0,0,0], spacing: [4,4,4,4] },
      title: { text: '' },
      credits: { enabled: false },
      legend: { enabled: false },
      tooltip: { pointFormat: '<b>{point.name}</b>: {point.y}' },
      plotOptions: {
        pie: {
          innerSize: '55%',
          borderWidth: 3,
          borderColor: '#f0f2f8',
          dataLabels: {
            enabled: true,
            format: '{point.y}',
            distance: -14,
            style: { fontSize: '10px', fontWeight: '700', textOutline: 'none', color: '#fff' },
            filter: { property: 'y', operator: '>', value: 0 }
          },
          startAngle: -90
        }
      },
      series: [{
        type: 'pie',
        name: 'Products',
        center: ['50%', '50%'],
        size: '80%',
        data: [
          { name: 'Active',   y: this.productActive,   color: '#43a047' },
          { name: 'Inactive', y: this.productInactive, color: '#e53935' },
          ...(this.productTotal === 0 ? [{ name: 'No products', y: 1, color: '#e8ecf4' }] : [])
        ]
      }] as any
    };
  }

  buildOverviewBarChart(): void {
    const categories = [];
    const data: any[] = [];
    if (this.showAccountAndInstanceCards) {
      categories.push('Company', 'Instances');
      data.push(
        { y: this.accountCount,  color: '#4e6ef2' },
        { y: this.instanceCount, color: '#7c5cbf' }
      );
    }
    categories.push('Customers');
    data.push({ y: this.customerCount, color: '#1abc9c' });

    this.overviewBarOptions = {
      chart: { type: 'bar', backgroundColor: 'transparent', height: 140, margin: [4, 16, 4, 4], spacing: [2,2,2,2] },
      title: { text: '' },
      credits: { enabled: false },
      legend: { enabled: false },
      tooltip: { pointFormat: '<b>{point.category}</b>: {point.y}' },
      xAxis: {
        categories,
        lineWidth: 0,
        tickWidth: 0,
        labels: { style: { fontSize: '10px', color: '#697386', fontWeight: '600' } }
      },
      yAxis: { visible: false, min: 0 },
      plotOptions: {
        bar: {
          borderRadius: 4,
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            format: '{point.y}',
            style: { fontSize: '10px', fontWeight: '700', textOutline: 'none', color: '#1a1f36' }
          }
        }
      },
      series: [{ type: 'bar', name: 'Overview', colorByPoint: true, data }] as any
    };
  }

  private miniBarOptions(categories: string[], data: any[]): Highcharts.Options {
    return {
      chart: { type: 'bar', backgroundColor: 'transparent', height: 140, margin: [4, 36, 4, 4], spacing: [2,2,2,2] },
      title: { text: '' },
      credits: { enabled: false },
      legend: { enabled: false },
      tooltip: { pointFormat: '<b>{point.category}</b>: {point.y}' },
      xAxis: { categories, lineWidth: 0, tickWidth: 0, labels: { style: { fontSize: '10px', color: '#697386', fontWeight: '600' } } },
      yAxis: { visible: false, min: 0 },
      plotOptions: {
        bar: {
          borderRadius: 4, borderWidth: 0, colorByPoint: true,
          dataLabels: { enabled: true, format: '{point.y}', style: { fontSize: '10px', fontWeight: '700', textOutline: 'none', color: '#1a1f36' } }
        }
      },
      series: [{ type: 'bar', name: '', data } as any]
    };
  }

  buildPurchaseBarChart(): void {
    const categories: string[] = [];
    const data: any[] = [];
    if (this.menuSettings.isEnabled('supplier')) {
      categories.push('Suppliers'); data.push({ y: this.supplierCount, color: '#5d6d8a' });
    }
    if (this.menuSettings.isEnabled('purchase')) {
      categories.push('GRNs'); data.push({ y: this.purchaseCount, color: '#2196f3' });
      categories.push('Stock Items'); data.push({ y: this.stockProductsAvailable, color: '#00bfa5' });
    }
    this.purchaseBarOptions = this.miniBarOptions(categories, data);
  }

  buildSalesBarChart(): void {
    const svcCats: string[] = [];
    const svcData: any[] = [];
    if (this.showCustomersCardInSalesFirst) {
      svcCats.push('Customers'); svcData.push({ y: this.customerCount, color: '#1abc9c' });
    }
    svcCats.push('Invoices'); svcData.push({ y: this.serviceSalesCount, color: '#ff9800' });
    this.serviceSalesBarOptions = this.miniBarOptions(svcCats, svcData);

    this.productSalesBarOptions = this.miniBarOptions(
      ['Invoices'],
      [{ y: this.productSalesCount, color: '#00acc1' }]
    );
  }

  getOrderValuesGradient(): string {
    const total = this.orderTotalValue || 1;
    const confirmed = (this.orderValue         / total) * 360;
    const pending   = (this.orderPendingValue  / total) * 360;
    return `conic-gradient(#43a047 0deg ${confirmed}deg, #ff9800 ${confirmed}deg ${confirmed + pending}deg, #e8ecf4 ${confirmed + pending}deg 360deg)`;
  }

  getOrdersGradient(): string {
    const total = this.orderTotal || 1;
    const p = (this.orderPending   / total) * 360;
    const c = (this.orderConfirmed / total) * 360;
    const x = (this.orderCancelled / total) * 360;
    const rest = 360 - p - c - x;
    return `conic-gradient(#ff9800 0deg ${p}deg, #43a047 ${p}deg ${p+c}deg, #e53935 ${p+c}deg ${p+c+x}deg, #e8ecf4 ${p+c+x}deg 360deg)`;
  }

  getProductsGradient(): string {
    const total = this.productTotal || 1;
    const a = (this.productActive   / total) * 360;
    const i = (this.productInactive / total) * 360;
    return `conic-gradient(#43a047 0deg ${a}deg, #e53935 ${a}deg ${a+i}deg, #e8ecf4 ${a+i}deg 360deg)`;
  }

  buildOrderRoseChart(): void {
    const total = this.orderTotal || 1;
    this.orderRoseOptions = {
      chart: {
        type: 'pie',
        backgroundColor: 'transparent',
        height: 140,
        plotBorderWidth: 0,
        margin: [0, 0, 0, 0],
        spacing: [4, 4, 4, 4]
      },
      title: { text: '' },
      credits: { enabled: false },
      legend: { enabled: false },
      tooltip: {
        pointFormat: '<b>{point.name}</b>: {point.y} ({point.percentage:.0f}%)'
      },
      plotOptions: {
        pie: {
          innerSize: '55%',
          borderWidth: 3,
          borderColor: '#f0f2f8',
          dataLabels: {
            enabled: true,
            format: '{point.y}',
            distance: -14,
            style: { fontSize: '10px', fontWeight: '700', textOutline: 'none', color: '#fff' },
            filter: { property: 'y', operator: '>', value: 0 }
          },
          startAngle: -90
        }
      },
      series: [{
        type: 'pie',
        name: 'Orders',
        center: ['50%', '50%'],
        size: '80%',
        data: [
          { name: 'Pending',   y: this.orderPending,   color: '#ff9800' },
          { name: 'Confirmed', y: this.orderConfirmed, color: '#43a047' },
          { name: 'Cancelled', y: this.orderCancelled, color: '#e53935' },
          ...(this.orderTotal === 0 ? [{ name: 'No orders', y: 1, color: '#e8ecf4' }] : [])
        ]
      }] as any
    };
  }

  private getCurrentMonthYm(): string {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
  }

  /** Parse `YYYY-MM` → `{ y, m }` with `m` = 0–11. */
  private parseYm(ym: string): { y: number; m: number } | null {
    const m = /^(\d{4})-(\d{2})$/.exec(String(ym ?? '').trim());
    if (!m) {
      return null;
    }
    const y = Number(m[1]);
    const mo = Number(m[2]);
    if (mo < 1 || mo > 12 || !Number.isFinite(y)) {
      return null;
    }
    return { y, m: mo - 1 };
  }

  private getSelectedMonthRange(): { start: Date; end: Date } {
    let p = this.parseYm(this.filterMonth);
    if (!p) {
      const d = new Date();
      p = { y: d.getFullYear(), m: d.getMonth() };
    }
    const start = new Date(p.y, p.m, 1, 0, 0, 0, 0);
    const end = new Date(p.y, p.m + 1, 0, 23, 59, 59, 999);
    return { start, end };
  }

  /** First day of the selected calendar month (chart anchor: 3‑month window ends here). */
  private getAnchorMonthDate(): Date {
    const p = this.parseYm(this.filterMonth);
    if (!p) {
      const d = new Date();
      return new Date(d.getFullYear(), d.getMonth(), 1);
    }
    return new Date(p.y, p.m, 1);
  }

  private getItemInvoiceDate(item: any): Date | null {
    const raw = item?.invdate ?? item?.saledate ?? item?.createddate ?? item?.updateddate;
    if (raw == null) {
      return null;
    }
    const d = new Date(raw);
    return isNaN(d.getTime()) ? null : d;
  }

  private getPurchaseDate(item: any): Date | null {
    const raw = item?.purchasedate ?? item?.purchaseDate;
    if (raw == null) {
      return null;
    }
    const d = new Date(raw);
    return isNaN(d.getTime()) ? null : d;
  }

  private filterSalesByMonth(rows: any[]): any[] {
    const { start, end } = this.getSelectedMonthRange();
    return rows.filter((r) => {
      const d = this.getItemInvoiceDate(r);
      return d != null && d >= start && d <= end;
    });
  }

  private filterPurchasesByMonth(rows: any[]): any[] {
    const { start, end } = this.getSelectedMonthRange();
    return rows.filter((r) => {
      const d = this.getPurchaseDate(r);
      return d != null && d >= start && d <= end;
    });
  }

  onFilterMonthChange(): void {
    if (this.dataCache) {
      this.recomputeMetricsFromCache();
    }
  }

  private safe<T>(obs: any, fallback: T) {
    return obs.pipe(timeout(6000), catchError(() => of(fallback)));
  }

  /** Sales list can be large; allow more time before falling back to empty (avoids ₹0 dashboard). */
  private safeSales<T>(obs: any, fallback: T) {
    return obs.pipe(timeout(20000), catchError(() => of(fallback)));
  }

  /** Filter items by logged-in user's account id (for administrator scoped to his account). */
  private byAccountId<T extends { accountid?: number; accountId?: number }>(list: T[], accountId: number): T[] {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  /** Filter items by logged-in user's account id and instance id (sales/customers scoped to account+instance). */
  private byAccountAndInstance<T extends { accountid?: number; accountId?: number; instanceid?: number; instanceId?: number }>(
    list: T[], accountId: number, instanceId: number
  ): T[] {
    if (!Array.isArray(list) || accountId == null || instanceId == null) return list || [];
    return list.filter((item: any) => {
      const accId = item.accountid ?? item.accountId ?? item.account_id;
      const instId = item.instanceid ?? item.instanceId ?? item.instance_id;
      return accId != null && Number(accId) === Number(accountId) &&
             instId != null && Number(instId) === Number(instanceId);
    });
  }

  /** Normalize API response to array (handles { list/data/rows/records }, or direct array). */
  private toArray(data: unknown): any[] {
    if (data == null) return [];
    if (Array.isArray(data)) return data as any[];
    const o = data as any;
    const list = o.list ?? o.data ?? o.rows ?? o.records ?? o.items;
    return Array.isArray(list) ? (list as any[]) : [];
  }

  private sumGrandTotal(items: any[]): number {
    return items.reduce((sum: number, item: any) => {
      const raw = item?.grandtotal ?? item?.grandTotal ?? item?.GrandTotal;
      const val = typeof raw === 'string' ? parseFloat(raw) : Number(raw);
      return sum + (Number.isFinite(val) ? val : 0);
    }, 0);
  }

  /** Purchase summary total amount (purchasesummary.totalamount). */
  private sumPurchaseAmount(items: any[]): number {
    return items.reduce((sum: number, item: any) => {
      const raw = item?.totalamount ?? item?.totalAmount ?? item?.TotalAmount;
      const val = typeof raw === 'string' ? parseFloat(raw) : Number(raw);
      return sum + (Number.isFinite(val) ? val : 0);
    }, 0);
  }

  /** Same scoping as sales list (API may already filter; client filter is fallback). */
  private filterScopedRows(
    raw: any[],
    accountId: number | null,
    instanceId: number | null
  ): any[] {
    if (accountId == null) return raw;
    if (instanceId != null) {
      let filtered = this.byAccountAndInstance(raw, accountId, instanceId);
      if (filtered.length === 0 && raw.length > 0) {
        filtered = this.byAccountId(raw, accountId);
      }
      return filtered;
    }
    return this.byAccountId(raw, accountId);
  }

  private normalizeInstanceSalestype(st: unknown): 'sales' | 'inventory_sales' | 'ecommerce' | 'all' {
    const s = String(st ?? '').trim().toLowerCase();
    if (s === 'inventory_sales') {
      return 'inventory_sales';
    }
    if (s === 'ecommerce') {
      return 'ecommerce';
    }
    if (s === 'all') {
      return 'all';
    }
    return 'sales';
  }

  loadDashboardData(): void {
    this.isLoading = true;
    this.dataCache = null;
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();

    if (isSuperAdmin) {
      this.instanceSalestype = null;
      this.runDashboardForkJoin(accountId, instanceId);
      return;
    }

    if (!instanceId) {
      this.instanceSalestype = null;
      this.runDashboardForkJoin(accountId, instanceId);
      return;
    }

    this.instanceService
      .getDetailsById(instanceId)
      .pipe(timeout(6000), catchError(() => of(null)))
      .subscribe((inst) => {
        this.instanceSalestype = inst
          ? this.normalizeInstanceSalestype((inst as any).salestype)
          : 'sales';
        this.runDashboardForkJoin(accountId, instanceId);
      });
  }

  private runDashboardForkJoin(accountId: number | null, instanceId: number | null): void {
    const showSvc = this.showServiceSalesDashboard;
    const showProd = this.showProductSalesDashboard;

    const salesRequest = showSvc
      ? accountId != null
        ? this.safeSales(this.salesService.getSalesSummaryList(accountId, instanceId ?? undefined), [])
        : this.safeSales(this.salesService.getSalesSummaryList(), [])
      : of([]);

    const inventoryRequest = showProd
      ? accountId != null
        ? this.safeSales(this.inventorysalesService.getInventorySummaryList(accountId, instanceId ?? undefined), [])
        : this.safeSales(this.inventorysalesService.getInventorySummaryList(), [])
      : of([]);

    const supplierRequest = this.safeSales(this.supplierService.getSupplierList(), []);
    const purchaseRequest = this.safeSales(this.purchaseService.getList(), []);

    const stockValueRequest =
      accountId != null && instanceId != null
        ? this.safeSales(
            this.inventorysalesService.getStockValueTotal(accountId, instanceId),
            { totalStockValue: 0, productsAvailable: 0 }
          )
        : of({ totalStockValue: 0, productsAvailable: 0 });

    forkJoin({
      accounts: this.safe(this.accountService.getAccountDetails(), []),
      instances: this.safe(this.instanceService.getInstanceDetails(), []),
      customers: this.safe(this.customerService.getCustomerList(), []),
      salesList: salesRequest,
      inventoryList: inventoryRequest,
      suppliers: supplierRequest,
      purchases: purchaseRequest,
      stockValue: stockValueRequest
    }).subscribe(({ accounts, instances, customers, salesList, inventoryList, suppliers, purchases, stockValue }) => {
      const accountList = Array.isArray(accounts) ? (accountId != null ? this.byAccountId(accounts, accountId) : accounts) : [];
      const instanceList = Array.isArray(instances) ? (accountId != null ? this.byAccountId(instances, accountId) : instances) : [];
      const customerList = Array.isArray(customers) ? (accountId != null && instanceId != null ? this.byAccountAndInstance(customers, accountId, instanceId) : (accountId != null ? this.byAccountId(customers, accountId) : customers)) : [];

      const salesRaw: any[] = this.toArray(salesList);
      const inventoryRaw: any[] = this.toArray(inventoryList);
      const salesFiltered = this.filterScopedRows(salesRaw, accountId, instanceId);
      const inventoryFiltered = this.filterScopedRows(inventoryRaw, accountId, instanceId);

      const supplierRaw: any[] = this.toArray(suppliers);
      const purchaseRaw: any[] = this.toArray(purchases);
      const suppliersFiltered = this.filterScopedRows(supplierRaw, accountId, instanceId);
      const purchasesFiltered = this.filterScopedRows(purchaseRaw, accountId, instanceId);

      const sv = stockValue as { totalStockValue?: number; productsAvailable?: number };
      const stockVal = {
        totalStockValue:
          typeof sv?.totalStockValue === 'number' && Number.isFinite(sv.totalStockValue) ? sv.totalStockValue : 0,
        productsAvailable:
          typeof sv?.productsAvailable === 'number' && Number.isFinite(sv.productsAvailable)
            ? Math.max(0, Math.floor(sv.productsAvailable))
            : 0
      };

      this.dataCache = {
        salesFiltered,
        inventoryFiltered,
        purchasesFiltered,
        accountList,
        instanceList,
        customerList,
        suppliersFiltered,
        stockValue: stockVal
      };

      this.recomputeMetricsFromCache();
      this.isLoading = false;
    }, () => {
      this.isLoading = false;
    });
  }

  private recomputeMetricsFromCache(): void {
    if (!this.dataCache) {
      return;
    }
    const c = this.dataCache;

    this.accountCount = c.accountList.length;
    this.instanceCount = c.instanceList.length;
    this.customerCount = c.customerList.length;
    this.supplierCount = c.suppliersFiltered.length;
    this.buildOverviewBarChart();

    this.currentStockValue = c.stockValue.totalStockValue;
    this.stockProductsAvailable = c.stockValue.productsAvailable;

    const salesInMonth = this.filterSalesByMonth(c.salesFiltered);
    const inventoryInMonth = this.filterSalesByMonth(c.inventoryFiltered);
    const purchasesInMonth = this.filterPurchasesByMonth(c.purchasesFiltered);

    this.purchaseCount = purchasesInMonth.length;
    this.purchaseTotalValue = this.sumPurchaseAmount(purchasesInMonth);

    const salesForStats = this.showServiceSalesDashboard ? salesInMonth : [];
    const invForStats = this.showProductSalesDashboard ? inventoryInMonth : [];

    this.serviceSalesCount = salesForStats.length;
    this.productSalesCount = invForStats.length;
    this.serviceSalesValue = this.sumGrandTotal(salesForStats);
    this.productSalesValue = this.sumGrandTotal(invForStats);

    if (this.showTotalSalesCard) {
      this.salesCount = this.serviceSalesCount + this.productSalesCount;
      this.salesValue = this.serviceSalesValue + this.productSalesValue;
    } else if (this.showServiceSalesDashboard) {
      this.salesCount = this.serviceSalesCount;
      this.salesValue = this.serviceSalesValue;
    } else {
      this.salesCount = this.productSalesCount;
      this.salesValue = this.productSalesValue;
    }

    this.buildPurchaseBarChart();
    this.buildSalesBarChart();

    this.buildChart(
      this.showServiceSalesDashboard ? c.salesFiltered : [],
      this.showProductSalesDashboard ? c.inventoryFiltered : [],
      this.getAnchorMonthDate()
    );
  }

  private buildChart(serviceSales: any[], productSales: any[], anchorMonth: Date): void {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const months: string[] = [];
    const targets: Date[] = [];
    for (let i = 0; i < 3; i++) {
      const t = new Date(anchorMonth.getFullYear(), anchorMonth.getMonth() - 2 + i, 1);
      targets.push(t);
      months.push(`${monthNames[t.getMonth()]} ${t.getFullYear()}`);
    }
    const buckets: { count: number; value: number }[] = months.map(() => ({ count: 0, value: 0 }));

    const addRows = (items: any[]) => {
      items.forEach((item: any) => {
        const d = this.getItemInvoiceDate(item);
        if (!d) {
          return;
        }
        for (let i = 0; i < 3; i++) {
          const target = targets[i];
          if (d.getFullYear() === target.getFullYear() && d.getMonth() === target.getMonth()) {
            buckets[i].count++;
            const gt = item.grandtotal ?? item.grandTotal ?? 0;
            const v = typeof gt === 'string' ? parseFloat(gt) : Number(gt);
            buckets[i].value += Number.isFinite(v) ? v : 0;
          }
        }
      });
    };
    addRows(serviceSales);
    addRows(productSales);

    const rangeHint = `${months[0]} – ${months[2]}`;
    const chartTitle =
      this.showTotalSalesCard
        ? `Sales — ${rangeHint} (service + product)`
        : this.showServiceSalesDashboard && !this.showProductSalesDashboard
          ? `Service sales — ${rangeHint}`
          : `Product sales — ${rangeHint}`;

    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        style: { fontFamily: 'inherit' }
      },
      title: {
        text: chartTitle,
        style: { fontSize: '15px', fontWeight: '600', color: '#1a5276' }
      },
      xAxis: {
        categories: months,
        crosshair: true,
        labels: { style: { color: '#555', fontSize: '12px' } }
      },
      yAxis: [
        {
          title: { text: 'No. of Invoices', style: { color: '#337ab7' } },
          labels: { style: { color: '#337ab7' } },
          min: 0
        },
        {
          title: { text: 'Sales Value (₹)', style: { color: '#27ae60' } },
          labels: {
            style: { color: '#27ae60' },
            formatter: function (this: any) {
              const v = typeof this.value === 'number' ? this.value : Number(this.value || 0);
              return '₹' + formatDisplayDecimal(v);
            }
          },
          opposite: true,
          min: 0
        }
      ],
      tooltip: {
        shared: true,
        formatter: function (this: any) {
          const x = this.x != null ? String(this.x) : '';
          const pts = this.points ?? [];
          let s = `<b>${x}</b><br/>`;
          pts.forEach((p: any) => {
            const val =
              p.series.name.includes('Value') ? '₹' + formatDisplayDecimal(p.y) : String(p.y);
            s += `${p.series.name}: <b>${val}</b><br/>`;
          });
          return s;
        }
      },
      legend: { enabled: true },
      credits: { enabled: false },
      series: [
        {
          type: 'column',
          name: 'Invoices',
          data: buckets.map(b => b.count),
          color: '#337ab7',
          yAxis: 0,
          borderRadius: 4
        } as Highcharts.SeriesColumnOptions,
        {
          type: 'spline',
          name: 'Sales Value (₹)',
          data: buckets.map(b => Math.round(b.value * 100) / 100),
          color: '#27ae60',
          yAxis: 1,
          marker: { enabled: true, radius: 5 },
          lineWidth: 2
        } as Highcharts.SeriesSplineOptions
      ]
    };
  }
}
