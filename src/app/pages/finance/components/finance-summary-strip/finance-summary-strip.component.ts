import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-finance-summary-strip',
  templateUrl: './finance-summary-strip.component.html',
  styleUrls: ['./finance-summary-strip.component.css'],
})
export class FinanceSummaryStripComponent {
  @Input() pendingInvoiceCount = 0;
  @Input() selectedCount = 0;
  @Input() selectedTotalAmount = 0;
  @Input() receiptHistoryCount = 0;
}
