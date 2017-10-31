System.register(["angular2/core", "../services/customerData.service", "../model/Product", "../model/Order"], function(exports_1, context_1) {
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
    var core_1, customerData_service_1, Product_1, Order_1;
    var CustomerListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (customerData_service_1_1) {
                customerData_service_1 = customerData_service_1_1;
            },
            function (Product_1_1) {
                Product_1 = Product_1_1;
            },
            function (Order_1_1) {
                Order_1 = Order_1_1;
            }],
        execute: function() {
            CustomerListComponent = (function () {
                function CustomerListComponent(_customerService) {
                    this._customerService = _customerService;
                    this.tituloP = "Bienvenidos a su tienda Virtual!";
                    this.titulo = "Seleccione un cliente:";
                    this.heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
                    this.myHero = this.heroes[0];
                    this.orden = "Productos para ordenar:";
                    this.productosOrder = 5;
                    this.flag = false;
                    this.flag2 = false;
                    this.flag3 = false;
                }
                ;
                CustomerListComponent.prototype.ngOnInit = function () {
                    var id;
                    var idC;
                    var idCx;
                    this.getCustomers();
                    this.getProductosPerCustomer2();
                    this.productosOrder = [];
                    this.imprimir();
                    console.log("customer-list component cargado");
                };
                CustomerListComponent.prototype.getCustomers = function () {
                    var _this = this;
                    var loading_customerInfo = document.querySelector("customer-list .loading");
                    document.getElementById('ima').style.visibility = 'visible';
                    this._customerService.getCustomers()
                        .subscribe(function (result) {
                        _this.customers = result.customers;
                        _this.status = result.returnMessage;
                        console.log(_this.customers);
                        if (_this.status !== "success") {
                            alert("Error en el servidor");
                        }
                        document.getElementById('ima').style.display = 'none';
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                        }
                    });
                };
                CustomerListComponent.prototype.imprimir = function (name, idC) {
                    //console.log(this.productosOrder);
                    //console.log(name);
                    //console.log(val);
                    var _this = this;
                    if (this.productosOrder.length > 5) {
                        alert("you should register max 5 productos");
                    }
                    else {
                        var ordenFinal = new Order_1.Order();
                        //ordenFinal.setidCliente(val);
                        ordenFinal.setdeliveryAddress(name);
                        ordenFinal.setproducts(this.productosOrder);
                        ordenFinal.setdeliveryAddress(name);
                        //var id = ordenFinal.getidCliente();
                        var pro = ordenFinal.getproducts();
                        var del = ordenFinal.getdeliveryAddress();
                        console.log(pro);
                        //console.log(del);
                        this._customerService.addOrder(ordenFinal, idC)
                            .subscribe(function (result) {
                            _this.messagefull = result.addOrderMessage;
                            _this.statusOrden = result.returnMessage;
                            _this.returnCode = result.returnCode;
                            console.log(_this.statusOrden);
                            if (_this.returnCode == 2) {
                                _this.mensajeError = result.returnMessage;
                                _this.addOrderMessage = result.addOrderMessage;
                                alert(_this.mensajeError);
                                _this.flag3 = true;
                            }
                            if (_this.statusOrden == "success") {
                                _this.flag = true;
                            }
                            if (_this.statusOrden !== "success") {
                                alert("Error en el servidor");
                            }
                        }, function (error) {
                            _this.errorMessageFinal = error;
                            if (_this.errorMessageFinal !== null) {
                                console.log(_this.errorMessageFinal);
                            }
                        });
                    }
                };
                CustomerListComponent.prototype.cleanDialo = function () {
                    this.flag = false;
                    this.flag3 = false;
                };
                CustomerListComponent.prototype.log = function (productIdt, name, description, price) {
                    var productInd = new Product_1.Product();
                    console.log("BuenaFuncion" + " " + productIdt + " " + name + " " + description);
                    productInd.setproductId(productIdt);
                    productInd.setName(name);
                    productInd.setproductPrice(price);
                    productInd.setDescription(description);
                    var id = productInd.getproductId();
                    var nombre = productInd.getName();
                    var des = productInd.getDescription();
                    var pr = productInd.getproductPrice();
                    this.productosOrder.push(productInd);
                    //console.log(productInd);
                    // console.log(this.productosOrder);
                };
                CustomerListComponent.prototype.cleanArray = function () {
                    this.productosOrder = [];
                    this.arrayOrders = [];
                };
                CustomerListComponent.prototype.delete = function (index) {
                    if (window.confirm('really removing current row?')) {
                        //this.productosOrder.splice(index,1);
                        //console.log("Orden final"+" "+this.productosOrder.length);
                        //console.log("este es el indice"+" "+index)
                        return this.productosOrder.splice(index, 1);
                    }
                    else {
                        return false;
                    }
                };
                CustomerListComponent.prototype.getProductosPerCustomer2 = function (id) {
                    var _this = this;
                    this._customerService.getProductosPerCustomer(id)
                        .subscribe(function (result) {
                        _this.products = result.products;
                        _this.status = result.status;
                        console.log(_this.products);
                        if (_this.status == "success") {
                            alert("Error en el servidor");
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                        }
                    });
                };
                CustomerListComponent.prototype.getOrdersPerCustomers = function (idCx) {
                    var _this = this;
                    this._customerService.getOrdersPerCustomer(idCx)
                        .subscribe(function (result) {
                        _this.arrayOrders = result.orders;
                        _this.status3 = result.returnCode;
                        _this.productsOrder = result.orders[0];
                        console.log(_this.arrayOrders);
                        console.log(_this.productsOrder);
                        if (_this.status3 !== 0) {
                            alert("Error en el servidor");
                        }
                    }, function (error) {
                        _this.errorMessage = error;
                        if (_this.errorMessage !== null) {
                            console.log(_this.errorMessage);
                        }
                    });
                };
                CustomerListComponent = __decorate([
                    core_1.Component({
                        selector: "cliente-list",
                        templateUrl: "app/view/customer-list.html",
                        providers: [customerData_service_1.TiendaService]
                    }), 
                    __metadata('design:paramtypes', [customerData_service_1.TiendaService])
                ], CustomerListComponent);
                return CustomerListComponent;
            }());
            exports_1("CustomerListComponent", CustomerListComponent);
        }
    }
});
//# sourceMappingURL=customer-list.component.js.map