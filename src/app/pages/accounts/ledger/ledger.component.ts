import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AccountsService, ChartOfAccountRow, LedgerRow } from '../accounts.service';

@Component({
  selector: 'app-account-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent implements OnInit {
  chartaccountid = '';
  account: ChartOfAccountRow | null = null;
  entries: LedgerRow[] = [];
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private accountsService: AccountsService,
  ) {}

  ngOnInit(): void {
    this.chartaccountid = this.route.snapshot.paramMap.get('chartaccountid') ?? '';
    this.load();
  }

  load(): void {
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();
    this.isLoading = true;
    this.errorMessage = '';

    this.accountsService.getChartOfAccounts(accountId, instanceId).subscribe({
      next: (rows) => {
        this.account = (rows ?? []).find((r) => String(r.chartaccountid) === this.chartaccountid) ?? null;
      },
      error: () => {
        this.account = null;
      },
    });

    this.accountsService.getLedger(accountId, instanceId, this.chartaccountid).subscribe({
      next: (rows) => {
        this.entries = Array.isArray(rows) ? rows : [];
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load ledger.';
        this.isLoading = false;
      },
    });
  }

  back(): void {
    this.router.navigate(['/accounts']);
  }

  inwardCellValue = (row: LedgerRow): number => Number(row.inward) || 0;
  outwardCellValue = (row: LedgerRow): number => Number(row.outward) || 0;
}
