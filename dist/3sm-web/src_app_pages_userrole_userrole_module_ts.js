"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_userrole_userrole_module_ts"],{

/***/ 34503:
/*!***********************************************************!*\
  !*** ./src/app/pages/userrole/userrole-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserroleRoutingModule: () => (/* binding */ UserroleRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _userrole_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userrole.component */ 79367);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _userrole_component__WEBPACK_IMPORTED_MODULE_0__.UserroleComponent
}];
class UserroleRoutingModule {
  static {
    this.ɵfac = function UserroleRoutingModule_Factory(t) {
      return new (t || UserroleRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: UserroleRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](UserroleRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 79367:
/*!******************************************************!*\
  !*** ./src/app/pages/userrole/userrole.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserroleComponent: () => (/* binding */ UserroleComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 85841);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! devextreme/excel_exporter */ 5243);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exceljs */ 54058);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_userrole_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/userrole.service */ 61715);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_permission_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/permission.service */ 69227);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/auth.service */ 9822);
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





















const _c0 = ["formSection"];
function UserroleComponent_mat_error_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " User role name is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UserroleComponent_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Active status is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
}
function UserroleComponent_button_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_button_41_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r7.toggleForm());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "add_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function UserroleComponent_div_49_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_div_49_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r15);
      const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r13.editItem(data_r9.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function UserroleComponent_div_49_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_div_49_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18);
      const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r16.configurePermissions(data_r9.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function UserroleComponent_div_49_a_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_div_49_a_3_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const data_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r19.deleteItem(data_r9.data));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "span", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function UserroleComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, UserroleComponent_div_49_a_1_Template, 3, 0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, UserroleComponent_div_49_a_2_Template, 3, 0, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, UserroleComponent_div_49_a_3_Template, 3, 0, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "userrole:update");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.canShowConfigureButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "userrole:delete");
  }
}
function UserroleComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, "Loading permissions...");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
}
function UserroleComponent_div_60_label_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "label", 54)(1, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function UserroleComponent_div_60_label_10_Template_input_change_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r26);
      const permission_r24 = restoredCtx.$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r25.togglePermission(permission_r24));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const permission_r24 = ctx.$implicit;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("selected", ctx_r23.hasPermission(permission_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("checked", ctx_r23.hasPermission(permission_r24));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](permission_r24.name || permission_r24.resource + " " + permission_r24.action);
  }
}
function UserroleComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 47)(1, "div", 48)(2, "h4", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div")(5, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_div_60_Template_button_click_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const resource_r22 = restoredCtx.$implicit;
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r27.selectAllPermissions(resource_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6, "Select All");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_div_60_Template_button_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const resource_r22 = restoredCtx.$implicit;
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresetView"](ctx_r29.deselectAllPermissions(resource_r22));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Deselect All");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, UserroleComponent_div_60_label_10_Template, 4, 4, "label", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const resource_r22 = ctx.$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](resource_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r5.permissionTemplates[resource_r22]);
  }
}
function UserroleComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 56)(1, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Selected: ", ctx_r6.rolePermissions.length, " permission(s)");
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
class UserroleComponent {
  constructor(userroleservice, fromBuilder, http, permissionService,
  // Public so it can be accessed in template
  authService, cdr // For forcing change detection
  ) {
    this.userroleservice = userroleservice;
    this.fromBuilder = fromBuilder;
    this.http = http;
    this.permissionService = permissionService;
    this.authService = authService;
    this.cdr = cdr;
    this.isFormOpen = false; // Controls the slider visibility
    this.isPermissionConfigOpen = false; // Controls permission configuration panel
    this.isEditMode = false;
    this.dropdownOptions = [];
    this.dropdownItems = [];
    this.data = [];
    this.apiData = [];
    this.totalUserrole = 0;
    this.activeUserrole = 0;
    this.deactiveUserrole = 0;
    this.selectedRoleId = 0;
    this.selectedRoleName = '';
    this.availablePermissions = [];
    this.rolePermissions = [];
    this.permissionTemplates = {};
    this.permissionResourceKeys = []; // Array to hold resource keys for template
    this.allAvailablePermissions = []; // All permissions from backend with IDs
    this.permissionLookup = new Map(); // Lookup map: "resource:action" -> Permission with ID
  }

  ngOnInit() {
    this.userroleForm = this.fromBuilder.group({
      "userrolename": ["", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      "createddate": [new Date()],
      "updateddate": [new Date()],
      "userroleisactive": ["true", _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
      "createdby": [1],
      "updatedby": [1],
      "userroleid": [0],
      "accountid": [this.authService.getAccountId() ?? 1],
      "instanceid": [this.authService.getInstanceId() ?? 1]
    });
    this.getUserroleDetails();
    this.getDropDownValue();
    this.loadPermissionTemplates();
    // Audit/compliance: verify RBAC access via backend (GET /role/permissions/userrole-check)
    // Pass current user's instanceId so instance-scoped Super Admins can access RBAC
    const instanceId = this.authService.getUser()?.instanceid ?? this.authService.getUser()?.instanceId ?? undefined;
    this.userroleservice.getUserRoleCheck(instanceId).subscribe({
      next: () => {},
      error: () => {}
    });
    // Debug: Check button visibility conditions
    setTimeout(() => {
      this.debugButtonVisibility();
    }, 2000); // Check after 2 seconds to allow permissions to load
    {
      // Fetch data from API
      this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/userrole/counts`).subscribe(response => {
        this.totalUserrole = response.totalUserrole;
        this.activeUserrole = response.activeUserrole;
        this.deactiveUserrole = response.deactiveUserrole;
      });
    }
  }
  loadPermissionTemplates() {
    this.permissionTemplates = this.permissionService.getPermissionTemplates();
    // Flatten all permissions into availablePermissions
    this.availablePermissions = Object.values(this.permissionTemplates).flat();
    // Update the resource keys array for template use
    this.permissionResourceKeys = Object.keys(this.permissionTemplates);
  }
  onSubmit() {
    if (!this.userroleForm.valid) {
      return;
    }
  }
  createUserrole() {
    if (this.isEditMode) {
      this.userroleservice.updateUserrole(this.userroleForm.value).subscribe({
        next: () => {
          this.getUserroleDetails();
          this.restuserroleForm();
        },
        error: () => {}
      });
    } else {
      this.userroleservice.addUserrole(this.userroleForm.value).subscribe({
        next: () => {
          this.getUserroleDetails();
          this.restuserroleForm();
        },
        error: () => {}
      });
    }
  }
  getUserroleDetails() {
    this.userroleservice.getUserroleDetails().subscribe({
      next: apidata => {
        this.userrole = apidata.sort((a, b) => b.createddate - a.createddate);
        this.userroleservice.getUserroleDetails().subscribe(data => {
          this.apiData = data;
        });
      }
    });
  }
  getDropDownValue() {
    this.userroleservice.getDropdownItems().subscribe({
      next: items => this.dropdownItems = items,
      error: () => {}
    });
  }
  editItem(item) {
    this.isFormOpen = true;
    this.isEditMode = true;
    this.userroleForm.patchValue({
      ...item,
      userroleisactive: item.userroleisactive ? 'true' : 'false'
    });
  }
  configurePermissions(item) {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const hasPermissionSettingsAccess = this.permissionService.hasPermissionCode('permission:settings:access');
    const hasConfigurePermission = this.permissionService.hasPermission('userrole', 'configure');
    if (!isSuperAdmin && !hasPermissionSettingsAccess && !hasConfigurePermission) {
      alert('Access denied. Only Super Admin or users with permission:settings:access can configure permissions.');
      return;
    }
    this.selectedRoleId = item.userroleid;
    this.selectedRoleName = item.userrolename;
    this.rolePermissions = [];
    this.isPermissionConfigOpen = true;
    this.cdr.detectChanges();
    setTimeout(() => this.cdr.detectChanges(), 100);
    // First, load all available permissions from backend (these have IDs)
    this.loadAllAvailablePermissions(() => {
      // After permissions are loaded, load existing role permissions
      this.loadRolePermissions(item.userroleid);
    });
  }
  // Load all available permissions from backend (these have IDs)
  // Backend returns permissions in frontend-friendly format: { id, resource, action, field, ... }
  // The backend automatically parses permissioncode (e.g., "account:create:name") into resource, action, field
  loadAllAvailablePermissions(callback) {
    this.permissionService.getAllPermissions().subscribe({
      next: response => {
        let permissions = [];
        if (Array.isArray(response)) {
          permissions = response;
        } else if (response && Array.isArray(response.permissions)) {
          permissions = response.permissions;
        } else if (response && response.success && Array.isArray(response.data)) {
          permissions = response.data;
        }
        this.allAvailablePermissions = permissions;
        // Create lookup map: "resource:action:field" -> Permission with ID
        this.permissionLookup.clear();
        permissions.forEach(p => {
          const key = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
          this.permissionLookup.set(key, p);
        });
        if (permissions.length > 0) {
          // Build permission templates from backend list (all pages) grouped by resource
          const byResource = {};
          permissions.forEach(p => {
            const r = (p.resource || 'other').toLowerCase();
            if (!byResource[r]) byResource[r] = [];
            byResource[r].push({
              id: p.id,
              name: p.name || `${p.resource} ${p.action}`,
              resource: p.resource,
              action: p.action,
              field: p.field,
              description: p.description
            });
          });
          this.permissionTemplates = byResource;
          this.permissionResourceKeys = Object.keys(byResource).sort();
        } else {
          this.loadPermissionTemplates();
        }
        if (callback) {
          callback();
        }
      },
      error: () => {
        this.loadPermissionTemplates();
        if (callback) {
          callback();
        }
      }
    });
  }
  loadRolePermissions(roleId) {
    this.userroleservice.getRolePermissions(roleId).subscribe({
      next: response => {
        let permissionsArray = [];
        // Handle different response formats
        if (Array.isArray(response)) {
          permissionsArray = response;
        } else if (response && typeof response === 'object' && 'permissions' in response) {
          permissionsArray = response.permissions || [];
        }
        // Map permissions - backend returns in frontend-friendly format with resource, action, field
        // Backend automatically parses permissioncode into these fields via transformPermissionToFrontendFormat()
        this.rolePermissions = permissionsArray.map(p => {
          // Backend already provides resource, action, field in frontend-friendly format
          // If permission doesn't have ID, try to find it from lookup using resource:action:field
          let permissionId = p.id || p.permissionid || p.permissionId;
          if (!permissionId && p.resource && p.action) {
            const lookupKey = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
            const foundPermission = this.permissionLookup.get(lookupKey);
            if (foundPermission && foundPermission.id) {
              permissionId = foundPermission.id;
            }
          }
          // Return permission in frontend format (already in this format from backend)
          return {
            id: permissionId,
            name: p.name || `${p.resource} ${p.action}`,
            resource: p.resource,
            action: p.action,
            field: p.field,
            description: p.description
          };
        });
        this.cdr.detectChanges();
      },
      error: err => {
        if (err.status === 403) {
          alert('Access denied. Only Super Admin can view role permissions.');
          this.closePermissionConfig();
          return;
        }
        this.rolePermissions = [];
      }
    });
  }
  togglePermission(permission) {
    const index = this.rolePermissions.findIndex(p => {
      const resourceMatch = p.resource === permission.resource;
      const actionMatch = p.action === permission.action;
      const fieldMatch = !permission.field || !p.field || p.field === permission.field;
      return resourceMatch && actionMatch && fieldMatch;
    });
    if (index >= 0) {
      this.rolePermissions.splice(index, 1);
    } else {
      const lookupKey = `${permission.resource}:${permission.action}${permission.field ? `:${permission.field}` : ''}`;
      const permissionWithId = this.permissionLookup.get(lookupKey);
      const newPermission = {
        id: permissionWithId?.id || permission.id,
        name: permission.name || `${permission.resource} ${permission.action}`,
        resource: permission.resource,
        action: permission.action,
        field: permission.field,
        description: permission.description || permissionWithId?.description
      };
      this.rolePermissions.push(newPermission);
    }
  }
  hasPermission(permission) {
    const hasPerm = this.rolePermissions.some(p => {
      const resourceMatch = p.resource === permission.resource;
      const actionMatch = p.action === permission.action;
      const fieldMatch = !permission.field || !p.field || p.field === permission.field;
      return resourceMatch && actionMatch && fieldMatch;
    });
    return hasPerm;
  }
  saveRolePermissions() {
    // Check if user is Super Admin
    if (!this.permissionService.isSuperAdmin()) {
      alert('Access denied. Only Super Admin can assign permissions to roles.');
      return;
    }
    if (!this.selectedRoleId || this.selectedRoleId <= 0) {
      alert('Invalid role selected. Role ID must be a positive number.');
      return;
    }
    const roleId = typeof this.selectedRoleId === 'number' ? this.selectedRoleId : Number(this.selectedRoleId);
    if (isNaN(roleId) || roleId <= 0) {
      alert('Invalid role ID. Please select a valid role.');
      return;
    }
    // Check if this is the Super Admin role
    const roleNameLower = (this.selectedRoleName || '').toLowerCase().trim();
    const isSuperAdminRole = roleNameLower === 'super admin' || roleNameLower === 'superadmin' || roleNameLower === 'super_admin' || roleNameLower === 'super-admin' || roleNameLower.startsWith('super admin') || roleNameLower.startsWith('superadmin') || roleNameLower.includes('super admin') || roleNameLower.includes('superadmin');
    let permissionIds;
    if (isSuperAdminRole) {
      permissionIds = [1];
    } else {
      // Extract permission IDs as numbers - backend expects { permissionid: Number }
      // Try multiple field name variations and ensure we only get numbers
      permissionIds = this.rolePermissions.map(p => {
        // Try to get ID from various fields
        let id = p.id || p.permissionid || p.permissionId || p.permission_id;
        // If ID is still not found, try to get from lookup map
        if ((id === undefined || id === null) && p.resource && p.action) {
          const lookupKey = `${p.resource}:${p.action}${p.field ? `:${p.field}` : ''}`;
          const foundPermission = this.permissionLookup.get(lookupKey);
          if (foundPermission && foundPermission.id) {
            id = foundPermission.id;
          }
        }
        if (id === undefined || id === null) {
          return null;
        }
        if (typeof id === 'object') {
          if (id.id !== undefined) {
            id = id.id;
          } else {
            return null;
          }
        }
        // Convert to number, handling string numbers
        const numId = typeof id === 'number' ? id : typeof id === 'string' ? parseInt(id, 10) : null;
        if (numId === null || isNaN(numId) || numId <= 0) {
          return null;
        }
        return numId;
      }).filter(id => id !== null && !isNaN(id) && id > 0);
    }
    if (permissionIds.length === 0) {
      alert(`Error: No valid permission IDs found for ${this.rolePermissions.length} selected permissions.\n\n` + `The backend permissions list may not contain these permissions, or they may need to be created first.\n\n` + `Please check the browser console for details.`);
      return;
    }
    // Send permission IDs in the format expected by backend
    // Backend expects array of objects with permissionid property: [{ permissionid: 1 }, { permissionid: 2 }]
    // The roleId is sent in the URL path, not in the body
    const permissionsToSave = permissionIds.map(permissionId => {
      if (typeof permissionId === 'object') {
        throw new Error(`Invalid permission ID: permissionId must be a number, got object`);
      }
      const numId = typeof permissionId === 'number' ? permissionId : Number(permissionId);
      if (isNaN(numId) || numId <= 0) {
        throw new Error(`Invalid permission ID: ${permissionId} (must be a positive number)`);
      }
      // Return object with permissionid property (backend expects this format)
      return {
        permissionid: numId
      };
    });
    this.userroleservice.saveRolePermissions(roleId, permissionsToSave).subscribe({
      next: () => {
        alert('Permissions saved successfully!');
        this.closePermissionConfig();
        this.permissionService.clearCache();
      },
      error: err => {
        const errorMessage = err.error?.message || err.error || err.message || 'Unknown error';
        alert(`Error saving permissions: ${errorMessage}`);
      }
    });
  }
  closePermissionConfig() {
    this.isPermissionConfigOpen = false;
    this.selectedRoleId = 0;
    this.selectedRoleName = '';
    this.rolePermissions = [];
  }
  // Helper method to check if configure button should be visible
  canConfigurePermissions() {
    return this.permissionService.isSuperAdmin();
  }
  debugButtonVisibility() {}
  canShowConfigureButton() {
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const hasPermissionSettingsAccess = this.permissionService.hasPermissionCode('permission:settings:access');
    const hasConfigurePermission = this.permissionService.hasPermission('userrole', 'configure');
    return isSuperAdmin || hasPermissionSettingsAccess || hasConfigurePermission;
  }
  selectAllPermissions(resource) {
    const resourcePermissions = this.permissionTemplates[resource] || [];
    resourcePermissions.forEach(permission => {
      if (!this.hasPermission(permission)) {
        this.rolePermissions.push({
          ...permission
        });
      }
    });
  }
  deselectAllPermissions(resource) {
    const resourcePermissions = this.permissionTemplates[resource] || [];
    this.rolePermissions = this.rolePermissions.filter(p => !resourcePermissions.some(rp => rp.resource === p.resource && rp.action === p.action));
  }
  deleteItem(item) {
    if (confirm(`Are you sure you want to delete ${item.userrolename || item.companyname}?`)) {
      this.userroleservice.deleteUserrole(item.userroleid).subscribe({
        next: () => this.getUserroleDetails(),
        error: () => {}
      });
    }
  }
  onExporting(e) {
    const workbook = new exceljs__WEBPACK_IMPORTED_MODULE_2__.Workbook();
    const worksheet = workbook.addWorksheet('Userrole Data');
    (0,devextreme_excel_exporter__WEBPACK_IMPORTED_MODULE_1__.exportDataGrid)({
      component: e.component,
      worksheet: worksheet,
      autoFilterEnabled: true
    }).then(() => {
      workbook.xlsx.writeBuffer().then(buffer => {
        const blob = new Blob([buffer], {
          type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        });
        (0,file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs)(blob, "UserroleData.xlsx");
      });
    });
    e.cancel = true; // Prevents default export
  }

  toggleForm() {
    this.isFormOpen = true;
    this.isEditMode = false;
    this.restuserroleForm();
  }
  restuserroleForm() {
    this.isFormOpen = false;
    this.isEditMode = false;
    this.userroleForm.reset();
    this.userroleForm.patchValue({
      userrolename: '',
      createdby: 1,
      updatedby: 1,
      userroleisactive: 'true',
      createddate: new Date(),
      updateddate: new Date(),
      userroleid: 0,
      accountid: this.authService.getAccountId() ?? 1,
      instanceid: this.authService.getInstanceId() ?? 1
    });
  }
  getDropDownValues() {
    this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiUrl}/userrole/list`).subscribe(data => {
      this.dropdownItems = data;
    });
  }
  static {
    this.ɵfac = function UserroleComponent_Factory(t) {
      return new (t || UserroleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_userrole_service__WEBPACK_IMPORTED_MODULE_4__.UserroleService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_permission_service__WEBPACK_IMPORTED_MODULE_5__.PermissionService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_6__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
      type: UserroleComponent,
      selectors: [["app-userrole"]],
      viewQuery: function UserroleComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        }
        if (rf & 2) {
          let _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.formSection = _t.first);
        }
      },
      decls: 67,
      vars: 48,
      consts: [[1, "form-container"], [2, "font-size", "larger"], [1, "close-btn", 3, "click"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-field"], [2, "color", "black"], ["matInput", "", "placeholder", "Enter Role Name", "formControlName", "userrolename", 1, "mat-input-element", "custom-placeholder"], [4, "ngIf"], ["matNativeControl", "", "formControlName", "userroleisactive"], ["value", "", "disabled", ""], ["value", "true"], ["value", "false"], [1, "form-submit"], ["mat-raised-button", "", "type", "submit", 1, "btn-primary", 3, "click"], [1, "example-card"], [1, "pos-relative"], [1, "btn-pos-list"], ["class", "add-btn", 3, "click", 4, "appHasPermission"], ["title", "User Role", 3, "dataSource", "allowColumnReordering", "allowColumnResizing", "showBorders", "headerFilter", "searchPanel", "paging", "onExporting"], ["dataField", "userroleid", "caption", "Userrole ID", 3, "allowSorting", "sortOrder", "width"], ["dataField", "userrolename", "caption", "Userrole Name", 3, "width"], ["dataField", "createddate", "caption", "Created Date", "dataType", "date", 3, "format", "width"], ["dataField", "updateddate", "caption", "Updated Date", "dataType", "date", 3, "format", "width"], ["dataField", "userroleisactive", "caption", "Active", 3, "width"], ["caption", "Action", "alignment", "center", "cellTemplate", "actionTemplate", 3, "visible", "width"], ["style", "display: flex; gap: 10px; justify-content: center;", 4, "dxTemplate", "dxTemplateOf"], [3, "enabled", "allowExportSelectedData"], [1, "permission-config-panel"], [1, "permission-config-content"], [1, "permission-header"], [1, "permission-body"], ["style", "padding: 20px; text-align: center; color: #666;", 4, "ngIf"], ["class", "permission-resource-group", 4, "ngFor", "ngForOf"], ["style", "margin-top: 20px; padding: 10px; background: #f5f5f5; border-radius: 4px;", 4, "ngIf"], [1, "permission-footer"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-button", "", 3, "click"], [1, "add-btn", 3, "click"], [2, "display", "flex", "gap", "10px", "justify-content", "center"], ["style", "cursor: pointer;", 3, "click", 4, "appHasPermission"], ["style", "cursor: pointer;", "title", "Configure Permissions (Super Admin Only)", 3, "click", 4, "ngIf"], [2, "cursor", "pointer", 3, "click"], ["title", "Edit Role", 1, "material-symbols-outlined", "action-icon", "edit-icon"], ["title", "Configure Permissions (Super Admin Only)", 2, "cursor", "pointer", 3, "click"], [1, "material-symbols-outlined", "action-icon", 2, "color", "#2196F3"], ["title", "Delete", 1, "material-symbols-outlined", "action-icon", "delete-icon"], [2, "padding", "20px", "text-align", "center", "color", "#666"], [1, "permission-resource-group"], [1, "resource-header"], [2, "text-transform", "capitalize", "margin", "10px 0"], ["mat-button", "", 2, "margin-right", "10px", "font-size", "12px", 3, "click"], ["mat-button", "", 2, "font-size", "12px", 3, "click"], [1, "permission-list"], ["class", "permission-item", 3, "selected", 4, "ngFor", "ngForOf"], [1, "permission-item"], ["type", "checkbox", 3, "checked", "change"], [2, "margin-top", "20px", "padding", "10px", "background", "#f5f5f5", "border-radius", "4px"]],
      template: function UserroleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "section")(1, "div", 0)(2, "p", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_Template_button_click_4_listener() {
            return ctx.restuserroleForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "form", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function UserroleComponent_Template_form_ngSubmit_6_listener() {
            return ctx.onSubmit();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "mat-form-field", 4)(8, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9, "User Role Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](10, "input", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, UserroleComponent_mat_error_11_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "mat-form-field", 4)(13, "mat-label", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "select", 8)(16, "option", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](17, "Select");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "option", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Active");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "option", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Inactive");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](22, UserroleComponent_mat_error_22_Template, 2, 0, "mat-error", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 12)(24, "button", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_Template_button_click_24_listener() {
            return ctx.createUserrole();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 14)(27, "mat-card")(28, "mat-card-header")(29, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "mat-card")(32, "mat-card-header")(33, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](34);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "mat-card")(36, "mat-card-header")(37, "mat-card-title");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](38);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 15)(40, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](41, UserroleComponent_button_41_Template, 3, 0, "button", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "dx-data-grid", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("onExporting", function UserroleComponent_Template_dx_data_grid_onExporting_42_listener($event) {
            return ctx.onExporting($event);
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](43, "dxi-column", 19)(44, "dxi-column", 20)(45, "dxi-column", 21)(46, "dxi-column", 22)(47, "dxi-column", 23)(48, "dxi-column", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](49, UserroleComponent_div_49_Template, 4, 3, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](50, "dxo-export", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](51, "div", 27)(52, "div", 28)(53, "div", 29)(54, "h3");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](55);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](56, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_Template_button_click_56_listener() {
            return ctx.closePermissionConfig();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](57, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "div", 30);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](59, UserroleComponent_div_59_Template, 3, 0, "div", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, UserroleComponent_div_60_Template, 11, 2, "div", 32);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, UserroleComponent_div_61_Template, 3, 1, "div", 33);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 34)(63, "button", 35);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_Template_button_click_63_listener() {
            return ctx.saveRolePermissions();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](64, "Save Permissions");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](65, "button", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function UserroleComponent_Template_button_click_65_listener() {
            return ctx.closePermissionConfig();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](66, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          let tmp_3_0;
          let tmp_4_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("open", ctx.isFormOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx.isEditMode ? "Edit User Role" : "Add User Role");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.userroleForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx.userroleForm.get("userrolename")) == null ? null : tmp_3_0.hasError("required")) && ((tmp_3_0 = ctx.userroleForm.get("userrolename")) == null ? null : tmp_3_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx.userroleForm.get("userroleisactive")) == null ? null : tmp_4_0.hasError("required")) && ((tmp_4_0 = ctx.userroleForm.get("userroleisactive")) == null ? null : tmp_4_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.isEditMode ? "Update" : "Submit", " ");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Userrole\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.totalUserrole, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.activeUserrole, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("In-Active\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0", ctx.deactiveUserrole, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("appHasPermission", "userrole:create");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dataSource", ctx.apiData)("allowColumnReordering", true)("allowColumnResizing", true)("showBorders", true)("headerFilter", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](45, _c1))("searchPanel", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](46, _c2))("paging", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](47, _c3))("showBorders", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("allowSorting", true)("sortOrder", "asc")("width", 130);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("format", "dd/MM/yyyy")("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("format", "dd/MM/yyyy")("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", 200);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("visible", true)("width", 250);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("dxTemplateOf", "actionTemplate");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("enabled", true)("allowExportSelectedData", true);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵstyleProp"]("display", ctx.isPermissionConfigOpen ? "block" : "none")("right", ctx.isPermissionConfigOpen ? "0" : "-100%")("z-index", ctx.isPermissionConfigOpen ? "10000" : "auto");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("open", ctx.isPermissionConfigOpen);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"]("Configure Permissions - ", ctx.selectedRoleName, "");
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.permissionResourceKeys.length === 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.permissionResourceKeys);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.rolePermissions.length > 0);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatLabel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__.MatError, _angular_material_input__WEBPACK_IMPORTED_MODULE_12__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_13__.MatButton, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, devextreme_angular__WEBPACK_IMPORTED_MODULE_17__.DxDataGridComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxiColumnComponent, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_18__.DxoExportComponent, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_19__.DxTemplateDirective, _directives_has_permission_directive__WEBPACK_IMPORTED_MODULE_7__.HasPermissionDirective],
      styles: [".form-container[_ngcontent-%COMP%] {          \n\n  max-width: 100%;\n  margin: 15px auto;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(243, 243, 243, 0.1);\n  background-color: #ffff;\n  margin-top: 1% !important;\n  height: 400px !important;\nwidth: 1237px !important;\n}\n\n\n.form-submit[_ngcontent-%COMP%]{\n  margin-top: 50px;\n  text-align: center;\n}\n.mat-icon[_ngcontent-%COMP%]{\n  color: black;\n  height: 10px;\n}\n\nhtml[_ngcontent-%COMP%], body[_ngcontent-%COMP%] {\n    height: 100%;\n}\n\n.btn-pos-list[_ngcontent-%COMP%]{\n  position: absolute;\n  top: 0px;\n  right: 355px;\n  width: 40px;\n  z-index: 1;\n}\n\n.edit-btn[_ngcontent-%COMP%]{\n  font-size: 18px;\n  color:#337ab7;\n}\n  .dx-datagrid .dx-row > td {\n vertical-align: middle !important;\n}\n.close-btn[_ngcontent-%COMP%] {\n  background: transparent;\n  box-shadow: none;\n  border: none;\n  font-size: 30px;\n  color: black;\n  font-weight: 700px;\n  margin-left: 1134px;\n  margin-top: -14px;\n}\n\n\n\n\n\n\n\n\n  app-account {\n  --mdc-outlined-text-field-focus-outline-color: #f7f5f5  !important;\n  --mdc-outlined-text-field-outline-color: #f7f5f5  !important;\n}\n\n\n\n  app-account .mat-form-field-appearance-outline .mat-form-field-outline,   app-account .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline {\n  color: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline-thick {\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline {\n  color: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick {\n  border-color: #f7f5f5 !important;\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline-start,   .form-container .mat-form-field-appearance-outline .mat-form-field-outline-gap,   .form-container .mat-form-field-appearance-outline .mat-form-field-outline-end {\n  border-color: #f7f5f5 !important;\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-start,   .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-gap,   .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-end {\n  border-color: #f7f5f5 !important;\n  color: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline-thick svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick svg {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline .mat-form-field-outline svg path {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline svg path {\n  fill: #f7f5f5 !important;\n  stroke: #f7f5f5 !important;\n}\n\n\n\n  .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick {\n  color: #f44336 !important;\n  border-color: #f44336 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline {\n  color: #f44336 !important;\n}\n\n  .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline svg,   .form-container .mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick svg {\n  fill: #f44336 !important;\n  stroke: #f44336 !important;\n}\n\n\n\n.permission-config-panel[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: -100%;\n  width: 500px;\n  height: 100vh;\n  background: white;\n  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);\n  z-index: 10000;\n  transition: right 0.3s ease-in-out;\n  overflow-y: auto;\n}\n\n.permission-config-panel.open[_ngcontent-%COMP%] {\n  right: 0 !important;\n}\n\n.permission-config-content[_ngcontent-%COMP%] {\n  padding: 20px;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.permission-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n  padding-bottom: 15px;\n  border-bottom: 2px solid #e0e0e0;\n}\n\n.permission-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n}\n\n.permission-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  margin-bottom: 20px;\n}\n\n.permission-resource-group[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n}\n\n.resource-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n}\n\n.resource-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #2196F3;\n  font-weight: 600;\n}\n\n.permission-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.permission-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: background-color 0.2s;\n}\n\n.permission-item[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n}\n\n.permission-item.selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-color: #2196F3;\n}\n\n.permission-item[_ngcontent-%COMP%]   input[type=\"checkbox\"][_ngcontent-%COMP%] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n\n.permission-footer[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  padding-top: 15px;\n  border-top: 2px solid #e0e0e0;\n}\n\n.permission-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvdXNlcnJvbGUvdXNlcnJvbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsMkJBQTJCLHlDQUF5QztFQUNsRSxlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsOENBQThDO0VBQzlDLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsd0JBQXdCO0FBQzFCLHdCQUF3QjtBQUN4Qjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFlBQVk7RUFDWixXQUFXO0VBQ1gsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUNBO0NBQ0MsaUNBQWlDO0FBQ2xDO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBLHdFQUF3RTtBQUN4RSx1RUFBdUU7O0FBRXZFLDBDQUEwQztBQUMxQztFQUNFLGtFQUFrRTtFQUNsRSw0REFBNEQ7QUFDOUQ7O0FBRUEsOERBQThEO0FBQzlEOztFQUVFLHlCQUF5QjtBQUMzQjs7QUFFQSxpREFBaUQ7QUFDakQ7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUEsbUNBQW1DO0FBQ25DO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBLHVEQUF1RDtBQUN2RDtFQUNFLGdDQUFnQztFQUNoQyx5QkFBeUI7QUFDM0I7O0FBRUEsMkJBQTJCO0FBQzNCOzs7RUFHRSxnQ0FBZ0M7RUFDaEMseUJBQXlCO0FBQzNCOztBQUVBLGlCQUFpQjtBQUNqQjs7O0VBR0UsZ0NBQWdDO0VBQ2hDLHlCQUF5QjtBQUMzQjs7QUFFQSxxRUFBcUU7QUFDckU7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBLHdDQUF3QztBQUN4QztFQUNFLHdCQUF3QjtFQUN4QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIsMEJBQTBCO0FBQzVCOztBQUVBLGtEQUFrRDtBQUNsRDtFQUNFLHlCQUF5QjtFQUN6QixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7O0VBRUUsd0JBQXdCO0VBQ3hCLDBCQUEwQjtBQUM1Qjs7QUFFQSwwQ0FBMEM7QUFDMUM7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLFNBQVM7RUFDVCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGlCQUFpQjtFQUNqQiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxPQUFPO0FBQ1QiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5mb3JtLWNvbnRhaW5lciB7ICAgICAgICAgIC8qRm9ybSBDb250YWluZXIgd2l0aCBmb3JtIGZpZWxkcyBpbnNpZGUqL1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMTVweCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCByZ2JhKDI0MywgMjQzLCAyNDMsIDAuMSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xuICBtYXJnaW4tdG9wOiAxJSAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwMHB4ICFpbXBvcnRhbnQ7XG53aWR0aDogMTIzN3B4ICFpbXBvcnRhbnQ7XG59XG5cblxuLmZvcm0tc3VibWl0e1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWF0LWljb257XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiAxMHB4O1xufVxuXG5odG1sLFxuYm9keSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uYnRuLXBvcy1saXN0e1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICByaWdodDogMzU1cHg7XG4gIHdpZHRoOiA0MHB4O1xuICB6LWluZGV4OiAxO1xufVxuXG4uZWRpdC1idG57XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IzMzN2FiNztcbn1cbjo6bmctZGVlcCAuZHgtZGF0YWdyaWQgLmR4LXJvdyA+IHRkIHtcbiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlICFpbXBvcnRhbnQ7XG59XG4uY2xvc2UtYnRuIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtd2VpZ2h0OiA3MDBweDtcbiAgbWFyZ2luLWxlZnQ6IDExMzRweDtcbiAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbi8qIENoYW5nZSBmb3JtIGZpZWxkIGZvY3VzL3NlbGVjdGVkIGJvcmRlciBjb2xvciBmcm9tIHJlZCB0byBkYXJrIGdyZXkgKi9cbi8qIE92ZXJyaWRlIE1hdGVyaWFsJ3MgZGVmYXVsdCBhY2NlbnQgY29sb3IgKHJlZC9waW5rKSB3aXRoIGRhcmsgZ3JleSAqL1xuXG4vKiBPdmVycmlkZSBNYXRlcmlhbCB0aGVtZSBDU1MgdmFyaWFibGVzICovXG46Om5nLWRlZXAgYXBwLWFjY291bnQge1xuICAtLW1kYy1vdXRsaW5lZC10ZXh0LWZpZWxkLWZvY3VzLW91dGxpbmUtY29sb3I6ICNmN2Y1ZjUgICFpbXBvcnRhbnQ7XG4gIC0tbWRjLW91dGxpbmVkLXRleHQtZmllbGQtb3V0bGluZS1jb2xvcjogI2Y3ZjVmNSAgIWltcG9ydGFudDtcbn1cblxuLyogR2xvYmFsIG92ZXJyaWRlIGZvciBhbGwgZm9ybSBmaWVsZHMgLSBoaWdoZXN0IHNwZWNpZmljaXR5ICovXG46Om5nLWRlZXAgYXBwLWFjY291bnQgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSxcbjo6bmctZGVlcCBhcHAtYWNjb3VudCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuLyogRm9yIGFsbCBmb3JtIGZpZWxkcyBpbiB0aGUgYWNjb3VudCBjb21wb25lbnQgKi9cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFdoZW4gZmllbGQgaXMgZm9jdXNlZC9zZWxlY3RlZCAqL1xuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcbiAgY29sb3I6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHtcbiAgY29sb3I6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuLyogT3ZlcnJpZGUgTWF0ZXJpYWwncyBhY2NlbnQgY29sb3IgZm9yIGZvY3VzZWQgc3RhdGUgKi9cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGJvcmRlci1jb2xvcjogI2Y3ZjVmNSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG4vKiBGb3IgYWxsIG91dGxpbmUgc3RhdGVzICovXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQsXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwLFxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XG4gIGJvcmRlci1jb2xvcjogI2Y3ZjVmNSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG4vKiBXaGVuIGZvY3VzZWQgKi9cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCxcbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAsXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcbiAgYm9yZGVyLWNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFRhcmdldCBTVkcgZWxlbWVudHMgZm9yIG91dGxpbmUgKE1hdGVyaWFsIHVzZXMgU1ZHIGZvciBvdXRsaW5lcykgKi9cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSBzdmcge1xuICBmaWxsOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIHN0cm9rZTogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUgc3ZnIHtcbiAgZmlsbDogI2Y3ZjVmNSAhaW1wb3J0YW50O1xuICBzdHJva2U6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHN2ZyB7XG4gIGZpbGw6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbiAgc3Ryb2tlOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayBzdmcge1xuICBmaWxsOiAjZjdmNWY1ICFpbXBvcnRhbnQ7XG4gIHN0cm9rZTogI2Y3ZjVmNSAhaW1wb3J0YW50O1xufVxuXG4vKiBUYXJnZXQgdGhlIHBhdGggZWxlbWVudHMgaW5zaWRlIFNWRyAqL1xuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHN2ZyBwYXRoIHtcbiAgZmlsbDogI2Y3ZjVmNSAhaW1wb3J0YW50O1xuICBzdHJva2U6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5mb3JtLWNvbnRhaW5lciAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHN2ZyBwYXRoIHtcbiAgZmlsbDogI2Y3ZjVmNSAhaW1wb3J0YW50O1xuICBzdHJva2U6ICNmN2Y1ZjUgIWltcG9ydGFudDtcbn1cblxuLyogS2VlcCBlcnJvciBzdGF0ZXMgcmVkIGZvciB2YWxpZGF0aW9uIGZlZWRiYWNrICovXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS10aGljayB7XG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogI2Y0NDMzNiAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLmZvcm0tY29udGFpbmVyIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XG4gIGNvbG9yOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHN2Zyxcbjo6bmctZGVlcCAuZm9ybS1jb250YWluZXIgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZS5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXRoaWNrIHN2ZyB7XG4gIGZpbGw6ICNmNDQzMzYgIWltcG9ydGFudDtcbiAgc3Ryb2tlOiAjZjQ0MzM2ICFpbXBvcnRhbnQ7XG59XG5cbi8qIFBlcm1pc3Npb24gQ29uZmlndXJhdGlvbiBQYW5lbCBTdHlsZXMgKi9cbi5wZXJtaXNzaW9uLWNvbmZpZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogLTEwMCU7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJveC1zaGFkb3c6IC0ycHggMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgei1pbmRleDogMTAwMDA7XG4gIHRyYW5zaXRpb246IHJpZ2h0IDAuM3MgZWFzZS1pbi1vdXQ7XG4gIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5wZXJtaXNzaW9uLWNvbmZpZy1wYW5lbC5vcGVuIHtcbiAgcmlnaHQ6IDAgIWltcG9ydGFudDtcbn1cblxuLnBlcm1pc3Npb24tY29uZmlnLWNvbnRlbnQge1xuICBwYWRkaW5nOiAyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wZXJtaXNzaW9uLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZTBlMGUwO1xufVxuXG4ucGVybWlzc2lvbi1oZWFkZXIgaDMge1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4ucGVybWlzc2lvbi1ib2R5IHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnBlcm1pc3Npb24tcmVzb3VyY2UtZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuXG4ucmVzb3VyY2UtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucmVzb3VyY2UtaGVhZGVyIGg0IHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzIxOTZGMztcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnBlcm1pc3Npb24tbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogOHB4O1xufVxuXG4ucGVybWlzc2lvbi1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDEycHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMGUwZTA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XG59XG5cbi5wZXJtaXNzaW9uLWl0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ucGVybWlzc2lvbi1pdGVtLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgYm9yZGVyLWNvbG9yOiAjMjE5NkYzO1xufVxuXG4ucGVybWlzc2lvbi1pdGVtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucGVybWlzc2lvbi1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgI2UwZTBlMDtcbn1cblxuLnBlcm1pc3Npb24tZm9vdGVyIGJ1dHRvbiB7XG4gIGZsZXg6IDE7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}

/***/ }),

/***/ 11350:
/*!***************************************************!*\
  !*** ./src/app/pages/userrole/userrole.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserroleModule: () => (/* binding */ UserroleModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _userrole_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userrole-routing.module */ 34503);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _userrole_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./userrole.component */ 79367);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ 22866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);











class UserroleModule {
  static {
    this.ɵfac = function UserroleModule_Factory(t) {
      return new (t || UserroleModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
      type: UserroleModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
      providers: [_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService],
      imports: [_userrole_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserroleRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UserroleModule, {
    declarations: [_userrole_component__WEBPACK_IMPORTED_MODULE_3__.UserroleComponent],
    imports: [_userrole_routing_module__WEBPACK_IMPORTED_MODULE_0__.UserroleRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_7__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_10__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_11__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_userrole_userrole_module_ts.js.map