import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappWidgetComponent } from './whatsapp-widget.component';

@NgModule({
  declarations: [WhatsappWidgetComponent],
  imports: [CommonModule],
  exports: [WhatsappWidgetComponent]
})
export class WhatsappWidgetModule {}
