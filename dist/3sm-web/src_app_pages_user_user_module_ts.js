"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_user_user_module_ts"],{

/***/ 71503:
/*!***************************************************!*\
  !*** ./src/app/pages/user/user-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserRoutingModule: () => (/* binding */ UserRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ 88191);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _user_component__WEBPACK_IMPORTED_MODULE_0__.UserComponent
}];
class UserRoutingModule {
  static {
    this.ɵfac = function UserRoutingModule_Factory(t) {
      return new (t || UserRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UserRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 88191:
/*!**********************************************!*\
  !*** ./src/app/pages/user/user.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputPrefixSuffixExample: () => (/* binding */ InputPrefixSuffixExample),
/* harmony export */   UserComponent: () => (/* binding */ UserComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/user.service */ 48039);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _service_userrole_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/userrole.service */ 61715);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/auth.service */ 9822);
/* harmony import */ var _service_permission_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../service/permission.service */ 69227);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! devextreme-angular/ui/nested */ 17192);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! devextreme-angular/core */ 26683);
/* harmony import */ var _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../directives/has-permission.directive */ 79561);























function UserComponent_option_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r7.instanceid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r7.instancename, " ");
  }
}
function UserComponent_option_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpropertyInterpolate"]("value", item_r8.cityname);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r8.cityname, " ");
  }
}
function UserComponent_option_65_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", item_r9.userroleid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", item_r9.userrolename, " ");
  }
}
function UserComponent_ng_container_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UserComponent_ng_container_87_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r10.createUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
}
function UserComponent_ng_container_88_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UserComponent_ng_container_88_button_1_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r13.createUser());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
}
function UserComponent_ng_container_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, UserComponent_ng_container_88_button_1_Template, 2, 0, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r4.isEditMode);
  }
}
function UserComponent_button_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UserComponent_button_104_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r15.toggleForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function UserComponent_div_113_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UserComponent_div_113_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r22);
      const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r20.editItem(data_r17.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function UserComponent_div_113_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UserComponent_div_113_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r25);
      const data_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]().$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵresetView"](ctx_r23.deleteItem(data_r17.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
  }
}
function UserComponent_div_113_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](1, UserComponent_div_113_a_1_Template, 3, 0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](2, UserComponent_div_113_a_2_Template, 3, 0, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "user:update");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "user:delete");
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
class UserComponent {
  constructor(userservice, instanceService, userroleService, authService, permissionService, fromBuilder, http) {
    this.userservice = userservice;
    this.instanceService = instanceService;
    this.userroleService = userroleService;
    this.authService = authService;
    this.permissionService = permissionService;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.isFormOpen = false; // Controls the slider visibility
    this.isEditMode = false; // Controls edit mode
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.instanceList = [];
    this.userroleDropdownItems = [];
    this.data = [];
    this.apiData = [];
    this.totalUser = 0;
    this.activeUser = 0;
    this.deactiveUser = 0;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl;
  }
  ngOnInit() {
    const accountId = this.authService.getAccountId() ?? 0;
    const instanceId = this.authService.getInstanceId() ?? 0;
    const userId = this.authService.getUserId() ?? 1;
    this.userForm = this.fromBuilder.group({
      username: [""],
      usermobile: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")],
      useremail: [""],
      userpassword: [""],
      verifypassword: [""],
      useraddress: [""],
      usercity: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
      userstate: [""],
      usercountry: [""],
      userpincode: [""],
      userrole: [""],
      userroleid: [""],
      userasaenddate: [new Date()],
      userasaamount: [""],
      userforgotpwquest: [""],
      userforgotpwans: [""],
      createddate: [new Date()],
      updateddate: [new Date()],
      isactive: [""],
      createdby: [userId],
      updatedby: [userId],
      accountid: [accountId],
      instanceid: [instanceId],
      cityid: [1],
      userisactive: ["true"]
    });
    this.getUserDetails();
    this.getDropDownValue();
    this.loadInstanceList();
    this.loadUserroleList();
  }
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Select Status:', this.userForm.value.userisactive);
    } else {
      console.error('Form is Invalid');
    }
    if (this.userForm.valid) {
      console.log('Select Status:', this.userForm.value.usercity);
    } else {
      console.error('Form is Invalid');
    }
  }
  createUser() {
    const raw = this.userForm.getRawValue();
    const roleId = raw.userroleid != null && raw.userroleid !== '' ? Number(raw.userroleid) : null;
    const selectedRole = roleId != null ? this.userroleDropdownItems.find(r => Number(r.userroleid) === roleId) : null;
    const payload = {
      ...raw,
      userrole: selectedRole ? selectedRole.userrolename : raw.userrole || '',
      userroleid: roleId ?? raw.userroleid,
      userisactive: raw.userisactive == null || raw.userisactive === '' ? 'true' : raw.userisactive
    };
    delete payload.verifypassword;
    this.userservice.addUser(payload).subscribe(data => {
      if (data) {
        this.getUserDetails();
        this.restuserForm();
      }
      console.log('User Details:', data);
    });
  }
  byAccountId(list, accountId) {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter(item => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }
  getUserDetails() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.userservice.getUserDetails().subscribe({
      next: apidata => {
        const raw = Array.isArray(apidata) ? apidata : [];
        const filtered = accountId != null ? this.byAccountId(raw, accountId) : raw;
        this.user = filtered.sort((a, b) => (b.createddate || 0) - (a.createddate || 0));
        this.apiData = [...this.user];
        this.totalUser = filtered.length;
        this.activeUser = filtered.filter(u => u.userisactive === true || u.userisactive === 'true' || u.userisactive === 1).length;
        this.deactiveUser = this.totalUser - this.activeUser;
      },
      error: err => console.error('Error fetching user details:', err)
    });
  }
  getDropDownValue() {
    this.userservice.getDropdownItems().subscribe({
      next: items => this.dropdownItems = items,
      error: err => console.error('Error fetching dropdown items', err)
    });
  }
  loadInstanceList() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    this.instanceService.getInstanceDetails().subscribe({
      next: list => {
        const raw = list || [];
        const byAccount = accountId != null ? raw.filter(i => {
          const id = i.accountid ?? i.accountId;
          return id != null && Number(id) === Number(accountId);
        }) : raw;
        this.instanceList = byAccount.filter(i => i.instanceisactive === true || i.instanceisactive === 'true' || i.instanceisactive === 1);
      },
      error: err => console.error('Error fetching instance list', err)
    });
  }
  loadUserroleList() {
    this.userroleService.getDropdownItems().subscribe({
      next: list => {
        this.userroleDropdownItems = (list || []).filter(r => r.userroleisactive === true || r.userroleisactive === 'true' || r.userroleisactive === 1);
      },
      error: err => console.error('Error fetching user role list', err)
    });
  }
  onInstanceSelectionChange(event) {
    const select = event.target;
    const instanceId = select.value ? Number(select.value) : 0;
    if (!instanceId) {
      return;
    }
    const instance = this.instanceList.find(i => Number(i.instanceid) === instanceId);
    if (instance) {
      this.userForm.patchValue({
        instanceid: instance.instanceid,
        accountid: instance.accountid != null ? instance.accountid : 0,
        useraddress: instance.instanceaddress || '',
        usercity: instance.instancecity || '',
        userstate: instance.instancestate || '',
        usercountry: instance.instancecountry || '',
        userpincode: instance.instancepincode || '',
        cityid: instance.cityid || 1
      });
    }
  }
  onSelectionChange(event) {
    const selectedValue = event.target.value;
    console.log('Selected City Name:', selectedValue);
    const selectedItem = this.dropdownItems.find(item => item.cityname === selectedValue);
    console.log('Selected City', selectedValue);
    if (selectedItem) {
      this.userForm.patchValue({
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
    const userisactive = item.userisactive === true || item.userisactive === 'true' || item.userisactive === 1 ? 'true' : 'false';
    this.userForm.patchValue({
      ...item,
      userisactive
    });
  }
  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.username}?`)) {
      this.userservice.deleteUser(item.userid).subscribe({
        next: () => {
          console.log("Deleted:", item);
          this.getUserDetails(); // Refresh grid after delete
        },

        error: err => console.error('Error deleting Instance', err)
      });
    }
  }
  onExporting(e) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_2__.Workbook();
    const worksheet = workbook.addWorksheet('User Data');
    (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__.exportDataGrid)({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "UserData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
    if (!this.isEditMode) {
      this.loadInstanceList();
      this.loadUserroleList();
    }
  }
  restuserForm() {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.userForm.reset();
    const accountId = this.authService.getAccountId() ?? 0;
    const instanceId = this.authService.getInstanceId() ?? 0;
    this.userForm.patchValue({
      instanceid: instanceId,
      cityid: 1,
      accountid: accountId,
      userisactive: 'true',
      createddate: new Date(),
      updateddate: new Date()
    });
  }
  getDropDownValues() {
    this.http.get(`${this.apiUrl}/user/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
  onCityChange(event) {
    const selectedCityId = event.target.value;
    this.http.get(`${this.apiUrl}/user/${selectedCityId}`).subscribe(data => {
      this.userForm.patchValue({
        cityid: data.cityid,
        userstate: data.citystate,
        usercountry: data.citycountry
      });
    });
  }
  static {
    this.ɵfac = function UserComponent_Factory(t) {
      return new (t || UserComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_instance_service__WEBPACK_IMPORTED_MODULE_5__.InstanceService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_userrole_service__WEBPACK_IMPORTED_MODULE_6__.UserroleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_7__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_service_permission_service__WEBPACK_IMPORTED_MODULE_8__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
      type: UserComponent,
      selectors: [["app-user"]],
      decls: 115,
      vars: 36,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matNativeControl", "", "formControlName", "instanceid", 3, "change"], ["disabled", "", 3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "placeholder", "User Name", "formControlName", "username", 1, "mat-input-element", "custom-placeholder"], ["matTextPrefix", "", 2, "color", "black"], ["maxlength", "12", "matInput", "", "placeholder", "1234-567890", "formControlName", "usermobile", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "User Email", "formControlName", "useremail", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "type", "password", "placeholder", "Password", "formControlName", "userpassword", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "type", "password", "placeholder", "Verify Password", "formControlName", "verifypassword", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Address", "formControlName", "useraddress", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "usercity", 3, "change"], ["value", "", "disabled", ""], ["matInput", "", "placeholder", "State", "formControlName", "userstate", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Country", "formControlName", "usercountry", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Pincode", "formControlName", "userpincode", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "userroleid"], ["matInput", "", "type", "number", "placeholder", "ASA Amount", "formControlName", "userasaamount", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Security question", "formControlName", "userforgotpwquest", 1, "mat-input-element", "custom-placeholder"], ["matInput", "", "placeholder", "Security answer", "formControlName", "userforgotpwans", 1, "mat-input-element", "custom-placeholder"], ["matNativeControl", "", "formControlName", "userisactive"], ["value", "true"], ["value", "false"], [1, "form-submit"], [4, "appHasPermission"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], ["class", "add-btn", 3, "click", 4, "appHasPermission"], ["title", "User", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "userid", "caption", "User ID", 3, "allowSorting", "sortOrder", "width"], ["dataField", "username", "caption", "User Name"], ["dataField", "usermobile", "caption", "User Mobile", 3, "width"], ["dataField", "useremail", "caption", "User Email", 3, "width"], ["dataField", "usercity", "caption", "User City"], ["dataField", "userisactive", "caption", "Active", 3, "width"], ["caption", "Action", "alignment", "center", "cellTemplate", "actionTemplate", 3, "visible", "width"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [3, "value"], ["mat-raised-button", "", "type", "submit", 3, "click"], ["mat-raised-button", "", "type", "submit", 3, "click", 4, "ngIf"], [1, "add-btn", 3, "click"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], ["style", "cursor: pointer;", 3, "click", 4, "appHasPermission"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"]],
      template: function UserComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function UserComponent_Template_button_click_4_listener() {
            return ctx.restuserForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("ngSubmit", function UserComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9, "Instance");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "select", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function UserComponent_Template_select_change_10_listener($event) {
            return ctx.onInstanceSelectionChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "option", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Select Instance");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](13, UserComponent_option_13_Template, 2, 2, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "mat-form-field", 4)(15, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](16, "User Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "mat-form-field", 4)(19, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](20, "User Mobile");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "span", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "+91 \u00A0");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](23, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "mat-form-field", 4)(25, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "User Email");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "mat-form-field", 4)(29, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](31, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "mat-form-field", 4)(33, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34, "Verify Password");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](35, "input", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "mat-form-field", 4)(37, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](39, "input", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "mat-form-field", 4)(41, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42, "City");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "select", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function UserComponent_Template_select_change_43_listener($event) {
            return ctx.onSelectionChange($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, UserComponent_option_46_Template, 2, 2, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "mat-form-field", 4)(48, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "State");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](50, "input", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "mat-form-field", 4)(52, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Country");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](54, "input", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "mat-form-field", 4)(56, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Pincode");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](58, "input", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](59, "mat-form-field", 4)(60, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](61, "User Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](62, "select", 21)(63, "option", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](64, "Select Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](65, UserComponent_option_65_Template, 2, 2, "option", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](66, "mat-form-field", 4)(67, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](68, "User ASA Amount");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](69, "input", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](70, "mat-form-field", 4)(71, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](72, "Forgot Password Question");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](73, "input", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](74, "mat-form-field", 4)(75, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](76, "Forgot Password Answer");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](77, "input", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](78, "mat-form-field", 4)(79, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](80, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](81, "select", 25)(82, "option", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](83, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](84, "option", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](85, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](86, "div", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](87, UserComponent_ng_container_87_Template, 3, 0, "ng-container", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](88, UserComponent_ng_container_88_Template, 2, 1, "ng-container", 29);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](89, "div", 30)(90, "mat-card")(91, "mat-card-header")(92, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](93);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](94, "mat-card")(95, "mat-card-header")(96, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](97);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](98, "mat-card")(99, "mat-card-header")(100, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](101);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](102, "div", 31)(103, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](104, UserComponent_button_104_Template, 3, 0, "button", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](105, "dx-data-grid", 34);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onExporting", function UserComponent_Template_dx_data_grid_onExporting_105_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](106, "dxi-column", 35)(107, "dxi-column", 36)(108, "dxi-column", 37)(109, "dxi-column", 38)(110, "dxi-column", 39)(111, "dxi-column", 40)(112, "dxi-column", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](113, UserComponent_div_113_Template, 3, 2, "div", 42);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](114, "dxo-export", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit User" : "Add User");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.userForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.instanceList);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.dropdownItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](19);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.userroleDropdownItems);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](22);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "user:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "user:update");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("User\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalUser, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeUser, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveUser, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("appHasPermission", "user:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](33, _c0))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](34, _c1))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](35, _c2))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("allowSorting", true)("sortOrder", "asc")("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 150);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("width", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("visible", true)("width", 125);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__.MatPrefix, _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_16__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_19__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_20__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_20__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_21__.DxTemplateDirective, _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_9__.HasPermissionDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n  max-width: 100%;\n  margin: 15px auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n  background-color: #ffff;\n  margin-top: 1% !important;\n  height: 350px !important;\nwidth: 1237px !important;\n}\n\n\n.form-submit[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  text-align: center;\n}\n.mat-icon[_ngcontent-%COMP%]{\n  color: black;\n  height: 10px;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.btn-pos-list[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 0px;\n  right: 355px;\n  width: 40px;\n  z-index: 1;\n}\n\n.edit-btn[_ngcontent-%COMP%]{\n  font-size: 18px;\n  color:#337ab7;\n}\n  .dx-datagrid .dx-row > td {\n vertical-align: middle !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  font-size: 30px;\n  color: black;\n  font-weight: 700px;\n  margin-left: 1134px;\n  margin-top: -14px;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlci91c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDJCQUEyQix5Q0FBeUM7RUFDbEUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLDhDQUE4QztFQUM5Qyx1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLHdCQUF3QjtBQUMxQix3QkFBd0I7QUFDeEI7OztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtDQUNDLGlDQUFpQztBQUNsQztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQiIsInNvdXJjZXNDb250ZW50IjpbIlxuLmZvcm0tY29udGFpbmVyIHsgICAgICAgICAgLypGb3JtIENvbnRhaW5lciB3aXRoIGZvcm0gZmllbGRzIGluc2lkZSovXG4gIG1heC13aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAxNXB4IGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMjQzLCAyNDMsIDI0MywgMC4xKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY7XG4gIG1hcmdpbi10b3A6IDElICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzUwcHggIWltcG9ydGFudDtcbndpZHRoOiAxMjM3cHggIWltcG9ydGFudDtcbn1cblxuXG4uZm9ybS1zdWJtaXR7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5tYXQtaWNvbntcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDEwcHg7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5idG4tcG9zLWxpc3R7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAzNTVweDtcbiAgd2lkdGg6IDQwcHg7XG4gIHotaW5kZXg6IDE7XG59XG5cbi5lZGl0LWJ0bntcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjojMzM3YWI3O1xufVxuOjpuZy1kZWVwIC5keC1kYXRhZ3JpZCAuZHgtcm93ID4gdGQge1xuIHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgIWltcG9ydGFudDtcbn1cbi5jbG9zZS1idG4ge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC13ZWlnaHQ6IDcwMHB4O1xuICBtYXJnaW4tbGVmdDogMTEzNHB4O1xuICBtYXJnaW4tdG9wOiAtMTRweDtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}
class InputPrefixSuffixExample {}

/***/ }),

/***/ 40958:
/*!*******************************************!*\
  !*** ./src/app/pages/user/user.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserModule: () => (/* binding */ UserModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _user_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-routing.module */ 71503);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ 88191);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 22866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);











class UserModule {
  static {
    this.ɵfac = function UserModule_Factory(t) {
      return new (t || UserModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: UserModule,
      bootstrap: [_user_component__WEBPACK_IMPORTED_MODULE_3__.UserComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService],
      imports: [_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserModule, {
    declarations: [_user_component__WEBPACK_IMPORTED_MODULE_3__.UserComponent],
    imports: [_user_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_user_user_module_ts.js.map