import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent implements OnInit{
    items = this.cartService.getItems();
    checkoutForm: FormGroup;
    
      ngOnInit(){
        this.checkoutForm = this.formBuilder.group({
            name: ["", [Validators.required, Validators.minLength(4)]],
            shippingaddress: ["", [Validators.required]],
            phone : ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
            email: ["", [Validators.required, Validators.email]],
          });
      }
    constructor(private authService:AuthenticationService,
      private router:Router,
      private cartService: CartService,
        private formBuilder : FormBuilder) { 
          if(!this.isLoggedIn()){
            this.router.navigateByUrl('/login');
          }
          if(!this.cartService.getItems().length){
            this.router.navigateByUrl('/cart');
          }
    }

    isLoggedIn(){
      this.authService.loadUser();
      return this.authService.isAuthenticated();
    }

    onSubmit(): void {
        // Process checkout data here
        let count = this.cartService.getItems().length;
        
        if(count){
            this.items = this.cartService.clearCart();
            alert('Your order has been submitted');
            this.checkoutForm.reset();
            this.router.navigateByUrl('/');
        }
        
      }
  

}