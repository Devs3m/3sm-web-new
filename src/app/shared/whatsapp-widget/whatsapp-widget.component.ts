import { Component } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-whatsapp-widget',
  templateUrl: './whatsapp-widget.component.html',
  styleUrls: ['./whatsapp-widget.component.css']
})
export class WhatsappWidgetComponent {
  readonly number = environment.whatsappNumber;

  openChat(): void {
    const url = `https://wa.me/${this.number}?text=${encodeURIComponent('Hello, I have a query.')}`;
    window.open(url, '_blank', 'noopener');
  }
}
