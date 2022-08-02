"use strict";
(self["webpackChunkdaomatys_web_fortress"] = self["webpackChunkdaomatys_web_fortress"] || []).push([["main"],{

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header/header.component */ 7899);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/main.component */ 639);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/footer/footer.component */ 7646);




class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-main");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _components_main_main_component__WEBPACK_IMPORTED_MODULE_1__.MainComponent, _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["app-main[_ngcontent-%COMP%], app-header[_ngcontent-%COMP%], app-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\napp-main[_ngcontent-%COMP%], app-header[_ngcontent-%COMP%] {\n  background-color: #074839;\n}\n\napp-footer[_ngcontent-%COMP%] {\n  background-color: #000705;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyIsIi4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBOzs7RUFHRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FBREY7O0FBSUE7O0VBRUUseUJDWFU7QURVWjs7QUFJQTtFQUNFLHlCQ1p1QjtBRFd6QiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcvc3JjL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG5hcHAtbWFpbixcclxuYXBwLWhlYWRlcixcclxuYXBwLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuYXBwLW1haW4sXHJcbmFwcC1oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRodWVfbWFpbi1saWdodDtcclxufVxyXG5cclxuYXBwLWZvb3RlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogJGh1ZV9tYWluLWRhcms7XHJcbn1cclxuIiwiLy9iYXNlIHBhbGV0dGU6IGh0dHBzOi8vY29sb3JzY2hlbWUucnUvIzNiMzIwc1RlMXcwdzBcclxuJGRlZXAtdGVhbDogIzA3NDgzOTtcclxuJGRlZXAtdGVhbC1zaGFkZV9saWdodDogICMwNjQwMzM7XHJcbiRkZWVwLXRlYWwtc2hhZGVfbm9ybWFsOiAjMDMyNDFDO1xyXG4kZGVlcC10ZWFsLXNoYWRlX2Rhcms6ICAgIzAwMDcwNTtcclxuXHJcbiRzaXNhbDogI2M3YmI5ZTtcclxuJGNvcm4taGFydmVzdDogIzhGNzczRDtcclxuXHJcbiRwb2h1dHVrYXdhOiAjNjQwQTI1O1xyXG4kcnVzdGljLXJlZDogIzQxMDMxNjtcclxuXHJcblxyXG4vL2luLXByb2plY3QgY29sb3ItbWFwXHJcbiRodWVfbWFpbi1saWdodDogJGRlZXAtdGVhbDtcclxuJGh1ZV9tYWluLWRhcms6ICAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcblxyXG4kaHVlX3RpdGxlLWxpZ2h0OiAkY29ybi1oYXJ2ZXN0O1xyXG4kaHVlX3RpdGxlLWxpZ2h0LWFsdDogJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw7XHJcbiRodWVfdGl0bGUtZGFyazogJGRlZXAtdGVhbC1zaGFkZV9kYXJrO1xyXG5cclxuJGh1ZV9saW5rLWFjdGl2ZTogJGRlZXAtdGVhbC1zaGFkZV9kYXJrO1xyXG4kaHVlX2xpbmstZGFyazogJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw7XHJcblxyXG4kaHVlX3RleHQtbGlnaHQ6ICRzaXNhbDtcclxuXHJcblxyXG4vL21lZGlhIGJyZWFrcG9pbnRzXHJcbiRicmVha0Zvb3Rlck1pbjogMzU1cHg7XHJcbiRicmVha0hlYWRlck1pbjogNDYwcHg7XHJcbiRicmVha0hlYWRlclRhYmxldFRvTW9iaWxlOiA2MTBweDtcclxuJGJyZWFrRm9vdGVyQW5kUmVzdW1lOiA4MjBweDtcclxuJGJyZWFrSGVhZGVyRGVza1RvVGFibGV0OiA5MzBweDtcclxuJGJyZWFrTG9nb1Nocmlua3M6IDExOTBweDtcclxuJGJyZWFrQXBwVXBzY2FsZTogMTYwMHB4O1xyXG4kYnJlYWtWaWV3cG9ydE92ZXJGdWxsSEQ6IDE5MjFweDtcclxuIl19 */"] });


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 8249);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ 2650);
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.routes */ 4964);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ 7899);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/main.component */ 639);
/* harmony import */ var _components_main_careers_main_careers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/__careers/main__careers.component */ 3619);
/* harmony import */ var _components_main_default_main_default_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/__default/main__default.component */ 5350);
/* harmony import */ var _components_main_portfolio_main_portfolio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/__portfolio/main__portfolio.component */ 4539);
/* harmony import */ var _components_main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/__resume/main__resume.component */ 1306);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/footer/footer.component */ 7646);
/* harmony import */ var _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/roadmap/roadmap.component */ 9601);
/* harmony import */ var _components_roadmap_sample_roadmap_sample_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/roadmap/__sample/roadmap__sample.component */ 8777);
/* harmony import */ var _components_presentation_unit_presentation_unit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/presentation-unit/presentation-unit.component */ 5200);
/* harmony import */ var _components_red_eyes_red_eyes_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/red-eyes/red-eyes.component */ 3461);
/* harmony import */ var _components_link_link_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/link/link.component */ 8584);
/* harmony import */ var _components_logotype_logotype_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/logotype/logotype.component */ 9331);
/* harmony import */ var _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/social-icon/social-icon.component */ 6394);
/* harmony import */ var _services_title_page_content_initializer_title_page_content_initializer_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/title-page-content-initializer/title-page-content-initializer.service */ 2154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 4001);
























class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ providers: [
        _services_title_page_content_initializer_title_page_content_initializer_service__WEBPACK_IMPORTED_MODULE_17__.TitlePageContentInitializerService
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_1__.APP_ROUTES, { useHash: true })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _components_logotype_logotype_component__WEBPACK_IMPORTED_MODULE_15__.LogotypeComponent,
        _components_link_link_component__WEBPACK_IMPORTED_MODULE_14__.LinkComponent,
        _components_main_main_component__WEBPACK_IMPORTED_MODULE_4__.MainComponent,
        _components_main_careers_main_careers_component__WEBPACK_IMPORTED_MODULE_5__.MainCareersComponent,
        _components_main_default_main_default_component__WEBPACK_IMPORTED_MODULE_6__.MainDefaultComponent,
        _components_main_portfolio_main_portfolio_component__WEBPACK_IMPORTED_MODULE_7__.MainPortfolioComponent,
        _components_presentation_unit_presentation_unit_component__WEBPACK_IMPORTED_MODULE_12__.PresentationUnitComponent,
        _components_main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_8__.MainResumeComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__.FooterComponent,
        _components_red_eyes_red_eyes_component__WEBPACK_IMPORTED_MODULE_13__.RedEyesComponent,
        _components_social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_16__.SocialIconComponent,
        _components_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_10__.RoadmapComponent,
        _components_roadmap_sample_roadmap_sample_component__WEBPACK_IMPORTED_MODULE_11__.RoadmapSampleComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_20__.FontAwesomeModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule] }); })();


/***/ }),

/***/ 4964:
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_ROUTES": () => (/* binding */ APP_ROUTES)
/* harmony export */ });
/* harmony import */ var _components_main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/__resume/main__resume.component */ 1306);
/* harmony import */ var _components_main_careers_main_careers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/__careers/main__careers.component */ 3619);
/* harmony import */ var _components_main_default_main_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/__default/main__default.component */ 5350);
/* harmony import */ var _components_main_portfolio_main_portfolio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/__portfolio/main__portfolio.component */ 4539);




const APP_ROUTES = [
    {
        path: '',
        component: _components_main_default_main_default_component__WEBPACK_IMPORTED_MODULE_2__.MainDefaultComponent,
        pathMatch: 'full',
        data: {
            animation: 'DefaultPage'
        }
    },
    {
        path: 'careers',
        component: _components_main_careers_main_careers_component__WEBPACK_IMPORTED_MODULE_1__.MainCareersComponent,
        data: {
            animation: 'CareersPage'
        }
    },
    {
        path: 'resume',
        component: _components_main_resume_main_resume_component__WEBPACK_IMPORTED_MODULE_0__.MainResumeComponent,
        data: {
            animation: 'ResumePage'
        }
    },
    {
        path: 'portfolio',
        component: _components_main_portfolio_main_portfolio_component__WEBPACK_IMPORTED_MODULE_3__.MainPortfolioComponent,
        data: {
            animation: 'PortfolioPage'
        }
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];


/***/ }),

/***/ 7646:
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var src_app_services_title_page_content_initializer_title_page_content_initializer_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/title-page-content-initializer/title-page-content-initializer.service */ 2154);
/* harmony import */ var _footer_social_icons_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.social-icons-collection */ 2289);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _red_eyes_red_eyes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../red-eyes/red-eyes.component */ 3461);
/* harmony import */ var _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../social-icon/social-icon.component */ 6394);







