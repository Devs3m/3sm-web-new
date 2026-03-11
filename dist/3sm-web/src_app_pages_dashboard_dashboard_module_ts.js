"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["src_app_pages_dashboard_dashboard_module_ts"],{

/***/ 29615:
/*!*************************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardRoutingModule: () => (/* binding */ DashboardRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard.component */ 95199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _dashboard_component__WEBPACK_IMPORTED_MODULE_0__.DashboardComponent
}];
class DashboardRoutingModule {
  static {
    this.ɵfac = function DashboardRoutingModule_Factory(t) {
      return new (t || DashboardRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: DashboardRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DashboardRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 95199:
/*!********************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardComponent: () => (/* binding */ DashboardComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 61873);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 72354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! highcharts */ 77859);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/account.service */ 94491);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/customer.service */ 41068);
/* harmony import */ var _service_sales_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/sales.service */ 14188);
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/auth.service */ 9822);
/* harmony import */ var _service_permission_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/permission.service */ 69227);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 60316);














function DashboardComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "mat-progress-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Loading dashboard...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
}
function DashboardComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "business");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 15)(6, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 18)(11, "div", 14)(12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "dns");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 15)(15, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Instances");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 19)(20, "div", 14)(21, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](22, "people");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "div", 15)(24, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](25, "Customers");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "div", 20)(29, "div", 14)(30, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "receipt_long");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "div", 15)(33, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](34, "Sales (Invoices)");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](35, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](37, "div", 21)(38, "div", 14)(39, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](40, "currency_rupee");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](41, "div", 15)(42, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](43, "Total Sales Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](44, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](46, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.accountCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.instanceCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.customerCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r1.salesCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("\u20B9", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](46, 5, ctx_r1.salesValue, "1.2-2"), "");
  }
}
function DashboardComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "highcharts-chart", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("Highcharts", ctx_r2.Highcharts)("options", ctx_r2.chartOptions)("update", ctx_r2.updateFlag);
  }
}
function DashboardComponent_div_13_ng_container_7_li_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" \u2014 ", p_r7.name, "");
  }
}
function DashboardComponent_div_13_ng_container_7_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "li", 34)(1, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, DashboardComponent_div_13_ng_container_7_li_5_span_3_Template, 2, 1, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const p_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](p_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", p_r7.name && p_r7.name !== p_r7.key);
  }
}
function DashboardComponent_div_13_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30)(2, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "ul", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, DashboardComponent_div_13_ng_container_7_li_5_Template, 4, 2, "li", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const module_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](module_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r4.permissionsByModule[module_r5]);
  }
}
function DashboardComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "lock");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "h3", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, DashboardComponent_div_13_ng_container_7_Template, 6, 2, "ng-container", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"]("Your permissions (", ctx_r3.currentRoleName, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.permissionModuleKeys);
  }
}
class DashboardComponent {
  /** Current user's role name (e.g. Administrator). */
  get currentRoleName() {
    return this.permissionService.getCurrentUserRole()?.roleName || 'User';
  }
  /** Permissions grouped by module for the current user (e.g. Administrator view). */
  get permissionsByModule() {
    return this.permissionService.getByModule();
  }
  /** Ordered list of module names for display. */
  get permissionModuleKeys() {
    return Object.keys(this.permissionsByModule).sort();
  }
  // Last 3 months labels
  get last3Months() {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const now = new Date();
    return [2, 1, 0].map(offset => {
      const d = new Date(now.getFullYear(), now.getMonth() - offset, 1);
      return `${months[d.getMonth()]} ${d.getFullYear()}`;
    });
  }
  constructor(accountService, instanceService, customerService, salesService, authService, permissionService) {
    this.accountService = accountService;
    this.instanceService = instanceService;
    this.customerService = customerService;
    this.salesService = salesService;
    this.authService = authService;
    this.permissionService = permissionService;
    // Stat card values
    this.accountCount = 0;
    this.instanceCount = 0;
    this.customerCount = 0;
    this.salesCount = 0;
    this.salesValue = 0;
    this.isLoading = true;
    // Highcharts
    this.Highcharts = highcharts__WEBPACK_IMPORTED_MODULE_0__;
    this.chartOptions = {};
    this.updateFlag = false;
  }
  ngOnInit() {
    this.loadDashboardData();
  }
  safe(obs, fallback) {
    return obs.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.timeout)(6000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_10__.of)(fallback)));
  }
  /** Filter items by logged-in user's account id (for administrator scoped to his account). */
  byAccountId(list, accountId) {
    if (!Array.isArray(list) || accountId == null) return list || [];
    return list.filter(item => {
      const id = item.accountid ?? item.accountId ?? item.account_id;
      return id != null && Number(id) === Number(accountId);
    });
  }
  /** Filter items by logged-in user's account id and instance id (sales/customers scoped to account+instance). */
  byAccountAndInstance(list, accountId, instanceId) {
    if (!Array.isArray(list) || accountId == null || instanceId == null) return list || [];
    return list.filter(item => {
      const accId = item.accountid ?? item.accountId ?? item.account_id;
      const instId = item.instanceid ?? item.instanceId ?? item.instance_id;
      return accId != null && Number(accId) === Number(accountId) && instId != null && Number(instId) === Number(instanceId);
    });
  }
  /** Normalize API response to array (handles { list: [] }, { data: [] }, or direct array). */
  toArray(data) {
    if (data == null) return [];
    if (Array.isArray(data)) return data;
    const list = data.list ?? data.data ?? data.records;
    return Array.isArray(list) ? list : [];
  }
  loadDashboardData() {
    this.isLoading = true;
    const isSuperAdmin = this.permissionService.isSuperAdmin();
    const accountId = isSuperAdmin ? null : this.authService.getAccountId();
    const instanceId = isSuperAdmin ? null : this.authService.getInstanceId();
    const salesRequest = accountId != null ? this.safe(this.salesService.getSalesSummaryList(accountId, instanceId ?? undefined), []) : this.safe(this.salesService.getSalesSummaryList(), []);
    (0,rxjs__WEBPACK_IMPORTED_MODULE_11__.forkJoin)({
      accounts: this.safe(this.accountService.getAccountDetails(), []),
      instances: this.safe(this.instanceService.getInstanceDetails(), []),
      customers: this.safe(this.customerService.getCustomerList(), []),
      salesList: salesRequest
    }).subscribe(({
      accounts,
      instances,
      customers,
      salesList
    }) => {
      const accountList = Array.isArray(accounts) ? accountId != null ? this.byAccountId(accounts, accountId) : accounts : [];
      const instanceList = Array.isArray(instances) ? accountId != null ? this.byAccountId(instances, accountId) : instances : [];
      const customerList = Array.isArray(customers) ? accountId != null && instanceId != null ? this.byAccountAndInstance(customers, accountId, instanceId) : accountId != null ? this.byAccountId(customers, accountId) : customers : [];
      const salesRaw = this.toArray(salesList);
      let salesFiltered;
      if (accountId == null) {
        salesFiltered = salesRaw;
      } else if (instanceId != null) {
        salesFiltered = this.byAccountAndInstance(salesRaw, accountId, instanceId);
        if (salesFiltered.length === 0 && salesRaw.length > 0) {
          salesFiltered = this.byAccountId(salesRaw, accountId);
        }
      } else {
        salesFiltered = this.byAccountId(salesRaw, accountId);
      }
      this.accountCount = accountList.length;
      this.instanceCount = instanceList.length;
      this.customerCount = customerList.length;
      this.salesCount = salesFiltered.length;
      this.salesValue = salesFiltered.reduce((sum, item) => {
        const val = parseFloat(item.grandtotal ?? item.grandTotal ?? 0);
        return sum + (isNaN(val) ? 0 : val);
      }, 0);
      this.buildChart(salesFiltered);
      this.isLoading = false;
    });
  }
  buildChart(salesList) {
    const months = this.last3Months;
    const now = new Date();
    // Build per-month buckets for last 3 months
    const buckets = months.map(() => ({
      count: 0,
      value: 0
    }));
    salesList.forEach(item => {
      const raw = item.invdate ?? item.saledate ?? item.createddate ?? item.updateddate;
      if (!raw) return;
      const d = new Date(raw);
      if (isNaN(d.getTime())) return;
      for (let i = 0; i < 3; i++) {
        const offset = 2 - i;
        const target = new Date(now.getFullYear(), now.getMonth() - offset, 1);
        if (d.getFullYear() === target.getFullYear() && d.getMonth() === target.getMonth()) {
          buckets[i].count++;
          buckets[i].value += parseFloat(item.grandtotal ?? item.grandTotal ?? 0) || 0;
        }
      }
    });
    this.chartOptions = {
      chart: {
        type: 'column',
        backgroundColor: '#ffffff',
        borderRadius: 12,
        style: {
          fontFamily: 'inherit'
        }
      },
      title: {
        text: 'Sales — Last 3 Months',
        style: {
          fontSize: '15px',
          fontWeight: '600',
          color: '#1a5276'
        }
      },
      xAxis: {
        categories: months,
        crosshair: true,
        labels: {
          style: {
            color: '#555',
            fontSize: '12px'
          }
        }
      },
      yAxis: [{
        title: {
          text: 'No. of Invoices',
          style: {
            color: '#337ab7'
          }
        },
        labels: {
          style: {
            color: '#337ab7'
          }
        },
        min: 0
      }, {
        title: {
          text: 'Sales Value (₹)',
          style: {
            color: '#27ae60'
          }
        },
        labels: {
          style: {
            color: '#27ae60'
          },
          formatter: function () {
            return '₹' + this.value.toLocaleString('en-IN');
          }
        },
        opposite: true,
        min: 0
      }],
      tooltip: {
        shared: true,
        formatter: function () {
          let s = `<b>${this.x}</b><br/>`;
          (this.points || []).forEach(p => {
            s += `${p.series.name}: <b>${p.series.name.includes('Value') ? '₹' + p.y.toLocaleString('en-IN') : p.y}</b><br/>`;
          });
          return s;
        }
      },
      legend: {
        enabled: true
      },
      credits: {
        enabled: false
      },
      series: [{
        type: 'column',
        name: 'Invoices',
        data: buckets.map(b => b.count),
        color: '#337ab7',
        yAxis: 0,
        borderRadius: 4
      }, {
        type: 'spline',
        name: 'Sales Value (₹)',
        data: buckets.map(b => Math.round(b.value * 100) / 100),
        color: '#27ae60',
        yAxis: 1,
        marker: {
          enabled: true,
          radius: 5
        },
        lineWidth: 2
      }]
    };
    this.updateFlag = true;
  }
  static {
    this.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_account_service__WEBPACK_IMPORTED_MODULE_1__.AccountService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_instance_service__WEBPACK_IMPORTED_MODULE_2__.InstanceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_customer_service__WEBPACK_IMPORTED_MODULE_3__.CustomerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_sales_service__WEBPACK_IMPORTED_MODULE_4__.SalesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_auth_service__WEBPACK_IMPORTED_MODULE_5__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_service_permission_service__WEBPACK_IMPORTED_MODULE_6__.PermissionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 14,
      vars: 4,
      consts: [[1, "dashboard-container"], [1, "dashboard-header"], [1, "dashboard-title-group"], [1, "dashboard-icon"], [1, "dashboard-title"], ["title", "Refresh", 1, "refresh-btn", 3, "click"], ["class", "loading-overlay", 4, "ngIf"], ["class", "stat-cards", 4, "ngIf"], ["class", "chart-card", 4, "ngIf"], ["class", "permissions-card chart-card", 4, "ngIf"], [1, "loading-overlay"], ["mode", "indeterminate", "diameter", "48", "color", "primary"], [1, "stat-cards"], [1, "stat-card", "accounts"], [1, "stat-icon-wrap"], [1, "stat-body"], [1, "stat-label"], [1, "stat-value"], [1, "stat-card", "instances"], [1, "stat-card", "customers"], [1, "stat-card", "sales-count"], [1, "stat-card", "sales-value"], [1, "chart-card"], [2, "width", "100%", "height", "360px", "display", "block", 3, "Highcharts", "options", "update"], [1, "permissions-card", "chart-card"], [1, "permissions-header"], [1, "permissions-icon"], [1, "permissions-title"], [1, "permissions-list"], [4, "ngFor", "ngForOf"], [1, "permissions-module"], [1, "permissions-module-name"], [1, "permissions-items"], ["class", "permissions-item", 4, "ngFor", "ngForOf"], [1, "permissions-item"], [1, "permissions-key"], ["class", "permissions-name", 4, "ngIf"], [1, "permissions-name"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "h2", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6, "Dashboard");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "button", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DashboardComponent_Template_button_click_7_listener() {
            return ctx.loadDashboardData();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "refresh");
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](10, DashboardComponent_div_10_Template, 4, 0, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, DashboardComponent_div_11_Template, 47, 8, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, DashboardComponent_div_12_Template, 2, 3, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, DashboardComponent_div_13_Template, 8, 2, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](10);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isLoading && ctx.permissionModuleKeys.length > 0);
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__.MatProgressSpinner, highcharts_angular__WEBPACK_IMPORTED_MODULE_14__.HighchartsChartComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DecimalPipe],
      styles: [".dashboard-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  background: #f4f6fb;\n  min-height: calc(100vh - 64px);\n  box-sizing: border-box;\n}\n\n\n\n.permissions-card[_ngcontent-%COMP%] {\n  margin-top: 24px;\n}\n.permissions-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 12px;\n}\n.permissions-icon[_ngcontent-%COMP%] {\n  color: #5a6c7d;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.permissions-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1a5276;\n}\n.permissions-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px 24px;\n}\n.permissions-module[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.permissions-module-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  color: #2c3e50;\n  margin-bottom: 6px;\n  font-size: 13px;\n}\n.permissions-items[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 18px;\n  list-style: disc;\n}\n.permissions-item[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #444;\n  margin-bottom: 2px;\n}\n.permissions-key[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #1a5276;\n}\n.permissions-name[_ngcontent-%COMP%] {\n  color: #666;\n}\n\n\n\n.dashboard-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 24px;\n}\n\n.dashboard-title-group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.dashboard-icon[_ngcontent-%COMP%] {\n  color: #337ab7;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n\n.dashboard-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a5276;\n}\n\n.refresh-btn[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #d0d8e8;\n  border-radius: 8px;\n  padding: 6px 10px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #337ab7;\n  transition: background 0.2s, box-shadow 0.2s;\n}\n\n.refresh-btn[_ngcontent-%COMP%]:hover {\n  background: #eaf2fb;\n  box-shadow: 0 2px 6px rgba(51,122,183,0.15);\n}\n\n\n\n.loading-overlay[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 80px 0;\n  gap: 16px;\n  color: #888;\n  font-size: 14px;\n}\n\n\n\n.stat-cards[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  margin-bottom: 24px;\n}\n\n.stat-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px 18px;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.07);\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n\n.stat-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 18px rgba(0,0,0,0.10);\n}\n\n.stat-icon-wrap[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.stat-icon-wrap[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  width: 26px;\n  height: 26px;\n  color: #fff;\n}\n\n\n\n.stat-card.accounts[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] { background: linear-gradient(135deg, #337ab7, #1a5276); }\n.stat-card.instances[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] { background: linear-gradient(135deg, #8e44ad, #6c3483); }\n.stat-card.customers[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] { background: linear-gradient(135deg, #27ae60, #1e8449); }\n.stat-card.sales-count[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] { background: linear-gradient(135deg, #e67e22, #ca6f1e); }\n.stat-card.sales-value[_ngcontent-%COMP%]   .stat-icon-wrap[_ngcontent-%COMP%] { background: linear-gradient(135deg, #c0392b, #922b21); }\n\n.stat-card.accounts[_ngcontent-%COMP%]    { border-left: 4px solid #337ab7; }\n.stat-card.instances[_ngcontent-%COMP%]   { border-left: 4px solid #8e44ad; }\n.stat-card.customers[_ngcontent-%COMP%]   { border-left: 4px solid #27ae60; }\n.stat-card.sales-count[_ngcontent-%COMP%] { border-left: 4px solid #e67e22; }\n.stat-card.sales-value[_ngcontent-%COMP%] { border-left: 4px solid #c0392b; }\n\n.stat-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  min-width: 0;\n}\n\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  font-weight: 500;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n}\n\n.stat-value[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: #1a2a3a;\n  line-height: 1.1;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n\n\n.chart-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 12px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.07);\n}\n\n\n\n@media (max-width: 768px) {\n  .dashboard-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n  .stat-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  .stat-value[_ngcontent-%COMP%] {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 480px) {\n  .stat-cards[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0FBQ3hCOztBQUVBLHFCQUFxQjtBQUNyQjtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBLCtFQUErRTtBQUMvRTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLDJDQUEyQztBQUM3Qzs7QUFFQSwrRUFBK0U7QUFDL0U7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQSwrRUFBK0U7QUFDL0U7RUFDRSxhQUFhO0VBQ2IsMkRBQTJEO0VBQzNELFNBQVM7RUFDVCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsNkNBQTZDO0FBQy9DOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsd0JBQXdCO0FBQ3hCLHlDQUF5QyxxREFBcUQsRUFBRTtBQUNoRyx5Q0FBeUMscURBQXFELEVBQUU7QUFDaEcseUNBQXlDLHFEQUFxRCxFQUFFO0FBQ2hHLHlDQUF5QyxxREFBcUQsRUFBRTtBQUNoRyx5Q0FBeUMscURBQXFELEVBQUU7O0FBRWhHLHlCQUF5Qiw4QkFBOEIsRUFBRTtBQUN6RCx5QkFBeUIsOEJBQThCLEVBQUU7QUFDekQseUJBQXlCLDhCQUE4QixFQUFFO0FBQ3pELHlCQUF5Qiw4QkFBOEIsRUFBRTtBQUN6RCx5QkFBeUIsOEJBQThCLEVBQUU7O0FBRXpEO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUEsK0VBQStFO0FBQy9FO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBLCtFQUErRTtBQUMvRTtFQUNFO0lBQ0UsYUFBYTtFQUNmOztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDOztFQUVBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSwwQkFBMEI7RUFDNUI7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5kYXNoYm9hcmQtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjRweDtcbiAgYmFja2dyb3VuZDogI2Y0ZjZmYjtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDY0cHgpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4vKiBQZXJtaXNzaW9ucyBjYXJkICovXG4ucGVybWlzc2lvbnMtY2FyZCB7XG4gIG1hcmdpbi10b3A6IDI0cHg7XG59XG4ucGVybWlzc2lvbnMtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIG1hcmdpbi1ib3R0b206IDEycHg7XG59XG4ucGVybWlzc2lvbnMtaWNvbiB7XG4gIGNvbG9yOiAjNWE2YzdkO1xuICBmb250LXNpemU6IDIycHg7XG4gIHdpZHRoOiAyMnB4O1xuICBoZWlnaHQ6IDIycHg7XG59XG4ucGVybWlzc2lvbnMtdGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMxYTUyNzY7XG59XG4ucGVybWlzc2lvbnMtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiAxNnB4IDI0cHg7XG59XG4ucGVybWlzc2lvbnMtbW9kdWxlIHtcbiAgbWluLXdpZHRoOiAxODBweDtcbn1cbi5wZXJtaXNzaW9ucy1tb2R1bGUtbmFtZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzJjM2U1MDtcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG4ucGVybWlzc2lvbnMtaXRlbXMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctbGVmdDogMThweDtcbiAgbGlzdC1zdHlsZTogZGlzYztcbn1cbi5wZXJtaXNzaW9ucy1pdGVtIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzQ0NDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xufVxuLnBlcm1pc3Npb25zLWtleSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGNvbG9yOiAjMWE1Mjc2O1xufVxuLnBlcm1pc3Npb25zLW5hbWUge1xuICBjb2xvcjogIzY2Njtcbn1cblxuLyogw6LClMKAw6LClMKAIEhlYWRlciDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5kYXNoYm9hcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4uZGFzaGJvYXJkLXRpdGxlLWdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uZGFzaGJvYXJkLWljb24ge1xuICBjb2xvcjogIzMzN2FiNztcbiAgZm9udC1zaXplOiAyOHB4O1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uZGFzaGJvYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWE1Mjc2O1xufVxuXG4ucmVmcmVzaC1idG4ge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDBkOGU4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGNvbG9yOiAjMzM3YWI3O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMsIGJveC1zaGFkb3cgMC4ycztcbn1cblxuLnJlZnJlc2gtYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VhZjJmYjtcbiAgYm94LXNoYWRvdzogMCAycHggNnB4IHJnYmEoNTEsMTIyLDE4MywwLjE1KTtcbn1cblxuLyogw6LClMKAw6LClMKAIExvYWRpbmcgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4ubG9hZGluZy1vdmVybGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMDtcbiAgZ2FwOiAxNnB4O1xuICBjb2xvcjogIzg4ODtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4vKiDDosKUwoDDosKUwoAgU3RhdCBDYXJkcyDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbi5zdGF0LWNhcmRzIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxODBweCwgMWZyKSk7XG4gIGdhcDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnN0YXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHggMThweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxNnB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLDAsMCwwLjA3KTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzLCBib3gtc2hhZG93IDAuMTVzO1xufVxuXG4uc3RhdC1jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICBib3gtc2hhZG93OiAwIDZweCAxOHB4IHJnYmEoMCwwLDAsMC4xMCk7XG59XG5cbi5zdGF0LWljb24td3JhcCB7XG4gIHdpZHRoOiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXNocmluazogMDtcbn1cblxuLnN0YXQtaWNvbi13cmFwIG1hdC1pY29uIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICB3aWR0aDogMjZweDtcbiAgaGVpZ2h0OiAyNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyogQ2FyZCBhY2NlbnQgY29sb3VycyAqL1xuLnN0YXQtY2FyZC5hY2NvdW50cyAgICAuc3RhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMzM3YWI3LCAjMWE1Mjc2KTsgfVxuLnN0YXQtY2FyZC5pbnN0YW5jZXMgICAuc3RhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjOGU0NGFkLCAjNmMzNDgzKTsgfVxuLnN0YXQtY2FyZC5jdXN0b21lcnMgICAuc3RhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMjdhZTYwLCAjMWU4NDQ5KTsgfVxuLnN0YXQtY2FyZC5zYWxlcy1jb3VudCAuc3RhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZTY3ZTIyLCAjY2E2ZjFlKTsgfVxuLnN0YXQtY2FyZC5zYWxlcy12YWx1ZSAuc3RhdC1pY29uLXdyYXAgeyBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjYzAzOTJiLCAjOTIyYjIxKTsgfVxuXG4uc3RhdC1jYXJkLmFjY291bnRzICAgIHsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMzM3YWI3OyB9XG4uc3RhdC1jYXJkLmluc3RhbmNlcyAgIHsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjOGU0NGFkOyB9XG4uc3RhdC1jYXJkLmN1c3RvbWVycyAgIHsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjMjdhZTYwOyB9XG4uc3RhdC1jYXJkLnNhbGVzLWNvdW50IHsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjZTY3ZTIyOyB9XG4uc3RhdC1jYXJkLnNhbGVzLXZhbHVlIHsgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCAjYzAzOTJiOyB9XG5cbi5zdGF0LWJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDRweDtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG4uc3RhdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM4ODg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLnN0YXQtdmFsdWUge1xuICBmb250LXNpemU6IDI2cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMWEyYTNhO1xuICBsaW5lLWhlaWdodDogMS4xO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLyogw6LClMKAw6LClMKAIENoYXJ0IENhcmQgw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAw6LClMKAICovXG4uY2hhcnQtY2FyZCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsMCwwLDAuMDcpO1xufVxuXG4vKiDDosKUwoDDosKUwoAgUmVzcG9uc2l2ZSDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoDDosKUwoAgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZGFzaGJvYXJkLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5zdGF0LWNhcmRzIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIH1cblxuICAuc3RhdC12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuc3RhdC1jYXJkcyB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}

/***/ }),

