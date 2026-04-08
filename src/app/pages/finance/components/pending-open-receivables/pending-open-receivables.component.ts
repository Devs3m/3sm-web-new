import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreditCollectionRow } from '../../finance.models';

@Component({
  selector: 'app-pending-open-receivables',
  templateUrl: './pending-open-receivables.component.html',
  styleUrls: ['./pending-open-receivables.component.css'],
})
export class PendingOpenReceivablesComponent {
  @Input() form!: FormGroup;
  @Input() filteredPendingData: CreditCollectionRow[] = [];
  @Input() selectedRowKeys: string[] = [];
  @Input() pendingInvoiceCount = 0;
  @Input() isLoading = false;
  @Input() amountColumnFormat: string | Record<string, unknown> = '';
  @Input() dateCellValue!: (rowData: CreditCollectionRow) => string;

  @Output() selectedRowKeysChange = new EventEmitter<string[]>();
  @Output() selectionChanged = new EventEmitter<any>();
  @Output() refreshRange = new EventEmitter<void>();
}
