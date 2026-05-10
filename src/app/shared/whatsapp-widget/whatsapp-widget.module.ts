import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WhatsappWidgetComponent } from './whatsapp-widget.component';

@NgModule({
  declarations: [WhatsappWidgetComponent],
  imports: [CommonModule, FormsModule],
  exports: [WhatsappWidgetComponent]
})
export class WhatsappWidgetModule {}
