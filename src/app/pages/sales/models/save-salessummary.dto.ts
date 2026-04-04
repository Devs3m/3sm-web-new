/**
 * DTOs for salessummary save (summary + salesdetail items).
 * Matches backend save-salessummary.dto.ts and SalesDetail entity.
 */

export interface SalesDetailItemDto {
  productid: number;
  productname: string;
  salehsn: string | null;
  saleqty: number;
  salemrp: number;
  saledisper: number | null;
  salegstper: number;
  saleamount: number;
  salegrossamount: number;
  saltotaldisc: number | null;
  salesubtotal: number;
  saletotalcgst: number;
  saletotalsgst: number;
  saletotalgst: number;
  salegrandtotal: number;
}

export interface SaveSalessummaryDto {
  /** Omit for new invoice; server generates next number per account+instance. Required for update. */
  invoiceno?: number;
  invdate: string; // YYYY-MM-DD
  customerid: number;
  customername: string | null;
  tgrossamount: number;
  tdisaper: number | null;
  tdisamount: number;
  tgstamount: number;
  tsgstamount: number;
  tcgstamount: number;
  grandtotal: number;
  paymenttype: string | null;
  paymentstatus: boolean | null;
  accountid: number;
  instanceid: number;
  createdby: number;
  updatedby: number;
  createddate: string;
  updateddate: string;
  isactive: boolean;
  items: SalesDetailItemDto[];
}

export interface SaveSalessummaryResponse {
  success: boolean;
  invoiceno: number;
}
