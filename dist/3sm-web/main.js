"use strict";
(self["webpackChunk_3sm_web"] = self["webpackChunk_3sm_web"] || []).push([["main"],{

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _pages_digicard_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/digicard/card/card.component */ 24163);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);





const routes = [{
  path: '',
  component: _app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent,
  children: [{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }, {
    path: 'pages',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_pages_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/pages.module */ 98423)).then(m => m.PagesModule)
  }, {
    path: 'login',
    loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 91307)).then(m => m.LoginModule)
  }, {
    path: 'card/:id',
    component: _pages_digicard_card_card_component__WEBPACK_IMPORTED_MODULE_1__.CardComponent
  }]
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
  });
})();

/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _pages_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/service/auth.service */ 9822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);



class AppComponent {
  title(title) {
    throw new Error('Method not implemented.');
  }
  constructor(authService) {
    this.authService = authService;
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_pages_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var highcharts_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highcharts-angular */ 31769);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ 3644);
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.module */ 91307);
/* harmony import */ var _pages_service_instance_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/service/instance.service */ 30511);
/* harmony import */ var _core_form_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/form-material.module */ 65960);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! devextreme-angular/core */ 26683);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _pages_unique_mobile_validator_unique_mobile_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/unique-mobile.validator/unique-mobile.validator.component */ 57451);
/* harmony import */ var _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/auth.interceptor */ 14689);






















const routes = [{
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__.LoginComponent
}];
class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
      providers: [_pages_service_instance_service__WEBPACK_IMPORTED_MODULE_4__.InstanceService, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.LOCALE_ID,
        useValue: 'en-IN'
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HTTP_INTERCEPTORS,
        useClass: _core_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__.AuthInterceptor,
        multi: true
      }],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__.DxTemplateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DxChartModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_17__.HighchartsChartModule, _login_login_module__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _core_form_material_module__WEBPACK_IMPORTED_MODULE_5__.FormMaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule.forRoot(routes)]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _pages_unique_mobile_validator_unique_mobile_validator_component__WEBPACK_IMPORTED_MODULE_6__.UniqueMobileValidatorComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, devextreme_angular_core__WEBPACK_IMPORTED_MODULE_13__.DxTemplateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DxChartModule, highcharts_angular__WEBPACK_IMPORTED_MODULE_17__.HighchartsChartModule, _login_login_module__WEBPACK_IMPORTED_MODULE_3__.LoginModule, _core_form_material_module__WEBPACK_IMPORTED_MODULE_5__.FormMaterialModule, _angular_common__WEBPACK_IMPORTED_MODULE_18__.CommonModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_router__WEBPACK_IMPORTED_MODULE_20__.RouterModule]
  });
})();

/***/ }),

/***/ 14689:
/*!******************************************!*\
  !*** ./src/app/core/auth.interceptor.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthInterceptor: () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);




class AuthInterceptor {
  constructor(router) {
    this.router = router;
  }
  intercept(req, next) {
    // Skip adding token for login endpoint
    if (req.url.includes('/auth/login')) {
      return next.handle(req);
    }
    // Get the token from localStorage
    const token = localStorage.getItem('token');
    // If token exists, clone the request and add the Authorization header
    if (token) {
      // Try Bearer token format first (standard JWT format)
      // If your API expects just the token without "Bearer", change this line to:
      // Authorization: token
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
      return next.handle(cloned).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.catchError)(error => {
        // Handle 401 Unauthorized errors
        if (error.status === 401) {
          // Clear token and redirect to login
          localStorage.removeItem('token');
          localStorage.removeItem('userEmail');
          localStorage.removeItem('userData');
          this.router.navigate(['/login']);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.throwError)(() => error);
      }));
    }
    // If no token, proceed with the original request
    return next.handle(req);
  }
  static {
    this.ɵfac = function AuthInterceptor_Factory(t) {
      return new (t || AuthInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: AuthInterceptor,
      factory: AuthInterceptor.ɵfac
    });
  }
}

/***/ }),

/***/ 65960:
/*!**********************************************!*\
  !*** ./src/app/core/form-material.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormMaterialModule: () => (/* binding */ FormMaterialModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/datepicker */ 61977);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ 74646);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 24950);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 95541);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 25175);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 84175);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/radio */ 53804);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ 38223);
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/checkbox */ 97024);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/list */ 20943);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/table */ 77697);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ 53777);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/autocomplete */ 79771);
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ 19322);
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/tooltip */ 80640);
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/toolbar */ 39552);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ 93840);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/sidenav */ 17049);
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/stepper */ 56622);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button-toggle */ 59864);
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/slide-toggle */ 8827);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/progress-spinner */ 41134);
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/grid-list */ 16488);
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/divider */ 14102);
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/menu */ 31034);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/paginator */ 24624);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);




























class FormMaterialModule {
  static {
    this.ɵfac = function FormMaterialModule_Factory(t) {
      return new (t || FormMaterialModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: FormMaterialModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MAT_DATE_LOCALE,
        useValue: 'en-IN'
      }],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FormMaterialModule, {
    exports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__.MatDatepickerModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_1__.MatNativeDateModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormFieldModule, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInputModule, _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButtonModule, _angular_material_radio__WEBPACK_IMPORTED_MODULE_8__.MatRadioModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__.MatTabsModule, _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_10__.MatCheckboxModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_11__.MatListModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_12__.MatCardModule, _angular_material_table__WEBPACK_IMPORTED_MODULE_13__.MatTableModule, _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__.MatExpansionModule, _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_15__.MatAutocompleteModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_16__.MatTooltipModule, _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_17__.MatToolbarModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__.MatIconModule, _angular_material_stepper__WEBPACK_IMPORTED_MODULE_20__.MatStepperModule, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_21__.MatButtonToggleModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__.MatSlideToggleModule, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_23__.MatProgressSpinnerModule, _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_24__.MatGridListModule, _angular_material_divider__WEBPACK_IMPORTED_MODULE_25__.MatDividerModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__.MatMenuModule, _angular_material_paginator__WEBPACK_IMPORTED_MODULE_27__.MatPaginatorModule]
  });
})();

/***/ }),

/***/ 41122:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRoutingModule: () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 3644);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);




const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class LoginRoutingModule {
  static {
    this.ɵfac = function LoginRoutingModule_Factory(t) {
      return new (t || LoginRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: LoginRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3644:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _pages_service_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/service/auth.service */ 9822);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _pages_service_permission_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/service/permission.service */ 69227);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 60316);







function LoginComponent_small_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Valid email is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function LoginComponent_small_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " Password is required ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
class LoginComponent {
  constructor(authService, router, fb, permissionService) {
    this.authService = authService;
    this.router = router;
    this.fb = fb;
    this.permissionService = permissionService;
    this.errorMessage = '';
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]
    });
  }
  login() {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Form is invalid';
      return;
    }
    const credentials = this.loginForm.value;
    this.errorMessage = ''; // Clear previous errors
    this.authService.login(credentials).subscribe({
      next: response => {
        if (response && response.success !== false) {
          if (response.permissions && Array.isArray(response.permissions) && response.permissions.length > 0) {
            this.permissionService.setPermissionsFromLogin(response.permissions, response.user);
          } else {
            this.permissionService.loadCurrentUserPermissions();
          }
          this.router.navigate(['/pages/dashboard']);
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      },
      error: error => {
        console.error('Login error:', error);
        this.errorMessage = error.error?.message || 'Login failed. Try again.';
      }
    });
  }
  static {
    this.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pages_service_auth_service__WEBPACK_IMPORTED_MODULE_0__.AuthService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_pages_service_permission_service__WEBPACK_IMPORTED_MODULE_1__.PermissionService));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 26,
      vars: 4,
      consts: [[1, "login-container"], [1, "login-card"], ["src", "assets/logo.png", "alt", "Logo", 1, "logo"], [1, "project-name"], [1, "login-form", 3, "formGroup"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "Enter your email", "required", "", 1, "form-control"], [4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "formControlName", "password", "placeholder", "Enter your password", "required", "", 1, "form-control"], ["type", "submit", 1, "login-button", 3, "disabled", "click"], [1, "footer"], ["href", "http://connectsite.in"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3)(5, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Connecting People");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "form", 4)(8, "div", 5)(9, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Email:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_small_12_Template, 2, 0, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 5)(14, "label", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Password:");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, LoginComponent_small_17_Template, 2, 0, "small", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "button", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() {
            return ctx.login();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Login");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "Powered By");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "a", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "www.connectsite.in");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        }
        if (rf & 2) {
          let tmp_1_0;
          let tmp_2_0;
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.loginForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.invalid) && ((tmp_1_0 = ctx.loginForm.get("email")) == null ? null : tmp_1_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.invalid) && ((tmp_2_0 = ctx.loginForm.get("password")) == null ? null : tmp_2_0.touched));
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loginForm.invalid);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName],
      styles: ["\n\n\n.login-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  background-color: #f5f5f5;\n}\n\n.login-card[_ngcontent-%COMP%] {\n  background: rgb(215, 215, 215);\n  padding: 2rem;\n  border-radius: 12px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  width: 400px;\n  text-align: center;\n  height:600px;\n  align-items: top;\n  \n}\n\n.logo[_ngcontent-%COMP%]{\n  width:200px; \n  height:200px;\n  margin-bottom: 5px;\n  margin-top: 1px;\n  \n}\n\n.project-name[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  color: #555;\n  margin-bottom: 2rem;\n  font-size: 1.2rem;\n  font-weight: normal;\n  \n}\n\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  text-align: left;\n}\n\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  color: #555;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  text-align: left;\n}\n\n.form-check-label[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.login-button[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  background-color: #555759;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-size: 1rem;\n  transition: background-color 0.3s;\n}\n\n.login-button[_ngcontent-%COMP%]:hover {\n  background-color: #202224;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGlCQUFpQjs7QUFFakI7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsOEJBQThCO0VBQzlCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFnQjs7QUFFbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixlQUFlOztBQUVqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixlQUFlO0VBQ2YsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOzs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXFGRSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKkxvZ2luIHBhZ2UgY3NzKi9cblxuLmxvZ2luLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xufVxuXG4ubG9naW4tY2FyZCB7XG4gIGJhY2tncm91bmQ6IHJnYigyMTUsIDIxNSwgMjE1KTtcbiAgcGFkZGluZzogMnJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgd2lkdGg6IDQwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDo2MDBweDtcbiAgYWxpZ24taXRlbXM6IHRvcDtcbiAgXG59XG5cbi5sb2dve1xuICB3aWR0aDoyMDBweDsgXG4gIGhlaWdodDoyMDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIFxufVxuXG4ucHJvamVjdC1uYW1lIGgyIHtcbiAgY29sb3I6ICM1NTU7XG4gIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mb3JtLWdyb3VwIGxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgY29sb3I6ICM1NTU7XG59XG5cbi5mb3JtLWNvbnRyb2wge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5mb3JtLWNoZWNrIHtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZvcm0tY2hlY2stbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xufVxuXG4ubG9naW4tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNzVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTU3NTk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XG59XG5cbi5sb2dpbi1idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI0O1xufVxuXG5cbi8qQGltcG9ydCB1cmwoLi4vLi4vc3R5bGVzLmNzcyk7XG5cbiAgbG9naW4tY3NzIFxuICBcbi53cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJvcmRlcjogMXB4IHJnYigxNjEsIDE1OSwgMTU5KSBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZTdmNmZmO1xufVxuXG4uYW5pbWFuYXRpb24tb3ZlcmxheSB7XG4gIHdpZHRoOiA1MCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IGJpc3F1ZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDBweDtcbiAgdHJhbnNmb3JtOiBub25lO1xuICBtYXJnaW4tbGVmdDogMDtcbiAgYW5pbWF0aW9uOiBzbGlkZS1yaWdodCAxcyBlYXNlLWluLW91dCBmb3J3YXJkcztcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZXMvZGlnaWNhcmQvZGlnLWNhcmQuanBnKSBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5Aa2V5ZnJhbWVzIHNsaWRlLXJpZ2h0IHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTsgLyogQWRqdXN0IHRoZSBkaXN0YW5jZSBhcyBuZWVkZWQgXG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuQGtleWZyYW1lcyBleHBhbmQtdGhlbi1zbGlkZSB7XG4gIDAlIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxNTBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTUwcHg7XG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyMHB4O1xuICB9XG5cbiAgNTAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgfVxuXG4gIDEwMCUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxNTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxNTBweDtcbiAgfVxufVxuXG4ubG9naW4tc2VjdGlvbntcbiAgIHdpZHRoOiA0NSU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDglO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cbi5sb2dpbi1jb250YWluZXJ7XG4gICAgICAgIHdpZHRoOiA4MiU7XG4gICAgYm9yZGVyOiBzb2xpZCAxcHggdmFyKC0tYm9yZGVyKTtcbiAgICBwYWRkaW5nOiA1OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDQzcHg7XG4gICAgYmFja2dyb3VuZDogdmFyKC0td2hpdGUpO1xufVxuLmxvZ2luLWNvbnRhaW5lciBoMntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xufVxuICovIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 91307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 3644);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-routing.module */ 41122);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _core_form_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/form-material.module */ 65960);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! devextreme-angular */ 34856);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! devextreme-angular */ 98595);
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! devextreme-angular */ 19559);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);








class LoginModule {
  static {
    this.ɵfac = function LoginModule_Factory(t) {
      return new (t || LoginModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: LoginModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _core_form_material_module__WEBPACK_IMPORTED_MODULE_2__.FormMaterialModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_7__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_8__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxChartModule]
    });
  }
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_1__.LoginRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule, _core_form_material_module__WEBPACK_IMPORTED_MODULE_2__.FormMaterialModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_7__.DxDataGridModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_8__.DxButtonModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_9__.DxChartModule],
    exports: [_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent]
  });
})();

/***/ }),

/***/ 92119:
/*!***********************************************************!*\
  !*** ./src/app/pages/digicard/card/@core/card.service.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardService: () => (/* binding */ CardService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 46443);



class CardService {
  constructor(httpClient) {
    this.httpClient = httpClient;
  }
  getByname(name) {
    return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost}digicard/${name}`);
  }
  getUserDetails(company, email) {
    return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost}digicard/getcarddetails?company=${company}&email=${email}`);
  }
  getUserDetailsById(id) {
    return this.httpClient.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost}digicard/getcarddetailsbyid?id=${id}`);
  }
  createUserDetails(data) {
    return this.httpClient.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiHost}digicardresponse/save`, data);
  }
  static {
    this.ɵfac = function CardService_Factory(t) {
      return new (t || CardService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: CardService,
      factory: CardService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 24163:
/*!*******************************************************!*\
  !*** ./src/app/pages/digicard/card/card.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CardComponent: () => (/* binding */ CardComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _core_card_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./@core/card.service */ 92119);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 95072);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 60316);





