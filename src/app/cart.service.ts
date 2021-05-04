import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  total;

  constructor(
    private http: HttpClient
  ) {
    let cartItems = localStorage.getItem('cartdata');
    if(cartItems){
      this.items = JSON.parse(cartItems);
    }
  }

  addToCart(product) {
    this.items.push(product);
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

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

}

