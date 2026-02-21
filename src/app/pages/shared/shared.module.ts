import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from '../directives/has-permission.directive';

@NgModule({
  declarations: [
    HasPermissionDirective
  ],
  exports: [
    HasPermissionDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
