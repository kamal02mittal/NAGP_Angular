import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthenticationService,
              private router:Router) { }

  ngOnInit() {
  }

  onLogin(user){
    this.authService.login(user.username,user.password);
    if(this.authService.isAuthenticated()){
      this.router.navigateByUrl('/');
    }

  }

}
