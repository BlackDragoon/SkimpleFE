import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent {
  imageUrlArray = ['../../../assets/slider/banner1.png', '../../../assets/slider/banner_definitivo.svg'];
  constructor() {
  }

}