function CardComponent_div_142_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 90)(5, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 91)(7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 93)(10, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 96)(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "p")(22, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p")(25, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "p")(32, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div")(38, "p")(39, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "svg", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div")(45, "div")(46, "p")(47, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 104)(50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "svg", 105)(52, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "path", 106)(54, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div")(56, "p")(57, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "svg", 108)(62, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 109)(64, "path", 110)(65, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div")(67, "p")(68, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "svg", 112)(73, "g", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 114)(75, "path", 115)(76, "path", 116)(77, "path", 117)(78, "rect", 118)(79, "path", 119)(80, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div")(82, "p")(83, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:+91" + (ctx_r0.userDetails == null ? null : ctx_r0.userDetails.mobile), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:+91" + (ctx_r0.userDetails == null ? null : ctx_r0.userDetails.work_phone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.work_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.linkedin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://maps.google.com/?q=" + (ctx_r0.userDetails == null ? null : ctx_r0.userDetails.address), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + (ctx_r0.userDetails == null ? null : ctx_r0.userDetails.email), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.instagram);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r0.userDetails == null ? null : ctx_r0.userDetails.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userDetails == null ? null : ctx_r0.userDetails.url);
  }
}
function CardComponent_div_143_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "div", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 90)(5, "button", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_div_143_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.downloadContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 91)(7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 93)(10, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 124)(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "p")(22, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p")(25, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "p")(32, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div")(38, "p")(39, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "svg", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div")(45, "div")(46, "p")(47, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 125)(50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "svg", 105)(52, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "path", 106)(54, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div")(56, "p")(57, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "svg", 108)(62, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 109)(64, "path", 110)(65, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div")(67, "p")(68, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "svg", 112)(73, "g", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 114)(75, "path", 115)(76, "path", 116)(77, "path", 117)(78, "rect", 118)(79, "path", 119)(80, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div")(82, "p")(83, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:+91" + (ctx_r1.userDetails == null ? null : ctx_r1.userDetails.mobile), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:+91" + (ctx_r1.userDetails == null ? null : ctx_r1.userDetails.work_phone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.work_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.userDetails == null ? null : ctx_r1.userDetails.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.linkedin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.userDetails == null ? null : ctx_r1.userDetails.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://maps.google.com/?q=" + (ctx_r1.userDetails == null ? null : ctx_r1.userDetails.address), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + (ctx_r1.userDetails == null ? null : ctx_r1.userDetails.email), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.userDetails == null ? null : ctx_r1.userDetails.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.instagram);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r1.userDetails == null ? null : ctx_r1.userDetails.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.userDetails == null ? null : ctx_r1.userDetails.url);
  }
}
function CardComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 86)(1, "div", 87)(2, "div", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 90)(5, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_div_144_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.downloadContact());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "svg", 91)(7, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "path", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 93)(10, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "img", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 129)(17, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "svg", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "path", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div")(21, "p")(22, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p")(25, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "path", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div")(31, "p")(32, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "svg", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "path", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div")(38, "p")(39, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "svg", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "path", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div")(45, "div")(46, "p")(47, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 130)(50, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "svg", 105)(52, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "path", 106)(54, "path", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div")(56, "p")(57, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](59, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "svg", 108)(62, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "path", 109)(64, "path", 110)(65, "path", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div")(67, "p")(68, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "svg", 112)(73, "g", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "path", 114)(75, "path", 115)(76, "path", 116)(77, "path", 117)(78, "rect", 118)(79, "path", 119)(80, "path", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "div")(82, "p")(83, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.jobtitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:+91" + (ctx_r2.userDetails == null ? null : ctx_r2.userDetails.mobile), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:+91" + (ctx_r2.userDetails == null ? null : ctx_r2.userDetails.work_phone), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.work_phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.userDetails == null ? null : ctx_r2.userDetails.linkedin, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.linkedin);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.userDetails == null ? null : ctx_r2.userDetails.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.twitter);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "mailto:" + (ctx_r2.userDetails == null ? null : ctx_r2.userDetails.email), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "https://maps.google.com/?q=" + (ctx_r2.userDetails == null ? null : ctx_r2.userDetails.address), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.userDetails == null ? null : ctx_r2.userDetails.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.instagram);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", ctx_r2.userDetails == null ? null : ctx_r2.userDetails.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.userDetails == null ? null : ctx_r2.userDetails.url);
  }
}
class CardComponent {
  // card-selection
  constructor(formBuilder, service, route) {
    this.formBuilder = formBuilder;
    this.service = service;
    this.route = route;
    // card-selection
    this.selectedTheme = 'whiteCard';
    this.contactDetailsForm = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      homePhone: [''],
      workPhone: [''],
      email: [''],
      workplace: [''],
      address: ['']
    });
    this.contactSaveForm = this.formBuilder.group({
      name: [''],
      companyName: [''],
      emailId: [''],
      phoneNumber: ['']
    });
  }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const {
        company,
        email,
        id,
        color
      } = params;
      this.companyName = company;
      this.email = email;
      this.empid = id;
      this.cardColor = color;
    });
    if (this.empid) this.getUserDataById(this.empid);
    // card-selection
    const storedTheme = localStorage.getItem('selectedCardTheme');
    if (storedTheme) {
      this.selectedTheme = storedTheme;
    }
    // card-selection
  }

  generateVCF(contact) {
    const vcfContent = `BEGIN:VCARD
VERSION:3.0
N:${contact?.name};;;
FN:${contact?.name}
TEL;TYPE=HOME:${contact?.mobile}
TEL;TYPE=WORK:${contact?.work_phone}
EMAIL:${contact?.email}
ORG:${contact?.company}
ADR:;;${contact?.address};;;;
PHOTO;ENCODING=b;TYPE=JPEG:${contact?.photoBase64}
END:VCARD`;
    return vcfContent;
  }
  downloadContact() {
    const contact = this.userDetails;
    contact.photoBase64 = '';
    const vcfContent = this.generateVCF(contact);
    const blob = new Blob([vcfContent], {
      type: 'text/vcard'
    });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    const name = this.userDetails?.name;
    a.download = `${name}.vcf`;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
  getUserData(name) {
    this.service.getByname(name).subscribe(res => {
      if (res && res.length) {
        this.userDetails = res[0];
      } else {
        this.userDetails = {
          "id": 9,
          "name": "Bala Rathna Vignesh",
          "mobile": "6383344319",
          "email": "balarathnavigneah",
          "company": "cardinality",
          "jobtitle": "software developer",
          "title": "ecard",
          "url": "www.google.com",
          "address": "dindigul",
          "instagram": "balarathnavigneah_32",
          "whatsapp": "6383344319",
          "linkedin": "balarathnavigneah3443",
          "facebook": "bala3443",
          "youtube": "bala",
          "skype": "13323ksdk",
          "telegram": "no one",
          "googlepay": "232",
          "paytm": "string",
          "phonepe": null,
          "twitter": "bala"
        };
      }
    });
  }
  getUserDataByQueryParam(companyName, email) {
    this.service.getUserDetails(companyName, email).subscribe(res => {
      if (res && res.length) {
        this.userDetails = res[0];
      }
    });
  }
  getUserDataById(id) {
    this.service.getUserDetailsById(id).subscribe(res => {
      if (res && res.length) {
        this.userDetails = res[0];
      }
    });
  }
  saveUserDetails() {
    this.downloadContact();
    this.service.createUserDetails({
      ...this.contactSaveForm.value,
      companyId: 2
    }).subscribe(res => {
      if (res) {
        $('#myModal').modal('hide');
        this.contactSaveForm.reset();
      }
    });
  }
  downloadPdf() {
    window.open('../.././assets/pdf/3G Medical Disposable Products.pdf');
  }
  downloadPdf1() {
    window.open('../.././assets/pdf/3G Medical Apparel disposable.pdf');
  }
  downloadPdf2() {
    window.open('../.././assets/pdf/3G Medical Apparel Reusable.pdf');
  }
  static {
    this.ɵfac = function CardComponent_Factory(t) {
      return new (t || CardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_core_card_service__WEBPACK_IMPORTED_MODULE_0__.CardService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute));
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: CardComponent,
      selectors: [["app-card"]],
      decls: 234,
      vars: 11,
      consts: [[2, "display", "none", 3, "formGroup"], [1, "form-group"], ["for", "firstName"], ["type", "text", "id", "firstName", "placeholder", "Enter first name", "formControlName", "firstName", "required", "", 1, "form-control"], ["for", "lastName"], ["type", "text", "id", "lastName", "placeholder", "Enter last name", "formControlName", "lastName", "required", "", 1, "form-control"], ["for", "homePhone"], ["type", "tel", "id", "homePhone", "placeholder", "Enter home phone number", "formControlName", "homePhone", 1, "form-control"], ["for", "workPhone"], ["type", "tel", "id", "workPhone", "placeholder", "Enter work phone number", "formControlName", "workPhone", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "placeholder", "Enter email", "formControlName", "email", 1, "form-control"], ["for", "workplace"], ["type", "text", "id", "workplace", "placeholder", "Enter workplace", "formControlName", "workplace", 1, "form-control"], ["for", "address"], ["id", "address", "rows", "3", "placeholder", "Enter address", "formControlName", "address", 1, "form-control"], [1, "business2", "clearfix"], [1, "container-fluid", "clearfix"], [1, "row"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-xs-12"], [3, "ngClass"], [1, "first-box"], [1, "black"], [1, "col-red"], [1, "blue"], [1, "surgical-card", "clearfix"], [1, "center-align", "clearfix"], [1, "source"], ["src", "../../../../assets/images/digicard/3G Surgical-Logo-copy.jpg", "alt", "surgical"], [1, "name-tag", "clearfix"], [1, "sec-1", "clearfix"], [3, "href"], [1, "mob-align", "clearfix"], [1, "box-bg"], [1, "media"], [1, "media-left"], ["href", "#"], ["aria-hidden", "true", 1, "fa", "fa-map-marker"], [1, "media-body"], [1, "media-heading"], ["aria-hidden", "true", 1, "fa", "fa-envelope"], ["aria-hidden", "true", 1, "fa", "fa-phone-square"], [1, "mob-align"], ["aria-hidden", "true", 1, "fa", "fa-globe"], [1, "download", "text-center"], ["data-toggle", "modal", "data-target", "#myModal", 1, "btn", "btn-primary"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 598.769 598.77", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 598.769 598.77"], ["d", "M161.196,253.695c16.274,6.884,33.538,10.374,51.31,10.374s35.035-3.49,51.31-10.374 c15.698-6.64,29.787-16.136,41.876-28.225c12.089-12.089,21.585-26.179,28.225-41.876c6.884-16.275,10.374-33.538,10.374-51.309 c0-17.772-3.49-35.035-10.374-51.31c-6.64-15.698-16.136-29.787-28.225-41.876c-12.089-12.089-26.178-21.585-41.876-28.225 C247.541,3.99,230.278,0.5,212.506,0.5s-35.035,3.49-51.31,10.374c-15.698,6.64-29.787,16.136-41.876,28.225 c-12.089,12.089-21.585,26.178-28.224,41.876c-6.884,16.275-10.374,33.538-10.374,51.31c0,17.771,3.49,35.035,10.374,51.309 c6.639,15.698,16.135,29.788,28.224,41.876C131.409,237.559,145.499,247.055,161.196,253.695z M212.506,43.34 c49.123,0,88.945,39.822,88.945,88.945c0,49.123-39.822,88.944-88.945,88.944s-88.944-39.822-88.944-88.944 C123.562,83.162,163.383,43.34,212.506,43.34z"], ["d", "M212.506,264.569c-17.84,0-35.168-3.503-51.504-10.414c-15.757-6.665-29.9-16.197-42.035-28.332 c-12.135-12.134-21.667-26.277-28.331-42.035c-6.91-16.336-10.414-33.664-10.414-51.504c0-17.839,3.503-35.167,10.414-51.504 c6.664-15.757,16.195-29.899,28.331-42.035c12.135-12.135,26.278-21.667,42.035-28.332C177.338,3.503,194.667,0,212.506,0 s35.168,3.503,51.504,10.414c15.757,6.664,29.899,16.197,42.035,28.332c12.135,12.134,21.667,26.277,28.332,42.035 c6.909,16.336,10.413,33.665,10.413,51.504c0,17.839-3.504,35.167-10.413,51.504c-6.666,15.758-16.198,29.901-28.332,42.035 c-12.135,12.135-26.278,21.667-42.035,28.332C247.674,261.065,230.346,264.569,212.506,264.569z M212.506,1 c-17.705,0-34.902,3.477-51.115,10.334c-15.638,6.614-29.674,16.075-41.718,28.118c-12.044,12.044-21.504,26.08-28.117,41.717 c-6.857,16.213-10.334,33.41-10.334,51.115c0,17.705,3.477,34.902,10.334,51.114c6.614,15.639,16.074,29.675,28.117,41.718 c12.043,12.043,26.08,21.503,41.718,28.118c16.212,6.857,33.41,10.334,51.115,10.334s34.902-3.477,51.115-10.334 c15.638-6.615,29.674-16.075,41.718-28.118c12.043-12.042,21.503-26.079,28.117-41.718c6.858-16.213,10.335-33.41,10.335-51.114 c0-17.705-3.477-34.902-10.335-51.115c-6.614-15.639-16.074-29.674-28.117-41.717c-12.044-12.044-26.08-21.504-41.718-28.118 C247.408,4.477,230.211,1,212.506,1z M212.506,221.729c-49.32,0-89.444-40.125-89.444-89.444s40.125-89.445,89.444-89.445 s89.445,40.125,89.445,89.445S261.826,221.729,212.506,221.729z M212.506,43.84c-48.769,0-88.444,39.676-88.444,88.445 s39.676,88.444,88.444,88.444s88.445-39.676,88.445-88.444S261.274,43.84,212.506,43.84z"], ["d", "M586.081,404.607c-7.023-16.604-17.067-31.506-29.855-44.293c-12.787-12.789-27.689-22.834-44.294-29.855 c-17.213-7.281-35.472-10.973-54.271-10.973s-37.059,3.693-54.271,10.973c-6.161,2.605-12.086,5.629-17.758,9.053 c-2.294-2.627-4.679-5.186-7.162-7.67c-14.042-14.043-30.405-25.072-48.636-32.782c-18.896-7.993-38.944-12.045-59.586-12.045 H154.764c-20.642,0-40.69,4.053-59.586,12.045c-18.23,7.71-34.593,18.739-48.635,32.782 c-14.042,14.041-25.071,30.404-32.781,48.635C5.769,399.373,1.716,419.42,1.716,440.062v73.625 c0,34.471,28.044,62.516,62.514,62.516h296.552c6.157,0,12.108-0.9,17.733-2.566c7.775,5.369,16.084,9.943,24.874,13.662 c17.213,7.279,35.473,10.971,54.271,10.971s37.059-3.691,54.271-10.971c16.604-7.023,31.507-17.068,44.294-29.855 c12.789-12.789,22.833-27.691,29.855-44.295c7.28-17.213,10.972-35.473,10.972-54.271S593.362,421.82,586.081,404.607z M457.661,555.43c-15.448,0-30.046-3.633-42.993-10.084c-6.449-3.213-12.487-7.123-18.017-11.637 c-6.143-5.014-11.659-10.766-16.408-17.127c-12.019-16.098-19.135-36.068-19.135-57.703c0-18.727,5.338-36.205,14.566-51.008 c4.422-7.092,9.737-13.57,15.791-19.273c5.317-5.01,11.202-9.422,17.55-13.133c14.285-8.348,30.905-13.137,48.646-13.137 c53.324,0,96.552,43.227,96.552,96.551S510.985,555.43,457.661,555.43z M64.23,533.363c-10.866,0-19.674-8.809-19.674-19.674 v-73.627c0-60.865,49.342-110.207,110.208-110.207h115.484c32.859,0,62.354,14.385,82.545,37.195 c-9.821,11.193-17.729,23.789-23.553,37.557c-7.28,17.213-10.972,35.473-10.972,54.271s3.69,37.059,10.972,54.271 c2.984,7.057,6.521,13.803,10.576,20.213H64.23z"], ["d", "M457.662,598.77c-18.865,0-37.19-3.704-54.466-11.01c-8.677-3.671-17.008-8.237-24.768-13.576 c-5.725,1.672-11.66,2.52-17.646,2.52H64.23c-34.746,0-63.014-28.269-63.014-63.016v-73.625c0-20.709,4.066-40.822,12.085-59.78 c7.735-18.29,18.8-34.706,32.888-48.794c14.088-14.089,30.505-25.154,48.794-32.889c18.958-8.019,39.072-12.084,59.781-12.084 h115.483c20.712,0,40.825,4.066,59.78,12.084c18.291,7.735,34.707,18.8,48.795,32.889c2.35,2.351,4.672,4.831,6.909,7.38 c5.578-3.345,11.451-6.328,17.463-8.87c17.278-7.307,35.604-11.012,54.466-11.012c18.866,0,37.191,3.705,54.465,11.012 c16.664,7.047,31.62,17.128,44.453,29.963c12.832,12.831,22.913,27.787,29.962,44.452c7.308,17.273,11.013,35.598,11.013,54.464 s-3.705,37.191-11.011,54.466c-7.048,16.664-17.129,31.62-29.963,44.454c-12.833,12.833-27.789,22.914-44.453,29.962 C494.852,595.065,476.528,598.77,457.662,598.77z M378.603,573.09l0.197,0.136c7.759,5.357,16.098,9.938,24.785,13.612 c17.151,7.254,35.345,10.932,54.076,10.932s36.925-3.678,54.076-10.932c16.544-6.997,31.393-17.007,44.135-29.748 c12.742-12.742,22.751-27.592,29.748-44.136c7.255-17.151,10.933-35.346,10.933-54.077s-3.679-36.925-10.934-54.075 c-6.998-16.545-17.007-31.394-29.748-44.134c-12.742-12.743-27.591-22.752-44.135-29.748 c-17.15-7.255-35.345-10.934-54.076-10.934c-18.728,0-36.922,3.679-54.077,10.934c-6.096,2.578-12.049,5.612-17.693,9.02 l-0.359,0.217l-0.276-0.315c-2.307-2.642-4.709-5.214-7.139-7.646c-13.996-13.997-30.306-24.99-48.477-32.675 c-18.832-7.966-38.814-12.005-59.392-12.005H154.764c-20.575,0-40.557,4.039-59.391,12.005 c-18.17,7.684-34.48,18.678-48.477,32.675c-13.997,13.996-24.99,30.306-32.674,48.476c-7.966,18.835-12.006,38.817-12.006,59.392 v73.625c0,34.195,27.819,62.016,62.014,62.016h296.552c5.97,0,11.888-0.856,17.592-2.546L378.603,573.09z M457.661,555.93 c-15.177,0-29.717-3.41-43.216-10.137c-6.438-3.207-12.531-7.143-18.11-11.696c-6.184-5.048-11.732-10.84-16.492-17.216 c-12.583-16.854-19.234-36.91-19.234-58.002c0-18.178,5.063-35.907,14.642-51.272c4.433-7.107,9.772-13.626,15.873-19.373 c5.359-5.049,11.294-9.49,17.641-13.2c14.783-8.639,31.691-13.205,48.897-13.205c53.515,0,97.052,43.537,97.052,97.051 S511.175,555.93,457.661,555.93z M457.661,362.828c-17.028,0-33.763,4.519-48.394,13.068c-6.28,3.672-12.154,8.067-17.459,13.065 c-6.038,5.688-11.323,12.139-15.71,19.174c-9.479,15.206-14.49,32.753-14.49,50.743c0,20.874,6.582,40.725,19.035,57.404 c4.711,6.31,10.203,12.043,16.324,17.038c5.521,4.508,11.552,8.402,17.923,11.577c13.359,6.656,27.749,10.031,42.771,10.031 c52.963,0,96.052-43.088,96.052-96.051S510.624,362.828,457.661,362.828z M340.725,533.863H64.23 c-11.124,0-20.174-9.05-20.174-20.174v-73.627c0-61.044,49.663-110.707,110.708-110.707h115.484 c31.678,0,61.901,13.618,82.919,37.364l0.292,0.33l-0.29,0.331c-9.788,11.154-17.684,23.745-23.468,37.421 c-7.255,17.151-10.933,35.346-10.933,54.077c0,18.734,3.678,36.928,10.932,54.077c2.949,6.973,6.495,13.749,10.539,20.14 L340.725,533.863z M154.764,330.355c-60.493,0-109.708,49.215-109.708,109.707v73.627c0,10.572,8.602,19.174,19.174,19.174 h274.682c-3.873-6.212-7.28-12.773-10.133-19.519c-7.306-17.272-11.011-35.597-11.011-54.466c0-18.866,3.705-37.191,11.011-54.466 c5.77-13.64,13.623-26.206,23.347-37.359c-20.816-23.329-50.632-36.698-81.878-36.698H154.764z"], ["d", "M504.745,437.459h-25.664v-25.664c0-11.83-9.591-21.42-21.42-21.42c-11.83,0-21.42,9.59-21.42,21.42v25.664h-12.977 h-12.688c-3.103,0-6.048,0.664-8.709,1.852c-7.487,3.338-12.711,10.84-12.711,19.568c0,8.73,5.227,16.236,12.72,19.572 c2.659,1.184,5.601,1.848,8.7,1.848h12.72h12.944v25.664c0,11.83,9.59,21.42,21.42,21.42c11.829,0,21.42-9.59,21.42-21.42v-25.664 h25.664c11.83,0,21.42-9.59,21.42-21.42S516.575,437.459,504.745,437.459z"], ["d", "M457.661,527.883c-12.087,0-21.92-9.833-21.92-21.92v-25.164h-25.164c-3.089,0-6.085-0.636-8.903-1.891 c-7.907-3.521-13.017-11.383-13.017-20.029c0-8.643,5.105-16.502,13.008-20.025c2.817-1.257,5.815-1.895,8.912-1.895h25.164 v-25.164c0-12.087,9.833-21.92,21.92-21.92s21.92,9.833,21.92,21.92v25.164h25.164c12.087,0,21.92,9.833,21.92,21.92 s-9.833,21.92-21.92,21.92h-25.164v25.164C479.581,518.05,469.748,527.883,457.661,527.883z M410.577,437.959 c-2.955,0-5.816,0.608-8.505,1.809c-7.542,3.361-12.415,10.863-12.415,19.111c0,8.252,4.876,15.756,12.423,19.115 c2.69,1.197,5.549,1.805,8.497,1.805h26.164v26.164c0,11.535,9.385,20.92,20.92,20.92s20.92-9.385,20.92-20.92v-26.164h26.164 c11.535,0,20.92-9.385,20.92-20.92s-9.385-20.92-20.92-20.92h-26.164v-26.164c0-11.535-9.385-20.92-20.92-20.92 s-20.92,9.385-20.92,20.92v26.164H410.577z"], [1, "download-mail", "text-center"], ["data-toggle", "modal", "data-target", "#myModalbutton", 1, "btn", "btn-primary"], ["clip-rule", "evenodd", "fill-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "2", "viewBox", "0 0 134 134", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m50 95.833v-14.583c0-1.657.658-3.247 1.831-4.419 1.172-1.173 2.761-1.831 4.419-1.831h20.833c1.658 0 3.248.658 4.42 1.831 1.172 1.172 1.83 2.762 1.83 4.419v14.583h2.324c2.671 0 5.055 1.673 5.964 4.184.909 2.51.148 5.322-1.903 7.031-5.798 4.831-15.417 12.848-18.991 15.826-2.352 1.96-5.769 1.96-8.121 0-3.573-2.978-13.193-10.995-18.99-15.826-2.052-1.709-2.813-4.521-1.904-7.031.909-2.511 3.294-4.184 5.964-4.184zm54.167-4.629c0-18.4 0-51.508 0-69.908 0-3.344-1.158-6.538-3.149-8.904-2.226-2.642-5.278-4.059-8.425-4.059-12.827 0-39.026 0-51.852 0-3.148 0-6.2 1.417-8.425 4.059-1.992 2.366-3.149 5.56-3.149 8.904v69.908c0 2.299 1.867 4.166 4.166 4.166 2.3 0 4.167-1.867 4.167-4.166 0-18.4 0-51.508 0-69.908 0-1.321.403-2.601 1.19-3.536.553-.657 1.269-1.093 2.051-1.093h51.852c.782 0 1.497.436 2.05 1.093.787.935 1.19 2.215 1.19 3.536v69.908c0 2.299 1.867 4.166 4.167 4.166s4.167-1.867 4.167-4.166zm-54.167-24.537h33.333c2.3 0 4.167-1.867 4.167-4.167s-1.867-4.167-4.167-4.167h-33.333c-2.3 0-4.167 1.867-4.167 4.167s1.867 4.167 4.167 4.167zm0-16.667h33.333c2.3 0 4.167-1.867 4.167-4.167 0-2.299-1.867-4.166-4.167-4.166h-33.333c-2.3 0-4.167 1.867-4.167 4.166 0 2.3 1.867 4.167 4.167 4.167zm0-16.667h25c2.3 0 4.167-1.867 4.167-4.166 0-2.3-1.867-4.167-4.167-4.167h-25c-2.3 0-4.167 1.867-4.167 4.167 0 2.299 1.867 4.166 4.167 4.166z"], ["class", "col-lg-3 col-md-4 col-sm-6 col-xs-12 hide", 4, "ngIf"], ["id", "myModalbutton", "role", "dialog", "data-backdrop", "static", "data-keyboard", "false", 1, "modal", "fade"], [1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", 1, "close"], [1, "modal-title"], [1, "modal-body"], [1, "text-center", "savepdf"], [1, "unstyled"], [3, "click"], ["height", "50px", "width", "50px", "version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "0 0 303.188 303.188", 0, "xml", "space", "preserve"], ["points", "219.821,0 32.842,0 32.842,303.188 270.346,303.188 270.346,50.525 \t", 2, "fill", "#E8E8E8"], ["d", "M230.013,149.935c-3.643-6.493-16.231-8.533-22.006-9.451c-4.552-0.724-9.199-0.94-13.803-0.936\n          c-3.615-0.024-7.177,0.154-10.693,0.354c-1.296,0.087-2.579,0.199-3.861,0.31c-1.314-1.36-2.584-2.765-3.813-4.202\n          c-7.82-9.257-14.134-19.755-19.279-30.664c1.366-5.271,2.459-10.772,3.119-16.485c1.205-10.427,1.619-22.31-2.288-32.251\n          c-1.349-3.431-4.946-7.608-9.096-5.528c-4.771,2.392-6.113,9.169-6.502,13.973c-0.313,3.883-0.094,7.776,0.558,11.594\n          c0.664,3.844,1.733,7.494,2.897,11.139c1.086,3.342,2.283,6.658,3.588,9.943c-0.828,2.586-1.707,5.127-2.63,7.603\n          c-2.152,5.643-4.479,11.004-6.717,16.161c-1.18,2.557-2.335,5.06-3.465,7.507c-3.576,7.855-7.458,15.566-11.815,23.02\n          c-10.163,3.585-19.283,7.741-26.857,12.625c-4.063,2.625-7.652,5.476-10.641,8.603c-2.822,2.952-5.69,6.783-5.941,11.024\n          c-0.141,2.394,0.807,4.717,2.768,6.137c2.697,2.015,6.271,1.881,9.4,1.225c10.25-2.15,18.121-10.961,24.824-18.387\n          c4.617-5.115,9.872-11.61,15.369-19.465c0.012-0.018,0.024-0.036,0.037-0.054c9.428-2.923,19.689-5.391,30.579-7.205\n          c4.975-0.825,10.082-1.5,15.291-1.974c3.663,3.431,7.621,6.555,11.939,9.164c3.363,2.069,6.94,3.816,10.684,5.119\n          c3.786,1.237,7.595,2.247,11.528,2.886c1.986,0.284,4.017,0.413,6.092,0.335c4.631-0.175,11.278-1.951,11.714-7.57\n          C231.127,152.765,230.756,151.257,230.013,149.935z M119.144,160.245c-2.169,3.36-4.261,6.382-6.232,9.041\n          c-4.827,6.568-10.34,14.369-18.322,17.286c-1.516,0.554-3.512,1.126-5.616,1.002c-1.874-0.11-3.722-0.937-3.637-3.065\n          c0.042-1.114,0.587-2.535,1.423-3.931c0.915-1.531,2.048-2.935,3.275-4.226c2.629-2.762,5.953-5.439,9.777-7.918\n          c5.865-3.805,12.867-7.23,20.672-10.286C120.035,158.858,119.587,159.564,119.144,160.245z M146.366,75.985\n          c-0.602-3.514-0.693-7.077-0.323-10.503c0.184-1.713,0.533-3.385,1.038-4.952c0.428-1.33,1.352-4.576,2.826-4.993\n          c2.43-0.688,3.177,4.529,3.452,6.005c1.566,8.396,0.186,17.733-1.693,25.969c-0.299,1.31-0.632,2.599-0.973,3.883\n          c-0.582-1.601-1.137-3.207-1.648-4.821C147.945,83.048,146.939,79.482,146.366,75.985z M163.049,142.265\n          c-9.13,1.48-17.815,3.419-25.979,5.708c0.983-0.275,5.475-8.788,6.477-10.555c4.721-8.315,8.583-17.042,11.358-26.197\n          c4.9,9.691,10.847,18.962,18.153,27.214c0.673,0.749,1.357,1.489,2.053,2.22C171.017,141.096,166.988,141.633,163.049,142.265z\n           M224.793,153.959c-0.334,1.805-4.189,2.837-5.988,3.121c-5.316,0.836-10.94,0.167-16.028-1.542\n          c-3.491-1.172-6.858-2.768-10.057-4.688c-3.18-1.921-6.155-4.181-8.936-6.673c3.429-0.206,6.9-0.341,10.388-0.275\n          c3.488,0.035,7.003,0.211,10.475,0.664c6.511,0.726,13.807,2.961,18.932,7.186C224.588,152.585,224.91,153.321,224.793,153.959z", 2, "fill", "#FB3449"], ["points", "227.64,25.263 32.842,25.263 32.842,0 219.821,0 \t", 2, "fill", "#FB3449"], ["d", "M126.841,241.152c0,5.361-1.58,9.501-4.742,12.421c-3.162,2.921-7.652,4.381-13.472,4.381h-3.643\n            v15.917H92.022v-47.979h16.606c6.06,0,10.611,1.324,13.652,3.971C125.321,232.51,126.841,236.273,126.841,241.152z\n             M104.985,247.387h2.363c1.947,0,3.495-0.546,4.644-1.641c1.149-1.094,1.723-2.604,1.723-4.529c0-3.238-1.794-4.857-5.382-4.857\n            h-3.348C104.985,236.36,104.985,247.387,104.985,247.387z", 2, "fill", "#A4A9AD"], ["d", "M175.215,248.864c0,8.007-2.205,14.177-6.613,18.509s-10.606,6.498-18.591,6.498h-15.523v-47.979\n            h16.606c7.701,0,13.646,1.969,17.836,5.907C173.119,235.737,175.215,241.426,175.215,248.864z M161.76,249.324\n            c0-4.398-0.87-7.657-2.609-9.78c-1.739-2.122-4.381-3.183-7.926-3.183h-3.773v26.877h2.888c3.939,0,6.826-1.143,8.664-3.43\n            C160.841,257.523,161.76,254.028,161.76,249.324z", 2, "fill", "#A4A9AD"], ["d", "M196.579,273.871h-12.766v-47.979h28.355v10.403h-15.589v9.156h14.374v10.403h-14.374\n            L196.579,273.871L196.579,273.871z", 2, "fill", "#A4A9AD"], ["points", "219.821,50.525 270.346,50.525 219.821,0 \t", 2, "fill", "#D1D3D3"], ["id", "myModal", 1, "modal"], [1, "row", "mb-15", 3, "formGroup"], [1, "col-lg-3", "col-md-6", "col-sm-12"], ["type", "text", "id", "firstName", "formControlName", "name", "placeholder", "Enter Name", "required", "", 1, "form-control"], ["type", "text", "id", "lastName", "formControlName", "companyName", "placeholder", "Enter Company Name", "required", "", 1, "form-control"], ["type", "text", "id", "homePhone", "formControlName", "emailId", "placeholder", "Enter Email ID", 1, "form-control"], ["type", "tel", "id", "homePhone", "formControlName", "phoneNumber", "placeholder", "Enter Phone Number", 1, "form-control"], [1, "modal-footer"], [1, "btn", "btn-secondary", "mr-10"], [1, "btn", "btn-primary", "mr-10", 3, "disabled", "click"], [1, "col-lg-3", "col-md-4", "col-sm-6", "col-xs-12", "hide"], [1, "front"], [1, "red"], [1, "head"], [1, "download"], ["id", "Capa_1", "enable-background", "new 0 0 512 512", "viewBox", "0 0 512 512", "xmlns", "http://www.w3.org/2000/svg"], ["d", "m439.219 129.831c-30.364-37.755-72.001-65.383-118.219-78.7v-36.131c0-8.284-6.716-15-15-15h-100c-8.284 0-15 6.716-15 15v36.131c-46.218 13.317-87.855 40.945-118.219 78.7-33.391 41.52-51.781 93.785-51.781 147.169 0 62.771 24.444 121.784 68.83 166.17s103.399 68.83 166.17 68.83 121.784-24.444 166.17-68.83 68.83-103.399 68.83-166.17c0-53.384-18.39-105.649-51.781-147.169zm-218.219-99.831h70v227c0 8.284 6.716 15 15 15h17.975l-67.975 81.569-67.975-81.569h17.975c8.284 0 15-6.716 15-15zm35 452c-113.038 0-205-91.962-205-205 0-47.245 15.616-91.633 45.159-128.368 24.671-30.676 57.856-53.686 94.841-66.088v159.456h-35c-5.82 0-11.115 3.367-13.584 8.638s-1.666 11.494 2.061 15.965l79.497 95.397h-67.974c-8.284 0-15 6.716-15 15s6.716 15 15 15h200c8.284 0 15-6.716 15-15s-6.716-15-15-15h-67.974l79.498-95.397c3.726-4.471 4.529-10.694 2.061-15.965-2.47-5.271-7.765-8.638-13.585-8.638h-35v-159.456c36.985 12.402 70.171 35.412 94.841 66.088 29.543 36.735 45.159 81.123 45.159 128.368 0 113.038-91.962 205-205 205z"], [1, "avatar"], [1, "img"], ["src", "https://raw.githubusercontent.com/MohcineDev/Business-Card/main/imgs/man.png", "alt", ""], [1, "infos"], ["version", "1.1", "id", "Capa_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 513.64 513.64", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 513.64 513.64"], ["d", "M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72\n                                  c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68\n                                  c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44\n                                  l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 50 50", "width", "50px", "height", "50px"], ["d", "M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"], ["d", "M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 512 512", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 512 512"], ["d", "M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5\n                                  c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021\n                                  C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333\n                                  s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"], [1, "infos", "infos-sub"], ["version", "1.1", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 452.84 452.84", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "enable-background", "new 0 0 452.84 452.84"], ["d", "m449.483,190.4l.001-.001-57.824-38.335v-128.134c0-4.142-3.358-7.5-7.5-7.5h-315.49c-4.142,0-7.5,3.358-7.5,7.5v128.143l-57.814,38.326 .001,.002c-2.022,1.343-3.357,3.639-3.357,6.249v232.26c0,4.142 3.358,7.5 7.5,7.5h437.84c4.142,0 7.5-3.358 7.5-7.5v-232.26c0-2.61-1.335-4.906-3.357-6.25zm-388.313,26.229l-23.525-12.479h23.525v12.479zm-46.17-7.511l172.475,91.49-172.475,114.327v-205.817zm211.417,83.671l194.037,128.621h-388.073l194.036-128.621zm38.945,7.82l172.477-91.491v205.821l-172.477-114.33zm126.298-96.459h23.536l-23.536,12.484v-12.484zm28.794-15h-28.794v-19.09l28.794,19.09zm-43.794-157.72v193.161l-125.527,66.586-20.573-13.637c-2.511-1.665-5.776-1.665-8.287,0l-20.57,13.635-125.533-66.589v-193.156h300.49zm-315.49,157.72h-28.782l28.782-19.08v19.08z"], ["d", "m226.415,213.671h59.754c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-59.754c-28.813,0-52.254-23.441-52.254-52.254v-2.213c0-28.813 23.441-52.254 52.254-52.254s52.254,23.441 52.254,52.254v5.533c0,6.237-5.074,11.312-11.312,11.312s-11.312-5.074-11.312-11.312v-10.512c0-17.864-14.533-32.398-32.397-32.398s-32.397,14.533-32.397,32.398c0,17.864 14.533,32.397 32.397,32.397 8.169,0 15.636-3.045 21.34-8.052 4.644,7.483 12.932,12.478 22.369,12.478 14.508,0 26.312-11.803 26.312-26.312v-5.533c0-37.084-30.17-67.254-67.254-67.254s-67.254,30.17-67.254,67.254v2.213c5.68434e-14,37.085 30.17,67.255 67.254,67.255zm-2.767-57.049c-9.593,0-17.397-7.804-17.397-17.397s7.805-17.398 17.397-17.398 17.397,7.805 17.397,17.398-7.804,17.397-17.397,17.397z"], ["version", "1.1", "id", "Layer_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 169.063 169.063", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 169.063 169.063"], ["d", "M122.406,0H46.654C20.929,0,0,20.93,0,46.655v75.752c0,25.726,20.929,46.655,46.654,46.655h75.752 c25.727,0,46.656-20.93,46.656-46.655V46.655C169.063,20.93,148.133,0,122.406,0z M154.063,122.407 c0,17.455-14.201,31.655-31.656,31.655H46.654C29.2,154.063,15,139.862,15,122.407V46.655C15,29.201,29.2,15,46.654,15h75.752 c17.455,0,31.656,14.201,31.656,31.655V122.407z"], ["d", "M84.531,40.97c-24.021,0-43.563,19.542-43.563,43.563c0,24.02,19.542,43.561,43.563,43.561s43.563-19.541,43.563-43.561 C128.094,60.512,108.552,40.97,84.531,40.97z M84.531,113.093c-15.749,0-28.563-12.812-28.563-28.561 c0-15.75,12.813-28.563,28.563-28.563s28.563,12.813,28.563,28.563C113.094,100.281,100.28,113.093,84.531,113.093z"], ["d", "M129.921,28.251c-2.89,0-5.729,1.17-7.77,3.22c-2.051,2.04-3.23,4.88-3.23,7.78c0,2.891,1.18,5.73,3.23,7.78 c2.04,2.04,4.88,3.22,7.77,3.22c2.9,0,5.73-1.18,7.78-3.22c2.05-2.05,3.22-4.89,3.22-7.78c0-2.9-1.17-5.74-3.22-7.78 C135.661,29.421,132.821,28.251,129.921,28.251z"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 64 64"], ["id", "Layer_26", "data-name", "Layer 26"], ["d", "M59,49.59V20a5,5,0,0,0-5-5H47.86A16,16,0,0,0,32.1,1H32A16,16,0,0,0,16.14,15H10a5,5,0,0,0-5,5V49.59l-3.71,3.7A1,1,0,0,0,1,54v4a5,5,0,0,0,5,5H58a5,5,0,0,0,5-5V54a1,1,0,0,0-.29-.71ZM57.59,51l2,2H4.41l2-2ZM21.45,7.83a15.58,15.58,0,0,0,3.67,2.55A20.05,20.05,0,0,0,24.05,16h-6A13.86,13.86,0,0,1,21.45,7.83ZM46,16H40a20.05,20.05,0,0,0-1.07-5.62,15.58,15.58,0,0,0,3.67-2.55A13.86,13.86,0,0,1,46,16Zm-21.9,2a20.05,20.05,0,0,0,1.07,5.62,15.58,15.58,0,0,0-3.67,2.55A13.86,13.86,0,0,1,18.05,18Zm7,11.58a18.58,18.58,0,0,1-3.29-4.87A13.07,13.07,0,0,1,31,24.05Zm2-5.53a13.07,13.07,0,0,1,3.29.66A18.26,18.26,0,0,1,33,29.55Zm0-2V18h5A18.34,18.34,0,0,1,37,22.85,15.58,15.58,0,0,0,33,22.05ZM33,16V12a15.58,15.58,0,0,0,4-.8A18.34,18.34,0,0,1,38,16ZM33,10V4.45a18.26,18.26,0,0,1,3.29,4.84A13.07,13.07,0,0,1,33,10Zm-2,0a13.07,13.07,0,0,1-3.29-.66A18.58,18.58,0,0,1,31,4.42Zm0,2V16H26.05A18.34,18.34,0,0,1,27,11.15,15.58,15.58,0,0,0,31,12ZM31,18v4.05a15.58,15.58,0,0,0-4,.8A18.34,18.34,0,0,1,26.05,18Zm-5.13,7.48a20.41,20.41,0,0,0,3.52,5.27,14,14,0,0,1-6.52-3.16A13.13,13.13,0,0,1,25.87,25.48Zm12.26,0a13.13,13.13,0,0,1,3,2.11,14,14,0,0,1-6.52,3.16A20.41,20.41,0,0,0,38.13,25.48Zm4.42.69a15.58,15.58,0,0,0-3.67-2.55A20.05,20.05,0,0,0,40,18h6A13.86,13.86,0,0,1,42.55,26.17ZM38.13,8.52a20.41,20.41,0,0,0-3.52-5.27,14,14,0,0,1,6.52,3.16A13.13,13.13,0,0,1,38.13,8.52Zm-12.26,0a13.13,13.13,0,0,1-3-2.11,14,14,0,0,1,6.52-3.16A20.41,20.41,0,0,0,25.87,8.52ZM32,33A16,16,0,0,0,47.47,21H53V45H11V21h5.53A16,16,0,0,0,32,33ZM10,17h6a16.52,16.52,0,0,0,.14,2H10a1,1,0,0,0-1,1V46a1,1,0,0,0,1,1H54a1,1,0,0,0,1-1V20a1,1,0,0,0-1-1H47.86A16.52,16.52,0,0,0,48,17h6a3,3,0,0,1,3,3V49H7V20A3,3,0,0,1,10,17ZM58,61H6a3,3,0,0,1-3-3V55H61v3A3,3,0,0,1,58,61Z"], ["d", "M19.71,43a1,1,0,0,0,1.12-.41L22,40.8l1.17,1.75A1,1,0,0,0,24,43a1,1,0,0,0,.29,0A1,1,0,0,0,25,42V36H23v2.7l-.17-.25a1,1,0,0,0-1.66,0L21,38.7V36H19v6A1,1,0,0,0,19.71,43Z"], ["d", "M27.71,43a1,1,0,0,0,1.12-.41L30,40.8l1.17,1.75A1,1,0,0,0,32,43a1,1,0,0,0,.29,0A1,1,0,0,0,33,42V36H31v2.7l-.17-.25a1,1,0,0,0-1.66,0L29,38.7V36H27v6A1,1,0,0,0,27.71,43Z"], ["d", "M35.71,43a1,1,0,0,0,1.12-.41L38,40.8l1.17,1.75A1,1,0,0,0,40,43a1,1,0,0,0,.29,0A1,1,0,0,0,41,42V36H39v2.7l-.17-.25a1,1,0,0,0-1.66,0L37,38.7V36H35v6A1,1,0,0,0,35.71,43Z"], ["x", "43", "y", "41", "width", "2", "height", "2"], ["d", "M50,10h5v2a1,1,0,0,0,.58.91A1,1,0,0,0,56,13a1,1,0,0,0,.64-.23l6-5a1,1,0,0,0,0-1.54l-6-5A1,1,0,0,0,55,2V4H50a1,1,0,0,0-1,1V9A1,1,0,0,0,50,10Zm1-4h5a1,1,0,0,0,1-1V4.13L60.44,7,57,9.87V9a1,1,0,0,0-1-1H51Z"], ["d", "M7.36,12.77A1,1,0,0,0,8,13a1,1,0,0,0,.42-.09A1,1,0,0,0,9,12V10h5a1,1,0,0,0,1-1V5a1,1,0,0,0-1-1H9V2a1,1,0,0,0-1.64-.77l-6,5a1,1,0,0,0,0,1.54ZM7,4.13V5A1,1,0,0,0,8,6h5V8H8A1,1,0,0,0,7,9v.87L3.56,7Z"], [1, "red", "violet"], [1, "btn", "btn-primary", 3, "click"], [1, "img", "violet"], [1, "infos", "violet"], [1, "infos", "infos-sub", "violet"], [1, "red", "blue"], [1, "btn", "btn-primary", "blue", 3, "click"], [1, "img", "blue"], [1, "infos", "blue"], [1, "infos", "infos-sub", "blue"]],
      template: function CardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "First Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "input", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 1)(6, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Last Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1)(10, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Home Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1)(14, "label", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Work Phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "input", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 1)(18, "label", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Email address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "input", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 1)(22, "label", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Workplace");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "input", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 1)(26, "label", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Address");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "textarea", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16)(30, "div", 17)(31, "div", 18)(32, "div", 19)(33, "div", 20)(34, "div", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "span", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "h3")(37, "span", 23);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "3G");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "SURGICAL");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "INDUSTRIES PVT LTD");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Manufacturer of Medical ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Disposable Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 25)(48, "div", 26)(49, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "img", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 29)(52, "div", 30)(53, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "P.A.Ayyappan");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "CEO");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "+91 9940070845");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 30)(60, "h5");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p")(65, "a", 31);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 32)(68, "div", 33)(69, "div", 34)(70, "div", 35)(71, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 38)(74, "h4", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, "\"A.K.ILLAM\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](77, "#39/42, Shop 1, Pycrafts 1st Cross St, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, " Royapettah, Chennai-600 014.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "div", 34)(81, "div", 35)(82, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](83, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](84, "div", 38)(85, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "sales.3gsipl@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "div", 34)(88, "div", 35)(89, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](90, "i", 41);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "div", 38)(92, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "+91 9962715737");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 42)(95, "div", 33)(96, "div", 34)(97, "div", 35)(98, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](99, "i", 37);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "div", 38)(101, "h4", 39);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "\"3G In House\"");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " DP No 315");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](106, "Sidco Women Industrial Park,Vellanur");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](107, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, " Village, Thirumullaivoyal, ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](110, "Chennai-600 062.");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 34)(112, "div", 35)(113, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i", 40);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "div", 38)(116, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](117, "3gsipl@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 34)(119, "div", 35)(120, "a", 36);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 43);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 38)(123, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](124, "www.3gsipl.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 44)(126, "button", 45);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "svg", 46)(128, "g")(129, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "path", 47)(131, "path", 48);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](133, "path", 49)(134, "path", 50);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](135, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](136, "path", 51)(137, "path", 52);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 53)(139, "button", 54);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "svg", 55);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](141, "path", 56);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](142, CardComponent_div_142_Template, 86, 18, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](143, CardComponent_div_143_Template, 86, 18, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, CardComponent_div_144_Template, 86, 18, "div", 57);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 58)(146, "div", 59)(147, "div", 60)(148, "div", 61)(149, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](150, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "h4", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Download");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 64)(154, "div", 65)(155, "ul", 66)(156, "li")(157, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_Template_a_click_157_listener() {
            return ctx.downloadPdf();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "svg", 68)(159, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](160, "polygon", 69)(161, "path", 70)(162, "polygon", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](164, "path", 72)(165, "path", 73)(166, "path", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "polygon", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "Medical Disposable Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "li")(171, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_Template_a_click_171_listener() {
            return ctx.downloadPdf1();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "svg", 68)(173, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](174, "polygon", 69)(175, "path", 70)(176, "polygon", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](178, "path", 72)(179, "path", 73)(180, "path", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](181, "polygon", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](183, "Medical Apparel Disposable");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "li")(185, "a", 67);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_Template_a_click_185_listener() {
            return ctx.downloadPdf2();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "svg", 68)(187, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](188, "polygon", 69)(189, "path", 70)(190, "polygon", 71);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "g");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "path", 72)(193, "path", 73)(194, "path", 74);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](195, "polygon", 75);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Medical Apparel Reusable");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "div", 76)(199, "div", 59)(200, "div", 60)(201, "div", 61)(202, "h4", 63);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](203, "Share Your Contact Details");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](204, "button", 62);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](205, "\u00D7");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](206, "div", 64)(207, "div")(208, "div", 77)(209, "div", 78)(210, "div", 1)(211, "label", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](212, "Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](213, "input", 79);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](214, "div", 78)(215, "div", 1)(216, "label", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](217, "Company Name");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](218, "input", 80);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](219, "div", 78)(220, "div", 1)(221, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](222, "Email ID");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](223, "input", 81);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](224, "div", 78)(225, "div", 1)(226, "label", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](227, "Phone Number");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "input", 82);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "div", 83)(230, "button", 84);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](231, "Cancel");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](232, "button", 85);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CardComponent_Template_button_click_232_listener() {
            return ctx.saveUserDetails();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](233, "Save and Download ");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactDetailsForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](33);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.selectedTheme);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](28);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.name);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.jobtitle);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", "tel:+91" + (ctx.userDetails == null ? null : ctx.userDetails.mobile), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.userDetails == null ? null : ctx.userDetails.mobile);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](76);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardColor === "red");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardColor === "violet");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cardColor === "blue");
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](64);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.contactSaveForm);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.contactSaveForm.invalid);
        }
      },
      dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
      styles: ["@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300[_ngcontent-%COMP%];400[_ngcontent-%COMP%];500[_ngcontent-%COMP%];700[_ngcontent-%COMP%];900&display=swap)[_ngcontent-%COMP%];\n\n.container[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.card[_ngcontent-%COMP%] {\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n}\n\n.card-header[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #dee2e6;\n  padding: 10px 15px;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n  font-family: Roboto, Arial, Helvetica, sans-serif;\n  position: relative;\n}\n\n.credit[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 15px;\n  right: 10px;\n  border-radius: 10px;\n  padding: 10px;\n  background-color: rgb(248, 92, 113);\n  cursor: pointer;\n  z-index: 2;\n  overflow: hidden;\n}\n.credit[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #eee;\n  padding: 10px;\n}\n.credit[_ngcontent-%COMP%]:after {\n  box-sizing: border-box;\n  content: \"\";\n  border: 8px solid;\n  border-color: transparent transparent transparent #eee;\n  width: 8px;\n  height: 8px;\n  position: absolute;\n  right: 1px;\n  top: 50%;\n  transform: translateY(-50%);\n  transition: all 0.5s;\n}\n.credit[_ngcontent-%COMP%]:hover::after {\n  right: -3px;\n}\n.credit[_ngcontent-%COMP%]:hover   .test[_ngcontent-%COMP%] {\n  left: 0;\n}\n\n.test[_ngcontent-%COMP%] {\n  background-color: #1769ff;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: -100%;\n  transition: 0.5s ease-in-out;\n  z-index: -1;\n}\n\n.business2[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  background-color: #131417;\n  padding: 15px;\n}\n.business2[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n  background-color: var(--dark);\n  width: 100%;\n  height: 450px;\n  border-radius: 25px;\n  overflow: hidden;\n  position: relative;\n  margin-top: 35px;\n}\n.business2[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  background-color: var(--dark);\n  width: 100%;\n  height: 450px;\n  border-radius: 25px;\n  overflow: hidden;\n  position: relative;\n  margin-top: 35px;\n}\n.business2[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  height: 70%;\n  background: url(\"https://raw.githubusercontent.com/MohcineDev/Business-Card/main/imgs/e.webp\") center;\n  filter: contrast(160%);\n  position: relative;\n  position: relative;\n}\n.business2[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  z-index: 10;\n  background: linear-gradient(rgba(71, 11, 11, 0.8), rgba(240, 8, 8, 0.5));\n}\n.business2[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  top: 40%;\n  left: 19%;\n  z-index: 11;\n  filter: contrast(80%);\n  text-transform: uppercase;\n}\n.business2[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n  margin: 10px;\n}\n.business2[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 30%;\n  color: var(--red);\n}\n.business2[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 50px;\n}\n.business2[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #eee;\n}\n.business2[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #eee;\n}\n.business2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #eee;\n}\n.business2[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  height: 45%;\n  background-color: var(--red);\n  transform: rotate(17deg);\n  margin-top: -44px;\n  width: 480px;\n}\n.business2[_ngcontent-%COMP%]   .red.violet[_ngcontent-%COMP%] {\n  background-color: #d1226b;\n}\n.business2[_ngcontent-%COMP%]   .red.blue[_ngcontent-%COMP%] {\n  background-color: #13a4dd;\n}\n.business2[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 25px 0;\n}\n.business2[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 40px;\n}\n.business2[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0 10px;\n  text-transform: uppercase;\n}\n.business2[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n}\n.business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 35px;\n  right: 40px;\n}\n.business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #fff;\n  border-radius: 50%;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n}\n.business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: rgb(248, 92, 113);\n}\n.business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .btn.blue[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #13a4dd;\n}\n.business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%]   .btn.violet[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #d1226b;\n}\n.business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 40px;\n  left: 40px;\n}\n.business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-color: #fff;\n  border-radius: 50%;\n  height: 45px;\n  width: 45px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 8px;\n}\n.business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: rgb(248, 92, 113);\n}\n.business2[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  left: 50%;\n  top: 50px;\n  transform: translate(-50%);\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: end;\n  align-items: center;\n}\n.business2[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:nth-of-type(1) {\n  text-transform: uppercase;\n  font-weight: 900;\n}\n.business2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  background-color: #ffb7a7;\n  padding: 10px;\n  box-sizing: border-box;\n  border-radius: 50%;\n  border: 6px solid var(--dark);\n  height: 100%;\n  width: 35%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.business2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80%;\n  padding: 10px 0;\n}\n.business2[_ngcontent-%COMP%]   .img.violet[_ngcontent-%COMP%] {\n  background-color: #f3b9d1;\n}\n.business2[_ngcontent-%COMP%]   .img.blue[_ngcontent-%COMP%] {\n  background-color: #9edbf3;\n}\n.business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: auto;\n  top: 53%;\n  left: 3%;\n  width: 50%;\n}\n.business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 10px 5px;\n  align-items: center;\n}\n.business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n  background-color: var(--red);\n  padding: 8px;\n  border-radius: 7px;\n  fill: #fff;\n}\n.business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin: 5px 0;\n  font-weight: 500;\n  word-break: break-all;\n  word-wrap: break-word;\n}\n.business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n  text-decoration: underline;\n}\n.business2[_ngcontent-%COMP%]   .infos.infos-sub[_ngcontent-%COMP%] {\n  right: 3%;\n  left: 53%;\n  width: 47%;\n}\n.business2[_ngcontent-%COMP%]   .infos.violet[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  background-color: #d1226b;\n}\n.business2[_ngcontent-%COMP%]   .infos.blue[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  background-color: #13a4dd;\n}\n.business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 90%;\n  height: auto;\n  border-radius: 25px;\n  margin: 20px auto 30px;\n  padding: 20px;\n}\n.business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%]   .center-align[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%]   .center-align[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 150px;\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;\n  border-radius: 50%;\n  padding: 25px;\n  border: 1px solid #d7242a;\n  margin-top: -100px;\n}\n.business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%]   .center-align[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%]   .name-tag[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%]   .name-tag[_ngcontent-%COMP%]   .sec-1[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #d7242a;\n  font-size: 16px;\n  font-weight: 700;\n  margin-bottom: 5px;\n}\n.business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%]   .name-tag[_ngcontent-%COMP%]   .sec-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333;\n}\n.business2[_ngcontent-%COMP%]   .greenCard[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  width: 90%;\n  height: 240px;\n  border-radius: 25px;\n  overflow: hidden;\n  margin: 15px auto 0px;\n  padding: 0px;\n}\n.business2[_ngcontent-%COMP%]   .greenCard[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n}\n.business2[_ngcontent-%COMP%]   .blueCard[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  background-color: #37a9f4;\n}\n.business2[_ngcontent-%COMP%]   .blueCard[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%] {\n  background-color: #37a9f4;\n}\n.business2[_ngcontent-%COMP%]   .pinkCard[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  background-color: #f88df3;\n  width: 90%;\n  height: 240px;\n  border-radius: 25px;\n  overflow: hidden;\n  margin: 15px auto 0px;\n  padding: 0px;\n}\n.business2[_ngcontent-%COMP%]   .pinkCard[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%] {\n  background-color: #f88df3;\n}\n.business2[_ngcontent-%COMP%]   .whiteCard[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 90%;\n  height: 240px;\n  border-radius: 25px;\n  overflow: hidden;\n  margin: 15px auto 0px;\n  padding: 0px;\n}\n.business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 90%;\n  height: 240px;\n  border-radius: 25px;\n  overflow: hidden;\n  margin: 15px auto 0px;\n  padding: 0px;\n}\n.business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 20px;\n  font-weight: 800;\n  margin-top: 20px;\n}\n.business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .col-red[_ngcontent-%COMP%] {\n  color: #d7242a;\n  margin-right: 8px;\n}\n.business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .blue[_ngcontent-%COMP%] {\n  color: #1769ff;\n}\n.business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 15px;\n  color: #555;\n  margin-top: 15px;\n}\n.business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 500;\n}\n.business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   .black[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 70%;\n  background-color: #131417;\n  display: block;\n  margin: 0 auto;\n  border-bottom-right-radius: 30px;\n  border-bottom-left-radius: 30px;\n}\n.business2[_ngcontent-%COMP%]   .box-bg[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n.business2[_ngcontent-%COMP%]   .box-bg[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-left[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n.business2[_ngcontent-%COMP%]   .box-bg[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #d72429;\n  height: 30px;\n  width: 30px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n}\n.business2[_ngcontent-%COMP%]   .box-bg[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-left[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #fff;\n}\n.business2[_ngcontent-%COMP%]   .box-bg[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .media-heading[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n.business2[_ngcontent-%COMP%]   .box-bg[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   .media-heading[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #333;\n  font-weight: 400;\n}\n.business2[_ngcontent-%COMP%]   .box-bg[_ngcontent-%COMP%]   .media[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #333;\n  font-weight: 400;\n}\n\n.webicon[_ngcontent-%COMP%] {\n  background-color: var(--dark);\n  border-radius: 50%;\n  width: 70%;\n  padding: 20px 0;\n  position: absolute;\n  top: calc(70% - 40px);\n  left: 15%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.webicon[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: var(--red);\n  border-radius: 50%;\n  padding: 5px 4px 2px 5px;\n}\n\n.flex-align[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n@media (max-width: 768px) {\n  .container[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  .card[_ngcontent-%COMP%] {\n    margin: 10px;\n  }\n}\n@media (min-width: 320px) and (max-width: 1400px) {\n  .business2[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n    margin-top: -55px;\n  }\n  .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%] {\n    top: 48%;\n  }\n  .business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    top: 35px;\n    right: 20px;\n  }\n  .business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 20px;\n  }\n  .business2[_ngcontent-%COMP%]   .savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 35px;\n  }\n  .business2[_ngcontent-%COMP%]   .savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n@media (min-width: 320px) and (max-width: 1199px) {\n  .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%] {\n    top: 50%;\n  }\n}\n@media (min-width: 320px) and (max-width: 992px) {\n  .business2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: 30%;\n  }\n  .business2[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n    width: 550px;\n  }\n  .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%] {\n    top: 52%;\n  }\n  .business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%] {\n    width: 93%;\n  }\n  .business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 93%;\n  }\n  .business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    top: 35px;\n    right: 40px;\n  }\n  .business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 40px;\n  }\n}\n@media (min-width: 320px) and (max-width: 767px) {\n  .business2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n  .business2[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n    width: 600px;\n    margin-top: -65px;\n  }\n  .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%] {\n    top: 54%;\n  }\n  .business2[_ngcontent-%COMP%]   .col-xs-12[_ngcontent-%COMP%] {\n    width: 75%;\n  }\n  .business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .business2[_ngcontent-%COMP%]   .mob-align[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .business2[_ngcontent-%COMP%]   .media-body[_ngcontent-%COMP%] {\n    width: auto;\n  }\n  .business2[_ngcontent-%COMP%]   .savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    display: block;\n  }\n  .business2[_ngcontent-%COMP%]   .savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin-right: 0px;\n    margin-bottom: 20px;\n  }\n  .business2[_ngcontent-%COMP%]   .savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    top: 35px;\n    right: 30px;\n  }\n  .business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 30px;\n  }\n}\n@media (min-width: 320px) and (max-width: 567px) {\n  .business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 27px;\n  }\n  .business2[_ngcontent-%COMP%]   .first-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 2px;\n  }\n  .business2[_ngcontent-%COMP%]   .front[_ngcontent-%COMP%] {\n    height: 100vh;\n    margin-bottom: 35px;\n  }\n  .business2[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n    margin-top: -90px;\n  }\n  .business2[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n    top: 12%;\n  }\n  .business2[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n    width: 35%;\n  }\n  .business2[_ngcontent-%COMP%]   .download[_ngcontent-%COMP%] {\n    top: 35px;\n    right: 20px;\n  }\n  .business2[_ngcontent-%COMP%]   .download-mail[_ngcontent-%COMP%] {\n    top: 40px;\n    left: 20px;\n  }\n  .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%] {\n    position: unset;\n    width: 100%;\n    margin-top: 20%;\n    margin-left: 20px;\n  }\n  .business2[_ngcontent-%COMP%]   .infos[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .business2[_ngcontent-%COMP%]   .infos.infos-sub[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-top: 10px;\n  }\n  .business2[_ngcontent-%COMP%]   .mob-align[_ngcontent-%COMP%] {\n    padding-left: 0px;\n    padding-right: 0px;\n  }\n  .business2[_ngcontent-%COMP%]   .surgical-card[_ngcontent-%COMP%]   .center-align[_ngcontent-%COMP%]   .source[_ngcontent-%COMP%] {\n    height: 120px;\n    width: 120px;\n  }\n  .business2[_ngcontent-%COMP%]   .col-xs-12[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .surgical-card[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 100% !important;\n    padding: 10px !important;\n  }\n  .surgical-card[_ngcontent-%COMP%]   .sec-1[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    text-align: left;\n    margin-bottom: 0;\n  }\n  .surgical-card[_ngcontent-%COMP%]   .sec-1[_ngcontent-%COMP%]:last-child {\n    text-align: right !important;\n  }\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.mb-10[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.mr-10[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding-left: 0px;\n  display: flex;\n  justify-content: center;\n}\n.savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-right: 25px;\n}\n.savepdf[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n}\n\n.media[_ngcontent-%COMP%] {\n  margin-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGFnZXMvZGlnaWNhcmQvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1CQSxRQUFBO0FBQ0E7RUFDQyxnQkFBQTtBQWpCRDs7QUFtQkE7RUFDQyx3Q0FBQTtBQWhCRDs7QUFrQkE7RUFDQyx5QkF4Qm9CO0VBeUJwQixnQ0FBQTtFQUNBLGtCQUFBO0FBZkQ7O0FBaUJBO0VBQ0MsYUFBQTtBQWREOztBQWlCQTtFQUNDLFNBQUE7RUFDQSxpREFuQ2U7RUFvQ2Ysa0JBQUE7QUFkRDs7QUFnQkE7RUFDQyxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBMUNvQjtFQTJDcEIsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQWJEO0FBY0M7RUFDQyxxQkFBQTtFQUNBLFdBcERRO0VBcURSLGFBQUE7QUFaRjtBQWNDO0VBQ0Msc0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxzREEzQ2U7RUE0Q2YsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxvQkFBQTtBQVpGO0FBZUU7RUFDQyxXQUFBO0FBYkg7QUFlRTtFQUNDLE9BQUE7QUFiSDs7QUFpQkE7RUFDQyx5QkF6RW9CO0VBMEVwQixXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7QUFkRDs7QUFnQkE7RUFJQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXZGb0I7RUF3RnBCLGFBQUE7QUFoQkQ7QUFpQkM7RUFDQyw2QkF6Rm1CO0VBMEZuQixXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZkY7QUFpQkM7RUFDQyw2QkFsR21CO0VBbUduQixXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBZkY7QUFnQkU7RUFDQyxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EscUdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFkSDtBQWVHO0VBQ0MsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0Esd0VBQUE7QUFiSjtBQWVHO0VBS0Msa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFqQko7QUFLSTtFQUNDLFdBQUE7RUFDQSxZQUFBO0FBSEw7QUFnQkU7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFsSk87QUFvSVY7QUFpQkM7RUFDQyxXQUFBO0FBZkY7QUFpQkM7RUFDQyxTQUFBO0VBQ0EsV0EzSlE7QUE0SVY7QUFpQkM7RUFDQyxTQUFBO0VBQ0EsV0EvSlE7QUFnSlY7QUFpQkM7RUFDQyxTQUFBO0VBQ0EsV0FuS1E7QUFvSlY7QUFpQkM7RUFDQyxXQUFBO0VBQ0EsNEJBL0ptQjtFQWdLakIsd0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFmSjtBQWlCSTtFQUNFLHlCQWxLZTtBQW1KckI7QUFpQkk7RUFDRSx5QkFuS2dCO0FBb0p0QjtBQWtCQztFQUNDLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFoQkY7QUFpQkU7RUFDQyxXQUFBO0FBZkg7QUFpQkU7RUFDQyxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQWZIO0FBZ0JHO0VBQ0MsaUJBQUE7RUFDQSxnQkFBQTtBQWRKO0FBa0JFO0VBQ0Usa0JBQUE7RUFDSCxTQUFBO0VBQ0csV0FBQTtBQWhCSjtBQWtCSTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBaEJOO0FBaUJHO0VBQ0QsYUFBQTtBQWZGO0FBaUJNO0VBQ0UsdUJBbk5hO0FBb01yQjtBQW1CUTtFQUNFLGFBL01ZO0FBOEx0QjtBQXFCUTtFQUNFLGFBdE5XO0FBbU1yQjtBQXlCRTtFQUNELGtCQUFBO0VBQ0EsU0FBQTtFQUNHLFVBQUE7QUF2Qko7QUF5QkM7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtBQXZCSDtBQXdCRztFQUNELGFBQUE7QUF0QkY7QUF3Qkc7RUFDRCx1QkF0UG1CO0FBZ09yQjtBQTJCQztFQUNDLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUF6QkY7QUEyQkc7RUFDQyx5QkFBQTtFQUNBLGdCQUFBO0FBekJKO0FBNkJDO0VBQ0MseUJBeFFtQjtFQXlRbkIsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUEzQkY7QUE0QkU7RUFDQyxVQUFBO0VBQ0EsZUFBQTtBQTFCSDtBQTRCSTtFQUNFLHlCQXJSZ0I7QUEyUHRCO0FBNEJJO0VBQ0UseUJBdFJnQjtBQTRQdEI7QUE2QkM7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDRSxRQUFBO0VBQ0YsUUFBQTtFQUNFLFVBQUE7QUEzQko7QUE0QkU7RUFDQyxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQTFCSDtBQTJCRztFQUNDLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw0QkE3U2lCO0VBOFNqQixZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBekJKO0FBMkJHO0VBQ0MsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUF6Qko7QUEwQkk7RUFDQyxXQUFBO0FBeEJMO0FBeUJLO0VBR0MsMEJBQUE7QUF6Qk47QUErQkk7RUFDRSxTQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUE3Qk47QUFrQ1E7RUFDRSx5QkF6VVc7QUF5U3JCO0FBc0NRO0VBQ0UseUJBOVVZO0FBMFN0QjtBQTBDQztFQUNDLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQXhDRjtBQTBDRTtFQUNDLGFBQUE7RUFDQSx1QkFBQTtBQXhDSDtBQXlDRztFQUNDLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnREFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUF2Q0o7QUF5Q0k7RUFDQyxZQUFBO0VBQ0EsV0FBQTtBQXZDTDtBQTRDRTtFQUNDLGtCQUFBO0FBMUNIO0FBNENJO0VBQ0MsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBMUNMO0FBNENJO0VBQ0MsZUFBQTtFQUNBLFdBQUE7QUExQ0w7QUFnREU7RUFDQSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQTlDRjtBQWdEQztFQUNBLHlCQUFBO0FBOUNEO0FBa0RFO0VBQ0EseUJBQUE7QUFoREY7QUFrREM7RUFDQSx5QkFBQTtBQWhERDtBQW9EQztFQUNDLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBbERGO0FBb0RDO0VBQ0EseUJBQUE7QUFsREQ7QUFzREU7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQXBERjtBQXVEQztFQUNDLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FBckRGO0FBdURFO0VBQ0Msa0JBQUE7RUFDQSxlQUFBO0VBQ0csZ0JBQUE7RUFDSCxnQkFBQTtBQXJESDtBQXNERztFQUNDLGNBQUE7RUFDQSxpQkFBQTtBQXBESjtBQXVERztFQUNDLGNBQUE7QUFyREo7QUF3REU7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF0REg7QUF3REU7RUFDQyxrQkFBQTtFQUNBLGVBQUE7RUFDRyxnQkFBQTtBQXRETjtBQXdERTtFQUNDLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsK0JBQUE7QUF0REg7QUEwREM7RUFDQyxnQkFBQTtBQXhERjtBQTBERztFQUNDLG1CQUFBO0FBeERKO0FBeURJO0VBQ0MsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBdkRMO0FBd0RLO0VBQ0MsZUFBQTtFQUNHLFdBQUE7QUF0RFQ7QUEyREk7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBekRMO0FBMERLO0VBQ0MsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQXhETjtBQTJESTtFQUNDLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF6REw7O0FBK0RBO0VBQ0MsNkJBM2dCb0I7RUE0Z0JwQixrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQTVERDtBQTZEQztFQUNDLDRCQXJoQm1CO0VBc2hCbkIsa0JBQUE7RUFDQSx3QkFBQTtBQTNERjs7QUErREE7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQTVERDs7QUE4REE7RUFDQztJQUNDLGFBQUE7RUEzREE7RUE2REQ7SUFDQyxZQUFBO0VBM0RBO0FBQ0Y7QUErREE7RUFFRTtJQUNDLGlCQUFBO0VBOUREO0VBZ0VBO0lBQ0MsUUFBQTtFQTlERDtFQWlFQTtJQUNDLFdBQUE7RUEvREQ7RUFpRUE7SUFDQyxXQUFBO0VBL0REO0VBaUVBO0lBQ0MsU0FBQTtJQUNHLFdBQUE7RUEvREo7RUFpRUE7SUFDQyxTQUFBO0lBQ0csVUFBQTtFQS9ESjtFQW9FRTtJQUNDLGtCQUFBO0VBbEVIO0VBb0VJO0lBQ0MsZUFBQTtFQWxFTDtBQUNGO0FBMEVBO0VBRUU7SUFDQyxRQUFBO0VBekVEO0FBQ0Y7QUE2RUE7RUFFRTtJQUNDLFVBQUE7RUE1RUQ7RUE4RUE7SUFDQyxZQUFBO0VBNUVEO0VBOEVBO0lBQ0MsUUFBQTtFQTVFRDtFQStFQTtJQUNDLFVBQUE7RUE3RUQ7RUErRUE7SUFDQyxVQUFBO0VBN0VEO0VBK0VBO0lBQ0MsU0FBQTtJQUNHLFdBQUE7RUE3RUo7RUErRUE7SUFDQyxTQUFBO0lBQ00sVUFBQTtFQTdFUDtBQUNGO0FBaUZBO0VBRUU7SUFDQyxVQUFBO0VBaEZEO0VBa0ZBO0lBQ0MsWUFBQTtJQUNBLGlCQUFBO0VBaEZEO0VBa0ZBO0lBQ0MsUUFBQTtFQWhGRDtFQWtGQTtJQUNDLFVBQUE7RUFoRkQ7RUFtRkE7SUFDQyxXQUFBO0VBakZEO0VBbUZBO0lBQ0MsV0FBQTtFQWpGRDtFQW9GQTtJQUNDLGtCQUFBO0lBQ1MsbUJBQUE7RUFsRlY7RUFxRkE7SUFDQyxXQUFBO0VBbkZEO0VBc0ZDO0lBQ0MsY0FBQTtFQXBGRjtFQXFGRTtJQUNDLGlCQUFBO0lBQ0EsbUJBQUE7RUFuRkg7RUFxRkk7SUFDQyxlQUFBO0VBbkZMO0VBeUZBO0lBQ0MsU0FBQTtJQUNNLFdBQUE7RUF2RlA7RUF5RkE7SUFDQyxTQUFBO0lBQ00sVUFBQTtFQXZGUDtBQUNGO0FBMkZBO0VBR0c7SUFDQyxlQUFBO0VBM0ZGO0VBNkZDO0lBQ0MsZUFBQTtFQTNGRjtFQThGQTtJQUNDLGFBQUE7SUFDQSxtQkFBQTtFQTVGRDtFQThGQTtJQUNDLGlCQUFBO0VBNUZEO0VBOEZBO0lBQ0MsUUFBQTtFQTVGRDtFQThGQTtJQUNDLFVBQUE7RUE1RkQ7RUE4RkE7SUFDQyxTQUFBO0lBQ00sV0FBQTtFQTVGUDtFQThGQTtJQUNDLFNBQUE7SUFDTSxVQUFBO0VBNUZQO0VBOEZBO0lBQ0MsZUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7RUE1RkQ7RUE4RkU7SUFDQyxlQUFBO0VBNUZIO0VBK0ZDO0lBQ0MsV0FBQTtJQUNBLGdCQUFBO0VBN0ZGO0VBZ0dBO0lBQ0MsaUJBQUE7SUFDUyxrQkFBQTtFQTlGVjtFQW1HRTtJQUNDLGFBQUE7SUFDQSxZQUFBO0VBakdIO0VBcUdBO0lBQ0MsV0FBQTtFQW5HRDtFQXNHRDtJQUNDLFNBQUE7SUFDQSxzQkFBQTtJQUNBLHdCQUFBO0VBcEdBO0VBcUdEO0lBQ0MsVUFBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBbkdBO0VBb0dBO0lBQ0YsNEJBQUE7RUFsR0U7QUFDRjtBQXdHQTtFQUNDLGFBQUE7QUF0R0Q7O0FBd0dBO0VBQ0MsbUJBQUE7QUFyR0Q7O0FBdUdBO0VBQ0Msa0JBQUE7QUFwR0Q7O0FBd0dDO0VBQ0MsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQXJHRjtBQXVHRTtFQUNDLGtCQUFBO0FBckdIO0FBdUdJO0VBQ0MsY0FBQTtFQUNHLGVBQUE7QUFyR1I7O0FBOEdBO0VBQ0MsZ0JBQUE7QUEzR0QiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3JfMTogI2VlZTtcbiRjb2xvcl8yOiB2YXIoLS1yZWQpO1xuJGZvbnQtZmFtaWx5XzE6IFJvYm90bywgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiRiYWNrZ3JvdW5kLWNvbG9yXzE6ICNmOGY5ZmE7XG4kYmFja2dyb3VuZC1jb2xvcl8yOiByZ2IoMjQ4LCA5MiwgMTEzKTtcbiRiYWNrZ3JvdW5kLWNvbG9yXzM6ICMxNzY5ZmY7XG4kYmFja2dyb3VuZC1jb2xvcl80OiAjMTMxNDE3O1xuJGJhY2tncm91bmQtY29sb3JfNTogdmFyKC0tZGFyayk7XG4kYmFja2dyb3VuZC1jb2xvcl82OiB2YXIoLS1yZWQpO1xuJGJhY2tncm91bmQtY29sb3JfNzogI2JmYzJjNztcbiRiYWNrZ3JvdW5kLWNvbG9yXzg6ICNmZmI3YTc7XG4kYmFja2dyb3VuZC1jb2xvcl85OiAjZDEyMjZiO1xuJGJhY2tncm91bmQtY29sb3JfMTA6ICNmM2I5ZDE7XG4kYmFja2dyb3VuZC1jb2xvcl8xMTogIzEzYTRkZDtcbiRiYWNrZ3JvdW5kLWNvbG9yXzEyOiAjOWVkYmYzO1xuJHdoaXRlIDogI2ZmZjtcbiRib3JkZXItY29sb3JfMTogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2VlZTtcblxuQGltcG9ydCBcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDA7NTAwOzcwMDs5MDAmZGlzcGxheT1zd2FwXCI7XG4vKiBiYWNrKi9cbi5jb250YWluZXIge1xuXHRtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmNhcmQge1xuXHRib3gtc2hhZG93OiAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuLmNhcmQtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMTtcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZWUyZTY7XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcbn1cbi5jYXJkLWJvZHkge1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG5ib2R5IHtcblx0bWFyZ2luOiAwO1xuXHRmb250LWZhbWlseTogJGZvbnQtZmFtaWx5XzE7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5jcmVkaXQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdHRvcDogMTVweDtcblx0cmlnaHQ6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzI7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0ei1pbmRleDogMjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YSB7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdGNvbG9yOiAkY29sb3JfMTtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHR9XG5cdCY6YWZ0ZXIge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Y29udGVudDogXCJcIjtcblx0XHRib3JkZXI6IDhweCBzb2xpZDtcblx0XHRib3JkZXItY29sb3I6ICRib3JkZXItY29sb3JfMTtcblx0XHR3aWR0aDogOHB4O1xuXHRcdGhlaWdodDogOHB4O1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHRyaWdodDogMXB4O1xuXHRcdHRvcDogNTAlO1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC41cztcblx0fVxuXHQmOmhvdmVyIHtcblx0XHQmOjphZnRlciB7XG5cdFx0XHRyaWdodDogLTNweDtcblx0XHR9XG5cdFx0LnRlc3Qge1xuXHRcdFx0bGVmdDogMDtcblx0XHR9XG5cdH1cbn1cbi50ZXN0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMztcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGxlZnQ6IC0xMDAlO1xuXHR0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XG5cdHotaW5kZXg6IC0xO1xufVxuLmJ1c2luZXNzMiB7XG5cdC8vIGRpc3BsYXk6IGZsZXg7XG5cdC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRoZWlnaHQ6IDEwMCU7XG5cdHdpZHRoOiAxMDAlO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl80O1xuXHRwYWRkaW5nOiAxNXB4O1xuXHQuZnJvbnQge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiA0NTBweDtcblx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi10b3A6IDM1cHg7XG5cdH1cblx0LmJhY2sge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0aGVpZ2h0OiA0NTBweDtcblx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdG1hcmdpbi10b3A6IDM1cHg7XG5cdFx0LnRvcCB7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0XHRoZWlnaHQ6IDcwJTtcblx0XHRcdGJhY2tncm91bmQ6IHVybChcImh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9Nb2hjaW5lRGV2L0J1c2luZXNzLUNhcmQvbWFpbi9pbWdzL2Uud2VicFwiKSBjZW50ZXI7XG5cdFx0XHRmaWx0ZXI6IGNvbnRyYXN0KDE2MCUpO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdFx0Jjo6YWZ0ZXIge1xuXHRcdFx0XHRjb250ZW50OiBcIlwiO1xuXHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0aGVpZ2h0OiAxMDAlO1xuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdHotaW5kZXg6IDEwO1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSg3MSwgMTEsIDExLCAwLjgpLCByZ2JhKDI0MCwgOCwgOCwgMC41KSk7XG5cdFx0XHR9XG5cdFx0XHRkaXYge1xuXHRcdFx0XHRpbWcge1xuXHRcdFx0XHRcdHdpZHRoOiA0MHB4O1xuXHRcdFx0XHRcdG1hcmdpbjogMTBweDtcblx0XHRcdFx0fVxuXHRcdFx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRcdHRvcDogNDAlO1xuXHRcdFx0XHRsZWZ0OiAxOSU7XG5cdFx0XHRcdHotaW5kZXg6IDExO1xuXHRcdFx0XHRmaWx0ZXI6IGNvbnRyYXN0KDgwJSk7XG5cdFx0XHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHAge1xuXHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRcdFx0bWFyZ2luLXRvcDogMzAlO1xuXHRcdFx0Y29sb3I6ICRjb2xvcl8yO1xuXHRcdH1cblx0fVxuXHRzdmcge1xuXHRcdHdpZHRoOiA1MHB4O1xuXHR9XG5cdGgxIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6ICRjb2xvcl8xO1xuXHR9XG5cdGgyIHtcblx0XHRtYXJnaW46IDA7XG5cdFx0Y29sb3I6ICRjb2xvcl8xO1xuXHR9XG5cdHAge1xuXHRcdG1hcmdpbjogMDtcblx0XHRjb2xvcjogJGNvbG9yXzE7XG5cdH1cblx0LnJlZCB7XG5cdFx0aGVpZ2h0OiA0NSU7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfNjtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxN2RlZyk7XG4gICAgbWFyZ2luLXRvcDogLTQ0cHg7XG4gICAgd2lkdGg6IDQ4MHB4O1xuXG4gICAgJi52aW9sZXR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl85O1xuICAgIH1cbiAgICAmLmJsdWV7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8xMTtcbiAgICB9XG5cdH1cblx0LmhlYWQge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0cGFkZGluZzogMjVweCAwO1xuXHRcdGltZyB7XG5cdFx0XHR3aWR0aDogNDBweDtcblx0XHR9XG5cdFx0ZGl2IHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdG1hcmdpbjogMCAxMHB4O1xuXHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdHAge1xuXHRcdFx0XHRmb250LXNpemU6IDAuOHJlbTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDYwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cbiAgLmRvd25sb2Fke1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAzNXB4O1xuICAgIHJpZ2h0OiA0MHB4O1xuXG4gICAgLmJ0bntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgICB3aWR0aDogNDVweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBwYWRkaW5nOiA4cHg7XG5cdCAgJjpmb2N1c3tcblx0XHRvdXRsaW5lOiBub25lO1xuXHQgIH1cbiAgICAgIHN2Z3tcbiAgICAgICAgZmlsbDogJGJhY2tncm91bmQtY29sb3JfMlxuICAgICAgfVxuXG4gICAgICAmLmJsdWV7XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICBmaWxsIDogJGJhY2tncm91bmQtY29sb3JfMTFcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgJi52aW9sZXR7XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICBmaWxsIDogJGJhY2tncm91bmQtY29sb3JfOVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmRvd25sb2FkLW1haWx7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiA0MHB4O1xuICAgIGxlZnQ6IDQwcHg7XG5cblx0LmJ0bntcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHQgIGJvcmRlci1jb2xvcjogI2ZmZjtcblx0ICBib3JkZXItcmFkaXVzOiA1MCU7XG5cdCAgaGVpZ2h0OiA0NXB4O1xuXHQgIHdpZHRoOiA0NXB4O1xuXHQgIGRpc3BsYXk6IGZsZXg7XG5cdCAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblx0ICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0ICBwYWRkaW5nOiA4cHg7XG5cdCAgJjpmb2N1c3tcblx0XHRvdXRsaW5lOiBub25lO1xuXHQgIH1cblx0ICBzdmd7XG5cdFx0ZmlsbDogJGJhY2tncm91bmQtY29sb3JfMlxuXHQgIH1cblx0fVxuICB9XG4gIFxuXHQuYXZhdGFyIHtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IDEwMCU7XG5cdFx0bGVmdDogNTAlO1xuXHRcdHRvcDogNTBweDtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlKTtcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0ZGlzcGxheTogZmxleDtcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRcdGp1c3RpZnktY29udGVudDogZW5kO1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0cCB7XG5cdFx0XHQmOm50aC1vZi10eXBlKDEpIHtcblx0XHRcdFx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDkwMDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0LmltZyB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfODtcblx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdGJvcmRlcjogNnB4IHNvbGlkIHZhcigtLWRhcmspO1xuXHRcdGhlaWdodDogMTAwJTtcblx0XHR3aWR0aDogMzUlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRpbWcge1xuXHRcdFx0d2lkdGg6IDgwJTtcblx0XHRcdHBhZGRpbmc6IDEwcHggMDtcblx0XHR9XG4gICAgJi52aW9sZXR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8xMDtcbiAgICB9XG4gICAgJi5ibHVle1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfMTI7XG4gICAgfVxuXHR9XG5cdC5pbmZvcyB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdGJvdHRvbTogYXV0bztcbiAgICB0b3A6IDUzJTtcblx0XHRsZWZ0OiAzJTtcbiAgICB3aWR0aDogNTAlO1xuXHRcdGRpdiB7XG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdFx0bWFyZ2luOiAxMHB4IDVweDtcblx0XHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdFx0XHRzdmcge1xuXHRcdFx0XHR3aWR0aDogMzBweDtcblx0XHRcdFx0aGVpZ2h0OiAzMHB4O1xuXHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDEwcHg7XG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kLWNvbG9yXzY7XG5cdFx0XHRcdHBhZGRpbmc6IDhweDtcblx0XHRcdFx0Ym9yZGVyLXJhZGl1czogN3B4O1xuXHRcdFx0XHRmaWxsOiAjZmZmO1xuXHRcdFx0fVxuXHRcdFx0cCB7XG5cdFx0XHRcdGZvbnQtc2l6ZTogMTJweDtcblx0XHRcdFx0bWFyZ2luOiA1cHggMDtcblx0XHRcdFx0Zm9udC13ZWlnaHQ6IDUwMDtcblx0XHRcdFx0d29yZC1icmVhazogYnJlYWstYWxsO1xuXHRcdFx0XHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cdFx0XHRcdGF7XG5cdFx0XHRcdFx0Y29sb3I6ICNmZmY7XG5cdFx0XHRcdFx0Jjpob3Zlcixcblx0XHRcdFx0XHQmOmFjdGl2ZSxcblx0XHRcdFx0XHQmOmZvY3Vze1xuXHRcdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG4gICAgJi5pbmZvcy1zdWJ7XG4gICAgICByaWdodDogMyU7XG4gICAgICBsZWZ0OjUzJTtcbiAgICAgIHdpZHRoOiA0NyU7XG4gICAgfVxuICAgIFxuICAgICYudmlvbGV0e1xuICAgICAgZGl2e1xuICAgICAgICBzdmd7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfOTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAmLmJsdWV7XG4gICAgICBkaXZ7XG4gICAgICAgIHN2Z3tcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl8xMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblx0fVxuXG5cdC5zdXJnaWNhbC1jYXJkIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuXHRcdHdpZHRoOiA5MCU7XG5cdFx0aGVpZ2h0OmF1dG87XG5cdFx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0XHRtYXJnaW46IDIwcHggYXV0byAzMHB4O1xuXHRcdHBhZGRpbmc6IDIwcHg7XG5cblx0XHQuY2VudGVyLWFsaWdue1xuXHRcdFx0ZGlzcGxheTogZmxleDtcblx0XHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRcdFx0LnNvdXJjZXtcblx0XHRcdFx0aGVpZ2h0OiAxNTBweDtcblx0XHRcdFx0d2lkdGg6IDE1MHB4O1xuXHRcdFx0XHRiYWNrZ3JvdW5kOiAjZmZmO1xuXHRcdFx0XHRib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDBweCA1cHggMTVweCAwcHg7XG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0XHRcdFx0cGFkZGluZzogMjVweDtcblx0XHRcdFx0Ym9yZGVyOiAxcHggc29saWQgI2Q3MjQyYTtcblx0XHRcdFx0bWFyZ2luLXRvcDogLTEwMHB4O1xuXHRcblx0XHRcdFx0aW1ne1xuXHRcdFx0XHRcdGhlaWdodDogMTAwJTtcblx0XHRcdFx0XHR3aWR0aDogMTAwJTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC5uYW1lLXRhZ3tcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdC5zZWMtMXtcblx0XHRcdFx0aDV7XG5cdFx0XHRcdFx0Y29sb3I6ICNkNzI0MmE7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA3MDA7XG5cdFx0XHRcdFx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRcdFx0XHR9XG5cdFx0XHRcdHB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG4uZ3JlZW5DYXJkIHtcbiAgLmZpcnN0LWJveHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xuXHRcdHdpZHRoOiA5MCU7XG5cdFx0aGVpZ2h0OiAyNDBweDtcblx0XHRib3JkZXItcmFkaXVzOiAyNXB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0bWFyZ2luOiAxNXB4IGF1dG8gMHB4O1xuXHRcdHBhZGRpbmc6IDBweDtcblx0fVxuXHQuc3VyZ2ljYWwtY2FyZHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzRjYWY1MDtcblx0fVxufVxuLmJsdWVDYXJkIHtcbiAgLmZpcnN0LWJveHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzdhOWY0O1xuXHR9XG5cdC5zdXJnaWNhbC1jYXJke1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzdhOWY0O1xuXHR9XG59XG4ucGlua0NhcmR7XG5cdC5maXJzdC1ib3h7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2Y4OGRmMztcblx0XHR3aWR0aDogOTAlO1xuXHRcdGhlaWdodDogMjQwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG1hcmdpbjogMTVweCBhdXRvIDBweDtcblx0XHRwYWRkaW5nOiAwcHg7XG5cdH1cblx0LnN1cmdpY2FsLWNhcmR7XG5cdGJhY2tncm91bmQtY29sb3I6ICNmODhkZjM7XG5cdH1cbn1cbi53aGl0ZUNhcmQge1xuICAuZmlyc3QtYm94e1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0d2lkdGg6IDkwJTtcblx0XHRoZWlnaHQ6IDI0MHB4O1xuXHRcdGJvcmRlci1yYWRpdXM6IDI1cHg7XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IDE1cHggYXV0byAwcHg7XG5cdFx0cGFkZGluZzogMHB4O1xuXHR9XG59XG5cdC5maXJzdC1ib3h7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblx0XHR3aWR0aDogOTAlO1xuXHRcdGhlaWdodDogMjQwcHg7XG5cdFx0Ym9yZGVyLXJhZGl1czogMjVweDtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdG1hcmdpbjogMTVweCBhdXRvIDBweDtcblx0XHRwYWRkaW5nOiAwcHg7XG5cblx0XHRoM3tcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMjBweDtcbiAgICBcdFx0Zm9udC13ZWlnaHQ6IDgwMDtcblx0XHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0XHQuY29sLXJlZHtcblx0XHRcdFx0Y29sb3I6I2Q3MjQyYTtcblx0XHRcdFx0bWFyZ2luLXJpZ2h0OiA4cHg7XG5cdFx0XHR9XG5cblx0XHRcdC5ibHVle1xuXHRcdFx0XHRjb2xvcjogIzE3NjlmZjtcblx0XHRcdH1cblx0XHR9XG5cdFx0cHtcblx0XHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0XHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRcdGNvbG9yOiAjNTU1O1xuXHRcdFx0bWFyZ2luLXRvcDogMTVweDtcblx0XHR9XG5cdFx0aDR7XG5cdFx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdFx0XHRmb250LXNpemU6IDE4cHg7XG4gICAgXHRcdGZvbnQtd2VpZ2h0OiA1MDA7XG5cdFx0fVxuXHRcdC5ibGFja3tcblx0XHRcdGhlaWdodDogMzBweDtcblx0XHRcdHdpZHRoOiA3MCU7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxNDE3O1xuXHRcdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0XHRtYXJnaW46IDAgYXV0bztcblx0XHRcdGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzMHB4O1xuXHRcdFx0Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMzBweDtcblx0XHR9XG5cdH1cblxuXHQuYm94LWJne1xuXHRcdG1hcmdpbi10b3A6IDIwcHg7XG5cdFx0Lm1lZGlhe1xuXHRcdFx0Lm1lZGlhLWxlZnR7XG5cdFx0XHRcdHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cdFx0XHRcdGF7XG5cdFx0XHRcdFx0YmFja2dyb3VuZDogI2Q3MjQyOTtcblx0XHRcdFx0XHRoZWlnaHQ6IDMwcHg7XG5cdFx0XHRcdFx0d2lkdGg6IDMwcHg7XG5cdFx0XHRcdFx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRcdFx0XHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0XHRcdFx0XHRwYWRkaW5nOiAxMHB4O1xuXHRcdFx0XHRcdGl7XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE2cHg7XG4gICAgXHRcdFx0XHRcdGNvbG9yOiAjZmZmO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0Lm1lZGlhLWJvZHl7XG5cdFx0XHRcdC5tZWRpYS1oZWFkaW5ne1xuXHRcdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcblx0XHRcdFx0XHRmb250LXdlaWdodDogNjAwO1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdHNwYW57XG5cdFx0XHRcdFx0XHRmb250LXNpemU6IDE1cHg7XG5cdFx0XHRcdFx0XHRjb2xvcjogIzMzMztcblx0XHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNXB4O1xuXHRcdFx0XHRcdGNvbG9yOiAjMzMzO1xuXHRcdFx0XHRcdGZvbnQtd2VpZ2h0OiA0MDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XHRcblx0fVxufVxuLndlYmljb24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZC1jb2xvcl81O1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdHdpZHRoOiA3MCU7XG5cdHBhZGRpbmc6IDIwcHggMDtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IGNhbGMoNzAlIC0gNDBweCk7XG5cdGxlZnQ6IDE1JTtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGRpdiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3JfNjtcblx0XHRib3JkZXItcmFkaXVzOiA1MCU7XG5cdFx0cGFkZGluZzogNXB4IDRweCAycHggNXB4O1xuXHR9XG59XG5cbi5mbGV4LWFsaWdue1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuXHQuY29udGFpbmVyIHtcblx0XHRtYXJnaW4tdG9wOiAwO1xuXHR9XG5cdC5jYXJkIHtcblx0XHRtYXJnaW46IDEwcHg7XG5cdH1cbn1cblxuXG5AbWVkaWEgIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDoxNDAwcHgpIHtcblx0LmJ1c2luZXNzMntcblx0XHQucmVke1xuXHRcdFx0bWFyZ2luLXRvcDogLTU1cHg7XG5cdFx0fVxuXHRcdC5pbmZvc3tcblx0XHRcdHRvcDogNDglO1xuXHRcdH1cblxuXHRcdC5zdXJnaWNhbC1jYXJke1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHRcdC5maXJzdC1ib3h7XG5cdFx0XHR3aWR0aDogMTAwJTtcblx0XHR9XG5cdFx0LmRvd25sb2Fke1xuXHRcdFx0dG9wOiAzNXB4O1xuICAgIFx0XHRyaWdodDogMjBweDtcblx0XHR9XG5cdFx0LmRvd25sb2FkLW1haWx7XG5cdFx0XHR0b3A6IDQwcHg7XG4gICAgXHRcdGxlZnQ6IDIwcHg7XG5cdFx0fVxuXG5cdFx0LnNhdmVwZGZ7XG5cdFx0XHR1bHtcblx0XHRcdFx0bGl7XG5cdFx0XHRcdFx0bWFyZ2luLXJpZ2h0OiAzNXB4O1xuXHRcdFx0XHRcdGF7XG5cdFx0XHRcdFx0XHRzcGFue1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9IFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOjExOTlweCl7XG5cdC5idXNpbmVzczJ7XG5cdFx0LmluZm9ze1xuXHRcdFx0dG9wOiA1MCU7XG5cdFx0fVxuXHR9IFxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMzIwcHgpIGFuZCAobWF4LXdpZHRoOjk5MnB4KXtcblx0LmJ1c2luZXNzMntcblx0XHQuaW1ne1xuXHRcdFx0d2lkdGg6IDMwJTtcblx0XHR9XG5cdFx0LnJlZHtcblx0XHRcdHdpZHRoOiA1NTBweDtcblx0XHR9XG5cdFx0LmluZm9ze1xuXHRcdFx0dG9wOiA1MiU7XG5cdFx0fVxuXG5cdFx0LnN1cmdpY2FsLWNhcmR7XG5cdFx0XHR3aWR0aDogOTMlO1xuXHRcdH1cblx0XHQuZmlyc3QtYm94e1xuXHRcdFx0d2lkdGg6IDkzJTtcblx0XHR9XG5cdFx0LmRvd25sb2Fke1xuXHRcdFx0dG9wOiAzNXB4O1xuICAgIFx0XHRyaWdodDogNDBweDtcblx0XHR9XG5cdFx0LmRvd25sb2FkLW1haWx7XG5cdFx0XHR0b3A6IDQwcHg7XG4gICAgICAgIFx0bGVmdDogNDBweDtcblx0XHR9XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDo3NjdweCl7XG5cdC5idXNpbmVzczJ7XG5cdFx0LmltZ3tcblx0XHRcdHdpZHRoOiAyNSU7XG5cdFx0fVxuXHRcdC5yZWR7XG5cdFx0XHR3aWR0aDogNjAwcHg7XG5cdFx0XHRtYXJnaW4tdG9wOiAtNjVweDtcblx0XHR9XG5cdFx0LmluZm9ze1xuXHRcdFx0dG9wOiA1NCU7XG5cdFx0fVxuXHRcdC5jb2wteHMtMTIge1xuXHRcdFx0d2lkdGg6IDc1JTtcblx0XHR9XG5cblx0XHQuc3VyZ2ljYWwtY2FyZHtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdH1cblx0XHQuZmlyc3QtYm94e1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXG5cdFx0Lm1vYi1hbGlnbntcblx0XHRcdHBhZGRpbmctbGVmdDogMzBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG5cdFx0fVxuXG5cdFx0Lm1lZGlhLWJvZHkge1xuXHRcdFx0d2lkdGg6IGF1dG87XG5cdFx0fVxuXHRcdC5zYXZlcGRme1xuXHRcdFx0dWx7XG5cdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0XHRsaXtcblx0XHRcdFx0XHRtYXJnaW4tcmlnaHQ6IDBweDtcblx0XHRcdFx0XHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRcdFx0XHRcdGF7XG5cdFx0XHRcdFx0XHRzcGFue1xuXHRcdFx0XHRcdFx0XHRmb250LXNpemU6IDE4cHg7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5kb3dubG9hZHtcblx0XHRcdHRvcDogMzVweDtcbiAgICAgICAgXHRyaWdodDogMzBweDtcblx0XHR9XG5cdFx0LmRvd25sb2FkLW1haWx7XG5cdFx0XHR0b3A6IDQwcHg7XG4gICAgICAgIFx0bGVmdDogMzBweDtcblx0XHR9XG5cdH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDMyMHB4KSBhbmQgKG1heC13aWR0aDo1NjdweCl7XG5cdC5idXNpbmVzczJ7XG5cdFx0LmZpcnN0LWJveHtcblx0XHRcdGgze1xuXHRcdFx0XHRmb250LXNpemU6IDI3cHg7XG5cdFx0XHR9XG5cdFx0XHRwe1xuXHRcdFx0XHRtYXJnaW4tdG9wOiAycHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5mcm9udHtcblx0XHRcdGhlaWdodDogMTAwdmg7XG5cdFx0XHRtYXJnaW4tYm90dG9tOiAzNXB4O1xuXHRcdH1cblx0XHQucmVke1xuXHRcdFx0bWFyZ2luLXRvcDogLTkwcHg7XG5cdFx0fVxuXHRcdC5hdmF0YXJ7XG5cdFx0XHR0b3A6MTIlXG5cdFx0fVxuXHRcdC5pbWd7XG5cdFx0XHR3aWR0aDogMzUlO1xuXHRcdH1cblx0XHQuZG93bmxvYWR7XG5cdFx0XHR0b3A6IDM1cHg7XG4gICAgICAgIFx0cmlnaHQ6IDIwcHg7XG5cdFx0fVxuXHRcdC5kb3dubG9hZC1tYWlse1xuXHRcdFx0dG9wOiA0MHB4O1xuICAgICAgICBcdGxlZnQ6IDIwcHg7XG5cdFx0fVxuXHRcdC5pbmZvc3tcblx0XHRcdHBvc2l0aW9uOiB1bnNldDtcblx0XHRcdHdpZHRoOiAxMDAlO1xuXHRcdFx0bWFyZ2luLXRvcDogMjAlO1xuXHRcdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XG5cdFx0XHRkaXZ7XG5cdFx0XHRcdHB7XG5cdFx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQmLmluZm9zLXN1Yntcblx0XHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0XHRcdG1hcmdpbi10b3A6IDEwcHg7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC5tb2ItYWxpZ257XG5cdFx0XHRwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcblx0XHR9XG5cdFx0XG5cdFx0LnN1cmdpY2FsLWNhcmR7XG5cdFx0XHQuY2VudGVyLWFsaWdue1xuXHRcdFx0XHQuc291cmNlIHtcblx0XHRcdFx0XHRoZWlnaHQ6IDEyMHB4O1xuXHRcdFx0XHRcdHdpZHRoOiAxMjBweDtcblx0XHRcdFx0fVxuXHRcdFx0fSBcblx0XHR9IFxuXHRcdC5jb2wteHMtMTIge1xuXHRcdFx0d2lkdGg6IDEwMCU7XG5cdFx0fVxuXHR9XG5cdC5zdXJnaWNhbC1jYXJke1xuXHRcdG1hcmdpbjogMDtcblx0XHR3aWR0aDogMTAwJSFpbXBvcnRhbnQ7O1xuXHRcdHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcblx0LnNlYy0xe1xuXHRcdHdpZHRoOiA1MCU7XG5cdFx0ZmxvYXQ6IGxlZnQ7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRtYXJnaW4tYm90dG9tOiAwO1xuXHRcdCY6bGFzdC1jaGlsZHtcbnRleHQtYWxpZ246IHJpZ2h0IWltcG9ydGFudDtcblx0XHR9XG5cdH1cbn1cblxufVxuXG4uaGlkZXtcblx0ZGlzcGxheTogbm9uZTtcbn1cbi5tYi0xMHtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tci0xMHtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uc2F2ZXBkZntcblx0dWx7XG5cdFx0bGlzdC1zdHlsZTogbm9uZTtcblx0XHRwYWRkaW5nLWxlZnQ6IDBweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG5cdFx0bGl7XG5cdFx0XHRtYXJnaW4tcmlnaHQ6IDI1cHg7XG5cdFx0XHRhe1xuXHRcdFx0XHRzcGFue1xuXHRcdFx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuICAgIFx0XHRcdFx0Zm9udC1zaXplOiAxOHB4O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG5cblxuXG4ubWVkaWF7XG5cdG1hcmdpbi10b3A6IDEwcHg7XG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}

/***/ }),

