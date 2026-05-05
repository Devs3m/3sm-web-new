import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { FormMaterialModule } from '../../core/form-material.module';
import { DxDataGridModule } from 'devextreme-angular';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    OrdersRoutingModule,
    FormMaterialModule,
    DxDataGridModule,
    SharedModule
  ]
})
export class OrdersModule {}
