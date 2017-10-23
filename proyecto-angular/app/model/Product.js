System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product(productId, name, description, category) {
                    this.productId = productId;
                    this.name = name;
                    this.description = description;
                }
                return Product;
            }());
            exports_1("Product", Product);
        }
    }
});
//# sourceMappingURL=Product.js.map