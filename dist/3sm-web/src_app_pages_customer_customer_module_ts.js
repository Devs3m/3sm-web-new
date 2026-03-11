"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_customer_customer_module_ts"],{

/***/ 47133:
/*!***********************************************************!*\
  !*** ./src/app/pages/customer/customer-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerRoutingModule: () => (/* binding */ CustomerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.component */ 9889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _customer_component__WEBPACK_IMPORTED_MODULE_0__.CustomerComponent
}];
class CustomerRoutingModule {
  static {
    this.ɵfac = function CustomerRoutingModule_Factory(t) {
      return new (t || CustomerRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CustomerRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomerRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9889:
/*!******************************************************!*\
  !*** ./src/app/pages/customer/customer.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerComponent: () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer.service */ 41068);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth.service */ 9822);
/* harmony import */ var _service_permission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/permission.service */ 69227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 17192);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular/core */ 26683);
/* harmony import */ var _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/has-permission.directive */ 79561);



















const _c0 = ["formSection"];
function CustomerComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r0.errorMessage, " ");
  }
}
function CustomerComponent_mat_error_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Customer name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Customer name must be at least 3 characters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Mobile number is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Please enter a valid mobile number (10-12 digits) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Enter a valid email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_option_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const city_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", city_r13.cityname);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](city_r13.cityname);
  }
}
function CustomerComponent_mat_error_36_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " City is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_mat_error_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Active status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
}
function CustomerComponent_ng_container_61_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r14.customerForm.invalid || ctx_r14.customerForm.pending);
  }
}
function CustomerComponent_ng_container_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerComponent_ng_container_61_button_1_Template, 2, 1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx_r9.isEditMode);
  }
}
function CustomerComponent_ng_container_62_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("disabled", ctx_r15.customerForm.invalid || ctx_r15.customerForm.pending);
  }
}
function CustomerComponent_ng_container_62_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerComponent_ng_container_62_button_1_Template, 2, 1, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r10.isEditMode);
  }
}
function CustomerComponent_button_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomerComponent_button_78_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r16.toggleForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CustomerComponent_div_89_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomerComponent_div_89_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r23);
      const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r21.editItem(data_r18.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CustomerComponent_div_89_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomerComponent_div_89_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r26);
      const data_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r24.deleteItem(data_r18.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function CustomerComponent_div_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, CustomerComponent_div_89_a_1_Template, 3, 0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, CustomerComponent_div_89_a_2_Template, 3, 0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", "customer:update");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", "customer:delete");
  }
}
const _c1 = function () {
  return {
    visible: true
  };
};
const _c2 = function () {
  return {
    visible: true,
    width: 240,
    placeholder: "Search..."
  };
};
const _c3 = function () {
  return {
    pageSize: 15
  };
};
class CustomerComponent {
  constructor(customerService, formBuilder, authService, permissionService) {
    this.customerService = customerService;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.permissionService = permissionService;
    this.isFormOpen = false;
    this.isEditMode = false;
    this.customers = [];
    this.cityDropdown = [];
    this.totalCustomers = 0;
    this.activeCustomers = 0;
    this.deactiveCustomers = 0;
    this.errorMessage = '';
    this.currentUserId = 1;
  }
  ngOnInit() {
    this.getCurrentUserId();
    this.initializeForm();
    this.loadCustomers();
    this.loadCounts();
    this.loadCityDropdown();
  }
  getCurrentUserId() {
    const user = this.authService.getUser();
    if (user) {
      this.currentUserId = user.userId || user.userid || user.user_id || user.id || 1;
    } else {
      this.currentUserId = 1;
    }
  }
  initializeForm() {
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    this.customerForm = this.formBuilder.group({
      customerid: [0],
      customername: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.maxLength(100)]],
      customermobile: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.pattern(/^[0-9]{10,12}$/)]],
      customeremail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.email]],
      customeraddress: [''],
      customercity: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      customerstate: [''],
      customercountry: [''],
      customerpincode: [''],
      accountid: [accountId],
      instanceid: [instanceId],
      cityid: [null],
      isactive: ['true', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      createddate: [new Date()],
      updateddate: [new Date()],
      createdby: [this.currentUserId],
      updatedby: [this.currentUserId]
    });
  }
  byAccountId(list, accountId) {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter(item => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }
  byAccountAndInstance(list, accountId, instanceId) {
    if (!Array.isArray(list)) return [];
    if (accountId == null) return list;
    return list.filter(item => {
      const accId = item.accountid ?? item.accountId ?? item.account_id;
      if (accId == null || Number(accId) !== Number(accountId)) return false;
      if (instanceId != null && instanceId !== 0) {
        const instId = item.instanceid ?? item.instanceId ?? item.instance_id;
        return instId != null && Number(instId) === Number(instanceId);
      }
      return true;
    });
  }
  loadCustomers() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();
    this.customerService.getCustomerList().subscribe({
      next: data => {
        const raw = data || [];
        const filtered = accountId != null ? this.byAccountAndInstance(raw, accountId, instanceId ?? null) : raw;
        this.customers = filtered.sort((a, b) => Number(b.customerid || 0) - Number(a.customerid || 0));
        this.totalCustomers = this.customers.length;
        this.activeCustomers = this.customers.filter(c => c.isactive === true || c.isactive === 'true' || c.isactive === 1).length;
        this.deactiveCustomers = this.totalCustomers - this.activeCustomers;
      },
      error: err => {
        console.error('Error loading customers:', err);
        this.errorMessage = 'Failed to load customers. Please check the API connection.';
      }
    });
  }
  loadCounts() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();
    this.customerService.getCustomerList().subscribe({
      next: data => {
        const raw = data || [];
        const filtered = accountId != null ? this.byAccountAndInstance(raw, accountId, instanceId ?? null) : raw;
        this.totalCustomers = filtered.length;
        this.activeCustomers = filtered.filter(c => c.isactive === true || c.isactive === 'true' || c.isactive === 1).length;
        this.deactiveCustomers = this.totalCustomers - this.activeCustomers;
      },
      error: err => console.error('Error loading counts:', err)
    });
  }
  loadCityDropdown() {
    this.customerService.getCityDropdown().subscribe({
      next: items => this.cityDropdown = items,
      error: err => console.error('Error loading cities:', err)
    });
  }
  onCityChange(event) {
    const selectedValue = event.target.value;
    const selectedCity = this.cityDropdown.find(c => c.cityname === selectedValue);
    if (selectedCity) {
      this.customerForm.patchValue({
        cityid: Number(selectedCity.cityid),
        customerstate: selectedCity.citystate,
        customercountry: selectedCity.citycountry
      });
    }
  }
  toggleForm() {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.errorMessage = '';
    this.getCurrentUserId();
    this.initializeForm();
  }
  editItem(item) {
    if (!item || !item.customerid) {
      this.errorMessage = 'Invalid customer data. Cannot edit.';
      return;
    }
    this.isFormOpen = true;
    this.isEditMode = true;
    this.errorMessage = '';
    this.customerForm.patchValue({
      customerid: item.customerid,
      customername: item.customername || '',
      customermobile: item.customermobile || '',
      customeremail: item.customeremail || '',
      customeraddress: item.customeraddress || '',
      customercity: item.customercity || '',
      customerstate: item.customerstate || '',
      customercountry: item.customercountry || '',
      customerpincode: item.customerpincode || '',
      accountid: item.accountid ?? this.authService.getAccountId() ?? 1,
      instanceid: item.instanceid ?? this.authService.getInstanceId() ?? 1,
      cityid: item.cityid || 1,
      isactive: item.isactive === true || item.isactive === 'true' || item.isactive === 1 ? 'true' : 'false',
      createddate: item.createddate || new Date(),
      updateddate: new Date(),
      createdby: item.createdby || 1,
      updatedby: this.currentUserId
    }, {
      emitEvent: false
    });
  }
  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.customername}?`)) {
      this.customerService.deleteCustomer(item.customerid).subscribe({
        next: () => {
          this.loadCustomers();
          this.loadCounts();
        },
        error: err => {
          console.error('Error deleting customer:', err);
          this.errorMessage = 'Error deleting customer. Please try again.';
        }
      });
    }
  }
  onSubmit() {
    this.markFormGroupTouched();
    if (!this.customerForm.valid) {
      this.errorMessage = 'Please fill all required fields correctly.';
      return;
    }
    this.errorMessage = '';
    this.customerForm.patchValue({
      updatedby: this.currentUserId,
      updateddate: new Date()
    });
    if (this.isEditMode) {
      const formData = {
        ...this.customerForm.value
      };
      if (!formData.customerid || formData.customerid === 0) {
        this.errorMessage = 'Customer ID is missing. Cannot update.';
        return;
      }
      this.customerService.updateCustomer(formData).subscribe({
        next: () => {
          this.loadCustomers();
          this.loadCounts();
          this.resetForm();
        },
        error: err => {
          this.errorMessage = err.error?.message || 'Error updating customer. Please try again.';
        }
      });
    } else {
      this.customerForm.patchValue({
        createdby: this.currentUserId,
        createddate: new Date()
      });
      this.customerService.addCustomer(this.customerForm.value).subscribe({
        next: () => {
          this.loadCustomers();
          this.loadCounts();
          this.resetForm();
        },
        error: err => {
          this.errorMessage = err.error?.message || err.error?.error || 'Something went wrong. Please try again.';
        }
      });
    }
  }
  resetForm() {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.errorMessage = '';
    this.getCurrentUserId();
    const accountId = this.authService.getAccountId() ?? 1;
    const instanceId = this.authService.getInstanceId() ?? 1;
    this.customerForm.reset({
      customerid: 0,
      customername: '',
      customermobile: '',
      customeremail: '',
      customeraddress: '',
      customercity: '',
      customerstate: '',
      customercountry: '',
      customerpincode: '',
      accountid: accountId,
      instanceid: instanceId,
      cityid: null,
      isactive: 'true',
      createddate: new Date(),
      updateddate: new Date(),
      createdby: this.currentUserId,
      updatedby: this.currentUserId
    }, {
      emitEvent: false
    });
    Object.keys(this.customerForm.controls).forEach(key => {
      const ctrl = this.customerForm.get(key);
      ctrl?.setErrors(null);
      ctrl?.markAsUntouched();
      ctrl?.markAsPristine();
    });
  }
  markFormGroupTouched() {
    Object.keys(this.customerForm.controls).forEach(key => {
      this.customerForm.get(key)?.markAsTouched();
    });
  }
  onExporting(e) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_2__.Workbook();
    const worksheet = workbook.addWorksheet('Customers');
    (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__.exportDataGrid)({
      component: e.component,
      worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, 'CustomersData.xlsx');
      });
    });
    e.cancel = true;
  }
  static {
    this.ɵfac = function CustomerComponent_Factory(t) {
      return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_4__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_permission_service__WEBPACK_IMPORTED_MODULE_5__.PermissionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: CustomerComponent,
      selectors: [["app-customer"]],
      viewQuery: function CustomerComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.formSection = _t.first);
        }
      },
      decls: 91,
      vars: 41,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], ["class", "error-message", "style", "background-color: #f8d7da; color: #721c24; padding: 12px; border-radius: 4px; margin-bottom: 15px; border: 1px solid #f5c6cb;", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matInput", "", "placeholder", "Customer Name", "formControlName", "customername", 1, "mat-input-element", "custom-placeholder"], [4, "ngIf"], ["maxlength", "12", "matInput", "", "placeholder", "1234-567890", "formControlName", "customermobile", "type", "tel", 1, "mat-input-element", "custom-placeholder"], [2, "color", "black !important"], ["matInput", "", "placeholder", "Email", "formControlName", "customeremail", "type", "email", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Address", "formControlName", "customeraddress", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "customercity", 3, "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "State", "formControlName", "customerstate", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Country", "formControlName", "customercountry", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Pincode", "formControlName", "customerpincode", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "isactive"], ["value", "true"], ["value", "false"], [1, "form-submit"], [4, "appHasPermission"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], ["class", "add-btn", 3, "click", 4, "appHasPermission"], ["title", "Customers", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "customerid", "caption", "ID", "sortOrder", "desc", 3, "width", "allowSorting"], ["dataField", "customername", "caption", "Customer Name"], ["dataField", "customermobile", "caption", "Mobile", 3, "width"], ["dataField", "customeremail", "caption", "Email", 3, "width"], ["dataField", "customercity", "caption", "City", 3, "width"], ["dataField", "customerstate", "caption", "State", 3, "width"], ["dataField", "customerpincode", "caption", "Pincode", 3, "width"], ["dataField", "isactive", "caption", "Status", "alignment", "center", 3, "width"], ["caption", "Actions", "alignment", "center", "cellTemplate", "actionTemplate", 3, "width"], ["style", "display:flex; gap:10px; justify-content:center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [1, "error-message", 2, "background-color", "#f8d7da", "color", "#721c24", "padding", "12px", "border-radius", "4px", "margin-bottom", "15px", "border", "1px solid #f5c6cb"], [3, "value"], ["mat-raised-button", "", "type", "submit", "class", "btn-primary", 3, "disabled", 4, "ngIf"], ["mat-raised-button", "", "type", "submit", 1, "btn-primary", 3, "disabled"], [1, "add-btn", 3, "click"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], ["style", "cursor:pointer;", 3, "click", 4, "appHasPermission"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"]],
      template: function CustomerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function CustomerComponent_Template_button_click_4_listener() {
            return ctx.resetForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](6, CustomerComponent_div_6_Template, 2, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function CustomerComponent_Template_form_ngSubmit_7_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-form-field", 5)(9, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Customer Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, CustomerComponent_mat_error_12_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, CustomerComponent_mat_error_13_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "mat-form-field", 5)(15, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Mobile Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](17, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, CustomerComponent_mat_error_18_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, CustomerComponent_mat_error_19_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "mat-form-field", 5)(21, "mat-label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, CustomerComponent_mat_error_24_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "mat-form-field", 5)(26, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](28, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "mat-form-field", 5)(30, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "select", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function CustomerComponent_Template_select_change_32_listener($event) {
            return ctx.onCityChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](33, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](35, CustomerComponent_option_35_Template, 2, 2, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](36, CustomerComponent_mat_error_36_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "mat-form-field", 5)(38, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](39, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](40, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "mat-form-field", 5)(42, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](44, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](45, "mat-form-field", 5)(46, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](47, "Pincode");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](48, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](49, "mat-form-field", 5)(50, "mat-label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](51, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](52, "select", 19)(53, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](54, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](55, "option", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](56, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](57, "option", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](58, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](59, CustomerComponent_mat_error_59_Template, 2, 0, "mat-error", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](60, "div", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](61, CustomerComponent_ng_container_61_Template, 2, 1, "ng-container", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](62, CustomerComponent_ng_container_62_Template, 2, 1, "ng-container", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](63, "div", 24)(64, "mat-card")(65, "mat-card-header")(66, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](67);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](68, "mat-card")(69, "mat-card-header")(70, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](71);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](72, "mat-card")(73, "mat-card-header")(74, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](75);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](76, "div", 25)(77, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](78, CustomerComponent_button_78_Template, 3, 0, "button", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](79, "dx-data-grid", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("onExporting", function CustomerComponent_Template_dx_data_grid_onExporting_79_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](80, "dxi-column", 29)(81, "dxi-column", 30)(82, "dxi-column", 31)(83, "dxi-column", 32)(84, "dxi-column", 33)(85, "dxi-column", 34)(86, "dxi-column", 35)(87, "dxi-column", 36)(88, "dxi-column", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](89, CustomerComponent_div_89_Template, 3, 2, "div", 38);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](90, "dxo-export", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          let tmp_4_0;
          let tmp_5_0;
          let tmp_6_0;
          let tmp_7_0;
          let tmp_8_0;
          let tmp_10_0;
          let tmp_11_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit Customer" : "Add Customer");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.customerForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.customerForm.get("customername")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.customerForm.get("customername")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.customerForm.get("customername")) == null ? null : tmp_5_0.hasError("minlength")) && ((tmp_5_0 = ctx.customerForm.get("customername")) == null ? null : tmp_5_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx.customerForm.get("customermobile")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.customerForm.get("customermobile")) == null ? null : tmp_6_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx.customerForm.get("customermobile")) == null ? null : tmp_7_0.hasError("pattern")) && ((tmp_7_0 = ctx.customerForm.get("customermobile")) == null ? null : tmp_7_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx.customerForm.get("customeremail")) == null ? null : tmp_8_0.hasError("email")) && ((tmp_8_0 = ctx.customerForm.get("customeremail")) == null ? null : tmp_8_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.cityDropdown);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx.customerForm.get("customercity")) == null ? null : tmp_10_0.hasError("required")) && ((tmp_10_0 = ctx.customerForm.get("customercity")) == null ? null : tmp_10_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](23);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx.customerForm.get("isactive")) == null ? null : tmp_11_0.hasError("required")) && ((tmp_11_0 = ctx.customerForm.get("isactive")) == null ? null : tmp_11_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", "customer:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", "customer:update");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Customer\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalCustomers, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeCustomers, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveCustomers, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("appHasPermission", "customer:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dataSource", ctx.customers)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](38, _c1))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](39, _c2))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](40, _c3));
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 80)("allowSorting", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 220);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 110);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 100);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("width", 120);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_12__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__.MatIcon, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_16__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_16__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_17__.DxTemplateDirective, _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_6__.HasPermissionDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n  max-width: 100%;\n  margin: 15px auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n  background-color: #ffff;\n  margin-top: 1% !important;\n  height: 400px !important;\nwidth: 1237px !important;\n}\n\n\n.form-submit[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  text-align: center;\n}\n.mat-icon[_ngcontent-%COMP%]{\n  color: black;\n  height: 10px;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.btn-pos-list[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 0px;\n  right: 355px;\n  width: 40px;\n  z-index: 1;\n}\n\n.edit-btn[_ngcontent-%COMP%]{\n  font-size: 18px;\n  color:#337ab7;\n}\n  .dx-datagrid .dx-row > td {\n vertical-align: middle !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  font-size: 30px;\n  color: black;\n  font-weight: 700px;\n  margin-left: 1134px;\n  margin-top: -14px;\n}\n\n\n\n  app-customer {\n  --mdc-outlined-text-field-focus-outline-color: #f7f5f5  !important;\n  --mdc-outlined-text-field-outline-color: #f7f5f5  !important;\n}\n\n\n\n  app-customer .mat-form-field-appearance-outline .mat-form-field-outline,   app-customer .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline {\n  color: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  border-color: #f7f5f5 !important;\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline-start,   .form-container .mat-form-field-appearance-outline .mat-form-field-outline-gap,   .form-container .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-color: #f7f5f5 !important;\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-start,   .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-gap,   .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-end {\n  border-color: #f7f5f5 !important;\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline-thick svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline svg path {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline svg path {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336 !important;\n  border-color: #f44336 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline {\n  color: #f44336 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline svg,   .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick svg {\n  fill: #f44336 !important;\n  stroke: #f44336 !important;\n}\n\n\n\n  app-customer .example-card {\n  max-width: none !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY3VzdG9tZXIvY3VzdG9tZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkJBQTJCLHlDQUF5QztFQUNsRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCLHdCQUF3QjtBQUN4Qjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0NBQ0MsaUNBQWlDO0FBQ2xDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBLDBDQUEwQztBQUMxQztFQUNFLGtFQUFrRTtFQUNsRSw0REFBNEQ7QUFDOUQ7O0FBRUEsOERBQThEO0FBQzlEOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQSxrREFBa0Q7QUFDbEQ7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHVEQUF1RDtBQUN2RDtFQUNFLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUEsMkJBQTJCO0FBQzNCOzs7RUFHRSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBLGlCQUFpQjtBQUNqQjs7O0VBR0UsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQSxxRUFBcUU7QUFDckU7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQSxrRUFBa0U7QUFDbEU7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvcm0tY29udGFpbmVyIHsgICAgICAgICAgLypGb3JtIENvbnRhaW5lciB3aXRoIGZvcm0gZmllbGRzIGluc2lkZSovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gIG1hcmdpbi10b3A6IDElICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDAwcHggIWltcG9ydGFudDtcbndpZHRoOiAxMjM3cHggIWltcG9ydGFudDtcbn1cblxuXG4uZm9ybS1zdWJtaXR7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtaWNvbntcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idG4tcG9zLWxpc3R7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAzNTVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5lZGl0LWJ0bntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjojMzM3YWI3O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtcm93ID4gdGQge1xuIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICBtYXJnaW4tbGVmdDogMTEzNHB4O1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbn1cblxuLyogT3ZlcnJpZGUgTWF0ZXJpYWwgdGhlbWUgQ1NTIHZhcmlhYmxlcyAqL1xuOjpuZy1kZWVwIGFwcC1jdXN0b21lciB7XG4gIC0tbWRjLW91dGxpbmVkLXRleHQtZmllbGQtZm9jdXMtb3V0bGluZS1jb2xvcjogI2Y3ZjVmNSAgIWltcG9ydGFudDtcbiAgLS1tZGMtb3V0bGluZWQtdGV4dC1maWVsZC1vdXRsaW5lLWNvbG9yOiAjZjdmNWY1ICAhaW1wb3J0YW50O1xufVxuXG4vKiBHbG9iYWwgb3ZlcnJpZGUgZm9yIGFsbCBmb3JtIGZpZWxkcyAtIGhpZ2hlc3Qgc3BlY2lmaWNpdHkgKi9cbjo6bmctZGVlcCBhcHAtY3VzdG9tZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSxcbjo6bmctZGVlcCBhcHAtY3VzdG9tZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEZvciBhbGwgZm9ybSBmaWVsZHMgaW4gdGhlIGN1c3RvbWVyIGNvbXBvbmVudCAqL1xuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuLyogV2hlbiBmaWVsZCBpcyBmb2N1c2VkL3NlbGVjdGVkICovXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xuICBjb2xvcjogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xuICBjb2xvcjogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCdzIGFjY2VudCBjb2xvciBmb3IgZm9jdXNlZCBzdGF0ZSAqL1xuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIEZvciBhbGwgb3V0bGluZSBzdGF0ZXMgKi9cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAsXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFdoZW4gZm9jdXNlZCAqL1xuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0LFxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCxcbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xuICBib3JkZXItY29sb3I6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuLyogVGFyZ2V0IFNWRyBlbGVtZW50cyBmb3Igb3V0bGluZSAoTWF0ZXJpYWwgdXNlcyBTVkcgZm9yIG91dGxpbmVzKSAqL1xuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHN2ZyB7XG4gIGZpbGw6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbiAgc3Ryb2tlOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSBzdmcge1xuICBmaWxsOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIHN0cm9rZTogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sgc3ZnIHtcbiAgZmlsbDogI2Y3ZjVmNSAhaW1wb3J0YW50O1xuICBzdHJva2U6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHN2ZyB7XG4gIGZpbGw6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbiAgc3Ryb2tlOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFRhcmdldCB0aGUgcGF0aCBlbGVtZW50cyBpbnNpZGUgU1ZHICovXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgc3ZnIHBhdGgge1xuICBmaWxsOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIHN0cm9rZTogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgc3ZnIHBhdGgge1xuICBmaWxsOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIHN0cm9rZTogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG4vKiBLZWVwIGVycm9yIHN0YXRlcyByZWQgZm9yIHZhbGlkYXRpb24gZmVlZGJhY2sgKi9cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6ICNmNDQzMzYgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgc3ZnLFxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb3JtLWZpZWxkLWludmFsaWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sgc3ZnIHtcbiAgZmlsbDogI2Y0NDMzNiAhaW1wb3J0YW50O1xuICBzdHJva2U6ICNmNDQzMzYgIWltcG9ydGFudDtcbn1cblxuLyogT3ZlcnJpZGUgZ2xvYmFsIG1heC13aWR0aCBvbiBleGFtcGxlLWNhcmQgZm9yIGN1c3RvbWVyIG1vZHVsZSAqL1xuOjpuZy1kZWVwIGFwcC1jdXN0b21lciAuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 84068:
/*!***************************************************!*\
  !*** ./src/app/pages/customer/customer.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomerModule: () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-routing.module */ 47133);
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.component */ 9889);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 22866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);









class CustomerModule {
  static {
    this.ɵfac = function CustomerModule_Factory(t) {
      return new (t || CustomerModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: CustomerModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_2__.FormMaterialModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_8__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxButtonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CustomerModule, {
    declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_1__.CustomerComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_2__.FormMaterialModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_8__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxButtonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_customer_customer_module_ts.js.map