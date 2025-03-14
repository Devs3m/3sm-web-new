import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VatComponent } from './vat.component';

const routes: Routes = [
  
  { path: '', component: VatComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VatRoutingModule { }