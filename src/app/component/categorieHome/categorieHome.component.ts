import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-categorie-home',
  templateUrl: './categorieHome.component.html',
  styleUrls: ['./categorieHome.component.css']
})
export class CategorieHomeComponent {

  constructor(private fb: FormBuilder) {
  }
}
