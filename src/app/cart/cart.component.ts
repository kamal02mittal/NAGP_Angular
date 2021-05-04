import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
    items = this.cartService.getItems();
    total : number;
    constructor(private authService:AuthenticationService,
      private router:Router,
      private cartService: CartService) { 
        if(!this.isLoggedIn()){
          this.router.navigateByUrl('/login');
        }
        this.total = cartService.getSubTotal(this.items);
    }
    
    subQty(item, qty){
      let index = this.items.indexOf(item);
      if(item.qty > 1){
        item.qty = parseInt(qty)-1;
        this.items[index] = item;
        this.total = this.cartService.getSubTotal(this.items);
      }
    }

    addQty(item, qty){
        let index = this.items.indexOf(item);
        item.qty = parseInt(qty)+1;
        this.items[index] = item;
        this.total = this.cartService.getSubTotal(this.items);
    }

    deleteItem(item){
      let index = this.items.indexOf(item);
      this.items.splice(index, 1);
      this.total = this.cartService.getSubTotal(this.items);
    }

    isLoggedIn(){
      this.authService.loadUser();
      return this.authService.isAuthenticated();
    }
}