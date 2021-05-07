import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;

  constructor(private authService:AuthenticationService,
              public router:Router,
              private readonly fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],     
      password: ['', Validators.required]
    });
    this.authService.loadUser();
    if(this.authService.isAuthenticated()){
      this.router.navigate(['/']);
    }
  }

  onLogin(){
    this.authService.login(this.loginForm.getRawValue().username,this.loginForm.getRawValue().password);
     if(this.authService.isAuthenticated()){
       this.router.navigate(['/']);
     }

  }

}
