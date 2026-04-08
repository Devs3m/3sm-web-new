/** Pending credit invoice row from GET credit-collections (normalized in FinanceComponent / facade). */
export interface CreditCollectionRow {
  rowKey: string;
  date: string;
  source: 'SERVICE_SALES' | 'PRODUCT_SALES';
  rawInvoiceno: number;
  invoiceno: string;
  customerid: number;
  customerName: string;
  /** Invoice grand total */
  amount: number;
  paidAmount: number;
  pendingAmount: number;
  paymentStatus: string;
}
