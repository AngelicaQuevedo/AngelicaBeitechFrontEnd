System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Product;
    return {
        setters:[],
        execute: function() {
            Product = (function () {
                function Product() {
                }
                Product.prototype.getproductId = function () {
                    return this.productId;
                };
                Product.prototype.setproductId = function (productId) {
                    this.productId = productId;
                };
                Product.prototype.getName = function () {
                    return this.name;
                };
                Product.prototype.setName = function (name) {
                    this.name = name;
                };
                Product.prototype.getDescription = function () {
                    return this.description;
                };
                Product.prototype.setDescription = function (description) {
                    this.description = description;
                };
                Product.prototype.getproductPrice = function () {
                    return this.productPrice;
                };
                Product.prototype.setproductPrice = function (productPrice) {
                    this.productPrice = productPrice;
                };
                return Product;
            }());
            exports_1("Product", Product);
            { }
        }
    }
});
//# sourceMappingURL=Product.js.map