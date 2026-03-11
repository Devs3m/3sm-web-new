import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { environment } from '../../../environments/environment';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: { type: 'line' },
    title: { text: 'Account Count' },
    xAxis: { categories: [] },
    yAxis: { title: { text: 'Sales Amount' } },
    series: [{ name: 'Sales', type: 'line', data: [] }]
  };
  private apiUrl = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private permissionService: PermissionService
  ) {}

  ngOnInit(): void {
    this.fetchChartData();
  }

  fetchChartData(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.http.get<any[]>(`${this.apiUrl}/account/list`).subscribe((data: any[]) => {
      const raw = data || [];
      const filtered = accountId != null
        ? raw.filter((item: any) => {
            const id = item.accountid ?? item.accountId;
            return id != null && Number(id) === Number(accountId);
          })
        : raw;
      const accounts = filtered.map(item => item.accountid);
      const salesData = filtered.map(item => item.accountcity);
      this.chartOptions = {
        ...this.chartOptions,
        xAxis: { categories: accounts },
        series: [{ name: 'sales', type: 'line', data: salesData }]
      };
    });
  }
}
