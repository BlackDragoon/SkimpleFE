import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {ORE} from './mock-ore';

@Component({
  selector: 'app-scheduling-prossime-offerte',
  templateUrl: './schedulingProssimeOfferte.component.html',
  styleUrls: ['./schedulingProssimeOfferte.component.css']
})
export class SchedulingProssimeOfferteComponent {
  schedulingForm: FormGroup;
  ore = ORE;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.schedulingForm = this.fb.group({
      startDate: null,
      endDate: null,
      startHour: null,
      endHour: null,
      eachHour: null,
    });
  }
}
