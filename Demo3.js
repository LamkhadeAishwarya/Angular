var Student = /** @class */ (function () {
    function Student(rollno, name, math, phy, chem) {
        this.rollno = rollno;
        this.name = name;
        this.math = math;
        this.phy = phy;
        this.chem = chem;
    }
    Student.prototype.calculate = function () {
        this.sum = this.chem + this.math + this.phy;
        this.per = this.sum / 3;
    };
    Student.prototype.print = function () {
        console.log(this.per);
    };
    return Student;
}());
var s = new Student(1, "Aishu", 50, 50, 50);
s.calculate();
s.print();
