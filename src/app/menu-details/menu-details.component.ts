import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {
product: Iproducts = {} as Iproducts;
index: number = 0;

constructor(private route: ActivatedRoute, private cs: CartService){}

addToCart(product: Iproducts){
  this.cs.addToCart(product);
}

ngOnInit(): void {
  this.route.params.subscribe((params: Params) => {
    this.index = params[ "index"];
    this.product = products[this.index];
  })
}

}
