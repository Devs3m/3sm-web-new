import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { FormMaterialModule } from '../service/form-material.module';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';

@NgModule({
  declarations: [FinanceComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMaterialModule,
    DxDataGridModule,
    FinanceRoutingModule,
  ],
})
export class FinanceModule {}
