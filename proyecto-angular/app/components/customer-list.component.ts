import {Component, OnInit} from "angular2/core";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";
import {TiendaService} from "../services/customerData.service";
import {Customer} from "../model/Customer";
import {Product} from "../model/Product";
import { CommonModule } from "@angular/common";
import { Component } from '@angular/core'
import {Order} from "../model/Order";
import {Ng2PaginationModule} from 'ng2-pagination';
import {DataTableModule} from "angular2-datatable";




@Component({
	selector: "cliente-list",
	templateUrl: "app/view/customer-list.html",
    providers: [TiendaService]

})



export class CustomerListComponent {

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
    public  productosOrder: Product[]=[];
    public  productInd:Product;	
    public  ordenFinal : Order;
    public  statusOrden:String;
    public errorMessageFinal;
    public flag :Boolean = false;
	 public flag2 :Boolean = false;
     public messagefull:String;
     public arrayOrders:Order[];
     public status3: number;
	

	

  constructor(private _customerService: TiendaService){}

 	ngOnInit() {
 	let id:number;
 	let idC:number;
 	let idCx:number;
    
     
     this.getCustomers();
     this.getProductosPerCustomer2();
     this.productosOrder = [];
     this.imprimir();

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
    

 imprimir(name,idC){

 	//console.log(this.productosOrder);
 	//console.log(name);
 	//console.log(val);

 
 	var ordenFinal = new Order();
 	//ordenFinal.setidCliente(val);
 	ordenFinal.setdeliveryAddress(name);
 	ordenFinal.setproducts(this.productosOrder);
 	ordenFinal.setdeliveryAddress(name);
     //var id = ordenFinal.getidCliente();
     var pro = ordenFinal.getproducts();
     var del = ordenFinal.getdeliveryAddress();
    
    console.log(pro);
 	console.log(del);

     this._customerService.addOrder(ordenFinal,idC)
	 .subscribe( result =>{

	     this.messagefull =result.addOrderMessage;
	     this.statusOrden = result.returnMessage;
         
          console.log(this.statusOrden);
         if(this.statusOrden=="success"){

         	this.flag =true;
         }

	     if(this.statusOrden!=="success"){

	     alert("Error en el servidor")
	     }

	     
	 },

	 error =>{
       this.errorMessageFinal = <any>error;
       if(this.errorMessageFinal!==null){

        console.log(this.errorMessageFinal);
  
       }

	 }

	 );

 }

     cleanDialo(){
     this.flag =false;
     
     }
   

    log(productIdt,name,description,price) {

  var productInd = new Product();	
  console.log("BuenaFuncion"+" "+productIdt+" "+name+" "+description);

   
   productInd.setproductId(productIdt); 
   productInd.setName(name);
   productInd.setproductPrice(price);
   productInd.setDescription(description);
   var id = productInd.getproductId();
   var nombre = productInd.getName();
   var des= productInd.getDescription();
   var pr= productInd.getproductPrice();

   this.productosOrder.push(productInd);
   console.log(productInd);
   console.log(this.productosOrder);
 }

    
    cleanArray(){

   this.productosOrder = [];

    }

    delete(index):Product[] {
  if(window.confirm('really removing current row?')) {
    //this.productosOrder.splice(index,1);
    //console.log("Orden final"+" "+this.productosOrder.length);
    //console.log("este es el indice"+" "+index)
    return this.productosOrder.splice(index,1);
  } else {
    return false;
  }
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

	 getOrdersPerCustomers(idCx){

	 this._customerService.getOrdersPerCustomer(idCx)
	 .subscribe( result =>{

	     this.arrayOrders =result.orders;
	     this.status3 = result.returnCode;
         
          console.log( this.arrayOrders);
	     if(this.status3!==0){

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




	}