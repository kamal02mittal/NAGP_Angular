import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  searchText;
  products;
  title = "All Products";
  categories = [{id: 1, name : "Mobile"}, {id: 2, name : "Accessories"}];
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    // First get the category id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const categoryIdFromRoute = Number(routeParams.get('categoryId'));
    console.log(categoryIdFromRoute);
    if(categoryIdFromRoute){
      this.products = this.getProductsByCategory(categoryIdFromRoute);
      this.title = this.categories.find(item => item.id === categoryIdFromRoute).name;
    } else {
      this.products = products

    }
    // Find the product that correspond with the id provided in route.
    //this.product = products.find(product => product.id === categoryIdFromRoute);
  }

  getProductsByCategory(catId){
    return products.filter(x => x.categoryId === catId);
  }

}
