import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  private apiUrl = 'http://localhost:2000/utente/login/';


  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.createForm();
  }


  onSubmit() {
    this.http.get(this.apiUrl)
      .subscribe(data => {
        console.log("OK");
      }, err => {
        console.log('Something went wrong!');
      });
  }
  createForm() {
    this.loginForm = this.fb.group({ // <-- the parent FormGroup
      username: null,
      password: null
    });
  }
}
