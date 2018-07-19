import {Component} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class CercaComponent {
  // variabili
  private listaProdotti = null;
  private cercaProdottoForm: FormGroup;
  private apiUrl = 'http://localhost:2000/prodotto/cerca/';

  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.createForm();
  }
  // metodi
  onSubmit() {
    this.listaProdotti = null;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post(this.apiUrl, this.cercaProdottoForm.value, httpOptions)
      .subscribe(data => {
        this.listaProdotti = data;
        console.log('OK');
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
        console.log('Something went wrong!');
      });
  }

  createForm() {
    this.cercaProdottoForm = this.fb.group({ // <-- the parent FormGroup
      keywords: null,
    });
  }
}
