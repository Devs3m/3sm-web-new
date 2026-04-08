import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-receipt-voucher-form',
  templateUrl: './receipt-voucher-form.component.html',
  styleUrls: ['./receipt-voucher-form.component.css'],
})
export class ReceiptVoucherFormComponent {
  @Input() form!: FormGroup;
  @Input() customerInputCtrl!: FormControl;
  @Input() filteredCustomerOptions: { customerid: number; customername: string }[] = [];
  @Input() receiptNo = '';
  @Input() paymentReceiptType = '';
  @Input() selectedRowsLength = 0;
  @Input() selectedTotalAmount = 0;
  @Input() outstandingAmount = 0;
  @Input() receiveDisabled = false;

  @Output() customerOptionSelected = new EventEmitter<MatAutocompleteSelectedEvent>();
  @Output() collectPayments = new EventEmitter<void>();
}
