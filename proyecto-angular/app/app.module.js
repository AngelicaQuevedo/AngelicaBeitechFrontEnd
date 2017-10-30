System.register(['@angular/core', "angular2-datatable", '@angular/platform-browser', '@angular/common', './app.component', 'ng2-bootstrap/ng2-bootstrap', './shared/nav-dropdown.directive', 'ng2-charts/ng2-charts', './shared/sidebar.directive', './shared/aside.directive', './shared/breadcrumb.component', '@angular/http', './app.routing', './layouts/full-layout.component', './layouts/simple-layout.component', "@angular/forms"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, angular2_datatable_1, platform_browser_1, common_1, app_component_1, ng2_bootstrap_1, nav_dropdown_directive_1, ng2_charts_1, sidebar_directive_1, aside_directive_1, breadcrumb_component_1, http_1, app_routing_1, full_layout_component_1, simple_layout_component_1, forms_1;
    var AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_datatable_1_1) {
                angular2_datatable_1 = angular2_datatable_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (ng2_bootstrap_1_1) {
                ng2_bootstrap_1 = ng2_bootstrap_1_1;
            },
            function (nav_dropdown_directive_1_1) {
                nav_dropdown_directive_1 = nav_dropdown_directive_1_1;
            },
            function (ng2_charts_1_1) {
                ng2_charts_1 = ng2_charts_1_1;
            },
            function (sidebar_directive_1_1) {
                sidebar_directive_1 = sidebar_directive_1_1;
            },
            function (aside_directive_1_1) {
                aside_directive_1 = aside_directive_1_1;
            },
            function (breadcrumb_component_1_1) {
                breadcrumb_component_1 = breadcrumb_component_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (app_routing_1_1) {
                app_routing_1 = app_routing_1_1;
            },
            function (full_layout_component_1_1) {
                full_layout_component_1 = full_layout_component_1_1;
            },
            function (simple_layout_component_1_1) {
                simple_layout_component_1 = simple_layout_component_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            }],
        execute: function() {
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [
                            angular2_datatable_1.DataTableModule,
                            platform_browser_1.BrowserModule,
                            app_routing_1.AppRoutingModule,
                            ng2_bootstrap_1.Ng2BootstrapModule,
                            forms_1.FormsModule,
                            ng2_charts_1.ChartsModule,
                            http_1.HttpModule
                        ],
                        declarations: [
                            app_component_1.AppComponent,
                            full_layout_component_1.FullLayoutComponent,
                            simple_layout_component_1.SimpleLayoutComponent,
                            nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
                            breadcrumb_component_1.BreadcrumbsComponent,
                            sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
                            aside_directive_1.AsideToggleDirective
                        ],
                        providers: [{
                                provide: common_1.LocationStrategy,
                                useClass: common_1.HashLocationStrategy
                            }],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map