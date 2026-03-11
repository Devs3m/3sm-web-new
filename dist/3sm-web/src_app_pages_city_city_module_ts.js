"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_city_city_module_ts"],{

/***/ 75799:
/*!***************************************************!*\
  !*** ./src/app/pages/city/city-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CityRoutingModule: () => (/* binding */ CityRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _city_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city.component */ 66679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _city_component__WEBPACK_IMPORTED_MODULE_0__.CityComponent
}];
class CityRoutingModule {
  static {
    this.ɵfac = function CityRoutingModule_Factory(t) {
      return new (t || CityRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: CityRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CityRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 66679:
/*!**********************************************!*\
  !*** ./src/app/pages/city/city.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CityComponent: () => (/* binding */ CityComponent),
/* harmony export */   InputPrefixSuffixExample: () => (/* binding */ InputPrefixSuffixExample)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_city_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/city.service */ 83419);
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
















const _c0 = ["formSection"];
function CityComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28)(1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CityComponent_div_58_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r2.editItem(data_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CityComponent_div_58_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);
      const data_r1 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r4.deleteItem(data_r1.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
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
    pageSize: 12
  };
};
class CityComponent {
  constructor(cityservice, fromBuilder, http) {
    this.cityservice = cityservice;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.isFormOpen = false; // Controls the slider visibility
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.data = [];
    this.apiData = [];
    this.totalCity = 0;
    this.activeCity = 0;
    this.deactiveCity = 0;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }
  ngOnInit() {
    this.cityForm = this.fromBuilder.group({
      "cityname": [""],
      "citystate": [""],
      "citycountry": [""],
      "companypincode": [""],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "isactive": [""],
      "createdby": [1],
      "updatedby": [1]
    });
    this.getCityDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get(`${this.apiUrl}/city/counts`).subscribe(response => {
        this.totalCity = response.totalCity; // Assign API response to totalAccounts
        this.activeCity = response.activeCity; // Assign API response to totalAccounts
        this.deactiveCity = response.deactiveCity; // Assign API response to totalAccounts
        console.log(this.totalCity);
      });
    }
  }
  getDropDownValue() {
    this.cityservice.getDropdownItems().subscribe({
      next: items => this.dropdownItems = items,
      error: err => console.error('Error fetching dropdown items', err)
    });
  }
  onSubmit() {
    if (this.cityForm.valid) {
      console.log('Select Status:', this.cityForm.value.cityisactive);
    } else {
      console.error('Form is Invalid');
    }
    if (this.cityForm.valid) {
      console.log('Select Status:', this.cityForm.value.city);
    } else {
      console.error('Form is Invalid');
    }
  }
  createCity() {
    this.cityservice.addCity(this.cityForm.value).subscribe(data => {
      if (data) {
        this.getCityDetails();
        this.cityForm.reset();
      }
      console.log(data);
    });
  }
  getCityDetails() {
    this.cityservice.getCityDetails().subscribe({
      next: apidata => {
        this.city = apidata.sort((a, b) => b.createddate - a.createddate);
        console.log('Sorted Userrole Details:', this.city);
        this.cityservice.getCityDetails().subscribe(data => {
          this.apiData = data;
        });
      }
    });
  }
  editItem(item) {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.cityForm.patchValue(item); // Load item into form for editing
  }

  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.cityname}?`)) {
      this.cityservice.deleteCity(item.cityid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getCityDetails(); // Refresh grid after delete
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
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "CityData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
  }
  restCityForm() {
    this.isFormOpen = false;
    this.cityForm.reset();
    this.cityForm.patchValue({
      cityname: null,
      createdby: '',
      updatedby: '',
      isactive: true,
      createddate: new Date(),
      updateddate: new Date()
    });
  }
  getDropDownValues() {
    this.http.get(`${this.apiUrl}/city/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
  static {
    this.ɵfac = function CityComponent_Factory(t) {
      return new (t || CityComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_city_service__WEBPACK_IMPORTED_MODULE_4__.CityService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: CityComponent,
      selectors: [["app-userrole"]],
      viewQuery: function CityComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.formSection = _t.first);
        }
      },
      decls: 60,
      vars: 31,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matInput", "", "placeholder", "Instance", "formControlName", "cityname", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Owner", "formControlName", "citystate", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "citycountry", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "isactive"], ["value", "", "disabled", ""], ["value", "true"], ["value", "false"], [1, "form-submit"], ["mat-raised-button", "", "type", "submit", 1, "btn-primary", 3, "click"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], [1, "add-btn", 3, "click"], ["title", "City", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "cityid", "caption", "City ID", 3, "allowSorting", "sortOrder", "width"], ["dataField", "cityname", "caption", "City Name", 3, "width"], ["dataField", "createddate", "caption", "Created Date", "dataType", "date", 3, "format", "width"], ["dataField", "updateddate", "caption", "Updated Date", "dataType", "date", 3, "format", "width"], ["dataField", "isactive", "caption", "Active", 3, "width"], ["caption", "Action", "alignment", "center", "cellTemplate", "actionTemplate", 3, "visible", "width"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"]],
      template: function CityComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CityComponent_Template_button_click_4_listener() {
            return ctx.restCityForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function CityComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "City Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "City State");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 4)(16, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "City Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "mat-form-field", 4)(20, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "select", 9)(23, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 13)(30, "button", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CityComponent_Template_button_click_30_listener() {
            return ctx.createCity();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 15)(33, "mat-card")(34, "mat-card-header")(35, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "mat-card")(38, "mat-card-header")(39, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "mat-card")(42, "mat-card-header")(43, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 16)(46, "div", 17)(47, "button", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CityComponent_Template_button_click_47_listener() {
            return ctx.toggleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "add_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "dx-data-grid", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onExporting", function CityComponent_Template_dx_data_grid_onExporting_50_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "dxi-column", 20)(52, "dxi-column", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](53, "> ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](54, "dxi-column", 22)(55, "dxi-column", 23)(56, "dxi-column", 24)(57, "dxi-column", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, CityComponent_div_58_Template, 7, 0, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](59, "dxo-export", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.cityForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("City\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalCity, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeCity, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveCity, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](28, _c1))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c2))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c3))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("allowSorting", true)("sortOrder", "asc")("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("format", "dd/MM/yyyy")("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("format", "dd/MM/yyyy")("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("visible", true)("width", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_14__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_15__.DxTemplateDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n    max-width: 100%;\n    margin: 15px auto;\n    padding: 20px;\n    border-radius: 8px;\n    box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n    background-color: #ffff;\n    margin-top: 1% !important;\n    height: 250px !important;\n  width: 1237px !important;\n  }\n\n  \n  .form-submit[_ngcontent-%COMP%]{\n    margin-top: 50px;\n    text-align: center;\n  }\n  .mat-icon[_ngcontent-%COMP%]{\n    color: black;\n    height: 10px;\n  }\n  \n  html[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n      height: 100%;\n  }\n  \n  .btn-pos-list[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 0px;\n    right: 355px;\n    width: 40px;\n    z-index: 1;\n  }\n  \n  .edit-btn[_ngcontent-%COMP%]{\n    font-size: 18px;\n    color:#337ab7;\n  }\n    .dx-datagrid .dx-row > td {\n   vertical-align: middle !important;\n  }\n  .close-btn[_ngcontent-%COMP%] {\n    background: transparent;\n    box-shadow: none;\n    border: none;\n    font-size: 30px;\n    color: black;\n    font-weight: 700px;\n    margin-left: 1134px;\n    margin-top: -14px;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvY2l0eS9jaXR5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDJCQUEyQix5Q0FBeUM7SUFDaEUsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLDhDQUE4QztJQUM5Qyx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLHdCQUF3QjtFQUMxQix3QkFBd0I7RUFDeEI7OztFQUdBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFlBQVk7RUFDZDs7RUFFQTs7TUFFSSxZQUFZO0VBQ2hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGVBQWU7SUFDZixhQUFhO0VBQ2Y7RUFDQTtHQUNDLGlDQUFpQztFQUNsQztFQUNBO0lBQ0UsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvcm0tY29udGFpbmVyIHsgICAgICAgICAgLypGb3JtIENvbnRhaW5lciB3aXRoIGZvcm0gZmllbGRzIGluc2lkZSovXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTVweCBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gICAgbWFyZ2luLXRvcDogMSUgIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDI1MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMjM3cHggIWltcG9ydGFudDtcbiAgfVxuXG4gIFxuICAuZm9ybS1zdWJtaXR7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLm1hdC1pY29ue1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBoZWlnaHQ6IDEwcHg7XG4gIH1cbiAgXG4gIGh0bWwsXG4gIGJvZHkge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gIFxuICAuYnRuLXBvcy1saXN0e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMzU1cHg7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICBcbiAgLmVkaXQtYnRue1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBjb2xvcjojMzM3YWI3O1xuICB9XG4gIDo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LXJvdyA+IHRkIHtcbiAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbiAgfVxuICAuY2xvc2UtYnRuIHtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgICBtYXJnaW4tbGVmdDogMTEzNHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNHB4O1xuICB9XG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}
class InputPrefixSuffixExample {}

/***/ }),

