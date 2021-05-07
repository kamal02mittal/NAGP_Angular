import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticationService } from '../services/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let router;
    
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        imports: [ HttpClientModule, RouterTestingModule.withRoutes([])],
        declarations: [ LoginComponent, HomeComponent],
        providers: [ AuthenticationService, FormBuilder, { provide: Router, useValue: router } ]
      })
      .compileComponents();
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  });