/***/ 9822:
/*!***********************************************!*\
  !*** ./src/app/pages/service/auth.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AuthService: () => (/* binding */ AuthService)
/* harmony export */ });
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @auth0/angular-jwt */ 92389);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 98764);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 95072);






class AuthService {
  constructor(http, router) {
    this.http = http;
    this.router = router;
    this.apiUrl = `${_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl}/auth`;
  }
  // Login user - Now returns full response including permissions
  login(credentials) {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(response => {
      if (response.token) {
        localStorage.setItem('token', response.token);
      }
      if (credentials.email) {
        localStorage.setItem('userEmail', credentials.email);
      }
      if (response.user) {
        localStorage.setItem('userData', JSON.stringify(response.user));
      }
      if (response.permissions && Array.isArray(response.permissions) && response.permissions.length > 0) {
        localStorage.setItem('loginPermissions', JSON.stringify({
          permissions: response.permissions,
          user: response.user,
          timestamp: Date.now()
        }));
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(response => response));
  }
  // Check if user is logged in
  isAuthenticated() {
    const token = localStorage.getItem('token');
    const helper = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService();
    return token ? !helper.isTokenExpired(token) : false;
  }
  // Get logged-in user data
  getUser() {
    const token = localStorage.getItem('token');
    if (!token) return null;
    const decodedToken = new _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_3__.JwtHelperService().decodeToken(token);
    // If token doesn't have user info, try to get from localStorage
    if (!decodedToken || Object.keys(decodedToken).length <= 2) {
      const storedUserData = localStorage.getItem('userData');
      if (storedUserData) {
        try {
          return JSON.parse(storedUserData);
        } catch (e) {}
      }
      // Fallback: create user object from stored email
      const userEmail = localStorage.getItem('userEmail');
      if (userEmail) {
        return {
          email: userEmail
        };
      }
    }
    return decodedToken;
  }
  // Get account ID from logged-in user (from JWT token)
  getAccountId() {
    const user = this.getUser();
    if (user) {
      // Try different field name variations
      const accountId = user.accountid || user.accountId || user.account_id || user.accountid;
      if (accountId !== undefined && accountId !== null) {
        return typeof accountId === 'number' ? accountId : Number(accountId);
      }
    }
    // Default fallback (should not happen in production)
    return 1;
  }
  // Get instance ID from logged-in user (from JWT token)
  getInstanceId() {
    const user = this.getUser();
    if (user) {
      // Try different field name variations
      const instanceId = user.instanceid || user.instanceId || user.instance_id || user.instanceid;
      if (instanceId !== undefined && instanceId !== null) {
        return typeof instanceId === 'number' ? instanceId : Number(instanceId);
      }
    }
    // Default fallback (should not happen in production)
    return 1;
  }
  // Get user ID from logged-in user (from JWT token)
  getUserId() {
    const user = this.getUser();
    if (user) {
      // Try different field name variations
      const userId = user.sub || user.userId || user.userid || user.user_id || user.id || user.id;
      if (userId !== undefined && userId !== null) {
        return typeof userId === 'number' ? userId : Number(userId);
      }
    }
    // Default fallback (should not happen in production)
    return 1;
  }
  // Get current user email
  getUserEmail() {
    const user = this.getUser();
    if (user && user.email) {
      return user.email;
    }
    const storedEmail = localStorage.getItem('userEmail');
    return storedEmail || '';
  }
  // Fetch user details from API by email
  fetchUserDetailsByEmail(email) {
    return this.http.get(`${this.apiUrl}/user-by-email?email=${encodeURIComponent(email)}`);
  }
  // Logout user
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userData');
    localStorage.removeItem('loginPermissions'); // Clear login permissions cache
    this.router.navigate(['/login']);
  }
  static {
    this.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 30511:
/*!***************************************************!*\
  !*** ./src/app/pages/service/instance.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InstanceService: () => (/* binding */ InstanceService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 61318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 46443);




class InstanceService {
  getInstanceById(instanceId) {
    return this.http.get(`${this.apiUrl}/instance/${instanceId}`);
  }
  getInstanceOrderby() {
    return this.http.get(`${this.apiUrl}/instance/instanceorderby`);
  }
  deleteInstance(instanceid) {
    console.log('Deleting instance from API, ID:', instanceid);
    return this.http.delete(`${this.apiUrl}/instance/instancedelete/${instanceid}`);
  }
  constructor(http) {
    this.http = http;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.checkInstanceName = control => {
      if (!control.value) return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null);
      return this.instanceservice.isInstanceNameTaken(control.value).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.map)(isTaken => isTaken ? {
        instanceNameTaken: true
      } : null), (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(null)));
    };
  }
  getInstanceDetails() {
    return this.http.get(`${this.apiUrl}/instance/list`);
  }
  addInstance(instanceData) {
    console.log('Sending data to API', instanceData);
    return this.http.post(`${this.apiUrl}/instance/instancesave`, instanceData);
  }
  getDropdownItems() {
    return this.http.get(`${this.apiUrl}/city/list`);
  }
  getDropdownAccountItems() {
    return this.http.get(`${this.apiUrl}/account/list`);
  }
  updateInstance(instance) {
    return this.http.put(`${this.apiUrl}/instance/instanceupdate`, instance);
  }
  isInstanceNameTaken(instanceName) {
    return this.http.get(`${this.apiUrl}/instance/check-company-name?name=${instanceName}`);
  }
  static {
    this.ɵfac = function InstanceService_Factory(t) {
      return new (t || InstanceService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      token: InstanceService,
      factory: InstanceService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 1953:
/*!*************************************************!*\
  !*** ./src/app/pages/service/permission.dto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildByKey: () => (/* binding */ buildByKey),
/* harmony export */   normalizeByKeyToLower: () => (/* binding */ normalizeByKeyToLower),
/* harmony export */   permissionCodeToKey: () => (/* binding */ permissionCodeToKey),
/* harmony export */   resourceActionToKey: () => (/* binding */ resourceActionToKey),
/* harmony export */   toPermissionDto: () => (/* binding */ toPermissionDto)
/* harmony export */ });
/**
 * Normalize legacy permissioncode to key format (e.g. "account:create" → "account.create").
 */
