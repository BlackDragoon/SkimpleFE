export class FormProdotto {
  titolo: string
  descrizioneBreve: string
  descrizioneCompleta: string
  prezzoListino: number
  prezzoOfferta: number
  fornitore: string
  altroFornitore: string
  idProdottoFornitore: number
  tag: string
  categoria: string
  facebook: boolean
  telegram: boolean
  instagram: boolean
  pinterest: boolean
  twitter: boolean

  constructor(titolo: string,
    descrizioneBreve: string,
    descrizioneCompleta: string,
    prezzoListino: number,
    prezzoOfferta: number,
    fornitore: string,
    altroFornitore:string,
    idProdottoFornitore: number,
    tag: string,
    categoria: string,
    facebook: boolean,
  telegram: boolean,
  instagram: boolean,
  pinterest: boolean,
  twitter: boolean) {
    this.titolo = titolo;
    this.descrizioneBreve = descrizioneBreve;
    this.descrizioneCompleta = descrizioneCompleta;
    this.prezzoListino = prezzoListino;
    this.prezzoOfferta = prezzoOfferta;
    this.fornitore = fornitore;
    this.altroFornitore = altroFornitore;
    this.idProdottoFornitore = idProdottoFornitore;
    this.tag = tag;
    this.categoria = categoria;
    this.facebook = facebook;
    this.telegram = telegram;
    this.instagram = instagram;
    this.pinterest = pinterest;
    this.twitter = twitter;
  }
}