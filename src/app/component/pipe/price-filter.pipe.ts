import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {
  transform(list, minPrice: number | undefined, maxPrice: number | undefined) {
    debugger
    let filter_list = list;
    if (minPrice) {
      filter_list = filter_list.filter(_item => {
        if (_item.prezzoOfferta) {
          return _item.prezzoOfferta >= +minPrice;
        } else {
          return _item.prezzoListino >= +minPrice;
        }
      });
    }

    if (maxPrice) {
      filter_list = filter_list.filter(_item => {
        if (_item.prezzoOfferta) {
          return _item.prezzoOfferta <= +maxPrice;
        } else {
          return _item.prezzoListino <= +maxPrice;
        }
      });
    }
    return filter_list;
  }
}