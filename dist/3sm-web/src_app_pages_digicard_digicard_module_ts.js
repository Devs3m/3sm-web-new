"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_digicard_digicard_module_ts"],{

/***/ 67185:
/*!*************************************************************************!*\
  !*** ./src/app/pages/digicard/digicard-form/digicard-form.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigicardFormComponent: () => (/* binding */ DigicardFormComponent)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_digicard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../service/digicard.service */ 89005);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 17192);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular/core */ 26683);


















const _c0 = ["formSection"];
function DigicardFormComponent_option_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", item_r4.cityname);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", item_r4.cityname, " ");
  }
}
function DigicardFormComponent_div_117_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 51)(1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "input", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const theme_r5 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", theme_r5.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("selected", ((tmp_1_0 = ctx_r1.digicardForm.get("cardTheme")) == null ? null : tmp_1_0.value) === theme_r5.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("src", theme_r5.image, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
  }
}
function DigicardFormComponent_div_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 55)(1, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DigicardFormComponent_div_145_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const data_r6 = restoredCtx.$implicit;
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r7.editItem(data_r6.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DigicardFormComponent_div_145_Template_a_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const data_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r9.deleteItem(data_r6.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "span", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DigicardFormComponent_div_145_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r8);
      const data_r6 = restoredCtx.$implicit;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r10.getLink(data_r6.data.digicardid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "link");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
  }
}
function DigicardFormComponent_div_146_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div")(1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DigicardFormComponent_div_146_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);
      const data_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵresetView"](ctx_r12.routeToCard(data_r11.data.digicardid));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const data_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", data_r11.data.digicardid, "");
  }
}
const _c1 = function () {
  return {
    summaryItem: "count",
    sortOrder: "desc"
  };
};
const _c2 = function (a0) {
  return [a0];
};
const _c3 = function () {
  return {
    visible: true
  };
};
const _c4 = function () {
  return {
    visible: true,
    width: 240,
    placeholder: "Search..."
  };
};
const _c5 = function () {
  return ["digicardid", "companyname", "digicardmobile1", "createddate", "Actions"];
};
const _c6 = function () {
  return {
    pageSize: 12
  };
};
class DigicardFormComponent {
  onSelectionChange($event) {
    throw new Error('Method not implemented.');
  }
  constructor(digicardservice, fromBuilder, http, router) {
    this.digicardservice = digicardservice;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.router = router;
    // card-selection
    this.cardThemes = [{
      class: 'whiteCard',
      image: 'assets/images/digicard/white-card.png'
    }, {
      class: 'greenCard',
      image: 'assets/images/digicard/green-card.png'
    }, {
      class: 'blueCard',
      image: 'assets/images/digicard/blue-card.png'
    }, {
      class: 'pinkCard',
      image: 'assets/images/digicard/pink-card.png'
    }];
    this.isFormOpen = false; // Controls the slider visibility
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.data = [];
    this.apiData = [];
    this.totalDigicard = 0;
    this.activeDigicard = 0;
    this.deactiveDigicard = 0;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }
  ngOnInit() {
    this.digicardForm = this.fromBuilder.group({
      "accountid": [null],
      "Instanceid": [null],
      "companyname": [""],
      "companyaddress": [""],
      "companycity": [""],
      "companystate": [""],
      "companycountry": [""],
      "companypincode": [""],
      "companylogo": [""],
      "digicarddesignation": [""],
      "digicardcontactname": [""],
      "digicardmobile1": [""],
      "digicardalternatemobile": [""],
      "digicardemail": [""],
      "digicardwhatsapp": [""],
      "digicardwebsite": [""],
      "digicardlinkedin": [""],
      "digicardtwitter": [""],
      "digicardfacebook": [""],
      "digicardinstagram": [""],
      "digicardbusinesstype": [""],
      "digicardservice": [""],
      "digicardworkinghours": [""],
      "digicardqrcode": [""],
      "digicardprofileimage": [""],
      "digicardid": [null],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "digicardisactive": [""],
      "isactive": [true],
      "createdby": [1],
      "updatedby": [1],
      cardTheme: ['whiteCard']
    });
    this.getDigicardDetails();
    {
      // Fetch data from API
      this.http.get(`${this.apiUrl}/digicard/counts`).subscribe(response => {
        this.totalDigicard = response.totalDigicard; // Assign API response to totalAccounts
        this.activeDigicard = response.activeDigicard; // Assign API response to totalAccounts
        this.deactiveDigicard = response.deactiveDigicard; // Assign API response to totalAccounts
        console.log(this.totalDigicard);
      });
    }
    this.getDropDownValues();
  }
  onSubmit() {
    if (this.digicardForm.valid) {
      console.log('Select Status:', this.digicardForm.value.digicardisactive);
    } else {
      console.error('Form is Invalid');
    }
    if (this.digicardForm.valid) {
      console.log('Select Status:', this.digicardForm.value.digicard);
    } else {
      console.error('Form is Invalid');
    }
  }
  createDigicard() {
    const selectedTheme = this.digicardForm.value.cardTheme;
    localStorage.setItem('selectedCardTheme', selectedTheme);
    this.digicardservice.addDigicard(this.digicardForm.value).subscribe(data => {
      if (data) {
        this.getDigicardDetails();
        this.digicardForm.reset();
      }
      console.log(data);
    });
  }
  getDigicardDetails() {
    this.digicardservice.getDigicardDetails().subscribe({
      next: apidata => {
        this.digicard = apidata.sort((a, b) => b.createddate - a.createddate);
        console.log('Sorted Digicard Details:', this.digicard);
        this.digicardservice.getDigicardDetails().subscribe(data => {
          this.apiData = data;
        });
      }
    });
  }
  editItem(item) {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.digicardForm.patchValue(item); // Load item into form for editing
  }

  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.digicardname}?`)) {
      this.digicardservice.deleteDigicard(item.digicardid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getDigicardDetails(); // Refresh grid after delete
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
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "DigicardData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
  }
  restDigicardForm() {
    this.isFormOpen = false;
    this.digicardForm.reset();
    this.digicardForm.patchValue({
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
  routeToCard(id) {
    this.router.navigate(['/pages/digicard/card/' + id]);
  }
  getLink(id) {
    window.open('/card/' + id);
  }
  static {
    this.ɵfac = function DigicardFormComponent_Factory(t) {
      return new (t || DigicardFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_digicard_service__WEBPACK_IMPORTED_MODULE_4__.DigicardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DigicardFormComponent,
      selectors: [["app-digicard-form"]],
      viewQuery: function DigicardFormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.formSection = _t.first);
        }
      },
      decls: 148,
      vars: 33,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matInput", "", "placeholder", "Company Name", "formControlName", "companyname", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Address", "formControlName", "companyaddress", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "companycity", 3, "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "companystate", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "companycountry", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Pincode", "formControlName", "companypincode", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Logo", "formControlName", "companylogo", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Designation", "formControlName", "digicarddesignation", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Mobile", "formControlName", "digicardmobile1", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Alternate Mobile", "formControlName", "digicardalternatemobile", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Email", "formControlName", "digicardemail", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Whatsapp", "formControlName", "digicardwhatsapp", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Website", "formControlName", "digicardwebsite", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Linkedin", "formControlName", "digicardlinkedin", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Twitter", "formControlName", "digicardtwitter", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "FaceBook", "formControlName", "digicardfacebook", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Instagram", "formControlName", "digicardinstagram", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Business Type", "formControlName", "digicardbusinesstype", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Business Service", "formControlName", "digicardservice", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Business Timings", "formControlName", "digicardworkinghours", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "QR Code", "formControlName", "digicardqrcode", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Profile Image", "formControlName", "digicardprofileimage", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "isactive"], ["value", "true"], ["value", "false"], [1, "multi-theme", "clearfix"], ["class", "loginDesign", 4, "ngFor", "ngForOf"], [1, "form-submit"], ["mat-raised-button", "", "type", "submit", 1, "btn-primary", 3, "click"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], [1, "add-btn", 3, "click"], ["title", "Digicard", 3, "sortByGroupSummaryInfo", "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "columns", "paging", "onExporting"], ["dataField", "digicardid", "caption", "Digicard ID", 3, "cellTemplate"], ["dataField", "companyname", "caption", "Company Name"], ["dataField", "digicardmobile1", "caption", "Mobile"], ["dataField", "createddate", "caption", "Created Date", "dataType", "date", 3, "format"], ["caption", "Actions", 3, "width", "cellTemplate"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [3, "value"], [1, "loginDesign"], [1, "loginSelect", "clearfix"], ["type", "radio", "name", "cardTheme", "formControlName", "cardTheme", 3, "value"], [3, "src"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"], ["title", "Get Link", 1, "material-symbols-outlined", "action-icon", 2, "color", "#2196F3"], [3, "click"]],
      template: function DigicardFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DigicardFormComponent_Template_button_click_4_listener() {
            return ctx.restDigicardForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngSubmit", function DigicardFormComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Company Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "mat-form-field", 4)(12, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Company Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "mat-form-field", 4)(16, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "select", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function DigicardFormComponent_Template_select_change_18_listener($event) {
            return ctx.onSelectionChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, DigicardFormComponent_option_21_Template, 2, 2, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "mat-form-field", 4)(23, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "Company State");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "mat-form-field", 4)(27, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "City Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "mat-form-field", 4)(31, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32, "Company Pincode");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](33, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "mat-form-field", 4)(35, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Company Logo");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](37, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "mat-form-field", 4)(39, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "Designation");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "mat-form-field", 4)(43, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Contact Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](45, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "mat-form-field", 4)(47, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Mobile");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](49, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "mat-form-field", 4)(51, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](52, "Alternate Mobile");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](53, "input", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "mat-form-field", 4)(55, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56, "Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "mat-form-field", 4)(59, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Whatsapp");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](61, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](62, "mat-form-field", 4)(63, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](64, "Website");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](65, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "mat-form-field", 4)(67, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](68, "Linkedin");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "mat-form-field", 4)(71, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "Twitter");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](73, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "mat-form-field", 4)(75, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](76, "FaceBook");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](77, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "mat-form-field", 4)(79, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](80, "Instagram");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "mat-form-field", 4)(83, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Business Type");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](85, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "mat-form-field", 4)(87, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](88, "Business Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](89, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "mat-form-field", 4)(91, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](92, "Business Timings");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "mat-form-field", 4)(95, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](96, "QR Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](97, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "mat-form-field", 4)(99, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](100, "QR Code");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](101, "input", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](102, "mat-form-field", 4)(103, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](104, "Profile Image");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](105, "input", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](106, "mat-form-field", 4)(107, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](108, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](109, "select", 30)(110, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](111, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](112, "option", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](113, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](114, "option", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](115, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](116, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](117, DigicardFormComponent_div_117_Template, 4, 4, "div", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](118, "div", 35)(119, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DigicardFormComponent_Template_button_click_119_listener() {
            return ctx.createDigicard();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](120, " Submit ");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](121, "div", 37)(122, "mat-card")(123, "mat-card-header")(124, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](125);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](126, "mat-card")(127, "mat-card-header")(128, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](129);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](130, "mat-card")(131, "mat-card-header")(132, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](133);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](134, "div", 38)(135, "div", 39)(136, "button", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function DigicardFormComponent_Template_button_click_136_listener() {
            return ctx.toggleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](137, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](138, "add_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](139, "dx-data-grid", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onExporting", function DigicardFormComponent_Template_dx_data_grid_onExporting_139_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](140, "dxi-column", 42)(141, "dxi-column", 43)(142, "dxi-column", 44)(143, "dxi-column", 45)(144, "dxi-column", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](145, DigicardFormComponent_div_145_Template, 10, 0, "div", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](146, DigicardFormComponent_div_146_Template, 3, 1, "div", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](147, "dxo-export", 49);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.digicardForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](15);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.dropdownItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](96);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.cardThemes);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Digicard\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalDigicard, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeDigicard, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveDigicard, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("sortByGroupSummaryInfo", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](27, _c2, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c1)))("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c3))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c4))("columns", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](31, _c5))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](32, _c6))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("cellTemplate", "digiTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("format", "dd/MM/yyyy");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("width", 150)("cellTemplate", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dxTemplateOf", "digiTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RadioControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_10__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_11__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_16__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_16__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_17__.DxTemplateDirective],
      styles: [".multi-theme[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    justify-content: flex-start;\n\n}\n\n.loginDesign[_ngcontent-%COMP%] {\n    width: 25%;\n    height: 200px;\n}\n\n.loginDesign[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n}\n\n.loginDesign[_ngcontent-%COMP%]   img.selected[_ngcontent-%COMP%] {\n    border: 3px solid #000;\n    border-radius: 8px;\n}\n.form-container[_ngcontent-%COMP%]{\n    overflow-y: auto;\n}\n\n.btn-pos-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 355px;\n  width: 40px;\n  z-index: 1;\n}\n\n  app-digicard-form .example-card {\n  max-width: none !important;\n  border: none !important;\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGlnaWNhcmQvZGlnaWNhcmQtZm9ybS9kaWdpY2FyZC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjs7QUFFL0I7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUM3QiIsInNvdXJjZXNDb250ZW50IjpbIi5tdWx0aS10aGVtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG5cbn1cblxuLmxvZ2luRGVzaWduIHtcbiAgICB3aWR0aDogMjUlO1xuICAgIGhlaWdodDogMjAwcHg7XG59XG5cbi5sb2dpbkRlc2lnbiBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLmxvZ2luRGVzaWduIGltZy5zZWxlY3RlZCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uZm9ybS1jb250YWluZXJ7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmJ0bi1wb3MtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAzNTVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbjo6bmctZGVlcCBhcHAtZGlnaWNhcmQtZm9ybSAuZXhhbXBsZS1jYXJkIHtcbiAgbWF4LXdpZHRoOiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 37311:
/*!***********************************************************!*\
  !*** ./src/app/pages/digicard/digicard-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigicardRoutingModule: () => (/* binding */ DigicardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _digicard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./digicard.component */ 57391);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.component */ 24163);
/* harmony import */ var _digicard_form_digicard_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./digicard-form/digicard-form.component */ 67185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);






const routes = [{
  path: '',
  component: _digicard_component__WEBPACK_IMPORTED_MODULE_0__.DigicardComponent,
  children: [{
    path: '',
    redirectTo: 'digicard-form',
    pathMatch: 'full'
  }, {
    path: 'digicard-form',
    component: _digicard_form_digicard_form_component__WEBPACK_IMPORTED_MODULE_2__.DigicardFormComponent
  }, {
    path: 'card',
    component: _card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent
  }, {
    path: 'card/:id',
    component: _card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent
  }]
}];
class DigicardRoutingModule {
  static {
    this.ɵfac = function DigicardRoutingModule_Factory(t) {
      return new (t || DigicardRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: DigicardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DigicardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
  });
})();

/***/ }),

/***/ 57391:
/*!******************************************************!*\
  !*** ./src/app/pages/digicard/digicard.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigicardComponent: () => (/* binding */ DigicardComponent),
/* harmony export */   InputPrefixSuffixExample: () => (/* binding */ InputPrefixSuffixExample)
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_digicard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/digicard.service */ 89005);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 95072);









const _c0 = ["formSection"];
class DigicardComponent {
  onSelectionChange($event) {
    throw new Error('Method not implemented.');
  }
  constructor(digicardservice, fromBuilder, http) {
    this.digicardservice = digicardservice;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.isFormOpen = false; // Controls the slider visibility
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.data = [];
    this.apiData = [];
    this.totalDigicard = 0;
    this.activeDigicard = 0;
    this.deactiveDigicard = 0;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }
  ngOnInit() {
    this.digicardForm = this.fromBuilder.group({
      "accountid": [""],
      "Instanceid": [""],
      "companyname": [""],
      "companyaddress": [""],
      "companycity": [""],
      "companystate": [""],
      "companycountry": [""],
      "companypincode": [""],
      "companylogo": [""],
      "digicarddesignation": [""],
      "digicardcontactname": [""],
      "digicardmobile1": [""],
      "digicardalternatemobile": [""],
      "digicardemail": [""],
      "digicardwhatsapp": [""],
      "digicardwebsite": [""],
      "digicardlinkedin": [""],
      "digicardtwitter": [""],
      "digicardfacebook": [""],
      "digicardinstagram": [""],
      "digicardbusinesstype": [""],
      "digicardservice": [""],
      "digicardworkinghours": [""],
      "digicardqrcode": [""],
      "digicardprofileimage": [""],
      "digicardid": [""],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "digicardisactive": [""],
      "createdby": [1],
      "updatedby": [1]
    });
    this.getDigicardDetails();
    this.getDropDownValue();
    {
      // Fetch data from API
      this.http.get(`${this.apiUrl}/digicard/counts`).subscribe(response => {
        this.totalDigicard = response.totalDigicard; // Assign API response to totalAccounts
        this.activeDigicard = response.activeDigicard; // Assign API response to totalAccounts
        this.deactiveDigicard = response.deactiveDigicard; // Assign API response to totalAccounts
        console.log(this.totalDigicard);
      });
    }
  }
  getDropDownValue() {
    this.digicardservice.getDropdownItems().subscribe({
      next: items => this.dropdownItems = items,
      error: err => console.error('Error fetching dropdown items', err)
    });
  }
  onSubmit() {
    if (this.digicardForm.valid) {
      console.log('Select Status:', this.digicardForm.value.digicardisactive);
    } else {
      console.error('Form is Invalid');
    }
    if (this.digicardForm.valid) {
      console.log('Select Status:', this.digicardForm.value.digicard);
    } else {
      console.error('Form is Invalid');
    }
  }
  createDigicard() {
    this.digicardservice.addDigicard(this.digicardForm.value).subscribe(data => {
      if (data) {
        this.getDigicardDetails();
        this.digicardForm.reset();
      }
      console.log(data);
    });
  }
  getDigicardDetails() {
    this.digicardservice.getDigicardDetails().subscribe({
      next: apidata => {
        this.digicard = apidata.sort((a, b) => b.createddate - a.createddate);
        console.log('Sorted Digicard Details:', this.digicard);
        this.digicardservice.getDigicardDetails().subscribe(data => {
          this.apiData = data;
        });
      }
    });
  }
  editItem(item) {
    console.log("Editing:", item);
    this.isFormOpen = true; // Open the form for editing
    this.digicardForm.patchValue(item); // Load item into form for editing
  }

  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.digicardname}?`)) {
      this.digicardservice.deleteDigicard(item.digicardid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getDigicardDetails(); // Refresh grid after delete
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
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "DigicardData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
  }
  restDigicardForm() {
    this.isFormOpen = false;
    this.digicardForm.reset();
    this.digicardForm.patchValue({
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
    this.ɵfac = function DigicardComponent_Factory(t) {
      return new (t || DigicardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_service_digicard_service__WEBPACK_IMPORTED_MODULE_4__.DigicardService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
      type: DigicardComponent,
      selectors: [["app-digicard"]],
      viewQuery: function DigicardComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.formSection = _t.first);
        }
      },
      decls: 2,
      vars: 0,
      consts: [[1, "digicard", "clearfix"]],
      template: function DigicardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "router-outlet");
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterOutlet],
      styles: [".digicard[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n    display: block;\n    overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGlnaWNhcmQvZGlnaWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsInNvdXJjZXNDb250ZW50IjpbIi5kaWdpY2FyZHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}
class InputPrefixSuffixExample {}

/***/ }),

