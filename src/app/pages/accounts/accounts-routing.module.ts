import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { LedgerComponent } from './ledger/ledger.component';

const routes: Routes = [
  { path: '', component: ChartOfAccountsComponent },
  { path: 'ledger/:chartaccountid', component: LedgerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountsRoutingModule {}
