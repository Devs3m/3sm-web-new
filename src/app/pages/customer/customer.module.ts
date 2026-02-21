import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormMaterialModule } from '../service/form-material.module';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FormMaterialModule,
    DxDataGridModule,
    DxButtonModule,
    SharedModule
  ]
})
export class CustomerModule { }
