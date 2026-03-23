import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductLedgerComponent } from './product-ledger.component';

const routes: Routes = [{ path: '', component: ProductLedgerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductLedgerRoutingModule {}
