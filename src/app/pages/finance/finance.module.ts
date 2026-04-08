import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { DxTemplateModule } from 'devextreme-angular/core';
import { FormMaterialModule } from '../service/form-material.module';
import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FinanceSummaryStripComponent } from './components/finance-summary-strip/finance-summary-strip.component';
import { ReceiptVoucherFormComponent } from './components/receipt-voucher-form/receipt-voucher-form.component';
import { PendingOpenReceivablesComponent } from './components/pending-open-receivables/pending-open-receivables.component';
import { ReceiptHistoryGridComponent } from './components/receipt-history-grid/receipt-history-grid.component';

@NgModule({
  declarations: [
    FinanceComponent,
    FinanceSummaryStripComponent,
    ReceiptVoucherFormComponent,
    PendingOpenReceivablesComponent,
    ReceiptHistoryGridComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormMaterialModule,
    DxDataGridModule,
    DxTemplateModule,
    FinanceRoutingModule,
  ],
})
export class FinanceModule {}
