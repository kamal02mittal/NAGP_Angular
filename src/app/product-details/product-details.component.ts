import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { products } from '../products';
import { CartService } from '../services/cart.service';

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-details.component.html'
  })
export class ProductDetailsComponent implements OnInit {
    product;
    addToCartForm : FormGroup;
    constructor(
        private route: ActivatedRoute,
        private router:Router,
        private cartService: CartService,
        private readonly fb: FormBuilder
      ) {
        this.addToCartForm = this.fb.group({
          qty: ['1', Validators.required]
        });
       }

      ngOnInit() {
        // First get the product id from the current route.
        const routeParams = this.route.snapshot.paramMap;
        const productIdFromRoute = Number(routeParams.get('productId'));
      console.log(productIdFromRoute);
        // Find the product that correspond with the id provided in route.
        this.product = products.find(product => product.id === productIdFromRoute);
      }

      onAddToCart(product) {
        //console.log(this.addToCartForm.getRawValue().qty);
        product.qty = this.addToCartForm.getRawValue().qty;
        this.cartService.addToCart(product);
        window.alert('Your product has been added to the cart!');
        this.router.navigateByUrl('/cart');
      }
  }