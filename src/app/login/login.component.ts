import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loginForm : FormGroup;

  constructor(private authService:AuthenticationService,
              private router:Router,
              private readonly fb: FormBuilder) {
                  
                this.loginForm = this.fb.group({
                    username: ['', Validators.required],     
                    password: ['', Validators.required]
                  });
               }

  ngOnInit() {
    this.authService.loadUser();
    if(this.authService.isAuthenticated()){
        this.router.navigateByUrl('/');
    }
  }

  onLogin(){
    //console.log(this.loginForm.getRawValue());
    this.authService.login(this.loginForm.getRawValue().username,this.loginForm.getRawValue().password);
     if(this.authService.isAuthenticated()){
       this.router.navigateByUrl('/');
     }

  }

}
