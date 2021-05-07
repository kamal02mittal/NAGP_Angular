import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ProductListComponent } from './product-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
//import { products } from '../products';

describe('ProductListComponent', () => {
    let component: ProductListComponent;
    let fixture: ComponentFixture<ProductListComponent>;
    let titleEl;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProductListComponent],
            imports: [ RouterTestingModule.withRoutes([]), Ng2SearchPipeModule],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProductListComponent);
        component = fixture.componentInstance;
        titleEl = fixture.nativeElement.querySelector('.page-title');
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });


    it('products should come after filteration', () => {
        let categoryId = 1;
        const value = component.getProductsByCategory(categoryId)
        expect(value.length).toBe(4)
    });

    
    it(`should contain title 'All Products'`, () => {
        expect(component.title).toEqual('All Products');
    });
});