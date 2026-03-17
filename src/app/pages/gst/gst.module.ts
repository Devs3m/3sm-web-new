import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GstRoutingModule } from './gst-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { GstComponent } from './gst.component';

@NgModule({
  declarations: [
    GstComponent
  ],
  imports: [
    GstRoutingModule,
    HttpClientModule,
    FormMaterialModule,
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxButtonModule,
    DxChartModule,
    ReactiveFormsModule
  ],
    providers: [InstanceService],
    bootstrap: [GstComponent]
})
export class GstModule { }
