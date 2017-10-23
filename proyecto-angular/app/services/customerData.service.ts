import {Injectable} from "angular2/core";
import {Http, Response, Headers} from "angular2/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";
import {Customer} from "../model/Customer";
import {Order} from "../model/Order";

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
	}



