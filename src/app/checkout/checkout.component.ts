import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

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
    constructor(private cartService: CartService,
        private formBuilder : FormBuilder) { 
    }

    onSubmit(): void {
        // Process checkout data here
        let count = this.cartService.getItems().length;
        
        if(count){
            this.items = this.cartService.clearCart();
            alert('Your order has been submitted');
            this.checkoutForm.reset();
        }
        
      }
  

}