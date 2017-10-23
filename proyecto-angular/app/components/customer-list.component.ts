import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {TiendaService} from "../services/customerData.service";
import {Customer} from "../model/Customer";
import {Product} from "../model/Product";
import { CommonModule } from "@angular/common";
import { Component } from '@angular/core'
import {Order} from "../model/Order";


@Component({
	selector: "cliente-list",
	templateUrl: "app/view/customer-list.html",
    providers: [TiendaService]

})

export class CustomerListComponent implements OnInit {

	public tituloP:string = "Bienvenidos a su tienda Virtual!";
	public titulo:string = "Seleccione un cliente:";
	public customers: Customer[];
	public products: Product[];
	public status: string;
	public complet:any;
	public errorMessage;
	public 	heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
	public myHero:string = this.heroes[0];
	public selectedValue:string;
	public prueb:string;
	public orden:String= "Productos para ordenar:";
	public elements:String[];

	

	

  constructor(private _customerService: TiendaService){}

 	ngOnInit() {
 	let id:number;
   
    this.getCustomers();
     this.getProductosPerCustomer2();

 	console.log("customer-list component cargado");}

	

	getCustomers(){
     let loading_customerInfo = <HTMLElement>document.querySelector("customer-list .loading");
     document.getElementById('ima').style.visibility='visible';
	 this._customerService.getCustomers()
	 .subscribe( result =>{

	     this.customers =result.customers;
	     this.status = result.returnMessage;
         
          console.log( this.customers);
	     if(this.status!=="success"){

	     alert("Error en el servidor")
	     }

	      document.getElementById('ima').style.display='none';
	 },

	 error =>{
       this.errorMessage = <any>error;
       if(this.errorMessage!==null){

        console.log(this.errorMessage);
  
       }

	 }

	 );
	}
    

 
    

	getProductosPerCustomer2(id){

	 this._customerService.getProductosPerCustomer(id)
	 .subscribe( result =>{

	     this.products =result.products;
	     this.status = result.status;

	     console.log(this.products);
	     if(this.status=="success"){

	     alert("Error en el servidor")
	     }
	 },

	 error =>{
       this.errorMessage = <any>error;
       if(this.errorMessage!==null){

        console.log(this.errorMessage);
  
       }

	 }

	 );
	}

	prepareOrder(id){

     

	}

	}