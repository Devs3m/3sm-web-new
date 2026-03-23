import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InventorysalesComponent } from './inventorysales.component';

const routes: Routes = [
  { path: '', component: InventorysalesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventorysalesRoutingModule { }
