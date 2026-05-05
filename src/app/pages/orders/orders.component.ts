import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { OrdersService } from './orders.service';
import { AuthService } from '../service/auth.service';
import { ConsumerPortalService } from '../../consumer-portal/consumer-portal.service';
import { SaveOrderDto, OrderDetailDto } from '../../consumer-portal/models/consumer-order.dto';

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

  // Add panel
  isAddPanelOpen = false;
  orderForm!: FormGroup;
  availableProducts: any[] = [];
  submittingOrder = false;

  private accountId!: number;
  private instanceId!: number;

  orderIdSortValue = (row: any): number => Number(row?.orderid ?? 0);
  statusOptions = ['PENDING', 'CONFIRMED', 'CANCELLED'];

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

  getStatusClass(status: string): string {
    switch (status) {
      case 'CONFIRMED': return 'status-confirmed';
      case 'CANCELLED': return 'status-cancelled';
      default:          return 'status-pending';
    }
  }
}
