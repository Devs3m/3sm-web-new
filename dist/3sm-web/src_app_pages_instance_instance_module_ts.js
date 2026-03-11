"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_instance_instance_module_ts"],{

/***/ 26383:
/*!***********************************************************!*\
  !*** ./src/app/pages/instance/instance-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceRoutingModule: () => (/* binding */ InstanceRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _instance_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance.component */ 11135);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _instance_component__WEBPACK_IMPORTED_MODULE_0__.InstanceComponent
}];
class InstanceRoutingModule {
  static {
    this.ɵfac = function InstanceRoutingModule_Factory(t) {
      return new (t || InstanceRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: InstanceRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](InstanceRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 11135:
/*!******************************************************!*\
  !*** ./src/app/pages/instance/instance.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputPrefixSuffixExample: () => (/* binding */ InputPrefixSuffixExample),
/* harmony export */   InstanceComponent: () => (/* binding */ InstanceComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ 9822);
/* harmony import */ var _service_permission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/permission.service */ 69227);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 17192);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! devextreme-angular/core */ 26683);
/* harmony import */ var _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/has-permission.directive */ 79561);





















function InstanceComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r6.accountid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r6.companyname, " ");
  }
}
function InstanceComponent_option_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", item_r7.cityname);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", item_r7.cityname, " ");
  }
}
function InstanceComponent_ng_container_106_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function InstanceComponent_ng_container_106_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, InstanceComponent_ng_container_106_button_1_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx_r2.isEditMode);
  }
}
function InstanceComponent_ng_container_107_button_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function InstanceComponent_ng_container_107_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, InstanceComponent_ng_container_107_button_1_Template, 2, 0, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isEditMode);
  }
}
function InstanceComponent_button_123_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstanceComponent_button_123_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r10.toggleForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function InstanceComponent_div_133_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstanceComponent_div_133_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r15.editItem(data_r12.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function InstanceComponent_div_133_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstanceComponent_div_133_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r20);
      const data_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r18.deleteItem(data_r12.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function InstanceComponent_div_133_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, InstanceComponent_div_133_a_1_Template, 3, 0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, InstanceComponent_div_133_a_2_Template, 3, 0, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "instance:update");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "instance:delete");
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
    pageSize: 15
  };
};
class InstanceComponent {
  constructor(instanceservice, authService, permissionService, fromBuilder, http) {
    this.instanceservice = instanceservice;
    this.authService = authService;
    this.permissionService = permissionService;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.isFormOpen = false; // Controls the slider visibility
    this.isEditMode = false;
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.apiData = [];
    this.totalInstance = 0;
    this.activeInstance = 0;
    this.deactiveInstance = 0;
    this.dropdownAccountItems = [];
    this.renderActionButtons = (cellElement, cellInfo) => {
      const editButton = document.createElement('button');
      editButton.innerText = 'Edit';
      editButton.classList.add('btn', 'btn-primary', 'action-button');
      editButton.addEventListener('click', () => this.editItem(cellInfo.data));
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.classList.add('btn', 'btn-danger', 'action-button');
      deleteButton.addEventListener('click', () => this.deleteItem(cellInfo.data));
      cellElement.appendChild(editButton);
      cellElement.appendChild(deleteButton);
    };
  }
  ngOnInit() {
    const accountId = this.authService.getAccountId() ?? 1;
    this.instanceForm = this.fromBuilder.group({
      instancename: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20)]],
      ownername: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.maxLength(20)]],
      ownermobile: [""],
      owneremail: [""],
      managername: [""],
      managermobile: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      manageremail: [""],
      instanceaddress: [""],
      instancecity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      instancestate: [""],
      instancecountry: [""],
      instancepincode: [""],
      instancesalesamount: [""],
      instancesalesdate: [new Date()],
      instanceasaenddate: [new Date()],
      instanceasaamount: [""],
      createddate: [new Date()],
      updateddate: [new Date()],
      createdby: [1],
      updatedby: [1],
      instanceisactive: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      instancegstno: [""],
      instancevatno: [""],
      instancefssaino: [""],
      instanceid: [0],
      accountid: [accountId],
      cityid: [1]
    });
    this.getInstanceDetails();
    this.getDropDownValue();
    this.getDropdownAccountValue();
  }
  get instancename() {
    return this.instanceForm.get('instancename');
  }
  onSubmit() {
    if (this.instanceForm.valid) {
      if (this.isEditMode) {
        this.instanceservice.updateInstance(this.instanceForm.value).subscribe({
          next: response => {
            console.log('Instance updated:', response);
            this.getInstanceDetails();
            this.restinstanceForm();
          },
          error: error => {
            console.error('Error updating account:', error);
          }
        });
      } else {
        this.createInstance();
      }
      console.log('Select Status:', this.instanceForm.value.instanceisactive);
      setTimeout(() => {
        window.location.reload(); // Reloads after 1 second
      }, 100);
    } else {
      console.error('Form is Invalid');
    }
  }
  createInstance() {
    this.instanceservice.addInstance(this.instanceForm.value).subscribe(data => {
      if (data) {
        this.getInstanceDetails();
        this.instanceForm.reset();
      }
      console.log(data);
      console.log("Form submitted!");
      this.restinstanceForm();
    });
  }
  byAccountId(list, accountId) {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter(item => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }
  getInstanceDetails() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.instanceservice.getInstanceDetails().subscribe({
      next: apidata => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.instance = filtered.sort((a, b) => b.createddate - a.createddate);
        this.apiData = [...this.instance];
        this.totalInstance = filtered.length;
        this.activeInstance = filtered.filter(i => i.instanceisactive === true || i.instanceisactive === 'true' || i.instanceisactive === 1).length;
        this.deactiveInstance = this.totalInstance - this.activeInstance;
        console.log('Sorted Instance Details:', this.instance);
      },
      error: err => console.error('Error fetching instance details:', err)
    });
  }
  getInstanceOrderby() {
    this.instanceservice.getInstanceOrderby().subscribe({
      next: apidata => {
        this.instance = apidata.sort((a, b) => b.createddate - a.createddate);
        console.log('Sorted Account Orderby Details:', this.instance);
        this.instanceservice.getInstanceOrderby().subscribe(data => {});
      }
    });
  }
  getDropDownValue() {
    console.log('Loading city dropdown...');
    this.instanceservice.getDropdownItems().subscribe({
      next: cityitems => {
        console.log('City dropdown items received:', cityitems);
        // Filter only active cities if the API returns inactive ones
        if (cityitems && Array.isArray(cityitems)) {
          this.dropdownItems = cityitems.filter(item => item.cityisactive === true || item.cityisactive === 'true' || item.cityisactive === 1 || item.cityisactive === undefined // Include if field doesn't exist
          );

          console.log('Filtered city dropdown items:', this.dropdownItems.length);
        } else {
          console.warn('City dropdown items is not an array:', cityitems);
          this.dropdownItems = [];
        }
      },
      error: err => {
        console.error('Error fetching city dropdown items:', err);
        console.error('Error details:', err.error || err.message);
        this.dropdownItems = [];
        // Try alternative method as fallback
        this.getDropDownValues();
      }
    });
  }
  getDropdownAccountValue() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.instanceservice.getDropdownAccountItems().subscribe({
      next: items => {
        const raw = Array.isArray(items) ? items : [];
        this.dropdownAccountItems = accountId != null ? this.byAccountId(raw, accountId) : raw;
      },
      error: err => console.error('Error fetching dropdown items', err)
    });
  }
  onSelectionAccountChange(event) {
    const selectedValue = event.target.value;
    console.log('Selected Account ID:', selectedValue);
    // Find the selected account by accountid (since the dropdown uses accountid as value)
    const selectedItem = this.dropdownAccountItems.find(item => item.accountid == selectedValue);
    console.log('Selected Account Item:', selectedItem);
    if (selectedItem) {
      this.instanceForm.patchValue({
        accountid: selectedItem.accountid,
        ownername: selectedItem.ownername || '',
        ownermobile: selectedItem.ownermobile || '',
        owneremail: selectedItem.owneremail || ''
      });
      console.log('Auto-filled Owner Name:', selectedItem.ownername);
      console.log('Auto-filled Owner Mobile:', selectedItem.ownermobile);
      console.log('Auto-filled Owner Email:', selectedItem.owneremail);
    }
  }
  onSelectionChange(event) {
    const selectedValue = event.target.value;
    console.log('Selected City Name:', selectedValue);
    const selectedItem = this.dropdownItems.find(item => item.cityname === selectedValue);
    console.log('Selected City Item:', selectedItem);
    if (selectedItem) {
      this.instanceForm.patchValue({
        cityid: selectedItem.cityId || selectedItem.cityid,
        instancestate: selectedItem.citystate || '',
        instancecountry: selectedItem.citycountry || ''
      });
      console.log('Auto-filled State:', selectedItem.citystate);
      console.log('Auto-filled Country:', selectedItem.citycountry);
      console.log('Selected City ID:', selectedItem.cityId || selectedItem.cityid);
    }
  }
  editItem(item) {
    this.isFormOpen = true;
    this.isEditMode = true;
    this.instanceForm.patchValue({
      ...item,
      instanceisactive: item.instanceisactive === true || item.instanceisactive === 'true' || item.instanceisactive === 1 ? 'true' : 'false'
    });
    console.log('Edit Item:', item);
  }
  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.instancename}?`)) {
      console.log('Deleting instance:', item);
      console.log('Instance ID:', item.instanceid);
      this.instanceservice.deleteInstance(item.instanceid).subscribe({
        next: response => {
          console.log("Instance deleted successfully:", response);
          this.getInstanceDetails(); // Refresh grid after delete
          this.getDropDownValue(); // Refresh dropdowns if needed
        },

        error: err => {
          console.error('Error deleting instance:', err);
          console.error('Error details:', err.error || err.message);
          alert(`Error deleting instance: ${err.error?.message || err.message || 'Unknown error'}. Please check the console for details.`);
        }
      });
    }
  }
  onExporting(e) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_2__.Workbook();
    const worksheet = workbook.addWorksheet('Instance Data');
    (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__.exportDataGrid)({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "InstanceData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
    // Reload dropdowns when opening form to ensure fresh data
    this.getDropDownValue();
    this.getDropdownAccountValue();
  }
  restinstanceForm() {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.instanceForm.reset();
    // Reload dropdowns when form is reset to ensure fresh data
    this.getDropDownValue();
    this.getDropdownAccountValue();
    const accountId = this.authService.getAccountId() ?? 1;
    this.instanceForm.patchValue({
      accountid: accountId,
      instancecity: '',
      instancestate: '',
      instancecountry: '',
      instanceisactive: '',
      createddate: new Date(),
      updateddate: new Date(),
      instanceid: 0,
      cityid: 1
    });
  }
  getDropDownValues() {
    console.log('Loading city dropdown (fallback method)...');
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/city/list`).subscribe({
      next: data => {
        console.log('City dropdown items received (fallback):', data);
        if (data && Array.isArray(data)) {
          // Filter only active cities if the API returns inactive ones
          this.dropdownItems = data.filter(item => item.cityisactive === true || item.cityisactive === 'true' || item.cityisactive === 1 || item.cityisactive === undefined // Include if field doesn't exist
          );

          console.log('Filtered city dropdown items (fallback):', this.dropdownItems.length);
        } else {
          console.warn('City dropdown data is not an array:', data);
          this.dropdownItems = [];
        }
      },
      error: err => {
        console.error('Error fetching city dropdown (fallback):', err);
        console.error('Error details:', err.error || err.message);
        this.dropdownItems = [];
      }
    });
  }
  onCityChange(event) {
    const selectedCityId = event.target.value;
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/instance/${selectedCityId}`).subscribe(data => {
      this.instanceForm.patchValue({
        cityid: data.cityid,
        instancestate: data.citystate,
        instancecountry: data.citycountry
      });
    });
  }
  static {
    this.ɵfac = function InstanceComponent_Factory(t) {
      return new (t || InstanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_instance_service__WEBPACK_IMPORTED_MODULE_4__.InstanceService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_permission_service__WEBPACK_IMPORTED_MODULE_6__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: InstanceComponent,
      selectors: [["app-instance"], ["input-prefix-suffix-example"]],
      decls: 135,
      vars: 33,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matNativeControl", "", "formControlName", "accountid", 3, "change"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "Owner", "formControlName", "ownername", 1, "mat-input-element", "custom-placeholder"], ["maxlength", "12", "matInput", "", "placeholder", "1234-567890", "formControlName", "ownermobile", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Owner Email", "formControlName", "owneremail", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Instance", "formControlName", "instancename", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Name", "formControlName", "managername", 1, "mat-input-element", "custom-placeholder"], ["maxlength", "12", "matInput", "", "placeholder", "1234-567890", "formControlName", "managermobile", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Manager Email", "formControlName", "manageremail", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Address", "formControlName", "instanceaddress", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "instancecity", 3, "change"], ["matInput", "", "placeholder", "State", "formControlName", "instancestate", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Country", "formControlName", "instancecountry", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Pincode", "formControlName", "instancepincode", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Sales Amount", "formControlName", "instancesalesamount", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Sales Date", "formControlName", "instancesalesdate", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Asa End Date", "formControlName", "instanceasaenddate", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Asa Amount", "formControlName", "instanceasaamount", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "GST Number", "formControlName", "instancegstno", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "VAT Number", "formControlName", "instancevatno", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "FSSAI Number", "formControlName", "instancefssaino", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "instanceisactive"], ["value", "true"], ["value", "false"], [1, "form-submit"], [4, "appHasPermission"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], ["class", "add-btn", 3, "click", 4, "appHasPermission"], ["title", "Instance", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "instanceid", "caption", "Instance ID", 3, "allowSorting", "sortOrder", "width"], ["dataField", "instancename", "caption", "Instance Name"], ["dataField", "accountid", "caption", "Company Name"], ["dataField", "ownername", "caption", "Owner Name"], ["dataField", "ownermobile", "caption", "Owner Mobile", 3, "width"], ["dataField", "owneremail", "caption", "Owner Email", 3, "width"], ["dataField", "instanceisactive", "caption", "Active", 3, "width"], ["caption", "Action", "alignment", "center", "cellTemplate", "actionTemplate", 3, "visible", "width"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [3, "value"], ["mat-raised-button", "", "type", "submit", 4, "ngIf"], ["mat-raised-button", "", "type", "submit"], [1, "add-btn", 3, "click"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], ["style", "cursor: pointer;", 3, "click", 4, "appHasPermission"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"]],
      template: function InstanceComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "Add Instance");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function InstanceComponent_Template_button_click_4_listener() {
            return ctx.restinstanceForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function InstanceComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function InstanceComponent_Template_select_change_10_listener($event) {
            return ctx.onSelectionAccountChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Select Account");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, InstanceComponent_option_13_Template, 2, 2, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "mat-form-field", 4)(15, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Owner Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "mat-form-field", 4)(19, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](20, "Owner Mobile");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "span", 5)(22, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "mat-form-field", 4)(24, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, "Owner Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](26, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "mat-form-field", 4)(28, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Instance Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](30, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-form-field", 4)(32, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](33, "Manager Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-form-field", 4)(36, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Manager Mobile");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "span", 5)(39, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "mat-form-field", 4)(41, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](42, "Manager Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](44, "mat-form-field", 4)(45, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](46, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](47, "input", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "mat-form-field", 4)(49, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "select", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function InstanceComponent_Template_select_change_51_listener($event) {
            return ctx.onSelectionChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](52, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](53, "Select City");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](54, InstanceComponent_option_54_Template, 2, 2, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "mat-form-field", 4)(56, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](58, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](59, "mat-form-field", 4)(60, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](61, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](62, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "mat-form-field", 4)(64, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Pincode");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](67, "mat-form-field", 4)(68, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](69, "Sales Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](70, "input", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "mat-form-field", 4)(72, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](73, "Sales Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](74, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "mat-form-field", 4)(76, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Asa End Date");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](78, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "mat-form-field", 4)(80, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](81, "Asa Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](82, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](83, "mat-form-field", 4)(84, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "GST Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](86, "input", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](87, "mat-form-field", 4)(88, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](89, "VAT Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](90, "input", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](91, "mat-form-field", 4)(92, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](93, "FSSAI Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](94, "input", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](95, "mat-form-field", 4)(96, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](97, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](98, "select", 28)(99, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](100, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](101, "option", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](102, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](103, "option", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](104, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](105, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](106, InstanceComponent_ng_container_106_Template, 2, 1, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](107, InstanceComponent_ng_container_107_Template, 2, 1, "ng-container", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](108, "div", 33)(109, "mat-card")(110, "mat-card-header")(111, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](112);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](113, "mat-card")(114, "mat-card-header")(115, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](116);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](117, "mat-card")(118, "mat-card-header")(119, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](120);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](121, "div", 34)(122, "div", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](123, InstanceComponent_button_123_Template, 3, 0, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](124, "dx-data-grid", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onExporting", function InstanceComponent_Template_dx_data_grid_onExporting_124_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](125, "dxi-column", 38)(126, "dxi-column", 39)(127, "dxi-column", 40)(128, "dxi-column", 41)(129, "dxi-column", 42)(130, "dxi-column", 43)(131, "dxi-column", 44)(132, "dxi-column", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](133, InstanceComponent_div_133_Template, 3, 2, "div", 46);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](134, "dxo-export", 47);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.instanceForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.dropdownAccountItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](41);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.dropdownItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](52);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "instance:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "instance:update");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Instance\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalInstance, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeInstance, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveInstance, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "instance:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](30, _c0))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](31, _c1))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](32, _c2))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("allowSorting", true)("sortOrder", "asc")("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("width", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_17__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_19__.DxTemplateDirective, _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_7__.HasPermissionDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n  max-width: 100%;\n  margin: 15px auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n  background-color: #ffff;\n  margin-top: 1% !important;\n  height: 550px !important;\nwidth: 1237px !important;\n}\n\n\n.form-submit[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  text-align: center;\n}\n.mat-icon[_ngcontent-%COMP%]{\n  color: black;\n  height: 10px;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.btn-pos-list[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 0px;\n  right: 355px;\n  width: 40px;\n  z-index: 1;\n}\n\n.edit-btn[_ngcontent-%COMP%]{\n  font-size: 18px;\n  color:#337ab7;\n}\n  .dx-datagrid .dx-row > td {\n vertical-align: middle !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  font-size: 30px;\n  color: black;\n  font-weight: 700px;\n  margin-left: 1134px;\n  margin-top: -14px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvaW5zdGFuY2UvaW5zdGFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkJBQTJCLHlDQUF5QztFQUNsRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCLHdCQUF3QjtBQUN4Qjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0NBQ0MsaUNBQWlDO0FBQ2xDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiXG4uZm9ybS1jb250YWluZXIgeyAgICAgICAgICAvKkZvcm0gQ29udGFpbmVyIHdpdGggZm9ybSBmaWVsZHMgaW5zaWRlKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDE1cHggYXV0bztcbiAgcGFkZGluZzogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgyNDMsIDI0MywgMjQzLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcbiAgbWFyZ2luLXRvcDogMSUgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA1NTBweCAhaW1wb3J0YW50O1xud2lkdGg6IDEyMzdweCAhaW1wb3J0YW50O1xufVxuXG5cbi5mb3JtLXN1Ym1pdHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1hdC1pY29ue1xuICBjb2xvcjogYmxhY2s7XG4gIGhlaWdodDogMTBweDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJ0bi1wb3MtbGlzdHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgcmlnaHQ6IDM1NXB4O1xuICB3aWR0aDogNDBweDtcbiAgei1pbmRleDogMTtcbn1cblxuLmVkaXQtYnRue1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiMzMzdhYjc7XG59XG46Om5nLWRlZXAgLmR4LWRhdGFncmlkIC5keC1yb3cgPiB0ZCB7XG4gdmVydGljYWwtYWxpZ246IG1pZGRsZSAhaW1wb3J0YW50O1xufVxuLmNsb3NlLWJ0biB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXdlaWdodDogNzAwcHg7XG4gIG1hcmdpbi1sZWZ0OiAxMTM0cHg7XG4gIG1hcmdpbi10b3A6IC0xNHB4O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
class InputPrefixSuffixExample {}

/***/ }),

/***/ 80350:
/*!***************************************************!*\
  !*** ./src/app/pages/instance/instance.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceModule: () => (/* binding */ InstanceModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _instance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./instance-routing.module */ 26383);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _instance_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./instance.component */ 11135);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 22866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);











class InstanceModule {
  static {
    this.ɵfac = function InstanceModule_Factory(t) {
      return new (t || InstanceModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: InstanceModule,
      bootstrap: [_instance_component__WEBPACK_IMPORTED_MODULE_3__.InstanceComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService],
      imports: [_instance_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstanceRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](InstanceModule, {
    declarations: [_instance_component__WEBPACK_IMPORTED_MODULE_3__.InstanceComponent],
    imports: [_instance_routing_module__WEBPACK_IMPORTED_MODULE_0__.InstanceRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_instance_instance_module_ts.js.map