/***/ 79878:
/*!*******************************************!*\
  !*** ./src/app/pages/city/city.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CityModule: () => (/* binding */ CityModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _city_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./city-routing.module */ 75799);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _city_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./city.component */ 66679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);










class CityModule {
  static {
    this.ɵfac = function CityModule_Factory(t) {
      return new (t || CityModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: CityModule,
      bootstrap: [_city_component__WEBPACK_IMPORTED_MODULE_3__.CityComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService],
      imports: [_city_routing_module__WEBPACK_IMPORTED_MODULE_0__.CityRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_6__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CityModule, {
    declarations: [_city_component__WEBPACK_IMPORTED_MODULE_3__.CityComponent],
    imports: [_city_routing_module__WEBPACK_IMPORTED_MODULE_0__.CityRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_6__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule]
  });
})();

/***/ }),

/***/ 83419:
/*!***********************************************!*\
  !*** ./src/app/pages/service/city.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CityService: () => (/* binding */ CityService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class CityService {
  deleteCity(cityid) {
    return this.http.get(`${this.apiUrl}/city/citydelete`, cityid);
  }
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getCityDetails() {
    return this.http.get(`${this.apiUrl}/city/list`);
  }
  addCity(cityData) {
    console.log('Sending data to API', cityData);
    return this.http.post(`${this.apiUrl}/city/citysave`, cityData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/city/list`);
  }
  static {
    this.ɵfac = function CityService_Factory(t) {
      return new (t || CityService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CityService,
      factory: CityService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_city_city_module_ts.js.map