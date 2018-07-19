import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';



@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  signinForm: FormGroup;
  private apiUrl = 'http://localhost:2000/utente/signup/';


  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.createForm();

  }

  onSubmit() {
    var sign = this.signinForm.value;
    this.http.get(this.apiUrl + sign.username)
      .subscribe(data => {
        console.log("OK");
      }, err => {
        console.log('Something went wrong!');
      });
  }
  createForm() {
    this.signinForm = this.fb.group({ // <-- the parent FormGroup
      email: null,
      password: null,
      confermaPassword: null
    });
  }
}