function FooterComponent_app_red_eyes_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-red-eyes", 6);
} }
function FooterComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "app-social-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onMouseEnterTheFooterIcon", function FooterComponent_ng_container_10_Template_app_social_icon_onMouseEnterTheFooterIcon_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.onMouseEnterEvent($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const socialIcon_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("socialIcon", socialIcon_r2);
} }
class FooterComponent {
    constructor(titlePageService) {
        this.titlePageService = titlePageService;
        this.socialIcons = _footer_social_icons_collection__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.changeableWord = 'call';
    }
    ngOnInit() {
        this.titlePageService.caseCurrentPageIsTitle.subscribe(message => this.eyesState = message);
    }
    onMouseEnterEvent(marker) {
        this.changeableWord = marker;
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_title_page_content_initializer_title_page_content_initializer_service__WEBPACK_IMPORTED_MODULE_0__.TitlePageContentInitializerService)); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 11, vars: 3, consts: [[1, "footer"], [1, "footer__proposal"], [1, "footer__changeable-word"], ["class", "footer__red-eyes", 4, "ngIf"], [1, "footer__social-icons"], [4, "ngFor", "ngForOf"], [1, "footer__red-eyes"], [3, "socialIcon", "onMouseEnterTheFooterIcon"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "...so");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " me, maybe ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, FooterComponent_app_red_eyes_8_Template, 1, 0, "app-red-eyes", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, FooterComponent_ng_container_10_Template, 2, 1, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.changeableWord, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.eyesState);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.socialIcons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _red_eyes_red_eyes_component__WEBPACK_IMPORTED_MODULE_2__.RedEyesComponent, _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_3__.SocialIconComponent], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Razer-Blackwidow-Regular\";\n  src: url('RazerBlackwidow-Regular.eot');\n  src: local(\"\u263A\"), url('RazerBlackwidow-Regular.woff') format(\"woff\"), url('RazerBlackwidow-Regular.ttf') format(\"truetype\"), url('RazerBlackwidow-Regular.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.footer[_ngcontent-%COMP%] {\n  font-family: Razer-Blackwidow-Regular;\n  text-transform: lowercase;\n}\n.footer[_ngcontent-%COMP%] {\n  font-size: var(--fontsize-h2);\n  line-height: var(--fontsize-h2);\n}\n.footer[_ngcontent-%COMP%] {\n  padding-inline: 9%;\n  width: 82%;\n  max-width: 1312px;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-block: 64px;\n}\n@media only screen and (max-width: 355px) {\n  .footer__proposal[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (max-width: 820px) {\n  .footer[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    grid-gap: 16px;\n    gap: 16px;\n    position: relative;\n  }\n  .footer__red-eyes[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 10%;\n  }\n}\n@media only screen and (min-width: 820px) {\n  .footer[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n  .footer__proposal[_ngcontent-%COMP%] {\n    width: 388px;\n  }\n}\n.footer[_ngcontent-%COMP%] {\n  color: #8F773D;\n}\n.footer__social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  grid-gap: 20px;\n  gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXGFzc2V0c1xcZm9udHNcXHJhemVyLWJsYWNrd2lkb3dcXGZvbnRzLnNjc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXF9fdGV4dFxcc3R5bGVzX190ZXh0LnNjc3MiLCIuLlxcLi5cXC4uXFxzdHlsZXNcXF9fc3RydWN0dXJlc1xcc3R5bGVzX19zdHJ1Y3R1cmVzLnNjc3MiLCIuLlxcLi5cXC4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNDLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0S0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURFRDtBRUhFO0VBSUUscUNBQUE7RUFDQSx5QkFBQTtBRkVKO0FFTUU7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0FGSko7QUdUQTtFQUNFLGtCQUh1QjtFQUl2QixVQUxlO0VBTWYsaUJBQUE7QUhXRjtBR1JBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUhXRjtBQXRCQTtFQUVJO0lBQ0UsYUFBQTtFQXdCSjtBQUNGO0FBcEJBO0VBQ0U7SUdNQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUFBLFNBQUE7SUhORSxrQkFBQTtFQXdCRjtFQXRCRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtFQXdCSjtBQUNGO0FBckJBO0VBQ0U7SUdDQSw4QkFBQTtFSHVCQTtFQXJCRTtJQUNFLFlBQUE7RUF1Qko7QUFDRjtBQW5CQTtFQUlFLGNJOUJhO0FKZ0RmO0FBaEJFO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBa0JKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSYXplci1CbGFja3dpZG93LVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCJmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5lb3RcIik7XG4gIHNyYzogbG9jYWwoXCLimLpcIiksIHVybChcImZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCJmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5zdmdcIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4uZm9vdGVyIHtcbiAgZm9udC1mYW1pbHk6IFJhemVyLUJsYWNrd2lkb3ctUmVndWxhcjtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5mb290ZXIge1xuICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgyKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgyKTtcbn1cbi5mb290ZXIge1xuICBwYWRkaW5nLWlubGluZTogOSU7XG4gIHdpZHRoOiA4MiU7XG4gIG1heC13aWR0aDogMTMxMnB4O1xufVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogNjRweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNTVweCkge1xuICAuZm9vdGVyX19wcm9wb3NhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjBweCkge1xuICAuZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLmZvb3Rlcl9fcmVkLWV5ZXMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA4MjBweCkge1xuICAuZm9vdGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbiAgLmZvb3Rlcl9fcHJvcG9zYWwge1xuICAgIHdpZHRoOiAzODhweDtcbiAgfVxufVxuLmZvb3RlciB7XG4gIGNvbG9yOiAjOEY3NzNEO1xufVxuLmZvb3Rlcl9fc29jaWFsLWljb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAyMHB4O1xufSIsIkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1JhemVyLUJsYWNrd2lkb3ctUmVndWxhcic7XG5cdHNyYzogdXJsKCdmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5lb3QnKTtcblx0c3JjOiBsb2NhbCgn4pi6JyksIHVybCgnZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG4iLCJAaW1wb3J0ICcvc3JjL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy9zcmMvYXNzZXRzL2ZvbnRzL3JhemVyLWJsYWNrd2lkb3cvZm9udHMuc2Nzcyc7XHJcblxyXG4lc3R5bGVzX190ZXh0IHtcclxuICAmX2gxLFxyXG4gICZfaDIsXHJcbiAgJl9oMyxcclxuICAmX2JvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhemVyLUJsYWNrd2lkb3ctUmVndWxhcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAmX2gxIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtaDEpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgxKTtcclxuICB9XHJcblxyXG4gICZfaDIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1oMik7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tZm9udHNpemUtaDIpO1xyXG4gIH1cclxuXHJcbiAgJl9oMyB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgzKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1oMyk7XHJcbiAgfVxyXG5cclxuICAmX2JvZHkge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1ib2R5KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1ib2R5KTtcclxuICB9XHJcbn1cclxuIiwiQGltcG9ydCAnL3NyYy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuJHN0cnVjdHVyZUZyYWN0aW9uOiAuODI7XHJcbiRzdHJ1Y3R1cmVXaWR0aDogcGVyY2VudGFnZSggJHN0cnVjdHVyZUZyYWN0aW9uICk7XHJcbiRzdHJ1Y3R1cmVQYWRkaW5nSW5saW5lOiBwZXJjZW50YWdlKCAoIDEgLSAkc3RydWN0dXJlRnJhY3Rpb24gKSAvIDIgKTtcclxuXHJcbiVzdHJ1Y3R1cmVzX19wYWRkaW5nIHtcclxuICBwYWRkaW5nLWlubGluZTogJHN0cnVjdHVyZVBhZGRpbmdJbmxpbmU7XHJcbiAgd2lkdGg6ICRzdHJ1Y3R1cmVXaWR0aDtcclxuICBtYXgtd2lkdGg6IGNhbGMoICRicmVha0FwcFVwc2NhbGUgKiAkc3RydWN0dXJlRnJhY3Rpb24gKTtcclxufVxyXG5cclxuJXN0cnVjdHVyZXNfX2hlYWRlci1uLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYmxvY2s6IDY0cHg7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXRPcmllbnRhdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wT3JpZW50YXRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iLCIvL2Jhc2UgcGFsZXR0ZTogaHR0cHM6Ly9jb2xvcnNjaGVtZS5ydS8jM2IzMjBzVGUxdzB3MFxyXG4kZGVlcC10ZWFsOiAjMDc0ODM5O1xyXG4kZGVlcC10ZWFsLXNoYWRlX2xpZ2h0OiAgIzA2NDAzMztcclxuJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw6ICMwMzI0MUM7XHJcbiRkZWVwLXRlYWwtc2hhZGVfZGFyazogICAjMDAwNzA1O1xyXG5cclxuJHNpc2FsOiAjYzdiYjllO1xyXG4kY29ybi1oYXJ2ZXN0OiAjOEY3NzNEO1xyXG5cclxuJHBvaHV0dWthd2E6ICM2NDBBMjU7XHJcbiRydXN0aWMtcmVkOiAjNDEwMzE2O1xyXG5cclxuXHJcbi8vaW4tcHJvamVjdCBjb2xvci1tYXBcclxuJGh1ZV9tYWluLWxpZ2h0OiAkZGVlcC10ZWFsO1xyXG4kaHVlX21haW4tZGFyazogICRkZWVwLXRlYWwtc2hhZGVfZGFyaztcclxuXHJcbiRodWVfdGl0bGUtbGlnaHQ6ICRjb3JuLWhhcnZlc3Q7XHJcbiRodWVfdGl0bGUtbGlnaHQtYWx0OiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuJGh1ZV90aXRsZS1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcblxyXG4kaHVlX2xpbmstYWN0aXZlOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcbiRodWVfbGluay1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuXHJcbiRodWVfdGV4dC1saWdodDogJHNpc2FsO1xyXG5cclxuXHJcbi8vbWVkaWEgYnJlYWtwb2ludHNcclxuJGJyZWFrRm9vdGVyTWluOiAzNTVweDtcclxuJGJyZWFrSGVhZGVyTWluOiA0NjBweDtcclxuJGJyZWFrSGVhZGVyVGFibGV0VG9Nb2JpbGU6IDYxMHB4O1xyXG4kYnJlYWtGb290ZXJBbmRSZXN1bWU6IDgyMHB4O1xyXG4kYnJlYWtIZWFkZXJEZXNrVG9UYWJsZXQ6IDkzMHB4O1xyXG4kYnJlYWtMb2dvU2hyaW5rczogMTE5MHB4O1xyXG4kYnJlYWtBcHBVcHNjYWxlOiAxNjAwcHg7XHJcbiRicmVha1ZpZXdwb3J0T3ZlckZ1bGxIRDogMTkyMXB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 2289:
/*!*********************************************************************!*\
  !*** ./src/app/components/footer/footer.social-icons-collection.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 9241);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ 4815);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        href: 'https://github.com/daomatys',
        definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faGithub,
        marker: 'rate'
    },
    {
        href: 'tel: +7 952 890-10-23',
        definition: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faPhoneSquare,
        marker: 'call'
    },
    {
        href: 'mailto: overmaxcoast@yandex.ru',
        definition: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__.faEnvelopeSquare,
        marker: 'mail'
    },
    {
        href: 'https://t.me/daomatysss',
        definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faTelegram,
        marker: 'ping'
    }
]);


/***/ }),

/***/ 7899:
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _header_links_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.links-collection */ 3664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _logotype_logotype_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../logotype/logotype.component */ 9331);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _link_link_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../link/link.component */ 8584);





function HeaderComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "app-link", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const link_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("link", link_r1);
} }
class HeaderComponent {
    constructor() {
        this.links = _header_links_collection__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 5, vars: 1, consts: [[1, "header"], [1, "header__logo"], [1, "header__navbar"], [4, "ngFor", "ngForOf"], [3, "link"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "app-logotype");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, HeaderComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.links);
    } }, directives: [_logotype_logotype_component__WEBPACK_IMPORTED_MODULE_1__.LogotypeComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _link_link_component__WEBPACK_IMPORTED_MODULE_2__.LinkComponent], styles: [".header[_ngcontent-%COMP%] {\n  padding-inline: 9%;\n  width: 82%;\n  max-width: 1312px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-block: 64px;\n}\n\n@media only screen and (max-width: 460px) {\n  .header__navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    grid-gap: 16px;\n    gap: 16px;\n    align-items: center;\n    margin-top: 16px;\n  }\n}\n\n@media only screen and (max-width: 930px) {\n  .header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: center;\n    grid-gap: 16px;\n    gap: 16px;\n  }\n  .header__navbar[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n@media only screen and (min-width: 930px) {\n  .header[_ngcontent-%COMP%] {\n    justify-content: space-between;\n  }\n}\n\n@media only screen and (min-width: 1190px) and (max-width: 1600px) {\n  .header__navbar[_ngcontent-%COMP%] {\n    width: 41vw;\n    margin-left: 20px;\n  }\n}\n\n@media only screen and (min-width: 1600px) {\n  .header__navbar[_ngcontent-%COMP%] {\n    width: 656px;\n    margin-left: 20px;\n  }\n}\n\n.header__navbar[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  grid-gap: 20px;\n  gap: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlc1xcX19zdHJ1Y3R1cmVzXFxzdHlsZXNfX3N0cnVjdHVyZXMuc2NzcyIsImhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGtCQUh1QjtFQUl2QixVQUxlO0VBTWYsaUJBQUE7QUNMRjs7QURRQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FDTEY7O0FBTEE7RUFDRTtJRGFBLHNCQUFBO0lBQ0EsdUJBQUE7SUFDQSxjQUFBO0lBQUEsU0FBQTtJQ2JFLG1CQUFBO0lBQ0EsZ0JBQUE7RUFVRjtBQUNGOztBQVBBO0VBQ0U7SURLQSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsY0FBQTtJQUFBLFNBQUE7RUNLQTtFQVRFO0lBQ0UsV0FBQTtFQVdKO0FBQ0Y7O0FBUkE7RUFDRTtJREVBLDhCQUFBO0VDU0E7QUFDRjs7QUFQQTtFQUNFO0lBQ0UsV0FBQTtJQUNBLGlCQTVCYTtFQXFDZjtBQUNGOztBQU5BO0VBQ0U7SUFDRSxZQUFBO0lBQ0EsaUJBbkNhO0VBMkNmO0FBQ0Y7O0FBREU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQTlDYTtFQThDYixTQTlDYTtBQWlEakIiLCJmaWxlIjoiaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuJHN0cnVjdHVyZUZyYWN0aW9uOiAuODI7XHJcbiRzdHJ1Y3R1cmVXaWR0aDogcGVyY2VudGFnZSggJHN0cnVjdHVyZUZyYWN0aW9uICk7XHJcbiRzdHJ1Y3R1cmVQYWRkaW5nSW5saW5lOiBwZXJjZW50YWdlKCAoIDEgLSAkc3RydWN0dXJlRnJhY3Rpb24gKSAvIDIgKTtcclxuXHJcbiVzdHJ1Y3R1cmVzX19wYWRkaW5nIHtcclxuICBwYWRkaW5nLWlubGluZTogJHN0cnVjdHVyZVBhZGRpbmdJbmxpbmU7XHJcbiAgd2lkdGg6ICRzdHJ1Y3R1cmVXaWR0aDtcclxuICBtYXgtd2lkdGg6IGNhbGMoICRicmVha0FwcFVwc2NhbGUgKiAkc3RydWN0dXJlRnJhY3Rpb24gKTtcclxufVxyXG5cclxuJXN0cnVjdHVyZXNfX2hlYWRlci1uLWZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmctYmxvY2s6IDY0cHg7XHJcbn1cclxuXHJcbkBtaXhpbiB0YWJsZXRPcmllbnRhdGlvbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbkBtaXhpbiBkZXNrdG9wT3JpZW50YXRpb24ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iLCIuaGVhZGVyIHtcbiAgcGFkZGluZy1pbmxpbmU6IDklO1xuICB3aWR0aDogODIlO1xuICBtYXgtd2lkdGg6IDEzMTJweDtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctYmxvY2s6IDY0cHg7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLmhlYWRlcl9fbmF2YmFyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTZweDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcbiAgLmhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbiAgLmhlYWRlcl9fbmF2YmFyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MzBweCkge1xuICAuaGVhZGVyIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTE5MHB4KSBhbmQgKG1heC13aWR0aDogMTYwMHB4KSB7XG4gIC5oZWFkZXJfX25hdmJhciB7XG4gICAgd2lkdGg6IDQxdnc7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XG4gIC5oZWFkZXJfX25hdmJhciB7XG4gICAgd2lkdGg6IDY1NnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICB9XG59XG4uaGVhZGVyX19uYXZiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMjBweDtcbn0iXX0= */"] });


/***/ }),

/***/ 3664:
/*!**************************************************************!*\
  !*** ./src/app/components/header/header.links-collection.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        route: 'resume'
    },
    {
        route: 'portfolio'
    },
    {
        route: 'careers'
    }
]);


/***/ }),

