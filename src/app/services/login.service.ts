import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../models/user.model';
import {LoginRequest} from '../models/loginRequest.model';
import {HttpHeaders} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Injectable()
export class LoginService {

  private urlLogin = 'http://localhost:2000/utente/login/';

  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {}

  // Login
  login(loginRequest) {
    debugger
    this.spinnerService.show();
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post(this.urlLogin, loginRequest, httpOptions)
      .subscribe(data => {
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
      });
  }


}
