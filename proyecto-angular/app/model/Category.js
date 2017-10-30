System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Category;
    return {
        setters:[],
        execute: function() {
            Category = (function () {
                function Category(categoryId, name) {
                    this.categoryId = categoryId;
                    this.name = name;
                }
                return Category;
            }());
            exports_1("Category", Category);
        }
    }
});
//# sourceMappingURL=Category.js.map