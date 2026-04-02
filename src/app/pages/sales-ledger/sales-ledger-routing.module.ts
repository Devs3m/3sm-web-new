import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesLedgerComponent } from './sales-ledger.component';

const routes: Routes = [{ path: '', component: SalesLedgerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesLedgerRoutingModule {}
