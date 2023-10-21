import { Component } from '@angular/core';
import { Iproducts } from '../iproducts';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  products : Array<Iproducts> = products;

  constructor(private cs: CartService){}

  addToCart(product: Iproducts){
    this.cs.addToCart(product);
  }
}
