import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SaleseditRoutingModule } from './salesedit-routing.module';
import { SaleseditComponent } from './salesedit.component';
import { FormMaterialModule } from '../service/form-material.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [SaleseditComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormMaterialModule,
    SharedModule,
    SaleseditRoutingModule,
  ],
})
export class SaleseditModule {}
