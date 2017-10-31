System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProductsOrder;
    return {
        setters:[],
        execute: function() {
            ProductsOrder = (function () {
                function ProductsOrder() {
                }
                ProductsOrder.prototype.getdetailId = function () {
                    return this.detailId;
                };
                return ProductsOrder;
            }());
            exports_1("ProductsOrder", ProductsOrder);
            {
                this.detailId = detailId;
            }
            getproductId();
            {
                return this.detailId;
            }
            setproductId: number;
            {
                this.productId = productId;
            }
            getprice();
            {
                return this.price;
            }
            setprice(price, number);
            {
                this.price = price;
            }
            getdetailDescription();
            {
                return this.detailDescription;
            }
            setdetailDescription(detailDescription, string);
            {
                this.detailDescription = detailDescription;
            }
            { }
        }
    }
});
//# sourceMappingURL=ProductsOrder.js.map