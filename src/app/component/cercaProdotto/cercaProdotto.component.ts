import {Component, OnInit} from '@angular/core';
import {CercaProdotto} from './cercaProdotto';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CATEGORIE} from './mock-categorie';
import {ProdottoDataModel} from '../prodottoTemplate/prodotto-data-model';
import {MatSliderModule} from '@angular/material/slider';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Component({
  selector: 'app-form-cerca-prodotto',
  templateUrl: './cercaProdotto.component.html',
  styleUrls: ['./cercaProdotto.component.css']
})
export class CercaProdottoComponent {

  listaProdotti = null;
  prodottoForm: FormGroup;
  prodottoFilter: FormGroup;
  categorie = CATEGORIE;
  valuePrice = 0;
  minPrice = null;
  maxPrice = null;
  private apiUrl = 'http://localhost:2000/prodotto/cerca/';
  private selectedProduct: ProdottoDataModel;

  constructor(private fb: FormBuilder, public http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {
    this.createForm();
    this.createFilterForm();
  }

  onSelect(prodotto: ProdottoDataModel): void {
    this.selectedProduct = prodotto;
  }

  onSubmit() {
    this.spinnerService.show();
    this.listaProdotti = null;
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.http.post(this.apiUrl, this.prodottoForm.value, httpOptions)
      .subscribe(data => {
        this.listaProdotti = data;
        console.log('OK');
        this.spinnerService.hide();
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
        console.log('Something went wrong!');
        this.spinnerService.hide();
      });
  }

  createForm() {
    this.prodottoForm = this.fb.group({ // <-- the parent FormGroup
      searchIndex: null,
      minPercentageOff: null,
      keywords: null,
      merchantId: null
    });
  }

  createFilterForm() {
    this.prodottoFilter = this.fb.group({ // <-- the parent FormGroup
      minFilterPrice: null,
      maxFilterPrice: null
    });
  }

  onSubmitFilter() {
    this.minPrice = this.prodottoFilter.value.minFilterPrice;
    this.maxPrice = this.prodottoFilter.value.maxFilterPrice;
  }

}
