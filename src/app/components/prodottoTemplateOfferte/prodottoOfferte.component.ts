import {Component, Input} from '@angular/core';
import {ProdottoDataModel} from '../prodottoTemplate/prodotto-data-model';


@Component({
  selector: 'app-prodotto-offerte',
  templateUrl: './prodottoOfferte.component.html',
  styleUrls: ['./prodottoOfferte.component.css']
})
export class ProdottoOfferteComponent {
  @Input() prodotto: ProdottoDataModel;


  constructor() {}


}
