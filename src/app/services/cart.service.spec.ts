import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartService]
    });
  });

  it('should be created', inject([CartService], (service: CartService) => {
    expect(service).toBeTruthy();
  }));

  it('AddToCart should work and length of array should be 1', inject([CartService], (service: CartService) => {
    service.items = [];
    let product = {
      id: 1,
      name: 'Phone XL',
      price: 799,
      description: 'A large phone with one of the best screens',
      categoryId: 1,
      categoryName: 'Mobile',
      image: '../assets/images/iphone-.jpg',
      qty: 10
    };
    service.addToCart(product);
  
    expect(service.items.length).toEqual(1);
  }));

  it('subtotal should give sum of (price X qty)', inject([CartService], (service: CartService) => {
    let items = [{
      id: 1,
      name: 'Phone XL',
      price: 700,
      description: 'A large phone with one of the best screens',
      categoryId: 1,
      categoryName: 'Mobile',
      image: '../assets/images/iphone-.jpg',
      qty: 10
    },
    {
      id: 2,
      name: 'Phone XL',
      price: 500,
      description: 'A large phone with one of the best screens',
      categoryId: 1,
      categoryName: 'Mobile',
      image: '../assets/images/iphone-.jpg',
      qty: 10
    }];
    let subtotal = service.getSubTotal(items);
    // product.price * product.qty
    expect(subtotal).toEqual(12000);
  }));
});