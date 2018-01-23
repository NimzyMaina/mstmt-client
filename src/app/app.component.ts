import { Component } from '@angular/core';
import {FacebookService, InitParams, LoginResponse} from 'ngx-facebook';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
declare var alertify: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private fb: FacebookService, private login: LoginService, private router: Router) {

    const initParams: InitParams = {
      appId: '404020580057017',
      xfbml: true,
      version: 'v2.8',
      cookie: true,
    };

    alertify.defaults.notifier.position = 'top-right';

    fb.init(initParams);

  }

  loginWithFacebook(): void {
    this.fb.login()
      .then((response: LoginResponse) => {
        this.login.serverLogin(response.authResponse.accessToken)
          .subscribe(
            (res) => {
              localStorage.setItem('authUser', JSON.stringify(res.data));
            },
            (err) => alertify.error('Login Failed')
          );
      })
      .catch((error: any) => alertify.error('Login Failed'));
  }

  getUserNames(): string {
    const u = JSON.parse(localStorage.getItem('authUser'));
    return u.first_name + ' ' + u.last_name;
  }

  isLoggedIn(): boolean {
    return (localStorage.getItem('authUser') != null);
  }

  onLogOut(): void {
    this.fb.getLoginStatus()
      .then(res => {
        if ( res && res.status === 'connected' ) {
          this.fb.logout();
          localStorage.removeItem('authUser');
          this.router.navigate(['/']);
          alertify.success('Logout Successful');
        }
      });
  }

}
