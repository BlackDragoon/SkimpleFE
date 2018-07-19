import {Job} from '../../models/job.model';
import {Component, Input, Inject} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {ORE} from '../../mocks/mock-ore';
import {JobService} from '../../services/job.service';

@Component({
  selector: 'app-attiva-job',
  templateUrl: './attivaJobDialog.component.html',
  styleUrls: ['./attivaJobDialog.component.css']
})
export class AttivaJobDialogComponent {
  // variabili
  @Input() job: Job;
  private attivaJobForm: FormGroup;
  private ore = ORE;


  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AttivaJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private jobService: JobService) {
    this.job = data.job;
    this.createForm();
  }
  // metodi
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.jobService.insertJobRequest(this.attivaJobForm);
  }

  createForm() {
    this.attivaJobForm = this.fb.group({ // <-- the parent FormGroup
      startDate: null,
      endDate: null,
      startHour: null,
      endHour: null
    });
  }

}

