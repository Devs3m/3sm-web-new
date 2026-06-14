import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AccountsService, ChartOfAccountRow } from '../accounts.service';

@Component({
  selector: 'app-chart-of-accounts',
  templateUrl: './chart-of-accounts.component.html',
  styleUrls: ['./chart-of-accounts.component.css'],
})
export class ChartOfAccountsComponent implements OnInit {
  accounts: ChartOfAccountRow[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private authService: AuthService,
    private accountsService: AccountsService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();
    this.isLoading = true;
    this.errorMessage = '';
    this.accountsService.getChartOfAccounts(accountId, instanceId).subscribe({
      next: (rows) => {
        this.accounts = Array.isArray(rows) ? rows : [];
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load chart of accounts.';
        this.isLoading = false;
      },
    });
  }

  balanceCellValue = (row: ChartOfAccountRow): number => Number(row.balance) || 0;

  onLedgerClick = (e: any): void => {
    const row: ChartOfAccountRow = e?.row?.data;
    if (row?.chartaccountid) {
      this.router.navigate(['/accounts/ledger', row.chartaccountid]);
    }
  };
}
