import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html'
})
export class ShippingComponent {
    shippingCosts = this.cartService.getShippingPrices();
    constructor(private cartService: CartService) {
    }

}