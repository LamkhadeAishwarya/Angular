var Employee = /** @class */ (function () {
    function Employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    Employee.prototype.calculate = function () {
        this.hra = this.salary * 0.34;
        this.da = this.salary * 0.31;
        this.ta = this.salary * 0.56;
        this.pf = this.salary * 0.5;
        this.gross = (this.hra + this.da + this.ta + this.salary) - this.pf;
    };
    Employee.prototype.print = function () {
        console.log(this.gross);
    };
    return Employee;
}());
var e = new Employee(1, "sakshi", 23006);
e.calculate();
e.print();
