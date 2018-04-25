import {Component, Input} from '@angular/core';
import {ProdottoDataModel} from './prodotto-data-model';


@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  @Input() prodotto: ProdottoDataModel;


  constructor() {}


}
