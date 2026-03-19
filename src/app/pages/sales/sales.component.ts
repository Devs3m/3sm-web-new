import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';
import { SalesService } from '../service/sales.service';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { InstanceService } from '../service/instance.service';
import { GstService } from '../service/gst.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid as exportDataGridToExcel } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { Workbook } from 'exceljs';
import jsPDF from 'jspdf';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { SaveSalessummaryDto, SalesDetailItemDto } from './models/save-salessummary.dto';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css'],
})
export class SalesComponent implements OnInit {
  @ViewChild('formSection') formSection!: ElementRef;
  @ViewChild('customerSelect') customerSelect!: ElementRef;
  @ViewChildren('qtyInput') qtyInputs!: QueryList<ElementRef>;
  @ViewChildren('discInput') discInputs!: QueryList<ElementRef>;
  @ViewChildren('descInput') descInputs!: QueryList<ElementRef>;

  @HostListener('document:keydown.F1', ['$event'])
  onF1Key(event: KeyboardEvent): void {
    if (!this.isFormOpen) return;
    event.preventDefault();
    // If a customer is already selected, clear it first so the dropdown reappears
    if (this.salesForm.get('customername')?.value) {
      this.clearCustomer();
    }
    // Wait for *ngIf to render the select, then focus it
    setTimeout(() => {
      if (this.customerSelect) {
        this.customerSelect.nativeElement.focus();
      }
    }, 50);
  }

  isFormOpen = false;
  isEditMode = false;
  sales!: any[];
  salesForm!: FormGroup;
  customerOptions: any[] = [];
  productOptions: any[] = [];
  filteredProducts: any[][] = [];
  gstOptions: any[] = [];
  selectedItem: any;
  apiData: any[] = [];
  salesSummaryList: any[] = [];
  totalSales: number = 0;
  activeSales: number = 0;
  deactiveSales: number = 0;
  totalAmount: number = 0;
  errorMessage: string = '';
  currentUserId: number = 1;
  invoiceNumber: string = '';
  /** Decode display: same encoding as API (account*1e10+instance*1e6+sequence). Show only sequence in UI. */
  private static readonly INVOICE_NO_LEGACY_THRESHOLD = 1e6;
  /** When editing a salessummary, the invoiceno being edited (for update API) */
  editingInvoiceno: number | null = null;

  // Add New Customer modal (uses shared app-add-customer-form)
  showAddCustomerModal = false;

