"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_salesedit_salesedit_module_ts"],{

/***/ 29447:
/*!*************************************************************!*\
  !*** ./src/app/pages/salesedit/salesedit-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaleseditRoutingModule: () => (/* binding */ SaleseditRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _salesedit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesedit.component */ 70631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: ':invoiceno',
  component: _salesedit_component__WEBPACK_IMPORTED_MODULE_0__.SaleseditComponent
}];
class SaleseditRoutingModule {
  static {
    this.ɵfac = function SaleseditRoutingModule_Factory(t) {
      return new (t || SaleseditRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: SaleseditRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SaleseditRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 70631:
/*!********************************************************!*\
  !*** ./src/app/pages/salesedit/salesedit.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaleseditComponent: () => (/* binding */ SaleseditComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_sales_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/sales.service */ 14188);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/auth.service */ 9822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../directives/has-permission.directive */ 79561);

















const _c0 = ["customerSelect"];
const _c1 = ["qtyInput"];
const _c2 = ["discInput"];
const _c3 = ["descInput"];
function SaleseditComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "hourglass_empty");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Loading invoice...");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SaleseditComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "error_outline");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.errorMessage);
  }
}
function SaleseditComponent_form_4_ng_container_15_option_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const customer_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", customer_r13.customerid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", customer_r13.customername, " ");
  }
}
function SaleseditComponent_form_4_ng_container_15_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Customer is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SaleseditComponent_form_4_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "mat-form-field", 58)(2, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Select Customer ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "F1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "select", 60, 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function SaleseditComponent_form_4_ng_container_15_Template_select_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r14.onCustomerChange($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Select Customer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, SaleseditComponent_form_4_ng_container_15_option_10_Template, 2, 2, "option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, SaleseditComponent_form_4_ng_container_15_mat_error_11_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.customerOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r4.salesForm.get("customerid")) == null ? null : tmp_1_0.hasError("required")) && ((tmp_1_0 = ctx_r4.salesForm.get("customerid")) == null ? null : tmp_1_0.touched));
  }
}
function SaleseditComponent_form_4_div_16_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r16.salesForm.get("customermobile")) == null ? null : tmp_0_0.value);
  }
}
function SaleseditComponent_form_4_div_16_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"]((tmp_0_0 = ctx_r17.salesForm.get("customeremail")) == null ? null : tmp_0_0.value);
  }
}
function SaleseditComponent_form_4_div_16_div_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](", ", (tmp_0_0 = ctx_r19.salesForm.get("customercity")) == null ? null : tmp_0_0.value, "");
  }
}
function SaleseditComponent_form_4_div_16_div_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](", ", (tmp_0_0 = ctx_r20.salesForm.get("customerstate")) == null ? null : tmp_0_0.value, "");
  }
}
function SaleseditComponent_form_4_div_16_div_15_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" - ", (tmp_0_0 = ctx_r21.salesForm.get("customerpincode")) == null ? null : tmp_0_0.value, "");
  }
}
function SaleseditComponent_form_4_div_16_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 71)(1, "mat-icon", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "location_on");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SaleseditComponent_form_4_div_16_div_15_span_5_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, SaleseditComponent_form_4_div_16_div_15_span_6_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SaleseditComponent_form_4_div_16_div_15_span_7_Template, 2, 1, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r18.salesForm.get("customeraddress")) == null ? null : tmp_0_0.value, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r18.salesForm.get("customercity")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r18.salesForm.get("customerstate")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r18.salesForm.get("customerpincode")) == null ? null : tmp_3_0.value);
  }
}
function SaleseditComponent_form_4_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 64)(1, "div", 65)(2, "span", 66)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "account_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 67)(7, "button", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaleseditComponent_form_4_div_16_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r22.clearCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaleseditComponent_form_4_div_16_Template_button_click_10_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r24.clearCustomer());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, SaleseditComponent_form_4_div_16_div_13_Template, 5, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, SaleseditComponent_form_4_div_16_div_14_Template, 5, 1, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SaleseditComponent_form_4_div_16_div_15_Template, 8, 4, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r5.salesForm.get("customername")) == null ? null : tmp_0_0.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r5.salesForm.get("customermobile")) == null ? null : tmp_1_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r5.salesForm.get("customeremail")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_3_0 = ctx_r5.salesForm.get("customeraddress")) == null ? null : tmp_3_0.value);
  }
}
function SaleseditComponent_form_4_mat_error_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Payment method is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SaleseditComponent_form_4_mat_error_76_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Payment status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SaleseditComponent_form_4_tr_113_mat_option_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-option", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const product_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", product_r34.productname);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", product_r34.productname, " ");
  }
}
function SaleseditComponent_form_4_tr_113_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SaleseditComponent_form_4_tr_113_mat_error_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function SaleseditComponent_form_4_tr_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 74)(1, "td")(2, "mat-form-field", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 76, 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "mat-autocomplete", 78, 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("optionSelected", function SaleseditComponent_form_4_tr_113_Template_mat_autocomplete_optionSelected_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const i_r26 = restoredCtx.index;
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r35.onProductSelect(i_r26, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, SaleseditComponent_form_4_tr_113_mat_option_7_Template, 2, 2, "mat-option", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, SaleseditComponent_form_4_tr_113_mat_error_8_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "td")(12, "mat-form-field", 81)(13, "input", 82, 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function SaleseditComponent_form_4_tr_113_Template_input_input_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const i_r26 = restoredCtx.index;
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r37.calculateItemAmount(i_r26));
    })("keydown.enter", function SaleseditComponent_form_4_tr_113_Template_input_keydown_enter_13_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const i_r26 = restoredCtx.index;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.focusDiscount(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SaleseditComponent_form_4_tr_113_mat_error_15_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td")(20, "mat-form-field", 84)(21, "input", 85, 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("input", function SaleseditComponent_form_4_tr_113_Template_input_input_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const i_r26 = restoredCtx.index;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r39.calculateItemAmount(i_r26));
    })("keydown.enter", function SaleseditComponent_form_4_tr_113_Template_input_keydown_enter_21_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const i_r26 = restoredCtx.index;
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      $event.preventDefault();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r40.addItemAndFocusNext(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](27, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "td", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](30, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "td", 90)(32, "button", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaleseditComponent_form_4_tr_113_Template_button_click_32_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r36);
      const i_r26 = restoredCtx.index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r41.removeItem(i_r26));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const i_r26 = ctx.index;
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matAutocomplete", _r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.filteredProducts[i_r26] || ctx_r9.productOptions);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_3_0 = item_r25.get("description")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = item_r25.get("description")) == null ? null : tmp_3_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ((tmp_4_0 = item_r25.get("hsnSac")) == null ? null : tmp_4_0.value) || "\u2014", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = item_r25.get("quantity")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = item_r25.get("quantity")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](18, 10, ((tmp_6_0 = item_r25.get("rate")) == null ? null : tmp_6_0.value) || 0, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](27, 13, ((tmp_7_0 = item_r25.get("gstPercent")) == null ? null : tmp_7_0.value) || 0, "1.2-2"), "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](30, 16, ((tmp_8_0 = item_r25.get("amount")) == null ? null : tmp_8_0.value) || 0, "1.2-2"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r9.items.length === 1);
  }
}
function SaleseditComponent_form_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function SaleseditComponent_form_4_Template_form_ngSubmit_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r42.onSubmit());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9)(2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "GST Invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Edit existing invoice");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 15)(10, "div", 16)(11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "person");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Customer Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, SaleseditComponent_form_4_ng_container_15_Template, 12, 2, "ng-container", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, SaleseditComponent_form_4_div_16_Template, 16, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 19)(19, "div", 20)(20, "span", 21)(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "receipt");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Invoice Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function SaleseditComponent_form_4_Template_button_click_25_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r43);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r44.goBackToSales());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "arrow_back");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, " Back to Sales ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 23)(30, "mat-form-field", 24)(31, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Invoice No.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](33, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "mat-form-field", 24)(35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](37, "input", 26)(38, "mat-datepicker-toggle", 27)(39, "mat-datepicker", null, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "mat-form-field", 24)(42, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "select", 29)(45, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Select payment method");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Cash");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50, "Credit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Debit Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "Bank Transfer");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "UPI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](58, "Cheque");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "option", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Other");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, SaleseditComponent_form_4_mat_error_61_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "mat-form-field", 24)(63, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](64, "Payment Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "select", 38)(66, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Select payment status");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "Paid");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "option", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Pending");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "option", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Partial");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "option", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75, "Cancelled");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, SaleseditComponent_form_4_mat_error_76_Template, 2, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 43)(78, "div", 16)(79, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](80, "inventory_2");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 44)(84, "table", 45)(85, "colgroup");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](86, "col", 46)(87, "col", 47)(88, "col", 48)(89, "col", 49)(90, "col", 50)(91, "col", 51)(92, "col", 52)(93, "col", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "thead")(95, "tr")(96, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "DESCRIPTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, "HSN/SAC");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "QTY");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](102, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](103, "RATE (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](105, "DISC %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](107, "GST %");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "th", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](109, "AMOUNT (\u20B9)");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "th", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "ACTION");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "tbody", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, SaleseditComponent_form_4_tr_113_Template, 35, 19, "tr", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](40);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    let tmp_1_0;
    let tmp_2_0;
    let tmp_5_0;
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.salesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !((tmp_1_0 = ctx_r2.salesForm.get("customername")) == null ? null : tmp_1_0.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", (tmp_2_0 = ctx_r2.salesForm.get("customername")) == null ? null : tmp_2_0.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("matDatepicker", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("for", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r2.salesForm.get("paymentmethod")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx_r2.salesForm.get("paymentmethod")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r2.salesForm.get("paymentstatus")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx_r2.salesForm.get("paymentstatus")) == null ? null : tmp_6_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.items.controls);
  }
}
function SaleseditComponent_div_5_span_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" Saved \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, ctx_r45.getTotalDiscount(), "1.2-2"), " ");
  }
}
function SaleseditComponent_div_5_button_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 107)(1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "save");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "SAVE");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
function SaleseditComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 92)(1, "div", 93)(2, "div", 94)(3, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Gross Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 97)(9, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Total Discount");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 99)(15, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 94)(21, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "CGST");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](25, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 94)(27, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "SGST");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](31, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 94)(33, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](34, "Total GST");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "span", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](37, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 101)(39, "span", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Grand Total");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "span", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](43, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, SaleseditComponent_div_5_span_44_Template, 3, 4, "span", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, SaleseditComponent_div_5_button_46_Template, 5, 0, "button", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 9, ctx_r3.getGrossSubtotal(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("- \u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](13, 12, ctx_r3.getTotalDiscount(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](19, 15, ctx_r3.getSubtotal(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](25, 18, ctx_r3.getCgst(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](31, 21, ctx_r3.getSgst(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](37, 24, ctx_r3.getTotalGst(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](43, 27, ctx_r3.getGrandTotal(), "1.2-2"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.getTotalDiscount() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("appHasPermission", "sales:update");
  }
}
class SaleseditComponent {
  onF1Key(event) {
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
  constructor(salesService, formBuilder, authService, cdr, router, route) {
    this.salesService = salesService;
    this.formBuilder = formBuilder;
    this.authService = authService;
    this.cdr = cdr;
    this.router = router;
    this.route = route;
    this.customerOptions = [];
    this.productOptions = [];
    this.filteredProducts = [];
    this.errorMessage = '';
    this.currentUserId = 1;
    this.invoiceno = null;
    this.isLoading = false;
  }
  ngOnInit() {
    this.getCurrentUserId();
    this.initializeForm();
    this.loadProducts();
    const invoicenoParam = this.route.snapshot.paramMap.get('invoiceno');
    if (invoicenoParam && !isNaN(+invoicenoParam) && +invoicenoParam > 0) {
      this.invoiceno = +invoicenoParam;
      this.loadSalesSummaryWithCustomers(this.invoiceno);
    } else {
      this.errorMessage = 'Invalid invoice number. Cannot edit.';
    }
  }
  loadProducts() {
    this.salesService.getProducts().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]))).subscribe({
      next: products => {
        this.productOptions = Array.isArray(products) ? products : [];
        this.filteredProducts = this.items.controls.map(() => [...this.productOptions]);
        this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
      }
    });
  }
  subscribeDescriptionFilter(index) {
    const ctrl = this.items.at(index)?.get('description');
    if (!ctrl) return;
    ctrl.valueChanges.subscribe(val => {
      const search = (val || '').toLowerCase();
      this.filteredProducts[index] = search ? this.productOptions.filter(p => (p.productname || '').toLowerCase().includes(search)) : [...this.productOptions];
    });
  }
  onProductSelect(index, event) {
    const selectedProductName = event.option.value;
    const selectedProduct = this.productOptions.find(p => p.productname === selectedProductName);
    const item = this.items.at(index);
    if (selectedProduct) {
      const gstPercent = selectedProduct.productgstpercent || selectedProduct.totalgstpercent || selectedProduct.gstpercent || selectedProduct.gst || 0;
      item.patchValue({
        productid: selectedProduct.productid ?? selectedProduct.productId ?? null,
        description: selectedProduct.productname || '',
        hsnSac: selectedProduct.producthsncode || '',
        rate: selectedProduct.productlastprice || selectedProduct.price || selectedProduct.unitprice || 0,
        discountPct: 0,
        quantity: null,
        gstPercent: Number(gstPercent)
      }, {
        emitEvent: false
      });
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
  goBackToSales() {
    this.router.navigate(['/pages/sales']);
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
    const today = new Date();
    this.salesForm = this.formBuilder.group({
      salesid: [0],
      invoiceno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      saledate: [today, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      customerid: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      customername: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
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
      paymentmethod: ['Cash', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      paymentstatus: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      notes: [''],
      isactive: [true],
      createddate: [today],
      updateddate: [today],
      createdby: [this.currentUserId],
      updatedby: [this.currentUserId]
    });
    this.salesForm.valueChanges.subscribe(() => {
      this.calculateTotals();
    });
  }
  createItemFormGroup() {
    return this.formBuilder.group({
      productid: [null],
      description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      hsnSac: [''],
      quantity: [1, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(1)]],
      rate: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0)]],
      discountPct: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.max(100)]],
      gstPercent: [0],
      amount: [0]
    });
  }
  get items() {
    return this.salesForm.get('items');
  }
  addItem() {
    const idx = this.items.length;
    this.items.push(this.createItemFormGroup());
    this.filteredProducts.push([...this.productOptions]);
    this.subscribeDescriptionFilter(idx);
    this.calculateTotals();
  }
  removeItem(index) {
    if (this.items.length > 1) {
      this.items.removeAt(index);
      this.calculateTotals();
    }
  }
  calculateItemAmount(index) {
    const item = this.items.at(index);
    const quantity = parseFloat(item.get('quantity')?.value || 0);
    const rate = parseFloat(item.get('rate')?.value || 0);
    const discountPct = parseFloat(item.get('discountPct')?.value || 0);
    const grossAmount = quantity * rate;
    const discountValue = grossAmount * discountPct / 100;
    const amount = grossAmount - discountValue;
    item.patchValue({
      amount: amount.toFixed(2)
    }, {
      emitEvent: false
    });
    this.calculateTotals();
  }
  calculateTotals() {
    let subtotal = 0;
    let totalGst = 0;
    this.items.controls.forEach(item => {
      const amount = parseFloat(item.get('amount')?.value || 0);
      const gstPercent = parseFloat(item.get('gstPercent')?.value || 0);
      subtotal += amount;
      totalGst += amount * gstPercent / 100;
    });
    const grandtotal = subtotal + totalGst;
    this.salesForm.patchValue({
      subtotal: subtotal.toFixed(2),
      totalgst: totalGst.toFixed(2),
      grandtotal: grandtotal.toFixed(2)
    }, {
      emitEvent: false
    });
  }
  getItemDiscount(index) {
    const item = this.items.at(index);
    const quantity = parseFloat(item.get('quantity')?.value || 0);
    const rate = parseFloat(item.get('rate')?.value || 0);
    const discountPct = parseFloat(item.get('discountPct')?.value || 0);
    return quantity * rate * discountPct / 100;
  }
  getSubtotal() {
    return parseFloat(this.salesForm.get('subtotal')?.value || 0);
  }
  getTotalDiscount() {
    let total = 0;
    this.items.controls.forEach((_, i) => {
      total += this.getItemDiscount(i);
    });
    return total;
  }
  getGrossSubtotal() {
    let total = 0;
    this.items.controls.forEach(item => {
      const qty = parseFloat(item.get('quantity')?.value || 0);
      const rate = parseFloat(item.get('rate')?.value || 0);
      total += qty * rate;
    });
    return total;
  }
  getTotalGst() {
    return parseFloat(this.salesForm.get('totalgst')?.value || 0);
  }
  getGrandTotal() {
    return parseFloat(this.salesForm.get('grandtotal')?.value || 0);
  }
  getCgst() {
    return this.getTotalGst() / 2;
  }
  getSgst() {
    return this.getTotalGst() / 2;
  }
  clearCustomer() {
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
    }, {
      emitEvent: false
    });
  }
  onCustomerChange(event) {
    const selectedValue = event.target.value;
    const selectedCustomer = this.customerOptions.find(item => item.customerid == selectedValue);
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
  focusDiscount(index) {
    setTimeout(() => {
      const discList = this.discInputs.toArray();
      if (discList[index]) {
        discList[index].nativeElement.focus();
        discList[index].nativeElement.select();
      }
    }, 0);
  }
  addItemAndFocusNext(index) {
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
  loadSalesSummaryWithCustomers(invoiceno) {
    this.isLoading = true;
    this.salesService.getSalesSummaryByInvoice(invoiceno).subscribe({
      next: summary => {
        this.isLoading = false;
        this.populateFormFromSummary(summary, invoiceno);
        // Load customer list for the dropdown; also use it to enrich missing address
        this.salesService.getCustomers().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([]))).subscribe({
          next: customers => {
            this.customerOptions = Array.isArray(customers) ? customers : [];
            const customerid = this.salesForm.get('customerid')?.value;
            const address = this.salesForm.get('customeraddress')?.value;
            if (customerid && !address) {
              const cust = this.customerOptions.find(c => String(c.customerid ?? c.id) === String(customerid));
              if (cust) {
                this.applyCustomerToForm(cust);
              }
            }
            this.cdr.detectChanges();
          }
        });
      },
      error: err => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message || err?.message || 'Failed to load invoice for editing.';
      }
    });
  }
  applyCustomerToForm(cust) {
    this.salesForm.patchValue({
      customermobile: cust.customermobile ?? cust.customermobileno ?? cust.mobile ?? '',
      customeremail: cust.customeremail ?? cust.email ?? '',
      customeraddress: cust.customeraddress ?? cust.address ?? '',
      customercity: cust.customercity ?? cust.city ?? '',
      customerstate: cust.customerstate ?? cust.state ?? '',
      customercountry: cust.customercountry ?? cust.country ?? '',
      customerpincode: cust.customerpincode ?? cust.pincode ?? '',
      customergstin: cust.customergstin ?? cust.gstin ?? ''
    }, {
      emitEvent: false
    });
    this.cdr.detectChanges();
  }
  populateFormFromSummary(data, invoiceno) {
    const s = data?.summary ?? data;
    const details = data?.details ?? data?.items ?? data?.salesdetails ?? data?.salesdetail ?? data?.sales_details ?? s?.details ?? s?.items ?? s?.salesdetails ?? s?.salesdetail ?? s?.sales_details ?? [];
    while (this.items.length > 0) this.items.removeAt(0);
    const detailList = Array.isArray(details) ? details : [];
    if (detailList.length === 0) {
      this.items.push(this.createItemFormGroup());
    } else {
      detailList.forEach(d => {
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
    const paymentStatusValue = paymentstatus === true || paymentstatus === 'Paid' || paymentstatus === 'true' ? 'Paid' : paymentstatus === false || paymentstatus === 'Unpaid' ? 'Unpaid' : paymentstatus;
    const customerid = s.customerid ?? s.customer_id ?? '';
    const tgross = parseFloat(s.tgrossamount ?? s.tgross_amount ?? s.subtotal ?? 0) || 0;
    const tdis = parseFloat(s.tdisamount ?? s.tdis_amount ?? 0) || 0;
    const netSubtotal = tgross > 0 && tdis >= 0 ? tgross - tdis : tgross;
    this.salesForm.patchValue({
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
    }, {
      emitEvent: false
    });
    this.calculateTotals();
    // Re-sync filteredProducts after items are rebuilt
    this.filteredProducts = this.items.controls.map(() => [...this.productOptions]);
    this.items.controls.forEach((_, i) => this.subscribeDescriptionFilter(i));
  }
  canSave() {
    const v = this.salesForm.value;
    if (!v.customerid && !v.customername) return false;
    if (!v.paymentmethod) return false;
    if (!v.paymentstatus) return false;
    return this.items.controls.some(ctrl => ctrl.get('description')?.value && Number(ctrl.get('quantity')?.value) > 0);
  }
  formatDateForApi(value) {
    if (!value) return new Date().toISOString().split('T')[0];
    if (value instanceof Date) return value.toISOString().split('T')[0];
    if (typeof value === 'string') return value.split('T')[0];
    if (value?.year != null && value?.month != null && value?.day != null) {
      return `${value.year}-${String(value.month).padStart(2, '0')}-${String(value.day).padStart(2, '0')}`;
    }
    return new Date().toISOString().split('T')[0];
  }
  buildPayload() {
    const v = this.salesForm.value;
    const user = this.authService.getUser();
    const accountid = user?.accountid ?? user?.accountId ?? 1;
    const instanceid = user?.instanceid ?? user?.instanceId ?? 1;
    const now = new Date().toISOString().split('T')[0];
    const invoiceno = this.invoiceno ?? (typeof v.invoiceno === 'number' ? v.invoiceno : 0);
    const items = this.items.controls.filter(ctrl => ctrl.get('description')?.value && Number(ctrl.get('quantity')?.value) > 0).map(ctrl => {
      const i = ctrl.value;
      const qty = Number(i.quantity) || 0;
      const rate = Number(i.rate) || 0;
      const discPct = Number(i.discountPct) || 0;
      const gstPct = Number(i.gstPercent) || 0;
      const grossAmount = qty * rate;
      const discAmount = grossAmount * discPct / 100;
      const subtotal = grossAmount - discAmount;
      const gstAmount = subtotal * gstPct / 100;
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
        salegrandtotal: Math.round(grandtotal)
      };
    });
    const grossSubtotal = this.getGrossSubtotal();
    const totalDiscount = this.getTotalDiscount();
    const tdisamount = Math.round(totalDiscount * 100) / 100;
    const tdisaper = grossSubtotal > 0 ? Math.round(totalDiscount / grossSubtotal * 100 * 100) / 100 : null;
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
      items
    };
  }
  markFormGroupTouched() {
    Object.keys(this.salesForm.controls).forEach(key => {
      this.salesForm.get(key)?.markAsTouched();
    });
    this.items.controls.forEach(item => {
      const fg = item;
      Object.keys(fg.controls).forEach(key => fg.get(key)?.markAsTouched());
    });
  }
  onSubmit() {
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
    this.salesForm.patchValue({
      updatedby: this.currentUserId,
      updateddate: new Date()
    });
    const payload = this.buildPayload();
    if (!payload || payload.items.length === 0) {
      this.errorMessage = 'Please add at least one item.';
      return;
    }
    this.salesService.updateSalesSummaryWithDetails(payload).subscribe({
      next: () => {
        this.router.navigate(['/pages/sales']);
      },
      error: error => {
        this.errorMessage = error?.error?.message || error?.message || 'Error updating sales. Please try again.';
      }
    });
  }
  static {
    this.ɵfac = function SaleseditComponent_Factory(t) {
      return new (t || SaleseditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_sales_service__WEBPACK_IMPORTED_MODULE_0__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_1__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: SaleseditComponent,
      selectors: [["app-salesedit"]],
      viewQuery: function SaleseditComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.customerSelect = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.qtyInputs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.discInputs = _t);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.descInputs = _t);
        }
      },
      hostBindings: function SaleseditComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("keydown.F1", function SaleseditComponent_keydown_F1_HostBindingHandler($event) {
            return ctx.onF1Key($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveDocument"]);
        }
      },
      decls: 6,
      vars: 4,
      consts: [[1, "salesedit-container"], [1, "salesedit-form-scroll"], ["class", "loading-state", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["id", "salesEditForm", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "summary-footer", 4, "ngIf"], [1, "loading-state"], [1, "error-message"], ["id", "salesEditForm", 3, "formGroup", "ngSubmit"], [1, "form-section-card", "customer-section-card"], [1, "col-title"], ["src", "assets/logo.png", "alt", "Connectsite Logo", 1, "brand-logo"], [1, "invoice-title-text"], [1, "invoice-subtitle-text"], [1, "customer-divider"], [1, "col-customer"], [1, "section-title"], [4, "ngIf"], ["class", "customer-info-panel", 4, "ngIf"], [1, "col-invoice"], [1, "section-title", "invoice-info-header"], [1, "invoice-info-title-group"], ["type", "button", 1, "back-btn", 3, "click"], [1, "invoice-meta-fields"], ["appearance", "outline", 1, "invoice-meta-field"], ["matInput", "", "formControlName", "invoiceno", "readonly", ""], ["matInput", "", "formControlName", "saledate", "placeholder", "Select date", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["picker", ""], ["matNativeControl", "", "formControlName", "paymentmethod"], ["value", "", "disabled", ""], ["value", "Cash"], ["value", "Credit Card"], ["value", "Debit Card"], ["value", "Bank Transfer"], ["value", "UPI"], ["value", "Cheque"], ["value", "Other"], ["matNativeControl", "", "formControlName", "paymentstatus"], ["value", "Paid"], ["value", "Pending"], ["value", "Partial"], ["value", "Cancelled"], [1, "form-section-card"], [1, "items-table-container"], [1, "items-table"], [1, "col-desc"], [1, "col-hsn"], [1, "col-qty"], [1, "col-rate"], [1, "col-disc"], [1, "col-gst"], [1, "col-amount"], [1, "col-action"], [1, "th-right"], [1, "th-center"], ["formArrayName", "items"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "customer-select-field"], [1, "f-key-hint"], ["matNativeControl", "", "formControlName", "customerid", 3, "change"], ["customerSelect", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "customer-info-panel"], [1, "customer-card-header"], [1, "customer-card-title"], [1, "customer-card-actions"], ["type", "button", "mat-icon-button", "", "title", "Change Customer", 1, "card-action-btn", "edit-btn-card", 3, "click"], ["type", "button", "mat-icon-button", "", "title", "Remove Customer", 1, "card-action-btn", "close-btn-card", 3, "click"], ["class", "customer-info-row", 4, "ngIf"], [1, "customer-info-row"], [1, "info-icon"], [1, "info-value"], [3, "formGroupName"], ["appearance", "outline", 1, "table-field"], ["matInput", "", "formControlName", "description", "placeholder", "Search product...", 3, "matAutocomplete"], ["descInput", ""], [3, "optionSelected"], ["auto", "matAutocomplete"], [1, "readonly-cell"], ["appearance", "outline", 1, "table-field", "table-field-qty"], ["matInput", "", "type", "number", "formControlName", "quantity", "min", "1", "placeholder", "Qty", 3, "input", "keydown.enter"], ["qtyInput", ""], ["appearance", "outline", 1, "table-field", "table-field-disc"], ["matInput", "", "type", "number", "formControlName", "discountPct", "min", "0", "max", "100", "placeholder", "0", 3, "input", "keydown.enter"], ["discInput", ""], ["matSuffix", ""], [1, "readonly-cell", "gst-cell"], [1, "amount-cell"], [1, "action-cell"], ["type", "button", "mat-icon-button", "", 1, "delete-btn-icon", 3, "disabled", "click"], [1, "summary-footer"], [1, "summary-cols"], [1, "summary-col"], [1, "summary-col-label"], [1, "summary-col-value"], [1, "summary-col", "discount-col"], [1, "summary-col-value", "discount-text"], [1, "summary-col", "subtotal-col"], [1, "summary-col-value", "green-text"], [1, "summary-col", "grand-col"], [1, "summary-col-value", "grand-value"], ["class", "discount-saved", 4, "ngIf"], [1, "summary-col", "action-col"], ["type", "submit", "form", "salesEditForm", "class", "save-btn", 4, "appHasPermission"], [1, "discount-saved"], ["type", "submit", "form", "salesEditForm", 1, "save-btn"], [1, "save-btn-label"]],
      template: function SaleseditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SaleseditComponent_div_2_Template, 5, 0, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SaleseditComponent_div_3_Template, 5, 1, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, SaleseditComponent_form_4_Template, 114, 8, "form", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, SaleseditComponent_div_5_Template, 47, 30, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.errorMessage);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepicker, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerInput, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__.MatDatepickerToggle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatError, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__.MatSuffix, _angular_material_input__WEBPACK_IMPORTED_MODULE_11__.MatInput, _angular_material_core__WEBPACK_IMPORTED_MODULE_12__.MatOption, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatIconButton, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocomplete, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_14__.MatAutocompleteTrigger, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_2__.HasPermissionDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.DecimalPipe],
      styles: [".salesedit-container[_ngcontent-%COMP%] {\n  padding: 0;\n  width: 100%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  min-height: calc(100vh - 64px);\n}\n\n.salesedit-form-scroll[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n}\n\n\n\n  app-salesedit .mdc-text-field,   app-salesedit .mdc-text-field--focused,   app-salesedit .mdc-text-field--outlined,   app-salesedit .mat-mdc-text-field-wrapper,   app-salesedit .mat-mdc-form-field,   app-salesedit .mat-mdc-form-field-focus-overlay,   app-salesedit input.mat-mdc-input-element,   app-salesedit .mdc-text-field:not(.mdc-text-field--disabled) {\n  box-shadow: none !important;\n}\n\n\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex !important;\n  align-items: center;\n  gap: 6px;\n  color: #337ab7 !important;\n  border: 1px solid #337ab7 !important;\n  border-radius: 4px !important;\n  padding: 6px 14px !important;\n  background: white !important;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  min-width: 130px;\n}\n\n.back-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  color: #337ab7;\n}\n\n.loading-state[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  color: #666;\n  font-size: 15px;\n}\n\n\n\n.error-message[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n  padding: 12px 24px;\n  border-left: 4px solid #c62828;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 0;\n  border-radius: 0;\n}\n\n.error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #c62828;\n}\n\n\n\n.form-section-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 0;\n  padding: 16px 24px;\n  margin: 0;\n  border-bottom: 1px solid #f0f0f0;\n  box-shadow: none;\n}\n\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 6px;\n}\n\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #337ab7;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.section-title[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n\n.invoice-info-header[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.invoice-info-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.invoice-info-title-group[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #337ab7;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n\n.invoice-info-title-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n\n.section-header-with-button[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 12px;\n}\n\n.add-item-btn[_ngcontent-%COMP%] {\n  background-color: #337ab7 !important;\n  color: white !important;\n  padding: 8px 16px;\n  border-radius: 6px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.add-item-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\n\n\n.customer-section-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  gap: 0;\n  padding: 6px 24px !important;\n  margin: 0 !important;\n  min-height: 0 !important;\n  border-bottom: 1px solid #e0e0e0 !important;\n}\n\n.col-title[_ngcontent-%COMP%] {\n  flex: 0 0 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 3px;\n  padding-right: 8px;\n}\n\n.brand-logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: auto;\n  object-fit: contain;\n  margin-bottom: 4px;\n}\n\n.invoice-title-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #337ab7;\n  line-height: 1.2;\n}\n\n.invoice-subtitle-text[_ngcontent-%COMP%] {\n  margin: 2px 0 0 0;\n  font-size: 11px;\n  color: #888;\n  line-height: 1.3;\n}\n\n.col-customer[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.col-invoice[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.customer-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  background: #e0e0e0;\n  align-self: stretch;\n  margin: 0 14px;\n  flex-shrink: 0;\n}\n\n.invoice-meta-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0 8px;\n}\n\n.invoice-meta-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .col-invoice .mat-mdc-floating-label,   .col-invoice .mdc-floating-label {\n  color: #337ab7 !important;\n}\n\n  .col-invoice .mat-mdc-text-field-wrapper {\n  height: 36px !important;\n  min-height: 36px !important;\n}\n\n  .col-invoice .mat-mdc-form-field-infix {\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  min-height: 36px !important;\n}\n\n  .col-customer .mat-mdc-text-field-wrapper {\n  height: 36px !important;\n  min-height: 36px !important;\n}\n\n  .col-customer .mat-mdc-form-field-infix {\n  padding-top: 6px !important;\n  padding-bottom: 6px !important;\n  min-height: 36px !important;\n}\n\n.customer-select-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.f-key-hint[_ngcontent-%COMP%] {\n  display: inline-block;\n  background: #337ab7;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  padding: 1px 4px;\n  border-radius: 3px;\n  margin-left: 4px;\n  vertical-align: middle;\n  line-height: 14px;\n  letter-spacing: 0.5px;\n}\n\n  .customer-select-field .mat-mdc-text-field-wrapper,   .customer-select-field .mat-form-field-wrapper {\n  height: 40px !important;\n  min-height: 40px !important;\n}\n\n\n\n.customer-info-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: #e8f0fe;\n  border: 1px solid #b3c8f5;\n  border-radius: 8px;\n  padding: 8px 12px;\n  width: 100%;\n}\n\n.customer-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 2px;\n  border-bottom: 1px solid #c8e6c9;\n  padding-bottom: 4px;\n}\n\n.customer-card-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #337ab7;\n  line-height: 1;\n}\n\n.customer-card-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #337ab7;\n}\n\n.customer-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.card-action-btn[_ngcontent-%COMP%] {\n  width: 22px !important;\n  height: 22px !important;\n  line-height: 22px !important;\n  display: inline-flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n  padding: 0 !important;\n}\n\n.card-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px !important;\n  width: 14px !important;\n  height: 14px !important;\n  line-height: 14px !important;\n  display: flex !important;\n  align-items: center !important;\n  justify-content: center !important;\n}\n\n.edit-btn-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #337ab7;\n}\n\n.close-btn-card[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n.customer-info-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  font-size: 12px;\n  color: #333;\n}\n\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 13px !important;\n  width: 13px !important;\n  height: 13px !important;\n  color: #337ab7;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n\n.info-value[_ngcontent-%COMP%] {\n  line-height: 1.3;\n  color: #444;\n}\n\n\n\n.items-table-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin-top: 16px;\n}\n\n.items-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n  table-layout: fixed;\n}\n\n.col-desc[_ngcontent-%COMP%]   { width: 30%; }\n.col-hsn[_ngcontent-%COMP%]    { width: 9%; }\n.col-qty[_ngcontent-%COMP%]    { width: 7%; }\n.col-rate[_ngcontent-%COMP%]   { width: 9%; }\n.col-disc[_ngcontent-%COMP%]   { width: 8%; }\n.col-gst[_ngcontent-%COMP%]    { width: 8%; }\n.col-amount[_ngcontent-%COMP%] { width: 12%; }\n.col-action[_ngcontent-%COMP%] { width: 6%; }\n\n.items-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n}\n\n.items-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 10px 12px;\n  text-align: left;\n  font-weight: 600;\n  font-size: 11px;\n  color: #666;\n  text-transform: uppercase;\n  border-bottom: 2px solid #e0e0e0;\n  white-space: nowrap;\n  overflow: hidden;\n}\n\n.th-right[_ngcontent-%COMP%]  { text-align: right; padding-right: 16px; }\n.th-center[_ngcontent-%COMP%] { text-align: center; }\n\n.items-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 4px 6px;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n  height: 52px;\n  overflow: hidden;\n  max-width: 0;\n}\n\n.items-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:has(mat-form-field) {\n  padding: 2px 4px;\n}\n\n.items-table[_ngcontent-%COMP%]     .mat-mdc-form-field-subscript-wrapper {\n  display: none !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mdc-line-ripple {\n  display: none !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mat-mdc-form-field {\n  width: 100%;\n  min-width: 0 !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mdc-text-field {\n  min-width: 0 !important;\n  width: 100% !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mdc-text-field--invalid .mdc-notched-outline__leading, .items-table[_ngcontent-%COMP%]     .mdc-text-field--invalid .mdc-notched-outline__notch, .items-table[_ngcontent-%COMP%]     .mdc-text-field--invalid .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.38) !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-notched-outline__leading, .items-table[_ngcontent-%COMP%]     .mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-notched-outline__notch, .items-table[_ngcontent-%COMP%]     .mdc-text-field--invalid:not(.mdc-text-field--disabled):hover .mdc-notched-outline__trailing {\n  border-color: rgba(0, 0, 0, 0.87) !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mdc-text-field--focused.mdc-text-field--invalid .mdc-notched-outline__leading, .items-table[_ngcontent-%COMP%]     .mdc-text-field--focused.mdc-text-field--invalid .mdc-notched-outline__notch, .items-table[_ngcontent-%COMP%]     .mdc-text-field--focused.mdc-text-field--invalid .mdc-notched-outline__trailing {\n  border-color: #337ab7 !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  padding: 0 6px !important;\n  width: 100% !important;\n  min-width: 0 !important;\n}\n\n.items-table[_ngcontent-%COMP%]     .mat-mdc-form-field-infix {\n  padding: 8px 0 !important;\n  min-height: unset !important;\n  width: 100% !important;\n  min-width: 0 !important;\n}\n\n.table-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.table-field[_ngcontent-%COMP%]     input, .table-field[_ngcontent-%COMP%]     select {\n  font-size: 13px;\n  min-width: 0 !important;\n  width: 100% !important;\n}\n\n.table-field-qty[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-width: 0 !important;\n}\n\n.table-field-disc[_ngcontent-%COMP%] {\n  width: 100% !important;\n  min-width: 0 !important;\n}\n\n.readonly-cell[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #333;\n  padding: 0 12px;\n  vertical-align: middle;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-decoration: none !important;\n  border-bottom: none;\n}\n\n.readonly-cell[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  text-decoration: none !important;\n}\n\n.gst-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #337ab7;\n}\n\n.amount-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 13px;\n  color: #333;\n  text-align: right;\n  padding-right: 16px;\n  vertical-align: middle;\n}\n\n.action-cell[_ngcontent-%COMP%] {\n  text-align: center;\n  vertical-align: middle;\n}\n\n.delete-btn-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n\n.delete-btn-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\n\n\n.summary-footer[_ngcontent-%COMP%] {\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 100;\n  background: white;\n  border-top: 2px solid #e0e0e0;\n  box-shadow: 0 -4px 12px rgba(0, 0, 0, 0.08);\n  flex-shrink: 0;\n}\n\n.summary-cols[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: nowrap;\n  gap: 0;\n  overflow: hidden;\n  background: white;\n}\n\n.summary-col[_ngcontent-%COMP%] {\n  flex: 1 1 0;\n  min-width: 100px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 14px 10px;\n  border-right: 1px solid #e0e0e0;\n  text-align: center;\n  gap: 4px;\n}\n\n.summary-col[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.summary-col-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #888;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n\n.summary-col-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #333;\n}\n\n.discount-col[_ngcontent-%COMP%]   .summary-col-label[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n\n.discount-text[_ngcontent-%COMP%] {\n  color: #e53935 !important;\n  font-weight: 700;\n}\n\n.subtotal-col[_ngcontent-%COMP%] {\n  background: #f5f7fa;\n}\n\n.subtotal-col[_ngcontent-%COMP%]   .summary-col-value[_ngcontent-%COMP%] {\n  color: #333;\n}\n\n.green-text[_ngcontent-%COMP%] {\n  color: #337ab7 !important;\n  font-weight: 700;\n}\n\n.grand-col[_ngcontent-%COMP%] {\n  background: #337ab7;\n  border-right: none;\n}\n\n.grand-col[_ngcontent-%COMP%]   .summary-col-label[_ngcontent-%COMP%] {\n  color: rgba(255,255,255,0.8);\n}\n\n.grand-value[_ngcontent-%COMP%] {\n  font-size: 18px !important;\n  color: white !important;\n  font-weight: 700;\n}\n\n.discount-saved[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: rgba(255,255,255,0.8);\n  background: rgba(255,255,255,0.2);\n  border-radius: 4px;\n  padding: 2px 6px;\n  display: inline-block;\n  white-space: nowrap;\n}\n\n.action-col[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 10px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-right: none;\n  background: #1a5276;\n}\n\n.save-btn[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 4px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  color: white;\n  padding: 4px 8px;\n}\n\n.save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n  color: white;\n}\n\n.save-btn-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 1px;\n}\n\n.save-btn[_ngcontent-%COMP%]:hover   mat-icon[_ngcontent-%COMP%], .save-btn[_ngcontent-%COMP%]:hover   .save-btn-label[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.75);\n}\n\n.save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n\n\n\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 16px;\n  padding-top: 20px;\n  margin-top: 20px;\n  border-top: 1px solid #e0e0e0;\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  padding: 12px 32px;\n  font-size: 16px;\n  font-weight: 500;\n  border-radius: 8px;\n  color: #666;\n  border-color: #e0e0e0;\n}\n\n.generate-btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  border-radius: 6px;\n  background-color: #337ab7;\n  color: white;\n  border: none;\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  cursor: pointer;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(51, 122, 183, 0.4);\n}\n\n.generate-btn[_ngcontent-%COMP%]:hover {\n  background-color: #2a6099;\n}\n\n.generate-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.generate-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n\n\n\n@media (max-width: 1024px) {\n  .summary-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .summary-right[_ngcontent-%COMP%] {\n    min-width: 100%;\n  }\n}\n\n@media (max-width: 768px) {\n  .customer-section-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .customer-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .invoice-meta-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n\n  .items-table-container[_ngcontent-%COMP%] {\n    overflow-x: scroll;\n  }\n\n  .items-table[_ngcontent-%COMP%] {\n    min-width: 800px;\n  }\n\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n\n  .cancel-btn[_ngcontent-%COMP%], .generate-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvc2FsZXNlZGl0L3NhbGVzZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0FBQ2xCOztBQUVBLDRDQUE0QztBQUM1Qzs7Ozs7Ozs7RUFRRSwyQkFBMkI7QUFDN0I7OztBQUdBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IseUJBQXlCO0VBQ3pCLG9DQUFvQztFQUNwQyw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLDRCQUE0QjtFQUM1QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsYUFBYTtFQUNiLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjtBQUNsQjtFQUNFLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNY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QUNmO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLDBCQUEwQjtFQUM1Qjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHNCQUFzQjtFQUN4Qjs7RUFFQTs7SUFFRSxXQUFXO0VBQ2I7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5zYWxlc2VkaXQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi1oZWlnaHQ6IGNhbGMoMTAwdmggLSA2NHB4KTtcbn1cblxuLnNhbGVzZWRpdC1mb3JtLXNjcm9sbCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi8qIFJlbW92ZSBhbGwgYm94LXNoYWRvd3MgZnJvbSB0ZXh0IGlucHV0cyAqL1xuOjpuZy1kZWVwIGFwcC1zYWxlc2VkaXQgLm1kYy10ZXh0LWZpZWxkLFxuOjpuZy1kZWVwIGFwcC1zYWxlc2VkaXQgLm1kYy10ZXh0LWZpZWxkLS1mb2N1c2VkLFxuOjpuZy1kZWVwIGFwcC1zYWxlc2VkaXQgLm1kYy10ZXh0LWZpZWxkLS1vdXRsaW5lZCxcbjo6bmctZGVlcCBhcHAtc2FsZXNlZGl0IC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlcixcbjo6bmctZGVlcCBhcHAtc2FsZXNlZGl0IC5tYXQtbWRjLWZvcm0tZmllbGQsXG46Om5nLWRlZXAgYXBwLXNhbGVzZWRpdCAubWF0LW1kYy1mb3JtLWZpZWxkLWZvY3VzLW92ZXJsYXksXG46Om5nLWRlZXAgYXBwLXNhbGVzZWRpdCBpbnB1dC5tYXQtbWRjLWlucHV0LWVsZW1lbnQsXG46Om5nLWRlZXAgYXBwLXNhbGVzZWRpdCAubWRjLXRleHQtZmllbGQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZGlzYWJsZWQpIHtcbiAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xufVxuXG5cbi5iYWNrLWJ0biB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4ICFpbXBvcnRhbnQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBjb2xvcjogIzMzN2FiNyAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzM3YWI3ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiA2cHggMTRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZSAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWluLXdpZHRoOiAxMzBweDtcbn1cblxuLmJhY2stYnRuIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmxvYWRpbmctc3RhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbiAgcGFkZGluZzogMjRweDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLyogRXJyb3IgTWVzc2FnZSAqL1xuLmVycm9yLW1lc3NhZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlYmVlO1xuICBjb2xvcjogI2M2MjgyODtcbiAgcGFkZGluZzogMTJweCAyNHB4O1xuICBib3JkZXItbGVmdDogNHB4IHNvbGlkICNjNjI4Mjg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTJweDtcbiAgbWFyZ2luOiAwO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZXJyb3ItbWVzc2FnZSBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjYzYyODI4O1xufVxuXG4vKiBGb3JtIFNlY3Rpb24gQ2FyZHMgKi9cbi5mb3JtLXNlY3Rpb24tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gIG1hcmdpbjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWN0aW9uLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnNlY3Rpb24tdGl0bGUgbWF0LWljb24ge1xuICBjb2xvcjogIzMzN2FiNztcbiAgZm9udC1zaXplOiAxOHB4O1xuICB3aWR0aDogMThweDtcbiAgaGVpZ2h0OiAxOHB4O1xufVxuXG4uc2VjdGlvbi10aXRsZSBoMyB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmludm9pY2UtaW5mby1oZWFkZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbnZvaWNlLWluZm8tdGl0bGUtZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cblxuLmludm9pY2UtaW5mby10aXRsZS1ncm91cCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjMzM3YWI3O1xuICBmb250LXNpemU6IDE4cHg7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5pbnZvaWNlLWluZm8tdGl0bGUtZ3JvdXAgaDMge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5zZWN0aW9uLWhlYWRlci13aXRoLWJ1dHRvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcbn1cblxuLmFkZC1pdGVtLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzdhYjcgIWltcG9ydGFudDtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xufVxuXG4uYWRkLWl0ZW0tYnRuIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4vKiBDdXN0b21lciBTZWN0aW9uIC0gMyBjb2x1bW4gbGF5b3V0ICovXG4uY3VzdG9tZXItc2VjdGlvbi1jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGdhcDogMDtcbiAgcGFkZGluZzogNnB4IDI0cHggIWltcG9ydGFudDtcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDAgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTAgIWltcG9ydGFudDtcbn1cblxuLmNvbC10aXRsZSB7XG4gIGZsZXg6IDAgMCAxNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDNweDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG4uYnJhbmQtbG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiBhdXRvO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuICBtYXJnaW4tYm90dG9tOiA0cHg7XG59XG5cbi5pbnZvaWNlLXRpdGxlLXRleHQge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgY29sb3I6ICMzMzdhYjc7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5cbi5pbnZvaWNlLXN1YnRpdGxlLXRleHQge1xuICBtYXJnaW46IDJweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBjb2xvcjogIzg4ODtcbiAgbGluZS1oZWlnaHQ6IDEuMztcbn1cblxuLmNvbC1jdXN0b21lciB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb2wtaW52b2ljZSB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jdXN0b21lci1kaXZpZGVyIHtcbiAgd2lkdGg6IDFweDtcbiAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgbWFyZ2luOiAwIDE0cHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uaW52b2ljZS1tZXRhLWZpZWxkcyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgZ2FwOiAwIDhweDtcbn1cblxuLmludm9pY2UtbWV0YS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG46Om5nLWRlZXAgLmNvbC1pbnZvaWNlIC5tYXQtbWRjLWZsb2F0aW5nLWxhYmVsLFxuOjpuZy1kZWVwIC5jb2wtaW52b2ljZSAubWRjLWZsb2F0aW5nLWxhYmVsIHtcbiAgY29sb3I6ICMzMzdhYjcgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jb2wtaW52b2ljZSAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzZweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNvbC1pbnZvaWNlIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nLXRvcDogNnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctYm90dG9tOiA2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzZweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNvbC1jdXN0b21lciAubWF0LW1kYy10ZXh0LWZpZWxkLXdyYXBwZXIge1xuICBoZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbiAgbWluLWhlaWdodDogMzZweCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmNvbC1jdXN0b21lciAubWF0LW1kYy1mb3JtLWZpZWxkLWluZml4IHtcbiAgcGFkZGluZy10b3A6IDZweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogNnB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDM2cHggIWltcG9ydGFudDtcbn1cblxuLmN1c3RvbWVyLXNlbGVjdC1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZi1rZXktaGludCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYmFja2dyb3VuZDogIzMzN2FiNztcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogOXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiAxcHggNHB4O1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG1hcmdpbi1sZWZ0OiA0cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG59XG5cbjo6bmctZGVlcCAuY3VzdG9tZXItc2VsZWN0LWZpZWxkIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlcixcbjo6bmctZGVlcCAuY3VzdG9tZXItc2VsZWN0LWZpZWxkIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLyogQ3VzdG9tZXIgaW5mbyBjYXJkIChwb3N0LXNlbGVjdGlvbikgKi9cbi5jdXN0b21lci1pbmZvLXBhbmVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA0cHg7XG4gIGJhY2tncm91bmQ6ICNlOGYwZmU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiM2M4ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY3VzdG9tZXItY2FyZC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDJweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjOGU2Yzk7XG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XG59XG5cbi5jdXN0b21lci1jYXJkLXRpdGxlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA0cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMzMzdhYjc7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4uY3VzdG9tZXItY2FyZC10aXRsZSBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGhlaWdodDogMTZweDtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jdXN0b21lci1jYXJkLWFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDJweDtcbn1cblxuLmNhcmQtYWN0aW9uLWJ0biB7XG4gIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICBsaW5lLWhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcbn1cblxuLmNhcmQtYWN0aW9uLWJ0biBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMTRweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTRweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDE0cHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5lZGl0LWJ0bi1jYXJkIG1hdC1pY29uIHtcbiAgY29sb3I6ICMzMzdhYjc7XG59XG5cbi5jbG9zZS1idG4tY2FyZCBtYXQtaWNvbiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uY3VzdG9tZXItaW5mby1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgZ2FwOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMzMzM7XG59XG5cbi5pbmZvLWljb24ge1xuICBmb250LXNpemU6IDEzcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEzcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxM3B4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjMzM3YWI3O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uaW5mby12YWx1ZSB7XG4gIGxpbmUtaGVpZ2h0OiAxLjM7XG4gIGNvbG9yOiAjNDQ0O1xufVxuXG4vKiBJdGVtcyBUYWJsZSAqL1xuLml0ZW1zLXRhYmxlLWNvbnRhaW5lciB7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5pdGVtcy10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cblxuLmNvbC1kZXNjICAgeyB3aWR0aDogMzAlOyB9XG4uY29sLWhzbiAgICB7IHdpZHRoOiA5JTsgfVxuLmNvbC1xdHkgICAgeyB3aWR0aDogNyU7IH1cbi5jb2wtcmF0ZSAgIHsgd2lkdGg6IDklOyB9XG4uY29sLWRpc2MgICB7IHdpZHRoOiA4JTsgfVxuLmNvbC1nc3QgICAgeyB3aWR0aDogOCU7IH1cbi5jb2wtYW1vdW50IHsgd2lkdGg6IDEyJTsgfVxuLmNvbC1hY3Rpb24geyB3aWR0aDogNiU7IH1cblxuLml0ZW1zLXRhYmxlIHRoZWFkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbn1cblxuLml0ZW1zLXRhYmxlIHRoIHtcbiAgcGFkZGluZzogMTBweCAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDExcHg7XG4gIGNvbG9yOiAjNjY2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2UwZTBlMDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnRoLXJpZ2h0ICB7IHRleHQtYWxpZ246IHJpZ2h0OyBwYWRkaW5nLXJpZ2h0OiAxNnB4OyB9XG4udGgtY2VudGVyIHsgdGV4dC1hbGlnbjogY2VudGVyOyB9XG5cbi5pdGVtcy10YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBoZWlnaHQ6IDUycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMDtcbn1cblxuLml0ZW1zLXRhYmxlIHRkOmhhcyhtYXQtZm9ybS1maWVsZCkge1xuICBwYWRkaW5nOiAycHggNHB4O1xufVxuXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtc3Vic2NyaXB0LXdyYXBwZXIge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtcy10YWJsZSA6Om5nLWRlZXAgLm1kYy1saW5lLXJpcHBsZSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLml0ZW1zLXRhYmxlIDo6bmctZGVlcCAubWF0LW1kYy1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tZGMtdGV4dC1maWVsZCB7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tZGMtdGV4dC1maWVsZC0taW52YWxpZCAubWRjLW5vdGNoZWQtb3V0bGluZV9fbGVhZGluZyxcbi5pdGVtcy10YWJsZSA6Om5nLWRlZXAgLm1kYy10ZXh0LWZpZWxkLS1pbnZhbGlkIC5tZGMtbm90Y2hlZC1vdXRsaW5lX19ub3RjaCxcbi5pdGVtcy10YWJsZSA6Om5nLWRlZXAgLm1kYy10ZXh0LWZpZWxkLS1pbnZhbGlkIC5tZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tZGMtdGV4dC1maWVsZC0taW52YWxpZDpub3QoLm1kYy10ZXh0LWZpZWxkLS1kaXNhYmxlZCk6aG92ZXIgLm1kYy1ub3RjaGVkLW91dGxpbmVfX2xlYWRpbmcsXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tZGMtdGV4dC1maWVsZC0taW52YWxpZDpub3QoLm1kYy10ZXh0LWZpZWxkLS1kaXNhYmxlZCk6aG92ZXIgLm1kYy1ub3RjaGVkLW91dGxpbmVfX25vdGNoLFxuLml0ZW1zLXRhYmxlIDo6bmctZGVlcCAubWRjLXRleHQtZmllbGQtLWludmFsaWQ6bm90KC5tZGMtdGV4dC1maWVsZC0tZGlzYWJsZWQpOmhvdmVyIC5tZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tZGMtdGV4dC1maWVsZC0tZm9jdXNlZC5tZGMtdGV4dC1maWVsZC0taW52YWxpZCAubWRjLW5vdGNoZWQtb3V0bGluZV9fbGVhZGluZyxcbi5pdGVtcy10YWJsZSA6Om5nLWRlZXAgLm1kYy10ZXh0LWZpZWxkLS1mb2N1c2VkLm1kYy10ZXh0LWZpZWxkLS1pbnZhbGlkIC5tZGMtbm90Y2hlZC1vdXRsaW5lX19ub3RjaCxcbi5pdGVtcy10YWJsZSA6Om5nLWRlZXAgLm1kYy10ZXh0LWZpZWxkLS1mb2N1c2VkLm1kYy10ZXh0LWZpZWxkLS1pbnZhbGlkIC5tZGMtbm90Y2hlZC1vdXRsaW5lX190cmFpbGluZyB7XG4gIGJvcmRlci1jb2xvcjogIzMzN2FiNyAhaW1wb3J0YW50O1xufVxuXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tYXQtbWRjLXRleHQtZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDAgNnB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1pbi13aWR0aDogMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbXMtdGFibGUgOjpuZy1kZWVwIC5tYXQtbWRjLWZvcm0tZmllbGQtaW5maXgge1xuICBwYWRkaW5nOiA4cHggMCAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiB1bnNldCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi50YWJsZS1maWVsZCA6Om5nLWRlZXAgaW5wdXQsXG4udGFibGUtZmllbGQgOjpuZy1kZWVwIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50YWJsZS1maWVsZC1xdHkge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuLnRhYmxlLWZpZWxkLWRpc2Mge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBtaW4td2lkdGg6IDAgIWltcG9ydGFudDtcbn1cblxuLnJlYWRvbmx5LWNlbGwge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAwIDEycHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbn1cblxuLnJlYWRvbmx5LWNlbGwgKiB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZ3N0LWNlbGwge1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzMzN2FiNztcbn1cblxuLmFtb3VudC1jZWxsIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzMzMztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi5hY3Rpb24tY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmRlbGV0ZS1idG4taWNvbiB7XG4gIGNvbG9yOiAjZjQ0MzM2O1xufVxuXG4uZGVsZXRlLWJ0bi1pY29uIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4vKiBTdW1tYXJ5IFNlY3Rpb24gKi9cbi5zdW1tYXJ5LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHotaW5kZXg6IDEwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZTBlMGUwO1xuICBib3gtc2hhZG93OiAwIC00cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMDgpO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnN1bW1hcnktY29scyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBnYXA6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uc3VtbWFyeS1jb2wge1xuICBmbGV4OiAxIDEgMDtcbiAgbWluLXdpZHRoOiAxMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UwZTBlMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBnYXA6IDRweDtcbn1cblxuLnN1bW1hcnktY29sOmxhc3QtY2hpbGQge1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG59XG5cbi5zdW1tYXJ5LWNvbC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN1bW1hcnktY29sLXZhbHVlIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzMzMztcbn1cblxuLmRpc2NvdW50LWNvbCAuc3VtbWFyeS1jb2wtbGFiZWwge1xuICBjb2xvcjogI2U1MzkzNTtcbn1cblxuLmRpc2NvdW50LXRleHQge1xuICBjb2xvcjogI2U1MzkzNSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uc3VidG90YWwtY29sIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjdmYTtcbn1cblxuLnN1YnRvdGFsLWNvbCAuc3VtbWFyeS1jb2wtdmFsdWUge1xuICBjb2xvcjogIzMzMztcbn1cblxuLmdyZWVuLXRleHQge1xuICBjb2xvcjogIzMzN2FiNyAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZ3JhbmQtY29sIHtcbiAgYmFja2dyb3VuZDogIzMzN2FiNztcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xufVxuXG4uZ3JhbmQtY29sIC5zdW1tYXJ5LWNvbC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuOCk7XG59XG5cbi5ncmFuZC12YWx1ZSB7XG4gIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRpc2NvdW50LXNhdmVkIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjgpO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogMnB4IDZweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuXG4uYWN0aW9uLWNvbCB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICMxYTUyNzY7XG59XG5cbi5zYXZlLWJ0biB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDRweDtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDRweCA4cHg7XG59XG5cbi5zYXZlLWJ0biBtYXQtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMjhweDtcbiAgd2lkdGg6IDI4cHg7XG4gIGhlaWdodDogMjhweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2F2ZS1idG4tbGFiZWwge1xuICBmb250LXNpemU6IDExcHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbn1cblxuLnNhdmUtYnRuOmhvdmVyIG1hdC1pY29uLFxuLnNhdmUtYnRuOmhvdmVyIC5zYXZlLWJ0bi1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xufVxuXG4uc2F2ZS1idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjU7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi8qIEZvcm0gQWN0aW9ucyAqL1xuLmZvcm0tYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGdhcDogMTZweDtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gIHBhZGRpbmc6IDEycHggMzJweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGNvbG9yOiAjNjY2O1xuICBib3JkZXItY29sb3I6ICNlMGUwZTA7XG59XG5cbi5nZW5lcmF0ZS1idG4ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzM3YWI3O1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDZweCByZ2JhKDUxLCAxMjIsIDE4MywgMC40KTtcbn1cblxuLmdlbmVyYXRlLWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyYTYwOTk7XG59XG5cbi5nZW5lcmF0ZS1idG46ZGlzYWJsZWQge1xuICBvcGFjaXR5OiAwLjY7XG4gIGN1cnNvcjogbm90LWFsbG93ZWQ7XG59XG5cbi5nZW5lcmF0ZS1idG4gbWF0LWljb24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbi8qIFJlc3BvbnNpdmUgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDI0cHgpIHtcbiAgLnN1bW1hcnktY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5zdW1tYXJ5LXJpZ2h0IHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5jdXN0b21lci1zZWN0aW9uLWNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY3VzdG9tZXItZGl2aWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5pbnZvaWNlLW1ldGEtZmllbGRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxuXG4gIC5pdGVtcy10YWJsZS1jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcbiAgfVxuXG4gIC5pdGVtcy10YWJsZSB7XG4gICAgbWluLXdpZHRoOiA4MDBweDtcbiAgfVxuXG4gIC5mb3JtLWFjdGlvbnMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAuY2FuY2VsLWJ0bixcbiAgLmdlbmVyYXRlLWJ0biB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 37686:
/*!*****************************************************!*\
  !*** ./src/app/pages/salesedit/salesedit.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SaleseditModule: () => (/* binding */ SaleseditModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _salesedit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./salesedit-routing.module */ 29447);
/* harmony import */ var _salesedit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./salesedit.component */ 70631);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ 22866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);









class SaleseditModule {
  static {
    this.ɵfac = function SaleseditModule_Factory(t) {
      return new (t || SaleseditModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: SaleseditModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_2__.FormMaterialModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _salesedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleseditRoutingModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SaleseditModule, {
    declarations: [_salesedit_component__WEBPACK_IMPORTED_MODULE_1__.SaleseditComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_2__.FormMaterialModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule, _salesedit_routing_module__WEBPACK_IMPORTED_MODULE_0__.SaleseditRoutingModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_salesedit_salesedit_module_ts.js.map