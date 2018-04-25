import {FornitoreDataModel} from './fornitore-data-model';
import {CategoriaDataModel} from './categoria-data-model';
import {TagDataModel} from './tag-data-model';
import {MultimediaDataModel} from './multimedia-data-model';

export class ProdottoDataModel {

  nomeProdotto: string;

  descrizioneBreve: string;

  descrizione: string;

  prezzoListino: number;

  prezzoOfferta: number;

  fornitore: FornitoreDataModel;

  urlEsterna: string;

  testoAccessorio: string;

  numVisualizzazioni: number;

  createDate: Date;

  updateDate: Date;

  categoria: CategoriaDataModel[];

  idEsternoProdotto: string;

  tag: TagDataModel[];

  multimedia: MultimediaDataModel[];

  percentualeSalvata: number;
  
  prezzoRisparmiato: number;

  constructor(nomeProdotto: string,
    descrizioneBreve: string,
    descrizione: string,
    prezzoListino: number,
    prezzoOfferta: number,
    fornitore: FornitoreDataModel,
    urlEsterna: string,
    testoAccessorio: string,
    numVisualizzazioni: number,
    createDate: Date,
    updateDate: Date,
    categoria: CategoriaDataModel[],
    idEsternoProdotto: string,
    tag: TagDataModel[],
    multimedia: MultimediaDataModel[],
    percentualeSalvata: number,
    prezzoRisparmiato: number
  ) {}

}
