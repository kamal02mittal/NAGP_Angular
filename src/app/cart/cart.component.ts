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
    constructor(private authService:AuthenticationService,
      private router:Router,
      private cartService: CartService) { 
        if(!this.isLoggedIn()){
          this.router.navigateByUrl('/login');
        }
    }

    isLoggedIn(){
      this.authService.loadUser();
      return this.authService.isAuthenticated();
    }
}