/***/ 8584:
/*!***************************************************!*\
  !*** ./src/app/components/link/link.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LinkComponent": () => (/* binding */ LinkComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class LinkComponent {
    constructor() { }
}
LinkComponent.ɵfac = function LinkComponent_Factory(t) { return new (t || LinkComponent)(); };
LinkComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LinkComponent, selectors: [["app-link"]], inputs: { link: "link" }, decls: 2, vars: 2, consts: [["routerLinkActive", "link_active", 1, "link", 3, "routerLink"]], template: function LinkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.link == null ? null : ctx.link.route);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.link == null ? null : ctx.link.route);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Razer-Blackwidow-Regular\";\n  src: url('RazerBlackwidow-Regular.eot');\n  src: local(\"\u263A\"), url('RazerBlackwidow-Regular.woff') format(\"woff\"), url('RazerBlackwidow-Regular.ttf') format(\"truetype\"), url('RazerBlackwidow-Regular.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.link[_ngcontent-%COMP%] {\n  font-family: Razer-Blackwidow-Regular;\n  text-transform: lowercase;\n}\n.link[_ngcontent-%COMP%] {\n  font-size: var(--fontsize-h2);\n  line-height: var(--fontsize-h2);\n}\n.link[_ngcontent-%COMP%] {\n  color: #03241C;\n  text-decoration: none;\n  transition: color 0.3s ease;\n}\n.link[_ngcontent-%COMP%]:hover, .link_active[_ngcontent-%COMP%] {\n  color: #000705;\n}\n.link_active[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFxhc3NldHNcXGZvbnRzXFxyYXplci1ibGFja3dpZG93XFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcc3R5bGVzXFxfX3RleHRcXHN0eWxlc19fdGV4dC5zY3NzIiwiLi5cXC4uXFwuLlxcdmFyaWFibGVzXFx2YXJpYWJsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyx1Q0FBQTtFQUNBLHVDQUFBO0VBQ0EsNEtBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FERUQ7QUVIRTtFQUlFLHFDQUFBO0VBQ0EseUJBQUE7QUZFSjtBRU1FO0VBQ0UsNkJBQUE7RUFDQSwrQkFBQTtBRkpKO0FBWkE7RUFFRSxjR0Z1QjtFSEd2QixxQkFBQTtFQUNBLDJCQUFBO0FBYUY7QUFYRTtFQUVFLGNHUHFCO0FIbUJ6QjtBQVRFO0VBQ0Usb0JBQUE7QUFXSiIsImZpbGUiOiJsaW5rLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlJhemVyLUJsYWNrd2lkb3ctUmVndWxhclwiO1xuICBzcmM6IHVybChcImZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLmVvdFwiKTtcbiAgc3JjOiBsb2NhbChcIuKYulwiKSwgdXJsKFwiZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpLCB1cmwoXCJmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcImZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnN2Z1wiKSBmb3JtYXQoXCJzdmdcIik7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbi5saW5rIHtcbiAgZm9udC1mYW1pbHk6IFJhemVyLUJsYWNrd2lkb3ctUmVndWxhcjtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5saW5rIHtcbiAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1oMik7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1oMik7XG59XG4ubGluayB7XG4gIGNvbG9yOiAjMDMyNDFDO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTtcbn1cbi5saW5rOmhvdmVyLCAubGlua19hY3RpdmUge1xuICBjb2xvcjogIzAwMDcwNTtcbn1cbi5saW5rX2FjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufSIsIkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1JhemVyLUJsYWNrd2lkb3ctUmVndWxhcic7XG5cdHNyYzogdXJsKCdmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5lb3QnKTtcblx0c3JjOiBsb2NhbCgn4pi6JyksIHVybCgnZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG4iLCJAaW1wb3J0ICcvc3JjL3ZhcmlhYmxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcbkBpbXBvcnQgJy9zcmMvYXNzZXRzL2ZvbnRzL3JhemVyLWJsYWNrd2lkb3cvZm9udHMuc2Nzcyc7XHJcblxyXG4lc3R5bGVzX190ZXh0IHtcclxuICAmX2gxLFxyXG4gICZfaDIsXHJcbiAgJl9oMyxcclxuICAmX2JvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IFJhemVyLUJsYWNrd2lkb3ctUmVndWxhcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XHJcbiAgfVxyXG5cclxuICAmX2gxIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtaDEpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgxKTtcclxuICB9XHJcblxyXG4gICZfaDIge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1oMik7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tZm9udHNpemUtaDIpO1xyXG4gIH1cclxuXHJcbiAgJl9oMyB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgzKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1oMyk7XHJcbiAgfVxyXG5cclxuICAmX2JvZHkge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1ib2R5KTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1ib2R5KTtcclxuICB9XHJcbn1cclxuIiwiLy9iYXNlIHBhbGV0dGU6IGh0dHBzOi8vY29sb3JzY2hlbWUucnUvIzNiMzIwc1RlMXcwdzBcclxuJGRlZXAtdGVhbDogIzA3NDgzOTtcclxuJGRlZXAtdGVhbC1zaGFkZV9saWdodDogICMwNjQwMzM7XHJcbiRkZWVwLXRlYWwtc2hhZGVfbm9ybWFsOiAjMDMyNDFDO1xyXG4kZGVlcC10ZWFsLXNoYWRlX2Rhcms6ICAgIzAwMDcwNTtcclxuXHJcbiRzaXNhbDogI2M3YmI5ZTtcclxuJGNvcm4taGFydmVzdDogIzhGNzczRDtcclxuXHJcbiRwb2h1dHVrYXdhOiAjNjQwQTI1O1xyXG4kcnVzdGljLXJlZDogIzQxMDMxNjtcclxuXHJcblxyXG4vL2luLXByb2plY3QgY29sb3ItbWFwXHJcbiRodWVfbWFpbi1saWdodDogJGRlZXAtdGVhbDtcclxuJGh1ZV9tYWluLWRhcms6ICAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcblxyXG4kaHVlX3RpdGxlLWxpZ2h0OiAkY29ybi1oYXJ2ZXN0O1xyXG4kaHVlX3RpdGxlLWxpZ2h0LWFsdDogJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw7XHJcbiRodWVfdGl0bGUtZGFyazogJGRlZXAtdGVhbC1zaGFkZV9kYXJrO1xyXG5cclxuJGh1ZV9saW5rLWFjdGl2ZTogJGRlZXAtdGVhbC1zaGFkZV9kYXJrO1xyXG4kaHVlX2xpbmstZGFyazogJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw7XHJcblxyXG4kaHVlX3RleHQtbGlnaHQ6ICRzaXNhbDtcclxuXHJcblxyXG4vL21lZGlhIGJyZWFrcG9pbnRzXHJcbiRicmVha0Zvb3Rlck1pbjogMzU1cHg7XHJcbiRicmVha0hlYWRlck1pbjogNDYwcHg7XHJcbiRicmVha0hlYWRlclRhYmxldFRvTW9iaWxlOiA2MTBweDtcclxuJGJyZWFrRm9vdGVyQW5kUmVzdW1lOiA4MjBweDtcclxuJGJyZWFrSGVhZGVyRGVza1RvVGFibGV0OiA5MzBweDtcclxuJGJyZWFrTG9nb1Nocmlua3M6IDExOTBweDtcclxuJGJyZWFrQXBwVXBzY2FsZTogMTYwMHB4O1xyXG4kYnJlYWtWaWV3cG9ydE92ZXJGdWxsSEQ6IDE5MjFweDtcclxuIl19 */"] });


/***/ }),

/***/ 9331:
/*!***********************************************************!*\
  !*** ./src/app/components/logotype/logotype.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogotypeComponent": () => (/* binding */ LogotypeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 3252);


class LogotypeComponent {
    constructor() { }
}
LogotypeComponent.ɵfac = function LogotypeComponent_Factory(t) { return new (t || LogotypeComponent)(); };
LogotypeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogotypeComponent, selectors: [["app-logotype"]], decls: 1, vars: 1, consts: [[1, "logotype", 3, "routerLink"]], template: function LogotypeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Neonize\";\n  src: url('Neonize.eot');\n  src: local(\"\u263A\"), url('Neonize.woff') format(\"woff\"), url('Neonize.ttf') format(\"truetype\"), url('Neonize.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n@media only screen and (min-width: 930px) and (max-width: 1190px) {\n  .logotype[_ngcontent-%COMP%]:after {\n    content: \"dmts\";\n  }\n}\n@media only screen and (min-width: 1190px), only screen and (max-width: 930px) {\n  .logotype[_ngcontent-%COMP%]:after {\n    content: \"daomatys\";\n  }\n}\n.logotype[_ngcontent-%COMP%] {\n  font-family: Neonize;\n  font-size: var(--fontsize-h1);\n  color: #8F773D;\n  text-transform: uppercase;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ290eXBlLmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxmb250c1xcbmVvbml6ZVxcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXHZhcmlhYmxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDRIQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVEO0FBSkE7RUFFSTtJQUNFLGVBQUE7RUFLSjtBQUNGO0FBRkE7RUFHSTtJQUNFLG1CQUFBO0VBRUo7QUFDRjtBQUNBO0VBQ0Usb0JBQUE7RUFDQSw2QkFBQTtFQUNBLGNFZGE7RUZlYix5QkFBQTtFQUNBLHFCQUFBO0FBQ0YiLCJmaWxlIjoibG9nb3R5cGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiTmVvbml6ZVwiO1xuICBzcmM6IHVybChcImZvbnRzL05lb25pemUuZW90XCIpO1xuICBzcmM6IGxvY2FsKFwi4pi6XCIpLCB1cmwoXCJmb250cy9OZW9uaXplLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiZm9udHMvTmVvbml6ZS50dGZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcImZvbnRzL05lb25pemUuc3ZnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MzBweCkgYW5kIChtYXgtd2lkdGg6IDExOTBweCkge1xuICAubG9nb3R5cGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiZG10c1wiO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDExOTBweCksIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzBweCkge1xuICAubG9nb3R5cGU6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiZGFvbWF0eXNcIjtcbiAgfVxufVxuLmxvZ290eXBlIHtcbiAgZm9udC1mYW1pbHk6IE5lb25pemU7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtaDEpO1xuICBjb2xvcjogIzhGNzczRDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufSIsIkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ05lb25pemUnO1xuXHRzcmM6IHVybCgnZm9udHMvTmVvbml6ZS5lb3QnKTtcblx0c3JjOiBsb2NhbCgn4pi6JyksIHVybCgnZm9udHMvTmVvbml6ZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnZm9udHMvTmVvbml6ZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvTmVvbml6ZS5zdmcnKSBmb3JtYXQoJ3N2ZycpO1xuXHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRmb250LXN0eWxlOiBub3JtYWw7XG59XG4iLCIvL2Jhc2UgcGFsZXR0ZTogaHR0cHM6Ly9jb2xvcnNjaGVtZS5ydS8jM2IzMjBzVGUxdzB3MFxyXG4kZGVlcC10ZWFsOiAjMDc0ODM5O1xyXG4kZGVlcC10ZWFsLXNoYWRlX2xpZ2h0OiAgIzA2NDAzMztcclxuJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw6ICMwMzI0MUM7XHJcbiRkZWVwLXRlYWwtc2hhZGVfZGFyazogICAjMDAwNzA1O1xyXG5cclxuJHNpc2FsOiAjYzdiYjllO1xyXG4kY29ybi1oYXJ2ZXN0OiAjOEY3NzNEO1xyXG5cclxuJHBvaHV0dWthd2E6ICM2NDBBMjU7XHJcbiRydXN0aWMtcmVkOiAjNDEwMzE2O1xyXG5cclxuXHJcbi8vaW4tcHJvamVjdCBjb2xvci1tYXBcclxuJGh1ZV9tYWluLWxpZ2h0OiAkZGVlcC10ZWFsO1xyXG4kaHVlX21haW4tZGFyazogICRkZWVwLXRlYWwtc2hhZGVfZGFyaztcclxuXHJcbiRodWVfdGl0bGUtbGlnaHQ6ICRjb3JuLWhhcnZlc3Q7XHJcbiRodWVfdGl0bGUtbGlnaHQtYWx0OiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuJGh1ZV90aXRsZS1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcblxyXG4kaHVlX2xpbmstYWN0aXZlOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcbiRodWVfbGluay1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuXHJcbiRodWVfdGV4dC1saWdodDogJHNpc2FsO1xyXG5cclxuXHJcbi8vbWVkaWEgYnJlYWtwb2ludHNcclxuJGJyZWFrRm9vdGVyTWluOiAzNTVweDtcclxuJGJyZWFrSGVhZGVyTWluOiA0NjBweDtcclxuJGJyZWFrSGVhZGVyVGFibGV0VG9Nb2JpbGU6IDYxMHB4O1xyXG4kYnJlYWtGb290ZXJBbmRSZXN1bWU6IDgyMHB4O1xyXG4kYnJlYWtIZWFkZXJEZXNrVG9UYWJsZXQ6IDkzMHB4O1xyXG4kYnJlYWtMb2dvU2hyaW5rczogMTE5MHB4O1xyXG4kYnJlYWtBcHBVcHNjYWxlOiAxNjAwcHg7XHJcbiRicmVha1ZpZXdwb3J0T3ZlckZ1bGxIRDogMTkyMXB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 3619:
/*!**********************************************************************!*\
  !*** ./src/app/components/main/__careers/main__careers.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainCareersComponent": () => (/* binding */ MainCareersComponent)
/* harmony export */ });
/* harmony import */ var _main_careers_employers_roadmap_samples__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__careers.employers-roadmap-samples */ 6029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../roadmap/roadmap.component */ 9601);



class MainCareersComponent {
    constructor() {
        this.employersRoadmapSamples = _main_careers_employers_roadmap_samples__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
MainCareersComponent.ɵfac = function MainCareersComponent_Factory(t) { return new (t || MainCareersComponent)(); };
MainCareersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainCareersComponent, selectors: [["app-main-careers"]], decls: 2, vars: 1, consts: [[1, "careers"], [3, "roadmapSamples"]], template: function MainCareersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-roadmap", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("roadmapSamples", ctx.employersRoadmapSamples);
    } }, directives: [_roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_1__.RoadmapComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluX19jYXJlZXJzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 6029:
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/__careers/main__careers.employers-roadmap-samples.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        timestamp: "2021—2121",
        title: "There should be your company name",
        text: "There should be my trainee position in that company"
    }
]);


/***/ }),

/***/ 5350:
/*!**********************************************************************!*\
  !*** ./src/app/components/main/__default/main__default.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainDefaultComponent": () => (/* binding */ MainDefaultComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class MainDefaultComponent {
    constructor() { }
}
MainDefaultComponent.ɵfac = function MainDefaultComponent_Factory(t) { return new (t || MainDefaultComponent)(); };
MainDefaultComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainDefaultComponent, selectors: [["app-main-default"]], decls: 1, vars: 0, consts: [[1, "default"]], template: function MainDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYWluX19kZWZhdWx0LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4539:
/*!**************************************************************************!*\
  !*** ./src/app/components/main/__portfolio/main__portfolio.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPortfolioComponent": () => (/* binding */ MainPortfolioComponent)
