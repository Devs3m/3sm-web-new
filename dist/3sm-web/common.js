"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["common"],{

/***/ 94491:
/*!**************************************************!*\
  !*** ./src/app/pages/service/account.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountService: () => (/* binding */ AccountService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);




class AccountService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getAccountById(accountId) {
    return this.http.get(`${this.apiUrl}/account/${accountId}`);
  }
  getAccountOrderby() {
    return this.http.get(`${this.apiUrl}/account/accountorderby`);
  }
  deleteAccount(accountid) {
    console.log('Deleting account:', accountid);
    return this.http.delete(`${this.apiUrl}/account/accountdelete/${accountid}`);
  }
  getAccountDetails() {
    return this.http.get(`${this.apiUrl}/account/list`);
  }
  addAccount(accountData) {
    console.log('Sending data to API', accountData);
    return this.http.post(`${this.apiUrl}/account/accountsave`, accountData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/city/list`);
  }
  updateAccount(account) {
    return this.http.put(`${this.apiUrl}/account/accountupdate`, account);
  }
  // Check if company name already exists
  checkCompanyNameExists(companyName, accountId) {
    if (!companyName || companyName.trim() === '') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    }
    const url = `${this.apiUrl}/account/check-company-name?name=${encodeURIComponent(companyName.trim())}${accountId ? `&accountId=${accountId}` : ''}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (typeof response === 'boolean') {
        return response;
      }
      return response.exists === true || response === true;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    }));
  }
  // Check if mobile number already exists
  checkMobileNumberExists(mobileNumber, accountId) {
    if (!mobileNumber || mobileNumber.trim() === '') {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    }
    const cleanMobile = mobileNumber.trim().replace(/\D/g, '');
    const url = `${this.apiUrl}/account/check-mobile?mobile=${cleanMobile}${accountId ? `&accountId=${accountId}` : ''}`;
    return this.http.get(url).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(response => {
      if (typeof response === 'boolean') {
        return response;
      }
      return response.exists === true || response === true;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(false);
    }));
  }
  createUser(data) {
    return this.http.post(`${this.apiUrl}/api/user`, data).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => error);
    }));
  }
  static {
    this.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 4218:
/*!**********************************************!*\
  !*** ./src/app/pages/service/gst.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GstService: () => (/* binding */ GstService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class GstService {
  deleteGst(gstid) {
    return this.http.get(`${this.apiUrl}/gst/gstdelete`, gstid);
  }
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getGstDetails() {
    console.log('Fetching GST data from API');
    return this.http.get(`${this.apiUrl}/gst/list`);
  }
  addGst(gstData) {
    console.log('Sending GST data to API', gstData);
    return this.http.post(`${this.apiUrl}/gst/gstsave`, gstData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/vat/list`);
  }
  static {
    this.ɵfac = function GstService_Factory(t) {
      return new (t || GstService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: GstService,
      factory: GstService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 14188:
/*!************************************************!*\
  !*** ./src/app/pages/service/sales.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SalesService: () => (/* binding */ SalesService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);





class SalesService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getSalesById(salesId) {
    return this.http.get(`${this.apiUrl}/sales/${salesId}`);
  }
  getSalesOrderby() {
    console.log('Fetching sales data from API');
    return this.http.get(`${this.apiUrl}/sales/salesorderby`);
  }
  deleteSales(salesid) {
    console.log('Deleting sales:', salesid);
    return this.http.delete(`${this.apiUrl}/sales/salesdelete/${salesid}`);
  }
  getSalesDetails() {
    console.log('Fetching sales data from API');
    return this.http.get(`${this.apiUrl}/sales/list`);
  }
  addSales(salesData) {
    console.log('Sending sales data to API', salesData);
    return this.http.post(`${this.apiUrl}/sales/salessave`, salesData);
  }
  updateSales(sales) {
    return this.http.put(`${this.apiUrl}/sales/salesupdate`, sales);
  }
  getSalesCounts() {
    return this.http.get(`${this.apiUrl}/sales/counts`);
  }
  getSalesSummary() {
    return this.http.get(`${this.apiUrl}/salessummary`);
  }
  getSalesSummaryCounts() {
    return this.http.get(`${this.apiUrl}/salessummary/counts`);
  }
  getSalesSummaryList(accountId, instanceId) {
    if (accountId != null && accountId !== undefined) {
      const params = {
        accountid: String(accountId)
      };
      if (instanceId != null && instanceId !== undefined) {
        params['instanceid'] = String(instanceId);
      }
      return this.http.get(`${this.apiUrl}/salessummary/list`, {
        params
      });
    }
    return this.http.get(`${this.apiUrl}/salessummary/list`);
  }
  /** Get next invoiceno (last invoiceno + 1) from salessummary list */
  getNextInvoiceno() {
    return this.http.get(`${this.apiUrl}/salessummary/list`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(data => {
      const list = Array.isArray(data) ? data : data?.list ?? data?.data ?? data?.records ?? [];
      const nums = list.map(x => Number(x.invoiceno)).filter(n => !isNaN(n) && n > 0);
      const max = nums.length ? Math.max(...nums) : 0;
      return max + 1;
    }), (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(1)));
  }
  /** Save salessummary + salesdetail in one transaction (Sales add page) */
  saveSalesSummaryWithDetails(dto) {
    return this.http.post(`${this.apiUrl}/salessummary/save`, dto);
  }
  /** Get one salessummary by invoiceno (for edit) */
  getSalesSummaryByInvoice(invoiceno) {
    return this.http.get(`${this.apiUrl}/salessummary/edit/${invoiceno}`);
  }
  /** Update salessummary + salesdetail in one transaction (PUT /salessummary/update) */
  updateSalesSummaryWithDetails(dto) {
    return this.http.put(`${this.apiUrl}/salessummary/update`, dto);
  }
  /** Delete salessummary (and cascade salesdetail if DB supports) */
  deleteSalesSummary(invoiceno) {
    return this.http.delete(`${this.apiUrl}/salessummary/${invoiceno}`);
  }
  /** GET /salessummary/salesprint/:invoiceno – returns JSON: { salessummary, salesdetails, instance, customer }. */
  getSalesPrintData(invoiceno) {
    return this.http.get(`${this.apiUrl}/salessummary/salesprint/${invoiceno}`);
  }
  /** GET /salessummary/salesprint/:invoiceno as PDF blob (if backend supports it). */
  getSalesPrint(invoiceno) {
    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
      Accept: 'application/pdf'
    });
    return this.http.get(`${this.apiUrl}/salessummary/salesprint/${invoiceno}`, {
      headers,
      responseType: 'blob'
    });
  }
  getCustomers() {
    return this.http.get(`${this.apiUrl}/customer/list`);
  }
  getCustomerById(customerId) {
    return this.http.get(`${this.apiUrl}/customer/${customerId}`);
  }
  getProducts() {
    return this.http.get(`${this.apiUrl}/product/list`);
  }
  static {
    this.ɵfac = function SalesService_Factory(t) {
      return new (t || SalesService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
      token: SalesService,
      factory: SalesService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 61715:
/*!***************************************************!*\
  !*** ./src/app/pages/service/userrole.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserroleService: () => (/* binding */ UserroleService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 46443);





class UserroleService {
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  deleteUserrole(userroleid) {
    return this.http.delete(`${this.apiUrl}/userrole/userroledelete/${userroleid}`);
  }
  getUserroleDetails() {
    return this.http.get(`${this.apiUrl}/userrole/list`);
  }
  addUserrole(userroleData) {
    return this.http.post(`${this.apiUrl}/userrole/userrolesave`, userroleData);
  }
  updateUserrole(userroleData) {
    return this.http.put(`${this.apiUrl}/userrole/userroleupdate`, userroleData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/userrole/list`);
  }
  /**
   * User role / RBAC check (audit & compliance).
   * GET /role/permissions/userrole-check – returns whether current user can manage RBAC.
   * Optional instanceId: when set, backend hasRbacManage(instanceId) allows instance-scoped Super Admins.
   */
  getUserRoleCheck(instanceId) {
    let url = `${this.apiUrl}/role/permissions/userrole-check`;
    if (instanceId != null && instanceId !== undefined && !Number.isNaN(Number(instanceId))) {
      url += `?instanceId=${encodeURIComponent(String(instanceId))}`;
    }
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => {
      if (error.status === 403 || error.status === 404) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error);
    }));
  }
  // Get permissions for a role (Super Admin only)
  // Uses GET /role/:roleId/permissions
  getRolePermissions(roleId) {
    return this.http.get(`${this.apiUrl}/role/${roleId}/permissions`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error)));
  }
  // Get role details with permissions (Super Admin only)
  // Uses GET /role/:roleId/details
  getRoleDetails(roleId) {
    return this.http.get(`${this.apiUrl}/role/${roleId}/details`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error)));
  }
  // Get available permissions for a role (not yet assigned)
  // Uses GET /role/:roleId/permissions/available
  getAvailablePermissions(roleId) {
    return this.http.get(`${this.apiUrl}/role/${roleId}/permissions/available`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error)));
  }
  // Save/update permissions for a role (Super Admin only)
  // Tries: 1) POST .../permissions with { permissionIds }, 2) POST .../permissions/bulk with [{ permissionid }]
  saveRolePermissions(roleId, permissions) {
    if (!roleId || roleId <= 0 || isNaN(Number(roleId))) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => new Error('Invalid role ID'));
    }
    const rid = Number(roleId);
    const urlBase = `${this.apiUrl}/role/${rid}/permissions`;
    const bodyBulk = Array.isArray(permissions) ? permissions : [];
    const permissionIds = bodyBulk.map(p => Number(p.permissionid ?? p.permissionId ?? p.id)).filter(id => !isNaN(id) && id > 0);
    const bodyIds = {
      permissionIds
    };
    return this.http.post(urlBase, bodyIds).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err => {
      if (err && err.status === 403) {
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err);
      }
      return this.http.post(`${urlBase}/bulk`, bodyBulk).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(err2 => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => err2 && err2.status === 403 ? err2 : err2 || err)));
    }));
  }
  // Assign single permission to a role
  // Uses POST /role/:roleId/permissions
  assignPermission(roleId, permissionId) {
    const url = `${this.apiUrl}/role/${roleId}/permissions`;
    const body = {
      permissionid: permissionId
    };
    return this.http.post(url, body).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error)));
  }
  // Remove a permission from a role
  // Uses DELETE /role/:roleId/permissions/:permissionId
  removePermission(roleId, permissionId) {
    const url = `${this.apiUrl}/role/${roleId}/permissions/${permissionId}`;
    return this.http.delete(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error)));
  }
  // Get all roles with permissions
  // Uses GET /role/all-with-permissions
  getAllRolesWithPermissions() {
    return this.http.get(`${this.apiUrl}/role/all-with-permissions`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.catchError)(error => (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)(() => error)));
  }
  // Get user permissions
  getUserPermissions(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}/permissions`);
  }
  static {
    this.ɵfac = function UserroleService_Factory(t) {
      return new (t || UserroleService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      token: UserroleService,
      factory: UserroleService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 45171:
/*!**********************************************!*\
  !*** ./src/app/pages/service/vat.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VatService: () => (/* binding */ VatService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class VatService {
  deleteVat(vatid) {
    return this.http.get(`${this.apiUrl}/vat/vatdelete`, vatid);
  }
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
  }
  getVatDetails() {
    console.log('Fetching Vat data from API');
    return this.http.get(`${this.apiUrl}/vat/list`);
  }
  addVat(vatData) {
    console.log('Sending Vat data to API', vatData);
    return this.http.post(`${this.apiUrl}/vat/vatsave`, vatData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/user/list`);
  }
  static {
    this.ɵfac = function VatService_Factory(t) {
      return new (t || VatService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: VatService,
      factory: VatService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ })

}]);
//# sourceMappingURL=common.js.map