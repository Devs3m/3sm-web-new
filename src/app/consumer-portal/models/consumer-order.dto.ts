export interface OrderDetailDto {
  orderid?: number;
  productid: number;
  productname: string;
  salemrp: number;
  qty: number;
  amount: number;
}

export interface SaveOrderDto {
  orderid?: number;
  accountid: number;
  instanceid: number;
  customername: string;
  customerphone: string;
  grandtotal: number;
  orderstatus: string;
  orderdate: string;       // YYYY-MM-DD
  createddate: string;
  updateddate: string;
  isactive: boolean;
  items: OrderDetailDto[];
}

export interface SaveOrderResponse {
  success: boolean;
  orderid: number;
}
