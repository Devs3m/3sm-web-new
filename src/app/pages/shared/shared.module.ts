import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HasPermissionDirective } from '../directives/has-permission.directive';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { AddCustomerFormComponent } from './add-customer-form/add-customer-form.component';
import { FormMaterialModule } from '../service/form-material.module';
import { WhatsappWidgetModule } from '../../shared/whatsapp-widget/whatsapp-widget.module';

@NgModule({
  declarations: [
    HasPermissionDirective,
    CustomerFormComponent,
    AddCustomerFormComponent
  ],
  exports: [
    HasPermissionDirective,
    CustomerFormComponent,
    AddCustomerFormComponent,
    WhatsappWidgetModule
    // FormMaterialModule is intentionally NOT re-exported — each feature module imports it directly
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMaterialModule,
    WhatsappWidgetModule
  ]
})
export class SharedModule { }
