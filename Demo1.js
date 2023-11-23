//let msg="Hii";
//console.log(msg)
//var emp={id:1,name:"samarth"}
//console.log(emp.name);
//class Date1
//{
//  day: number;
//  month :string;
//  year :number
//  constructor(day,month,year)
//  {
//   this.day=day;
//  this.month=month;
//  this.year=year;
var Student = /** @class */ (function () {
    function Student(rollno, name) {
        this.rollno = rollno;
        this.name = name;
    }
    return Student;
}());
var i = new Student(1, "Aishu");
console.log(i.rollno + "" + i.name);