/* harmony export */ });
/* harmony import */ var _main_portfolio_presentation_units_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__portfolio.presentation-units-collection */ 4231);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _presentation_unit_presentation_unit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../presentation-unit/presentation-unit.component */ 5200);




function MainPortfolioComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-presentation-unit", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("unit", unit_r1);
} }
class MainPortfolioComponent {
    constructor() {
        this.presentationUnits = _main_portfolio_presentation_units_collection__WEBPACK_IMPORTED_MODULE_0__["default"];
    }
}
MainPortfolioComponent.ɵfac = function MainPortfolioComponent_Factory(t) { return new (t || MainPortfolioComponent)(); };
MainPortfolioComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainPortfolioComponent, selectors: [["app-main-portfolio"]], decls: 2, vars: 1, consts: [[1, "portfolio"], [4, "ngFor", "ngForOf"], [3, "unit"]], template: function MainPortfolioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MainPortfolioComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.presentationUnits);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _presentation_unit_presentation_unit_component__WEBPACK_IMPORTED_MODULE_1__.PresentationUnitComponent], styles: ["@media only screen and (max-width: 610px) {\n  .portfolio[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(1, 81vw);\n    grid-auto-rows: 81vw;\n    grid-gap: 10vw;\n  }\n}\n@media only screen and (min-width: 610px) and (max-width: 1190px) {\n  .portfolio[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 38vw);\n    grid-auto-rows: 38vw;\n    grid-gap: 5vw;\n  }\n}\n@media only screen and (min-width: 1190px) and (max-width: 1600px) {\n  .portfolio[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 25vw);\n    grid-auto-rows: 25vw;\n    grid-gap: 3vw;\n  }\n}\n@media only screen and (min-width: 1600px) {\n  .portfolio[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(3, 400px);\n    grid-auto-rows: 400px;\n    grid-gap: 48px;\n  }\n}\n.portfolio[_ngcontent-%COMP%] {\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5fX3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQkE7RUFFSTtJQUNFLHNDQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0VBbEJKO0FBQ0Y7QUFvQkE7RUFFSTtJQUNFLHNDQUFBO0lBQ0Esb0JBQUE7SUFDQSxhQUFBO0VBbkJKO0FBQ0Y7QUFxQkE7RUFFSTtJQUNFLHNDQUFBO0lBQ0Esb0JBQUE7SUFDQSxhQUFBO0VBcEJKO0FBQ0Y7QUFzQkE7RUFFSTtJQUNFLHVDQUFBO0lBQ0EscUJBQUE7SUFDQSxjQUFBO0VBckJKO0FBQ0Y7QUF3QkE7RUFDRSxhQUFBO0FBdEJGIiwiZmlsZSI6Im1haW5fX3BvcnRmb2xpby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiR1bml0TW9iaWxlU2lkZTogLjgxO1xyXG4kdW5pdE1vYmlsZUdhcDogLjE7XHJcblxyXG4kdW5pdFRhYmxldFNpZGU6IC4zODtcclxuJHVuaXRUYWJsZXRHYXA6IC4wNTtcclxuXHJcbiR1bml0RGVza3RvcFNpZGU6IC4yNTtcclxuJHVuaXREZXNrdG9wR2FwOiAuMDM7XHJcblxyXG5AZnVuY3Rpb24gZnJhY3Rpb25Ub1ZXKCAkZnJhY3Rpb24gKSB7XHJcbiAgQHJldHVybiAjeyAkZnJhY3Rpb24gKiAxMDAgfXZ3O1xyXG59XHJcbkBmdW5jdGlvbiBmcmFjdGlvblRvUFgoICRmcmFjdGlvbiApIHtcclxuICBAcmV0dXJuIGNhbGMoICRicmVha0FwcFVwc2NhbGUgKiAkZnJhY3Rpb24gKTtcclxufVxyXG5cclxuQG1lZGlhXHJcbiAgb25seSBzY3JlZW4gYW5kICggbWF4LXdpZHRoOiAkYnJlYWtIZWFkZXJUYWJsZXRUb01vYmlsZSApIHtcclxuICAgIC5wb3J0Zm9saW8ge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMSwgZnJhY3Rpb25Ub1ZXKCAkdW5pdE1vYmlsZVNpZGUgKSApO1xyXG4gICAgICBncmlkLWF1dG8tcm93czogZnJhY3Rpb25Ub1ZXKCAkdW5pdE1vYmlsZVNpZGUgKTtcclxuICAgICAgZ3JpZC1nYXA6ICAgICAgIGZyYWN0aW9uVG9WVyggJHVuaXRNb2JpbGVHYXAgKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWFcclxuICBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6ICRicmVha0hlYWRlclRhYmxldFRvTW9iaWxlICkgYW5kICggbWF4LXdpZHRoOiAkYnJlYWtMb2dvU2hyaW5rcyApIHtcclxuICAgIC5wb3J0Zm9saW8ge1xyXG4gICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCggMiwgZnJhY3Rpb25Ub1ZXKCAkdW5pdFRhYmxldFNpZGUgKSApO1xyXG4gICAgICBncmlkLWF1dG8tcm93czogZnJhY3Rpb25Ub1ZXKCAkdW5pdFRhYmxldFNpZGUgKTtcclxuICAgICAgZ3JpZC1nYXA6ICAgICAgIGZyYWN0aW9uVG9WVyggJHVuaXRUYWJsZXRHYXAgKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWFcclxuICBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6ICRicmVha0xvZ29TaHJpbmtzICkgYW5kICggbWF4LXdpZHRoOiAkYnJlYWtBcHBVcHNjYWxlICkge1xyXG4gICAgLnBvcnRmb2xpbyB7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCAzLCBmcmFjdGlvblRvVlcoJHVuaXREZXNrdG9wU2lkZSkgKTtcclxuICAgICAgZ3JpZC1hdXRvLXJvd3M6IGZyYWN0aW9uVG9WVyggJHVuaXREZXNrdG9wU2lkZSApO1xyXG4gICAgICBncmlkLWdhcDogICAgICAgZnJhY3Rpb25Ub1ZXKCAkdW5pdERlc2t0b3BHYXAgKTtcclxuICAgIH1cclxufVxyXG5AbWVkaWFcclxuICBvbmx5IHNjcmVlbiBhbmQgKCBtaW4td2lkdGg6ICRicmVha0FwcFVwc2NhbGUgKSB7XHJcbiAgICAucG9ydGZvbGlvIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIDMsIGZyYWN0aW9uVG9QWCggJHVuaXREZXNrdG9wU2lkZSApICk7XHJcbiAgICAgIGdyaWQtYXV0by1yb3dzOiBmcmFjdGlvblRvUFgoICR1bml0RGVza3RvcFNpZGUgKTtcclxuICAgICAgZ3JpZC1nYXA6IGZyYWN0aW9uVG9QWCggJHVuaXREZXNrdG9wR2FwICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8ge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 4231:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/main/__portfolio/main__portfolio.presentation-units-collection.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ 9241);

const faPug = {
    prefix: 'fac',
    iconName: 'pug',
    icon: [
        512,
        512,
        [],
        '',
        'M 48,32 C 21.408,32 0,53.408 0,80 v 352 c 0,26.592 21.408,48 48,48 h 352 c 26.592,0 48,-21.408 48,-48 V 80 C 448,53.408 426.592,32 400,32 Z m 173.4375,80 c 56.90832,0.1031 114.67114,7.93542 151.31252,23.125 23.42441,11.95423 76.91622,72.38433 75.18749,76.375 -1.75488,3.98176 -27.24461,26.06172 -34.93751,34.75 -16.70739,39.69224 -31.7767,68.15117 -37.18749,36.5 -6.15114,38.06577 -19.35753,34.71762 -24.5,53.3125 -7.50451,38.25932 -29.07306,39.54576 -38.87501,46.68751 -8.98944,9.30564 -21.87218,3.97082 -31.81251,9.24999 -25.24818,9.75213 -84.90433,11.42954 -108.74999,0.31251 -12.75571,-5.69197 -19.12017,3.15853 -55.125,-22.37501 C 97.568301,350.19267 102.95218,341.2663 96.312501,328 85.350259,308.43068 81.513443,321.15854 73.062499,277.4375 70.50282,312.736 52.08391,293.87197 35.124998,246.0625 c 0,0 -33.333762,-30.6255 -35.062498,-34.5625 C -1.69206,207.50933 51.7996,147.07923 75.25,135.125 108.49181,119.52303 164.52917,111.89691 221.4375,112 Z m 7.8125,10.25 c -44.1691,-0.45952 -86.64839,5.42839 -102.8125,13.5625 -11.58256,15.83751 -30.321708,42.74024 -34.125,55.625 -4.019295,13.81533 -7.69146,61.34157 -11.0625,89.4375 2.77856,26.7248 22.2202,38.53986 25.125,52.6875 3.1088,22.77475 13.18906,30.53107 27.125,38.31251 -3.11168,-8.85824 -4.9375,-22.29517 -4.9375,-42.87501 -5.81014,-42.47121 34.08671,-78.58204 66.37501,-89 8.92668,-24.53056 57.1767,-22.28311 64.18749,0.25 35.91808,12.59372 69.85538,52.60922 64.25001,89.3125 0,19.05872 -1.63286,31.94566 -4.31251,40.62499 30.66748,-20.8318 17.23648,-27.53404 29.4375,-47.56249 11.51481,-20.3415 13.86272,-12.90675 19.81252,-40.4375 -3.56123,-27.55906 -7.05982,-76.41517 -11.31252,-91 -3.71676,-12.52684 -21.65012,-38.56404 -33.24998,-54.5 C 299.0028,126.79931 263.60374,122.60741 229.25,122.25 Z M 129.8125,197 c 15.86998,0.3096 30.3125,13.55217 30.3125,31.875 0,24.43045 -25.71921,39.77773 -46.1875,27.5625 -20.468189,-12.21519 -20.468189,-42.90981 0,-55.125 5.11707,-3.0538 10.585,-4.4157 15.875,-4.3125 z M 322.5,197 c 15.86995,0.3096 30.31251,13.55214 30.31251,31.875 0,24.43042 -25.71929,39.77773 -46.18751,27.5625 -20.46819,-12.21519 -20.46819,-42.90981 0,-55.125 5.11706,-3.0538 10.58501,-4.4157 15.875,-4.3125 z m -185,9.375 c -1.38194,-0.0269 -2.78824,0.32723 -4.125,1.125 -5.34704,3.19098 -5.34704,11.24645 0,14.4375 5.34704,3.19098 12.0625,-0.86799 12.0625,-7.25 0,-4.78659 -3.7917,-8.23162 -7.9375,-8.3125 z m 176.625,0 c -1.38194,-0.0269 -2.78824,0.32724 -4.125,1.125 -5.34704,3.19098 -5.34704,11.24645 0,14.4375 5.34704,3.19098 12.06249,-0.86798 12.06249,-7.25 0,-4.7866 -3.79168,-8.23162 -7.93749,-8.3125 z m -87.5,23.1875 c -23.0649,0.20544 -39.2647,22.16574 -3.875,26 v 38.0625 c -15.38582,0 -35.6875,22.00585 -35.6875,48.4375 2.39776,-26.52348 22.38807,-40.25842 40.625,-39.6875 17.76445,0.55619 33.77394,14.77723 37.68751,40.25 0,-25.94846 -20.55172,-47.5151 -35.93751,-48.8125 l 0.93751,-38.1875 c 29.72345,-1.95575 26.26589,-24.48217 -3.75001,-26.0625 z'
    ]
};
const faSqlite = {
    prefix: 'fac',
    iconName: 'sqlite',
    icon: [
        512,
        512,
        [],
        '',
        'M 48,32 C 21.408,32 0,53.408 0,80 v 352 c 0,26.592 21.408,48 48,48 h 203.875 c -2.58992,-6.43747 -7.53329,-42.15292 -7.875,-82.4375 -0.2048,-2.58944 -0.3125,-4.24998 -0.3125,-4.24998 0,0 -3.76401,-25.39204 -9.1875,-46.25002 -2.40096,-9.25873 -5.12935,-17.64787 -8,-22.5 -1.47872,-2.50407 0.12568,-12.76676 4.25,-28 6.99014,12.1702 14.54083,25.34477 17.4375,36.125 0,0 -5.58523,-28.79402 -14.75,-45.5625 2.00896,-6.77939 4.40964,-14.2402 7.125,-22.25 6.7592,11.8201 13.62496,23.0461 16.375,34.3125 -3.00768,-14.39298 -7.03241,-28.72858 -13.375,-42.9375 C 255.09108,196.25753 292.21041,117.72154 332.18748,75.312499 353.52512,52.542957 382.89303,32.184088 409.12499,54.875 456.84999,97.449072 409.4993,194.73839 366,263.25 c -31.63008,10.16552 -68.5,32.625 -68.5,32.625 0,0 3.056,-1.60068 14.4375,-6.375 7.71564,-3.24264 30.72122,-8.7379 44.74998,-11.9375 -23.41951,35.31002 -43.43748,59.99999 -43.43748,59.99999 0,0 -40.86304,16.62279 -53.5,55.25002 7.32461,-41.20268 19.47559,-84.17255 36.625,-130.00001 C 311.69148,221.88846 362.82163,111.32851 400.62499,77.187501 359.14858,110.24523 313.8507,179.4756 281.1875,265.75 c -19.33389,57.15196 -29.79616,112.03092 -31.5,157.49998 3.65911,36.11917 4.22015,52.83626 3.37499,56.75002 H 400 c 26.592,0 48,-21.408 48,-48 V 80 C 448,53.408 426.592,32 400,32 Z m 9,33.1875 H 317.43751 C 277.55033,107.50003 238.03375,187.76926 225.3125,252.125 L 212.5,292.8125 c -6.8377,25.24346 -6.28027,33.1888 -2.8125,39.0625 0.85632,1.44317 3.16576,6.12823 6.4375,18.75 4.74995,18.26847 8.96023,45.86761 9.0625,47.18751 -0.68736,16.86026 -0.30198,34.70791 1.0625,51.81249 H 57 c -19.137373,0 -34.8125,-15.61457 -34.8125,-34.74999 V 99.937501 C 22.1875,80.800851 37.862627,65.1875 57,65.1875 Z'
    ]
};
const iconHTML5 = {
    definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faHtml5,
    href: 'https://developer.mozilla.org/ru/docs/Web/HTML'
};
const iconPug = {
    definition: faPug,
    href: 'https://pugjs.org/'
};
const iconCSS3 = {
    definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faCss3,
    href: 'https://www.w3.org/Style/CSS/'
};
const iconSass = {
    definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faSass,
    href: 'https://sass-lang.com/'
};
const iconJS = {
    definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faJsSquare,
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
};
const iconNode = {
    definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faNodeJs,
    href: 'https://nodejs.org/en/'
};
const iconSqlite = {
    definition: faSqlite,
    href: 'https://www.sqlite.org/index.html'
};
const iconReact = {
    definition: _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_0__.faReact,
    href: 'https://reactjs.org/'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        title: 'todo-dodo-do',
        text: 'experiments with hooks',
        href: 'https://daomatys.github.io/todo-dodo-do/',
        src: 'todo-dodo-do.png',
        icons: [
            iconReact
        ]
    },
    {
        title: 'metalamp layouts',
        text: 'ui-kit and landings',
        href: 'https://daomatys.github.io/metalamp-fedsec-layouts',
        src: 'metalamp-fedsec-layouts.png',
        icons: [
            iconPug,
            iconSass,
            iconJS
        ]
    },
    {
        title: 'blackjack wut',
        text: 'singleplayer web-casino',
        href: 'https://daomatys.github.io/blackjack-wut/',
        src: 'blackjack-wut.png',
        icons: [
            iconHTML5,
            iconCSS3,
            iconJS
        ]
    },
    {
        title: 'bangkok express',
        text: 'study project',
        href: 'https://daomatys.github.io/jsbasic-20210520_overmaxcoast/',
        src: 'bangkok-express.png',
        icons: [
            iconJS
        ]
    },
    {
        title: 'voenkom bot',
        text: 'echo-bot-entertainer',
        href: 'https://t.me/vam_povistka_bot',
        src: 'voenkom-bot.png',
        icons: [
            iconSqlite,
            iconNode
        ]
    }
]);


