import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Job} from '../models/job.model';
import { JobRequest } from '../models/jobRequest.model';
import {HttpHeaders} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';

@Injectable()
export class JobService {

  private urlJobs = 'http://localhost:2000/jobs';
  private urlJobRequests = 'http://localhost:2000/jobRequests';


  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {}

  // Recupera tutti i job
  getJobs(): Observable<Job[]> {
    this.spinnerService.show();
    var response = this.http.get<Job[]>(this.urlJobs);
    this.spinnerService.hide();
    return response;
  }

  // inserisce un job
  insertJob(job): Observable<Job> {
    this.spinnerService.show();
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    var response = null;
    this.http.post<Job>(this.urlJobs, job, httpOptions)
      .subscribe(data => {
        response = data;
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
      });
    this.spinnerService.hide();
    return response;
  }

  // elimina un job
  deleteJob(idJob): Observable<Job> {
    this.spinnerService.show();
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    var response = null;
    this.http.post<Job>(this.urlJobs + '/' + idJob, httpOptions)
      .subscribe(data => {
        response = data;
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
      });
    this.spinnerService.hide();
    return response;
  }

  insertJobRequest(job): Observable<Job> {
    this.spinnerService.show();
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    var response = null;
    this.http.post<JobRequest>(this.urlJobRequests, job, httpOptions)
      .subscribe(data => {
        response = data;
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
      });
    this.spinnerService.hide();
    return response;
  }
  
    // Recupera tutti i job
  getJobRequests(): Observable<JobRequest[]> {
    this.spinnerService.show();
    var response = this.http.get<JobRequest[]>(this.urlJobRequests);
    this.spinnerService.hide();
    return response;
  }

}
