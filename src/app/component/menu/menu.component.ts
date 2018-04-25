import {Component, OnInit, HostListener} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private menuHeight = 100;
  private offset = 0;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.offset = document.getElementById("menu").offsetTop;
    this.offset = window.pageYOffset;
  }

}
