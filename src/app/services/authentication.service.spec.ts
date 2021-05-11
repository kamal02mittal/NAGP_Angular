import { TestBed, inject } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService]
    });
  });

  it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
    expect(service).toBeTruthy();
  }));

  it('should perform Login and `authenticated User` sould be set', inject([AuthenticationService], (service: AuthenticationService) => {
    let username: string = "admin";
    let password: string = "1234";
    let user = {username:"admin", password:"1234",roles:['USER']};
    service.login(username, password);
    expect(service.authenticatedUser).toEqual(user);
  }));

  it('should perform Login and `isAuthenticated` sould be false', inject([AuthenticationService], (service: AuthenticationService) => {
    let username: string = "user";
    let password: string = "12536";
    service.login(username, password);
    expect(service.isAuthenticated()).toBeFalse();
  }));

  it('should perform Logout and `isAuthenticated` sould be false', inject([AuthenticationService], (service: AuthenticationService) => {
    service.logout();
    expect(service.isAuthenticated()).toBeFalse();
    expect(service.authenticatedUser).toEqual(undefined);
  }));

});
