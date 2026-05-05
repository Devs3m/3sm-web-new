import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConsumerPortalService } from './consumer-portal.service';
import { SaveOrderDto, OrderDetailDto } from './models/consumer-order.dto';

@Component({
  selector: 'app-consumer-portal',
  templateUrl: './consumer-portal.component.html',
  styleUrls: ['./consumer-portal.component.css']
})
export class ConsumerPortalComponent implements OnInit {
  accountId!: number;
  instanceId!: number;

  account: any = null;
  instance: any = null;
  products: any[] = [];

  checkoutForm!: FormGroup;

  loading = false;
  loadError = '';
  showCheckoutModal = false;
  submitting = false;
  submitError = '';
  showSuccessModal = false;
  orderInvoiceNo: number | null = null;
  orderDate = '';

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private service: ConsumerPortalService
  ) {}

  ngOnInit(): void {
    // Support both /portal/:accountid/:instanceid and /portal/:token (base64 "aid-iid")
    const aid = this.route.snapshot.paramMap.get('accountid');
    const iid = this.route.snapshot.paramMap.get('instanceid');
    if (aid && iid) {
      this.accountId = Number(aid);
      this.instanceId = Number(iid);
    } else {
      const token = this.route.snapshot.paramMap.get('token') || '';
      try {
        const decoded = atob(token);
        const [a, i] = decoded.split('-');
        this.accountId = Number(a);
        this.instanceId = Number(i);
      } catch {
        this.accountId = 0;
        this.instanceId = 0;
      }
    }

    this.checkoutForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]]
    });

    this.loadData();
  }

  loadData(): void {
    this.loading = true;
    this.loadError = '';

    this.service.getAccountDetails(this.accountId).subscribe({
      next: (data) => { this.account = data; },
      error: () => {}
    });

    this.service.getInstanceDetails(this.instanceId).subscribe({
      next: (data) => { this.instance = data; },
      error: () => {}
    });

    this.service.getProducts(this.accountId, this.instanceId).subscribe({
      next: (data) => {
        const raw = Array.isArray(data) ? data : [];
        this.products = raw
          .filter((p: any) => {
            const aid = String(p.accountid ?? p.accountId ?? '');
            const iid = String(p.instanceid ?? p.instanceId ?? '');
            const active = p.productisactive == null || p.productisactive === true
              || p.productisactive === 'true' || Number(p.productisactive) === 1;
            return aid === String(this.accountId) && iid === String(this.instanceId) && active;
          })
          .map((p: any) => ({ ...p, orderQty: 0 }));
        this.loading = false;
      },
      error: () => {
        this.loadError = 'Failed to load products. Please try again.';
        this.loading = false;
      }
    });
  }

  getShopName(): string {
    return this.instance?.instancename || '';
  }

  getAddress(): string {
    const parts = [
      this.instance?.instanceaddress,
      this.instance?.instancecity,
      this.instance?.instancestate,
      this.instance?.instancepincode
    ].filter(v => v && String(v).trim());
    return parts.join(', ');
  }

  getPhone(): string {
    return this.instance?.managermobile || '';
  }

  getLogoUrl(): string | null {
    return this.account?.accountimage || null;
  }

  selectedCategory = 'All';

  get categories(): string[] {
    const cats = this.products
      .map(p => p.productcategory || p.category || '')
      .filter(c => c.trim() !== '');
    return ['All', ...Array.from(new Set(cats)).sort()];
  }

  get filteredProducts(): any[] {
    if (this.selectedCategory === 'All') return this.products;
    return this.products.filter(p =>
      (p.productcategory || p.category || '') === this.selectedCategory
    );
  }

  selectCategory(cat: string): void {
    this.selectedCategory = cat;
  }

  getMrp(p: any): number {
    return parseFloat(String(p.salemrp ?? p.sale_mrp ?? p.productlastmrp ?? p.mrp ?? 0)) || 0;
  }

  getAmount(p: any): number {
    return this.getMrp(p) * (p.orderQty || 0);
  }

  getGrandTotal(): number {
    return this.products.reduce((sum, p) => sum + this.getAmount(p), 0);
  }

  hasAnyQty(): boolean {
    return this.products.some(p => p.orderQty > 0);
  }

  increment(p: any): void {
    p.orderQty = (p.orderQty || 0) + 1;
  }

  decrement(p: any): void {
    if ((p.orderQty || 0) > 0) p.orderQty--;
  }

  openCheckout(): void {
    if (!this.hasAnyQty()) return;
    this.submitError = '';
    this.showCheckoutModal = true;
  }

  closeCheckout(): void {
    this.showCheckoutModal = false;
  }

  submitOrder(): void {
    if (this.checkoutForm.invalid || !this.hasAnyQty()) return;

    this.submitting = true;
    this.submitError = '';

    const { name, phone } = this.checkoutForm.value;
    const now = new Date();
    const orderdate = now.toISOString().split('T')[0];
    const nowStr = now.toISOString();
    this.orderDate = now.toLocaleDateString('en-IN');

    const dto: SaveOrderDto = {
      accountid: this.accountId,
      instanceid: this.instanceId,
      customername: name,
      customerphone: phone,
      grandtotal: this.getGrandTotal(),
      orderstatus: 'PENDING',
      orderdate,
      createddate: nowStr,
      updateddate: nowStr,
      isactive: true,
      items: this.products
        .filter(p => p.orderQty > 0)
        .map(p => {
          const mrp = this.getMrp(p);
          const qty = Number(p.orderQty);
          return {
            productid: Number(p.productid),
            productname: p.productname,
            salemrp: mrp,
            qty,
            amount: mrp * qty
          };
        })
    };

    this.service.placeOrder(dto).subscribe({
      next: (res) => {
        this.orderInvoiceNo = res.orderid || null;
        this.showCheckoutModal = false;
        this.showSuccessModal = true;
        this.submitting = false;
      },
      error: (err) => {
        const msg = err?.error?.message || err?.message || 'Failed to place order. Please try again.';
        this.submitError = Array.isArray(msg) ? msg.join(', ') : msg;
        this.submitting = false;
      }
    });
  }

  closeSuccess(): void {
    this.showSuccessModal = false;
    this.products.forEach(p => p.orderQty = 0);
    this.checkoutForm.reset();
    this.orderInvoiceNo = null;
  }
}
