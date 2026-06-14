import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular';
import { FormMaterialModule } from '../service/form-material.module';
import { AccountsRoutingModule } from './accounts-routing.module';
import { ChartOfAccountsComponent } from './chart-of-accounts/chart-of-accounts.component';
import { LedgerComponent } from './ledger/ledger.component';

@NgModule({
  declarations: [ChartOfAccountsComponent, LedgerComponent],
  imports: [CommonModule, AccountsRoutingModule, FormMaterialModule, DxDataGridModule],
})
export class AccountsModule {}
