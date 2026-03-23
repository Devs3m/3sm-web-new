import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductLedgerRoutingModule } from './product-ledger-routing.module';
import { FormMaterialModule } from '../service/form-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { ProductLedgerComponent } from './product-ledger.component';

@NgModule({
  declarations: [ProductLedgerComponent],
  imports: [
    CommonModule,
    ProductLedgerRoutingModule,
    FormMaterialModule,
    ReactiveFormsModule,
    DxDataGridModule,
  ],
})
export class ProductLedgerModule {}
