import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../iproducts';
import { CartService } from '../cart.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  dishes: Array<Iproducts> = [];

  orderForm = new FormGroup({
    name: new FormControl(''),
    address: new FormControl('', Validators.required),
    phone: new FormControl(''),
  });

  constructor(private cs: CartService){}

  increase(dish: Iproducts){
    this.cs.increase(dish);
    this.cartTotal();
  }

  decrease(dish: Iproducts, index: number){
    this.cs.decrease(dish, index);
    this.cartTotal();
  }

  removeItem(index:number){
    this.cs.removeItem(index);
    this.cartTotal();
  }

  cartTotal(){
    let producttotal: number = 0;
    let service: number = 0;
    let discount: number = 0;
    let total: number = 0;
    let discounttotal: number = 0;

    for(let product of this.dishes){
      producttotal += product.price * product.qtty;
      service = producttotal / 10;
      total = producttotal + service;
      if (total > 40){
        discount = total / 100 * 15;
        discounttotal = total - discount;
      }
    };

    let message = document.getElementById("cartItems") as HTMLElement
    let result = document.getElementById("total") as HTMLElement

    if(producttotal == 0){
      Swal.fire({
        position: 'center',
        imageUrl: '../assets/images/add_cart.png',
        imageWidth: 360,
        imageHeight: 409,
        title: 'Your cart is empty',
        showConfirmButton: false,
        timer: 4000
      })
      message.innerHTML = `<h1>Your cart is empty</h1>`
    } 
    if (producttotal > 0 && discount > 0) {    
      result.innerHTML = `
      <table class="table">
        <tr>
          <td>Products</td>
          <td class="text-end">${producttotal.toFixed(2)} €</td>
        </tr>
        <tr>
          <td>Service</td>
          <td class="text-end">${service.toFixed(2)} €</td>
        </tr>
        <tr>
          <td>Total</td>
          <td class="text-end">${total.toFixed(2)} €</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td class="text-end">${discount.toFixed(2)} €</td>
        </tr>
        <tr>
          <td><b>Total amount<br></b>(including discount and VAT)</td>
          <td class="text-end"><b>${discounttotal.toFixed(2)} €</b></td>
        </tr>
      </table>
      `;
    }
    if (producttotal > 0 && discount == 0) {
      result.innerHTML = `
      <table class="table">
        <tr>
          <td>Products</td>
          <td class="text-end">${producttotal.toFixed(2)} €</td>
        </tr>
        <tr>
          <td>Service</td>
          <td class="text-end">${service.toFixed(2)} €</td>
        </tr>
        <tr>
          <td>Discount</td>
          <td class="text-end">${discount} €</td>
        </tr>
        <tr>
          <td><b>Total amount<br></b>(including VAT)</td>
          <td class="text-end"><b>${total.toFixed(2)} €</b></td>
        </tr>
      </table>
      `;
    }
  }

  clearCart() {
    this.dishes = this.cs.clearCart();
  }
  
   onSubmit() {
    if(this.orderForm.valid){
      console.warn(this.orderForm.value);
      Swal.fire({
        position: 'center',
        imageUrl: '../assets/images/cart_success.jpg',
        imageWidth: 410,
        imageHeight: 308,
        title: 'We got your order',
        showConfirmButton: false,
        timer: 2000
      })
      this.dishes = this.cs.clearCart();
      this.orderForm.reset();
    } else {
      Swal.fire({
        icon: 'error',
        text: 'We need your address to deliver food',        
      })
    }
    
  }

  ngOnInit(): void {
    this.dishes = this.cs.getItems();
    this.cartTotal();
  }

}
