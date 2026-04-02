export interface PurchaseDetailItemDto {
  purchaseinvoiceno: string;
  purchasedate: Date | string;
  supplierid: number;
  suppliername: string;
  productid: number;
  productname: string;
  productpackqty: number;
  purchaseqty: number;
  purchaseeachqty: number;
  purchaseprice: number;
  mrp?: number | null;
  purchaseeachcost: number;
  purchasediscountPer: number;
  purchasediscountamount: number;
  purchasegstPer: number;
  purchasegstamount: number;
  purchasecost: number;
  purchasefreeqty?: number | null;
  stockBatchno?: string | null;
  expirydate?: Date | string | null;
  /** Same as product `gstid`; API maps to currentstock.gistid */
  gistid?: number | null;
  gstid?: number | null;
  taxid?: number | null;
}

export interface SavePurchaseDto {
  purchasegrnno?: string | number;
  purchasedate: Date | string;
  supplierid: number;
  suppliername: string;
  supplierinvoiceno: string;
  paymenttype?: string | null;
  paymentperiod?: string | null;
  totalgrossamount: number;
  totaldiscountper?: number | null;
  totaldiscountamt?: number | null;
  totalgstamt?: number | null;
  totalchessamt?: number | null;
  totalamount: number;
  noofitems?: number;
  totalqtysum?: number | null;
  totalpurchaseprofitamt: number;
  accountid: number;
  instanceid: number;
  createdby: number;
  updatedby: number;
  isactive?: boolean;
  items: PurchaseDetailItemDto[];
}

export interface SavePurchaseResponse {
  success: boolean;
  purchasegrnno: string;
}
