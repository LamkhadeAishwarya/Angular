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

  //  }
  //  print()
  //  {
      //  console.log(this.day+""+this.month+""+this.year);
   // }


//}
//const d =new Date1(12,"jan",2023);
//d.print();

interface IStudent
{
    rollno:Number;
    name:string;
}
class Student
{
    rollno:Number;
    name :string;
    constructor(rollno,name)
    {
        this.rollno=rollno;
        this.name=name;
    }
}
const i :IStudent=new Student(1,"Aishu");
console.log(i.rollno+"/t"+i.name);