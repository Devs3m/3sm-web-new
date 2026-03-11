import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaleseditComponent } from './salesedit.component';

const routes: Routes = [
  { path: ':invoiceno', component: SaleseditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaleseditRoutingModule { }
