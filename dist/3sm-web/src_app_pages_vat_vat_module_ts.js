"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_vat_vat_module_ts"],{

/***/ 53463:
/*!*************************************************!*\
  !*** ./src/app/pages/vat/vat-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VatRoutingModule: () => (/* binding */ VatRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _vat_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vat.component */ 2103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _vat_component__WEBPACK_IMPORTED_MODULE_0__.VatComponent
}];
class VatRoutingModule {
  static {
    this.ɵfac = function VatRoutingModule_Factory(t) {
      return new (t || VatRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: VatRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VatRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 2103:
/*!********************************************!*\
  !*** ./src/app/pages/vat/vat.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputPrefixSuffixExample: () => (/* binding */ InputPrefixSuffixExample),
/* harmony export */   VatComponent: () => (/* binding */ VatComponent)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_vat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/vat.service */ 45171);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 17192);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular/core */ 26683);
















function VatComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26)(1, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VatComponent_div_49_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editItem(data_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VatComponent_div_49_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.deleteItem(data_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
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
class VatComponent {
  constructor(vatservice, fromBuilder, http) {
    this.vatservice = vatservice;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.isFormOpen = false; // Controls the slider visibility
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.data = [];
    this.apiData = [];
    this.totalVat = 0;
    this.activeVat = 0;
    this.deactiveVat = 0;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }
  ngOnInit() {
    this.vatForm = this.fromBuilder.group({
      "vatpercent": [""],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "vatisactive": [""],
      "createdby": [1],
      "updatedby": [1],
      "userid": [1]
    });
    this.getVatDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get(`${this.apiUrl}/vat/counts`).subscribe(response => {
        this.totalVat = response.totalVat; // Assign API response to totalAccounts
        this.activeVat = response.activeVat; // Assign API response to totalAccounts
        this.deactiveVat = response.deactiveVat; // Assign API response to totalAccounts
        console.log(this.totalVat);
      });
    }
  }
  onSubmit() {
    if (this.vatForm.valid) {
      console.log('Select Status:', this.vatForm.value.vatisactive);
    } else {
      console.error('Form is Invalid');
    }
    if (this.vatForm.valid) {
      console.log('Select GST Status:', this.vatForm.value.vat);
    } else {
      console.error('Form is Invalid');
    }
  }
  createVat() {
    this.vatservice.addVat(this.vatForm.value).subscribe(data => {
      if (data) {
        this.getVatDetails();
        this.vatForm.reset();
      }
      console.log(data);
    });
  }
  getVatDetails() {
    this.vatservice.getVatDetails().subscribe({
      next: apidata => {
        this.vat = apidata.sort((a, b) => b.createddate - a.createddate);
        console.log('Sorted VAT Details:', this.vat);
        this.vatservice.getVatDetails().subscribe(data => {
          this.apiData = data;
        });
      }
    });
  }
  getDropDownValue() {
    this.vatservice.getDropdownItems().subscribe({
      next: items => this.dropdownItems = items,
      error: err => console.error('Error fetching dropdown items', err)
    });
  }
  editItem(item) {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.vatForm.patchValue(item); // Load item into form for editing
  }

  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.vatname}?`)) {
      this.vatservice.deleteVat(item.vatid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getVatDetails(); // Refresh grid after delete
        },

        error: err => console.error('Error deleting account', err)
      });
    }
  }
  onExporting(e) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_1__.Workbook();
    const worksheet = workbook.addWorksheet('City Data');
    (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_2__.exportDataGrid)({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "GstData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
  }
  restvatForm() {
    this.isFormOpen = false;
    this.vatForm.reset();
    this.vatForm.patchValue({
      vatpercent: '',
      createdby: '',
      updatedby: '',
      vatisactive: true,
      createddate: new Date(),
      updateddate: new Date()
    });
  }
  getDropDownValues() {
    this.http.get(`${this.apiUrl}/vat/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
  static {
    this.ɵfac = function VatComponent_Factory(t) {
      return new (t || VatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_vat_service__WEBPACK_IMPORTED_MODULE_4__.VatService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: VatComponent,
      selectors: [["app-userrole"]],
      decls: 51,
      vars: 31,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matInput", "", "placeholder", "Instance", "formControlName", "vatpercent", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "vatisactive"], ["value", "", "disabled", ""], ["value", "true"], ["value", "false"], [1, "form-submit"], ["mat-raised-button", "", "type", "submit", 1, "btn-primary", 3, "click"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], [1, "add-btn", 3, "click"], ["title", "VAT %", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "vatid", "caption", "Vat ID", 3, "allowSorting", "sortOrder", "width"], ["dataField", "vatpercent", "caption", "VAT%", 3, "width"], ["dataField", "createddate", "caption", "Created Date", "dataType", "date", 3, "format", "width"], ["dataField", "updateddate", "caption", "Updated Date", "dataType", "date", 3, "format", "width"], ["dataField", "vatisactive", "caption", "Active", 3, "width"], ["caption", "Action", "alignment", "center", "cellTemplate", "actionTemplate", 3, "visible", "width"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"]],
      template: function VatComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add VAT %");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VatComponent_Template_button_click_4_listener() {
            return ctx.restvatForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function VatComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "VAT%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "select", 7)(15, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 11)(22, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VatComponent_Template_button_click_22_listener() {
            return ctx.createVat();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 13)(25, "mat-card")(26, "mat-card-header")(27, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "mat-card")(30, "mat-card-header")(31, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "mat-card")(34, "mat-card-header")(35, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 14)(38, "div", 15)(39, "button", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function VatComponent_Template_button_click_39_listener() {
            return ctx.toggleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41, "add_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "dx-data-grid", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onExporting", function VatComponent_Template_dx_data_grid_onExporting_42_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](43, "dxi-column", 18)(44, "dxi-column", 19)(45, "dxi-column", 20)(46, "dxi-column", 21)(47, "dxi-column", 22)(48, "dxi-column", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, VatComponent_div_49_Template, 7, 0, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "dxo-export", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.vatForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("VAT %\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalVat, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeVat, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveVat, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](28, _c0))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c1))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c2))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowSorting", true)("sortOrder", "asc")("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("format", "dd/MM/yyyy")("width", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("format", "dd/MM/yyyy")("width", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("width", 230);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_15__.DxTemplateDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n    max-width: 100%;\n    margin: 15px auto;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n    background-color: #ffff;\n    margin-top: 1% !important;\n    height: 250px !important;\n  width: 1237px !important;\n  }\n\n  \n  .form-submit[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    text-align: center;\n  }\n  .mat-icon[_ngcontent-%COMP%]{\n    color: black;\n    height: 20px;\n  }\n  \n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n      height: 100%;\n  }\n  \n  .btn-pos-list[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0px;\n    right: 355px;\n    width: 40px;\n    z-index: 1;\n  }\n  \n  .edit-btn[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color:#337ab7;\n  }\n    .dx-datagrid .dx-row > td {\n   vertical-align: middle !important;\n  }\n  .close-btn[_ngcontent-%COMP%] {\n    background: transparent;\n    box-shadow: none;\n    border: none;\n    font-size: 30px;\n    color: black;\n    font-weight: 700px;\n    margin-left: 1134px;\n    margin-top: -14px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdmF0L3ZhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQix5Q0FBeUM7SUFDaEUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQix3QkFBd0I7RUFDeEI7OztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTs7TUFFSSxZQUFZO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQTtHQUNDLGlDQUFpQztFQUNsQztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRhaW5lciB7ICAgICAgICAgIC8qRm9ybSBDb250YWluZXIgd2l0aCBmb3JtIGZpZWxkcyBpbnNpZGUqL1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IDE1cHggYXV0bztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICAgIG1hcmdpbi10b3A6IDElICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAyNTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTIzN3B4ICFpbXBvcnRhbnQ7XG4gIH1cblxuICBcbiAgLmZvcm0tc3VibWl0e1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC5tYXQtaWNvbntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICBodG1sLFxuICBib2R5IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmJ0bi1wb3MtbGlzdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDM1NXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5lZGl0LWJ0bntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IzMzN2FiNztcbiAgfVxuICA6Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3cgPiB0ZCB7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNsb3NlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExMzRweDtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}
class InputPrefixSuffixExample {}

/***/ }),

/***/ 71910:
/*!*****************************************!*\
  !*** ./src/app/pages/vat/vat.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VatModule: () => (/* binding */ VatModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _vat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vat-routing.module */ 53463);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _vat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vat.component */ 2103);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);










class VatModule {
  static {
    this.ɵfac = function VatModule_Factory(t) {
      return new (t || VatModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: VatModule,
      bootstrap: [_vat_component__WEBPACK_IMPORTED_MODULE_3__.VatComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService],
      imports: [_vat_routing_module__WEBPACK_IMPORTED_MODULE_0__.VatRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_6__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](VatModule, {
    declarations: [_vat_component__WEBPACK_IMPORTED_MODULE_3__.VatComponent],
    imports: [_vat_routing_module__WEBPACK_IMPORTED_MODULE_0__.VatRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_6__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_vat_vat_module_ts.js.map