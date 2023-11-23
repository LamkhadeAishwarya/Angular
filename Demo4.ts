class Product
{
    pcode :number;
    name :string;
    price :number;
    constructor(pcode,name,price)
    {
        this.pcode=pcode;
        this.name=name;
        this.price=price;
    }
    calculate()
    {
        this.price=this.price-(this.price*0.10);
    }
    print ()
    {
        console.log(this.price);
    }
}
const p =new Product(1,"pen",100);
p.calculate();
p.print();