  constructor(
    private salesService: SalesService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private permissionService: PermissionService,
    private gstService: GstService,
    private instanceService: InstanceService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  get isSalesAddPage(): boolean {
    return this.router.url.includes('salesadd');
  }

  goBackToSales(): void {
    this.editingInvoiceno = null;
    this.router.navigate(['/pages/sales']);
  }

  /** Edit from sales summary table: go to salesedit/:invoiceno */
  editSummaryItem(item: any): void {
    const invoiceno = item?.invoiceno != null ? item.invoiceno : null;
    if (invoiceno == null) {
      this.errorMessage = 'Invalid invoice. Cannot edit.';
      return;
    }
    this.router.navigate(['/pages/salesedit', invoiceno]);
  }

  /** Download invoice PDF using salesprint API data (salessummary, salesdetails, instance, customer). */
  downloadInvoicePdf(item: any): void {
    const invoiceno = item?.invoiceno ?? item?.salessummaryid;
    if (invoiceno == null) {
      this.errorMessage = 'Invalid invoice. Cannot download PDF.';
      return;
    }
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.salesService.getSalesPrintData(invoiceno, accountId, instanceId).subscribe({
      next: (data: any) => {
        const s = data?.salessummary ?? data?.summary ?? data;
        const details = data?.salesdetails ?? data?.details ?? data?.items ?? data?.salesdetail ?? data?.sales_details ?? s?.salesdetails ?? s?.details ?? s?.items ?? s?.salesdetail ?? s?.sales_details ?? [];
        const instanceFromApi = data?.instance ?? data?.salessummary?.instance ?? data?.summary?.instance ?? s?.instance;
        const customerFromApi = data?.customer ?? data?.salessummary?.customer ?? s?.customer;

        if (customerFromApi) {
          Object.assign(s, {
            customername: s.customername ?? s.customer_name ?? customerFromApi.customername ?? customerFromApi.customer_name,
            customeraddress: s.customeraddress ?? s.customer_address ?? customerFromApi.customeraddress ?? customerFromApi.customer_address ?? customerFromApi.address ?? '',
            customercity: s.customercity ?? s.customer_city ?? customerFromApi.customercity ?? customerFromApi.customer_city ?? customerFromApi.city ?? '',
            customerstate: s.customerstate ?? s.customer_state ?? customerFromApi.customerstate ?? customerFromApi.customer_state ?? customerFromApi.state ?? '',
            customerpincode: s.customerpincode ?? s.customer_pincode ?? customerFromApi.customerpincode ?? customerFromApi.customer_pincode ?? customerFromApi.pincode ?? '',
            customermobile: s.customermobile ?? s.customer_mobile ?? customerFromApi.customermobile ?? customerFromApi.customermobileno ?? customerFromApi.mobile ?? '',
            customeremail: s.customeremail ?? s.customer_email ?? customerFromApi.customeremail ?? customerFromApi.email ?? ''
          });
        }

        const runPdf = (instance: any) => {
          this.generateInvoicePdf(s, Array.isArray(details) ? details : [], invoiceno, instance);
          this.errorMessage = '';
        };
        const loadInstanceAndPdf = (fetchedInstance: any) => {
          const instance = instanceFromApi ? { ...instanceFromApi, ...(fetchedInstance || {}) } : fetchedInstance;
          runPdf(instance);
        };

        const doPdfWithInstance = () => {
          if (instanceFromApi) {
            runPdf(instanceFromApi);
          } else {
            const instanceid = s?.instanceid ?? s?.instance_id ?? 1;
            this.instanceService.getInstanceById(instanceid).pipe(catchError(() => of(null))).subscribe(loadInstanceAndPdf);
          }
        };

        if (!customerFromApi && (s?.customerid ?? s?.customer_id)) {
          this.salesService.getCustomerById(s.customerid ?? s.customer_id).pipe(catchError(() => of(null))).subscribe((cust: any) => {
            if (cust) {
              Object.assign(s, {
                customeraddress: s.customeraddress ?? cust.customeraddress ?? cust.address ?? '',
                customercity: s.customercity ?? cust.customercity ?? cust.city ?? '',
                customerstate: s.customerstate ?? cust.customerstate ?? cust.state ?? '',
                customerpincode: s.customerpincode ?? cust.customerpincode ?? cust.pincode ?? '',
                customermobile: s.customermobile ?? cust.customermobile ?? cust.customermobileno ?? cust.mobile ?? '',
                customeremail: s.customeremail ?? cust.customeremail ?? cust.email ?? ''
              });
            }
            doPdfWithInstance();
          });
        } else {
          doPdfWithInstance();
        }
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load invoice for PDF.';
      }
    });
  }

  private generateInvoicePdf(summary: any, details: any[], invoiceno: number, instance: any): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const left = 14;
    const right = pageW - 14;
    const rightCol = 105;
    let y = 14;

    const invdate = summary.invdate ?? summary.saledate ?? new Date();
    const dateStr = invdate ? new Date(invdate).toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) : '-';

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('GST Invoice', left, y);
    y += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`Invoice No: ${this.getDisplayInvoiceNo(invoiceno) || invoiceno}`, left, y);
    doc.text(`Date: ${dateStr}`, right - 40, y);
    y += 12;

    let yLeft = y;
    let yRight = y;

    if (instance) {
      const instanceName = instance.instancename ?? instance.instance_name ?? 'Instance Name';
      const instAddr = [
        instance.instanceaddress ?? instance.instance_address ?? instance.address,
        instance.instancecity ?? instance.instance_city ?? instance.city,
        instance.instancestate ?? instance.instance_state ?? instance.state,
        instance.instancepincode ?? instance.instance_pincode ?? instance.pincode
      ].filter(Boolean).join(', ');
      const country = instance.instancecountry ?? instance.instance_country ?? instance.country;
      const ownerPhone = instance.ownermobile ?? instance.owner_mobile ?? instance.instancephone ?? instance.instance_phone ?? instance.managermobile ?? instance.phone ?? instance.mobile;
      const ownerEmail = instance.owneremail ?? instance.owner_email ?? instance.instanceemail ?? instance.instance_email ?? instance.manageremail ?? instance.email;
      const gstno = instance.instancegstno ?? instance.instance_gstno ?? instance.gstno;
      const vatno = instance.instancevatno ?? instance.instance_vatno ?? instance.vatno;
      const fssai = instance.instancefssaino ?? instance.instance_fssaino ?? instance.fssaino;

      doc.setFontSize(12);
      doc.setFont('helvetica', 'bold');
      doc.text(instanceName, left, yLeft);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      yLeft += 6;
      if (instAddr) { doc.text(instAddr, left, yLeft); yLeft += 5; }
      if (country) { doc.text(country, left, yLeft); yLeft += 5; }
      if (ownerPhone) { doc.text(`Owner Phone: ${ownerPhone}`, left, yLeft); yLeft += 5; }
      if (ownerEmail) { doc.text(`Owner Email: ${ownerEmail}`, left, yLeft); yLeft += 5; }
      if (gstno) { doc.text(`GSTIN: ${gstno}`, left, yLeft); yLeft += 5; }
      if (vatno) { doc.text(`VAT No: ${vatno}`, left, yLeft); yLeft += 5; }
      if (fssai) { doc.text(`FSSAI No: ${fssai}`, left, yLeft); yLeft += 5; }
      yLeft += 6;
    }

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.text('Bill To:', rightCol, yRight);
    doc.setFont('helvetica', 'normal');
    yRight += 6;
    const custName = summary.customername ?? summary.customer_name ?? '-';
    doc.text(custName, rightCol, yRight);
    yRight += 5;
    const addr = [
      summary.customeraddress ?? summary.customer_address ?? summary.address,
      summary.customercity ?? summary.customer_city ?? summary.city,
      summary.customerstate ?? summary.customer_state ?? summary.state,
      summary.customerpincode ?? summary.customer_pincode ?? summary.pincode
    ].filter(Boolean).join(', ');
    if (addr) { doc.text(addr, rightCol, yRight); yRight += 5; }
    const mobile = summary.customermobile ?? summary.customer_mobile ?? summary.customermobileno ?? summary.mobile;
    if (mobile) { doc.text(`Mobile: ${mobile}`, rightCol, yRight); yRight += 5; }
    const email = summary.customeremail ?? summary.customer_email ?? summary.email;
    if (email) { doc.text(`Email: ${email}`, rightCol, yRight); yRight += 5; }

    y = Math.max(yLeft, yRight) + 8;

    const colW = [8, 50, 18, 14, 22, 16, 16, 28];
    const headers = ['S.No', 'Description', 'HSN', 'Qty', 'Rate', 'Disc %', 'GST %', 'Amount'];
    doc.setDrawColor(0, 0, 0);
    doc.rect(left, y, colW.reduce((a, b) => a + b, 0), 8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    let x = left;
    headers.forEach((h, i) => { doc.text(h, x + 2, y + 5.5); x += colW[i]; });
    doc.setFont('helvetica', 'normal');
    y += 10;

    doc.setFontSize(8);
    details.forEach((d: any, idx: number) => {
      if (y > 260) { doc.addPage(); y = 20; }
      const productname = String(d.productname ?? d.product_name ?? d.description ?? '-');
      const hsn = String(d.salehsn ?? d.sale_hsn ?? d.hsnSac ?? '-');
      const qty = Number(d.saleqty ?? d.sale_qty ?? d.quantity ?? 0) || 0;
      const rate = parseFloat(d.salemrp ?? d.sale_mrp ?? d.rate ?? 0) || 0;
      const disc = parseFloat(d.saledisper ?? d.sale_dis_per ?? d.discountPct ?? 0) || 0;
      const gst = parseFloat(d.salegstper ?? d.sale_gst_per ?? d.gstPercent ?? 0) || 0;
      const amount = parseFloat(d.saleamount ?? d.sale_amount ?? d.salesubtotal ?? d.sale_subtotal ?? d.amount ?? 0) || 0;
      const row = [String(idx + 1), productname.substring(0, 35), hsn, String(qty), rate.toFixed(2), disc.toFixed(1), gst.toFixed(1), amount.toFixed(2)];
      x = left;
      row.forEach((val, i) => { doc.text(val, x + 2, y + 4); x += colW[i]; });
      y += 6;
    });
    y += 8;

    const tgross = details.reduce((acc: number, d: any) => {
      const qty = Number(d.saleqty ?? d.sale_qty ?? d.quantity ?? 0) || 0;
      const rate = parseFloat(String(d.salemrp ?? d.sale_mrp ?? d.rate ?? 0)) || 0;
      return acc + (qty * rate);
    }, 0) || (parseFloat(String(summary.tgrossamount ?? summary.tgross_amount ?? 0)) || 0);
    const tdisRaw = summary.tdisamount ?? summary.tdis_amount ?? 0;
    let tdis = parseFloat(String(tdisRaw)) || 0;
    if (tdis === 0 && details?.length) {
      const sumDisc = details.reduce((acc: number, d: any) => acc + (parseFloat(String(d.saltotaldisc ?? d.sale_total_disc ?? 0)) || 0), 0);
      if (sumDisc > 0) tdis = sumDisc;
    }
    const subtotal = tgross - tdis;
    const totalgst = parseFloat(String(summary.tgstamount ?? summary.tgst_amount ?? 0)) || 0;
    const grandtotal = parseFloat(String(summary.grandtotal ?? 0)) || 0;
    const totalLeft = left + colW.slice(0, -1).reduce((a, b) => a + b, 0);
    doc.setFont('helvetica', 'bold');
    doc.text('Gross Amount:', totalLeft - 50, y);
    doc.text(`Rs.${tgross.toFixed(2)}`, totalLeft + colW[7] - 22, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.text('Total Discount:', totalLeft - 50, y);
    doc.text(`Rs.${tdis.toFixed(2)}`, totalLeft + colW[7] - 22, y);
    y += 6;
    doc.text('Subtotal:', totalLeft - 50, y);
    doc.text(`Rs.${subtotal.toFixed(2)}`, totalLeft + colW[7] - 22, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('Total GST:', totalLeft - 50, y);
    doc.text(`Rs.${totalgst.toFixed(2)}`, totalLeft + colW[7] - 22, y);
    y += 8;
    doc.setDrawColor(0, 0, 0);
    doc.rect(totalLeft - 55, y - 5, colW[7] + 55, 12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Grand Total:', totalLeft - 50, y + 3);
    doc.text(`Rs.${grandtotal.toFixed(2)}`, totalLeft + colW[7] - 22, y + 3);
    y += 16;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.setFontSize(9);
    doc.text(`Payment Method: ${summary.paymenttype ?? summary.payment_type ?? '-'}`, left, y);
    doc.text(`Payment Status: ${summary.paymentstatus === true || summary.paymentstatus === 'Paid' ? 'Paid' : (summary.paymentstatus || '-')}`, left, y + 6);

    doc.save(`Invoice-${this.getDisplayInvoiceNo(invoiceno) || invoiceno}.pdf`);
  }

  /** Delete from sales summary table */
  deleteSummaryItem(item: any): void {
    const row = item?.data ?? item;
    const invoiceno = row?.invoiceno != null ? row.invoiceno : (item?.invoiceno != null ? item.invoiceno : null);
    if (invoiceno == null || invoiceno === 0) {
      this.errorMessage = 'Invalid invoice number. Cannot delete.';
      return;
    }
    if (!confirm('Are you sure you want to delete this sales record?')) return;
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.salesService.deleteSalesSummary(invoiceno, accountId, instanceId).subscribe({
      next: () => {
        this.getSalesSummaryDetails();
        this.getSalesSummaryListData();
        this.errorMessage = '';
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || err?.message || 'Error deleting sales. Please try again.';
      }
    });
  }

  /** Load one salessummary by invoiceno and populate form (salesadd edit) */
  loadSalesSummaryForEdit(invoiceno: number): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.salesService.getSalesSummaryByInvoice(invoiceno, accountId, instanceId).subscribe({
      next: (data: any) => {
        this.populateFormFromSummary(data, invoiceno);
        this.enrichCustomerAddressIfNeeded();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load invoice for editing.';
      }
    });
  }

  /** When editing: if summary has no address, use customer from list (reuse customerOptions to avoid extra API call) */
  private enrichCustomerAddressIfNeeded(): void {
    const customerid = this.salesForm.get('customerid')?.value;
    const address = this.salesForm.get('customeraddress')?.value;
    if (!customerid || address) return;

    const applyCustomer = (list: any[]) => {
      const cust = list.find((c: any) => String(c.customerid ?? c.id ?? c.customerId) === String(customerid));
      if (cust) {
        this.salesForm.patchValue({
          customermobile: cust.customermobile ?? cust.customermobileno ?? cust.mobile ?? '',
          customeremail: cust.customeremail ?? cust.email ?? '',
          customeraddress: cust.customeraddress ?? cust.address ?? '',
          customercity: cust.customercity ?? cust.city ?? '',
          customerstate: cust.customerstate ?? cust.state ?? '',
          customercountry: cust.customercountry ?? cust.country ?? '',
          customerpincode: cust.customerpincode ?? cust.pincode ?? '',
          customergstin: cust.customergstin ?? cust.gstin ?? ''
        }, { emitEvent: false });
        this.cdr.detectChanges();
      }
    };

    const list = Array.isArray(this.customerOptions) ? this.customerOptions : [];
    if (list.length > 0) {
      applyCustomer(list);
    } else {
      this.salesService.getCustomers().subscribe({
        next: (opts: any[]) => {
          this.customerOptions = opts;
          applyCustomer(Array.isArray(opts) ? opts : []);
        }
      });
    }
  }

  /** Map API salessummary + details response into the sales form */
  private populateFormFromSummary(data: any, invoiceno: number): void {
    const s = data?.summary ?? data;
    const details = data?.details ?? data?.items ?? data?.salesdetails ?? data?.salesdetail ?? data?.sales_details ?? s?.details ?? s?.items ?? s?.salesdetails ?? s?.salesdetail ?? s?.sales_details ?? [];
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
        const amount = parseFloat(d.saleamount ?? d.sale_amount ?? d.salesubtotal ?? d.sale_subtotal ?? d.amount ?? 0) || 0;
        this.items.push(this.formBuilder.group({
          productid: [d.productid ?? d.product_id ?? null],
          description: [String(d.productname ?? d.product_name ?? d.description ?? '')],
          hsnSac: [String(d.salehsn ?? d.sale_hsn ?? d.hsnSac ?? '')],
          quantity: [qty],
          rate: [rate],
          discountPct: [discPct],
          gstPercent: [gstPct],
          amount: [amount]
        }));
      });
    }

    const invdate = s.invdate ?? s.saledate;
    const paymentstatus = s.paymentstatus;
    const paymentStatusValue = paymentstatus === true || paymentstatus === 'Paid' || paymentstatus === 'true' ? 'Paid' : (paymentstatus === false || paymentstatus === 'Unpaid' ? 'Unpaid' : paymentstatus);

    const customerid = s.customerid ?? s.customer_id ?? '';
    const tgross = parseFloat(s.tgrossamount ?? s.tgross_amount ?? s.subtotal ?? 0) || 0;
    const tdis = parseFloat(s.tdisamount ?? s.tdis_amount ?? 0) || 0;
    const netSubtotal = tgross > 0 && tdis >= 0 ? tgross - tdis : tgross;
    const patch: any = {
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
      isactive: s.isactive !== false
    };

    this.salesForm.patchValue(patch, { emitEvent: false });

    this.editingInvoiceno = invoiceno;
    this.isEditMode = true;
    this.calculateTotals();

    // Re-sync filteredProducts after items are rebuilt
    this.filteredProducts = this.items.controls.map(() => [...this.productOptions]);
    this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
  }

  private lastLoadedInvoiceno: number | null = null;

  ngOnInit(): void {
    this.getCurrentUserId();
    this.generateInvoiceNumber();
    this.initializeForm();
    this.loadSalesSummaryWhenOnList();
    this.getCustomers();
    if (this.router.url.includes('salesadd')) {
      this.toggleForm();
      this.tryLoadInvoiceFromQuery();
    }
    this.getProducts();
    this.getGstOptions();
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects || '';
      if (url.includes('salesadd')) {
        this.toggleForm();
        this.tryLoadInvoiceFromQuery();
        if (this.customerOptions.length === 0) {
          this.getCustomers();
        }
      } else {
        this.lastLoadedInvoiceno = null;
        this.getCustomers();
        this.loadSalesSummaryWhenOnList();
      }
    });
  }

  /** Load list/counts only when on sales list view (skip on salesadd edit) */
  private loadSalesSummaryWhenOnList(): void {
    if (!this.router.url.includes('salesadd')) {
      this.getSalesSummaryDetails();
      this.getSalesSummaryListData();
    }
  }

  private tryLoadInvoiceFromQuery(): void {
    const invoiceno = this.route.snapshot.queryParamMap.get('invoiceno')
      ?? this.route.root.snapshot.queryParamMap.get('invoiceno');
    if (invoiceno == null || invoiceno === '') return;
    const num = +invoiceno;
    if (isNaN(num) || num <= 0) return;
    if (this.lastLoadedInvoiceno === num) return;
    this.lastLoadedInvoiceno = num;
    this.loadSalesSummaryForEdit(num);
  }

  initializeForm(): void {
    const today = new Date();
    this.salesForm = this.formBuilder.group({
      salesid: [0],
      invoiceno: [0], // New invoice: omit in payload; server generates next per account+instance
      saledate: [today, Validators.required],
      customerid: ["", Validators.required],
      customername: ["", Validators.required],
      customermobile: [""],
      customeremail: [""],
      customeraddress: [""],
      customercity: [""],
      customerstate: [""],
      customercountry: [""],
      customerpincode: [""],
      customergstin: [""],
      items: this.formBuilder.array([this.createItemFormGroup()]),
      subtotal: [0],
      totalgst: [0],
      grandtotal: [0],
      paymentmethod: ["Cash", Validators.required],
      paymentstatus: ["Paid", Validators.required],
      notes: [""],
      isactive: [true, Validators.required],
      createddate: [today],
      updateddate: [today],
      createdby: [this.currentUserId],
      updatedby: [this.currentUserId]
    });

    // Subscribe to form changes to calculate totals
    this.salesForm.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
  }

  createItemFormGroup(): FormGroup {
    return this.formBuilder.group({
      productid: [null as number | null],
      description: ["", Validators.required],
      hsnSac: [""],
      quantity: [null, [Validators.required, Validators.min(1)]],
      rate: [0, [Validators.required, Validators.min(0)]],
      discountPct: [0, [Validators.min(0), Validators.max(100)]],
      gstPercent: [0],
      amount: [0]
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
    const grossAmount = quantity * rate;
    const discountValue = (grossAmount * discountPct) / 100;
    const amount = grossAmount - discountValue;
    item.patchValue({ amount: amount.toFixed(2) }, { emitEvent: false });
    this.calculateTotals();
  }

  calculateTotals(): void {
    let subtotal = 0;
    let totalGst = 0;

    this.items.controls.forEach((item) => {
      const amount = parseFloat(item.get('amount')?.value || 0);
      const gstPercent = parseFloat(item.get('gstPercent')?.value || 0);
      subtotal += amount;
      totalGst += (amount * gstPercent) / 100;
    });

    const grandtotal = subtotal + totalGst;
    this.salesForm.patchValue({
      subtotal: subtotal.toFixed(2),
      totalgst: totalGst.toFixed(2),
      grandtotal: grandtotal.toFixed(2)
    }, { emitEvent: false });
  }

  getItemDiscount(index: number): number {
    const item = this.items.at(index);
    const quantity = parseFloat(item.get('quantity')?.value || 0);
    const rate = parseFloat(item.get('rate')?.value || 0);
    const discountPct = parseFloat(item.get('discountPct')?.value || 0);
    return (quantity * rate * discountPct) / 100;
  }

  generateInvoiceNumber(): void {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
    this.invoiceNumber = `INV-${year}-${random}`;
  }

  /** For grid: show only sequence (hide account/instance) in Invoice No column. */
  invoiceNoCellValue = (rowData: any): string => {
    const v = rowData?.invoiceno ?? rowData?.invoiceNo;
    return this.getDisplayInvoiceNoSequenceOnly(v);
  };

  /** Invoice number with only the sequence part (for listing; hides account and instance). */
  getDisplayInvoiceNoSequenceOnly(invoiceno: number | null | undefined): string {
    if (invoiceno == null) return '';
    const n = Number(invoiceno);
    if (!Number.isFinite(n) || n < 0) return '';
    const seq = n < SalesComponent.INVOICE_NO_LEGACY_THRESHOLD ? n : (n % 1e6) || 1;
    return SalesComponent.formatSequencePart(seq);
  }

  /** Format sequence as 6 digits with comma: 1 → "000,001". */
  private static formatSequencePart(sequence: number): string {
    const s = String(Math.max(0, Math.floor(sequence))).padStart(6, '0');
    return s.length <= 3 ? s : s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  /** Decode stored invoiceno and format as "49,07,000,001" (account, instance 2-digit, sequence 6-digit with comma). */
  getDisplayInvoiceNo(invoiceno: number | null | undefined): string {
    if (invoiceno == null) return this.invoiceNumber || '';
    const n = Number(invoiceno);
    if (!Number.isFinite(n) || n < 0) return '';
    const seqPart = SalesComponent.formatSequencePart(n < SalesComponent.INVOICE_NO_LEGACY_THRESHOLD ? n : (n % 1e6) || 1);
    if (n < SalesComponent.INVOICE_NO_LEGACY_THRESHOLD) return `00,00,${seqPart}`;
    const instanceId = Math.floor(n / 1e6) % 10000;
    const accountId = Math.floor(n / 1e10);
    return `${accountId},${String(instanceId).padStart(2, '0')},${seqPart}`;
  }

  /** Display value for Invoice No field (sequence only; form still holds encoded value for payload). */
  get invoiceDisplayValue(): string {
    const v = this.salesForm?.get('invoiceno')?.value;
    return this.getDisplayInvoiceNo(v) || this.invoiceNumber || '';
  }

  /** Current user's account and instance (for scoping invoice get/delete/print when unique per account+instance). */
  private getCurrentAccountAndInstance(): { accountId: number; instanceId: number } {
    const user = this.authService.getUser() as any;
    return {
      accountId: user?.accountid ?? user?.accountId ?? 1,
      instanceId: user?.instanceid ?? user?.instanceId ?? 1,
    };
  }

  /** Load next invoice number from API (GET next-invoice-no) and set on form (sales add) */
  loadNextInvoiceNumber(): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.salesService.getNextInvoiceNo(accountId, instanceId).subscribe({
      next: (res) => {
        if (this.salesForm && res?.nextInvoiceNo != null) {
          this.salesForm.patchValue({ invoiceno: res.nextInvoiceNo }, { emitEvent: false });
          this.invoiceNumber = this.getDisplayInvoiceNo(res.nextInvoiceNo);
          this.cdr.detectChanges();
        }
      }
    });
  }

  getCurrentUserId(): void {
    const user = this.authService.getUser();
    if (user) {
      this.currentUserId = user.userId || user.userid || user.user_id || user.id || 1;
      console.log('Current logged-in user ID:', this.currentUserId);
    } else {
      console.warn('No user found in token, using default ID: 1');
      this.currentUserId = 1;
    }
  }

  getSalesSummaryDetails(): void {
    this.salesService.getSalesSummaryCounts().subscribe({
      next: (response: any) => {
        this.activeSales = response.activeSalessummary ?? response.activeSales ?? response.active ?? 0;
        this.deactiveSales = response.deactiveSalessummary ?? response.deactiveSales ?? response.deactive ?? response.inactive ?? 0;
        // totalSales and totalAmount are set from getSalesSummaryListData() so they stay scoped to accountId/instanceId
      },
      error: (err) => {
        console.error('Error fetching sales summary counts:', err);
      }
    });
  }

  private byAccountId<T extends { accountid?: number; accountId?: number }>(list: T[], accountId: number): T[] {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  private byAccountAndInstance<T extends { accountid?: number; accountId?: number; instanceid?: number; instanceId?: number }>(
    list: T[], accountId: number, instanceId: number
  ): T[] {
    if (!Array.isArray(list) || accountId == null || instanceId == null) return list || [];
    return list.filter((item: any) => {
      const accId = item.accountid ?? item.accountId ?? item.account_id;
      const instId = item.instanceid ?? item.instanceId ?? item.instance_id;
      return accId != null && Number(accId) === Number(accountId) &&
             instId != null && Number(instId) === Number(instanceId);
    });
  }

  getSalesSummaryListData(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();
    const listObs = accountId != null
      ? this.salesService.getSalesSummaryList(accountId, instanceId ?? undefined)
      : this.salesService.getSalesSummaryList();
    listObs.subscribe({
      next: (data: any) => {
        const rawList = Array.isArray(data) ? data : (data?.list ?? data?.data ?? data?.records ?? []);
        let filtered: any[];
        if (accountId == null) {
          filtered = rawList;
        } else if (instanceId != null) {
          filtered = this.byAccountAndInstance(rawList, accountId, instanceId);
          if (filtered.length === 0 && rawList.length > 0) {
            filtered = this.byAccountId(rawList, accountId);
          }
        } else {
          filtered = this.byAccountId(rawList, accountId);
        }
        this.salesSummaryList = filtered.map((item: any) => ({
          ...item,
          saledate: item.invdate ?? item.invoicedate ?? item.invoiceDate ?? item.saledate ?? item.date
        }));
        this.totalSales = this.salesSummaryList.length;
        this.totalAmount = this.salesSummaryList.reduce((sum: number, item: any) => {
          const val = parseFloat(item.grandtotal ?? item.grandTotal ?? 0);
          return sum + (isNaN(val) ? 0 : val);
        }, 0);
      },
      error: (err) => {
        console.error('Error fetching sales summary list:', err);
      }
    });
  }

  getCustomers(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.salesService.getCustomers().subscribe({
      next: (customers) => {
        const raw = Array.isArray(customers) ? customers : [];
        this.customerOptions = accountId != null ? this.byAccountId(raw, accountId) : raw;
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }

  getProducts(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.salesService.getProducts().subscribe({
      next: (products) => {
        const raw = Array.isArray(products) ? products : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.productOptions = filtered;
        this.filteredProducts = this.items.controls.map(() => [...filtered]);
        this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
        if (filtered.length > 0) {
          console.log('Product API sample fields:', Object.keys(filtered[0]));
        }
      },
      error: (err) => {
        console.error('Error fetching products:', err);
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

  getGstOptions(): void {
    this.gstService.getGstDetails().subscribe({
      next: (gstList) => {
        this.gstOptions = gstList || [];
        // If no GST options, use defaults
        if (this.gstOptions.length === 0) {
          this.gstOptions = [
            { gstid: 1, gstpercent: 0, gstname: '0%' },
            { gstid: 2, gstpercent: 5, gstname: '5%' },
            { gstid: 3, gstpercent: 12, gstname: '12%' },
            { gstid: 4, gstpercent: 18, gstname: '18%' },
            { gstid: 5, gstpercent: 28, gstname: '28%' }
          ];
        }
      },
      error: (err) => {
        console.error('Error fetching GST options:', err);
        // Default GST options
        this.gstOptions = [
          { gstid: 1, gstpercent: 0, gstname: '0%' },
          { gstid: 2, gstpercent: 5, gstname: '5%' },
          { gstid: 3, gstpercent: 12, gstname: '12%' },
          { gstid: 4, gstpercent: 18, gstname: '18%' },
          { gstid: 5, gstpercent: 28, gstname: '28%' }
        ];
      }
    });
  }

  clearCustomer(): void {
    this.salesForm.patchValue({
      customerid: '',
      customername: '',
      customermobile: '',
      customeremail: '',
      customeraddress: '',
      customercity: '',
      customerstate: '',
      customercountry: '',
      customerpincode: '',
      customergstin: ''
    }, { emitEvent: false });
  }

  // ── Add New Customer ──────────────────────────────────────────────────────

  openAddCustomerModal(): void {
    console.log('openAddCustomerModal called');
    this.showAddCustomerModal = true;
    this.cdr.detectChanges();
  }

  closeAddCustomerModal(): void {
    console.log('closeAddCustomerModal called');
    this.showAddCustomerModal = false;
  }

  /** Called when Add Customer form (shared component) saves successfully */
  handleCustomerSaved(savedCustomer: any): void {
    this.closeAddCustomerModal();
    this.salesService.getCustomers().subscribe({
      next: (customers) => {
        this.customerOptions = customers;
        const newId = savedCustomer?.customerid ?? savedCustomer?.id ?? savedCustomer?.data?.customerid;
        const match = newId
          ? customers.find((c: any) => String(c.customerid) === String(newId))
          : customers.find((c: any) => c.customername === savedCustomer?.customername);
        if (match) {
          this.salesForm.patchValue({
            customerid: match.customerid,
            customername: match.customername || '',
            customermobile: match.customermobile || '',
            customeremail: match.customeremail || '',
            customeraddress: match.customeraddress || '',
            customercity: match.customercity || '',
            customerstate: match.customerstate || '',
            customercountry: match.customercountry || '',
            customerpincode: match.customerpincode || '',
            customergstin: match.customergstin || ''
          });
        } else {
          this.salesForm.patchValue({
            customername: savedCustomer.customername ?? '',
            customermobile: savedCustomer.customermobile ?? '',
            customeremail: savedCustomer.customeremail ?? '',
            customeraddress: savedCustomer.customeraddress ?? '',
            customercity: savedCustomer.customercity ?? '',
            customerstate: savedCustomer.customerstate ?? '',
            customercountry: savedCustomer.customercountry ?? '',
            customerpincode: savedCustomer.customerpincode ?? ''
          });
        }
        this.errorMessage = '';
        this.cdr.detectChanges();
      }
    });
  }

  onCustomerChange(event: Event): void {
    const selectedValue = (event.target as HTMLSelectElement).value;
    const selectedCustomer = this.customerOptions.find((item) => item.customerid == selectedValue);
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
        customergstin: selectedCustomer.customergstin || ''
      });
      this.errorMessage = '';
    }
  }

  onProductSelect(index: number, event: any): void {
    const selectedProductName = event.option.value;
    const selectedProduct = this.productOptions.find((item) => item.productname === selectedProductName);
    const item = this.items.at(index);

    if (selectedProduct) {
      console.log('Selected product fields:', selectedProduct);
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

      // Move focus to qty input for this row
      setTimeout(() => {
        const qtyList = this.qtyInputs.toArray();
        if (qtyList[index]) {
          qtyList[index].nativeElement.focus();
          qtyList[index].nativeElement.select();
        }
      }, 50);
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
    // Wait for Angular to render the new row, then focus its description input
    setTimeout(() => {
      const descList = this.descInputs.toArray();
      const nextIndex = index + 1;
      if (descList[nextIndex]) {
        descList[nextIndex].nativeElement.focus();
      }
    }, 50);
  }

  /** True if we have enough data to create an invoice (customer, payment, at least one line with description + qty) */
  private canCreateInvoice(): boolean {
    const v = this.salesForm.value;
    if (!v.customerid && !v.customername) return false;
    if (!v.paymentmethod || v.paymentmethod === '') return false;
    if (v.paymentstatus === '' || v.paymentstatus == null) return false;
    const hasValidItem = this.items.controls.some(
      (ctrl) => ctrl.get('description')?.value && Number(ctrl.get('quantity')?.value) > 0
    );
    return hasValidItem;
  }

  onSubmit(): void {
    this.markFormGroupTouched();

    if (this.isEditMode) {
      if (!this.canCreateInvoice()) {
        this.errorMessage = 'Please ensure customer, payment method, payment status and at least one item are set.';
        return;
      }
      this.errorMessage = '';
      this.salesForm.patchValue({ updatedby: this.currentUserId, updateddate: new Date() });

      if (this.editingInvoiceno != null) {
        const payload = this.buildSalessummaryPayload();
        if (!payload || payload.items.length === 0) {
          this.errorMessage = 'Please add at least one item.';
          return;
        }
        this.salesService.updateSalesSummaryWithDetails(payload).subscribe({
          next: () => {
            this.getSalesSummaryDetails();
            this.getSalesSummaryListData();
            this.resetSalesForm();
            this.errorMessage = '';
          },
          error: (error: any) => {
            this.errorMessage = error?.error?.message || error?.message || 'Error updating sales. Please try again.';
          }
        });
      } else {
        const formData = { ...this.salesForm.value };
        if (!formData.salesid || formData.salesid === 0) {
          this.errorMessage = 'Sales ID is missing. Cannot update.';
          return;
        }
        this.salesService.updateSales(formData).subscribe({
          next: () => {
            this.getSalesSummaryDetails();
            this.getSalesSummaryListData();
            this.resetSalesForm();
            this.errorMessage = '';
          },
          error: (error: any) => {
            this.errorMessage = error.error?.message || error.message || 'Error updating sales. Please try again.';
          }
        });
      }
      return;
    }

    if (!this.canCreateInvoice()) {
      if (!this.salesForm.value.customerid && !this.salesForm.value.customername) {
        this.errorMessage = 'Please select a customer.';
      } else if (!this.salesForm.value.paymentmethod) {
        this.errorMessage = 'Please select payment method.';
      } else if (this.salesForm.value.paymentstatus === '' || this.salesForm.value.paymentstatus == null) {
        this.errorMessage = 'Please select payment status.';
      } else {
        this.errorMessage = 'Please add at least one item with description and quantity.';
      }
      return;
    }

    this.errorMessage = '';
    this.salesForm.patchValue({
      updatedby: this.currentUserId,
      updateddate: new Date()
    });
    this.createSales();
  }

  /** Format saledate to YYYY-MM-DD for API */
  private formatDateForApi(value: any): string {
    if (!value) return new Date().toISOString().split('T')[0];
    if (value instanceof Date) return value.toISOString().split('T')[0];
    if (typeof value === 'string') return value.split('T')[0];
    if (value && value.year && value.month != null && value.day != null) {
      const m = String(value.month).padStart(2, '0');
      const d = String(value.day).padStart(2, '0');
      return `${value.year}-${m}-${d}`;
    }
    return new Date().toISOString().split('T')[0];
  }

  /** Build DTO for salessummary/save (transaction: salessummary + salesdetail). New invoice: omit invoiceno (server generates per account+instance). Edit: include existing invoiceno. */
  buildSalessummaryPayload(): SaveSalessummaryDto | null {
    const v = this.salesForm.value;
    const user = this.authService.getUser() as any;
    const accountid = user?.accountid ?? user?.accountId ?? 1;
    const instanceid = user?.instanceid ?? user?.instanceId ?? 1;
    const now = new Date().toISOString().split('T')[0];

    const items: SalesDetailItemDto[] = this.items.controls
      .filter((ctrl) => ctrl.get('description')?.value && Number(ctrl.get('quantity')?.value) > 0)
      .map((ctrl) => {
      const i = ctrl.value;
      const qty = Number(i.quantity) || 0;
      const rate = Number(i.rate) || 0;
      const discPct = Number(i.discountPct) || 0;
      const gstPct = Number(i.gstPercent) || 0;
      const grossAmount = qty * rate;
      const discAmount = (grossAmount * discPct) / 100;
      const subtotal = grossAmount - discAmount;
      const gstAmount = (subtotal * gstPct) / 100;
      const cgst = gstAmount / 2;
      const sgst = gstAmount / 2;
      const grandtotal = subtotal + gstAmount;
      return {
        productid: i.productid ?? 0,
        productname: i.description || '',
        salehsn: i.hsnSac || null,
        saleqty: Math.round(qty),
        salemrp: String(rate),
        saledisper: discPct || null,
        salegstper: Math.round(gstPct),
        saleamount: Math.round(subtotal),
        salegrossamount: Math.round(grossAmount),
        saltotaldisc: Math.round(discAmount) || null,
        salesubtotal: Math.round(subtotal),
        saletotalcgst: Math.round(cgst),
        saletotalsgst: Math.round(sgst),
        saletotalgst: Math.round(gstAmount),
        salegrandtotal: Math.round(grandtotal),
      };
    });

    const grossSubtotal = this.getGrossSubtotal();
    const totalDiscount = this.getTotalDiscount();
    const tdisamount = Math.round(totalDiscount * 100) / 100;
    const tdisaper = grossSubtotal > 0 ? Math.round((totalDiscount / grossSubtotal) * 100 * 100) / 100 : null;
    const netSubtotal = parseFloat(v.subtotal) || 0;
    const totalgst = parseFloat(v.totalgst) || 0;
    const grandtotalVal = netSubtotal + totalgst;

    const payload: SaveSalessummaryDto = {
      invdate: this.formatDateForApi(v.saledate),
      customerid: Number(v.customerid) || 0,
      customername: v.customername || null,
      tgrossamount: Math.round(grossSubtotal * 100) / 100,
      tdisaper,
      tdisamount,
      tgstamount: totalgst,
      tsgstamount: totalgst / 2,
      tcgstamount: totalgst / 2,
      grandtotal: Math.round(grandtotalVal * 100) / 100,
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
    // Update flow: send existing invoiceno. New invoice: omit so server generates next per account+instance.
    if (this.editingInvoiceno != null) {
      payload.invoiceno = typeof v.invoiceno === 'number' && v.invoiceno > 0 ? v.invoiceno : this.editingInvoiceno;
    }
    return payload;
  }

  createSales(): void {
    this.errorMessage = '';
    this.salesForm.patchValue({
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      createddate: new Date(),
      updateddate: new Date()
    });

    const payload = this.buildSalessummaryPayload();
    if (!payload || payload.items.length === 0) {
      this.errorMessage = 'Please add at least one item.';
      return;
    }
    // New invoice: invoiceno omitted so server generates next per (accountid, instanceid)
    this.salesService.saveSalesSummaryWithDetails(payload).subscribe({
      next: (data: any) => {
        console.log('Sales summary saved', data);
        this.getSalesSummaryDetails();
        this.getSalesSummaryListData();
        this.resetSalesForm();
        this.errorMessage = '';
      },
      error: (err: any) => {
        console.warn('salessummary/save failed, falling back to sales/salessave', err);
        this.createSalesViaLegacyApi();
      }
    });
  }

  /** Fallback: use existing sales/salessave API when salessummary/save is not available */
  private createSalesViaLegacyApi(): void {
    this.salesService.addSales(this.salesForm.value).subscribe({
      next: (data: any) => {
        console.log('Sales saved via legacy API', data);
        this.getSalesSummaryDetails();
        this.getSalesSummaryListData();
        this.resetSalesForm();
        this.errorMessage = '';
      },
      error: (err: any) => {
        console.error('Error saving sales:', err);
        if (err.status === 400 && err.error?.message) {
          this.errorMessage = err.error.message;
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = err.message || 'Something went wrong. Please try again.';
        }
      }
    });
  }

  editItem(item: any): void {
    console.log('Editing sales item:', item);
    this.isFormOpen = true;
    this.isEditMode = true;
    this.errorMessage = '';
    
    if (!item || !item.salesid) {
      console.error('Invalid sales data for editing:', item);
      this.errorMessage = 'Invalid sales data. Cannot edit.';
      return;
    }
    
    // Clear existing items
    while (this.items.length !== 0) {
      this.items.removeAt(0);
    }
    
    // Add items from the sales record
    if (item.items && Array.isArray(item.items)) {
      item.items.forEach((salesItem: any) => {
        this.items.push(this.formBuilder.group({
          description: [salesItem.description || ''],
          hsnSac: [salesItem.hsnSac || ''],
          quantity: [salesItem.quantity || 1],
          rate: [salesItem.rate || 0],
          discountPct: [salesItem.discountPct || 0],
          gstPercent: [salesItem.gstPercent || 0],
          amount: [salesItem.amount || 0]
        }));
      });
    } else {
      // Single item format (backward compatibility)
      this.items.push(this.formBuilder.group({
        description: [item.productname || ''],
        hsnSac: [item.producthsncode || item.hsnSac || ''],
        quantity: [item.quantity || 1],
        rate: [item.unitprice || 0],
        discountPct: [item.discountPct || 0],
        gstPercent: [item.gstpercent || 0],
        amount: [item.totalamount || 0]
      }));
    }
    
    this.salesForm.patchValue({
      salesid: item.salesid,
      invoiceno: item.invoiceno || this.invoiceNumber,
      saledate: item.saledate ? new Date(item.saledate) : new Date(),
      customerid: item.customerid || '',
      customername: item.customername || '',
      customermobile: item.customermobile || '',
      customeremail: item.customeremail || '',
      customeraddress: item.customeraddress || '',
      customercity: item.customercity || '',
      customerstate: item.customerstate || '',
      customercountry: item.customercountry || '',
      customerpincode: item.customerpincode || '',
      customergstin: item.customergstin || '',
      subtotal: item.subtotal || 0,
      totalgst: item.totalgst || 0,
      grandtotal: item.grandtotal || item.totalamount || 0,
      paymentmethod: item.paymentmethod || '',
      paymentstatus: item.paymentstatus || '',
      notes: item.notes || '',
      isactive: item.isactive === true || item.isactive === 'true' || item.isactive === 1 ? 'true' : 'false',
      createddate: item.createddate || new Date(),
      updateddate: new Date(),
      createdby: item.createdby || this.currentUserId,
      updatedby: this.currentUserId
    }, { emitEvent: false });
    
    this.calculateTotals();
  }

  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete this sales record?`)) {
      this.salesService.deleteSales(item.salesid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getSalesSummaryDetails();
          this.getSalesSummaryListData();
        },
        error: (err: any) => {
          console.error('Error deleting sales', err);
          this.errorMessage = 'Error deleting sales. Please try again.';
        }
      });
    }
  }

  onExporting(e: any) {
    if (e.format === 'pdf') {
      const doc = new jsPDF({ orientation: 'landscape' });
      exportDataGridToPdf({
        jsPDFDocument: doc,
        component: e.component,
      }).then(() => {
        doc.save('SalesData.pdf');
      });
    } else {
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet('Sales Data');
      exportDataGridToExcel({
        component: e.component,
        worksheet: worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
          saveAs(blob, 'SalesData.xlsx');
        });
      });
    }
    e.cancel = true;
  }

  toggleForm(): void {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.errorMessage = '';
    this.getCurrentUserId();
    this.generateInvoiceNumber();
    this.initializeForm();
    const isEditFromQuery = this.route.snapshot.queryParamMap.get('invoiceno') != null;
    setTimeout(() => {
      if (this.salesForm) {
        const today = new Date();
        this.salesForm.patchValue({ saledate: today }, { emitEvent: false });
        if (!isEditFromQuery) {
          const user = this.authService.getUser() as any;
          const accountId = user?.accountid ?? user?.accountId ?? 1;
          const instanceId = user?.instanceid ?? user?.instanceId ?? 1;
          this.salesService.getNextInvoiceNo(accountId, instanceId).subscribe({
            next: (res) => {
              if (this.salesForm && res?.nextInvoiceNo != null) {
                this.salesForm.patchValue({ invoiceno: res.nextInvoiceNo }, { emitEvent: false });
                this.invoiceNumber = this.getDisplayInvoiceNo(res.nextInvoiceNo);
                this.cdr.detectChanges();
              }
            }
          });
        }
        this.cdr.detectChanges();
      }
      // Focus first product description input
      const descList = this.descInputs.toArray();
      if (descList[0]) {
        descList[0].nativeElement.focus();
      }
    }, 150);
  }

  resetSalesForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.editingInvoiceno = null;
    this.errorMessage = '';
    this.getCurrentUserId();
    this.generateInvoiceNumber();
    if (this.router.url.includes('salesadd')) {
      this.router.navigate(['/pages/sales']);
    }
  }

  markFormGroupTouched(): void {
    Object.keys(this.salesForm.controls).forEach(key => {
      const control = this.salesForm.get(key);
      control?.markAsTouched();
    });
    
    this.items.controls.forEach(item => {
      const formGroup = item as FormGroup;
      Object.keys(formGroup.controls).forEach(key => {
        const control = formGroup.get(key);
        control?.markAsTouched();
      });
    });
  }

  getSubtotal(): number {
    return parseFloat(this.salesForm.get('subtotal')?.value || 0);
  }

  getTotalDiscount(): number {
    let total = 0;
    this.items.controls.forEach((item, i) => {
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
}
