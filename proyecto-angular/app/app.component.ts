import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {CustomerListComponent} from "./components/customer-list.component";



@Component({
	selector: "mi-app",
	templateUrl: "app/view/home.html",
	directives: [CustomerListComponent,ROUTER_DIRECTIVES]
})




export class AppComponent{
	public titulo:string = "Tienda Beitech";

}
