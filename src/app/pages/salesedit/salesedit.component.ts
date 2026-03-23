import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SalesService } from '../service/sales.service';
import { AuthService } from '../service/auth.service';
import { SettingsService } from '../service/settings.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { SaveSalessummaryDto, SalesDetailItemDto } from '../sales/models/save-salessummary.dto';

@Component({
  selector: 'app-salesedit',
  templateUrl: './salesedit.component.html',
  styleUrls: ['./salesedit.component.css'],
})
export class SaleseditComponent implements OnInit {
  @ViewChild('customerSelect') customerSelect!: ElementRef;
  @ViewChildren('qtyInput') qtyInputs!: QueryList<ElementRef>;
  @ViewChildren('discInput') discInputs!: QueryList<ElementRef>;
  @ViewChildren('descInput') descInputs!: QueryList<ElementRef>;

  @HostListener('document:keydown.F1', ['$event'])
  onF1Key(event: KeyboardEvent): void {
    event.preventDefault();
    if (this.salesForm.get('customername')?.value) {
      this.clearCustomer();
    }
    setTimeout(() => {
      if (this.customerSelect) {
        this.customerSelect.nativeElement.focus();
      }
    }, 50);
  }

  private static readonly INVOICE_NO_LEGACY_THRESHOLD = 1e6;

  salesForm!: FormGroup;
  customerOptions: any[] = [];
  productOptions: any[] = [];
  filteredProducts: any[][] = [];
  errorMessage: string = '';
  currentUserId: number = 1;
  invoiceno: number | null = null;
  isLoading = false;

  /** Invoice number display (sequence only, hide account/instance). */
  get invoiceDisplayValue(): string {
    const v = this.salesForm?.get('invoiceno')?.value ?? this.invoiceno;
    return this.getDisplayInvoiceNoSequenceOnly(v);
  }

  private getDisplayInvoiceNoSequenceOnly(invoiceno: number | null | undefined): string {
    if (invoiceno == null) return '';
    const n = Number(invoiceno);
    if (!Number.isFinite(n) || n < 0) return '';
    const seq = n < SaleseditComponent.INVOICE_NO_LEGACY_THRESHOLD ? n : (n % 1e6) || 1;
    return String(Math.max(0, Math.floor(seq))).padStart(6, '0');
  }

  constructor(
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private settingsService: SettingsService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCurrentUserId();
    this.initializeForm();
    this.loadProducts();

    this.route.paramMap.subscribe((params) => {
      const invoicenoParam = params.get('invoiceno');
      if (invoicenoParam && !isNaN(+invoicenoParam) && +invoicenoParam > 0) {
        this.invoiceno = +invoicenoParam;
        this.errorMessage = '';
        this.loadSalesSummaryWithCustomers(this.invoiceno);
      } else {
        this.invoiceno = null;
        this.errorMessage = invoicenoParam ? 'Invalid invoice number. Cannot edit.' : 'Invoice number is missing.';
      }
    });
  }

  private loadProducts(): void {
    this.salesService.getProducts().pipe(catchError(() => of([]))).subscribe({
      next: (products: any[]) => {
        this.productOptions = Array.isArray(products) ? products : [];
        this.filteredProducts = this.items.controls.map(() => [...this.productOptions]);
        this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
      }
    });
  }

  private subscribeDescriptionFilter(index: number): void {
    const ctrl = this.items.at(index)?.get('description');
    if (!ctrl) return;
    ctrl.valueChanges.subscribe((val: string) => {
      const search = (val || '').toLowerCase();
      this.filteredProducts[index] = search
        ? this.productOptions.filter(p =>
            (p.productname || '').toLowerCase().includes(search))
        : [...this.productOptions];
    });
  }

