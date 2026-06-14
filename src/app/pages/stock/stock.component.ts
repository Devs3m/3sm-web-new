import { Component, OnInit } from '@angular/core';
import { CurrentstockService } from '../service/currentstock.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { saveAs } from 'file-saver';
import { Workbook } from 'exceljs';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { formatDateUtcDdSlashMmSlashYyyy } from '../service/date-utils';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  apiData: any[] = [];

  totalItems = 0;
  totalQuantity = 0;
  totalStockValue = 0;
  expiringSoon = 0;

  expiryDateCellValue = (rowData: any): string =>
    formatDateUtcDdSlashMmSlashYyyy(rowData?.expirydate);

  qtyCellValue = (rowData: any): number => Number(rowData?.productqty) || 0;
  purchaseCostCellValue = (rowData: any): number => Number(rowData?.purchaseeachcost) || 0;
  mrpCellValue = (rowData: any): number => Number(rowData?.producteachmrp) || 0;

  ageCellValue = (rowData: any): number => {
    if (!rowData?.createddate) return 0;
    const created = new Date(rowData.createddate);
    if (isNaN(created.getTime())) return 0;
    const today = new Date();
    const createdUtc = Date.UTC(created.getUTCFullYear(), created.getUTCMonth(), created.getUTCDate());
    const todayUtc = Date.UTC(today.getUTCFullYear(), today.getUTCMonth(), today.getUTCDate());
    return Math.max(0, Math.round((todayUtc - createdUtc) / (1000 * 60 * 60 * 24)));
  };

  constructor(
    private currentstockService: CurrentstockService,
    private authService: AuthService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.getStockDetails();
  }

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

  getStockDetails(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();

    const dataObs = isSuperAdmin
      ? this.currentstockService.getAllCurrentstocks()
      : this.currentstockService.getByInstanceAndAccount(instanceId, accountId);

    dataObs.subscribe({
      next: (apidata: any) => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = isSuperAdmin ? raw : this.byAccountAndInstance(raw, accountId, instanceId);
        this.apiData = [...filtered].sort((a: any, b: any) => Number(b.stockid) - Number(a.stockid));
        this.computeCards(filtered);
      },
      error: (err: any) => console.error('Error fetching currentstock details:', err)
    });
  }

  private computeCards(list: any[]): void {
    this.totalItems = list.length;
    this.totalQuantity = list.reduce((sum, item) => sum + (Number(item.productqty) || 0), 0);
    this.totalStockValue = list.reduce((sum, item) => {
      const qty = Number(item.productqty) || 0;
      const cost = Number(item.purchaseeachcost) || 0;
      return sum + qty * cost;
    }, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const in30Days = new Date(today);
    in30Days.setDate(in30Days.getDate() + 30);

    this.expiringSoon = list.filter((item) => {
      if (!item.expirydate) return false;
      const expiry = new Date(item.expirydate);
      if (isNaN(expiry.getTime())) return false;
      return expiry >= today && expiry <= in30Days;
    }).length;
  }

  onExporting(e: any): void {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Stock Data');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'StockData.xlsx');
      });
    });

    e.cancel = true;
  }
}
