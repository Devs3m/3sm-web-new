import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { FormMaterialModule } from '../service/form-material.module';
import { SalesLedgerRoutingModule } from './sales-ledger-routing.module';
import { SalesLedgerComponent } from './sales-ledger.component';

@NgModule({
  declarations: [SalesLedgerComponent],
  imports: [
    CommonModule,
    SalesLedgerRoutingModule,
    FormMaterialModule,
    ReactiveFormsModule,
    DxDataGridModule,
  ],
})
export class SalesLedgerModule {}