/***/ 16494:
/*!***************************************************!*\
  !*** ./src/app/pages/digicard/digicard.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigicardModule: () => (/* binding */ DigicardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _digicard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./digicard.component */ 57391);
/* harmony import */ var _digicard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./digicard-routing.module */ 37311);
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./card/card.component */ 24163);
/* harmony import */ var _digicard_form_digicard_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./digicard-form/digicard-form.component */ 67185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);












class DigicardModule {
  static {
    this.ɵfac = function DigicardModule_Factory(t) {
      return new (t || DigicardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
      type: DigicardModule,
      bootstrap: [_digicard_component__WEBPACK_IMPORTED_MODULE_2__.DigicardComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_1__.InstanceService],
      imports: [_digicard_routing_module__WEBPACK_IMPORTED_MODULE_3__.DigicardRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_0__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_8__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](DigicardModule, {
    declarations: [_digicard_component__WEBPACK_IMPORTED_MODULE_2__.DigicardComponent, _card_card_component__WEBPACK_IMPORTED_MODULE_4__.CardComponent, _digicard_form_digicard_form_component__WEBPACK_IMPORTED_MODULE_5__.DigicardFormComponent],
    imports: [_digicard_routing_module__WEBPACK_IMPORTED_MODULE_3__.DigicardRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_0__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_8__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule],
    exports: [_digicard_component__WEBPACK_IMPORTED_MODULE_2__.DigicardComponent]
  });
})();

/***/ }),

/***/ 89005:
/*!***************************************************!*\
  !*** ./src/app/pages/service/digicard.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DigicardService: () => (/* binding */ DigicardService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class DigicardService {
  deleteDigicard(digicardid) {
    console.log('Fetching Digicard data from API');
    return this.http.get(`${this.apiUrl}/digicard/digicarddelete`, digicardid);
  }
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getDigicardDetails() {
    console.log('Fetching Digicard data from API');
    return this.http.get(`${this.apiUrl}/digicard/list`);
  }
  addDigicard(digicardData) {
    console.log('Sending Digicard data to API', digicardData);
    return this.http.post(`${this.apiUrl}/digicard/digicardsave`, digicardData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/digicard/list`);
  }
  static {
    this.ɵfac = function DigicardService_Factory(t) {
      return new (t || DigicardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: DigicardService,
      factory: DigicardService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_pages_digicard_digicard_module_ts.js.map