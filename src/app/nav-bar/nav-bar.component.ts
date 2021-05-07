import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {

  constructor(private authService:AuthenticationService,
    private router:Router) {
     }
  
  isLoggedIn(){
    this.authService.loadUser();
    return this.authService.isAuthenticated();
  }
  
  onLogout(){
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