function permissionCodeToKey(code) {
  if (!code || typeof code !== 'string') return '';
  return code.trim().toLowerCase().replace(/:/g, '.');
}
/**
 * Build key from resource/action/field (legacy shape).
 */
function resourceActionToKey(resource, action, field) {
  const r = (resource || '').trim().toLowerCase();
  const a = (action || '').trim().toLowerCase();
  if (!r || !a) return '';
  return field ? `${r}.${a}.${String(field).trim().toLowerCase()}` : `${r}.${a}`;
}
/**
 * Derive key from a display name like "Account Create" or "account:create".
 */
function keyFromName(name) {
  if (!name || typeof name !== 'string') return '';
  return name.trim().toLowerCase().replace(/\s*[:\-–—]\s*/g, '.').replace(/\s+/g, '.').replace(/[^a-z0-9._]/g, '');
}
/**
 * Normalize any permission-like object to PermissionDto.
 * Handles unified shape (key, module, name), legacy (resource, action, permissioncode), and name-only (permissionname).
 */
function toPermissionDto(p) {
  if (!p) return null;
  const allowed = p.allowed !== false;
  if (p.key && typeof p.key === 'string') {
    return {
      key: p.key.trim().toLowerCase(),
      module: typeof p.module === 'string' ? p.module : p.module || '',
      name: typeof p.name === 'string' ? p.name : p.name || p.key,
      allowed,
      action: p.action
    };
  }
  const resource = p.resource ?? p.resourceName ?? '';
  const action = p.action ?? '';
  if (resource && action) {
    const key = resourceActionToKey(resource, action, p.field);
    if (key) {
      const moduleName = String(resource).trim();
      return {
        key,
        module: moduleName ? moduleName.charAt(0).toUpperCase() + moduleName.slice(1).toLowerCase() : '',
        name: p.name ?? p.permissionname ?? `${resource} ${action}`,
        allowed,
        action: String(action).toLowerCase()
      };
    }
  }
  const code = p.permissioncode ?? p.permissionCode ?? p.permission_code;
  if (code) {
    const key = permissionCodeToKey(code);
    if (key) {
      const moduleName = key.split('.')[0];
      return {
        key,
        module: moduleName ? moduleName.charAt(0).toUpperCase() + moduleName.slice(1) : '',
        name: p.name ?? p.permissionname ?? key,
        allowed,
        action: action || undefined
      };
    }
  }
  const name = p.name ?? p.permissionname ?? p.permissionName;
  if (name && typeof name === 'string') {
    const key = keyFromName(name);
    if (key) {
      const parts = key.split('.');
      const moduleName = parts[0] ? parts[0].charAt(0).toUpperCase() + parts[0].slice(1) : '';
      return {
        key,
        module: moduleName,
        name: String(name).trim(),
        allowed,
        action: parts[1] || undefined
      };
    }
  }
  return null;
}
/**
 * Build byKey map from permissions list (only allowed: true).
 * Keys are stored in lowercase for case-insensitive checks.
 */
