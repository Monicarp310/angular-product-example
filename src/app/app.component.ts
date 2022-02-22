import { Component } from '@angular/core';
import { Product } from './model/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-product-example';

  products: Product[] = [
    {
      code: "457hkns8",
      name: "Pack palmeritas",
      price: 1.80,
      units: 2,
    },
    {
      code: "12ti5n5g",
      name: "Brick leche",
      price: 1.20,
      units: 6,
    },
    {
      code: "2151ead5",
      name: "Botella 2L Coca Cola",
      price: 2.50,
      units: 1,
    }
  ];

  constructor(){
    console.log(this.getTotalPrice())
  }

  getTotalPrice(): number {
    let total = 0;
    for(let products of this.products){
      total = products.units * products.price
    }
  return total;
  }
}