  onProductSelect(index: number, event: any): void {
    const selectedProductName = event.option.value;
    const selectedProduct = this.productOptions.find(
      (p: any) => p.productname === selectedProductName
    );
    const item = this.items.at(index);
    if (selectedProduct) {
      const gstPercent = selectedProduct.productgstpercent
        || selectedProduct.totalgstpercent
        || selectedProduct.gstpercent
        || selectedProduct.gst
        || 0;
      item.patchValue({
        productid: selectedProduct.productid ?? selectedProduct.productId ?? null,
        description: selectedProduct.productname || '',
        hsnSac: selectedProduct.producthsncode || '',
        rate: selectedProduct.productlastprice || selectedProduct.price || selectedProduct.unitprice || 0,
        discountPct: 0,
        quantity: null,
        gstPercent: Number(gstPercent)
      }, { emitEvent: false });
      this.calculateItemAmount(index);
      setTimeout(() => {
        const qtyList = this.qtyInputs.toArray();
        if (qtyList[index]) {
          qtyList[index].nativeElement.focus();
          qtyList[index].nativeElement.select();
        }
      }, 50);
    }
  }

  goBackToSales(): void {
    this.router.navigate(['/pages/sales']);
  }

  getCurrentUserId(): void {
    const user = this.authService.getUser();
    if (user) {
      this.currentUserId = user.userId || user.userid || user.user_id || user.id || 1;
    } else {
      this.currentUserId = 1;
    }
  }

  initializeForm(): void {
    const today = new Date();
    this.salesForm = this.formBuilder.group({
      salesid: [0],
      invoiceno: ['', Validators.required],
      saledate: [today, Validators.required],
      customerid: ['', Validators.required],
      customername: ['', Validators.required],
      customermobile: [''],
      customeremail: [''],
      customeraddress: [''],
      customercity: [''],
      customerstate: [''],
      customercountry: [''],
      customerpincode: [''],
      customergstin: [''],
      items: this.formBuilder.array([this.createItemFormGroup()]),
      subtotal: [0],
      totalgst: [0],
      grandtotal: [0],
      paymentmethod: ['Cash', Validators.required],
      paymentstatus: ['', Validators.required],
      notes: [''],
      isactive: [true],
      createddate: [today],
      updateddate: [today],
      createdby: [this.currentUserId],
      updatedby: [this.currentUserId],
    });

    this.salesForm.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
  }

  createItemFormGroup(): FormGroup {
    return this.formBuilder.group({
      productid: [null as number | null],
      description: ['', Validators.required],
      hsnSac: [''],
      quantity: [1, [Validators.required, Validators.min(1)]],
      rate: [0, [Validators.required, Validators.min(0)]],
      discountPct: [0, [Validators.min(0), Validators.max(100)]],
      gstPercent: [0],
      amount: [0],
    });
  }

  get items(): FormArray {
    return this.salesForm.get('items') as FormArray;
  }

  addItem(): void {
    const idx = this.items.length;
    this.items.push(this.createItemFormGroup());
    this.filteredProducts.push([...this.productOptions]);
    this.subscribeDescriptionFilter(idx);
    this.calculateTotals();
  }

  removeItem(index: number): void {
    if (this.items.length > 1) {
      this.items.removeAt(index);
      this.calculateTotals();
    }
  }

  calculateItemAmount(index: number): void {
    const item = this.items.at(index);
    const quantity = parseFloat(item.get('quantity')?.value || 0);
    const rate = parseFloat(item.get('rate')?.value || 0);
    const discountPct = parseFloat(item.get('discountPct')?.value || 0);
    const gstPercent = parseFloat(item.get('gstPercent')?.value || 0);
    const grossAmount = quantity * rate;
    const discountValue = (grossAmount * discountPct) / 100;
    const taxableBase = grossAmount - discountValue;
    const gstInclusive = this.settingsService.getSalesSettings().gstInclusive;
    const amount = gstInclusive ? taxableBase : taxableBase * (1 + gstPercent / 100);
    item.patchValue({ amount: amount.toFixed(2) }, { emitEvent: false });
    this.calculateTotals();
  }

