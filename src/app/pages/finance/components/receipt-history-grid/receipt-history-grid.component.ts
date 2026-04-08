import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReceiptRecord } from '../../../service/receipts.service';

@Component({
  selector: 'app-receipt-history-grid',
  templateUrl: './receipt-history-grid.component.html',
  styleUrls: ['./receipt-history-grid.component.css'],
})
export class ReceiptHistoryGridComponent {
  @Input() filteredReceiptData: ReceiptRecord[] = [];
  @Input() isLoadingReceipts = false;
  @Input() amountColumnFormat: string | Record<string, unknown> = '';
  @Input() receiptDateCellValue!: (rowData: ReceiptRecord) => string;
  @Input() invoiceDateCellValue!: (rowData: ReceiptRecord) => string;

  @Output() refresh = new EventEmitter<void>();
}
