import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DashboardComponent } from './dashboard.component';
import { AccountService } from '../service/account.service';
import { InstanceService } from '../service/instance.service';
import { CustomerService } from '../service/customer.service';
import { SalesService } from '../service/sales.service';
import { InventorysalesService } from '../service/inventorysales.service';
import { SupplierService } from '../service/supplier.service';
import { PurchaseService } from '../service/purchase.service';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    DashboardRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    HighchartsChartModule,
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    AccountService,
    InstanceService,
    CustomerService,
    SalesService,
    InventorysalesService,
    SupplierService,
    PurchaseService
  ]
})
export class DashboardModule { }
