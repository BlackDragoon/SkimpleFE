import {Component, Input, Inject} from '@angular/core';
import {FormBuilder, Validators, FormControl, FormGroup} from '@angular/forms';
import {ProdottoDataModel} from '../prodottoTemplate/prodotto-data-model';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {MatChipInputEvent} from '@angular/material';
import {ENTER, COMMA} from '@angular/cdk/keycodes';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {PostService} from '../../services/post.service';
import {forEachChild} from 'typescript';

@Component({
  selector: 'app-post-prodotto',
  templateUrl: './prodottoPost.component.html',
  styleUrls: ['./prodottoPost.component.css']
})
export class ProdottoPostComponent {
  // variabili
  @Input() prodotto: ProdottoDataModel;
  private postProdottoForm: FormGroup;
  private visible = true;
  private selectable = true;
  private removable = true;
  private addOnBlur = true;
  private chipList = null;
  private telegram = 0;
  private facebook = 0;
  private instagram = 0;
  private twitter = 0;
  private pinterest = 0;


  // Enter, comma
  private separatorKeysCodes = [ENTER, COMMA];

  hashtags = [
  ];

  constructor(private fb: FormBuilder, public http: HttpClient, public dialogRef: MatDialogRef<ProdottoPostComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private postService: PostService) {
    this.prodotto = data.prodotto;
    this.createForm();
  }
  // metodi
  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    let hashs = [];
     this.hashtags.forEach(function(hashtag) {
      hashs.push("#"+hashtag.name);
    });
    this.postProdottoForm.value.hashtags = hashs;
    this.postProdottoForm.value.image = this.prodotto.multimedia[1].uri;
    this.postProdottoForm.value.url = this.prodotto.urlEsterna;
    this.postService.sendPost(this.postProdottoForm.value);
  }

  createForm() {
    this.postProdottoForm = this.fb.group({ // <-- the parent FormGroup
      type: [],
      text: '',
      image: null,
      hashtags: [],
      linkSx: '',
      linkDx: '',
      url: null
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our hashtag
    if ((value || '').trim()) {
      this.hashtags.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(hashtag: any): void {
    const index = this.hashtags.indexOf(hashtag);

    if (index >= 0) {
      this.hashtags.splice(index, 1);
    }
  }
}

