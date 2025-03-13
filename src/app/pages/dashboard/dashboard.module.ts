import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { DashboardComponent } from './dashboard.component';

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
    ReactiveFormsModule
  ],
    providers: [InstanceService],
    bootstrap: [DashboardComponent]
})
export class DashboardModule { }