/***/ }),

/***/ 2286:
/*!*****************************************************************!*\
  !*** ./src/app/components/main/__resume/main__resume.blocks.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "resumeBlocksArray": () => (/* binding */ resumeBlocksArray)
/* harmony export */ });
;
const resumeBlocksArray = [
    {
        title: "who am i",
        texts: [
            "Matyskin Maxim, 26 yo",
            "junior front-end developer",
            "from seversk, tomsk region, russia"
        ]
    },
    {
        title: "languages",
        texts: [
            "russian — mother tongue",
            "english — upper intermediate"
        ]
    },
    {
        title: "programming languages",
        texts: [
            "javascript",
            "typescript"
        ]
    },
    {
        title: "hard skills",
        texts: [
            "react/hooks",
            "angular",
            "sqilte3",
            "scss",
            "pug",
        ]
    },
    {
        title: "tools",
        texts: [
            "adobe ps/dw",
            "inkscape",
            "vscode",
            "git cli",
            "figma"
        ]
    }
];


/***/ }),

/***/ 1306:
/*!********************************************************************!*\
  !*** ./src/app/components/main/__resume/main__resume.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainResumeComponent": () => (/* binding */ MainResumeComponent)
/* harmony export */ });
/* harmony import */ var _main_resume_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main__resume.blocks */ 2286);
/* harmony import */ var _main_resume_education_roadmap_samples__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main__resume.education-roadmap-samples */ 2949);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../roadmap/roadmap.component */ 9601);





function MainResumeComponent_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const text_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](text_r3);
} }
function MainResumeComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MainResumeComponent_ng_container_2_ng_container_4_Template, 3, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const block_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](block_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", block_r1.texts);
} }
class MainResumeComponent {
    constructor() {
        this.roadmapSamples = _main_resume_education_roadmap_samples__WEBPACK_IMPORTED_MODULE_1__["default"];
        this.resumeBlocks = _main_resume_blocks__WEBPACK_IMPORTED_MODULE_0__.resumeBlocksArray;
    }
}
MainResumeComponent.ɵfac = function MainResumeComponent_Factory(t) { return new (t || MainResumeComponent)(); };
MainResumeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MainResumeComponent, selectors: [["app-main-resume"]], decls: 7, vars: 2, consts: [[1, "resume"], ["src", "assets/resume-photo.jpg", 1, "resume__photo"], [4, "ngFor", "ngForOf"], [1, "resume__block-info", "resume__edu"], [1, "resume__title"], [3, "roadmapSamples"], [1, "resume__block-info"], [1, "resume__text"]], template: function MainResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MainResumeComponent_ng_container_2_Template, 5, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "education");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "app-roadmap", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.resumeBlocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("roadmapSamples", ctx.roadmapSamples);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _roadmap_roadmap_component__WEBPACK_IMPORTED_MODULE_2__.RoadmapComponent], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Razer-Blackwidow-Regular\";\n  src: url('RazerBlackwidow-Regular.eot');\n  src: local(\"\u263A\"), url('RazerBlackwidow-Regular.woff') format(\"woff\"), url('RazerBlackwidow-Regular.ttf') format(\"truetype\"), url('RazerBlackwidow-Regular.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.resume__title[_ngcontent-%COMP%], .resume__text[_ngcontent-%COMP%] {\n  font-family: Razer-Blackwidow-Regular;\n  text-transform: lowercase;\n}\n.resume__title[_ngcontent-%COMP%] {\n  font-size: var(--fontsize-h2);\n  line-height: var(--fontsize-h2);\n}\n.resume__text[_ngcontent-%COMP%] {\n  font-size: var(--fontsize-body);\n  line-height: var(--fontsize-body);\n}\n@media only screen and (max-width: 460px) {\n  .resume__edu[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n@media only screen and (max-width: 820px) {\n  .resume[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template: \"photo\" \"a\" \"b\" \"c\" \"d\" \"e\" \"edu\";\n    grid-template-columns: auto;\n  }\n}\n@media only screen and (min-width: 820px) {\n  .resume[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template: \"a photo\" \"b photo\" \"c photo\" \"d e\" \"edu edu\";\n    grid-template-columns: auto 275px;\n  }\n}\n.resume[_ngcontent-%COMP%] {\n  grid-gap: 48px;\n}\n.resume__block-info[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  grid-gap: 16px;\n  gap: 16px;\n}\n.resume__title[_ngcontent-%COMP%] {\n  color: #03241C;\n}\n.resume__text[_ngcontent-%COMP%] {\n  margin-left: 24px;\n  color: #c7bb9e;\n}\n.resume__photo[_ngcontent-%COMP%] {\n  grid-area: photo;\n  width: 100%;\n  max-height: 100%;\n}\n.resume__edu[_ngcontent-%COMP%] {\n  grid-area: edu;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW5fX3Jlc3VtZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXGZvbnRzXFxyYXplci1ibGFja3dpZG93XFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX190ZXh0XFxzdHlsZXNfX3RleHQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNDLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0S0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURFRDtBRUhFO0VBSUUscUNBQUE7RUFDQSx5QkFBQTtBRkVKO0FFTUU7RUFDRSw2QkFBQTtFQUNBLCtCQUFBO0FGSko7QUVZRTtFQUNFLCtCQUFBO0VBQ0EsaUNBQUE7QUZWSjtBQWhCQTtFQUNFO0lBQ0Usd0JBQUE7RUFtQkY7QUFDRjtBQWhCQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLGdEQUNFO0lBT0YsMkJBQUE7RUFXRjtBQUNGO0FBVEE7RUFDRTtJQUNFLGFBQUE7SUFDQSw0REFDRTtJQUtGLGlDQUFBO0VBTUY7QUFDRjtBQUhBO0VBQ0UsY0FBQTtBQUtGO0FBRkk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBSU47QUFBRTtFQUVFLGNHL0NxQjtBSGdEekI7QUFFRTtFQUVFLGlCQUFBO0VBQ0EsY0dsREk7QUhpRFI7QUFJRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBRko7QUFLRTtFQUNFLGNBQUE7QUFISiIsImZpbGUiOiJtYWluX19yZXN1bWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IGxvY2FsKFwi4pi6XCIpLCB1cmwoXCJmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIuc3ZnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnJlc3VtZV9fdGl0bGUsIC5yZXN1bWVfX3RleHQge1xuICBmb250LWZhbWlseTogUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyO1xuICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuLnJlc3VtZV9fdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgyKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgyKTtcbn1cbi5yZXN1bWVfX3RleHQge1xuICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWJvZHkpO1xuICBsaW5lLWhlaWdodDogdmFyKC0tZm9udHNpemUtYm9keSk7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDYwcHgpIHtcbiAgLnJlc3VtZV9fZWR1IHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODIwcHgpIHtcbiAgLnJlc3VtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiBcInBob3RvXCIgXCJhXCIgXCJiXCIgXCJjXCIgXCJkXCIgXCJlXCIgXCJlZHVcIjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogODIwcHgpIHtcbiAgLnJlc3VtZSB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlOiBcImEgcGhvdG9cIiBcImIgcGhvdG9cIiBcImMgcGhvdG9cIiBcImQgZVwiIFwiZWR1IGVkdVwiO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAyNzVweDtcbiAgfVxufVxuLnJlc3VtZSB7XG4gIGdyaWQtZ2FwOiA0OHB4O1xufVxuLnJlc3VtZV9fYmxvY2staW5mbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxNnB4O1xufVxuLnJlc3VtZV9fdGl0bGUge1xuICBjb2xvcjogIzAzMjQxQztcbn1cbi5yZXN1bWVfX3RleHQge1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgY29sb3I6ICNjN2JiOWU7XG59XG4ucmVzdW1lX19waG90byB7XG4gIGdyaWQtYXJlYTogcGhvdG87XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xufVxuLnJlc3VtZV9fZWR1IHtcbiAgZ3JpZC1hcmVhOiBlZHU7XG59IiwiQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyJztcblx0c3JjOiB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLmVvdCcpO1xuXHRzcmM6IGxvY2FsKCfimLonKSwgdXJsKCdmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnN2ZycpIGZvcm1hdCgnc3ZnJyk7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIkBpbXBvcnQgJy9zcmMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnL3NyYy9hc3NldHMvZm9udHMvcmF6ZXItYmxhY2t3aWRvdy9mb250cy5zY3NzJztcclxuXHJcbiVzdHlsZXNfX3RleHQge1xyXG4gICZfaDEsXHJcbiAgJl9oMixcclxuICAmX2gzLFxyXG4gICZfYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICB9XHJcblxyXG4gICZfaDEge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1oMSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tZm9udHNpemUtaDEpO1xyXG4gIH1cclxuXHJcbiAgJl9oMiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgyKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1oMik7XHJcbiAgfVxyXG5cclxuICAmX2gzIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtaDMpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgzKTtcclxuICB9XHJcblxyXG4gICZfYm9keSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWJvZHkpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWJvZHkpO1xyXG4gIH1cclxufVxyXG4iLCIvL2Jhc2UgcGFsZXR0ZTogaHR0cHM6Ly9jb2xvcnNjaGVtZS5ydS8jM2IzMjBzVGUxdzB3MFxyXG4kZGVlcC10ZWFsOiAjMDc0ODM5O1xyXG4kZGVlcC10ZWFsLXNoYWRlX2xpZ2h0OiAgIzA2NDAzMztcclxuJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw6ICMwMzI0MUM7XHJcbiRkZWVwLXRlYWwtc2hhZGVfZGFyazogICAjMDAwNzA1O1xyXG5cclxuJHNpc2FsOiAjYzdiYjllO1xyXG4kY29ybi1oYXJ2ZXN0OiAjOEY3NzNEO1xyXG5cclxuJHBvaHV0dWthd2E6ICM2NDBBMjU7XHJcbiRydXN0aWMtcmVkOiAjNDEwMzE2O1xyXG5cclxuXHJcbi8vaW4tcHJvamVjdCBjb2xvci1tYXBcclxuJGh1ZV9tYWluLWxpZ2h0OiAkZGVlcC10ZWFsO1xyXG4kaHVlX21haW4tZGFyazogICRkZWVwLXRlYWwtc2hhZGVfZGFyaztcclxuXHJcbiRodWVfdGl0bGUtbGlnaHQ6ICRjb3JuLWhhcnZlc3Q7XHJcbiRodWVfdGl0bGUtbGlnaHQtYWx0OiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuJGh1ZV90aXRsZS1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcblxyXG4kaHVlX2xpbmstYWN0aXZlOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcbiRodWVfbGluay1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuXHJcbiRodWVfdGV4dC1saWdodDogJHNpc2FsO1xyXG5cclxuXHJcbi8vbWVkaWEgYnJlYWtwb2ludHNcclxuJGJyZWFrRm9vdGVyTWluOiAzNTVweDtcclxuJGJyZWFrSGVhZGVyTWluOiA0NjBweDtcclxuJGJyZWFrSGVhZGVyVGFibGV0VG9Nb2JpbGU6IDYxMHB4O1xyXG4kYnJlYWtGb290ZXJBbmRSZXN1bWU6IDgyMHB4O1xyXG4kYnJlYWtIZWFkZXJEZXNrVG9UYWJsZXQ6IDkzMHB4O1xyXG4kYnJlYWtMb2dvU2hyaW5rczogMTE5MHB4O1xyXG4kYnJlYWtBcHBVcHNjYWxlOiAxNjAwcHg7XHJcbiRicmVha1ZpZXdwb3J0T3ZlckZ1bGxIRDogMTkyMXB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 2949:
/*!************************************************************************************!*\
  !*** ./src/app/components/main/__resume/main__resume.education-roadmap-samples.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([
    {
        timestamp: "2013—2014",
        title: "Tomsk State University of Control Systems and Radioelectronics",
        text: "FACULTY OF INNOVATION TECHNOLOGIES, Mechatronics and Robotics bdp, incompleted"
    },
    {
        timestamp: "2011—2013",
        title: "198 Seversk Middle School",
        text: "Senior middle school education"
    },
    {
        timestamp: "2002—2011",
        title: "198 Seversk Middle School",
        text: "Junior middle school education"
    }
]);


/***/ }),