/***/ 83326:
/*!*****************************************************!*\
  !*** ./src/app/pages/dashboard/dashboard.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DashboardModule: () => (/* binding */ DashboardModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard-routing.module */ 29615);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/form-material.module */ 55751);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ 95199);
/* harmony import */ var _service_account_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/account.service */ 94491);
/* harmony import */ var _service_instance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/instance.service */ 30511);
/* harmony import */ var _service_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/customer.service */ 41068);
/* harmony import */ var _service_sales_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/sales.service */ 14188);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);














class DashboardModule {
  static {
    this.ɵfac = function DashboardModule_Factory(t) {
      return new (t || DashboardModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
      type: DashboardModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
      providers: [_service_account_service__WEBPACK_IMPORTED_MODULE_3__.AccountService, _service_instance_service__WEBPACK_IMPORTED_MODULE_4__.InstanceService, _service_customer_service__WEBPACK_IMPORTED_MODULE_5__.CustomerService, _service_sales_service__WEBPACK_IMPORTED_MODULE_6__.SalesService],
      imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](DashboardModule, {
    declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.DashboardComponent],
    imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_0__.DashboardRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _service_form_material_module__WEBPACK_IMPORTED_MODULE_1__.FormMaterialModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_9__.HighchartsChartModule, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_12__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxChartModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__.MatProgressSpinnerModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_pages_dashboard_dashboard_module_ts.js.map