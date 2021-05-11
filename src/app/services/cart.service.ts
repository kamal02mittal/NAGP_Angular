import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  total;

  constructor(
  ) {
    let cartItems = localStorage.getItem('cartdata');
    if(cartItems){
      this.items = JSON.parse(cartItems);
    }
  }

  addToCart(product:any) {
    let index = this.items.findIndex(x => x.id === product.id);
    if(index > -1){
      this.items[index].qty = parseInt(this.items[index].qty)+parseInt(product.qty);
    } else {
      this.items.push(product);
    }
    localStorage.setItem("cartdata",JSON.stringify(this.items));
  }

  getItems() {
    return this.items;
  }

  getSubTotal(items){
    this.total = 0;
    items.forEach((product) => {
      this.total += product.price * product.qty;
    });
    return this.total;
  }

  clearCart() {
    this.items = [];
    localStorage.setItem("cartdata",JSON.stringify(this.items));
    return this.items;
  }

  updateItems(items){
    localStorage.setItem("cartdata",JSON.stringify(items));
  }

}

