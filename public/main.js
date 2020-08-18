(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dash-board/dash-board.component */ "./src/app/dash-board/dash-board.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");







const routes = [
    { path: "", component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_2__["DashBoardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'dashboard', component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_2__["DashBoardComponent"] },
    { path: '*', component: _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AppComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.title = 'Covid19 Status';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash-board/dash-board.component */ "./src/app/dash-board/dash-board.component.ts");
/* harmony import */ var _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mapview/mapview.component */ "./src/app/mapview/mapview.component.ts");
/* harmony import */ var _country_list_country_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./country-list/country-list.component */ "./src/app/country-list/country-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _deathcount_deathcount_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./deathcount/deathcount.component */ "./src/app/deathcount/deathcount.component.ts");
/* harmony import */ var _recovercount_recovercount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./recovercount/recovercount.component */ "./src/app/recovercount/recovercount.component.ts");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./line-chart/line-chart.component */ "./src/app/line-chart/line-chart.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_11__["GoogleChartsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            angular_google_charts__WEBPACK_IMPORTED_MODULE_11__["GoogleChartsModule"].forRoot({ mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__["DashBoardComponent"],
        _country_list_country_list_component__WEBPACK_IMPORTED_MODULE_7__["CountryListComponent"],
        _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_6__["MapviewComponent"],
        _deathcount_deathcount_component__WEBPACK_IMPORTED_MODULE_9__["DeathcountComponent"],
        _recovercount_recovercount_component__WEBPACK_IMPORTED_MODULE_10__["RecovercountComponent"],
        _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LineChartComponent"],
        _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        angular_google_charts__WEBPACK_IMPORTED_MODULE_11__["GoogleChartsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], angular_google_charts__WEBPACK_IMPORTED_MODULE_11__["GoogleChartsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__["DashBoardComponent"],
                    _country_list_country_list_component__WEBPACK_IMPORTED_MODULE_7__["CountryListComponent"],
                    _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_6__["MapviewComponent"],
                    _deathcount_deathcount_component__WEBPACK_IMPORTED_MODULE_9__["DeathcountComponent"],
                    _recovercount_recovercount_component__WEBPACK_IMPORTED_MODULE_10__["RecovercountComponent"],
                    _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_12__["LineChartComponent"],
                    _login_login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_11__["GoogleChartsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    angular_google_charts__WEBPACK_IMPORTED_MODULE_11__["GoogleChartsModule"].forRoot({ mapsApiKey: 'AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY' })
                ],
                schemas: [
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"],
                    _angular_core__WEBPACK_IMPORTED_MODULE_1__["NO_ERRORS_SCHEMA"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/commonservice.service.ts":
/*!******************************************!*\
  !*** ./src/app/commonservice.service.ts ***!
  \******************************************/
/*! exports provided: CommonserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonserviceService", function() { return CommonserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
header.set('Access-Control-Allow-Origin', '*');
class CommonserviceService {
    constructor(http) {
        this.http = http;
        this.ChangeCountry = false;
        this.loggedIn = false;
        this.staticsReport = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.lineChartReport = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        console.log("inside the service");
        // if(this.loggedIn) {
        this.http.get('https://api.covid19api.com/summary').subscribe(data => {
            this.staticsReport.next(data);
        });
        this.http.get('https://api.covid19api.com/dayone/country/' + "afghanistan").subscribe(data => {
            console.log("data vvalue updated");
            this.lineChartReport.next(data);
        });
    }
    checkLogin(username, password) {
        if (username === password) {
            return true;
        }
        else {
            return false;
        }
    }
    toggleNightMode(className, darkMode) {
        if (!darkMode) {
            return className;
        }
        else {
            return className + '-dark';
        }
    }
    getMapvalue(slug) {
        return this.http.get('https://api.covid19api.com/live/country/' + slug);
    }
    getWorldWideInfo(slug) {
        this.http.get('https://api.covid19api.com/live/country/' + slug).subscribe(data => {
            this.lineChartReport.next(data);
        });
    }
}
CommonserviceService.ɵfac = function CommonserviceService_Factory(t) { return new (t || CommonserviceService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CommonserviceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CommonserviceService, factory: CommonserviceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CommonserviceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/country-list/country-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/country-list/country-list.component.ts ***!
  \********************************************************/
/*! exports provided: CountryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountryListComponent", function() { return CountryListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function CountryListComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r1.Country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r1.TotalConfirmed);
} }
class CountryListComponent {
    constructor(service) {
        this.service = service;
        /**
         * CSS Properties
         */
        this.container = 'container';
        this.countInfo = 'countInfo';
        this.scroll = 'scroll';
    }
    ngOnInit() {
        console.log("contry list");
        this.service.staticsReport.subscribe(data => {
            console.log("inside contry list");
            console.log(data);
            this.country =
                Object.values(data['Countries']).sort((a, b) => (a['TotalConfirmed'] < b['TotalConfirmed']) ? 1 : -1);
            this.totalConfirmed = data['Global'].TotalConfirmed;
        });
    }
}
CountryListComponent.ɵfac = function CountryListComponent_Factory(t) { return new (t || CountryListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
CountryListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CountryListComponent, selectors: [["app-country-list"]], inputs: { darkMode: "darkMode" }, decls: 9, vars: 5, consts: [[3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-8"], [1, "col-md-4"]], template: function CountryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total Confirmed ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CountryListComponent_li_8_Template, 7, 2, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.container, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.countInfo, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.totalConfirmed);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.scroll, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".scroll-dark[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n    width: 100%;\r\n    background-color: #0c072e;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    font-family: serif;\r\n    color: white;\r\n}\r\n.container-dark[_ngcontent-%COMP%]{\r\n    padding-left: 15px;\r\n    background-color: #05021c;\r\n  }\r\n.container[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n  }\r\n.scroll[_ngcontent-%COMP%] {\r\n    height: 90vh;\r\n    width: 100%;\r\n    background-color: white;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    font-family: serif;\r\n  }\r\n.countInfo[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n    font-family: fantasysans-serif;\r\n  }\r\n.countInfo-dark[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n    font-family: fantasysans-serif;\r\n    color: white;\r\n  }\r\nli[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnRyeS1saXN0L2NvdW50cnktbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtFQUMzQjtBQUNGO0lBQ0ksNEJBQTRCO0VBQzlCO0FBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjtBQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztBQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7QUFDQTtJQUNFLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJzcmMvYXBwL2NvdW50cnktbGlzdC9jb3VudHJ5LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JvbGwtZGFyayB7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYzA3MmU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmNvbnRhaW5lci1kYXJre1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDIxYztcclxuICB9XHJcbi5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gIH1cclxuICAuc2Nyb2xsIHtcclxuICAgIGhlaWdodDogOTB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgfVxyXG4gIC5jb3VudEluZm97XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBmb250LWZhbWlseTogZmFudGFzeXNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5jb3VudEluZm8tZGFya3tcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5c2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CountryListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-country-list',
                templateUrl: './country-list.component.html',
                styleUrls: ['./country-list.component.css']
            }]
    }], function () { return [{ type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }]; }, { darkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/dash-board/dash-board.component.ts":
/*!****************************************************!*\
  !*** ./src/app/dash-board/dash-board.component.ts ***!
  \****************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _country_list_country_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../country-list/country-list.component */ "./src/app/country-list/country-list.component.ts");
/* harmony import */ var _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mapview/mapview.component */ "./src/app/mapview/mapview.component.ts");
/* harmony import */ var _deathcount_deathcount_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../deathcount/deathcount.component */ "./src/app/deathcount/deathcount.component.ts");
/* harmony import */ var _recovercount_recovercount_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../recovercount/recovercount.component */ "./src/app/recovercount/recovercount.component.ts");
/* harmony import */ var _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../line-chart/line-chart.component */ "./src/app/line-chart/line-chart.component.ts");










class DashBoardComponent {
    constructor(cdRef, service, route) {
        this.cdRef = cdRef;
        this.service = service;
        this.route = route;
        this.body = 'body';
        this.col_sm_4 = 'col-sm-4';
        this.deathContainer = 'deathContainer';
        this.recoverdContainer = 'recoverdContainer';
        this.lineChartContainer = 'lineChartContainer';
        this.darkMode = false;
    }
    ngOnInit() {
    }
    toggle() {
        this.darkMode = !this.darkMode;
    }
    getLable() {
        if (!this.darkMode) {
            return 'body-light';
        }
        else {
            return 'body-dark';
        }
    }
}
DashBoardComponent.ɵfac = function DashBoardComponent_Factory(t) { return new (t || DashBoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
DashBoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashBoardComponent, selectors: [["app-dash-board"]], decls: 29, vars: 9, consts: [["lang", "en"], ["charset", "utf-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"], [3, "ngClass"], [1, "fixed-header"], [1, "container"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "customSwitches", 1, "custom-control-input", 3, "click"], ["for", "customSwitches", 1, "custom-control-label"], [1, "dashboard"], [1, "row"], [1, "col-sm-3", "padding-0"], [3, "darkMode"], [1, "col-sm-5", "padding-0"], [1, "col-sm-4", 3, "ngClass"], [1, "col-md-6", 3, "ngClass"], [2, "background-color", "whitesmoke"], [1, "fixed-footer"]], template: function DashBoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "meta", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "link", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "body", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashBoardComponent_Template_input_click_10_listener() { return ctx.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Night Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-country-list", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "app-mapview", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-deathcount", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-recovercount", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "app-line-chart", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.body, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkMode", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkMode", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.lineChartContainer, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.deathContainer, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkMode", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.recoverdContainer, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkMode", ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("darkMode", ctx.darkMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _country_list_country_list_component__WEBPACK_IMPORTED_MODULE_4__["CountryListComponent"], _mapview_mapview_component__WEBPACK_IMPORTED_MODULE_5__["MapviewComponent"], _deathcount_deathcount_component__WEBPACK_IMPORTED_MODULE_6__["DeathcountComponent"], _recovercount_recovercount_component__WEBPACK_IMPORTED_MODULE_7__["RecovercountComponent"], _line_chart_line_chart_component__WEBPACK_IMPORTED_MODULE_8__["LineChartComponent"]], styles: ["html[_ngcontent-%COMP%] {\r\n        --bg: #FCFCFC;\r\n        --bg-panel: #EBEBEB;\r\n        --color-headings:#0077FF;\r\n        --color-text: #333333;\r\n    }\r\n    html[data-theme=\"dark\"][_ngcontent-%COMP%] {\r\n        --bg: black;\r\n        --bg-panel: black;\r\n        --color-headings:black;\r\n        --color-text: #black;\r\n    }\r\n    body[_ngcontent-%COMP%]{        \r\n        padding-top: 60px;\r\n        padding-bottom: 40px;\r\n        background-color: var(--bg);\r\n    }\r\n    .container[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        margin: 0 auto; \r\n    }\r\n    .fixed-header[_ngcontent-%COMP%], .fixed-footer[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        position: fixed;        \r\n        background: #333;\r\n        padding: 10px 0;\r\n        color: #fff;\r\n        text-align: right;\r\n    }\r\n    .fixed-header[_ngcontent-%COMP%]{\r\n        top: 0;\r\n    }\r\n    .fixed-footer[_ngcontent-%COMP%]{\r\n        bottom: 0;\r\n    }\r\n    \r\n    nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        color: #fff;\r\n        text-decoration: none;\r\n        padding: 7px 25px;\r\n        display: inline-block;\r\n    }\r\n    .col-sm-3[_ngcontent-%COMP%] {\r\n        height: 80vh;\r\n    }\r\n    .col-sm-5[_ngcontent-%COMP%] {\r\n        height: 80vh;\r\n    }\r\n    .lineChartContainer[_ngcontent-%COMP%] {\r\n        background-color: whitesmoke;\r\n        height: 84vh;\r\n    }\r\n    .lineChartContainer-dark[_ngcontent-%COMP%] {\r\n        background-color: #05021c;\r\n        height: 84vh;\r\n    }\r\n    .dashboard[_ngcontent-%COMP%] {\r\n       \r\n        overflow-x: hidden;\r\n        overflow-y: hidden;\r\n    }\r\n    \r\n    .padding-5[_ngcontent-%COMP%]{\r\n    padding-left:15px;\r\n    }\r\n    .padding-5-dark[_ngcontent-%COMP%] {\r\n        padding-left:15px;\r\n        background-color:#0c072e;\r\n        }\r\n    #spantag[_ngcontent-%COMP%] {\r\n        color: red;\r\n    }\r\n    body-light[_ngcontent-%COMP%]{\r\n        background: white;\r\n    }\r\n    .body-dark[_ngcontent-%COMP%]{\r\n        background: #0c072e;\r\n    }\r\n    .deathContainer[_ngcontent-%COMP%]{\r\n        padding-right: 0;\r\n        background: whitesmoke;\r\n    }\r\n    .deathContainer-dark[_ngcontent-%COMP%]{\r\n        padding-right: 0;\r\n        background: #05021c;\r\n    }\r\n    .recoverdContainer[_ngcontent-%COMP%] {\r\n        background: whitesmoke;\r\n    }\r\n    .recoverdContainer-dark[_ngcontent-%COMP%] {\r\n        background: #05021c;\r\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaC1ib2FyZC9kYXNoLWJvYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IklBQUk7NENBQ3dDO0lBQ3hDO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix3QkFBd0I7UUFDeEIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLHNCQUFzQjtRQUN0QixvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsMkJBQTJCO0lBQy9CO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsY0FBYyxFQUFFLGdDQUFnQztJQUNwRDtJQUNBO1FBQ0ksV0FBVztRQUNYLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsZUFBZTtRQUNmLFdBQVc7UUFDWCxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLE1BQU07SUFDVjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0EsNkNBQTZDO0lBQzdDO1FBQ0ksV0FBVztRQUNYLHFCQUFxQjtRQUNyQixpQkFBaUI7UUFDakIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSw0QkFBNEI7UUFDNUIsWUFBWTtJQUNoQjtJQUNBO1FBQ0kseUJBQXlCO1FBQ3pCLFlBQVk7SUFDaEI7SUFDQTtPQUNHLDRCQUE0QjtRQUMzQixrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCO0lBQ0E7OztNQUdFO0lBQ0Y7SUFDQSxpQkFBaUI7SUFDakI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQix3QkFBd0I7UUFDeEI7SUFDSjtRQUNJLFVBQVU7SUFDZDtJQUNBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZGFzaC1ib2FyZC9kYXNoLWJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgLyogQWRkIHNvbWUgcGFkZGluZyBvbiBkb2N1bWVudCdzIGJvZHkgdG8gcHJldmVudCB0aGUgY29udGVudFxyXG4gICAgdG8gZ28gdW5kZXJuZWF0aCB0aGUgaGVhZGVyIGFuZCBmb290ZXIgKi9cclxuICAgIGh0bWwge1xyXG4gICAgICAgIC0tYmc6ICNGQ0ZDRkM7XHJcbiAgICAgICAgLS1iZy1wYW5lbDogI0VCRUJFQjtcclxuICAgICAgICAtLWNvbG9yLWhlYWRpbmdzOiMwMDc3RkY7XHJcbiAgICAgICAgLS1jb2xvci10ZXh0OiAjMzMzMzMzO1xyXG4gICAgfVxyXG4gICAgaHRtbFtkYXRhLXRoZW1lPVwiZGFya1wiXSB7XHJcbiAgICAgICAgLS1iZzogYmxhY2s7XHJcbiAgICAgICAgLS1iZy1wYW5lbDogYmxhY2s7XHJcbiAgICAgICAgLS1jb2xvci1oZWFkaW5nczpibGFjaztcclxuICAgICAgICAtLWNvbG9yLXRleHQ6ICNibGFjaztcclxuICAgIH1cclxuICAgIGJvZHl7ICAgICAgICBcclxuICAgICAgICBwYWRkaW5nLXRvcDogNjBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IC8qIENlbnRlciB0aGUgRElWIGhvcml6b250YWxseSAqL1xyXG4gICAgfVxyXG4gICAgLmZpeGVkLWhlYWRlciwgLmZpeGVkLWZvb3RlcntcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7ICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMzMzO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5maXhlZC1oZWFkZXJ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG4gICAgLmZpeGVkLWZvb3RlcntcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICB9ICAgIFxyXG4gICAgLyogU29tZSBtb3JlIHN0eWxlcyB0byBiZXV0aWZ5IHRoaXMgZXhhbXBsZSAqL1xyXG4gICAgbmF2IGF7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweCAyNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIC5jb2wtc20tMyB7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgfVxyXG4gICAgLmNvbC1zbS01IHtcclxuICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICB9XHJcbiAgICAubGluZUNoYXJ0Q29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgICAgIGhlaWdodDogODR2aDtcclxuICAgIH1cclxuICAgIC5saW5lQ2hhcnRDb250YWluZXItZGFyayB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA1MDIxYztcclxuICAgICAgICBoZWlnaHQ6IDg0dmg7XHJcbiAgICB9XHJcbiAgICAuZGFzaGJvYXJkIHtcclxuICAgICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXHJcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC8qIC5wYWRkaW5nLTB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjA7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MDtcclxuICAgIH0qL1xyXG4gICAgLnBhZGRpbmctNXtcclxuICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgfSBcclxuICAgIC5wYWRkaW5nLTUtZGFyayB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjE1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjojMGMwNzJlO1xyXG4gICAgICAgIH0gXHJcbiAgICAjc3BhbnRhZyB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuICAgIGJvZHktbGlnaHR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAuYm9keS1kYXJre1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwYzA3MmU7XHJcbiAgICB9XHJcbiAgICAuZGVhdGhDb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgfVxyXG4gICAgLmRlYXRoQ29udGFpbmVyLWRhcmt7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMDUwMjFjO1xyXG4gICAgfVxyXG4gICAgLnJlY292ZXJkQ29udGFpbmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZXNtb2tlO1xyXG4gICAgfVxyXG4gICAgLnJlY292ZXJkQ29udGFpbmVyLWRhcmsge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMwNTAyMWM7XHJcbiAgICB9Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashBoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dash-board',
                templateUrl: './dash-board.component.html',
                styleUrls: ['./dash-board.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/deathcount/deathcount.component.ts":
/*!****************************************************!*\
  !*** ./src/app/deathcount/deathcount.component.ts ***!
  \****************************************************/
/*! exports provided: DeathcountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeathcountComponent", function() { return DeathcountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function DeathcountComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r1.Country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r1.TotalDeaths);
} }
class DeathcountComponent {
    constructor(service) {
        this.service = service;
        /**
         * CSS Properties
         */
        this.container = 'container';
        this.countInfo = 'countInfo';
        this.scroll = 'scroll';
    }
    ngOnInit() {
        this.service.staticsReport.subscribe(data => {
            this.country = Object.values(data['Countries']).sort((a, b) => (a['TotalDeaths'] < b['TotalDeaths']) ? 1 : -1);
            this.TotalDeath = data['Global'].TotalDeaths;
        });
    }
}
DeathcountComponent.ɵfac = function DeathcountComponent_Factory(t) { return new (t || DeathcountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
DeathcountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DeathcountComponent, selectors: [["app-deathcount"]], inputs: { darkMode: "darkMode" }, decls: 9, vars: 5, consts: [[3, "ngClass"], ["id", "title"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-7"], [1, "col-md-5"]], template: function DeathcountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total Deaths");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DeathcountComponent_li_8_Template, 7, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.container, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.countInfo, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TotalDeath);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.scroll, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%]{\r\n    background-color: whitesmoke;\r\n    padding-right: 0;\r\n  }\r\n  .container-dark[_ngcontent-%COMP%]{\r\n    background-color: #05021c;\r\n    padding-right: 0;\r\n  }\r\n  .scroll[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    width: 100%;\r\n    background-color: white;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    font-family: serif;\r\n    \r\n  }\r\n  .scroll-dark[_ngcontent-%COMP%]{\r\n    height: 30vh;\r\n    width: 100%;\r\n    background-color: #0c072e;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    font-family: serif;\r\n    color: white;\r\n  }\r\n  li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n  }\r\n  .countInfo[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n    font-family: fantasysans-serif;\r\n  }\r\n  .countInfo-dark[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n    font-family: fantasysans-serif;\r\n    color: white;\r\n  }\r\n  #title[_ngcontent-%COMP%] {\r\n      color: red;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVhdGhjb3VudC9kZWF0aGNvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjs7RUFFcEI7RUFFQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0lBQzlCLFlBQVk7RUFDZDtFQUNBO01BQ0ksVUFBVTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvZGVhdGhjb3VudC9kZWF0aGNvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZGFya3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwNTAyMWM7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gIH1cclxuICAuc2Nyb2xsIHtcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBmb250LWZhbWlseTogc2VyaWY7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5zY3JvbGwtZGFya3tcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBjMDcyZTtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgbGl7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIH1cclxuICAuY291bnRJbmZve1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3lzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuY291bnRJbmZvLWRhcmt7XHJcbiAgICBoZWlnaHQ6IDY1cHg7XHJcbiAgICBmb250LWZhbWlseTogZmFudGFzeXNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICN0aXRsZSB7XHJcbiAgICAgIGNvbG9yOiByZWQ7XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DeathcountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-deathcount',
                templateUrl: './deathcount.component.html',
                styleUrls: ['./deathcount.component.css']
            }]
    }], function () { return [{ type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }]; }, { darkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/line-chart/line-chart.component.ts":
/*!****************************************************!*\
  !*** ./src/app/line-chart/line-chart.component.ts ***!
  \****************************************************/
/*! exports provided: LineChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineChartComponent", function() { return LineChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");






function LineChartComponent_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const country_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", country_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](country_r4);
} }
function LineChartComponent_option_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngValue", status_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](status_r5);
} }
function LineChartComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.title)("type", ctx_r2.type)("data", ctx_r2.lineChartData)("options", ctx_r2.options)("columnNames", ctx_r2.columnNames)("width", 500)("height", 220);
} }
function LineChartComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r3.title)("type", ctx_r3.type)("data", ctx_r3.lineChartData)("options", ctx_r3.options_dark)("columnNames", ctx_r3.columnNames)("width", 500)("height", 220);
} }
const _c0 = function (a0, a1) { return { "container": a0, "container-dark": a1 }; };
class LineChartComponent {
    constructor(service, cdf) {
        this.service = service;
        this.cdf = cdf;
        /**
         * CSS Properties
         */
        this.container = 'container';
        this.title = 'Country based Corono Status';
        this.type = 'LineChart';
        this.options_dark = {
            backgroundColor: "#0c072e",
            hAxis: {
                textStyle: { color: "white" }
            },
            vAxis: {
                title: 'Peopel Count',
                titleTextStyle: {
                    color: 'white'
                },
                textStyle: { color: "white" }
            },
            legend: { position: 'bottom', textStyle: { color: 'red', fontSize: 16 } },
        };
        this.options = {
            backgroundColor: "white",
            vAxis: {
                title: 'Peopel Count'
            },
            legend: { textStyle: { color: 'white', fontSize: 16 } },
        };
        this.width = 400;
        this.height = 300;
        this.lineChartData = [];
        this.StatusList = ['Active', 'Confirmed', 'Recovered'];
        this.statusType = 'Active';
        this.StatusReport = [];
    }
    ngOnInit() {
        this.service.staticsReport.subscribe(data => {
            this.countryInfo = Object.values(data['Countries']);
            this.countryList = Object.values(data['Countries']).map(t => { return t['Country']; });
        });
        this.service.lineChartReport.subscribe(data => {
            this.lineChartData = [];
            this.StatusReport = [];
            Object.values(data).forEach((test, i) => {
                let sampleArray = [];
                if (this.lineChartData.length < 10 && this.lineChartData.find(t => t === test.Date) === undefined) {
                    sampleArray.push(test.Date);
                    sampleArray.push(data[i][this.statusType]);
                    this.lineChartData[i] = sampleArray;
                    this.StatusReport.push(test);
                }
            });
            console.log(this.lineChartData);
        });
    }
    changeCity(e) {
        let countrySlug = Object.values(this.countryInfo).filter(c => {
            if (c['Country'] === e.target.value) {
                return c['Slug'];
            }
        });
        this.service.getWorldWideInfo(countrySlug[0]['Slug']);
    }
    ChangeStatus(e) {
        this.lineChartData = [];
        this.statusType = e.target.value;
        this.StatusReport.forEach((test, i) => {
            let sampleArray = [];
            sampleArray.push(test.Date);
            sampleArray.push(this.StatusReport[i][this.statusType]);
            this.lineChartData.push(sampleArray);
        });
    }
}
LineChartComponent.ɵfac = function LineChartComponent_Factory(t) { return new (t || LineChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
LineChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LineChartComponent, selectors: [["app-line-chart"]], inputs: { darkMode: "darkMode" }, decls: 12, vars: 8, consts: [[3, "ngClass"], [1, "row"], [1, "col-md-6"], [1, "dropdown"], [1, "custom-select", 3, "change"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "lineGraph", 4, "ngIf"], ["class", "container", 4, "ngIf"], [3, "ngValue"], [1, "lineGraph"], [3, "title", "type", "data", "options", "columnNames", "width", "height"], [1, "container"]], template: function LineChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineChartComponent_Template_select_change_4_listener($event) { return ctx.changeCity($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LineChartComponent_option_5_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function LineChartComponent_Template_select_change_8_listener($event) { return ctx.ChangeStatus($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LineChartComponent_option_9_Template, 2, 2, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LineChartComponent_div_10_Template, 2, 7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, LineChartComponent_div_11_Template, 2, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !ctx.darkMode, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countryList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.StatusList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], angular_google_charts__WEBPACK_IMPORTED_MODULE_4__["GoogleChartComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n    width: 100% ;\r\n    display: block;\r\n    position: relative;\r\n    padding-top: 10px;\r\n}\r\n.lineGraph[_ngcontent-%COMP%]{\r\n    padding-top: 10px;\r\n}\r\n.container-dark[_ngcontent-%COMP%] {\r\n    width: 100% ;\r\n    display: block;\r\n    position: relative;\r\n    padding-top: 10px;\r\n    background-color: #05021c;\r\n}\r\n#chart[_ngcontent-%COMP%] {\r\n    display: inline-block;\r\n    position: relative;\r\n}\r\n.dropdown[_ngcontent-%COMP%] {\r\n    width: 200px;\r\n    font-family: fantasysans-serif;\r\n    background-color: gray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGluZS1jaGFydC9saW5lLWNoYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9saW5lLWNoYXJ0L2xpbmUtY2hhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDEwMCUgO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG4ubGluZUdyYXBoe1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmNvbnRhaW5lci1kYXJrIHtcclxuICAgIHdpZHRoOiAxMDAlIDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMjFjO1xyXG59XHJcbiNjaGFydCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5c2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LineChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-line-chart',
                templateUrl: './line-chart.component.html',
                styleUrls: ['./line-chart.component.css']
            }]
    }], function () { return [{ type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { darkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






function LoginComponent_div_0_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Credential ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login to your account");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Username: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_0_Template_input_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.username = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_div_0_Template_input_ngModelChange_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.password = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LoginComponent_div_0_span_12_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_0_Template_button_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onSubmit(ctx_r5.username, ctx_r5.password); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.username);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.password);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginFailed);
} }
class LoginComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.username = "";
        this.password = "";
        this.flag = false;
        this.loginFailed = false;
    }
    ngOnInit() {
    }
    onSubmit(name, password) {
        if (this.service.checkLogin(this.username, this.password) && !this.service.loggedIn) {
            this.service.loggedIn = true;
            this.route.navigate(['/dashboard']);
        }
        else {
            this.loginFailed = true;
            this.route.navigate(['']);
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 1, vars: 1, consts: [["class", "container", 4, "ngIf"], [1, "container"], ["id", "username"], ["type", "text", 3, "ngModel", "ngModelChange"], ["id", "password"], ["type", "password", 3, "ngModel", "ngModelChange"], [1, "loginFailed"], [4, "ngIf"], [3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginComponent_div_0_Template, 15, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.service.loggedIn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: [".title[_ngcontent-%COMP%]{\r\n    text-align: center ;\r\n\r\n}\r\n.header[_ngcontent-%COMP%]{\r\n    background-color: red;\r\n}\r\n#username[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\r\n#password[_ngcontent-%COMP%] {\r\n    padding: 5px;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    width: 400px;\r\n    margin: 0 auto;\r\n}\r\n.loginFailed[_ngcontent-%COMP%] {\r\ncolor: red;\r\nfont-weight: bold;\r\npadding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7QUFDQTtBQUNBLFVBQVU7QUFDVixpQkFBaUI7QUFDakIsWUFBWTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlciA7XHJcblxyXG59XHJcbi5oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbiN1c2VybmFtZXtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG4jcGFzc3dvcmQge1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuLmxvZ2luRmFpbGVkIHtcclxuY29sb3I6IHJlZDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnBhZGRpbmc6IDVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mapview/mapview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/mapview/mapview.component.ts ***!
  \**********************************************/
/*! exports provided: MapviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapviewComponent", function() { return MapviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/__ivy_ngcc__/fesm2015/angular-google-charts.js");





function MapviewComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.title)("type", ctx_r0.type)("data", ctx_r0.statusReport)("columns", ctx_r0.columnNames)("options", ctx_r0.options);
} }
function MapviewComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "google-chart", 9, 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r1.title)("type", ctx_r1.type)("data", ctx_r1.statusReport)("columns", ctx_r1.columnNames)("options", ctx_r1.options_dark);
} }
class MapviewComponent {
    constructor(service, changeDetector) {
        this.service = service;
        this.changeDetector = changeDetector;
        this.title = '';
        this.type = 'GeoChart';
        this.statusReport = [];
        this.allOverStatus = [];
        this.columnNames = ["Latitude", "Longitude", "Name"];
        this.options_dark = {
            backgroundColor: "#05021c",
            showTip: true,
            colors: "red",
            legend: { position: 'bottom', textStyle: { color: 'blue', fontSize: 16 } },
        };
        this.options = {
            backgroundColor: 'white',
            showTip: true,
            colors: "red",
            legend: { position: 'bottom', textStyle: { color: 'blue', fontSize: 16 } },
        };
        this.width = 500;
        this.height = 500;
    }
    ngOnInit() {
        if (!this.darkMode) {
            this.options.backgroundColor = 'white';
        }
        else {
            this.options.backgroundColor = '#05021c';
        }
        this.changeDetector.detectChanges();
        this.service.staticsReport.subscribe(data => {
            this.countryList = Object.values(data['Countries']).map(t => { return t['Slug']; });
            this.countryList = this.countryList.slice(0, 9);
            this.countryList.forEach(element => {
                this.service.getMapvalue(element).subscribe((data) => {
                    let sampleArray = [];
                    sampleArray.push(parseInt(data[0].Lat));
                    sampleArray.push(parseInt(data[0].Lon));
                    sampleArray.push(parseInt(data[0].Confirmed));
                    this.statusReport.push(sampleArray);
                    this.allOverStatus.push(data[0]);
                });
            });
        });
    }
    ChangeStatus(status) {
        this.statusReport = [];
        this.allOverStatus.forEach((element, i) => {
            let sampleArray = [];
            sampleArray.push(parseInt(element.Lat));
            sampleArray.push(parseInt(element.Lon));
            sampleArray.push(parseInt(this.allOverStatus[i][status]));
            this.statusReport.push(sampleArray);
        });
    }
}
MapviewComponent.ɵfac = function MapviewComponent_Factory(t) { return new (t || MapviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
MapviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MapviewComponent, selectors: [["app-mapview"]], inputs: { darkMode: "darkMode" }, decls: 16, vars: 2, consts: [["id", "outer", 1, "container"], [1, "row"], [1, "col-sm"], [1, "inner"], ["type", "submit", 1, "msgBtn", 3, "click"], ["type", "submit", 1, "msgBtn2", 3, "click"], [1, "msgBtn3", 3, "click"], ["class", "mapView", 4, "ngIf"], [1, "mapView"], [3, "title", "type", "data", "columns", "options"], ["chart", ""]], template: function MapviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapviewComponent_Template_button_click_4_listener() { return ctx.ChangeStatus("Confirmed"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "TOTAL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapviewComponent_Template_button_click_8_listener() { return ctx.ChangeStatus("Recovered"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "RECOVERED");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MapviewComponent_Template_button_click_12_listener() { return ctx.ChangeStatus("Deaths"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "DEATHS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MapviewComponent_div_14_Template, 3, 5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, MapviewComponent_div_15_Template, 3, 5, "div", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.darkMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.darkMode);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], angular_google_charts__WEBPACK_IMPORTED_MODULE_3__["GoogleChartComponent"]], styles: ["agm-map[_ngcontent-%COMP%] {\r\n    height: 100%;\r\n    width: 100%;\r\n  }\r\n\r\n.col-sm[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    font-family: serif;\r\n    font-size: small;\r\n    padding: 0%;\r\n}\r\n\r\n#outer[_ngcontent-%COMP%]\r\n{\r\n    width:100%;\r\n    \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n  width: -webkit-fill-available;\r\n  margin: 0%;\r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\nmax-width: 100%;\r\nmax-height: 100%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFwdmlldy9tYXB2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVGO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBOztJQUVJLFVBQVU7O0FBRWQ7O0FBQ0E7RUFDRSw2QkFBNkI7RUFDN0IsVUFBVTtBQUNaOztBQUVBO0FBQ0EsZUFBZTtBQUNmLGdCQUFnQjtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21hcHZpZXcvbWFwdmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4uY29sLXNte1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBhZGRpbmc6IDAlO1xyXG59XHJcbiNvdXRlclxyXG57XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgXHJcbn1cclxuYnV0dG9ue1xyXG4gIHdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG4gIG1hcmdpbjogMCU7XHJcbn1cclxuXHJcbi5jb250YWluZXIge1xyXG5tYXgtd2lkdGg6IDEwMCU7XHJcbm1heC1oZWlnaHQ6IDEwMCU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mapview',
                templateUrl: './mapview.component.html',
                styleUrls: ['./mapview.component.css']
            }]
    }], function () { return [{ type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { darkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/recovercount/recovercount.component.ts":
/*!********************************************************!*\
  !*** ./src/app/recovercount/recovercount.component.ts ***!
  \********************************************************/
/*! exports provided: RecovercountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecovercountComponent", function() { return RecovercountComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _commonservice_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../commonservice.service */ "./src/app/commonservice.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function RecovercountComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hero_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hero_r1.Country, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hero_r1.TotalRecovered);
} }
class RecovercountComponent {
    constructor(service) {
        this.service = service;
        /**
         * CSS Properties
         */
        this.container = 'container';
        this.countInfo = 'countInfo';
        this.scroll = 'scroll';
    }
    ngOnInit() {
        this.service.staticsReport.subscribe(data => {
            this.country = Object.values(data['Countries']).sort((a, b) => (a['TotalRecovered'] < b['TotalRecovered']) ? 1 : -1);
            this.TotalRecoverd = data['Global'].TotalRecovered;
        });
    }
}
RecovercountComponent.ɵfac = function RecovercountComponent_Factory(t) { return new (t || RecovercountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"])); };
RecovercountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RecovercountComponent, selectors: [["app-recovercount"]], inputs: { darkMode: "darkMode" }, decls: 9, vars: 5, consts: [[3, "ngClass"], ["id", "title"], [4, "ngFor", "ngForOf"], [1, "row"], [1, "col-md-6"]], template: function RecovercountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Total Recovered");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RecovercountComponent_li_8_Template, 7, 2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.container, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.countInfo, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.TotalRecoverd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.service.toggleNightMode(ctx.scroll, ctx.darkMode));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.country);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".container[_ngcontent-%COMP%]{\r\n    padding-right: 0;\r\n    background-color: whitesmoke;\r\n  }\r\n  .container-dark[_ngcontent-%COMP%]{\r\n    padding-right: 0;\r\n    background-color: #05021c;;\r\n  }\r\n  .scroll[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    width: 100%;\r\n    background-color: white;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    font-family: serif;\r\n  }\r\n  .scroll-dark[_ngcontent-%COMP%] {\r\n    height: 30vh;\r\n    width: 100%;\r\n    background-color: #0c072e;;\r\n    overflow-y: scroll;\r\n    overflow-x: hidden;\r\n    font-family: serif;\r\n    color:white\r\n  }\r\n  li[_ngcontent-%COMP%]{\r\n    list-style: none;\r\n  }\r\n  .countInfo[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n    font-family: fantasysans-serif;\r\n  }\r\n  .countInfo-dark[_ngcontent-%COMP%]{\r\n    height: 65px;\r\n    font-family: fantasysans-serif;\r\n    color: white;\r\n  }\r\n  #title[_ngcontent-%COMP%] {\r\n      color: green;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVjb3ZlcmNvdW50L3JlY292ZXJjb3VudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLDRCQUE0QjtFQUM5QjtFQUNBO0lBQ0UsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtFQUMzQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0VBQ0Y7RUFDQTtJQUNFLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0UsWUFBWTtJQUNaLDhCQUE4QjtJQUM5QixZQUFZO0VBQ2Q7RUFDQTtNQUNJLFlBQVk7RUFDaEIiLCJmaWxlIjoic3JjL2FwcC9yZWNvdmVyY291bnQvcmVjb3ZlcmNvdW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG4gIC5jb250YWluZXItZGFya3tcclxuICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDUwMjFjOztcclxuICB9XHJcbiAgLnNjcm9sbCB7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgZm9udC1mYW1pbHk6IHNlcmlmO1xyXG4gIH1cclxuICAuc2Nyb2xsLWRhcmsge1xyXG4gICAgaGVpZ2h0OiAzMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGMwNzJlOztcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICAgIGNvbG9yOndoaXRlXHJcbiAgfVxyXG4gIGxpe1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICB9XHJcbiAgLmNvdW50SW5mb3tcclxuICAgIGhlaWdodDogNjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5c2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmNvdW50SW5mby1kYXJre1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IGZhbnRhc3lzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAjdGl0bGUge1xyXG4gICAgICBjb2xvcjogZ3JlZW47XHJcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RecovercountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-recovercount',
                templateUrl: './recovercount.component.html',
                styleUrls: ['./recovercount.component.css']
            }]
    }], function () { return [{ type: _commonservice_service__WEBPACK_IMPORTED_MODULE_1__["CommonserviceService"] }]; }, { darkMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Angular Application\step\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map