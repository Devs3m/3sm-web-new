/**
 * DTOs for inventorysummary save (summary + inventorydetail items).
 * Matches backend save-inventorysummary.dto.ts and Inventorydetail entity.
 */

export interface InventoryDetailItemDto {
  stockid?: number;
  productid: number;
  productname: string;
  salehsn: string | null;
  batchno?: string;
  expirydate?: string;
  productpackqty?: number;
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

export interface SaveInventorysummaryDto {
  invoiceno?: number;
  invdate: string;
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
  items: InventoryDetailItemDto[];
}

export interface SaveInventorysummaryResponse {
  success: boolean;
  invoiceno: number;
}
