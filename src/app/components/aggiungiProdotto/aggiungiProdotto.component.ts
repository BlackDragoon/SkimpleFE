import {Component, OnInit} from '@angular/core';
import {FormProdotto} from './formProdotto';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {FORNITORI} from './mock-fornitori';


@Component({
  selector: 'app-form-prodotto',
  templateUrl: './aggiungiProdotto.component.html',
  styleUrls: ['./aggiungiProdotto.component.css']
})
export class AggiungiProdottoComponent {
  // variabili
  private listaProdotti = [];
  private fornitori = FORNITORI;
  private prodottoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  // metodi
  addProdotto() {
    var prodotto = this.prodottoForm.value;
    this.listaProdotti.push(prodotto);
  }

  onSubmit() {
    var prodotto = this.prodottoForm.value;
    this.listaProdotti.push(prodotto);
  }

  get diagnostic() {return JSON.stringify(this.listaProdotti);}
  createForm() {
    this.prodottoForm = this.fb.group({ // <-- the parent FormGroup
      titolo: [null, Validators.required],
      descrizioneBreve: null,
      descrizioneCompleta: null,
      prezzoListino: null,
      prezzoOfferta: null,
      fornitore: null,
      altroFornitore: null,
      idProdottoFornitore: null,
      tag: null,
      categoria: [null, Validators.required],
      facebook: false,
      telegram: false,
      instagram: false,
      pinterest: false,
      twitter: false
    });
  }
  ngOnInit() {

  }

}
