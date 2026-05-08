import { Component, OnInit } from '@angular/core';
import * as QRCode from 'qrcode';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { OrdersService } from './orders.service';
import { AuthService } from '../service/auth.service';
import { ConsumerPortalService } from '../../consumer-portal/consumer-portal.service';
import { SaveOrderDto, OrderDetailDto } from '../../consumer-portal/models/consumer-order.dto';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any[] = [];
  totalOrders = 0;
  pendingOrders = 0;
  confirmedOrders = 0;

  selectedOrder: any = null;
  selectedOrderItems: any[] = [];
  isViewPanelOpen = false;
  itemsLoading = false;
  editStatus = '';
  savingStatus: Record<number, boolean> = {};

  deliveryItems: any[] = [];
  savingDelivery = false;

  // Add panel
  isAddPanelOpen = false;
  orderForm!: FormGroup;
  availableProducts: any[] = [];
  submittingOrder = false;

  private accountId!: number;
  private instanceId!: number;

  orderIdSortValue = (row: any): number => Number(row?.orderid ?? 0);
  statusOptions = ['PENDING', 'CONFIRMED', 'CANCELLED'];

  readonly upiId    = environment.upiId;
  readonly upiName  = environment.upiName;
  readonly upiPhone = environment.upiPhone;

  constructor(
    private ordersService: OrdersService,
    private authService: AuthService,
    private fb: FormBuilder,
    private portalService: ConsumerPortalService
  ) {}

  ngOnInit(): void {
    this.accountId  = this.authService.getAccountId();
    this.instanceId = this.authService.getInstanceId();
    this.loadOrders();
    this.initOrderForm();
    this.loadProducts();
  }

  initOrderForm(): void {
    const today = new Date().toISOString().split('T')[0];
    this.orderForm = this.fb.group({
      customername:  ['', Validators.required],
      customerphone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]],
      orderdate:     [today, Validators.required],
      orderstatus:   ['PENDING', Validators.required],
      items:         this.fb.array([])
    });
  }

  get itemControls() {
    return (this.orderForm.get('items') as FormArray).controls as FormGroup[];
  }

  addItem(): void {
    const item = this.fb.group({
      productid:   [null, Validators.required],
      productname: [''],
      salemrp:     [0],
      qty:         [1, [Validators.required, Validators.min(1)]],
      amount:      [0]
    });
    (this.orderForm.get('items') as FormArray).push(item);
  }

  removeItem(i: number): void {
    (this.orderForm.get('items') as FormArray).removeAt(i);
  }

  onProductSelect(i: number, event: any): void {
    const product = this.availableProducts.find(p => p.productid === event.value);
    if (!product) return;
    const mrp = parseFloat(String(product.salemrp ?? product.mrp ?? 0)) || 0;
    const ctrl = (this.orderForm.get('items') as FormArray).at(i);
    ctrl.patchValue({ productname: product.productname, salemrp: mrp, amount: mrp * ctrl.get('qty')?.value });
  }

  recalcItem(i: number): void {
    const ctrl = (this.orderForm.get('items') as FormArray).at(i);
    const qty = Number(ctrl.get('qty')?.value) || 0;
    const mrp = Number(ctrl.get('salemrp')?.value) || 0;
    ctrl.patchValue({ amount: mrp * qty }, { emitEvent: false });
  }

  getFormGrandTotal(): number {
    const items = this.orderForm.get('items') as FormArray;
    return items.controls.reduce((sum, c) => sum + (Number(c.get('amount')?.value) || 0), 0);
  }

  loadProducts(): void {
    this.portalService.getProducts(this.accountId, this.instanceId).subscribe({
      next: (data) => {
        this.availableProducts = (data || []).filter((p: any) => {
          const aid = String(p.accountid ?? p.accountId ?? '');
          const iid = String(p.instanceid ?? p.instanceId ?? '');
          return aid === String(this.accountId) && iid === String(this.instanceId);
        });
      },
      error: () => {}
    });
  }

  openAddPanel(): void {
    this.initOrderForm();
    this.isAddPanelOpen = true;
  }

  closeAddPanel(): void {
    this.isAddPanelOpen = false;
  }

  submitOrder(): void {
    if (this.orderForm.invalid) return;
    this.submittingOrder = true;
    const { customername, customerphone, orderdate, orderstatus } = this.orderForm.value;
    const now = new Date().toISOString();
    const items: OrderDetailDto[] = (this.orderForm.get('items') as FormArray).controls.map((c: any) => ({
      orderid: 0,
      productid: Number(c.get('productid').value),
      productname: c.get('productname').value,
      salemrp: Number(c.get('salemrp').value),
      qty: Number(c.get('qty').value),
      amount: Number(c.get('amount').value)
    }));
    const dto: SaveOrderDto = {
      accountid: this.accountId, instanceid: this.instanceId,
      customername, customerphone, grandtotal: this.getFormGrandTotal(),
      orderstatus, orderdate, createddate: now, updateddate: now, isactive: true, items
    };
    this.portalService.placeOrder(dto).subscribe({
      next: () => {
        this.submittingOrder = false;
        this.closeAddPanel();
        this.loadOrders();
      },
      error: (err) => { console.error(err); this.submittingOrder = false; }
    });
  }

  loadOrders(): void {
    this.ordersService.getOrders(this.accountId, this.instanceId).subscribe({
      next: (data) => {
        this.orders          = Array.isArray(data) ? data : [];
        this.totalOrders     = this.orders.length;
        this.pendingOrders   = this.orders.filter(o => o.orderstatus === 'PENDING').length;
        this.confirmedOrders = this.orders.filter(o => o.orderstatus === 'CONFIRMED').length;
      },
      error: (err) => console.error('Error fetching orders', err)
    });
  }

  viewOrder(order: any): void {
    this.selectedOrder      = order;
    this.selectedOrderItems = [];
    this.editStatus         = order.orderstatus;
    this.isViewPanelOpen    = true;
    this.itemsLoading       = true;

    this.ordersService.getOrderDetails(order.orderid).subscribe({
      next: (items) => {
        this.selectedOrderItems = Array.isArray(items) ? items : [];
        this.deliveryItems = this.selectedOrderItems.map(it => ({
          ...it,
          deliveredqty: it.deliveredqty ?? 0
        }));
        this.itemsLoading = false;
      },
      error: (err) => {
        console.error('Error fetching order details', err);
        this.itemsLoading = false;
      }
    });
  }

  closeViewPanel(): void {
    this.isViewPanelOpen    = false;
    this.selectedOrder      = null;
    this.selectedOrderItems = [];
    this.editStatus         = '';
  }

  saveEditStatus(): void {
    if (!this.selectedOrder || this.editStatus === this.selectedOrder.orderstatus) return;
    const orderId = this.selectedOrder.orderid;
    this.savingStatus[orderId] = true;

    this.ordersService.updateOrderStatus(orderId, this.editStatus).subscribe({
      next: () => {
        const gridRow = this.orders.find(o => o.orderid === orderId);
        if (gridRow) gridRow.orderstatus = this.editStatus;
        this.savingStatus[orderId] = false;
        this.pendingOrders   = this.orders.filter(o => o.orderstatus === 'PENDING').length;
        this.confirmedOrders = this.orders.filter(o => o.orderstatus === 'CONFIRMED').length;
        this.closeViewPanel();
      },
      error: (err) => {
        console.error('Error updating status', err);
        this.savingStatus[orderId] = false;
      }
    });
  }

  deleteOrder(order: any): void {
    if (!confirm(`Delete Order #${order.orderid} for ${order.customername}?`)) return;
    this.ordersService.deleteOrder(order.orderid).subscribe({
      next: () => {
        this.orders          = this.orders.filter(o => o.orderid !== order.orderid);
        this.totalOrders     = this.orders.length;
        this.pendingOrders   = this.orders.filter(o => o.orderstatus === 'PENDING').length;
        this.confirmedOrders = this.orders.filter(o => o.orderstatus === 'CONFIRMED').length;
      },
      error: (err) => console.error('Error deleting order', err)
    });
  }

  printOrderFromGrid(order: any): void {
    this.selectedOrder = order;
    this.ordersService.getOrderDetails(order.orderid).subscribe({
      next: (items) => {
        this.deliveryItems = (Array.isArray(items) ? items : []).map(it => ({
          ...it, deliveredqty: it.deliveredqty ?? 0
        }));
        this.printOrder();
      },
      error: () => this.printOrder()
    });
  }

  async printOrder(): Promise<void> {
    const order = this.selectedOrder;
    const items = this.selectedOrderItems;
    const upiUrl = `upi://pay?pa=${this.upiId}&pn=${encodeURIComponent(this.upiName)}&cu=INR`;
    const qrDataUrl = await QRCode.toDataURL(upiUrl, { width: 100, margin: 1 });

    const fmt = (n: any) => parseFloat(String(n || 0)).toFixed(2);
    const deliveredItems = this.deliveryItems.filter(it => (Number(it.deliveredqty) || 0) > 0);
    const deliveredTotal = deliveredItems.reduce((s, it) => s + (Number(it.salemrp) || 0) * (Number(it.deliveredqty) || 0), 0);
    const itemRows = deliveredItems.map((it: any, i: number) => `
      <tr>
        <td>${i + 1}</td>
        <td>${it.productname ?? ''}</td>
        <td class="r">${it.deliveredqty}</td>
        <td class="r">&#8377;${fmt(it.salemrp)}</td>
        <td class="r">&#8377;${fmt(it.salemrp * it.deliveredqty)}</td>
      </tr>`).join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<title>order-${order.orderid}</title>
<style>
  @page { size: 105mm 148mm; margin: 4mm; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: Arial, Helvetica, sans-serif; font-size: 8.5pt; color: #111; width: 97mm; margin-top: 0; }

  /* Shop header — single line */
  .header { display: flex; align-items: center; justify-content: center; gap: 8px; padding-bottom: 4px; flex-wrap: wrap; }
  .shop-name { font-size: 10.5pt; font-weight: 700; }
  .shop-divider { color: #bbb; font-size: 9pt; }
  .shop-sub  { font-size: 8pt; color: #555; }

  hr { border: none; border-top: 1px dashed #aaa; margin: 4px 0; }
  hr.solid { border-top: 1.5px solid #000; margin: 4px 0; }

  /* Order info card — 2×2 grid */
  .order-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow: hidden;
    margin: 4px 0;
  }
  .oc-cell {
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 4px 6px;
    border-right: 1px solid #e0e0e0;
    border-bottom: 1px solid #e0e0e0;
  }
  .oc-cell:nth-child(2n) { border-right: none; }
  .oc-cell:nth-last-child(-n+2) { border-bottom: none; }
  .oc-label { font-size: 7pt; color: #888; font-weight: 600; white-space: nowrap; }
  .oc-label::after { content: ':'; }
  .oc-value { font-size: 8pt; font-weight: 600; color: #111; }
  .oc-id    { font-size: 8.5pt; font-weight: 700; color: #1a5c42; }

  .items-gap { margin-top: 8px; }

  /* Items table */
  table.items { width: 100%; border-collapse: collapse; font-size: 8pt; margin: 3px 0; table-layout: fixed; }
  table.items col.c-no   { width: 7%; }
  table.items col.c-name { width: 43%; }
  table.items col.c-qty  { width: 10%; }
  table.items col.c-mrp  { width: 20%; }
  table.items col.c-tot  { width: 20%; }
  table.items th { border-bottom: 1.5px solid #000; padding: 3px 2px; font-weight: 700; text-align: left; font-size: 7.5pt; }
  table.items th.r, table.items td.r { text-align: right; }
  table.items td { padding: 2.5px 2px; border-bottom: 0.5px solid #eee; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

  /* Total */
  .total-row { display: flex; justify-content: space-between; align-items: center; padding: 4px 0; }
  .total-label { font-weight: 700; font-size: 9pt; }
  .total-value { font-weight: 700; font-size: 10pt; }

  /* UPI section */
  .upi-section { margin-top: 5px; }
  .upi-title { font-weight: 700; font-size: 7.5pt; letter-spacing: 0.04em; margin-bottom: 4px; text-align: center; }
  .upi-body { display: flex; align-items: center; justify-content: center; gap: 10px; }
  .qr-img { width: 72px; height: 72px; }
  .upi-info { text-align: left; }
  .upi-id   { font-size: 7pt; font-weight: 700; word-break: break-all; }
  .upi-name { font-size: 7.5pt; font-weight: 600; margin-bottom: 3px; }
  .upi-apps { font-size: 6.5pt; color: #666; margin-top: 4px; line-height: 1.5; }

  .footer { text-align: center; font-size: 7pt; color: #888; margin-top: 6px; padding-top: 4px; border-top: 1px solid #ddd; }
</style>
</head>
<body>

<div class="header">
  <span class="shop-name">${this.upiName}</span>
  <span class="shop-divider">|</span>
  <span class="shop-sub">${this.upiPhone}</span>
</div>

<hr class="solid"/>

<!-- Order info card -->
<div class="order-card">
  <div class="oc-cell">
    <div class="oc-label">Order #</div>
    <div class="oc-value oc-id">#${order.orderid}</div>
  </div>
  <div class="oc-cell">
    <div class="oc-label">Date</div>
    <div class="oc-value">${new Date(order.orderdate).toLocaleDateString('en-IN', { day:'2-digit', month:'2-digit', year:'numeric' })}</div>
  </div>
  <div class="oc-cell">
    <div class="oc-label">Customer</div>
    <div class="oc-value">${order.customername ?? ''}</div>
  </div>
  <div class="oc-cell">
    <div class="oc-label">Phone</div>
    <div class="oc-value">${order.customerphone ?? ''}</div>
  </div>
</div>

<div class="items-gap"></div>

<table class="items">
  <colgroup>
    <col class="c-no"/>
    <col class="c-name"/>
    <col class="c-qty"/>
    <col class="c-mrp"/>
    <col class="c-tot"/>
  </colgroup>
  <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th class="r">Qty</th>
      <th class="r">MRP</th>
      <th class="r">Total</th>
    </tr>
  </thead>
  <tbody>${itemRows || '<tr><td colspan="5" style="text-align:center;color:#999;padding:10px;">No delivered items</td></tr>'}</tbody>
</table>

<hr class="solid"/>

<div class="total-row">
  <span class="total-label">Grand Total</span>
  <span class="total-value">&#8377; ${fmt(deliveredTotal)}</span>
</div>

<hr/>

<div class="upi-section">
  <div class="upi-title">&#9654; Pay via UPI</div>
  <div class="upi-body">
    <img class="qr-img" src="${qrDataUrl}" alt="UPI QR"/>
    <div class="upi-info">
      <div class="upi-name">${this.upiName}</div>
      <div class="upi-id">${this.upiId}</div>
      <div class="upi-apps">GPay &bull; Paytm &bull; PhonePe<br/>BHIM &bull; Amazon Pay</div>
    </div>
  </div>
</div>

<div class="footer">Thank you for your order!</div>

<script>
  window.onload = function() {
    setTimeout(function() { window.print(); }, 500);
  };
</script>
</body>
</html>`;

    const win = window.open('', '_blank', 'width=600,height=800');
    if (win) {
      win.document.write(html);
      win.document.close();
    }
  }

  getPendingQty(item: any): number {
    return Math.max(0, (item.salequantity ?? 0) - (item.deliveredqty ?? 0));
  }

  getDeliveredTotal(): number {
    return this.deliveryItems.reduce(
      (sum, it) => sum + (Number(it.salemrp) || 0) * (Number(it.deliveredqty) || 0), 0
    );
  }

  saveDelivery(): void {
    this.savingDelivery = true;
    const payload = this.deliveryItems.map(it => ({
      orderdetailid: it.orderdetailid ?? it.id,
      deliveredqty:  Math.min(Number(it.deliveredqty) || 0, it.salequantity ?? 0)
    }));
    this.ordersService.updateDelivery(this.selectedOrder.orderid, payload).subscribe({
      next: () => {
        // sync back to selectedOrderItems
        this.selectedOrderItems = this.selectedOrderItems.map(it => {
          const d = this.deliveryItems.find(x => (x.orderdetailid ?? x.id) === (it.orderdetailid ?? it.id));
          return d ? { ...it, deliveredqty: d.deliveredqty } : it;
        });
        // update grid row delivery status
        this.updateGridDeliveryStatus(this.selectedOrder.orderid);
        this.savingDelivery = false;
      },
      error: (err) => { console.error(err); this.savingDelivery = false; }
    });
  }

  private updateGridDeliveryStatus(orderid: number): void {
    const row = this.orders.find(o => o.orderid === orderid);
    if (!row) return;
    const total     = this.deliveryItems.reduce((s, it) => s + (it.salequantity ?? 0), 0);
    const delivered = this.deliveryItems.reduce((s, it) => s + (Number(it.deliveredqty) || 0), 0);
    row.deliverystatus = delivered === 0 ? 'PENDING' : delivered >= total ? 'DELIVERED' : 'PARTIAL';
  }

  getDeliveryStatusClass(status: string): string {
    switch (status) {
      case 'DELIVERED': return 'delivery-delivered';
      case 'PARTIAL':   return 'delivery-partial';
      default:          return 'delivery-pending';
    }
  }

  getStatusClass(status: string): string {
    switch (status) {
      case 'CONFIRMED': return 'status-confirmed';
      case 'CANCELLED': return 'status-cancelled';
      default:          return 'status-pending';
    }
  }
}