function buildByKey(permissions) {
  const byKey = {};
  if (!Array.isArray(permissions)) return byKey;
  permissions.forEach(p => {
    if (p.key && p.allowed) byKey[p.key.trim().toLowerCase()] = true;
  });
  return byKey;
}
/**
 * Normalize byKey from API so all keys are lowercase (backend may send "Product.view").
 */
function normalizeByKeyToLower(byKey) {
  if (!byKey || typeof byKey !== 'object') return {};
  const out = {};
  Object.keys(byKey).forEach(k => {
    if (byKey[k]) out[k.trim().toLowerCase()] = true;
  });
  return out;
}

/***/ }),

/***/ 69227:
/*!*****************************************************!*\
  !*** ./src/app/pages/service/permission.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PermissionService: () => (/* binding */ PermissionService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 77919);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ 45312);
/* harmony import */ var _rbac_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rbac.constants */ 66978);
/* harmony import */ var _permission_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permission.dto */ 1953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 46443);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ 9822);








class PermissionService {
  // Public getter to check if permissions are loaded
  get permissionsLoaded() {
    return this.isPermissionsLoaded;
  }
  /** Normalize role name for comparison; aligns with backend ("Super Admin" / "SuperAdmin" → "superadmin"). */
  normalizeRoleName(roleName) {
    if (!roleName || typeof roleName !== 'string') return '';
    return roleName.toLowerCase().trim().replace(/\s+/g, '');
  }
  constructor(http, authService) {
    this.http = http;
    this.authService = authService;
    this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiUrl;
    this.permissionsCache = new Map();
    this.currentUserRole = null;
    /** O(1) map: permission key → true for allowed only (from GET /role/user/permissions or built from permissions). */
    this.byKey = {};
    this.permissionResultCache = new Map();
    this.lastPermissionCheckTime = 0;
    this.isPermissionsLoaded = false;
    this.cachedIsSuperAdmin = null;
    this.lastSuperAdminCheckTime = 0;
    // Check if permissions were stored from login response (avoids separate API call)
    const loginPermissions = localStorage.getItem('loginPermissions');
    if (loginPermissions) {
      try {
        const data = JSON.parse(loginPermissions);
        // Check if data is recent (within 5 minutes)
        if (data.timestamp && Date.now() - data.timestamp < 5 * 60 * 1000) {
          this.setPermissionsFromLogin(data.permissions || [], data.user);
          localStorage.removeItem('loginPermissions'); // Clear after use
          return; // Don't make API call if we have permissions from login
        } else {
          // Cache expired, remove it
          localStorage.removeItem('loginPermissions');
        }
      } catch (e) {
        console.warn('Error parsing login permissions cache:', e);
        localStorage.removeItem('loginPermissions');
      }
    }
    // Load permissions after a short delay to ensure AuthService is ready
    // Also check if user is authenticated before loading
    setTimeout(() => {
      if (this.authService.isAuthenticated() && !this.isPermissionsLoaded) {
        this.loadCurrentUserPermissions();
      }
    }, 200);
  }
  /** Normalize raw permissions to PermissionDto[] and set currentUserRole + byKey. */
  setPermissionsAndByKey(permissions, userId, roleId, roleName) {
    const list = [];
    (permissions || []).forEach(p => {
      const dto = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.toPermissionDto)(p);
      if (dto) list.push(dto);
    });
    this.byKey = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.buildByKey)(list);
    this.currentUserRole = {
      userId,
      roleId,
      roleName,
      permissions: list
    };
    this.isPermissionsLoaded = true;
    this.permissionResultCache.clear();
    this.cachedIsSuperAdmin = null;
  }
  // Set permissions directly from login response (unified shape; no byKey in login response)
  setPermissionsFromLogin(permissions, user) {
    const userId = user?.id || user?.userId || user?.userid || user?.user_id || 0;
    const roleId = user?.roleId || user?.roleid || user?.role_id || user?.userroleid || user?.userRoleId || 0;
    const roleName = user?.role || user?.roleName || user?.rolename || user?.role_name || user?.userrolename || user?.userRoleName;
    this.setPermissionsAndByKey(permissions || [], userId, roleId, roleName);
  }
  // Load permissions for current logged-in user
  // Single endpoint: GET /role/user/permissions (unified shape + byKey). Fallback: GET /auth/permissions, then role-based.
  loadCurrentUserPermissions() {
    const token = typeof localStorage !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) return;
    const user = this.authService.getUser();
    if (!user) return;
    const userId = user.userId || user.userid || user.user_id || user.id;
    const roleId = user.roleId || user.roleid || user.role_id || user.userroleid || user.userRoleId;
    const fallbackRoleName = user.roleName || user.rolename || user.role_name || user.userrolename || user.userRoleName;
    const applyResponse = (response, roleName) => {
      const uid = response?.userId ?? userId;
      const rid = response?.roleId ?? roleId;
      const rn = roleName ?? response?.roleName ?? response?.rolename ?? response?.userrolename ?? fallbackRoleName;
      let list = [];
      const rawPermissions = response?.permissions ?? response?.data?.permissions ?? (Array.isArray(response?.data) ? response.data : null) ?? (Array.isArray(response) ? response : null);
      if (Array.isArray(rawPermissions)) {
        rawPermissions.forEach(p => {
          const dto = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.toPermissionDto)(p);
          if (dto) list.push(dto);
        });
      }
      const byKeyFromApi = response?.byKey ?? response?.data?.byKey;
      this.byKey = byKeyFromApi && typeof byKeyFromApi === 'object' ? (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.normalizeByKeyToLower)(byKeyFromApi) : (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.buildByKey)(list);
      this.currentUserRole = {
        userId: uid,
        roleId: rid,
        roleName: rn,
        permissions: list
      };
      this.isPermissionsLoaded = true;
      this.permissionResultCache.clear();
      this.cachedIsSuperAdmin = null;
      if (!rn && roleId) {
        this.getRoleDetails(roleId).subscribe({
          next: roleDetails => {
            if (roleDetails && this.currentUserRole) {
              const name = roleDetails.userrolename || roleDetails.roleName || roleDetails.rolename || roleDetails.name;
              if (name) this.currentUserRole.roleName = name;
            }
          },
          error: () => {}
        });
      } else if (rn) {
        this.setRoleName(rn);
      }
    };
    // Primary: GET /role/user/permissions (unified response with permissions + byKey)
    this.http.get(`${this.apiUrl}/role/user/permissions`).subscribe({
      next: response => {
        const roleName = response?.roleName ?? fallbackRoleName;
        applyResponse(response, roleName);
      },
      error: () => {
        this.http.get(`${this.apiUrl}/auth/permissions`).subscribe({
          next: response => {
            const roleName = response?.roleName ?? response?.rolename ?? response?.userrolename ?? fallbackRoleName;
            applyResponse(response, roleName);
          },
          error: () => {
            if (roleId) {
              this.loadPermissionsForRole(userId, roleId, fallbackRoleName);
            } else {
              this.setPermissionsAndByKey([], userId || 0, 0, fallbackRoleName);
            }
          }
        });
      }
    });
  }
  loadPermissionsForRole(userId, roleId, roleName) {
    this.getRolePermissions(roleId).subscribe({
      next: permissions => {
        const raw = Array.isArray(permissions) ? permissions : [];
        const list = [];
        raw.forEach(p => {
          const dto = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.toPermissionDto)(p);
          if (dto) list.push(dto);
        });
        this.byKey = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.buildByKey)(list);
        this.currentUserRole = {
          userId: userId || 0,
          roleId,
          roleName,
          permissions: list
        };
        this.isPermissionsLoaded = true;
        this.permissionResultCache.clear();
      },
      error: () => {
        this.byKey = {};
        this.currentUserRole = {
          userId: userId || 0,
          roleId,
          roleName,
          permissions: []
        };
        this.isPermissionsLoaded = true;
        this.permissionResultCache.clear();
      }
    });
  }
  // Get role details by roleId from database
  getRoleDetails(roleId) {
    if (!this.apiUrl || !this.apiUrl.startsWith('http')) {
      console.error('Invalid API URL:', this.apiUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(`Invalid API URL: ${this.apiUrl}`));
    }
    if (!roleId || isNaN(roleId) || roleId <= 0) {
      console.error('Invalid roleId:', roleId);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(`Invalid roleId: ${roleId}`));
    }
    const url = `${this.apiUrl}/role/${roleId}/details`;
    console.log(`Fetching role details for roleId: ${roleId} from ${url}`);
    // Use the new role details endpoint
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(role => {
      if (role) {
        console.log('✅ Got role details from API:', role);
      }
      return role;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(err => {
      console.log('Role details endpoint failed, trying list endpoint as fallback. Error:', err);
      // If specific endpoint doesn't exist, get from list and find by ID (fallback)
      return this.http.get(`${this.apiUrl}/role/all`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(roles => {
        console.log('Got roles list, count:', roles?.length);
        if (!roles || !Array.isArray(roles)) {
          console.warn('⚠️ Invalid roles list response:', roles);
          return null;
        }
        // Try to find role by various possible ID field names
        const role = roles.find(r => {
          const match = r.userroleid === roleId || r.roleId === roleId || r.id === roleId || r.userRoleId === roleId || r.userroleId === Number(roleId) || r.roleId === Number(roleId) || r.id === Number(roleId) || r.userRoleId === Number(roleId);
          if (match) {
            console.log('✅ Found matching role:', r);
          }
          return match;
        });
        if (role) {
          console.log('✅ Found role from list:', role);
          console.log('Role name field:', role.userrolename || role.roleName || role.rolename || role.name);
        } else {
          console.warn(`❌ Role with ID ${roleId} not found in list`);
          console.log('Available roles:', roles.map(r => ({
            id: r.userroleid || r.roleId || r.id || r.userRoleId,
            name: r.userrolename || r.roleName || r.rolename || r.name
          })));
        }
        return role || null;
      }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(listErr => {
        console.error('❌ Error fetching role list:', listErr);
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(null);
      }));
    }));
  }
  // Get permissions for a specific role (Super Admin only)
  getRolePermissions(roleId) {
    // Check if user is Super Admin
    if (!this.isSuperAdmin()) {
      console.warn('getRolePermissions: Access denied - Super Admin required');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    }
    if (!this.apiUrl || !this.apiUrl.startsWith('http')) {
      console.error('Invalid API URL:', this.apiUrl);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(`Invalid API URL: ${this.apiUrl}`));
    }
    if (!roleId || isNaN(roleId) || roleId <= 0) {
      console.error('Invalid roleId:', roleId);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(() => new Error(`Invalid roleId: ${roleId}`));
    }
    if (this.permissionsCache.has(roleId)) {
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(this.permissionsCache.get(roleId));
    }
    const url = `${this.apiUrl}/role/${roleId}/permissions`;
    console.log('Fetching role permissions from:', url);
    return this.http.get(url).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(permissions => {
      this.permissionsCache.set(roleId, permissions);
      return permissions;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error fetching role permissions:', error);
      console.error('Request URL:', url);
      console.error('Error status:', error.status);
      console.error('Error message:', error.message);
      // Handle CORS errors
      if (error.message && (error.message.includes('CORS') || error.message.includes('Failed to fetch'))) {
        console.error('CORS Error: Make sure the backend server is running on', this.apiUrl);
        console.error('If using a proxy, ensure proxy.conf.json is configured correctly');
      }
      // Handle 403 Forbidden (Super Admin required)
      if (error.status === 403) {
        console.error('getRolePermissions: Forbidden - Super Admin access required');
        alert('Access denied. Only Super Admin can view role permissions.');
      }
      // Return empty array if API fails
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    }));
  }
  // Get permissions for a specific user
  // Note: This endpoint may not exist on the backend. Use getRolePermissions instead if you have roleId.
  getUserPermissions(userId) {
    return this.http.get(`${this.apiUrl}/user/${userId}/permissions`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(userRole => {
      this.currentUserRole = userRole;
      return userRole;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      // Silently return default if API endpoint doesn't exist (404)
      // This is expected if the backend doesn't implement this endpoint
      if (error.status === 404) {
        console.warn(`User permissions endpoint not found for user ${userId}. Using role-based permissions instead.`);
      }
      // Return default if API fails
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
        userId,
        roleId: 0,
        permissions: []
      });
    }));
  }
  // Save/Update permissions for a role (Super Admin only)
  saveRolePermissions(roleId, permissions) {
    // Check if user is Super Admin
    if (!this.isSuperAdmin()) {
      console.warn('saveRolePermissions: Access denied - Super Admin required');
      alert('Access denied. Only Super Admin can assign permissions to roles.');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
    }
    return this.http.post(`${this.apiUrl}/role/${roleId}/permissions`, {
      permissions
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => {
      // Clear cache after update
      this.permissionsCache.delete(roleId);
      return true;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      console.error('Error saving role permissions:', error);
      // Handle 403 Forbidden (Super Admin required)
      if (error.status === 403) {
        alert('Access denied. Only Super Admin can assign permissions to roles.');
      } else {
        const errorMessage = error.error?.message || error.message || 'Unknown error';
        alert(`Error saving permissions: ${errorMessage}`);
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)(false);
    }));
  }
  // Check if current user has permission for a resource and action (with caching)
  hasPermission(resource, action, field) {
    // Create cache key
    const cacheKey = `${resource}:${action}:${field || ''}`;
    // Check cache first (only if permissions are loaded and cache is recent)
    const now = Date.now();
    if (this.isPermissionsLoaded && this.permissionResultCache.has(cacheKey)) {
      const cachedResult = this.permissionResultCache.get(cacheKey);
      // Cache valid for 1 second
      if (now - this.lastPermissionCheckTime < 1000) {
        return cachedResult;
      }
    }
    // First check if user is Super Admin - Super Admin has access to ALL resources and ALL actions
    const isSuperAdminUser = this.isSuperAdmin();
    // Super Admin has full access to everything
    if (isSuperAdminUser) {
      // Cache result
      this.permissionResultCache.set(cacheKey, true);
      this.lastPermissionCheckTime = now;
      return true;
    }
    if (!this.currentUserRole) {
      this.permissionResultCache.set(cacheKey, false);
      this.lastPermissionCheckTime = now;
      return false;
    }
    // If no permissions, return false
    if (!this.currentUserRole.permissions || this.currentUserRole.permissions.length === 0) {
      // Cache result
      this.permissionResultCache.set(cacheKey, false);
      this.lastPermissionCheckTime = now;
      return false;
    }
    // O(1) check via byKey; treat view/read/list as equivalent for route access
    const key = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.resourceActionToKey)(resource, action, field);
    if (key && this.byKey[key] === true) {
      this.permissionResultCache.set(cacheKey, true);
      this.lastPermissionCheckTime = now;
      return true;
    }
    const actionLower = (action || '').toLowerCase();
    const equivalentActions = [];
    if (actionLower === 'view' || actionLower === 'read') equivalentActions.push('view', 'read', 'list');else if (actionLower === 'list') equivalentActions.push('list', 'view', 'read');
    for (const alt of equivalentActions) {
      if (alt === actionLower) continue;
      const altKey = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.resourceActionToKey)(resource, alt, field);
      if (altKey && this.byKey[altKey] === true) {
        this.permissionResultCache.set(cacheKey, true);
        this.lastPermissionCheckTime = now;
        return true;
      }
    }
    const wildcard = this.byKey['*.*'] === true;
    this.permissionResultCache.set(cacheKey, wildcard);
    this.lastPermissionCheckTime = now;
    return wildcard;
  }
  hasAnyPermissionForResource(resource) {
    if (this.isSuperAdmin()) return true;
    if (this.byKey['*.*'] === true) return true;
    const prefix = resource.trim().toLowerCase() + '.';
    return Object.keys(this.byKey).some(k => this.byKey[k] && k.toLowerCase().startsWith(prefix));
  }
  // Check if current user has access to a page/route
  hasPageAccess(page) {
    // Map routes to resources
    const routeToResource = {
      'account': 'account',
      'instance': 'instance',
      'user': 'user',
      'userrole': 'userrole',
      'city': 'city',
      'gst': 'gst',
      'vat': 'vat',
      'product': 'product',
      'digicard': 'digicard',
      'dashboard': 'dashboard'
    };
    const resource = routeToResource[page] || page;
    return this.hasPermission(resource, 'read') || this.hasPermission(resource, 'view');
  }
  // Check if current user can perform action on resource
  canPerformAction(resource, action) {
    return this.hasPermission(resource, action);
  }
  // Check by permission key; accepts "account:create" or "account.create".
  // Backend may alias update→edit in byKey; we treat edit and update as equivalent so either key grants access.
  hasPermissionCode(permissionCode) {
    if (!permissionCode) return false;
    if (this.isSuperAdmin()) return true;
    const key = (0,_permission_dto__WEBPACK_IMPORTED_MODULE_2__.permissionCodeToKey)(permissionCode);
    if (key && this.byKey[key] === true) return true;
    const suffix = key?.split('.').pop();
    if (suffix === 'edit') {
      const updateKey = key.replace(/\.edit$/, '.update');
      if (this.byKey[updateKey] === true) return true;
    } else if (suffix === 'update') {
      const editKey = key.replace(/\.update$/, '.edit');
      if (this.byKey[editKey] === true) return true;
    }
    return false;
  }
  // Alias for hasPermissionCode - matches the user's expected method name
  userHasPermission(permissionCode) {
    return this.hasPermissionCode(permissionCode);
  }
  // Check if current user can access a specific field
  canAccessField(resource, field, action = 'read') {
    // If user has general access to resource, allow field access
    if (this.hasPermission(resource, action)) {
      return true;
    }
    // Check for specific field permission
    return this.hasPermission(resource, action, field);
  }
  getCurrentUserRole() {
    return this.currentUserRole;
  }
  /** O(1) permission checks: byKey['account.create'] === true */
  getByKey() {
    return {
      ...this.byKey
    };
  }
  /** List of permissions in unified shape (for menus, grouping). */
  getPermissions() {
    return this.currentUserRole?.permissions ? [...this.currentUserRole.permissions] : [];
  }
  /** Group permissions by module (e.g. sidebar). */
  getByModule() {
    const list = this.getPermissions();
    return list.reduce((acc, p) => {
      const m = p.module || 'Other';
      if (!acc[m]) acc[m] = [];
      acc[m].push(p);
      return acc;
    }, {});
  }
  // Get all available permissions (for configuration UI) - Super Admin only
  getAllPermissions() {
    // Check if user is Super Admin
    if (!this.isSuperAdmin()) {
      console.warn('getAllPermissions: Access denied - Super Admin required');
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    }
    return this.http.get(`${this.apiUrl}/role/permissions/all`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => {
      // Handle different response formats
      if (Array.isArray(response)) {
        // Direct array response
        return response;
      } else if (response && Array.isArray(response.permissions)) {
        // Object with permissions property: { permissions: [...] }
        return response.permissions;
      } else if (response && response.success && Array.isArray(response.data)) {
        // Object with success and data: { success: true, data: [...] }
        return response.data;
      } else {
        console.error('Unexpected response format from getAllPermissions:', response);
        return [];
      }
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.catchError)(error => {
      // Handle 403 Forbidden (Super Admin required)
      if (error.status === 403) {
        console.error('getAllPermissions: Forbidden - Super Admin access required');
        alert('Access denied. Only Super Admin can view all permissions.');
      }
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)([]);
    }));
  }
  // Get predefined permission templates (all pages/resources - used when backend list is empty)
  getPermissionTemplates() {
    const actions = ['view', 'create', 'update', 'delete', 'export'];
    const resources = [{
      key: 'account',
      label: 'Account'
    }, {
      key: 'instance',
      label: 'Instance'
    }, {
      key: 'user',
      label: 'User'
    }, {
      key: 'userrole',
      label: 'User Role',
      extraActions: ['configure']
    }, {
      key: 'city',
      label: 'City'
    }, {
      key: 'gst',
      label: 'GST'
    }, {
      key: 'vat',
      label: 'VAT'
    }, {
      key: 'product',
      label: 'Product'
    }, {
      key: 'digicard',
      label: 'Digicard'
    }, {
      key: 'sales',
      label: 'Sales'
    }, {
      key: 'customer',
      label: 'Customer'
    }, {
      key: 'dashboard',
      label: 'Dashboard'
    }];
    const out = {};
    resources.forEach(({
      key,
      label,
      extraActions = []
    }) => {
      const perms = [...actions, ...extraActions].map(action => ({
        name: `${label} ${action.charAt(0).toUpperCase() + action.slice(1)}`,
        resource: key,
        action
      }));
      out[key] = perms;
    });
    return out;
  }
  clearCache() {
    this.permissionsCache.clear();
    this.permissionResultCache.clear();
    this.cachedIsSuperAdmin = null;
    this.byKey = {};
    this.isPermissionsLoaded = false;
    this.loadCurrentUserPermissions();
  }
  reloadPermissions() {
    this.currentUserRole = null;
    this.byKey = {};
    this.permissionsCache.clear();
    this.permissionResultCache.clear();
    this.cachedIsSuperAdmin = null;
    this.loadCurrentUserPermissions();
  }
  getCurrentRoleName() {
    const roleName = this.currentUserRole?.roleName;
    if (roleName) {
      return roleName;
    }
    // Try to get from user object
    const user = this.authService.getUser();
    if (user) {
      const userRoleName = user.roleName || user.rolename || user.role_name || user.userrolename || user.userRoleName || user.role;
      if (userRoleName) {
        return userRoleName;
      }
    }
    // Try localStorage
    try {
      const userDataStr = localStorage.getItem('userData');
      if (userDataStr) {
        const userData = JSON.parse(userDataStr);
        const storedRoleName = userData.roleName || userData.rolename || userData.role_name || userData.userrolename || userData.userRoleName || userData.role;
        if (storedRoleName) {
          return storedRoleName;
        }
      }
    } catch (e) {
      // Ignore
    }
    return undefined;
  }
  // Debug method to check what permissions user has (can be called from browser console)
  debugPermissions() {
    const perms = this.currentUserRole?.permissions || [];
    console.log('=== PERMISSION DEBUG INFO ===');
    console.log('Current User Role:', this.currentUserRole);
    console.log('Is Super Admin:', this.isSuperAdmin());
    console.log('Permissions Loaded:', this.isPermissionsLoaded);
    console.log('byKey:', this.getByKey());
    console.log('Total Permissions:', perms.length);
    console.log('All Permissions:', perms);
    console.log('Account Permissions:', perms.filter(p => p.key?.startsWith('account.') || p.module === 'Account'));
    console.log('Create Permissions:', perms.filter(p => p.action === 'create' || p.key?.endsWith('.create')));
    console.log('Account:Create Check:', this.hasPermission('account', 'create'));
    console.log('===========================');
  }
  // Check if current user is Super Admin (with caching). Aligns with backend normalizeRoleName.
  isSuperAdmin() {
    const now = Date.now();
    if (this.cachedIsSuperAdmin !== null && now - this.lastSuperAdminCheckTime < 5000) {
      return this.cachedIsSuperAdmin;
    }
    let roleName = this.currentUserRole?.roleName;
    if (!roleName) {
      const user = this.authService.getUser();
      if (user) {
        roleName = user.roleName || user.rolename || user.role_name || user.userrolename || user.userRoleName || user.role || user.role;
      }
    }
    if (!roleName) {
      try {
        const userDataStr = localStorage.getItem('userData');
        if (userDataStr) {
          const userData = JSON.parse(userDataStr);
          roleName = userData.roleName || userData.rolename || userData.role_name || userData.userrolename || userData.userRoleName || userData.role;
        }
      } catch {
        // ignore
      }
    }
    const normalized = this.normalizeRoleName(roleName);
    const isSuperAdmin = normalized === 'superadmin' || normalized === 'super_admin' || normalized === 'super-admin' || normalized.startsWith('superadmin') || normalized.includes('superadmin');
    this.cachedIsSuperAdmin = isSuperAdmin;
    this.lastSuperAdminCheckTime = now;
    return isSuperAdmin;
  }
  // Check if user can manage permissions (Super Admin only)
  canManagePermissions() {
    return this.isSuperAdmin();
  }
  /**
   * Only Super Admin (or user with RBAC.MANAGE) can access Role & Permission screens/APIs.
   * Admin/Manager/User cannot access Role & Permission.
   */
  canManageRbac() {
    return this.isSuperAdmin() || this.hasPermissionCode(_rbac_constants__WEBPACK_IMPORTED_MODULE_1__.RBAC_MANAGE_KEY);
  }
  // Set role name in currentUserRole (used when role name is loaded from other sources)
  setRoleName(roleName) {
    if (!roleName || roleName.trim() === '') {
      return;
    }
    if (this.currentUserRole) {
      this.currentUserRole.roleName = roleName;
    } else {
      // Create currentUserRole if it doesn't exist
      const user = this.authService.getUser();
      const userId = user?.userId || user?.userid || user?.user_id || user?.id || 0;
      const roleId = user?.roleId || user?.roleid || user?.role_id || user?.userroleid || user?.userRoleId || 0;
      this.currentUserRole = {
        userId: userId,
        roleId: roleId,
        roleName: roleName,
        permissions: []
      };
    }
    // Clear Super Admin cache when role name changes
    this.cachedIsSuperAdmin = null;
  }
  static {
    this.ɵfac = function PermissionService_Factory(t) {
      return new (t || PermissionService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__.AuthService));
    };
  }
  static {
    this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
      token: PermissionService,
      factory: PermissionService.ɵfac,
      providedIn: 'root'
    });
  }
}

