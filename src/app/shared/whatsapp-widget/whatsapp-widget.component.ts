import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-whatsapp-widget',
  templateUrl: './whatsapp-widget.component.html',
  styleUrls: ['./whatsapp-widget.component.css']
})
export class WhatsappWidgetComponent {
  @Input() number: string = '';
  panelOpen = false;
  userMessage = '';

  togglePanel(): void {
    this.panelOpen = !this.panelOpen;
  }

  sendMessage(): void {
    const text = this.userMessage.trim() || 'Hello, I have a query.';
    const cleaned = this.number.replace(/\D/g, '');
    const url = `https://wa.me/${cleaned}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener');
    this.userMessage = '';
    this.panelOpen = false;
  }
}
