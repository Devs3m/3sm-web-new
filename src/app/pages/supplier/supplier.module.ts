import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxDataGridModule } from 'devextreme-angular';
import { FormMaterialModule } from '../service/form-material.module';
import { SharedModule } from '../shared/shared.module';
import { SupplierRoutingModule } from './supplier-routing.module';
import { SupplierComponent } from './supplier.component';

@NgModule({
  declarations: [SupplierComponent],
  imports: [
    CommonModule,
    SupplierRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormMaterialModule,
    DxDataGridModule,
    DxButtonModule,
    SharedModule
  ]
})
export class SupplierModule {}
