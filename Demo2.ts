class Employee 
{
    id :number;
    name :string;
    salary :number;
    hra :number;
    da:number;
    ta:number;
    pf:number;
    gross:number;
    constructor(id,name,salary)
    {
        this.id=id;
        this.name=name;
        this.salary=salary;
       
    }
    calculate()
    {
        this.hra=this.salary*0.34;
        this.da=this.salary*0.31;
        this.ta=this.salary*0.56;
        this.pf=this.salary*0.5;
        this.gross=(this.hra+this.da+this.ta+this.salary)-this.pf;



    }
    print()
    {
        console.log(this.gross);
    }

}
const e =new Employee(1,"sakshi",23006);
e.calculate();
e.print();