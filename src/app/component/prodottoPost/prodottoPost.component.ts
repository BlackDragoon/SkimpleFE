import {Component, Input} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {ProdottoDataModel} from '../prodottoTemplate/prodotto-data-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Component({
  selector: 'app-post-prodotto',
  templateUrl: './prodottoPost.component.html',
  styleUrls: ['./prodottoPost.component.css']
})
export class ProdottoPostComponent {
  @Input() prodotto: ProdottoDataModel;
  private postProdottoForm: FormGroup;
  private apiUrl = 'http://localhost:2000/prodotto/invia/';
  private costante = 175;
  private sommaLunghezza = 175;
  private lunghezzaText = 0;
  private lunghezzaHash = 0;
  private lunghezzaLinkSx = 0;
  private lunghezzaLinkDx = 0;

  constructor(private fb: FormBuilder, public http: HttpClient) {
    this.createForm();
  }

  onSubmit() {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    this.postProdottoForm.patchValue({
      image: this.prodotto.multimedia[1].uri,
      url: this.prodotto.urlEsterna
    });

    this.http.post(this.apiUrl, this.postProdottoForm.value, httpOptions)
      .subscribe(data => {
        console.log('OK');
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
        console.log('Something went wrong!');
      });
  }

  onKeyText(value: string) {
    this.sommaLunghezza = 175;
    this.lunghezzaText = 0;
    this.lunghezzaText += value.length;
    this.sommaLunghezza = this.sommaLunghezza - this.lunghezzaText - this.lunghezzaHash - this.lunghezzaLinkSx - this.lunghezzaLinkDx;
  }
  onKeyHashtag(value: string) {
    this.sommaLunghezza = 175;
    this.lunghezzaHash = 0;
    this.lunghezzaHash += value.length;
    this.sommaLunghezza = this.sommaLunghezza - this.lunghezzaText - this.lunghezzaHash - this.lunghezzaLinkSx - this.lunghezzaLinkDx;
  }
  onKeyLinkSx(value: string) {
    this.sommaLunghezza = 175;
    this.lunghezzaLinkSx = 0;
    this.lunghezzaLinkSx += value.length;
    this.sommaLunghezza = this.sommaLunghezza - this.lunghezzaText - this.lunghezzaHash - this.lunghezzaLinkSx - this.lunghezzaLinkDx;
  }
  onKeyLinkDx(value: string) {
    this.sommaLunghezza = 175;
    this.lunghezzaLinkDx = 0;
    this.lunghezzaLinkDx += value.length;
    this.sommaLunghezza = this.sommaLunghezza - this.lunghezzaText - this.lunghezzaHash - this.lunghezzaLinkSx - this.lunghezzaLinkDx;
  }

  createForm() {
    this.postProdottoForm = this.fb.group({ // <-- the parent FormGroup
      text: "",
      image: null,
      hashtag: null,
      linkSx: "",
      linkDx: "",
      url: null
    });
  }


}
