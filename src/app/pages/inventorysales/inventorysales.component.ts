import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { of } from 'rxjs';
import { filter, catchError } from 'rxjs/operators';
import { InventorysalesService } from '../service/inventorysales.service';
import { CustomerService } from '../service/customer.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { InstanceService } from '../service/instance.service';
import { GstService } from '../service/gst.service';
import { SettingsService } from '../service/settings.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid as exportDataGridToExcel } from 'devextreme/excel_exporter';
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { Workbook } from 'exceljs';
import jsPDF from 'jspdf';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';
import { SaveInventorysummaryDto, InventoryDetailItemDto } from './models/save-inventorysummary.dto';
import { formatDateUtcDdSlashMmSlashYyyy } from '../service/date-utils';
import { formatDisplayDecimal } from '../../core/display-number-format';

@Component({
  selector: 'app-inventorysales',
  templateUrl: './inventorysales.component.html',
  styleUrls: ['./inventorysales.component.css'],
})
export class InventorysalesComponent implements OnInit {
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

  @HostListener('document:keydown', ['$event'])
  onCtrlS(event: KeyboardEvent): void {
    if ((event.ctrlKey || event.metaKey) && event.key === 's') {
      if (!this.isFormOpen || !this.salesForm?.valid) return;
      if (this.isEditMode && !this.permissionService.hasPermission('sales', 'update')) return;
      if (!this.isEditMode && !this.permissionService.hasPermission('sales', 'create')) return;
      event.preventDefault();
      this.onSubmit();
    }
  }

  isFormOpen = false;
  isEditMode = false;
  sales!: any[];
  salesForm!: FormGroup;
  customerOptions: any[] = [];
  customerSearchCtrl = new FormControl('');
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

  /** When true, batch no and expiry columns are hidden (setting: hideBatchNoAndExpiryInProductSales) */
  get hideBatchNoAndExpiry(): boolean {
    return !!this.settingsService.getSalesSettings().hideBatchNoAndExpiryInProductSales;
  }

  get allowDecimalQty(): boolean {
    return !!this.settingsService.getSalesSettings().allowDecimalQtyInSales;
  }