/***/ }),

/***/ 66978:
/*!*************************************************!*\
  !*** ./src/app/pages/service/rbac.constants.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_ROLE_CODES: () => (/* binding */ DEFAULT_ROLE_CODES),
/* harmony export */   DEFAULT_ROLE_NAMES: () => (/* binding */ DEFAULT_ROLE_NAMES),
/* harmony export */   RBAC_MANAGE_KEY: () => (/* binding */ RBAC_MANAGE_KEY),
/* harmony export */   SUPER_ADMIN_ROLE_CODES: () => (/* binding */ SUPER_ADMIN_ROLE_CODES)
/* harmony export */ });
/**
 * RBAC constants – align with backend permission catalog and default roles.
 * Multi-tenant: roles/assignments are tenant-scoped; permission catalog is global.
 */
/** Permission key for RBAC management. Only Super Admin role gets this. */
const RBAC_MANAGE_KEY = 'RBAC.MANAGE';
/** Default role codes seeded per tenant (is_system=true). */
const DEFAULT_ROLE_CODES = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  ADMINISTRATOR: 'ADMINISTRATOR',
  MANAGER: 'MANAGER',
  USER: 'USER'
};
/** Display names for default roles. */
const DEFAULT_ROLE_NAMES = {
  [DEFAULT_ROLE_CODES.SUPER_ADMIN]: 'Super Admin',
  [DEFAULT_ROLE_CODES.ADMIN]: 'Administrator',
  [DEFAULT_ROLE_CODES.ADMINISTRATOR]: 'Administrator',
  [DEFAULT_ROLE_CODES.MANAGER]: 'Manager',
  [DEFAULT_ROLE_CODES.USER]: 'User'
};
/** Role codes that are considered "Super Admin" for UI/guard checks. */
const SUPER_ADMIN_ROLE_CODES = [DEFAULT_ROLE_CODES.SUPER_ADMIN, 'SUPERADMIN', 'SUPER_ADMIN', 'super admin', 'superadmin'];

