import {NgModule}                     from '@angular/core';
import {DataTableModule} from "angular2-datatable";
import {BrowserModule}                from '@angular/platform-browser';
import {
    LocationStrategy,
    HashLocationStrategy
}         from '@angular/common';

import {AppComponent}                 from './app.component';
import {Ng2BootstrapModule}           from 'ng2-bootstrap/ng2-bootstrap';
import {NAV_DROPDOWN_DIRECTIVES}      from './shared/nav-dropdown.directive';

import {ChartsModule}                 from 'ng2-charts/ng2-charts';
import {SIDEBAR_TOGGLE_DIRECTIVES}    from './shared/sidebar.directive';
import {AsideToggleDirective}         from './shared/aside.directive';
import {BreadcrumbsComponent}         from './shared/breadcrumb.component';
import {HttpModule} from '@angular/http';

import {AppRoutingModule}             from './app.routing';

//Layouts
import {FullLayoutComponent}          from './layouts/full-layout.component';
import {SimpleLayoutComponent}        from './layouts/simple-layout.component';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        DataTableModule,
        BrowserModule,
        AppRoutingModule,
        Ng2BootstrapModule,
        FormsModule,
        
        ChartsModule,
        HttpModule
    ],
    declarations: [
        AppComponent,
        FullLayoutComponent,
        SimpleLayoutComponent,
        NAV_DROPDOWN_DIRECTIVES,
        BreadcrumbsComponent,
        SIDEBAR_TOGGLE_DIRECTIVES,
        AsideToggleDirective
    ],
    providers: [{
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    }],
    bootstrap: [AppComponent]
})
export class AppModule {
}