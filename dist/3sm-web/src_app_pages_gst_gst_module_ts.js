"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_gst_gst_module_ts"],{

/***/ 78751:
/*!*************************************************!*\
  !*** ./src/app/pages/gst/gst-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GstRoutingModule: () => (/* binding */ GstRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _gst_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gst.component */ 85583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _gst_component__WEBPACK_IMPORTED_MODULE_0__.GstComponent
}];
class GstRoutingModule {
  static {
    this.ɵfac = function GstRoutingModule_Factory(t) {
      return new (t || GstRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: GstRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GstRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 85583:
/*!********************************************!*\
  !*** ./src/app/pages/gst/gst.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GstComponent: () => (/* binding */ GstComponent),
/* harmony export */   InputPrefixSuffixExample: () => (/* binding */ InputPrefixSuffixExample)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_gst_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/gst.service */ 4218);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 17192);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular/core */ 26683);

















function GstComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34)(1, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GstComponent_div_72_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editItem(data_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GstComponent_div_72_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.deleteItem(data_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 37);
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
class GstComponent {
  constructor(gstservice, fromBuilder, http) {
    this.gstservice = gstservice;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.isFormOpen = false; // Controls the slider visibility
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.data = [];
    this.apiData = [];
    this.totalGst = 0;
    this.activeGst = 0;
    this.deactiveGst = 0;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }
  ngOnInit() {
    this.gstForm = this.fromBuilder.group({
      "totalgstpercent": [""],
      "igstpercent": [""],
      "cgstpercent": [""],
      "sgstpercent": [""],
      "ugstpercent": [""],
      "chesspercent": [""],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "isactive": [""],
      "createdby": [1],
      "updatedby": [1],
      "username": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      "userid": [1]
    });
    this.getGstDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get(`${this.apiUrl}/gst/counts`).subscribe(response => {
        this.totalGst = response.totalGst; // Assign API response to totalAccounts
        this.activeGst = response.activeGst; // Assign API response to totalAccounts
        this.deactiveGst = response.deactiveGst; // Assign API response to totalAccounts
        console.log(this.totalGst);
      });
    }
  }
  onSubmit() {
    if (this.gstForm.valid) {
      console.log('Select Status:', this.gstForm.value.gstisactive);
    } else {
      console.error('Form is Invalid');
    }
    if (this.gstForm.valid) {
      console.log('Select GST Status:', this.gstForm.value.gst);
    } else {
      console.error('Form is Invalid');
    }
  }
  createGst() {
    this.gstservice.addGst(this.gstForm.value).subscribe(data => {
      if (data) {
        this.getGstDetails();
        this.gstForm.reset();
      }
      console.log(data);
    });
  }
  getGstDetails() {
    this.gstservice.getGstDetails().subscribe({
      next: apidata => {
        this.gst = apidata.sort((a, b) => b.createddate - a.createddate);
        console.log('Sorted GST Details:', this.gst);
        this.gstservice.getGstDetails().subscribe(data => {
          this.apiData = data;
        });
      }
    });
  }
  getDropDownValue() {
    this.gstservice.getDropdownItems().subscribe({
      next: items => this.dropdownItems = items,
      error: err => console.error('Error fetching dropdown items', err)
    });
  }
  editItem(item) {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.gstForm.patchValue(item); // Load item into form for editing
  }

  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.gstname}?`)) {
      this.gstservice.deleteGst(item.gstid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getGstDetails(); // Refresh grid after delete
        },

        error: err => console.error('Error deleting account', err)
      });
    }
  }
  onExporting(e) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_2__.Workbook();
    const worksheet = workbook.addWorksheet('City Data');
    (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__.exportDataGrid)({
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
  restGstForm() {
    this.isFormOpen = false;
    this.gstForm.reset();
    this.gstForm.patchValue({
      totalgstpercent: null,
      igstpercent: '',
      cgstpercent: '',
      sgstpercent: '',
      ugstpercent: '',
      chesspercent: '',
      createdby: '',
      updatedby: '',
      isactive: true,
      createddate: new Date(),
      updateddate: new Date()
    });
  }
  getDropDownValues() {
    this.http.get(`${this.apiUrl}/gst/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
  static {
    this.ɵfac = function GstComponent_Factory(t) {
      return new (t || GstComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_gst_service__WEBPACK_IMPORTED_MODULE_4__.GstService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: GstComponent,
      selectors: [["app-gst"]],
      decls: 74,
      vars: 32,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matInput", "", "placeholder", "Instance", "formControlName", "totalgstpercent", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Owner", "formControlName", "igstpercent", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "cgstpercent", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "sgstpercent", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "ugstpercent", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "chesspercent", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "isactive"], ["value", "", "disabled", ""], ["value", "true"], ["value", "false"], [1, "form-submit"], ["mat-raised-button", "", "type", "submit", 1, "btn-primary", 3, "click"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], [1, "add-btn", 3, "click"], ["title", "GST %", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "gstid", "caption", "GST ID", 3, "allowSorting", "sortOrder", "width"], ["dataField", "totalgstpercent", "caption", "Total GST%", 3, "width"], ["dataField", "igstpercent", "caption", "IGST %", 3, "width"], ["dataField", "cgstpercent", "caption", "CGST %", 3, "width"], ["dataField", "sgstpercent", "caption", "SGST %", 3, "width"], ["dataField", "ugstpercent", "caption", "UGST %", 3, "width"], ["dataField", "chesspercent", "caption", "CHESS %", 3, "width"], ["dataField", "gstisactive", "caption", "Active", 3, "width"], ["caption", "Action", "alignment", "center", "cellTemplate", "actionTemplate", 3, "visible", "width"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"]],
      template: function GstComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add GST %");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GstComponent_Template_button_click_4_listener() {
            return ctx.restGstForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function GstComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Total GST%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "IGST%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 4)(16, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "CGST%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 4)(20, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "SGST%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "mat-form-field", 4)(24, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "UGST%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "mat-form-field", 4)(28, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Chess%");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "mat-form-field", 4)(32, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "select", 12)(35, "option", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 16)(42, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GstComponent_Template_button_click_42_listener() {
            return ctx.createGst();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](43, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 18)(45, "mat-card")(46, "mat-card-header")(47, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "mat-card")(50, "mat-card-header")(51, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "mat-card")(54, "mat-card-header")(55, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 19)(58, "div", 20)(59, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function GstComponent_Template_button_click_59_listener() {
            return ctx.toggleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61, "add_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "dx-data-grid", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onExporting", function GstComponent_Template_dx_data_grid_onExporting_62_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](63, "dxi-column", 23)(64, "dxi-column", 24)(65, "dxi-column", 25)(66, "dxi-column", 26)(67, "dxi-column", 27)(68, "dxi-column", 28)(69, "dxi-column", 29)(70, "dxi-column", 30)(71, "dxi-column", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](72, GstComponent_div_72_Template, 7, 0, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "dxo-export", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.gstForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](42);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("GST %\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalGst, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeGst, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveGst, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c0))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c1))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](31, _c2))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowSorting", true)("sortOrder", "asc")("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_15__.DxTemplateDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n    max-width: 100%;\n    margin: 15px auto;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n    background-color: #ffff;\n    margin-top: 1% !important;\n    height: 250px !important;\n  width: 1237px !important;\n  }\n\n  \n  .form-submit[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    text-align: center;\n  }\n\n  .mat-icon[_ngcontent-%COMP%]{\n    color: black;\n    height: 10px;\n  }\n  \n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n      height: 100%;\n  }\n  \n  .btn-pos-list[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0px;\n    right: 355px;\n    width: 40px;\n    z-index: 1;\n  }\n  \n  .edit-btn[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color:#337ab7;\n  }\n    .dx-datagrid .dx-row > td {\n   vertical-align: middle !important;\n  }\n  .close-btn[_ngcontent-%COMP%] {\n    background: transparent;\n    box-shadow: none;\n    border: none;\n    font-size: 30px;\n    color: black;\n    font-weight: 700px;\n    margin-left: 1134px;\n    margin-top: -14px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZ3N0L2dzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQix5Q0FBeUM7SUFDaEUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQix3QkFBd0I7RUFDeEI7OztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixZQUFZO0VBQ2Q7O0VBRUE7O01BRUksWUFBWTtFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsYUFBYTtFQUNmO0VBQ0E7R0FDQyxpQ0FBaUM7RUFDbEM7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250YWluZXIgeyAgICAgICAgICAvKkZvcm0gQ29udGFpbmVyIHdpdGggZm9ybSBmaWVsZHMgaW5zaWRlKi9cbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxNXB4IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcbiAgICBtYXJnaW4tdG9wOiAxJSAhaW1wb3J0YW50O1xuICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEyMzdweCAhaW1wb3J0YW50O1xuICB9XG5cbiAgXG4gIC5mb3JtLXN1Ym1pdHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5tYXQtaWNvbntcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICB9XG4gIFxuICBodG1sLFxuICBib2R5IHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLmJ0bi1wb3MtbGlzdHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwcHg7XG4gICAgcmlnaHQ6IDM1NXB4O1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgXG4gIC5lZGl0LWJ0bntcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgY29sb3I6IzMzN2FiNztcbiAgfVxuICA6Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3cgPiB0ZCB7XG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmNsb3NlLWJ0biB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXdlaWdodDogNzAwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDExMzRweDtcbiAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgfVxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}
class InputPrefixSuffixExample {}

/***/ }),

/***/ 90318:
/*!*****************************************!*\
  !*** ./src/app/pages/gst/gst.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GstModule: () => (/* binding */ GstModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _gst_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gst-routing.module */ 78751);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _gst_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gst.component */ 85583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);










class GstModule {
  static {
    this.ɵfac = function GstModule_Factory(t) {
      return new (t || GstModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: GstModule,
      bootstrap: [_gst_component__WEBPACK_IMPORTED_MODULE_3__.GstComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService],
      imports: [_gst_routing_module__WEBPACK_IMPORTED_MODULE_0__.GstRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_6__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](GstModule, {
    declarations: [_gst_component__WEBPACK_IMPORTED_MODULE_3__.GstComponent],
    imports: [_gst_routing_module__WEBPACK_IMPORTED_MODULE_0__.GstRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_6__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_gst_gst_module_ts.js.map