System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Order;
    return {
        setters:[],
        execute: function() {
            Order = (function () {
                function Order(id, name, description, customerId, deliveryDate, deliveryAddress) {
                    this.id = id;
                    this.name = name;
                    this.description = description;
                    this.customerId = customerId;
                    this.deliveryDate = deliveryDate;
                    this.deliveryAddress = deliveryAddress;
                }
                return Order;
            }());
            exports_1("Order", Order);
        }
    }
});
//# sourceMappingURL=Order.js.map