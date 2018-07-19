import {TIPI} from '../../mocks/mock-tipi';
import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {MatTableDataSource} from '@angular/material';
import {JobService} from '../../services/job.service';
import {Observable} from 'rxjs/Observable';
import {DataSource} from '@angular/cdk/collections';
import {Job} from '../../models/job.model';
import {JobRequest} from '../../models/jobRequest.model';
import {AttivaJobDialogComponent} from '../attivaJobDialog/attivaJobDialog.component';
import {MatDialog, MatDialogConfig} from '@angular/material';


@Component({
  selector: 'app-scheduling-prossime-offerte',
  templateUrl: './schedulingProssimeOfferte.component.html',
  styleUrls: ['./schedulingProssimeOfferte.component.css']
})
export class SchedulingProssimeOfferteComponent {

  // variabili
  public schedulingForm: FormGroup;
  private listaJobs = null;
  dataSource = new JobDataSource(this.jobService);
  dataSourceReq = new JobRequestDataSource(this.jobService);
  displayedColumns = ['jobName', 'jobGroup', 'each', 'plus', 'cancel'];
  displayerColumnsReq = ['jobName', 'startDate', 'endDate'];
  private tipi = TIPI;

  constructor(private fb: FormBuilder, private jobService: JobService, public dialog: MatDialog) {
    this.createForm();
  }


  onSubmit() {
    this.jobService.insertJob(this.schedulingForm.value);
  }

  clear(id) {
    console.log(id);
    this.jobService.deleteJob(id);
  }

  add(id) {
    console.log(id);
  }

  createForm() {
    this.schedulingForm = this.fb.group({
      name: null,
      type: null,
      eachHour: null,
      eachMinute: null,
      eachSecond: null
    });
  }

  // metodi
  openDialog(job): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = false;
    dialogConfig.data = {job: job};
    this.dialog.open(AttivaJobDialogComponent, dialogConfig);

  }
}
export class JobDataSource extends DataSource<any>{
  constructor(private jobService: JobService) {
    super();
  }

  connect(): Observable<Job[]> {
    return this.jobService.getJobs();
  }

  disconnect() {}
}

export class JobRequestDataSource extends DataSource<any>{
  constructor(private jobService: JobService) {
    super();
  }

  connect(): Observable<JobRequest[]> {
    return this.jobService.getJobRequests();
  }

  disconnect() {}
}
