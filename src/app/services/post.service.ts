import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {HttpHeaders} from '@angular/common/http';
import {Ng4LoadingSpinnerService} from 'ng4-loading-spinner';
import {Post} from '../models/post.model';

@Injectable()
export class PostService {

  private urlSendPost = 'http://localhost:2000/prodotto/invia/';


  constructor(private http: HttpClient, private spinnerService: Ng4LoadingSpinnerService) {}

  // Invia post di un prodotto
  sendPost(post): Observable<Post> {
    this.spinnerService.show();
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    var response = null;
    this.http.post<Post>(this.urlSendPost, post, httpOptions)
      .subscribe(data => {
        response = data;
      }, err => {
        alert('Oh, un errore! Dillo ad Antonio.\n' + err.error.error + '\n' + err.error.exception + '\n' + err.error.message);
      });
    this.spinnerService.hide();
    return response;
  }


}