  calculateTotals(): void {
    let subtotal = 0;
    let totalGst = 0;
    this.items.controls.forEach((item) => {
      const amount = parseFloat(item.get('amount')?.value || 0);
      const gstPercent = parseFloat(item.get('gstPercent')?.value || 0);
      const gstInclusive = this.settingsService.getSalesSettings().gstInclusive;
      let taxable: number;
      let gstAmount: number;
      if (gstPercent > 0 && gstInclusive) {
        taxable = amount / (1 + gstPercent / 100);
        gstAmount = amount - taxable;
      } else if (gstPercent > 0 && !gstInclusive) {
        taxable = amount / (1 + gstPercent / 100);
        gstAmount = amount - taxable;
      } else {
        taxable = amount;
        gstAmount = 0;
      }
      subtotal += taxable;
      totalGst += gstAmount;
    });
    const grandtotal = subtotal + totalGst;
    this.salesForm.patchValue(
      {
        subtotal: subtotal.toFixed(2),
        totalgst: totalGst.toFixed(2),
        grandtotal: grandtotal.toFixed(2),
      },
      { emitEvent: false }
    );
  }

  getItemDiscount(index: number): number {
    const item = this.items.at(index);
    const quantity = parseFloat(item.get('quantity')?.value || 0);
    const rate = parseFloat(item.get('rate')?.value || 0);
    const discountPct = parseFloat(item.get('discountPct')?.value || 0);
    return (quantity * rate * discountPct) / 100;
  }

  getSubtotal(): number {
    return parseFloat(this.salesForm.get('subtotal')?.value || 0);
  }

  getTotalDiscount(): number {
    let total = 0;
    this.items.controls.forEach((_, i) => {
      total += this.getItemDiscount(i);
    });
    return total;
  }

  getGrossSubtotal(): number {
    let total = 0;
    this.items.controls.forEach((item) => {
      const qty = parseFloat(item.get('quantity')?.value || 0);
      const rate = parseFloat(item.get('rate')?.value || 0);
      total += qty * rate;
    });
    return total;
  }

  getTotalGst(): number {
    return parseFloat(this.salesForm.get('totalgst')?.value || 0);
  }

  getGrandTotal(): number {
    return parseFloat(this.salesForm.get('grandtotal')?.value || 0);
  }

  getCgst(): number {
    return this.getTotalGst() / 2;
  }

  getSgst(): number {
    return this.getTotalGst() / 2;
  }

  clearCustomer(): void {
    this.salesForm.patchValue(
      {
        customerid: '',
        customername: '',
        customermobile: '',
        customeremail: '',
        customeraddress: '',
        customercity: '',
        customerstate: '',
        customercountry: '',
        customerpincode: '',
        customergstin: '',
      },
      { emitEvent: false }
    );
  }

  onCustomerChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedCustomer = this.customerOptions.find(
      (item) => item.customerid == selectedValue
    );
    if (selectedCustomer) {
      this.salesForm.patchValue({
        customername: selectedCustomer.customername || '',
        customermobile: selectedCustomer.customermobile || '',
        customeremail: selectedCustomer.customeremail || '',
        customeraddress: selectedCustomer.customeraddress || '',
        customercity: selectedCustomer.customercity || '',
        customerstate: selectedCustomer.customerstate || '',
        customercountry: selectedCustomer.customercountry || '',
        customerpincode: selectedCustomer.customerpincode || '',
        customergstin: selectedCustomer.customergstno || selectedCustomer.customergstin || '',
      });
    }
  }

  focusDiscount(index: number): void {
    setTimeout(() => {
      const discList = this.discInputs.toArray();
      if (discList[index]) {
        discList[index].nativeElement.focus();
        discList[index].nativeElement.select();
      }
    }, 0);
  }

  addItemAndFocusNext(index: number): void {
    const idx = this.items.length;
    this.items.push(this.createItemFormGroup());
    this.filteredProducts.push([...this.productOptions]);
    this.subscribeDescriptionFilter(idx);
    this.calculateTotals();
    setTimeout(() => {
      const descList = this.descInputs.toArray();
      if (descList[index + 1]) {
        descList[index + 1].nativeElement.focus();
      }
    }, 50);
  }

  /** Load summary first, then load customer list (needed for dropdown + address enrichment) */
  private loadSalesSummaryWithCustomers(invoiceno: number): void {
    this.isLoading = true;
    this.errorMessage = '';
    this.salesService.getSalesSummaryByInvoice(invoiceno).subscribe({
      next: (summary: any) => {
        this.isLoading = false;
        if (summary == null) {
          this.errorMessage = 'Invoice not found.';
          return;
        }
        const details = summary?.details ?? summary?.items ?? summary?.salesdetails ?? summary?.salesdetail ?? [];
        console.log('[SalesEdit] API response', { invoiceno, detailCount: Array.isArray(details) ? details.length : 0, raw: summary });
        this.populateFormFromSummary(summary, invoiceno);
        // Load customer list for the dropdown; also use it to enrich missing address
        this.salesService.getCustomers().pipe(catchError(() => of([]))).subscribe({
          next: (customers: any[]) => {
            this.customerOptions = Array.isArray(customers) ? customers : [];
            const customerid = this.salesForm.get('customerid')?.value;
            const address = this.salesForm.get('customeraddress')?.value;
            if (customerid && !address) {
              const cust = this.customerOptions.find(
                (c: any) => String(c.customerid ?? c.id) === String(customerid)
              );
              if (cust) {
                this.applyCustomerToForm(cust);
              }
            }
            this.cdr.detectChanges();
          }
        });
      },
      error: (err: any) => {
        this.isLoading = false;
        this.errorMessage =
          err?.error?.message || err?.message || 'Failed to load invoice for editing.';
      },
    });
  }

  private applyCustomerToForm(cust: any): void {
    this.salesForm.patchValue(
      {
        customermobile: cust.customermobile ?? cust.customermobileno ?? cust.mobile ?? '',
        customeremail: cust.customeremail ?? cust.email ?? '',
        customeraddress: cust.customeraddress ?? cust.address ?? '',
        customercity: cust.customercity ?? cust.city ?? '',
        customerstate: cust.customerstate ?? cust.state ?? '',
        customercountry: cust.customercountry ?? cust.country ?? '',
        customerpincode: cust.customerpincode ?? cust.pincode ?? '',
        customergstin: cust.customergstno ?? cust.customergstin ?? cust.gstin ?? '',
      },
      { emitEvent: false }
    );
    this.cdr.detectChanges();
  }

  private populateFormFromSummary(data: any, invoiceno: number): void {
    if (data == null) return;
    const s = data?.summary ?? data;
    if (s == null) return;
    const details =
      data?.details ?? data?.items ?? data?.salesdetails ?? data?.salesdetail ??
      data?.sales_details ?? s?.details ?? s?.items ?? s?.salesdetails ??
      s?.salesdetail ?? s?.sales_details ?? [];
    console.log('[SalesEdit] populateFormFromSummary', { detailListLength: Array.isArray(details) ? details.length : 0, details });

    while (this.items.length > 0) this.items.removeAt(0);

    const detailList = Array.isArray(details) ? details : [];
    if (detailList.length === 0) {
      this.items.push(this.createItemFormGroup());
    } else {
      detailList.forEach((d: any) => {
        const qty = Number(d.saleqty ?? d.sale_qty ?? d.quantity ?? 1) || 1;
        const rate = parseFloat(d.salemrp ?? d.sale_mrp ?? d.rate ?? 0) || 0;
        const discPct = parseFloat(d.saledisper ?? d.sale_dis_per ?? d.discountPct ?? 0) || 0;
        const gstPct = parseFloat(d.salegstper ?? d.sale_gst_per ?? d.gstPercent ?? 0) || 0;
        const lineTotal = parseFloat(d.salegrandtotal ?? d.sale_grand_total ?? d.grandtotal ?? 0) || 0;
        const taxableVal = parseFloat(d.saleamount ?? d.sale_amount ?? d.salesubtotal ?? d.sale_subtotal ?? 0) || 0;
        const amount = lineTotal > 0 ? lineTotal : (taxableVal > 0 && gstPct > 0 ? taxableVal * (1 + gstPct / 100) : taxableVal);
        this.items.push(
          this.formBuilder.group({
            productid: [d.productid ?? d.product_id ?? null],
            description: [String(d.productname ?? d.product_name ?? d.description ?? '')],
            hsnSac: [String(d.salehsn ?? d.sale_hsn ?? d.hsnSac ?? '')],
            quantity: [qty],
            rate: [rate],
            discountPct: [discPct],
            gstPercent: [gstPct],
            amount: [amount],
          })
        );
      });
    }

    const invdate = s.invdate ?? s.saledate;
    const paymentstatus = s.paymentstatus;
    const paymentStatusValue =
      paymentstatus === true || paymentstatus === 'Paid' || paymentstatus === 'true'
        ? 'Paid'
        : paymentstatus === false || paymentstatus === 'Unpaid'
        ? 'Unpaid'
        : paymentstatus;

    const customerid = s.customerid ?? s.customer_id ?? '';
    const tgross = parseFloat(s.tgrossamount ?? s.tgross_amount ?? s.subtotal ?? 0) || 0;
    const tdis = parseFloat(s.tdisamount ?? s.tdis_amount ?? 0) || 0;
    const netSubtotal = tgross > 0 && tdis >= 0 ? tgross - tdis : tgross;

    this.salesForm.patchValue(
      {
        invoiceno,
        saledate: invdate ? new Date(invdate) : new Date(),
        customerid,
        customername: s.customername ?? s.customer_name ?? '',
        customermobile: s.customermobile ?? s.customer_mobile ?? s.customermobileno ?? '',
        customeremail: s.customeremail ?? s.customer_email ?? '',
        customeraddress: s.customeraddress ?? s.customer_address ?? s.address ?? '',
        customercity: s.customercity ?? s.customer_city ?? s.city ?? '',
        customerstate: s.customerstate ?? s.customer_state ?? s.state ?? '',
        customercountry: s.customercountry ?? s.customer_country ?? s.country ?? '',
        customerpincode: s.customerpincode ?? s.customer_pincode ?? s.pincode ?? '',
        customergstin: s.customergstin ?? s.customer_gstin ?? '',
        subtotal: (netSubtotal || s.subtotal) ?? 0,
        totalgst: parseFloat(s.tgstamount ?? s.tgst_amount ?? s.totalgst ?? 0) || 0,
        grandtotal: parseFloat(s.grandtotal ?? 0) || 0,
        paymentmethod: s.paymenttype ?? s.payment_type ?? s.paymentmethod ?? '',
        paymentstatus: paymentStatusValue,
        notes: s.notes ?? '',
        isactive: s.isactive !== false,
      },
      { emitEvent: false }
    );

    this.calculateTotals();

    // Re-sync filteredProducts after items are rebuilt
    this.filteredProducts = this.items.controls.map(() => [...this.productOptions]);
    this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
  }

  private canSave(): boolean {
    const v = this.salesForm.value;
    if (!v.customerid && !v.customername) return false;
    if (!v.paymentmethod) return false;
    if (!v.paymentstatus) return false;
    return this.items.controls.some(
      (ctrl) =>
        ctrl.get('description')?.value && Number(ctrl.get('quantity')?.value) > 0
    );
  }

  private formatDateForApi(value: any): string {
    if (!value) return new Date().toISOString().split('T')[0];
    if (value instanceof Date) return value.toISOString().split('T')[0];
    if (typeof value === 'string') return value.split('T')[0];
    if (value?.year != null && value?.month != null && value?.day != null) {
      return `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}`;
    }
    return new Date().toISOString().split('T')[0];
  }

  buildPayload(): SaveSalessummaryDto | null {
    const v = this.salesForm.value;
    const user = this.authService.getUser() as any;
    const accountid = user?.accountid ?? user?.accountId ?? 1;
    const instanceid = user?.instanceid ?? user?.instanceId ?? 1;
    const now = new Date().toISOString().split('T')[0];
    const invoiceno = this.invoiceno ?? (typeof v.invoiceno === 'number' ? v.invoiceno : 0);

    const gstInclusive = this.settingsService.getSalesSettings().gstInclusive;
    const items: SalesDetailItemDto[] = this.items.controls
      .filter(
        (ctrl) =>
          ctrl.get('description')?.value && Number(ctrl.get('quantity')?.value) > 0
      )
      .map((ctrl) => {
        const i = ctrl.value;
        const qty = Number(i.quantity) || 0;
        const rate = Number(i.rate) || 0;
        const discPct = Number(i.discountPct) || 0;
        const gstPct = Number(i.gstPercent) || 0;
        const grossAmount = qty * rate;
        const discAmount = (grossAmount * discPct) / 100;
        const taxableBase = grossAmount - discAmount;
        let subtotal: number;
        let gstAmount: number;
        if (gstInclusive && gstPct > 0) {
          subtotal = taxableBase / (1 + gstPct / 100);
          gstAmount = taxableBase - subtotal;
        } else {
          subtotal = taxableBase;
          gstAmount = (subtotal * gstPct) / 100;
        }
        const cgst = gstAmount / 2;
        const sgst = gstAmount / 2;
        const grandtotal = subtotal + gstAmount;
        const round2 = (n: number) => Math.round(n * 100) / 100;
        return {
          productid: i.productid ?? 0,
          productname: i.description || '',
          salehsn: i.hsnSac || null,
          saleqty: Math.round(qty),
          salemrp: String(rate),
          saledisper: discPct || null,
          salegstper: Math.round(gstPct),
          saleamount: round2(subtotal),
          salegrossamount: round2(grossAmount),
          saltotaldisc: discAmount ? round2(discAmount) : null,
          salesubtotal: round2(subtotal),
          saletotalcgst: round2(cgst),
          saletotalsgst: round2(sgst),
          saletotalgst: round2(gstAmount),
          salegrandtotal: round2(grandtotal),
        };
      });

    const grossSubtotal = this.getGrossSubtotal();
    const totalDiscount = this.getTotalDiscount();
    const tdisamount = Math.round(totalDiscount * 100) / 100;
    const tdisaper = grossSubtotal > 0 ? Math.round((totalDiscount / grossSubtotal) * 100 * 100) / 100 : null;
    const netSubtotal = parseFloat(v.subtotal) || 0;
    const totalgst = parseFloat(v.totalgst) || 0;

    return {
      invoiceno,
      invdate: this.formatDateForApi(v.saledate),
      customerid: Number(v.customerid) || 0,
      customername: v.customername || null,
      tgrossamount: Math.round(grossSubtotal * 100) / 100,
      tdisaper,
      tdisamount,
      tgstamount: totalgst,
      tsgstamount: totalgst / 2,
      tcgstamount: totalgst / 2,
      grandtotal: Math.round((netSubtotal + totalgst) * 100) / 100,
      paymenttype: v.paymentmethod || null,
      paymentstatus: v.paymentstatus === true || v.paymentstatus === 'Paid' || v.paymentstatus === 'true',
      accountid,
      instanceid,
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      createddate: now,
      updateddate: now,
      isactive: v.isactive !== false,
      items,
    };
  }

  markFormGroupTouched(): void {
    Object.keys(this.salesForm.controls).forEach((key) => {
      this.salesForm.get(key)?.markAsTouched();
    });
    this.items.controls.forEach((item) => {
      const fg = item as FormGroup;
      Object.keys(fg.controls).forEach((key) => fg.get(key)?.markAsTouched());
    });
  }

  onSubmit(): void {
    this.markFormGroupTouched();
    if (!this.canSave()) {
      if (!this.salesForm.value.customerid && !this.salesForm.value.customername) {
        this.errorMessage = 'Please select a customer.';
      } else if (!this.salesForm.value.paymentmethod) {
        this.errorMessage = 'Please select payment method.';
      } else if (!this.salesForm.value.paymentstatus) {
        this.errorMessage = 'Please select payment status.';
      } else {
        this.errorMessage = 'Please add at least one item with description and quantity.';
      }
      return;
    }

    if (this.invoiceno == null) {
      this.errorMessage = 'Invoice number is missing. Cannot update.';
      return;
    }

    this.errorMessage = '';
    this.salesForm.patchValue({ updatedby: this.currentUserId, updateddate: new Date() });

    const payload = this.buildPayload();
    if (!payload || payload.items.length === 0) {
      this.errorMessage = 'Please add at least one item.';
      return;
    }

    this.salesService.updateSalesSummaryWithDetails(payload).subscribe({
      next: () => {
        this.router.navigate(['/pages/sales']);
      },
      error: (error: any) => {
        this.errorMessage =
          error?.error?.message || error?.message || 'Error updating sales. Please try again.';
      },
    });
  }
}
