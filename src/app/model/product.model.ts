
export class Product{
  code: string;
  name: string;
  price: number;
  units: number;

  constructor(code:string, name:string, price:number, units:number){
    this.code = code;
    this.name = name;
    this.price = price;
    this.units = units;
  }
}
