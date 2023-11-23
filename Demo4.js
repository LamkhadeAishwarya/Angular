var Product = /** @class */ (function () {
    function Product(pcode, name, price) {
        this.pcode = pcode;
        this.name = name;
        this.price = price;
    }
    Product.prototype.calculate = function () {
        this.price = this.price - (this.price * 0.10);
    };
    Product.prototype.print = function () {
        console.log(this.price);
    };
    return Product;
}());
var p = new Product(1, "pen", 100);
p.calculate();
p.print();
