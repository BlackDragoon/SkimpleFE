import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-recensioni-home',
  templateUrl: './recensioniHome.component.html',
  styleUrls: ['./recensioniHome.component.css']
})
export class RecensioniHomeComponent {

  constructor(private fb: FormBuilder) {
  }
}
