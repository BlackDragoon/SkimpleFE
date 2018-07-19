import {ProdottoPostComponent} from '../prodottoPost/prodottoPost.component';
import {Component, Input} from '@angular/core';
import {ProdottoDataModel} from './prodotto-data-model';
import {MatDialog, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-prodotto',
  templateUrl: './prodotto.component.html',
  styleUrls: ['./prodotto.component.css']
})
export class ProdottoComponent {
  // variabili
  @Input() prodotto: ProdottoDataModel;


  constructor(public dialog: MatDialog) {}

  // metodi
  openDialog(): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.data = {prodotto: this.prodotto};
    this.dialog.open(ProdottoPostComponent, dialogConfig);

  }


}
