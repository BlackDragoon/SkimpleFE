import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {ProdottoDataModel} from '../prodottoTemplate/prodotto-data-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-prossime-offerte',
  templateUrl: './prossimeOfferte.component.html',
  styleUrls: ['./prossimeOfferte.component.css']
})
export class ProssimeOfferteComponent implements OnInit {

  private apiUrl = 'http://localhost:2000/prodotto/cercaProssimeOfferte/';
  private selectedProduct: ProdottoDataModel;
  listaProssimeOfferte = null;

  constructor(private fb: FormBuilder, public http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {
  }

  ngOnInit() {
    this.spinnerService.show();
    this.listaProssimeOfferte = null;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post(this.apiUrl, '', httpOptions)
      .subscribe(data => {
        this.listaProssimeOfferte = data;
        console.log('OK');
        this.spinnerService.hide();
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
        console.log('Something went wrong!');
        this.spinnerService.hide();
      });
  }
}
