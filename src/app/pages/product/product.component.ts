import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../service/product.service';
import { AuthService } from '../service/auth.service';
import { PermissionService } from '../service/permission.service';
import { GstService } from '../service/gst.service';
import { VatService } from '../service/vat.service';
import { InstanceService } from '../service/instance.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { exportDataGrid } from 'devextreme/excel_exporter';
import { Workbook } from 'exceljs';
import { environment } from '../../../environments/environment';
import { QuickProductSettingsService } from '../service/quick-product-settings.service';
import { MenuSettingsService } from '../service/menu-settings.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  isFormOpen = false; // Controls the slider visibility
  isEditMode = false;
  product!: any[];
  productForm!: FormGroup;
  dropdownOptions: any[] = [];
  selectedItem: any;
  dropdownItems: any[] = [];
  gstDropdownItems: any[] = []; // GST master data
  taxDropdownItems: any[] = []; // Tax/VAT master data
  data: { id: number; productName: string; city: string; isActive: boolean }[] = [];
  apiData: any[] = [];
  longText: any;
  totalProduct: number = 0;
  activeProduct: number = 0;
  deactiveProduct: number = 0;
  errorMessage: string = '';
  currentUserId: number = 1; // Default to 1 if user not found
  private apiUrl = environment.apiUrl;
  @ViewChild('imageInput') imageInput!: ElementRef<HTMLInputElement>;
  imagePreview: string | null = null;
  /** Product image upload enabled only for ecommerce instance salestype. */
  canEditProductImage = false;

  /** Ensure numeric sorting in DevExtreme when productid comes as string/bigint. */
  productIdSortValue = (rowData: any): number => {
    const v = rowData?.productid ?? rowData?.productId ?? 0;
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  constructor(
    private productservice: ProductService,
    private fromBuilder: FormBuilder,
    private http: HttpClient,
    private authService: AuthService,
    private permissionService: PermissionService,
    private gstService: GstService,
    private vatService: VatService,
    private instanceService: InstanceService,
    private cdr: ChangeDetectorRef,
    private quickProductSettings: QuickProductSettingsService,
    private menuSettings: MenuSettingsService
  ) { }

  /** Returns true if the field should be visible in the add/edit form. */
  showField(key: string): boolean {
    if (!this.menuSettings.isEnabled('quickproduct')) return true;
    return this.quickProductSettings.isFieldEnabled(key);
  }

  ngOnInit(): void {
    // Get logged-in user ID, account ID, and instance ID from JWT token
    this.currentUserId = this.authService.getUserId();
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();
    this.loadInstanceSalesType(instanceId);

    // Load quick product field settings for this user from API
    this.quickProductSettings.loadFromApi().subscribe(() => {
      this.cdr.detectChanges();
    });

    this.productForm = this.fromBuilder.group({
      "productname": ["", [Validators.required, Validators.minLength(2)]],
      "productgeneric": [""],
      "manufacturerid": [1],
      "productmanufacturer": [""],
      "packid": [1],
      "productpackname": [""],
      "productpackqty": [""],
      "gstid": [null], // Will be set when GST is selected
      "productgstpercent": [""], // Will be auto-populated from selected GST
      "taxid": [null], // Will be set when Tax is selected
      "producttaxpercent": [""], // Will be auto-populated from selected Tax
      "productcategoryid": [1],
      "productcategory": [""],
      "productsubcategory": [""],
      "productlastmrp": [""],
      "productlastprice": [""],
      "productlastcost": [""],
      "productsaledisper": [""],
      "productpurdisper": [""],
      "productlastpuroffqty": [""],
      "productlastpurofffreeqty": [""],
      "productimage": [""],
      "productdescription": [""],
      "producthsncode": [""],
      "productlastsaloffqty": [""],
      "productlastsalofffreeqty": [""],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "createdby": [this.currentUserId],
      "updatedby": [this.currentUserId],
      "productisactive": [true, Validators.required],
      "instanceid": [instanceId], // From logged-in user
      "accountid": [accountId], // From logged-in user
      "userid": [this.currentUserId],
      "genericid": [""],
      "productid": [0]
    })
    this.getProductDetails();
    this.getDropDownValue();
    this.loadGstDropdown();
    this.loadTaxDropdown();
  }

  onImageSelected(event: Event): void {
    if (!this.canEditProductImage) {
      this.errorMessage = 'Product image upload is enabled only for ecommerce sales page type.';
      return;
    }
    const file = (event.target as HTMLInputElement).files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      this.errorMessage = 'Please select a valid image file.';
      return;
    }

    // Keep payload small for base64-in-varchar storage.
    if (file.size > 2 * 1024 * 1024) {
      this.errorMessage = 'Image size must be less than 2MB.';
      return;
    }

    this.errorMessage = '';
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      this.imagePreview = base64;
      this.productForm.patchValue({ productimage: base64 });
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  removeImage(): void {
    if (!this.canEditProductImage) return;
    this.imagePreview = null;
    this.productForm.patchValue({ productimage: '' });
    if (this.imageInput) {
      this.imageInput.nativeElement.value = '';
    }
  }


  // Mark all form fields as touched
  markFormGroupTouched(): void {
    Object.keys(this.productForm.controls).forEach(key => {
      const control = this.productForm.get(key);
      control?.markAsTouched();
    });
  }

  // Check if form has pending validators
  hasPendingValidators(): boolean {
    return Object.keys(this.productForm.controls).some(key => {
      const control = this.productForm.get(key);
      return control?.pending === true;
    });
  }

  onSubmit(): void {
    // Mark all fields as touched to show validation errors
    this.markFormGroupTouched();

    // Check if form has pending async validators
    if (this.hasPendingValidators()) {
      this.errorMessage = 'Please wait while we validate your input...';
      return;
    }

    // Check if form is valid
    if (this.productForm.valid) {
      this.errorMessage = '';

      // Ensure accountid, instanceid, createdby, and updatedby are set from logged-in user
      const accountId = this.authService.getAccountId();
      const instanceId = this.authService.getInstanceId();
      this.currentUserId = this.authService.getUserId();

      // Check if we're in edit mode - must have both isEditMode flag AND valid productid
      const productId = this.productForm.get('productid')?.value;
      const isEdit = this.isEditMode && productId && productId > 0;

      console.log('Form submission check:');
      console.log('  - isEditMode:', this.isEditMode);
      console.log('  - productid:', productId);
      console.log('  - productid type:', typeof productId);
      console.log('  - Will update:', isEdit);
      console.log('  - Form values:', this.productForm.value);

      if (isEdit) {
        // UPDATE MODE - Product exists and we're editing it
        const formData = { ...this.productForm.value };
        
        // Ensure productid is included in the update and is valid
        if (!productId || productId === 0) {
          console.error('Invalid productid for update:', productId);
          this.errorMessage = 'Invalid product ID. Cannot update.';
          return;
        }
        
        formData.productid = productId; // Explicitly set productid
        formData.accountid = accountId;
        formData.instanceid = instanceId;
        formData.updatedby = this.currentUserId;
        formData.updateddate = new Date();

        console.log('Updating product with data:', formData);
        console.log('Product ID:', formData.productid);
        console.log('GST ID:', formData.gstid);
        console.log('Product GST Percent:', formData.productgstpercent);
        console.log('Is Edit Mode:', this.isEditMode);
        
        this.productservice.updateProduct(formData).subscribe({
          next: (response: any) => {
            console.log('Product updated successfully:', response);
            this.getProductDetails();
            this.getProductCounts();
            this.restproductForm();
            this.errorMessage = '';
          },
          error: (error: any) => {
            console.error('Error updating product:', error);
            if (error.status === 400 && error.error?.message) {
              this.errorMessage = error.error.message;
            } else if (error.error?.message) {
              this.errorMessage = error.error.message;
            } else if (error.status === 404) {
              this.errorMessage = 'Product not found. Please refresh and try again.';
            } else {
              this.errorMessage = 'Error updating product. Please try again.';
            }
          }
        });
      } else {
        this.createProduct();
      }
    } else {
      console.error('Form is Invalid');
      this.errorMessage = 'Please fill all required fields correctly.';

      // Log validation errors for debugging
      Object.keys(this.productForm.controls).forEach(key => {
        const control = this.productForm.get(key);
        if (control?.invalid) {
          console.log(`${key} errors:`, control.errors);
        }
      });
    }
  }

  createProduct(): void {
    if (!this.permissionService.hasPermissionCode('product:create') && !this.permissionService.hasPermissionCode('product.create')) {
      this.errorMessage = 'You do not have permission to add products.';
      return;
    }
    this.errorMessage = '';

    // Ensure createdby and updatedby are set to current user ID
    this.productForm.patchValue({
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      createddate: new Date(),
      updateddate: new Date()
    });

    // Log form data to verify GST values are included
    const formData = this.productForm.value;
    console.log('Creating product with form data:', formData);
    console.log('GST ID:', formData.gstid);
    console.log('Product GST Percent (Total GST):', formData.productgstpercent);

    this.productservice.addProduct(formData).subscribe({
      next: (data: any) => {
        console.log("Form Submitted", data);
        this.getProductDetails();
        this.getProductCounts();
        this.restproductForm();
        this.errorMessage = '';
      },
      error: (err: any) => {
        console.error('Error creating product:', err);
        if (err.status === 400 && err.error?.message) {
          this.errorMessage = err.error.message;
        } else if (err.error?.message) {
          this.errorMessage = err.error.message;
        } else {
          this.errorMessage = 'Error creating product. Please try again.';
        }
      }
    });
  }

  getProductCounts(): void {
    this.getProductDetails();
  }

  private byAccountId<T extends { accountid?: number; accountId?: number }>(list: T[], accountId: number): T[] {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter((item: any) => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }

  getProductDetails(): void {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.productservice.getProductDetails().subscribe({
      next: (apidata: any) => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.product = filtered.sort((a: any, b: any) => this.productIdSortValue(b) - this.productIdSortValue(a));
        this.apiData = [...this.product];
        this.totalProduct = filtered.length;
        this.activeProduct = filtered.filter((p: any) => p.productisactive === true || p.productisactive === 'true' || p.productisactive === 1).length;
        this.deactiveProduct = this.totalProduct - this.activeProduct;
        console.log('Product Details:', this.product);
      },
      error: (err: any) => {
        console.error('Error fetching product details:', err);
      }
    });
  }

 getDropDownValue (){
  this.productservice.getDropdownItems().subscribe({
    next: (items) => (this.dropdownItems = items),
    error: (err) => console.error('Error fetching dropdown items', err),
  });
 }

  onSelectionChange(event:Event):void{
    const selectedValue=  (event.target  as HTMLSelectElement).value;
    console.log('Selected City Name:',selectedValue)
    const selectedItem = this.dropdownItems.find((item) => item.cityname === selectedValue);
    console.log('Selected City',selectedValue)
    if (selectedItem) {
      this.productForm.patchValue({ 
        cityid: selectedItem.cityId ,
      companystate:selectedItem.citystate,
    companycountry:selectedItem.citycountry}); // Update cityId in the form
      console.log('Selected City ID:', selectedItem.cityId);
    }
  }
  editItem(item: any): void {
    const row = item?.data ?? item;
    const productId = row?.productid ?? row?.productId ?? (typeof row === 'object' ? row?.productid : null);
    if (!productId || productId === 0) {
      this.errorMessage = 'Invalid product data. Cannot edit.';
      return;
    }
    this.isFormOpen = true;
    this.isEditMode = true;
    this.errorMessage = '';
    this.productservice.getDetailsById(productId).subscribe({
      next: (r) => {
        if (!r) return;
        this.imagePreview = r.productimage || null;
        const isActive = r.productisactive !== undefined 
          ? (r.productisactive === true || r.productisactive === 'true' || r.productisactive === 1)
          : true;
        const gstId = r.gstid ? Number(r.gstid) : null;
        const taxId = r.taxid ? Number(r.taxid) : null;
        this.productForm.patchValue({
          ...r,
          productid: productId,
          productisactive: isActive,
          gstid: gstId,
          taxid: taxId
        }, { emitEvent: false });
        setTimeout(() => {
          if (gstId !== null) {
            const matchingGst = this.gstDropdownItems.find(g => Number(g.gstid) === Number(gstId));
            if (matchingGst) {
              this.productForm.patchValue({ gstid: Number(matchingGst.gstid) }, { emitEvent: false });
            }
          }
          if (taxId !== null) {
            const matchingTax = this.taxDropdownItems.find(t => Number(t.vatid) === Number(taxId));
            if (matchingTax) {
              this.productForm.patchValue({ taxid: Number(matchingTax.vatid) }, { emitEvent: false });
            }
          }
        }, 100);
      },
      error: (err) => {
        console.error('Error fetching product details:', err);
        this.errorMessage = 'Error fetching product details. Please try again.';
      }
    });
  }
  
  deleteItem(item: any): void {
    if (confirm(`Are you sure you want to delete ${item.productname}?`)) {
      this.productservice.deleteProduct(item.productid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getProductDetails();
          this.getProductCounts();
        },
        error: (err: any) => {
          console.error('Error deleting product:', err);
          alert('Error deleting product. Please try again.');
        }
      });
    }
  }
  onExporting(e: any) {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Product Data');
  
    exportDataGrid({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true,
    }).then(() => {
      workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        saveAs(blob, "ProductData.xlsx");
      });
    });
  
    e.cancel = true; // Prevents default export
  }
  toggleForm(): void {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.imagePreview = null;
    this.productForm.patchValue({ productimage: '' }, { emitEvent: false });
  }

  restproductForm(): void {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.errorMessage = '';
    this.imagePreview = null;
    
    // Get current values from logged-in user
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();
    this.currentUserId = this.authService.getUserId();
    
    // Reset form and set default values
    this.productForm.reset({
      productname: '',
      productgeneric: '',
      productmanufacturer: '',
      productpackname: '',
      productpackqty: '',
      productgstpercent: '',
      producttaxpercent: '',
      productcategory: '',
      productsubcategory: '',
      productlastmrp: '',
      productlastprice: '',
      productlastcost: '',
      productsaledisper: '',
      productpurdisper: '',
      productlastpuroffqty: '',
      productlastpurofffreeqty: '',
      productimage: '',
      productdescription: '',
      producthsncode: '',
      productlastsaloffqty: '',
      productlastsalofffreeqty: '',
      productisactive: true,
      createddate: new Date(),
      updateddate: new Date(),
      createdby: this.currentUserId,
      updatedby: this.currentUserId,
      productid: 0, // Explicitly set to 0 for new products
      manufacturerid: 1,
      packid: 1,
      gstid: null,
      taxid: null,
      productcategoryid: 1,
      instanceid: instanceId, // From logged-in user
      accountid: accountId, // From logged-in user
      userid: this.currentUserId,
      genericid: ''
    }, { emitEvent: false });
  }
  // Load GST dropdown from master data
  loadGstDropdown(): void {
    this.gstService.getGstDetails().subscribe({
      next: (data: any[]) => {
        console.log('GST API Response:', data);
        // Filter only active GST entries
        this.gstDropdownItems = (data || []).filter((item: any) => {
          const isActive = item.gstisactive === true || item.gstisactive === 'true' || item.gstisactive === 1;
          const hasTotalGst = item.totalgstpercent !== null && item.totalgstpercent !== undefined && item.totalgstpercent !== '';
          return isActive && hasTotalGst;
        }).map((item: any) => ({
          ...item,
          gstid: item.gstid != null ? Number(item.gstid) : item.gstid
        }));
        console.log('Loaded GST dropdown items:', this.gstDropdownItems.length);
        console.log('GST Dropdown Items:', this.gstDropdownItems);
        // Log first item to check structure
        if (this.gstDropdownItems.length > 0) {
          console.log('First GST Item:', this.gstDropdownItems[0]);
          console.log('Total GST %:', this.gstDropdownItems[0].totalgstpercent);
        }
      },
      error: (err) => {
        console.error('Error loading GST dropdown:', err);
        this.gstDropdownItems = [];
      }
    });
  }

  // Load Tax/VAT dropdown from master data
  loadTaxDropdown(): void {
    this.vatService.getVatDetails().subscribe({
      next: (data: any[]) => {
        // Filter only active Tax entries
        this.taxDropdownItems = (data || []).filter((item: any) => item.vatisactive === true || item.vatisactive === 'true')
          .map((item: any) => ({
            ...item,
            vatid: item.vatid != null ? Number(item.vatid) : item.vatid
          }));
        console.log('Loaded Tax dropdown items:', this.taxDropdownItems.length);
      },
      error: (err) => {
        console.error('Error loading Tax dropdown:', err);
        this.taxDropdownItems = [];
      }
    });
  }

  // Handle GST selection change
  onGstChange(event: any): void {
    const selectedGstId = event.value;
    // Always preserve productid during GST change (critical for edit mode)
    const currentProductId = this.productForm.get('productid')?.value || 0;
    const isEditMode = this.isEditMode && currentProductId > 0;
    
    if (selectedGstId) {
      const selectedGst = this.gstDropdownItems.find(item => item.gstid == selectedGstId);
      if (selectedGst) {
        // Set both gstid and productgstpercent (total GST) from API
        // Always include productid to preserve it during edit mode
        const patchData: any = {
          gstid: selectedGst.gstid != null ? Number(selectedGst.gstid) : null,
          productgstpercent: selectedGst.totalgstpercent || ''
        };
        
        // Preserve productid if in edit mode
        if (isEditMode && currentProductId) {
          patchData.productid = currentProductId;
        }
        
        this.productForm.patchValue(patchData, { emitEvent: false });
        console.log('GST Selected - ID:', selectedGst.gstid, 'Total GST %:', selectedGst.totalgstpercent);
        console.log('Product ID preserved:', currentProductId, 'Edit Mode:', isEditMode);
      }
    } else {
      // Clear GST but preserve productid
      const patchData: any = {
        gstid: null,
        productgstpercent: ''
      };
      
      // Preserve productid if in edit mode
      if (isEditMode && currentProductId) {
        patchData.productid = currentProductId;
      }
      
      this.productForm.patchValue(patchData, { emitEvent: false });
    }
  }

  // Handle Tax selection change
  onTaxChange(event: any): void {
    const selectedTaxId = event.value;
    if (selectedTaxId) {
      const selectedTax = this.taxDropdownItems.find(item => item.vatid == selectedTaxId);
      if (selectedTax) {
        // Preserve productid and other form values when updating Tax
        const currentProductId = this.productForm.get('productid')?.value;
        this.productForm.patchValue({
          taxid: selectedTax.vatid != null ? Number(selectedTax.vatid) : null,
          producttaxpercent: selectedTax.vatpercent || ''
        }, { emitEvent: false });
        // Restore productid if it was set (for edit mode)
        if (currentProductId) {
          this.productForm.patchValue({
            productid: currentProductId
          }, { emitEvent: false });
        }
      }
    } else {
      const currentProductId = this.productForm.get('productid')?.value;
      this.productForm.patchValue({
        taxid: null,
        producttaxpercent: ''
      }, { emitEvent: false });
      // Restore productid if it was set (for edit mode)
      if (currentProductId) {
        this.productForm.patchValue({
          productid: currentProductId
        }, { emitEvent: false });
      }
    }
  }

  onCityChange(event: any): void {
    const selectedCityId = event.target.value;
    this.http.get<any>(`${this.apiUrl}/instance/${selectedCityId}`).subscribe({
      next: (data) => {
        this.productForm.patchValue({
          cityid: data.cityid,
          companystate: data.citystate,
          companycountry: data.citycountry,
        });
      },
      error: (err) => {
        console.error('Error fetching city details:', err);
      }
    });
  }

  // Compare function for GST dropdown to handle type mismatches (string vs number)
  compareGstById(gst1: any, gst2: any): boolean {
    if (gst1 == null && gst2 == null) return true;
    if (gst1 == null || gst2 == null) return false;
    // Convert both to numbers for comparison to handle string/number mismatches
    return Number(gst1) === Number(gst2);
  }

  // Compare function for Tax dropdown to handle type mismatches (string vs number)
  compareTaxById(tax1: any, tax2: any): boolean {
    if (tax1 == null && tax2 == null) return true;
    if (tax1 == null || tax2 == null) return false;
    // Convert both to numbers for comparison to handle string/number mismatches
    return Number(tax1) === Number(tax2);
  }

  private loadInstanceSalesType(instanceId: number): void {
    if (!instanceId) {
      this.canEditProductImage = false;
      return;
    }
    this.instanceService.getDetailsById(instanceId).subscribe({
      next: (inst: any) => {
        const st = String(inst?.salestype ?? '').trim().toLowerCase();
        this.canEditProductImage = st === 'ecommerce';
        this.cdr.detectChanges();
      },
      error: () => {
        this.canEditProductImage = false;
      }
    });
  }
}

