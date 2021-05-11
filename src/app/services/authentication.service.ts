import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public authenticated: boolean;
  public authenticatedUser;
  private users=[
    {username:"admin", password:"1234",roles:['USER']},
    {username:"user1", password:"1234",roles:['USER']}
  ]

  constructor() {
  }

  login(username:string,password:string){
    let user;
    this.users.forEach(u=>{
      if(u.username===username && u.password===password){
        user=u;
      }
    })
    if(user){
      this.authenticated=true;
      this.authenticatedUser=user;
      localStorage.setItem("authenticatedUser",JSON.stringify(this.authenticatedUser));
    }
    else{
      this.authenticated=false;
      console.log("Invalid user");
    }
  }

  loadUser(){
    let user=localStorage.getItem('authenticatedUser');
    if(user){
      this.authenticatedUser=JSON.parse(user);
      this.authenticated=true;
    }
  }

  isAuthenticated(){
    return this.authenticated;
  }
  
  logout(){
    this.authenticated=false;
    this.authenticatedUser=undefined;
    localStorage.removeItem('authenticatedUser');
  }

}
