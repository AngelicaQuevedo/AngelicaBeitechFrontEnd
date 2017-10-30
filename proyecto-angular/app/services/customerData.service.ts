import {Injectable} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Customer} from "../model/Customer";
import {Order} from "../model/Order";
import {Product} from "../model/Product";

@Injectable()
export class TiendaService{
	constructor(private _http: Http){}

	getCustomers(){
		return this._http.get("http://localhost:8090/webapp/API/GetCustomers")
							.map(res => res.json());
	}

	getProductosPerCustomer(id:number){
       return this._http.get("http://localhost:8090/webapp/API/GetAllowedProductsByCustomer/"+id)
							.map(res => res.json());

	}


	/*addOrder(order: Order,idC:number) {
		let json = JSON.stringify(order);
		let params = "json="+json;
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post("http://localhost:8090/webapp/API/AddOrder/"+idC, 
				params, {headers: headers}).map(res => res.json());
	}*/

		addOrder(order: Order,idC:number) {
		let data = JSON.stringify(order);
		let params = data;
		let headers = new Headers({'Content-Type':'application/json'});

		return this._http.post("http://localhost:8090/webapp/API/AddOrder/"+idC, 
				params, {headers: headers}).map(res => res.json());
	}


	getOrdersPerCustomer(idCx:number){
       return this._http.get("http://localhost:8090/webapp/API/GetOrdersByCustomer/"+idCx)
							.map(res => res.json());

	}

	}



