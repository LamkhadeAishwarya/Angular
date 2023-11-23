class Student
{
    rollno: number;
    name :string ;
    math: number;
    phy :number;
    chem:number;
    sum :number;

     per:number;
    constructor(rollno,name,math,phy,chem)
    {
        this.rollno=rollno;
        this.name=name;
        this.math=math;
        this.phy=phy;
        this.chem=chem;
    }
    calculate()
    {
this.sum=this.chem+this.math+this.phy;
this.per=this.sum/3;

    }
    print()
    {
        console.log(this.per);
    }
}
const s=new Student(1,"Aishu",50,50,50);
s.calculate();
s.print();