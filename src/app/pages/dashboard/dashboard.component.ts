import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';
import { AccountService } from '../service/account.service';
import { InstanceService } from '../service/instance.service';
import { CustomerService } from '../service/customer.service';
import { SalesService } from '../service/sales.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import type { PermissionDto } from '../service/permission.dto';
import * as Highcharts from 'highcharts';

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
  salesCount = 0;
  salesValue = 0;

  isLoading = true;

  // Highcharts
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};
  updateFlag = false;

  /** Current user's role name (e.g. Administrator). */
  get currentRoleName(): string {
    return this.permissionService.getCurrentUserRole()?.roleName || 'User';
  }

  /** Permissions grouped by module for the current user (e.g. Administrator view). */
  get permissionsByModule(): Record<string, PermissionDto[]> {
    return this.permissionService.getByModule();
  }

  /** Ordered list of module names for display. */
  get permissionModuleKeys(): string[] {
    return Object.keys(this.permissionsByModule).sort();
  }

  // Last 3 months labels
  private get last3Months(): string[] {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const now = new Date();
    return [2, 1, 0].map(offset => {
      const d = new Date(now.getFullYear(), now.getMonth() - offset, 1);
      return `${months[d.getMonth()]} ${d.getFullYear()}`;
    });
  }

  constructor(
    private accountService: AccountService,
    private instanceService: InstanceService,
    private customerService: CustomerService,
    private salesService: SalesService,
    private authService: AuthService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  private safe<T>(obs: any, fallback: T) {
    return obs.pipe(timeout(6000), catchError(() => of(fallback)));
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

  /** Normalize API response to array (handles { list: [] }, { data: [] }, or direct array). */
  private toArray(data: unknown): any[] {
    if (data == null) return [];
    if (Array.isArray(data)) return data as any[];
    const list = (data as any).list ?? (data as any).data ?? (data as any).records;
    return Array.isArray(list) ? (list as any[]) : [];
  }

  loadDashboardData(): void {
    this.isLoading = true;
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();

    const salesRequest = accountId != null
      ? this.safe(this.salesService.getSalesSummaryList(accountId, instanceId ?? undefined), [])
      : this.safe(this.salesService.getSalesSummaryList(), []);

    forkJoin({
      accounts:  this.safe(this.accountService.getAccountDetails(), []),
      instances: this.safe(this.instanceService.getInstanceDetails(), []),
      customers: this.safe(this.customerService.getCustomerList(), []),
      salesList: salesRequest
    }).subscribe(({ accounts, instances, customers, salesList }) => {
      const accountList = Array.isArray(accounts) ? (accountId != null ? this.byAccountId(accounts, accountId) : accounts) : [];
      const instanceList = Array.isArray(instances) ? (accountId != null ? this.byAccountId(instances, accountId) : instances) : [];
      const customerList = Array.isArray(customers) ? (accountId != null && instanceId != null ? this.byAccountAndInstance(customers, accountId, instanceId) : (accountId != null ? this.byAccountId(customers, accountId) : customers)) : [];

      const salesRaw: any[] = this.toArray(salesList);
      let salesFiltered: any[];
      if (accountId == null) {
        salesFiltered = salesRaw;
      } else if (instanceId != null) {
        salesFiltered = this.byAccountAndInstance(salesRaw, accountId, instanceId);
        if (salesFiltered.length === 0 && salesRaw.length > 0) {
          salesFiltered = this.byAccountId(salesRaw, accountId);
        }
      } else {
        salesFiltered = this.byAccountId(salesRaw, accountId);
      }

      this.accountCount  = accountList.length;
      this.instanceCount = instanceList.length;
      this.customerCount = customerList.length;
      this.salesCount    = salesFiltered.length;
      this.salesValue    = salesFiltered.reduce((sum: number, item: any) => {
        const val = parseFloat(item.grandtotal ?? item.grandTotal ?? 0);
        return sum + (isNaN(val) ? 0 : val);
      }, 0);

      this.buildChart(salesFiltered);
      this.isLoading = false;
    });
  }

  private buildChart(salesList: any[]): void {
    const months = this.last3Months;
    const now = new Date();

    // Build per-month buckets for last 3 months
    const buckets: { count: number; value: number }[] = months.map(() => ({ count: 0, value: 0 }));

    salesList.forEach((item: any) => {
      const raw = item.invdate ?? item.saledate ?? item.createddate ?? item.updateddate;
      if (!raw) return;
      const d = new Date(raw);
      if (isNaN(d.getTime())) return;

      for (let i = 0; i < 3; i++) {
        const offset = 2 - i;
        const target = new Date(now.getFullYear(), now.getMonth() - offset, 1);
        if (d.getFullYear() === target.getFullYear() && d.getMonth() === target.getMonth()) {
          buckets[i].count++;
          buckets[i].value += parseFloat(item.grandtotal ?? item.grandTotal ?? 0) || 0;
        }
      }
    });

    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        style: { fontFamily: 'inherit' }
      },
      title: {
        text: 'Sales — Last 3 Months',
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
            formatter: function () { return '₹' + (this.value as number).toLocaleString('en-IN'); }
          },
          opposite: true,
          min: 0
        }
      ],
      tooltip: {
        shared: true,
        formatter: function () {
          let s = `<b>${this.x}</b><br/>`;
          (this.points || []).forEach((p: any) => {
            s += `${p.series.name}: <b>${p.series.name.includes('Value') ? '₹' + p.y.toLocaleString('en-IN') : p.y}</b><br/>`;
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

    this.updateFlag = true;
  }
}