/***/ 8508:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.animation.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainAnimation": () => (/* binding */ mainAnimation)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 6755);

const easing = '.4s ease';
const mainAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('routeAnimations', [ /*
  transition('* <=> *', [

    query(':enter', style({
      opacity: '0',
      position: 'absolute'
    })),

    query(':leave', style({
      position: 'relative'
    })),

    group([
      query(':leave', [
        animate( easing, style({ opacity: '0' }) )
      ]),

      query(':enter', [
        animate( easing, style({ opacity: '1' }) )
      ])
    ])
  ])*/]);


/***/ }),

/***/ 639:
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainComponent": () => (/* binding */ MainComponent)
/* harmony export */ });
/* harmony import */ var _main_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.animation */ 8508);
/* harmony import */ var src_app_services_title_page_content_initializer_title_page_content_initializer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/title-page-content-initializer/title-page-content-initializer.service */ 2154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 3252);





class MainComponent {
    constructor(titlePageInitService) {
        this.titlePageInitService = titlePageInitService;
    }
    ngOnInit() {
        this.currentRoutePath = '';
    }
    prepareRoute(outlet) {
        var _a, _b;
        const newPath = (_a = outlet.activatedRoute.snapshot.url[0]) === null || _a === void 0 ? void 0 : _a.path;
        this.defineTitlePageContentDisplayingState(newPath);
        return (_b = outlet.activatedRouteData) === null || _b === void 0 ? void 0 : _b['animation'];
    }
    defineTitlePageContentDisplayingState(newPath) {
        const currentPath = this.currentRoutePath;
        if (currentPath !== newPath) {
            this.currentRoutePath = newPath;
            if (newPath) {
                this.imagePath = "assets/forest_flat.svg";
                this.titlePageInitService.setStateFalse();
            }
            if (!newPath) {
                this.imagePath = "assets/forest.svg";
                this.titlePageInitService.setStateTrue();
            }
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_services_title_page_content_initializer_title_page_content_initializer_service__WEBPACK_IMPORTED_MODULE_1__.TitlePageContentInitializerService)); };
MainComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 5, vars: 2, consts: [[1, "main"], [1, "main__content"], ["outlet", "outlet"], [1, "main__image", 3, "src"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", ctx.imagePath, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet], styles: [".main__content[_ngcontent-%COMP%] {\n  padding-inline: 9%;\n  width: 82%;\n  max-width: 1312px;\n}\n\n.main[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n}\n\n.main[_ngcontent-%COMP%], .main__content[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.main[_ngcontent-%COMP%], .main__image[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.main__content[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-block: 5px;\n  height: 100%;\n}\n\n.main__image[_ngcontent-%COMP%] {\n  display: block;\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0eWxlc1xcX19zdHJ1Y3R1cmVzXFxzdHlsZXNfX3N0cnVjdHVyZXMuc2NzcyIsIm1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxrQkFIdUI7RUFJdkIsVUFMZTtFQU1mLGlCQUFBO0FDTEY7O0FBREE7RUFDRSxzQkFBQTtFQUNBLG1CQUFBO0FBSUY7O0FBRkU7RUFFRSxhQUFBO0FBR0o7O0FBQUU7RUFFRSxXQUFBO0FBQ0o7O0FBRUU7RUFFRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUlFO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBRkoiLCJmaWxlIjoibWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy9zcmMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuXHJcbiRzdHJ1Y3R1cmVGcmFjdGlvbjogLjgyO1xyXG4kc3RydWN0dXJlV2lkdGg6IHBlcmNlbnRhZ2UoICRzdHJ1Y3R1cmVGcmFjdGlvbiApO1xyXG4kc3RydWN0dXJlUGFkZGluZ0lubGluZTogcGVyY2VudGFnZSggKCAxIC0gJHN0cnVjdHVyZUZyYWN0aW9uICkgLyAyICk7XHJcblxyXG4lc3RydWN0dXJlc19fcGFkZGluZyB7XHJcbiAgcGFkZGluZy1pbmxpbmU6ICRzdHJ1Y3R1cmVQYWRkaW5nSW5saW5lO1xyXG4gIHdpZHRoOiAkc3RydWN0dXJlV2lkdGg7XHJcbiAgbWF4LXdpZHRoOiBjYWxjKCAkYnJlYWtBcHBVcHNjYWxlICogJHN0cnVjdHVyZUZyYWN0aW9uICk7XHJcbn1cclxuXHJcbiVzdHJ1Y3R1cmVzX19oZWFkZXItbi1mb290ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJsb2NrOiA2NHB4O1xyXG59XHJcblxyXG5AbWl4aW4gdGFibGV0T3JpZW50YXRpb24ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG5AbWl4aW4gZGVza3RvcE9yaWVudGF0aW9uIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuIiwiLm1haW5fX2NvbnRlbnQge1xuICBwYWRkaW5nLWlubGluZTogOSU7XG4gIHdpZHRoOiA4MiU7XG4gIG1heC13aWR0aDogMTMxMnB4O1xufVxuXG4ubWFpbiB7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubWFpbiwgLm1haW5fX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4sIC5tYWluX19pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLm1haW5fX2NvbnRlbnQge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZy1ibG9jazogNXB4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG4ubWFpbl9faW1hZ2Uge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59Il19 */"], data: { animation: [
            _main_animation__WEBPACK_IMPORTED_MODULE_0__.mainAnimation
        ] } });


/***/ }),

/***/ 5200:
/*!*****************************************************************************!*\
  !*** ./src/app/components/presentation-unit/presentation-unit.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PresentationUnitComponent": () => (/* binding */ PresentationUnitComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../social-icon/social-icon.component */ 6394);



function PresentationUnitComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-social-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const icon_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("socialIcon", icon_r1);
} }
class PresentationUnitComponent {
    constructor() { }
    ngOnInit() {
        this.unitImageSrc = 'assets/' + this.unit.src;
    }
}
PresentationUnitComponent.ɵfac = function PresentationUnitComponent_Factory(t) { return new (t || PresentationUnitComponent)(); };
PresentationUnitComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PresentationUnitComponent, selectors: [["app-presentation-unit"]], inputs: { unit: "unit" }, decls: 11, vars: 6, consts: [[1, "presentation-unit"], ["target", "_blank", "rel", "noopener noreferrer", 1, "presentation-unit__layer_back", 3, "href"], [1, "presentation-unit__image", 3, "src"], [1, "presentation-unit__shadow-mask"], ["target", "_blank", "rel", "noopener noreferrer", 1, "presentation-unit__layer_front", 3, "href"], [1, "presentation-unit__title"], [1, "presentation-unit__text"], [1, "presentation-unit__icons"], [4, "ngFor", "ngForOf"], [3, "socialIcon"]], template: function PresentationUnitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, PresentationUnitComponent_ng_container_10_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.unit == null ? null : ctx.unit.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx.unitImageSrc, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx.unit == null ? null : ctx.unit.href, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.unit == null ? null : ctx.unit.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.unit == null ? null : ctx.unit.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.unit == null ? null : ctx.unit.icons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _social_icon_social_icon_component__WEBPACK_IMPORTED_MODULE_0__.SocialIconComponent], styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Razer-Blackwidow-Regular\";\n  src: url('RazerBlackwidow-Regular.eot');\n  src: local(\"\u263A\"), url('RazerBlackwidow-Regular.woff') format(\"woff\"), url('RazerBlackwidow-Regular.ttf') format(\"truetype\"), url('RazerBlackwidow-Regular.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.presentation-unit__title[_ngcontent-%COMP%], .presentation-unit__text[_ngcontent-%COMP%] {\n  font-family: Razer-Blackwidow-Regular;\n  text-transform: lowercase;\n}\n.presentation-unit__title[_ngcontent-%COMP%] {\n  font-size: var(--fontsize-h3);\n  line-height: var(--fontsize-h3);\n}\n.presentation-unit__text[_ngcontent-%COMP%] {\n  font-size: var(--fontsize-body);\n  line-height: var(--fontsize-body);\n}\n@media only screen and (max-width: 610px) {\n  .presentation-unit__layer_front[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (min-width: 610px) {\n  .presentation-unit__layer_front[_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n.presentation-unit[_ngcontent-%COMP%] {\n  display: flex;\n  position: relative;\n}\n.presentation-unit[_ngcontent-%COMP%], .presentation-unit__layer_front[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n.presentation-unit[_ngcontent-%COMP%], .presentation-unit__image[_ngcontent-%COMP%], .presentation-unit__shadow-mask[_ngcontent-%COMP%], .presentation-unit__layer_front[_ngcontent-%COMP%], .presentation-unit__layer_back[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n}\n.presentation-unit__image[_ngcontent-%COMP%] {\n  object-fit: cover;\n}\n.presentation-unit__shadow-mask[_ngcontent-%COMP%] {\n  top: 0px;\n  box-shadow: inset 3px 3px 16px 0px #000705;\n}\n.presentation-unit__shadow-mask[_ngcontent-%COMP%], .presentation-unit__layer_front[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.presentation-unit__layer_front[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: center;\n  grid-gap: 10%;\n  gap: 10%;\n  transition: opacity 0.8s ease;\n  background-color: rgba(199, 187, 158, 0.8);\n  color: #8F773D;\n  text-decoration: none;\n  opacity: 0;\n}\n.presentation-unit__layer_front[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {\n  .presentation-unit__layer_front[_ngcontent-%COMP%] {\n    background-color: rgba(199, 187, 158, 0.05);\n    -webkit-backdrop-filter: blur(14px) saturate(110%) sepia(20%);\n    backdrop-filter: blur(14px) saturate(110%) sepia(20%);\n  }\n}\n.presentation-unit__text[_ngcontent-%COMP%], .presentation-unit__title[_ngcontent-%COMP%] {\n  text-shadow: 2px 2px 2px #000705;\n}\n.presentation-unit__icons[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  grid-gap: 20px;\n  gap: 20px;\n  padding-top: 3px;\n  width: 100%;\n  background-color: #074839;\n  font-size: 3rem;\n  background-clip: border-box;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByZXNlbnRhdGlvbi11bml0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcYXNzZXRzXFxmb250c1xccmF6ZXItYmxhY2t3aWRvd1xcZm9udHMuc2NzcyIsIi4uXFwuLlxcLi5cXHN0eWxlc1xcX190ZXh0XFxzdHlsZXNfX3RleHQuc2NzcyIsIi4uXFwuLlxcLi5cXHZhcmlhYmxlc1xcdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0MsdUNBQUE7RUFDQSx1Q0FBQTtFQUNBLDRLQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREVEO0FFSEU7RUFJRSxxQ0FBQTtFQUNBLHlCQUFBO0FGRUo7QUVXRTtFQUNFLDZCQUFBO0VBQ0EsK0JBQUE7QUZUSjtBRVlFO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtBRlZKO0FBaEJBO0VBRUk7SUFDRSxhQUFBO0VBa0JKO0FBQ0Y7QUFmQTtFQUVJO0lBQ0UsYUFBQTtFQWdCSjtBQUNGO0FBWkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7QUFjRjtBQVpFO0VBRUUsdUJBQUE7QUFhSjtBQVZFO0VBS0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQVFKO0FBTEU7RUFDRSxpQkFBQTtBQU9KO0FBSkU7RUFDRSxRQUFBO0VBQ0EsMENBQUE7QUFNSjtBQUhFO0VBRUUsa0JBQUE7QUFJSjtBQUFJO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFBQSxRQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQ0FBQTtFQUNBLGNHbkRTO0VIb0RULHFCQUFBO0VBQ0EsVUFBQTtBQUVOO0FBQU07RUFDRSxVQUFBO0FBRVI7QUFFSTtFQUNFO0lBQ0UsMkNBQUE7SUFDQSw2REFBQTtJQUNBLHFEQUFBO0VBQU47QUFDRjtBQUlFO0VBRUUsZ0NBQUE7QUFISjtBQWNFO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUFBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSx5Qkc5RlE7RUgrRlIsZUFBQTtFQUNBLDJCQUFBO0FBWkoiLCJmaWxlIjoicHJlc2VudGF0aW9uLXVuaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyXCI7XG4gIHNyYzogdXJsKFwiZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIuZW90XCIpO1xuICBzcmM6IGxvY2FsKFwi4pi6XCIpLCB1cmwoXCJmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci53b2ZmXCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcImZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnR0ZlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIuc3ZnXCIpIGZvcm1hdChcInN2Z1wiKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuLnByZXNlbnRhdGlvbi11bml0X190aXRsZSwgLnByZXNlbnRhdGlvbi11bml0X190ZXh0IHtcbiAgZm9udC1mYW1pbHk6IFJhemVyLUJsYWNrd2lkb3ctUmVndWxhcjtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5wcmVzZW50YXRpb24tdW5pdF9fdGl0bGUge1xuICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgzKTtcbiAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgzKTtcbn1cbi5wcmVzZW50YXRpb24tdW5pdF9fdGV4dCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtYm9keSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1ib2R5KTtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MTBweCkge1xuICAucHJlc2VudGF0aW9uLXVuaXRfX2xheWVyX2Zyb250IHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDYxMHB4KSB7XG4gIC5wcmVzZW50YXRpb24tdW5pdF9fbGF5ZXJfZnJvbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbi5wcmVzZW50YXRpb24tdW5pdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wcmVzZW50YXRpb24tdW5pdCwgLnByZXNlbnRhdGlvbi11bml0X19sYXllcl9mcm9udCB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnByZXNlbnRhdGlvbi11bml0LCAucHJlc2VudGF0aW9uLXVuaXRfX2ltYWdlLCAucHJlc2VudGF0aW9uLXVuaXRfX3NoYWRvdy1tYXNrLCAucHJlc2VudGF0aW9uLXVuaXRfX2xheWVyX2Zyb250LCAucHJlc2VudGF0aW9uLXVuaXRfX2xheWVyX2JhY2sge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJlc2VudGF0aW9uLXVuaXRfX2ltYWdlIHtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG4ucHJlc2VudGF0aW9uLXVuaXRfX3NoYWRvdy1tYXNrIHtcbiAgdG9wOiAwcHg7XG4gIGJveC1zaGFkb3c6IGluc2V0IDNweCAzcHggMTZweCAwcHggIzAwMDcwNTtcbn1cbi5wcmVzZW50YXRpb24tdW5pdF9fc2hhZG93LW1hc2ssIC5wcmVzZW50YXRpb24tdW5pdF9fbGF5ZXJfZnJvbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4ucHJlc2VudGF0aW9uLXVuaXRfX2xheWVyX2Zyb250IHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMCU7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC44cyBlYXNlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE5OSwgMTg3LCAxNTgsIDAuOCk7XG4gIGNvbG9yOiAjOEY3NzNEO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIG9wYWNpdHk6IDA7XG59XG4ucHJlc2VudGF0aW9uLXVuaXRfX2xheWVyX2Zyb250OmhvdmVyIHtcbiAgb3BhY2l0eTogMTtcbn1cbkBzdXBwb3J0cyAoLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IG5vbmUpIG9yIChiYWNrZHJvcC1maWx0ZXI6IG5vbmUpIHtcbiAgLnByZXNlbnRhdGlvbi11bml0X19sYXllcl9mcm9udCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTksIDE4NywgMTU4LCAwLjA1KTtcbiAgICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KSBzYXR1cmF0ZSgxMTAlKSBzZXBpYSgyMCUpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxNHB4KSBzYXR1cmF0ZSgxMTAlKSBzZXBpYSgyMCUpO1xuICB9XG59XG4ucHJlc2VudGF0aW9uLXVuaXRfX3RleHQsIC5wcmVzZW50YXRpb24tdW5pdF9fdGl0bGUge1xuICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggIzAwMDcwNTtcbn1cbi5wcmVzZW50YXRpb24tdW5pdF9faWNvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAyMHB4O1xuICBwYWRkaW5nLXRvcDogM3B4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA3NDgzOTtcbiAgZm9udC1zaXplOiAzcmVtO1xuICBiYWNrZ3JvdW5kLWNsaXA6IGJvcmRlci1ib3g7XG59IiwiQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyJztcblx0c3JjOiB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLmVvdCcpO1xuXHRzcmM6IGxvY2FsKCfimLonKSwgdXJsKCdmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnN2ZycpIGZvcm1hdCgnc3ZnJyk7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIkBpbXBvcnQgJy9zcmMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnL3NyYy9hc3NldHMvZm9udHMvcmF6ZXItYmxhY2t3aWRvdy9mb250cy5zY3NzJztcclxuXHJcbiVzdHlsZXNfX3RleHQge1xyXG4gICZfaDEsXHJcbiAgJl9oMixcclxuICAmX2gzLFxyXG4gICZfYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICB9XHJcblxyXG4gICZfaDEge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1oMSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tZm9udHNpemUtaDEpO1xyXG4gIH1cclxuXHJcbiAgJl9oMiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgyKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1oMik7XHJcbiAgfVxyXG5cclxuICAmX2gzIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtaDMpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgzKTtcclxuICB9XHJcblxyXG4gICZfYm9keSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWJvZHkpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWJvZHkpO1xyXG4gIH1cclxufVxyXG4iLCIvL2Jhc2UgcGFsZXR0ZTogaHR0cHM6Ly9jb2xvcnNjaGVtZS5ydS8jM2IzMjBzVGUxdzB3MFxyXG4kZGVlcC10ZWFsOiAjMDc0ODM5O1xyXG4kZGVlcC10ZWFsLXNoYWRlX2xpZ2h0OiAgIzA2NDAzMztcclxuJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw6ICMwMzI0MUM7XHJcbiRkZWVwLXRlYWwtc2hhZGVfZGFyazogICAjMDAwNzA1O1xyXG5cclxuJHNpc2FsOiAjYzdiYjllO1xyXG4kY29ybi1oYXJ2ZXN0OiAjOEY3NzNEO1xyXG5cclxuJHBvaHV0dWthd2E6ICM2NDBBMjU7XHJcbiRydXN0aWMtcmVkOiAjNDEwMzE2O1xyXG5cclxuXHJcbi8vaW4tcHJvamVjdCBjb2xvci1tYXBcclxuJGh1ZV9tYWluLWxpZ2h0OiAkZGVlcC10ZWFsO1xyXG4kaHVlX21haW4tZGFyazogICRkZWVwLXRlYWwtc2hhZGVfZGFyaztcclxuXHJcbiRodWVfdGl0bGUtbGlnaHQ6ICRjb3JuLWhhcnZlc3Q7XHJcbiRodWVfdGl0bGUtbGlnaHQtYWx0OiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuJGh1ZV90aXRsZS1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcblxyXG4kaHVlX2xpbmstYWN0aXZlOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcbiRodWVfbGluay1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuXHJcbiRodWVfdGV4dC1saWdodDogJHNpc2FsO1xyXG5cclxuXHJcbi8vbWVkaWEgYnJlYWtwb2ludHNcclxuJGJyZWFrRm9vdGVyTWluOiAzNTVweDtcclxuJGJyZWFrSGVhZGVyTWluOiA0NjBweDtcclxuJGJyZWFrSGVhZGVyVGFibGV0VG9Nb2JpbGU6IDYxMHB4O1xyXG4kYnJlYWtGb290ZXJBbmRSZXN1bWU6IDgyMHB4O1xyXG4kYnJlYWtIZWFkZXJEZXNrVG9UYWJsZXQ6IDkzMHB4O1xyXG4kYnJlYWtMb2dvU2hyaW5rczogMTE5MHB4O1xyXG4kYnJlYWtBcHBVcHNjYWxlOiAxNjAwcHg7XHJcbiRicmVha1ZpZXdwb3J0T3ZlckZ1bGxIRDogMTkyMXB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 3461:
/*!***********************************************************!*\
  !*** ./src/app/components/red-eyes/red-eyes.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RedEyesComponent": () => (/* binding */ RedEyesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class RedEyesComponent {
    constructor() { }
    ngAfterViewInit() {
        const wrap = document.querySelector('#red-eyes');
        wrap === null || wrap === void 0 ? void 0 : wrap.addEventListener('load', () => {
            var _a;
            const coverage = (_a = wrap.contentDocument) === null || _a === void 0 ? void 0 : _a.querySelector('#red-eyes__coverage');
            this.recursiveWinkAnimation(coverage);
        });
    }
    recursiveWinkAnimation(coverage) {
        const applyAnimation = function applyAnimationForReal() {
            const randomTime = Math.floor(Math.random() * Math.floor(10000));
            const animation = coverage === null || coverage === void 0 ? void 0 : coverage.animate({
                transform: [
                    "translateY(3px)",
                    "translateY(0px)"
                ]
            }, {
                duration: 500,
                easing: "ease",
            });
            animation === null || animation === void 0 ? void 0 : animation.finished.then(() => setTimeout(applyAnimation, randomTime));
        };
        applyAnimation();
    }
}
RedEyesComponent.ɵfac = function RedEyesComponent_Factory(t) { return new (t || RedEyesComponent)(); };
RedEyesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RedEyesComponent, selectors: [["app-red-eyes"]], decls: 1, vars: 0, consts: [["data", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtrustConstantResourceUrl"] `assets/red-eyes.svg`, "type", "image/svg+xml", "id", "red-eyes", 1, "red-eyes"]], template: function RedEyesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "object", 0);
    } }, styles: [".red-eyes[_ngcontent-%COMP%] {\n  height: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZC1leWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtBQUNGIiwiZmlsZSI6InJlZC1leWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZC1leWVzIHtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 8777:
/*!**************************************************************************!*\
  !*** ./src/app/components/roadmap/__sample/roadmap__sample.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoadmapSampleComponent": () => (/* binding */ RoadmapSampleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);

