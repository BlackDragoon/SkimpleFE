import { Component, OnInit } from '@angular/core';

import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';

import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // variabili
  private loginForm: FormGroup;

  constructor(private fb: FormBuilder, public http: HttpClient, private loginService: LoginService, private authService: AuthService) {
    this.createForm();
  }

  // metodi
  onSubmit() {
    // this.loginService.login(this.loginForm.value);
  }
  createForm() {
    this.loginForm = this.fb.group({
      // <-- the parent FormGroup
      email: null,
      password: null,
      token: null
    });
  }

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (socialPlatform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.authService.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + ' sign in data : ', userData);
      // Now sign-in with userData
      this.loginForm.value.email = userData.email;
      this.loginForm.value.token = userData.authToken;
      this.loginService.login(this.loginForm.value);
    });
  }
}
