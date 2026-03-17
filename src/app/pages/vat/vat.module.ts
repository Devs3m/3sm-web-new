import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VatRoutingModule } from './vat-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormMaterialModule } from '../service/form-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DxButtonModule, DxChartModule, DxDataGridModule } from 'devextreme-angular';
import { InstanceService } from '../service/instance.service';
import { VatComponent } from './vat.component';

@NgModule({
  declarations: [
    VatComponent
  ],
  imports: [
    VatRoutingModule,
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
    bootstrap: [VatComponent]
})
export class VatModule { }