  constructor(
    private inventorysalesService: InventorysalesService,
    private customerService: CustomerService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private permissionService: PermissionService,
    private gstService: GstService,
    private instanceService: InstanceService,
    private settingsService: SettingsService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  get isInventorySalesAddPage(): boolean {
    return this.router.url.includes('inventorysalesadd');
  }

  goBackToInventorySales(): void {
    this.editingInvoiceno = null;
    this.router.navigate(['/pages/inventorysales']);
  }

  /** Edit from inventory sales summary table: go to inventorysalesadd?invoiceno=X */
  editSummaryItem(item: any): void {
    const invoiceno = item?.invoiceno != null ? item.invoiceno : null;
    if (invoiceno == null) {
      this.errorMessage = 'Invalid invoice. Cannot edit.';
      return;
    }
    this.router.navigate(['/pages/inventorysalesadd'], { queryParams: { invoiceno } });
  }

  /** Download invoice PDF using salesprint API data (salessummary, salesdetails, instance, customer). */
  downloadInvoicePdf(item: any): void {
    const invoiceno = item?.invoiceno ?? item?.salessummaryid;
    if (invoiceno == null) {
      this.errorMessage = 'Invalid invoice. Cannot download PDF.';
      return;
    }
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.inventorysalesService.getInventoryPrintData(invoiceno, accountId, instanceId).subscribe({
      next: (data: any) => {
        const s = data?.inventorysummary ?? data?.salessummary ?? data?.summary ?? data;
        const details = data?.inventorydetails ?? data?.salesdetails ?? data?.details ?? data?.items ?? data?.salesdetail ?? data?.sales_details ?? s?.details ?? s?.items ?? [];
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
            customeremail: s.customeremail ?? s.customer_email ?? customerFromApi.customeremail ?? customerFromApi.email ?? '',
            customergstno: s.customergstno ?? s.customer_gstno ?? customerFromApi.customergstno ?? customerFromApi.customergstin ?? customerFromApi.gstin ?? ''
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
          this.inventorysalesService.getCustomerById(s.customerid ?? s.customer_id).pipe(catchError(() => of(null))).subscribe((cust: any) => {
            if (cust) {
              Object.assign(s, {
                customeraddress: s.customeraddress ?? cust.customeraddress ?? cust.address ?? '',
                customercity: s.customercity ?? cust.customercity ?? cust.city ?? '',
                customerstate: s.customerstate ?? cust.customerstate ?? cust.state ?? '',
                customerpincode: s.customerpincode ?? cust.customerpincode ?? cust.pincode ?? '',
                customermobile: s.customermobile ?? cust.customermobile ?? cust.customermobileno ?? cust.mobile ?? '',
                customeremail: s.customeremail ?? cust.customeremail ?? cust.email ?? '',
                customergstno: s.customergstno ?? cust.customergstno ?? cust.customergstin ?? cust.gstin ?? ''
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

  private formatExact(val: number, decimals = 2): string {
    const v = Number(val);
    if (!Number.isFinite(v)) return '0.00';
    const factor = Math.pow(10, decimals);
    const truncated = Math.floor(v * factor) / factor;
    return truncated.toFixed(decimals);
  }

  private generateInvoicePdf(summary: any, details: any[], invoiceno: number, instance: any): void {
    const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const pageW = doc.internal.pageSize.getWidth();
    const left = 14;
    const right = pageW - 14;
    const rightCol = 105;
    let y = 14;

    const invdate = summary.invdate ?? summary.saledate ?? new Date();
    const dateStr = invdate
      ? (() => {
          const d = invdate instanceof Date ? invdate : new Date(invdate);
          if (isNaN(d.getTime())) return '-';
          const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
          return `${String(d.getUTCDate()).padStart(2, '0')} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`;
        })()
      : '-';

    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('GST Invoice', left, y);
    y += 8;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text(`Invoice No: ${this.getDisplayInvoiceNoSequenceOnly(invoiceno) || invoiceno}`, left, y);
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
    const custGst = summary.customergstno ?? summary.customer_gstno ?? summary.customergstin ?? summary.customer_gstin ?? summary.gstin;
    if (custGst) { doc.text(`GSTIN: ${custGst}`, rightCol, yRight); yRight += 5; }

    y = Math.max(yLeft, yRight) + 8;

    const hideBatchExpiry = this.hideBatchNoAndExpiry;
    const colW = hideBatchExpiry
      ? [8, 50, 16, 12, 18, 14, 14, 24]  // S.No, Description, HSN, Qty, Rate, Disc %, GST %, Amount
      : [8, 34, 16, 16, 16, 12, 18, 14, 14, 24];
    const headers = hideBatchExpiry
      ? ['S.No', 'Description', 'HSN', 'Qty', 'Rate', 'Disc %', 'GST %', 'Amount']
      : ['S.No', 'Description', 'Batch', 'Expiry', 'HSN', 'Qty', 'Rate', 'Disc %', 'GST %', 'Amount'];
    doc.setDrawColor(0, 0, 0);
    doc.rect(left, y, colW.reduce((a, b) => a + b, 0), 8);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    let x = left;
    headers.forEach((h, i) => { doc.text(h, x + 2, y + 5.5); x += colW[i]; });
    doc.setFont('helvetica', 'normal');
    y += 10;

    const formatDateDdMmYyyy = (val: any): string => {
      if (!val) return '-';
      const d = val instanceof Date ? val : new Date(val);
      if (isNaN(d.getTime())) return '-';
      const dd = String(d.getUTCDate()).padStart(2, '0');
      const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
      const yyyy = d.getUTCFullYear();
      return `${dd}-${mm}-${yyyy}`;
    };

    doc.setFontSize(8);
    const descMaxLen = hideBatchExpiry ? 42 : 28;
    details.forEach((d: any, idx: number) => {
      if (y > 260) { doc.addPage(); y = 20; }
      const productname = String(d.productname ?? d.product_name ?? d.description ?? '-');
      const batchno = String(d.batchno ?? d.batch_no ?? '');
      const hsn = String(d.salehsn ?? d.sale_hsn ?? d.hsnSac ?? '-');
      const expirydate = formatDateDdMmYyyy(d.expirydate ?? d.expiry_date ?? null);
      const qty = Number(d.saleqty ?? d.sale_qty ?? d.quantity ?? 0) || 0;
      const rate = parseFloat(String(d.salemrp ?? d.sale_mrp ?? d.rate ?? 0)) || 0;
      const disc = parseFloat(String(d.saledisper ?? d.sale_dis_per ?? d.discountPct ?? 0)) || 0;
      const gst = parseFloat(String(d.salegstper ?? d.sale_gst_per ?? d.gstPercent ?? 0)) || 0;
      const lineTotal = parseFloat(String(d.salegrandtotal ?? d.sale_grand_total ?? d.amount ?? 0)) || 0;
      const row = hideBatchExpiry
        ? [String(idx + 1), productname.substring(0, descMaxLen), hsn, String(qty), this.formatExact(rate), this.formatExact(disc, 1), this.formatExact(gst, 1), this.formatExact(lineTotal)]
        : [String(idx + 1), productname.substring(0, 28), batchno || '-', expirydate, hsn, String(qty), this.formatExact(rate), this.formatExact(disc, 1), this.formatExact(gst, 1), this.formatExact(lineTotal)];
      x = left;
      row.forEach((val, i) => { doc.text(val, x + 2, y + 4); x += colW[i]; });
      y += 6;
    });
    y += 8;

    const sumTaxable = details.reduce((acc: number, d: any) => acc + (parseFloat(String(d.salesubtotal ?? d.sale_subtotal ?? 0)) || 0), 0);
    const tgross = parseFloat(String(summary.tgrossamount ?? summary.tgross_amount ?? 0)) || 0;
    const sumFromDetailsGross = details.reduce((acc: number, d: any) => acc + (parseFloat(String(d.salegrossamount ?? d.sale_gross_amount ?? 0)) || 0), 0);
    const totalgst = parseFloat(String(summary.tgstamount ?? summary.tgst_amount ?? 0)) || 0;
    const grandtotal = parseFloat(String(summary.grandtotal ?? 0)) || 0;
    const tgrossFinal = sumTaxable > 0 ? sumTaxable : (tgross > 0 ? tgross : (sumFromDetailsGross > 0 ? sumFromDetailsGross : Math.max(0, grandtotal - totalgst)));
    const tdis = parseFloat(String(summary.tdisamount ?? summary.tdis_amount ?? 0)) || 0;
    const sumFromDetailsDisc = details.reduce((acc: number, d: any) => acc + (parseFloat(String(d.saltotaldisc ?? d.sale_total_disc ?? 0)) || 0), 0);
    const tdisFinal = tdis > 0 ? tdis : (sumFromDetailsDisc > 0 ? sumFromDetailsDisc : 0);
    const subtotal = tgrossFinal - tdisFinal;
    const totalLeft = left + colW.slice(0, -1).reduce((a, b) => a + b, 0);
    const amountColW = colW[colW.length - 1];
    doc.setFont('helvetica', 'bold');
    doc.text('Gross Amount:', totalLeft - 50, y);
    doc.text(`Rs.${this.formatExact(tgrossFinal)}`, totalLeft + amountColW - 22, y);
    y += 6;
    doc.setFont('helvetica', 'normal');
    doc.text('Total Discount:', totalLeft - 50, y);
    doc.text(`Rs.${this.formatExact(tdisFinal)}`, totalLeft + amountColW - 22, y);
    y += 6;
    doc.text('Subtotal:', totalLeft - 50, y);
    doc.text(`Rs.${this.formatExact(subtotal)}`, totalLeft + amountColW - 22, y);
    y += 6;
    doc.setFont('helvetica', 'bold');
    doc.text('Total GST:', totalLeft - 50, y);
    doc.text(`Rs.${this.formatExact(totalgst)}`, totalLeft + amountColW - 22, y);
    y += 8;
    doc.setDrawColor(0, 0, 0);
    doc.rect(totalLeft - 55, y - 5, amountColW + 55, 12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Grand Total:', totalLeft - 50, y + 3);
    doc.text(`Rs.${this.formatExact(grandtotal)}`, totalLeft + amountColW - 22, y + 3);
    y += 12;
    if (tdisFinal > 0) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
      doc.text('Your Savings:', totalLeft - 50, y + 3);
      doc.text(`Rs.${this.formatExact(tdisFinal)}`, totalLeft + amountColW - 22, y + 3);
      y += 8;
    }
    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`Payment Method: ${summary.paymenttype ?? summary.payment_type ?? '-'}`, left, y);
    doc.text(`Payment Status: ${summary.paymentstatus === true || summary.paymentstatus === 'Paid' ? 'Paid' : (summary.paymentstatus || '-')}`, left, y + 6);

    doc.save(`Invoice-${this.getDisplayInvoiceNoSequenceOnly(invoiceno) || invoiceno}.pdf`);
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
    this.inventorysalesService.deleteInventorySummary(invoiceno, accountId, instanceId).subscribe({
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
    this.inventorysalesService.getInventorySummaryByInvoice(invoiceno, accountId, instanceId).subscribe({
      next: (data: any) => {
        this.isLoadingInvoiceForEdit = false;
        const details = data?.details ?? data?.inventorydetails ?? data?.items ?? [];
        console.log('[InventorySales Edit] API response', { invoiceno, detailCount: Array.isArray(details) ? details.length : 0, raw: data });
        this.populateFormFromSummary(data, invoiceno);
        this.enrichCustomerAddressIfNeeded();
        this.cdr.detectChanges();
      },
      error: (err: any) => {
        this.isLoadingInvoiceForEdit = false;
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
          customergstin: cust.customergstno ?? cust.customergstin ?? cust.gstin ?? ''
        }, { emitEvent: false });
        this.cdr.detectChanges();
      }
    };

    const list = Array.isArray(this.customerOptions) ? this.customerOptions : [];
    if (list.length > 0) {
      applyCustomer(list);
    } else {
      this.inventorysalesService.getCustomers().subscribe({
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
    const details = data?.details ?? data?.inventorydetails ?? data?.items ?? data?.salesdetails ?? data?.salesdetail ?? data?.sales_details ?? s?.details ?? s?.items ?? [];
    console.log('[InventorySales Edit] populateFormFromSummary', { detailListLength: Array.isArray(details) ? details.length : 0, details });
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
        const expVal = d.expirydate ?? d.expiry_date ?? null;
        const expiryStr = expVal ? (expVal instanceof Date ? expVal.toISOString().split('T')[0] : String(expVal).split('T')[0]) : '';
        this.items.push(this.formBuilder.group({
          stockid: [d.stockid ?? d.stock_id ?? null],
          productid: [d.productid ?? d.product_id ?? null],
          description: [String(d.productname ?? d.product_name ?? d.description ?? '')],
          hsnSac: [String(d.salehsn ?? d.sale_hsn ?? d.hsnSac ?? '')],
          batchno: [String(d.batchno ?? d.batch_no ?? '')],
          expirydate: [expiryStr],
          productpackqty: [d.productpackqty ?? d.product_pack_qty ?? 1],
          availableQty: [0],
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
    const paymentMethodValue = s.paymenttype ?? s.payment_type ?? s.paymentmethod ?? '';

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
      paymentmethod: paymentMethodValue,
      paymentstatus: String(paymentMethodValue).trim().toLowerCase() === 'credit' ? 'Pending' : paymentStatusValue,
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
  private isLoadingInvoiceForEdit = false;

  ngOnInit(): void {
    this.getCurrentUserId();
    this.generateInvoiceNumber();
    this.initializeForm();
    this.loadSalesSummaryWhenOnList();
    this.getCustomers();
    if (this.router.url.includes('inventorysalesadd')) {
      this.toggleForm();
      this.tryLoadInvoiceFromQuery();
    }
    this.getProducts();
    this.getGstOptions();
    this.router.events.pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd)).subscribe((e) => {
      const url = e.urlAfterRedirects || '';
      if (url.includes('inventorysalesadd')) {
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

  /** Load list/counts only when on inventory sales list view (skip on inventorysalesadd edit) */
  private loadSalesSummaryWhenOnList(): void {
    if (!this.router.url.includes('inventorysalesadd')) {
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
    if (this.lastLoadedInvoiceno === num || this.isLoadingInvoiceForEdit) return;
    this.lastLoadedInvoiceno = num;
    this.isLoadingInvoiceForEdit = true;
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

    // Business rule: credit sales must default to Pending payment status.
    this.salesForm.get('paymentmethod')?.valueChanges.subscribe((method) => {
      if (String(method || '').trim().toLowerCase() === 'credit') {
        this.salesForm.patchValue({ paymentstatus: 'Pending' }, { emitEvent: false });
      }
    });
    this.salesForm.get('paymentstatus')?.valueChanges.subscribe((status) => {
      const method = this.salesForm.get('paymentmethod')?.value;
      if (String(method || '').trim().toLowerCase() === 'credit' && String(status || '') !== 'Pending') {
        this.salesForm.patchValue({ paymentstatus: 'Pending' }, { emitEvent: false });
      }
    });

    // Subscribe to form changes to calculate totals
    this.salesForm.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
  }

  createItemFormGroup(): FormGroup {
    const qtyMin = this.allowDecimalQty ? 0.01 : 1;
    return this.formBuilder.group({
      stockid: [null as number | null],
      productid: [null as number | null],
      description: ["", Validators.required],
      hsnSac: [""],
      batchno: [""],
      expirydate: [""],
      productpackqty: [1],
      availableQty: [0],
      quantity: [null, [Validators.required, Validators.min(qtyMin)]],
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
    const gstPercent = parseFloat(item.get('gstPercent')?.value || 0);
    const grossAmount = quantity * rate;
    const discountValue = (grossAmount * discountPct) / 100;
    const taxableBase = grossAmount - discountValue;
    const gstInclusive = this.settingsService.getSalesSettings().gstInclusive;
    const amount = gstInclusive ? taxableBase : taxableBase * (1 + gstPercent / 100);
    item.patchValue({ amount: amount.toFixed(2) }, { emitEvent: false });
    this.calculateTotals();
  }

  onQtyInput(index: number): void {
    if (!this.allowDecimalQty) {
      const ctrl = this.items.at(index)?.get('quantity');
      const val = Number(ctrl?.value);
      if (!isNaN(val)) {
        const intVal = Math.trunc(val);
        if (val !== intVal) {
          ctrl?.setValue(intVal, { emitEvent: false });
        }
      }
    }
    this.calculateItemAmount(index);
  }

  onQtyKeydown(event: KeyboardEvent): void {
    if (this.allowDecimalQty) return;
    if (event.key === '.' || event.key === ',' || event.key === 'Decimal') {
      event.preventDefault();
    }
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

  /** For grid: Sale Date in UTC (avoids timezone shift). */
  saleDateCellValue = (rowData: any): string =>
    formatDateUtcDdSlashMmSlashYyyy(rowData?.saledate ?? rowData?.invdate);

  /** Product sales summary grid: 2 decimals (API may return numeric as string; DevExpress format is unreliable). */
  inventoryDisPercentDisplayText = (cellInfo: { value: unknown }): string => {
    const v = cellInfo.value;
    if (v == null || v === '') return '';
    const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/,/g, ''));
    if (!Number.isFinite(n)) return String(v);
    return formatDisplayDecimal(n);
  };

  /** Product sales summary grid: INR with 2 fraction digits. */
  inventoryGrandTotalDisplayText = (cellInfo: { value: unknown }): string => {
    const v = cellInfo.value;
    if (v == null || v === '') return '';
    const n = typeof v === 'number' ? v : parseFloat(String(v).replace(/,/g, ''));
    if (!Number.isFinite(n)) return String(v ?? '');
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(n);
  };

  /** Invoice number with only the sequence part (for listing; hides account and instance). */
  getDisplayInvoiceNoSequenceOnly(invoiceno: number | null | undefined): string {
    if (invoiceno == null) return '';
    const n = Number(invoiceno);
    if (!Number.isFinite(n) || n < 0) return '';
    const seq = n < InventorysalesComponent.INVOICE_NO_LEGACY_THRESHOLD ? n : (n % 1e6) || 1;
    return InventorysalesComponent.formatSequencePart(seq);
  }

  /** Format sequence as 6 digits (no comma): 1 → "000001". */
  private static formatSequencePart(sequence: number): string {
    return String(Math.max(0, Math.floor(sequence))).padStart(6, '0');
  }

  /** Decode stored invoiceno and format as "4907000001" (account, instance 2-digit, sequence 6-digit, no commas). */
  getDisplayInvoiceNo(invoiceno: number | null | undefined): string {
    if (invoiceno == null) return this.invoiceNumber || '';
    const n = Number(invoiceno);
    if (!Number.isFinite(n) || n < 0) return '';
    const seqPart = InventorysalesComponent.formatSequencePart(n < InventorysalesComponent.INVOICE_NO_LEGACY_THRESHOLD ? n : (n % 1e6) || 1);
    if (n < InventorysalesComponent.INVOICE_NO_LEGACY_THRESHOLD) return `0000${seqPart}`;
    const instanceId = Math.floor(n / 1e6) % 10000;
    const accountId = Math.floor(n / 1e10);
    return `${accountId}${String(instanceId).padStart(2, '0')}${seqPart}`;
  }

  /** Display value for Invoice No field (sequence only; form still holds encoded value for payload). */
  get invoiceDisplayValue(): string {
    const v = this.salesForm?.get('invoiceno')?.value;
    return this.getDisplayInvoiceNoSequenceOnly(v) || this.invoiceNumber || '';
  }

  /** Current user's account and instance (for scoping invoice get/delete/print when unique per account+instance). */
  private getCurrentAccountAndInstance(): { accountId: number; instanceId: number } {
    const user = this.authService.getUser() as any;
    return {
      accountId: user?.accountid ?? user?.accountId ?? 1,
      instanceId: user?.instanceid ?? user?.instanceId ?? 1,
    };
  }

  /** Load next invoice number from API (GET next-invoice-no) and set on form (new invoice only, not on edit) */
  loadNextInvoiceNumber(): void {
    if (this.editingInvoiceno != null) return;
    const invoicenoParam = this.route?.snapshot?.queryParamMap?.get('invoiceno') ?? this.route?.root?.snapshot?.queryParamMap?.get('invoiceno');
    if (invoicenoParam != null && invoicenoParam !== '') return;
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.inventorysalesService.getNextInvoiceNo(accountId, instanceId).subscribe({
      next: (res) => {
        if (this.salesForm && res?.nextInvoiceNo != null) {
          this.salesForm.patchValue({ invoiceno: res.nextInvoiceNo }, { emitEvent: false });
          this.invoiceNumber = this.getDisplayInvoiceNoSequenceOnly(res.nextInvoiceNo);
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
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.inventorysalesService.getInventorySummaryCounts(accountId, instanceId).subscribe({
      next: (response: any) => {
        this.activeSales = response.activeInventorysummary ?? response.activeSalessummary ?? response.activeSales ?? response.active ?? 0;
        this.deactiveSales = response.deactiveInventorysummary ?? response.deactiveSalessummary ?? response.deactiveSales ?? response.deactive ?? response.inactive ?? 0;
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
      ? this.inventorysalesService.getInventorySummaryList(accountId, instanceId ?? undefined)
      : this.inventorysalesService.getInventorySummaryList();
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
        this.salesSummaryList = filtered.map((item: any) => {
          const gRaw = item.grandtotal ?? item.grandTotal;
          const grandNum =
            gRaw != null && gRaw !== ''
              ? parseFloat(String(gRaw).replace(/,/g, ''))
              : NaN;
          const tdRaw = item.tdisaper;
          const tdNum =
            tdRaw != null && tdRaw !== ''
              ? parseFloat(String(tdRaw).replace(/,/g, ''))
              : null;
          return {
            ...item,
            saledate: item.invdate ?? item.invoicedate ?? item.invoiceDate ?? item.saledate ?? item.date,
            grandtotal: Number.isFinite(grandNum) ? grandNum : 0,
            tdisaper: tdNum != null && Number.isFinite(tdNum) ? tdNum : null,
          };
        });
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
    this.inventorysalesService.getCustomers().subscribe({
      next: (customers) => {
        const raw = Array.isArray(customers)
          ? customers
          : (customers as any)?.list ?? (customers as any)?.data ?? (customers as any)?.records ?? [];
        if (accountId != null) {
          const filtered = this.byAccountId(raw, accountId);
          // Some customer-list payloads omit accountid fields; don't hide all options in that case.
          this.customerOptions = filtered.length > 0 ? filtered : raw;
        } else {
          this.customerOptions = raw;
        }
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }

  /** Load product options from currentstock (inventory sales uses stock, not product master) */
  getProducts(): void {
    const { accountId, instanceId } = this.getCurrentAccountAndInstance();
    this.inventorysalesService.getProductsFromCurrentStock(accountId, instanceId).subscribe({
      next: (items) => {
        const raw = Array.isArray(items) ? items : [];
        const filtered = this.hideBatchNoAndExpiry
          ? raw
          : raw.filter((p: any) => !this.settingsService.shouldHideProductForExpiry(p.expirydate));
        this.productOptions = filtered;
        this.filteredProducts = this.items.controls.map(() => [...filtered]);
        this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
      },
      error: (err) => {
        console.error('Error fetching products from current stock:', err);
        this.productOptions = [];
        this.filteredProducts = this.items.controls.map(() => []);
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

  /** Filter customers by name or phone for search */
  get filteredCustomers(): any[] {
    const q = (this.customerSearchCtrl?.value || '').trim().toLowerCase();
    // Prevent dropdown opening with full list on initial focus/page load.
    if (!q) return [];
    return this.customerOptions.filter(c => {
      const name = (c.customername || c.customer_name || '').toLowerCase();
      const mobile = (c.customermobile || c.customermobileno || c.customer_mobile || c.mobile || '').toString();
      return name.includes(q) || mobile.includes(q);
    });
  }

  /**
   * Mat-autocomplete displayWith runs for the control value while typing (string) and after option select (object).
   * Returning '' for every value clears the input as the user types — pass through strings; show name for objects.
   */
  customerDisplayFn = (value: any): string => {
    if (value == null || value === '') return '';
    if (typeof value === 'string') return value;
    return String(value.customername ?? value.customer_name ?? '');
  };

  onCustomerSelect(customer: any): void {
    if (!customer) return;
    this.salesForm.patchValue({
      customerid: customer.customerid ?? customer.customer_id ?? customer.id ?? '',
      customername: customer.customername || customer.customer_name || '',
      customermobile: customer.customermobile || customer.customermobileno || customer.customer_mobile || customer.mobile || '',
      customeremail: customer.customeremail || customer.customer_email || customer.email || '',
      customeraddress: customer.customeraddress || customer.address || '',
      customercity: customer.customercity || customer.city || '',
      customerstate: customer.customerstate || customer.state || '',
      customercountry: customer.customercountry || customer.country || '',
      customerpincode: customer.customerpincode || customer.pincode || '',
      customergstin: customer.customergstno || customer.customergstin || customer.customer_gstin || customer.gstin || ''
    });
    this.customerSearchCtrl.setValue('', { emitEvent: false });
    this.errorMessage = '';
    // Focus first description input after customer is selected
    this.cdr.detectChanges();
    setTimeout(() => {
      const descList = this.descInputs?.toArray();
      if (descList?.[0]) descList[0].nativeElement.focus();
    }, 50);
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
    this.customerSearchCtrl.setValue('', { emitEvent: false });
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
    this.inventorysalesService.getCustomers().subscribe({
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
            customergstin: match.customergstno ?? match.customergstin ?? ''
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
            customerpincode: savedCustomer.customerpincode ?? '',
            customergstin: savedCustomer.customergstno ?? savedCustomer.customergstin ?? ''
          });
        }
        this.errorMessage = '';
        this.cdr.detectChanges();
      }
    });
  }


  /** For autocomplete display when value is currentstock object */
  getProductDisplayFn(): (val: any) => string {
    return (val: any) => (val && typeof val === 'object' && val.productname) ? val.productname : (val || '');
  }

  /** True if product expires within 30 days (for highlight) */
  isExpiringWithin30Days(product: any): boolean {
    const exp = product?.expirydate;
    if (!exp) return false;
    const expDate = typeof exp === 'string' ? new Date(exp) : exp;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const cutoff = new Date(today);
    cutoff.setDate(cutoff.getDate() + 30);
    cutoff.setHours(23, 59, 59, 999);
    const expOnly = new Date(expDate);
    expOnly.setHours(0, 0, 0, 0);
    return expOnly > today && expDate <= cutoff;
  }

  /** Single-line label: "ProductName | Batch no-X | Avail Qty- Y" (batch when !hideBatchNoAndExpiry) */
  getProductOptionLabel(product: any): string {
    if (!product) return '';
    const name = product.productname || '';
    const batch = this.hideBatchNoAndExpiry ? '' : (product.batchno ? ` | Batch no-${product.batchno}` : '');
    const qty = Number(product.productqty ?? 0);
    const avail = ` | Avail Qty- ${formatDisplayDecimal(qty)}`;
    return `${name}${batch}${avail}`.trim();
  }

  onProductSelect(index: number, event: any): void {
    const selected = event.option?.value;
    if (!selected) return;
    const item = this.items.at(index);
    const availQty = parseFloat(String(selected.productqty ?? 0)) || 0;
    const productid = selected.productid ?? null;

    const applyProduct = (prod: any) => {
      const gstPct = prod?.productgstpercent ?? prod?.totalgstpercent ?? prod?.gstpercent ?? 0;
      const rate = prod?.productlastprice ?? prod?.productlastmrp ?? prod?.price ?? 0;
      const expiryVal = selected.expirydate;
      const expiryStr = expiryVal
        ? (expiryVal instanceof Date ? expiryVal.toISOString().split('T')[0] : String(expiryVal).split('T')[0])
        : '';
      item.patchValue({
        stockid: selected.stockid ?? null,
        productid: productid,
        description: selected.productname || '',
        hsnSac: prod?.producthsncode ?? selected.producthsncode ?? '',
        batchno: selected.batchno ?? '',
        expirydate: expiryStr,
        productpackqty: selected.productpackqty ?? 1,
        availableQty: availQty,
        rate: Number(rate) || 0,
        discountPct: 0,
        quantity: availQty > 0 ? 1 : null,
        gstPercent: Number(gstPct) || 0
      }, { emitEvent: false });
      this.calculateItemAmount(index);
    };

    if (productid) {
      this.inventorysalesService.getProductDetails(productid).pipe(
        catchError(() => of(null))
      ).subscribe((prod) => {
        applyProduct(prod || {});
        setTimeout(() => {
          const qtyList = this.qtyInputs.toArray();
          if (qtyList[index]) {
            qtyList[index].nativeElement.focus();
            qtyList[index].nativeElement.select();
          }
        }, 50);
      });
    } else {
      applyProduct({});
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

  /** Validate sale qty does not exceed available stock */
  private validateQuantityVsStock(): string | null {
    for (let i = 0; i < this.items.length; i++) {
      const ctrl = this.items.at(i);
      const qty = Number(ctrl.get('quantity')?.value || 0);
      const avail = Number(ctrl.get('availableQty')?.value || 0);
      const desc = ctrl.get('description')?.value;
      if (desc && qty > 0 && avail > 0 && qty > avail) {
        return `Quantity (${qty}) exceeds available stock (${avail}) for "${desc}"`;
      }
    }
    return null;
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
        const payload = this.buildInventorysummaryPayload();
        if (!payload || payload.items.length === 0) {
          this.errorMessage = 'Please add at least one item.';
          return;
        }
        const qtyErr = this.validateQuantityVsStock();
        if (qtyErr) {
          this.errorMessage = qtyErr;
          return;
        }
        this.inventorysalesService.updateInventorySummaryWithDetails(payload).subscribe({
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
        const payload = this.buildInventorysummaryPayload();
        const invoiceno = Number(this.salesForm.get('invoiceno')?.value) || this.editingInvoiceno;
        if (!payload || payload.items.length === 0 || !invoiceno) {
          this.errorMessage = 'Cannot update: invoice number or items missing.';
          return;
        }
        payload.invoiceno = invoiceno;
        this.inventorysalesService.updateInventorySummaryWithDetails(payload).subscribe({
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
    const qtyErr = this.validateQuantityVsStock();
    if (qtyErr) {
      this.errorMessage = qtyErr;
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

  /** Build DTO for inventorysummary/save (transaction: inventorysummary + inventorydetail). New invoice: omit invoiceno (server generates per account+instance). Edit: include existing invoiceno. */
  buildInventorysummaryPayload(): SaveInventorysummaryDto | null {
    const v = this.salesForm.value;
    const user = this.authService.getUser() as any;
    const accountid = user?.accountid ?? user?.accountId ?? 1;
    const instanceid = user?.instanceid ?? user?.instanceId ?? 1;
    const now = new Date().toISOString().split('T')[0];
    const round2 = (n: number) => Math.round(n * 100) / 100;

    const gstInclusive = this.settingsService.getSalesSettings().gstInclusive;
    const items: InventoryDetailItemDto[] = this.items.controls
      .filter((ctrl) => ctrl.get('description')?.value && Number(ctrl.get('quantity')?.value) > 0)
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
      const saleqtyVal = this.allowDecimalQty ? round2(qty) : Math.round(qty);
      return {
        stockid: i.stockid ?? undefined,
        productid: i.productid ?? 0,
        productname: i.description || '',
        salehsn: i.hsnSac || null,
        batchno: i.batchno ?? '',
        expirydate: i.expirydate ?? now,
        productpackqty: Number(i.productpackqty) || 1,
        saleqty: saleqtyVal,
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
    const tdisamount = round2(totalDiscount);
    const tdisaper = grossSubtotal > 0 ? round2((totalDiscount / grossSubtotal) * 100) : null;
    const netSubtotal = parseFloat(v.subtotal) || 0;
    const totalgst = parseFloat(v.totalgst) || 0;
    const grandtotalVal = netSubtotal + totalgst;

    const payload: SaveInventorysummaryDto = {
      invdate: this.formatDateForApi(v.saledate),
      customerid: Number(v.customerid) || 0,
      customername: v.customername || null,
      tgrossamount: round2(netSubtotal),
      tdisaper,
      tdisamount,
      tgstamount: round2(totalgst),
      tsgstamount: round2(totalgst / 2),
      tcgstamount: round2(totalgst / 2),
      grandtotal: round2(grandtotalVal),
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

    const payload = this.buildInventorysummaryPayload();
    if (!payload || payload.items.length === 0) {
      this.errorMessage = 'Please add at least one item.';
      return;
    }
    // New invoice: invoiceno omitted so server generates next per (accountid, instanceid)
    this.inventorysalesService.saveInventorySummaryWithDetails(payload).subscribe({
      next: (data: any) => {
        console.log('Sales summary saved', data);
        this.getSalesSummaryDetails();
        this.getSalesSummaryListData();
        this.resetSalesForm();
        this.errorMessage = '';
      },
      error: (err: any) => {
        console.error('Error saving inventory summary:', err);
        this.errorMessage = err?.error?.message || err?.message || 'Something went wrong. Please try again.';
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
    const invoiceno = item?.invoiceno ?? item?.data?.invoiceno;
    if (!invoiceno) {
      this.errorMessage = 'Invalid invoice. Cannot delete.';
      return;
    }
    if (confirm(`Are you sure you want to delete this inventory sales record?`)) {
      const { accountId, instanceId } = this.getCurrentAccountAndInstance();
      this.inventorysalesService.deleteInventorySummary(invoiceno, accountId, instanceId).subscribe({
        next: () => {
          this.getSalesSummaryDetails();
          this.getSalesSummaryListData();
          this.errorMessage = '';
        },
        error: (err: any) => {
          this.errorMessage = err?.error?.message || err?.message || 'Error deleting. Please try again.';
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
    const invoicenoParam = this.route.snapshot.queryParamMap.get('invoiceno')
      ?? this.route.root.snapshot.queryParamMap.get('invoiceno');
    const isEditFromQuery = this.editingInvoiceno != null || (invoicenoParam != null && invoicenoParam !== '');
    if (!isEditFromQuery) this.initializeForm();
    setTimeout(() => {
      if (this.salesForm) {
        if (!isEditFromQuery) {
          const today = new Date();
          this.salesForm.patchValue({ saledate: today }, { emitEvent: false });
          const user = this.authService.getUser() as any;
          const accountId = user?.accountid ?? user?.accountId ?? 1;
          const instanceId = user?.instanceid ?? user?.instanceId ?? 1;
          this.inventorysalesService.getNextInvoiceNo(accountId, instanceId).subscribe({
            next: (res) => {
              if (this.salesForm && res?.nextInvoiceNo != null) {
                this.salesForm.patchValue({ invoiceno: res.nextInvoiceNo }, { emitEvent: false });
                this.invoiceNumber = this.getDisplayInvoiceNoSequenceOnly(res.nextInvoiceNo);
                this.cdr.detectChanges();
              }
            }
          });
        }
        this.cdr.detectChanges();
      }
      // On page/form load, focus customer search input.
      if (this.customerSelect?.nativeElement) {
        this.customerSelect.nativeElement.focus();
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
    if (this.router.url.includes('inventorysalesadd')) {
      this.router.navigate(['/pages/inventorysales']);
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
