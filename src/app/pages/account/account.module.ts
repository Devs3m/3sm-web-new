import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { HighchartsChartModule } from 'highcharts-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { AccountComponent } from './account.component';
import { DxIntegrationModule, } from 'devextreme-angular';
import { DevExtremeModule } from 'devextreme-angular';
import { DxTemplateModule  } from 'devextreme-angular/core';

@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    AccountRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    HighchartsChartModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DevExtremeModule,
    DxTemplateModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
   DxIntegrationModule,
   
   
  ],
    providers: [InstanceService],
    bootstrap: [AccountComponent]
})
export class AccountModule { }
