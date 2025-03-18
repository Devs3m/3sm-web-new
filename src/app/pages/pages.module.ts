import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { InstanceService } from './service/instance.service';
import { PagesComponent } from './pages.component';
import { FormMaterialModule } from './service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartComponent } from './highchart/highchart.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    PagesComponent,
<<<<<<< HEAD
    HighchartComponent,
   
  ],
  imports: [
    PagesRoutingModule,
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
  bootstrap: [PagesComponent]
})
export class PagesModule { }

