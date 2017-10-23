System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Customer;
    return {
        setters:[],
        execute: function() {
            Customer = (function () {
                function Customer(id, name) {
                    this.id = id;
                    this.name = name;
                }
                return Customer;
            }());
            exports_1("Customer", Customer);
        }
    }
});
//# sourceMappingURL=Customer.js.map