/***/ }),

/***/ 57451:
/*!************************************************************************************!*\
  !*** ./src/app/pages/unique-mobile.validator/unique-mobile.validator.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UniqueMobileValidatorComponent: () => (/* binding */ UniqueMobileValidatorComponent),
/* harmony export */   uniqueMobileValidator: () => (/* binding */ uniqueMobileValidator)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);

const _c0 = ["class", "validator"];
class UniqueMobileValidatorComponent {
  static {
    this.ɵfac = function UniqueMobileValidatorComponent_Factory(t) {
      return new (t || UniqueMobileValidatorComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UniqueMobileValidatorComponent,
      selectors: [["app-unique-mobile", 8, "validator"]],
      attrs: _c0,
      decls: 2,
      vars: 0,
      template: function UniqueMobileValidatorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "unique-mobile.validator works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}
function uniqueMobileValidator(existingNumbers) {
  return control => {
    if (!control.value) return null;
    const isDuplicate = existingNumbers.includes(control.value.trim());
    return isDuplicate ? {
      duplicateMobile: true
    } : null;
  };
}

/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiUrl: 'http://localhost:3002',
  apiHost: 'https://connectsite.in/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 80436);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 60316);
/* harmony import */ var _angular_common_locales_en_IN__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/en-IN */ 92308);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 50635);




(0,_angular_common__WEBPACK_IMPORTED_MODULE_1__.registerLocaleData)(_angular_common_locales_en_IN__WEBPACK_IMPORTED_MODULE_2__["default"]);
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map