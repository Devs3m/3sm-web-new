import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export interface ChartOfAccountRow {
  chartaccountid: string;
  accountcode: string;
  accountname: string;
  accounttype: string;
  accountid: string;
  instanceid: string;
  isactive: boolean;
  balance: string;
}

export interface LedgerRow {
  ledgerid: string;
  transactiondate: string;
  referencetype: string;
  referenceid: string;
  chartaccountid: string;
  inward: string;
  outward: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class AccountsService {
  private readonly apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getChartOfAccounts(accountId: number, instanceId: number): Observable<ChartOfAccountRow[]> {
    return this.http.get<ChartOfAccountRow[]>(`${this.apiUrl}/accounts/chartofaccounts`, {
      params: { accountid: String(accountId), instanceid: String(instanceId) },
    });
  }

  getLedger(accountId: number, instanceId: number, chartAccountId?: string | number): Observable<LedgerRow[]> {
    const params: Record<string, string> = {
      accountid: String(accountId),
      instanceid: String(instanceId),
    };
    if (chartAccountId != null && chartAccountId !== '') {
      params['chartaccountid'] = String(chartAccountId);
    }
    return this.http.get<LedgerRow[]>(`${this.apiUrl}/accounts/ledger`, { params });
  }
}
