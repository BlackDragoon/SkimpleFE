export class CercaProdotto {
  searchIndex: string;
  minPercentageOff: string;
  keywords: string;

  constructor(searchIndex: string,
    minPercentageOff: string,
    keywords: string) {
    this.searchIndex = searchIndex;
    this.minPercentageOff = minPercentageOff;
    this.keywords = keywords;
  }
}
