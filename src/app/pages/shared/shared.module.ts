import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HasPermissionDirective } from '../directives/has-permission.directive';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { FormMaterialModule } from '../service/form-material.module';

@NgModule({
  declarations: [
    HasPermissionDirective,
    CustomerFormComponent,
    AddCustomerFormComponent
  ],
  exports: [
    HasPermissionDirective,
    CustomerFormComponent,
    AddCustomerFormComponent
    // FormMaterialModule is intentionally NOT re-exported — each feature module imports it directly
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMaterialModule
  ]
})
export class SharedModule { }
