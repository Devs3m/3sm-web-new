import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { ProductComponent } from './product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductComponent
  ],
  imports: [
    ProductRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    HighchartsChartModule,
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    ReactiveFormsModule,
    SharedModule
  ],
    providers: [InstanceService],
    bootstrap: [ProductComponent]
})
export class ProductModule { }