class RoadmapSampleComponent {
    constructor() { }
}
RoadmapSampleComponent.ɵfac = function RoadmapSampleComponent_Factory(t) { return new (t || RoadmapSampleComponent)(); };
RoadmapSampleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapSampleComponent, selectors: [["app-roadmap-sample"]], inputs: { sample: "sample" }, decls: 9, vars: 3, consts: [[1, "roadmap-sample"], [1, "roadmap-sample__container-left"], [1, "roadmap-sample__time-stamp"], [1, "roadmap-sample__container-right"], [1, "roadmap-sample__title"], [1, "roadmap-sample__text"]], template: function RoadmapSampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sample.timestamp);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sample.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.sample.text);
    } }, styles: ["@charset \"UTF-8\";\n@font-face {\n  font-family: \"Razer-Blackwidow-Regular\";\n  src: url('RazerBlackwidow-Regular.eot');\n  src: local(\"\u263A\"), url('RazerBlackwidow-Regular.woff') format(\"woff\"), url('RazerBlackwidow-Regular.ttf') format(\"truetype\"), url('RazerBlackwidow-Regular.svg') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n}\n.roadmap-sample__text[_ngcontent-%COMP%], .roadmap-sample__title[_ngcontent-%COMP%], .roadmap-sample__time-stamp[_ngcontent-%COMP%] {\n  font-family: Razer-Blackwidow-Regular;\n  text-transform: lowercase;\n}\n.roadmap-sample__text[_ngcontent-%COMP%], .roadmap-sample__title[_ngcontent-%COMP%], .roadmap-sample__time-stamp[_ngcontent-%COMP%] {\n  font-size: var(--fontsize-body);\n  line-height: var(--fontsize-body);\n}\n.roadmap-sample[_ngcontent-%COMP%] {\n  display: flex;\n}\n.roadmap-sample__container-left[_ngcontent-%COMP%] {\n  display: flex;\n  margin-left: 24px;\n  margin-right: 14px;\n  width: 100px;\n  white-space: nowrap;\n}\n.roadmap-sample__container-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 16px;\n  gap: 16px;\n}\n.roadmap-sample__text[_ngcontent-%COMP%], .roadmap-sample__title[_ngcontent-%COMP%], .roadmap-sample__time-stamp[_ngcontent-%COMP%] {\n  color: #c7bb9e;\n}\n.roadmap-sample__text[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvYWRtYXBfX3NhbXBsZS5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFxhc3NldHNcXGZvbnRzXFxyYXplci1ibGFja3dpZG93XFxmb250cy5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXHN0eWxlc1xcX190ZXh0XFxzdHlsZXNfX3RleHQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNDLHVDQUFBO0VBQ0EsdUNBQUE7RUFDQSw0S0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QURFRDtBRUhFO0VBSUUscUNBQUE7RUFDQSx5QkFBQTtBRkVKO0FFZ0JFO0VBQ0UsK0JBQUE7RUFDQSxpQ0FBQTtBRmRKO0FBWkE7RUFDRSxhQUFBO0FBZUY7QUFaSTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBY047QUFYSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFBQSxTQUFBO0FBYU47QUFURTtFQUlFLGNHcEJJO0FINEJSO0FBTEU7RUFDRSxrQkFBQTtBQU9KIiwiZmlsZSI6InJvYWRtYXBfX3NhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJSYXplci1CbGFja3dpZG93LVJlZ3VsYXJcIjtcbiAgc3JjOiB1cmwoXCJmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5lb3RcIik7XG4gIHNyYzogbG9jYWwoXCLimLpcIiksIHVybChcImZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLndvZmZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIudHRmXCIpIGZvcm1hdChcInRydWV0eXBlXCIpLCB1cmwoXCJmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci5zdmdcIikgZm9ybWF0KFwic3ZnXCIpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG4ucm9hZG1hcC1zYW1wbGVfX3RleHQsIC5yb2FkbWFwLXNhbXBsZV9fdGl0bGUsIC5yb2FkbWFwLXNhbXBsZV9fdGltZS1zdGFtcCB7XG4gIGZvbnQtZmFtaWx5OiBSYXplci1CbGFja3dpZG93LVJlZ3VsYXI7XG4gIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG59XG4ucm9hZG1hcC1zYW1wbGVfX3RleHQsIC5yb2FkbWFwLXNhbXBsZV9fdGl0bGUsIC5yb2FkbWFwLXNhbXBsZV9fdGltZS1zdGFtcCB7XG4gIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtYm9keSk7XG4gIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1ib2R5KTtcbn1cblxuLnJvYWRtYXAtc2FtcGxlIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yb2FkbWFwLXNhbXBsZV9fY29udGFpbmVyLWxlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMjRweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4ucm9hZG1hcC1zYW1wbGVfX2NvbnRhaW5lci1yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTZweDtcbn1cbi5yb2FkbWFwLXNhbXBsZV9fdGV4dCwgLnJvYWRtYXAtc2FtcGxlX190aXRsZSwgLnJvYWRtYXAtc2FtcGxlX190aW1lLXN0YW1wIHtcbiAgY29sb3I6ICNjN2JiOWU7XG59XG4ucm9hZG1hcC1zYW1wbGVfX3RleHQge1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59IiwiQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyJztcblx0c3JjOiB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLmVvdCcpO1xuXHRzcmM6IGxvY2FsKCfimLonKSwgdXJsKCdmb250cy9SYXplckJsYWNrd2lkb3ctUmVndWxhci53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIHVybCgnZm9udHMvUmF6ZXJCbGFja3dpZG93LVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL1JhemVyQmxhY2t3aWRvdy1SZWd1bGFyLnN2ZycpIGZvcm1hdCgnc3ZnJyk7XG5cdGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbiIsIkBpbXBvcnQgJy9zcmMvdmFyaWFibGVzL3ZhcmlhYmxlcy5zY3NzJztcclxuQGltcG9ydCAnL3NyYy9hc3NldHMvZm9udHMvcmF6ZXItYmxhY2t3aWRvdy9mb250cy5zY3NzJztcclxuXHJcbiVzdHlsZXNfX3RleHQge1xyXG4gICZfaDEsXHJcbiAgJl9oMixcclxuICAmX2gzLFxyXG4gICZfYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogUmF6ZXItQmxhY2t3aWRvdy1SZWd1bGFyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcclxuICB9XHJcblxyXG4gICZfaDEge1xyXG4gICAgZm9udC1zaXplOiB2YXIoLS1mb250c2l6ZS1oMSk7XHJcbiAgICBsaW5lLWhlaWdodDogdmFyKC0tZm9udHNpemUtaDEpO1xyXG4gIH1cclxuXHJcbiAgJl9oMiB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWgyKTtcclxuICAgIGxpbmUtaGVpZ2h0OiB2YXIoLS1mb250c2l6ZS1oMik7XHJcbiAgfVxyXG5cclxuICAmX2gzIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udHNpemUtaDMpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWgzKTtcclxuICB9XHJcblxyXG4gICZfYm9keSB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnRzaXplLWJvZHkpO1xyXG4gICAgbGluZS1oZWlnaHQ6IHZhcigtLWZvbnRzaXplLWJvZHkpO1xyXG4gIH1cclxufVxyXG4iLCIvL2Jhc2UgcGFsZXR0ZTogaHR0cHM6Ly9jb2xvcnNjaGVtZS5ydS8jM2IzMjBzVGUxdzB3MFxyXG4kZGVlcC10ZWFsOiAjMDc0ODM5O1xyXG4kZGVlcC10ZWFsLXNoYWRlX2xpZ2h0OiAgIzA2NDAzMztcclxuJGRlZXAtdGVhbC1zaGFkZV9ub3JtYWw6ICMwMzI0MUM7XHJcbiRkZWVwLXRlYWwtc2hhZGVfZGFyazogICAjMDAwNzA1O1xyXG5cclxuJHNpc2FsOiAjYzdiYjllO1xyXG4kY29ybi1oYXJ2ZXN0OiAjOEY3NzNEO1xyXG5cclxuJHBvaHV0dWthd2E6ICM2NDBBMjU7XHJcbiRydXN0aWMtcmVkOiAjNDEwMzE2O1xyXG5cclxuXHJcbi8vaW4tcHJvamVjdCBjb2xvci1tYXBcclxuJGh1ZV9tYWluLWxpZ2h0OiAkZGVlcC10ZWFsO1xyXG4kaHVlX21haW4tZGFyazogICRkZWVwLXRlYWwtc2hhZGVfZGFyaztcclxuXHJcbiRodWVfdGl0bGUtbGlnaHQ6ICRjb3JuLWhhcnZlc3Q7XHJcbiRodWVfdGl0bGUtbGlnaHQtYWx0OiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuJGh1ZV90aXRsZS1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcblxyXG4kaHVlX2xpbmstYWN0aXZlOiAkZGVlcC10ZWFsLXNoYWRlX2Rhcms7XHJcbiRodWVfbGluay1kYXJrOiAkZGVlcC10ZWFsLXNoYWRlX25vcm1hbDtcclxuXHJcbiRodWVfdGV4dC1saWdodDogJHNpc2FsO1xyXG5cclxuXHJcbi8vbWVkaWEgYnJlYWtwb2ludHNcclxuJGJyZWFrRm9vdGVyTWluOiAzNTVweDtcclxuJGJyZWFrSGVhZGVyTWluOiA0NjBweDtcclxuJGJyZWFrSGVhZGVyVGFibGV0VG9Nb2JpbGU6IDYxMHB4O1xyXG4kYnJlYWtGb290ZXJBbmRSZXN1bWU6IDgyMHB4O1xyXG4kYnJlYWtIZWFkZXJEZXNrVG9UYWJsZXQ6IDkzMHB4O1xyXG4kYnJlYWtMb2dvU2hyaW5rczogMTE5MHB4O1xyXG4kYnJlYWtBcHBVcHNjYWxlOiAxNjAwcHg7XHJcbiRicmVha1ZpZXdwb3J0T3ZlckZ1bGxIRDogMTkyMXB4O1xyXG4iXX0= */"] });


/***/ }),

/***/ 9601:
/*!*********************************************************!*\
  !*** ./src/app/components/roadmap/roadmap.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoadmapComponent": () => (/* binding */ RoadmapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _sample_roadmap_sample_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./__sample/roadmap__sample.component */ 8777);



function RoadmapComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-roadmap-sample", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sample_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("sample", sample_r1);
} }
class RoadmapComponent {
    constructor() { }
}
RoadmapComponent.ɵfac = function RoadmapComponent_Factory(t) { return new (t || RoadmapComponent)(); };
RoadmapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RoadmapComponent, selectors: [["app-roadmap"]], inputs: { roadmapSamples: "roadmapSamples" }, decls: 4, vars: 1, consts: [[1, "roadmap"], [1, "roadmap__pillar"], [1, "roadmap__samples"], [4, "ngFor", "ngForOf"], [3, "sample"]], template: function RoadmapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, RoadmapComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.roadmapSamples);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _sample_roadmap_sample_component__WEBPACK_IMPORTED_MODULE_0__.RoadmapSampleComponent], styles: [".roadmap[_ngcontent-%COMP%] {\n  position: relative;\n}\n.roadmap__pillar[_ngcontent-%COMP%] {\n  position: absolute;\n  border-radius: 5px;\n  width: 12px;\n  height: calc(100% - 32px);\n  background-color: #03241C;\n}\n.roadmap__samples[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  grid-gap: 32px;\n  gap: 32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvYWRtYXAuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFx2YXJpYWJsZXNcXHZhcmlhYmxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlBO0VBQ0Usa0JBQUE7QUFIRjtBQUtFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQ1RxQjtBRE16QjtBQU1FO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FoQlM7RUFnQlQsU0FoQlM7QUFZYiIsImZpbGUiOiJyb2FkbWFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnL3NyYy92YXJpYWJsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuJHJvYWRtYXBHYXA6IDMycHg7XHJcblxyXG4ucm9hZG1hcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAmX19waWxsYXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtICRyb2FkbWFwR2FwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRodWVfdGl0bGUtbGlnaHQtYWx0O1xyXG4gIH1cclxuXHJcbiAgJl9fc2FtcGxlcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGdhcDogJHJvYWRtYXBHYXA7XHJcbiAgfVxyXG59XHJcbiIsIi8vYmFzZSBwYWxldHRlOiBodHRwczovL2NvbG9yc2NoZW1lLnJ1LyMzYjMyMHNUZTF3MHcwXHJcbiRkZWVwLXRlYWw6ICMwNzQ4Mzk7XHJcbiRkZWVwLXRlYWwtc2hhZGVfbGlnaHQ6ICAjMDY0MDMzO1xyXG4kZGVlcC10ZWFsLXNoYWRlX25vcm1hbDogIzAzMjQxQztcclxuJGRlZXAtdGVhbC1zaGFkZV9kYXJrOiAgICMwMDA3MDU7XHJcblxyXG4kc2lzYWw6ICNjN2JiOWU7XHJcbiRjb3JuLWhhcnZlc3Q6ICM4Rjc3M0Q7XHJcblxyXG4kcG9odXR1a2F3YTogIzY0MEEyNTtcclxuJHJ1c3RpYy1yZWQ6ICM0MTAzMTY7XHJcblxyXG5cclxuLy9pbi1wcm9qZWN0IGNvbG9yLW1hcFxyXG4kaHVlX21haW4tbGlnaHQ6ICRkZWVwLXRlYWw7XHJcbiRodWVfbWFpbi1kYXJrOiAgJGRlZXAtdGVhbC1zaGFkZV9kYXJrO1xyXG5cclxuJGh1ZV90aXRsZS1saWdodDogJGNvcm4taGFydmVzdDtcclxuJGh1ZV90aXRsZS1saWdodC1hbHQ6ICRkZWVwLXRlYWwtc2hhZGVfbm9ybWFsO1xyXG4kaHVlX3RpdGxlLWRhcms6ICRkZWVwLXRlYWwtc2hhZGVfZGFyaztcclxuXHJcbiRodWVfbGluay1hY3RpdmU6ICRkZWVwLXRlYWwtc2hhZGVfZGFyaztcclxuJGh1ZV9saW5rLWRhcms6ICRkZWVwLXRlYWwtc2hhZGVfbm9ybWFsO1xyXG5cclxuJGh1ZV90ZXh0LWxpZ2h0OiAkc2lzYWw7XHJcblxyXG5cclxuLy9tZWRpYSBicmVha3BvaW50c1xyXG4kYnJlYWtGb290ZXJNaW46IDM1NXB4O1xyXG4kYnJlYWtIZWFkZXJNaW46IDQ2MHB4O1xyXG4kYnJlYWtIZWFkZXJUYWJsZXRUb01vYmlsZTogNjEwcHg7XHJcbiRicmVha0Zvb3RlckFuZFJlc3VtZTogODIwcHg7XHJcbiRicmVha0hlYWRlckRlc2tUb1RhYmxldDogOTMwcHg7XHJcbiRicmVha0xvZ29TaHJpbmtzOiAxMTkwcHg7XHJcbiRicmVha0FwcFVwc2NhbGU6IDE2MDBweDtcclxuJGJyZWFrVmlld3BvcnRPdmVyRnVsbEhEOiAxOTIxcHg7XHJcbiJdfQ== */"] });


/***/ }),

/***/ 6394:
/*!*****************************************************************!*\
  !*** ./src/app/components/social-icon/social-icon.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialIconComponent": () => (/* binding */ SocialIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 8249);



class SocialIconComponent {
    constructor() {
        this.onMouseEnterTheFooterIcon = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() {
        const casePage = this.socialIcon.href.search('\:\/\/') > -1;
        this.iconTarget = casePage ? '_blank' : '';
        this.iconRel = casePage ? 'noopener noreferrer' : '';
    }
    emitMouseEnterEvent(target) {
        const marker = target.getAttribute('data-marker');
        if (marker) {
            this.onMouseEnterTheFooterIcon.emit(marker);
        }
    }
}
SocialIconComponent.ɵfac = function SocialIconComponent_Factory(t) { return new (t || SocialIconComponent)(); };
SocialIconComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialIconComponent, selectors: [["app-social-icon"]], inputs: { socialIcon: "socialIcon" }, outputs: { onMouseEnterTheFooterIcon: "onMouseEnterTheFooterIcon" }, decls: 2, vars: 5, consts: [[1, "app-social-icon", 3, "href", "target", "rel", "mouseenter"], [3, "icon"]], template: function SocialIconComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function SocialIconComponent_Template_a_mouseenter_0_listener($event) { return ctx.emitMouseEnterEvent($event == null ? null : $event.target); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.socialIcon == null ? null : ctx.socialIcon.href, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("target", ctx.iconTarget);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("rel", ctx.iconRel);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("data-marker", ctx.socialIcon == null ? null : ctx.socialIcon.marker);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.socialIcon == null ? null : ctx.socialIcon.definition);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FaIconComponent], styles: [".app-social-icon[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1pY29uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0FBQ0YiLCJmaWxlIjoic29jaWFsLWljb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXNvY2lhbC1pY29uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuIl19 */"] });


/***/ }),

/***/ 2154:
/*!***************************************************************************************************!*\
  !*** ./src/app/services/title-page-content-initializer/title-page-content-initializer.service.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TitlePageContentInitializerService": () => (/* binding */ TitlePageContentInitializerService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 4001);


class TitlePageContentInitializerService {
    constructor() {
        this.caseMessageSource = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.caseCurrentPageIsTitle = this.caseMessageSource.asObservable();
    }
    setStateFalse() {
        this.caseMessageSource.next(false);
    }
    setStateTrue() {
        this.caseMessageSource.next(true);
    }
}
TitlePageContentInitializerService.ɵfac = function TitlePageContentInitializerService_Factory(t) { return new (t || TitlePageContentInitializerService)(); };
TitlePageContentInitializerService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: TitlePageContentInitializerService, factory: TitlePageContentInitializerService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8260:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8260);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(271)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map