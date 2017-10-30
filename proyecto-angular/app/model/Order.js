System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order;
    return {
        setters:[],
        execute: function() {
            Order = (function () {
                function Order() {
                }
                Order.prototype.getidCliente = function () {
                    return this.idCliente;
                };
                Order.prototype.setidCliente = function (idCliente) {
                    this.idCliente = idCliente;
                };
                Order.prototype.getproducts = function () {
                    return this.productsToOrder;
                };
                Order.prototype.setproducts = function (productsToOrder) {
                    this.productsToOrder = productsToOrder;
                };
                Order.prototype.getdeliveryAddress = function () {
                    return this.deliveryAddress;
                };
                Order.prototype.setdeliveryAddress = function (deliveryAddress) {
                    this.deliveryAddress = deliveryAddress;
                };
                return Order;
            }());
            exports_1("Order", Order);
            { }
        }
    }
});
//# sourceMappingURL=Order.js.map