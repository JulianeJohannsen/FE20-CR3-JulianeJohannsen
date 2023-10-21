import { Injectable } from '@angular/core';
import { Iproducts } from './iproducts';
import Swal from 'sweetalert2'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Iproducts> = [];

  constructor() { }

  addToCart(product: Iproducts){
    if(this.cart.find((dish)=> dish.name == product.name)){
      product.qtty++;
  } else {
    this.cart.push(product);
  }
  Swal.fire({
    position: 'center',
    imageUrl: '../assets/images/add_cart.png',
    imageWidth: 360,
    imageHeight: 409,
    title: 'Your product is in the cart',
    showConfirmButton: false,
    timer: 1500
  })
  }

  increase(product: Iproducts){
    product.qtty++;
    this.cartTotal();
  }

  decrease(product: Iproducts, index: number){
    if(product.qtty == 1){
      this.cart.splice(index, 1);
    } else {
     product.qtty--
    }
    this.cartTotal();
  }

  removeItem(index: number){
    this.cart.splice(index, 1);
  }

  cartTotal(){
    let producttotal: number = 0;
    let service: number = 0;
    let discount: number = 0;
    let total: number = 0;
    let discounttotal: number = 0;

    for(let product of this.cart){
      producttotal += product.price * product.qtty;
      service = producttotal / 10;
      total = producttotal + service;
      if (total > 40){
        discount = total / 100 * 15;
        discounttotal = total - discount;
      }
    }
  }

  getItems(){
    return this.cart
  }

  clearCart(){
    this.cart = [];
    return this.cart;
  }


}
