"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_product_product_module_ts"],{

/***/ 79383:
/*!*********************************************************!*\
  !*** ./src/app/pages/product/product-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductRoutingModule: () => (/* binding */ ProductRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product.component */ 52887);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _product_component__WEBPACK_IMPORTED_MODULE_0__.ProductComponent
}];
class ProductRoutingModule {
  static {
    this.ɵfac = function ProductRoutingModule_Factory(t) {
      return new (t || ProductRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: ProductRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ProductRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 52887:
/*!****************************************************!*\
  !*** ./src/app/pages/product/product.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductComponent: () => (/* binding */ ProductComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_product_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/product.service */ 25867);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ 9822);
/* harmony import */ var _service_permission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/permission.service */ 69227);
/* harmony import */ var _service_gst_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/gst.service */ 4218);
/* harmony import */ var _service_vat_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/vat.service */ 45171);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 17192);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! devextreme-angular/core */ 26683);
/* harmony import */ var _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/has-permission.directive */ 79561);

























function ProductComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function ProductComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Product name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Product name must be at least 2 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductComponent_mat_option_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const gst_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", gst_r11.gstid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", gst_r11.totalgstpercent !== null && gst_r11.totalgstpercent !== undefined ? gst_r11.totalgstpercent : "N/A", "% ");
  }
}
function ProductComponent_mat_hint_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-hint", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " No active GST entries found. Please add GST entries first. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductComponent_mat_error_38_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " GST is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductComponent_mat_option_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const tax_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", tax_r12.vatid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", tax_r12.vatpercent, "% ");
  }
}
function ProductComponent_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Tax is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductComponent_mat_error_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Active status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function ProductComponent_button_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductComponent_button_132_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.toggleForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function ProductComponent_div_143_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductComponent_div_143_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r20);
      const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r18.editItem(data_r15.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function ProductComponent_div_143_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductComponent_div_143_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r23);
      const data_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r21.deleteItem(data_r15.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function ProductComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, ProductComponent_div_143_a_1_Template, 3, 0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, ProductComponent_div_143_a_2_Template, 3, 0, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "product:edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "product:delete");
  }
}
const _c0 = function () {
  return {
    visible: true
  };
};
const _c1 = function () {
  return {
    visible: true,
    width: 240,
    placeholder: "Search..."
  };
};
const _c2 = function () {
  return {
    pageSize: 12
  };
};
class ProductComponent {
  constructor(productservice, fromBuilder, http, authService, permissionService, gstService, vatService) {
    this.productservice = productservice;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.authService = authService;
    this.permissionService = permissionService;
    this.gstService = gstService;
    this.vatService = vatService;
    this.isFormOpen = false; // Controls the slider visibility
    this.isEditMode = false;
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.gstDropdownItems = []; // GST master data
    this.taxDropdownItems = []; // Tax/VAT master data
    this.data = [];
    this.apiData = [];
    this.totalProduct = 0;
    this.activeProduct = 0;
    this.deactiveProduct = 0;
    this.errorMessage = '';
    this.currentUserId = 1; // Default to 1 if user not found
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }
  ngOnInit() {
    // Get logged-in user ID, account ID, and instance ID from JWT token
    this.currentUserId = this.authService.getUserId();
    const accountId = this.authService.getAccountId();
    const instanceId = this.authService.getInstanceId();
    this.productForm = this.fromBuilder.group({
      "productname": ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.minLength(2)]],
      "productgeneric": [""],
      "manufacturerid": [1],
      "productmanufacturer": [""],
      "packid": [1],
      "productpackname": [""],
      "productpackqty": [""],
      "gstid": [null],
      "productgstpercent": [""],
      "taxid": [null],
      "producttaxpercent": [""],
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
      "productisactive": [true, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      "instanceid": [instanceId],
      "accountid": [accountId],
      "userid": [this.currentUserId],
      "genericid": [""],
      "productid": [0]
    });
    this.getProductDetails();
    this.getDropDownValue();
    this.loadGstDropdown();
    this.loadTaxDropdown();
  }
  // Mark all form fields as touched
  markFormGroupTouched() {
    Object.keys(this.productForm.controls).forEach(key => {
      const control = this.productForm.get(key);
      control?.markAsTouched();
    });
  }
  // Check if form has pending validators
  hasPendingValidators() {
    return Object.keys(this.productForm.controls).some(key => {
      const control = this.productForm.get(key);
      return control?.pending === true;
    });
  }
  onSubmit() {
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
        const formData = {
          ...this.productForm.value
        };
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
          next: response => {
            console.log('Product updated successfully:', response);
            this.getProductDetails();
            this.getProductCounts();
            this.restproductForm();
            this.errorMessage = '';
          },
          error: error => {
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
  createProduct() {
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
      next: data => {
        console.log("Form Submitted", data);
        this.getProductDetails();
        this.getProductCounts();
        this.restproductForm();
        this.errorMessage = '';
      },
      error: err => {
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
  getProductCounts() {
    this.getProductDetails();
  }
  byAccountId(list, accountId) {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter(item => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }
  getProductDetails() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.productservice.getProductDetails().subscribe({
      next: apidata => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.product = filtered.sort((a, b) => b.productid - a.productid);
        this.apiData = [...this.product];
        this.totalProduct = filtered.length;
        this.activeProduct = filtered.filter(p => p.productisactive === true || p.productisactive === 'true' || p.productisactive === 1).length;
        this.deactiveProduct = this.totalProduct - this.activeProduct;
        console.log('Product Details:', this.product);
      },
      error: err => {
        console.error('Error fetching product details:', err);
      }
    });
  }
  getDropDownValue() {
    this.productservice.getDropdownItems().subscribe({
      next: items => this.dropdownItems = items,
      error: err => console.error('Error fetching dropdown items', err)
    });
  }
  onSelectionChange(event) {
    const selectedValue = event.target.value;
    console.log('Selected City Name:', selectedValue);
    const selectedItem = this.dropdownItems.find(item => item.cityname === selectedValue);
    console.log('Selected City', selectedValue);
    if (selectedItem) {
      this.productForm.patchValue({
        cityid: selectedItem.cityId,
        companystate: selectedItem.citystate,
        companycountry: selectedItem.citycountry
      }); // Update cityId in the form
      console.log('Selected City ID:', selectedItem.cityId);
    }
  }
  editItem(item) {
    console.log("Editing:", item);
    this.isFormOpen = true;
    this.isEditMode = true;
    this.errorMessage = '';
    // Get the productid first
    const productId = item.productid || item.productId;
    if (!productId || productId === 0) {
      console.error('Invalid product ID for editing:', productId);
      this.errorMessage = 'Invalid product data. Cannot edit.';
      return;
    }
    // Handle productisactive conversion
    const isActive = item.productisactive !== undefined ? item.productisactive === true || item.productisactive === 'true' || item.productisactive === 1 : true;
    // Convert gstid and taxid to numbers to match dropdown option values
    const gstId = item.gstid ? Number(item.gstid) : null;
    const taxId = item.taxid ? Number(item.taxid) : null;
    console.log('Editing product - GST ID:', gstId, 'Type:', typeof gstId);
    console.log('Available GST items:', this.gstDropdownItems.map(g => ({
      id: g.gstid,
      type: typeof g.gstid
    })));
    // Patch all form values, ensuring productid is preserved
    this.productForm.patchValue({
      ...item,
      productid: productId,
      productisactive: isActive,
      gstid: gstId,
      taxid: taxId
    }, {
      emitEvent: false
    });
    // Use setTimeout to ensure dropdown is ready and value is set correctly
    setTimeout(() => {
      // Verify the gstid matches an option in the dropdown
      if (gstId !== null) {
        const matchingGst = this.gstDropdownItems.find(g => Number(g.gstid) === Number(gstId));
        if (matchingGst) {
          this.productForm.patchValue({
            gstid: Number(matchingGst.gstid)
          }, {
            emitEvent: false
          });
          console.log('GST ID matched and set:', Number(matchingGst.gstid));
        } else {
          console.warn('GST ID not found in dropdown:', gstId);
        }
      }
      // Verify the taxid matches an option in the dropdown
      if (taxId !== null) {
        const matchingTax = this.taxDropdownItems.find(t => Number(t.vatid) === Number(taxId));
        if (matchingTax) {
          this.productForm.patchValue({
            taxid: Number(matchingTax.vatid)
          }, {
            emitEvent: false
          });
          console.log('Tax ID matched and set:', Number(matchingTax.vatid));
        } else {
          console.warn('Tax ID not found in dropdown:', taxId);
        }
      }
    }, 100);
    console.log('Form values after patching:', this.productForm.value);
    console.log('Product ID in form:', this.productForm.get('productid')?.value);
    console.log('GST ID in form:', this.productForm.get('gstid')?.value);
  }
  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.productname}?`)) {
      this.productservice.deleteProduct(item.productid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getProductDetails();
          this.getProductCounts();
        },
        error: err => {
          console.error('Error deleting product:', err);
          alert('Error deleting product. Please try again.');
        }
      });
    }
  }
  onExporting(e) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_2__.Workbook();
    const worksheet = workbook.addWorksheet('Product Data');
    (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__.exportDataGrid)({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "ProductData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
    this.isEditMode = false;
  }
  restproductForm() {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.errorMessage = '';
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
      productid: 0,
      manufacturerid: 1,
      packid: 1,
      gstid: null,
      taxid: null,
      productcategoryid: 1,
      instanceid: instanceId,
      accountid: accountId,
      userid: this.currentUserId,
      genericid: ''
    }, {
      emitEvent: false
    });
  }
  // Load GST dropdown from master data
  loadGstDropdown() {
    this.gstService.getGstDetails().subscribe({
      next: data => {
        console.log('GST API Response:', data);
        // Filter only active GST entries
        this.gstDropdownItems = (data || []).filter(item => {
          const isActive = item.gstisactive === true || item.gstisactive === 'true' || item.gstisactive === 1;
          const hasTotalGst = item.totalgstpercent !== null && item.totalgstpercent !== undefined && item.totalgstpercent !== '';
          return isActive && hasTotalGst;
        });
        console.log('Loaded GST dropdown items:', this.gstDropdownItems.length);
        console.log('GST Dropdown Items:', this.gstDropdownItems);
        // Log first item to check structure
        if (this.gstDropdownItems.length > 0) {
          console.log('First GST Item:', this.gstDropdownItems[0]);
          console.log('Total GST %:', this.gstDropdownItems[0].totalgstpercent);
        }
      },
      error: err => {
        console.error('Error loading GST dropdown:', err);
        this.gstDropdownItems = [];
      }
    });
  }
  // Load Tax/VAT dropdown from master data
  loadTaxDropdown() {
    this.vatService.getVatDetails().subscribe({
      next: data => {
        // Filter only active Tax entries
        this.taxDropdownItems = (data || []).filter(item => item.vatisactive === true || item.vatisactive === 'true');
        console.log('Loaded Tax dropdown items:', this.taxDropdownItems.length);
      },
      error: err => {
        console.error('Error loading Tax dropdown:', err);
        this.taxDropdownItems = [];
      }
    });
  }
  // Handle GST selection change
  onGstChange(event) {
    const selectedGstId = event.value;
    // Always preserve productid during GST change (critical for edit mode)
    const currentProductId = this.productForm.get('productid')?.value || 0;
    const isEditMode = this.isEditMode && currentProductId > 0;
    if (selectedGstId) {
      const selectedGst = this.gstDropdownItems.find(item => item.gstid == selectedGstId);
      if (selectedGst) {
        // Set both gstid and productgstpercent (total GST) from API
        // Always include productid to preserve it during edit mode
        const patchData = {
          gstid: selectedGst.gstid,
          productgstpercent: selectedGst.totalgstpercent || ''
        };
        // Preserve productid if in edit mode
        if (isEditMode && currentProductId) {
          patchData.productid = currentProductId;
        }
        this.productForm.patchValue(patchData, {
          emitEvent: false
        });
        console.log('GST Selected - ID:', selectedGst.gstid, 'Total GST %:', selectedGst.totalgstpercent);
        console.log('Product ID preserved:', currentProductId, 'Edit Mode:', isEditMode);
      }
    } else {
      // Clear GST but preserve productid
      const patchData = {
        gstid: null,
        productgstpercent: ''
      };
      // Preserve productid if in edit mode
      if (isEditMode && currentProductId) {
        patchData.productid = currentProductId;
      }
      this.productForm.patchValue(patchData, {
        emitEvent: false
      });
    }
  }
  // Handle Tax selection change
  onTaxChange(event) {
    const selectedTaxId = event.value;
    if (selectedTaxId) {
      const selectedTax = this.taxDropdownItems.find(item => item.vatid == selectedTaxId);
      if (selectedTax) {
        // Preserve productid and other form values when updating Tax
        const currentProductId = this.productForm.get('productid')?.value;
        this.productForm.patchValue({
          taxid: selectedTax.vatid,
          producttaxpercent: selectedTax.vatpercent || ''
        }, {
          emitEvent: false
        });
        // Restore productid if it was set (for edit mode)
        if (currentProductId) {
          this.productForm.patchValue({
            productid: currentProductId
          }, {
            emitEvent: false
          });
        }
      }
    } else {
      const currentProductId = this.productForm.get('productid')?.value;
      this.productForm.patchValue({
        taxid: null,
        producttaxpercent: ''
      }, {
        emitEvent: false
      });
      // Restore productid if it was set (for edit mode)
      if (currentProductId) {
        this.productForm.patchValue({
          productid: currentProductId
        }, {
          emitEvent: false
        });
      }
    }
  }
  onCityChange(event) {
    const selectedCityId = event.target.value;
    this.http.get(`${this.apiUrl}/instance/${selectedCityId}`).subscribe({
      next: data => {
        this.productForm.patchValue({
          cityid: data.cityid,
          companystate: data.citystate,
          companycountry: data.citycountry
        });
      },
      error: err => {
        console.error('Error fetching city details:', err);
      }
    });
  }
  // Compare function for GST dropdown to handle type mismatches (string vs number)
  compareGstById(gst1, gst2) {
    if (gst1 == null && gst2 == null) return true;
    if (gst1 == null || gst2 == null) return false;
    // Convert both to numbers for comparison to handle string/number mismatches
    return Number(gst1) === Number(gst2);
  }
  // Compare function for Tax dropdown to handle type mismatches (string vs number)
  compareTaxById(tax1, tax2) {
    if (tax1 == null && tax2 == null) return true;
    if (tax1 == null || tax2 == null) return false;
    // Convert both to numbers for comparison to handle string/number mismatches
    return Number(tax1) === Number(tax2);
  }
  static {
    this.ɵfac = function ProductComponent_Factory(t) {
      return new (t || ProductComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_product_service__WEBPACK_IMPORTED_MODULE_4__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_permission_service__WEBPACK_IMPORTED_MODULE_6__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_gst_service__WEBPACK_IMPORTED_MODULE_7__.GstService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_vat_service__WEBPACK_IMPORTED_MODULE_8__.VatService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: ProductComponent,
      selectors: [["app-product"]],
      decls: 145,
      vars: 49,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["class", "error-message", "style", "color: red; margin-bottom: 10px; padding: 10px; background-color: #ffebee; border-radius: 4px;", 4, "ngIf"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matInput", "", "placeholder", "Product Name", "formControlName", "productname", 1, "mat-input-element", "custom-placeholder"], [4, "ngIf"], ["matInput", "", "placeholder", "Generic Name", "formControlName", "productgeneric", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manufacturer Name", "formControlName", "productmanufacturer", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Pack Name", "formControlName", "productpackname", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Pack Quantity", "formControlName", "productpackqty", 1, "mat-input-element", "custom-placeholder"], ["formControlName", "gstid", 3, "compareWith", "selectionChange"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["style", "color: orange;", 4, "ngIf"], ["formControlName", "taxid", 3, "compareWith", "selectionChange"], ["matInput", "", "placeholder", "category", "formControlName", "productcategory", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Sub Category", "formControlName", "productsubcategory", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "MRP", "formControlName", "productlastmrp", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "MRP", "formControlName", "productlastprice", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "MRP", "formControlName", "productlastcost", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Sales Discount %", "formControlName", "productsaledisper", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Pruchase Discount %", "formControlName", "productpurdisper", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Purchase Offer Qty", "formControlName", "productlastpuroffqty", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Previous Offer Free Qty", "formControlName", "productlastpurofffreeqty", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Product Image", "formControlName", "productimage", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Product Description", "formControlName", "productdescription", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "HSN Code", "formControlName", "producthsncode", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Sale Offer Qty", "formControlName", "productlastsaloffqty", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Sale Offer Free Qty", "formControlName", "productlastsalofffreeqty", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "productisactive"], ["value", "", "disabled", ""], [3, "value"], [1, "form-submit"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], ["class", "add-btn", 3, "click", 4, "appHasPermission"], ["title", "Product", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "productid", "caption", "Product ID", 3, "allowSorting", "sortOrder", "width"], ["dataField", "productname", "caption", "Product Name", 3, "width"], ["dataField", "producthsncode", "caption", "HSN Code", 3, "width"], ["dataField", "productmanufacturer", "caption", "Manufacturer", 3, "width"], ["dataField", "productpackqty", "caption", "Packing", 3, "width"], ["dataField", "productcategory", "caption", "Category", 3, "width"], ["dataField", "Sub Category", "caption", "Sub Category %", 3, "width"], ["dataField", "productisactive", "caption", "Active", 3, "width"], ["caption", "Action", "alignment", "center", "cellTemplate", "actionTemplate", 3, "visible", "width"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [1, "error-message", 2, "color", "red", "margin-bottom", "10px", "padding", "10px", "background-color", "#ffebee", "border-radius", "4px"], [2, "color", "orange"], [1, "add-btn", 3, "click"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], ["style", "cursor: pointer;", 3, "click", 4, "appHasPermission"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"]],
      template: function ProductComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function ProductComponent_Template_button_click_4_listener() {
            return ctx.restproductForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function ProductComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, ProductComponent_div_7_Template, 2, 1, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10, "Product Name *");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](12, ProductComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, ProductComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-form-field", 5)(15, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "Generic Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-form-field", 5)(19, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "Manufacturer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](21, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "mat-form-field", 5)(23, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24, "Pack Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](25, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "mat-form-field", 5)(27, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](28, "Pack Quantity");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](29, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "mat-form-field", 5)(31, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "GST %");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "mat-select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function ProductComponent_Template_mat_select_selectionChange_33_listener($event) {
            return ctx.onGstChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](35, "Select GST");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, ProductComponent_mat_option_36_Template, 2, 2, "mat-option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](37, ProductComponent_mat_hint_37_Template, 2, 0, "mat-hint", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](38, ProductComponent_mat_error_38_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "mat-form-field", 5)(40, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "TAX %");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "mat-select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("selectionChange", function ProductComponent_Template_mat_select_selectionChange_42_listener($event) {
            return ctx.onTaxChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "mat-option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](44, "Select Tax");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](45, ProductComponent_mat_option_45_Template, 2, 2, "mat-option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, ProductComponent_mat_error_46_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "mat-form-field", 5)(48, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "mat-form-field", 5)(52, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Sub Category");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "mat-form-field", 5)(56, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Previous MRP");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "mat-form-field", 5)(60, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "Previous Price");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](62, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](63, "mat-form-field", 5)(64, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](65, "Previous Cost");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](66, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](67, "mat-form-field", 5)(68, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](69, "Sales Discount %");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](70, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](71, "mat-form-field", 5)(72, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](73, "Pruchase Discount %");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](74, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](75, "mat-form-field", 5)(76, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](77, "Purchase Offer Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](78, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](79, "mat-form-field", 5)(80, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](81, "Purchase Offer Free Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](82, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](83, "mat-form-field", 5)(84, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "Product Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](86, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](87, "mat-form-field", 5)(88, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](89, "Product Description");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](90, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](91, "mat-form-field", 5)(92, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93, "HSN Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](94, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](95, "mat-form-field", 5)(96, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97, "Sale Offer Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](98, "input", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](99, "mat-form-field", 5)(100, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101, "Sale Offer Free Qty");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](102, "input", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](103, "mat-form-field", 5)(104, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](105, "Active *");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](106, "select", 32)(107, "option", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](108, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](109, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](110, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](111, "option", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](112, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](113, ProductComponent_mat_error_113_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](114, "div", 35)(115, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](117, "div", 37)(118, "mat-card")(119, "mat-card-header")(120, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](121);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](122, "mat-card")(123, "mat-card-header")(124, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](126, "mat-card")(127, "mat-card-header")(128, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](129);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](130, "div", 38)(131, "div", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](132, ProductComponent_button_132_Template, 3, 0, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](133, "dx-data-grid", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onExporting", function ProductComponent_Template_dx_data_grid_onExporting_133_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](134, "dxi-column", 42)(135, "dxi-column", 43)(136, "dxi-column", 44)(137, "dxi-column", 45)(138, "dxi-column", 46)(139, "dxi-column", 47)(140, "dxi-column", 48)(141, "dxi-column", 49)(142, "dxi-column", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](143, ProductComponent_div_143_Template, 3, 2, "div", 51);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](144, "dxo-export", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_5_0;
          let tmp_9_0;
          let tmp_12_0;
          let tmp_15_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Product" : "Add Product");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.productForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_4_0 = ctx.productForm.get("productname")) == null ? null : tmp_4_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_5_0 = ctx.productForm.get("productname")) == null ? null : tmp_5_0.hasError("minlength"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("compareWith", ctx.compareGstById);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.gstDropdownItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.gstDropdownItems.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx.productForm.get("gstid")) == null ? null : tmp_9_0.hasError("required")) && ((tmp_9_0 = ctx.productForm.get("gstid")) == null ? null : tmp_9_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("compareWith", ctx.compareTaxById);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.taxDropdownItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx.productForm.get("taxid")) == null ? null : tmp_12_0.hasError("required")) && ((tmp_12_0 = ctx.productForm.get("taxid")) == null ? null : tmp_12_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", false);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", (tmp_15_0 = ctx.productForm.get("productisactive")) == null ? null : tmp_15_0.hasError("required"));
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx.productForm.invalid || ctx.productForm.pending || ctx.hasPendingValidators());
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update" : "Submit", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Product\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalProduct, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeProduct, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveProduct, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "product:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](46, _c0))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](47, _c1))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](48, _c2))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("allowSorting", true)("sortOrder", "asc")("width", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 180);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", true)("width", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatHint, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_16__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_18__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_21__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_22__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_23__.DxTemplateDirective, _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_9__.HasPermissionDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n    max-width: 100%;\n    margin: 15px auto;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n    background-color: #ffff;\n    margin-top: 1% !important;\n    height: 500px !important;\n  width: 1237px !important;\n  }\n  \n  \n  .form-submit[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    text-align: center;\n  }\n  .mat-icon[_ngcontent-%COMP%]{\n    color: black;\n    height: 10px;\n  }\n  \n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n      height: 100%;\n  }\n  \n  .btn-pos-list[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0px;\n    right: 355px;\n    width: 40px;\n    z-index: 1;\n  }\n  \n  .edit-btn[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color:#337ab7;\n  }\n    .dx-datagrid .dx-row > td {\n   vertical-align: middle !important;\n  }\n  .close-btn[_ngcontent-%COMP%] {\n    background: transparent;\n    box-shadow: none;\n    border: none;\n    font-size: 30px;\n    color: black;\n    font-weight: 700px;\n    margin-left: 1134px;\n    margin-top: -14px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvcHJvZHVjdC9wcm9kdWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDJCQUEyQix5Q0FBeUM7SUFDaEUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQix3QkFBd0I7RUFDeEI7OztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTs7TUFFSSxZQUFZO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQTtHQUNDLGlDQUFpQztFQUNsQztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvcm0tY29udGFpbmVyIHsgICAgICAgICAgLypGb3JtIENvbnRhaW5lciB3aXRoIGZvcm0gZmllbGRzIGluc2lkZSovXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gICAgbWFyZ2luLXRvcDogMSUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjM3cHggIWltcG9ydGFudDtcbiAgfVxuICBcbiAgXG4gIC5mb3JtLXN1Ym1pdHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICAubWF0LWljb257XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGhlaWdodDogMTBweDtcbiAgfVxuICBcbiAgaHRtbCxcbiAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gIH1cbiAgXG4gIC5idG4tcG9zLWxpc3R7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMHB4O1xuICAgIHJpZ2h0OiAzNTVweDtcbiAgICB3aWR0aDogNDBweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuZWRpdC1idG57XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiMzMzdhYjc7XG4gIH1cbiAgOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtcm93ID4gdGQge1xuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xuICB9XG4gIC5jbG9zZS1idG4ge1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMTM0cHg7XG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XG4gIH1cbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 32390:
/*!*************************************************!*\
  !*** ./src/app/pages/product/product.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductModule: () => (/* binding */ ProductModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-routing.module */ 79383);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product.component */ 52887);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 22866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);











class ProductModule {
  static {
    this.ɵfac = function ProductModule_Factory(t) {
      return new (t || ProductModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: ProductModule,
      bootstrap: [_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService],
      imports: [_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](ProductModule, {
    declarations: [_product_component__WEBPACK_IMPORTED_MODULE_3__.ProductComponent],
    imports: [_product_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ }),

/***/ 25867:
/*!**************************************************!*\
  !*** ./src/app/pages/service/product.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProductService: () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class ProductService {
  deleteProduct(productid) {
    console.log('Deleting product from API');
    return this.http.delete(`${this.apiUrl}/product/productdelete/${productid}`);
  }
  updateProduct(productData) {
    console.log('Updating product in API', productData);
    return this.http.put(`${this.apiUrl}/product/productupdate`, productData);
  }
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getProductDetails() {
    return this.http.get(`${this.apiUrl}/product/list`);
  }
  addProduct(productData) {
    console.log('Sending data to API', productData);
    return this.http.post(`${this.apiUrl}/product/productsave`, productData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/city/list`);
  }
  static {
    this.ɵfac = function ProductService_Factory(t) {
      return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: ProductService,
      factory: ProductService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_product_product_module_ts.js.map