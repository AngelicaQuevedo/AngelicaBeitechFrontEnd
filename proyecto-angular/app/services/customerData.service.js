System.register(["angular2/core", "angular2/http", "rxjs/add/operator/map"], function(exports_1, context_1) {
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
    var core_1, http_1;
    var TiendaService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            TiendaService = (function () {
                function TiendaService(_http) {
                    this._http = _http;
                }
                TiendaService.prototype.getCustomers = function () {
                    return this._http.get("http://localhost:8090/webapp/API/GetCustomers")
                        .map(function (res) { return res.json(); });
                };
                TiendaService.prototype.getProductosPerCustomer = function (id) {
                    return this._http.get("http://localhost:8090/webapp/API/GetAllowedProductsByCustomer/" + id)
                        .map(function (res) { return res.json(); });
                };
                /*addOrder(order: Order,idC:number) {
                    let json = JSON.stringify(order);
                    let params = "json="+json;
                    let headers = new Headers({'Content-Type':'application/json'});
            
                    return this._http.post("http://localhost:8090/webapp/API/AddOrder/"+idC,
                            params, {headers: headers}).map(res => res.json());
                }*/
                TiendaService.prototype.addOrder = function (order, idC) {
                    var data = JSON.stringify(order);
                    var params = data;
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    return this._http.post("http://localhost:8090/webapp/API/AddOrder/" + idC, params, { headers: headers }).map(function (res) { return res.json(); });
                };
                TiendaService.prototype.getOrdersPerCustomer = function (idCx) {
                    return this._http.get("http://localhost:8090/webapp/API/GetOrdersByCustomer/" + idCx)
                        .map(function (res) { return res.json(); });
                };
                TiendaService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TiendaService);
                return TiendaService;
            }());
            exports_1("TiendaService", TiendaService);
        }
    }
});
//# sourceMappingURL=customerData.service.js.map