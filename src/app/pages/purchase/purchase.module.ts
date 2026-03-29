import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { FormMaterialModule } from '../service/form-material.module';
import { SharedModule } from '../shared/shared.module';
import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaseComponent } from './purchase.component';

@NgModule({
  declarations: [PurchaseComponent],
  imports: [
    CommonModule,
    PurchaseRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormMaterialModule,
    DxDataGridModule,
    DxButtonModule,
    SharedModule,
  ],
})
export class PurchaseModule {}
