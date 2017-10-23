import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {TiendaService} from "../services/customerData.service";
import {Customer} from "../model/Customer";
import {Customer} from "../model/Product";
import { CommonModule } from "@angular/common";
import { Component } from '@angular/core'


@Component({
	selector: "cliente-productos",
	templateUrl: "app/view/customer-list.html",
    providers: [TiendaService]

})


export class CustomerProductsDetail implements OnInit{


	
}