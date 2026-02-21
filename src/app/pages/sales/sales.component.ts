import { Component, ElementRef, HostListener, OnInit, ViewChild, ViewChildren, QueryList, ChangeDetectorRef } from '@angular/core';
import { SalesService } from '../service/sales.service';
import { AuthService } from '../service/auth.service';
import { GstService } from '../service/gst.service';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment';

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
  gstOptions: any[] = [];
  selectedItem: any;
  apiData: any[] = [];
  totalSales: number = 0;
  activeSales: number = 0;
  deactiveSales: number = 0;
  totalAmount: number = 0;
  errorMessage: string = '';
  currentUserId: number = 1;
  invoiceNumber: string = '';

  constructor(
    private salesService: SalesService,
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private gstService: GstService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getCurrentUserId();
    this.generateInvoiceNumber();
    this.getSalesDetails();
    this.getCustomers();
    this.getProducts();
    this.getGstOptions();
    this.getSalesCounts();
    this.initializeForm();
  }

  initializeForm(): void {
    const today = new Date();
    this.salesForm = this.formBuilder.group({
      salesid: [0],
      invoiceno: [this.invoiceNumber, Validators.required],
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
      paymentmethod: ["", Validators.required],
      paymentstatus: ["", Validators.required],
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
    this.items.push(this.createItemFormGroup());
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

    this.salesForm.patchValue({
      subtotal: subtotal.toFixed(2),
      totalgst: totalGst.toFixed(2),
      grandtotal: subtotal.toFixed(2)
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

  getSalesCounts(): void {
    this.salesService.getSalesCounts().subscribe({
      next: (response) => {
        this.totalSales = response.totalSales || 0;
        this.activeSales = response.activeSales || 0;
        this.deactiveSales = response.deactiveSales || 0;
        this.totalAmount = response.totalAmount || 0;
      },
      error: (err) => {
        console.error('Error fetching sales counts:', err);
      }
    });
  }

  getSalesDetails(): void {
    this.salesService.getSalesDetails().subscribe({
      next: (apidata: any) => {
        this.sales = apidata.sort((a: any, b: any) => (b.salesid || 0) - (a.salesid || 0));
        this.apiData = apidata.sort((a: any, b: any) => (b.salesid || 0) - (a.salesid || 0));
        console.log('Sales Details:', this.sales);
      },
      error: (err) => {
        console.error('Error fetching sales details:', err);
      }
    });
  }

  getCustomers(): void {
    this.salesService.getCustomers().subscribe({
      next: (customers) => {
        this.customerOptions = customers;
      },
      error: (err) => {
        console.error('Error fetching customers:', err);
      }
    });
  }

  getProducts(): void {
    this.salesService.getProducts().subscribe({
      next: (products) => {
        this.productOptions = products;
        if (products.length > 0) {
          console.log('Product API sample fields:', Object.keys(products[0]));
        }
      },
      error: (err) => {
        console.error('Error fetching products:', err);
      }
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
    this.items.push(this.createItemFormGroup());
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

  onSubmit(): void {
    this.markFormGroupTouched();

    if (this.salesForm.valid && this.items.length > 0) {
      this.errorMessage = '';
      
      this.salesForm.patchValue({
        updatedby: this.currentUserId,
        updateddate: new Date()
      });
      
      if (this.isEditMode) {
        const formData = { ...this.salesForm.value };
        if (!formData.salesid || formData.salesid === 0) {
          console.error('Sales ID is missing for update');
          this.errorMessage = 'Sales ID is missing. Cannot update.';
          return;
        }
        
        console.log('Updating sales with data:', formData);
        this.salesService.updateSales(formData).subscribe({
          next: (response: any) => {
            console.log('Sales updated successfully:', response);
            this.getSalesDetails();
            this.getSalesCounts();
            this.resetSalesForm();
            this.errorMessage = '';
          },
          error: (error: any) => {
            console.error('Error updating sales:', error);
            if (error.status === 400 && error.error?.message) {
              this.errorMessage = error.error.message;
            } else if (error.error?.message) {
              this.errorMessage = error.error.message;
            } else {
              this.errorMessage = 'Error updating sales. Please try again.';
            }
          }
        });
      } else {
        this.createSales();
      }
    } else {
      console.error('Form is Invalid');
      this.errorMessage = 'Please fill all required fields correctly and add at least one item.';
    }
  }

  createSales(): void {
    this.errorMessage = '';
    
    this.salesForm.patchValue({
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      createddate: new Date(),
      updateddate: new Date()
    });
    
    this.salesService.addSales(this.salesForm.value).subscribe({
      next: (data: any) => {
        console.log("Sales Form Submitted", data);
        this.getSalesDetails();
        this.getSalesCounts();
        this.resetSalesForm();
        this.errorMessage = '';
      },
      error: (err: any) => {
        console.error('Error creating sales:', err);
        if (err.status === 400 && err.error?.message) {
          this.errorMessage = err.error.message;
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Something went wrong. Please try again.';
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
          this.getSalesDetails();
          this.getSalesCounts();
        },
        error: (err: any) => {
          console.error('Error deleting sales', err);
          this.errorMessage = 'Error deleting sales. Please try again.';
        }
      });
    }
  }

  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Sales Data');

    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "SalesData.xlsx");
      });
    });

    e.cancel = true;
  }

  toggleForm(): void {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.errorMessage = '';
    this.getCurrentUserId();
    this.generateInvoiceNumber();
    this.initializeForm();
    setTimeout(() => {
      if (this.salesForm) {
        const today = new Date();
        this.salesForm.patchValue({
          saledate: today,
          invoiceno: this.invoiceNumber
        }, { emitEvent: false });
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
    this.errorMessage = '';
    
    this.getCurrentUserId();
    this.generateInvoiceNumber();
    // Don't initialize form when closing - it will be initialized when opening again
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
