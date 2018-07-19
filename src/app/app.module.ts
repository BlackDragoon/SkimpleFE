import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {HttpClientXsrfModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormControl, FormGroup} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import Scrollbar from 'smooth-scrollbar';
import {MatButtonModule, MatCheckboxModule, MatTableModule} from '@angular/material';
import {MatDialogModule, MatDialogRef, MAT_DIALOG_DATA, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
} from "angular5-social-login";

import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {SlideshowModule} from 'ng-simple-slideshow';
import {NgxSmartModalModule} from 'ngx-smart-modal';
/**
 * Import Service
 */
import {JobService} from './services/job.service';
import {PostService} from './services/post.service';
import {LoginService} from './services/login.service';
/**
 * Import componenti
 */
import {AggiungiProdottoComponent} from './components/aggiungiProdotto/aggiungiProdotto.component';
import {MenuComponent} from './components/menu/menu.component';
import {SliderComponent} from './components/slider/slider.component';
import {RecensioniHomeComponent} from './components/recensioniHome/recensioniHome.component';
import {CercaComponent} from './components/cerca/cerca.component';
import {ProssimeOfferteComponent} from './components/prossimeOfferte/prossimeOfferte.component';
import {CategorieHomeComponent} from './components/categorieHome/categorieHome.component';
import {MigliorProdottoComponent} from './components/migliorProdotto/migliorProdotto.component';
import {CercaProdottoComponent} from './components/cercaProdotto/cercaProdotto.component';
import {LoginComponent} from './components/login/login.component';
import {SigninComponent} from './components/signin/signin.component';
import {HomeComponent} from './components/home/home.component';
import {ProdottoComponent} from './components/prodottoTemplate/prodotto.component';
import {ProdottoPostComponent} from './components/prodottoPost/prodottoPost.component';
import {NumberOnlyDirective} from './components/directive/number.directive';
import {LoaderComponent} from './components/loader/loader.component';
import {TruncatePipe} from './components/pipe/truncate-title.pipe';
import {SchedulingProssimeOfferteComponent} from './components/schedulingProssimeOfferte/schedulingProssimeOfferte.component';
import {AppComponent} from './app.component';
import {AttivaJobDialogComponent} from './components/attivaJobDialog/attivaJobDialog.component';
import {ProdottoOfferteComponent} from './components/prodottoTemplateOfferte/prodottoOfferte.component';
import {PriceFilterPipe} from './components/pipe/price-filter.pipe';



const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cercaProdotto', component: CercaProdottoComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'login', component: LoginComponent},
  {path: 'schedule', component: SchedulingProssimeOfferteComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AggiungiProdottoComponent,
    MenuComponent,
    SliderComponent,
    RecensioniHomeComponent,
    CercaComponent,
    ProssimeOfferteComponent,
    CategorieHomeComponent,
    MigliorProdottoComponent,
    CercaProdottoComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
    ProdottoComponent,
    NumberOnlyDirective,
    TruncatePipe,
    SchedulingProssimeOfferteComponent,
    ProdottoPostComponent,
    LoaderComponent,
    ProdottoOfferteComponent,
    AttivaJobDialogComponent,
    PriceFilterPipe
  ],
  exports: [RouterModule],
  entryComponents: [
    ProdottoPostComponent,
    AttivaJobDialogComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    Ng4LoadingSpinnerModule.forRoot(),
    NgxSmartModalModule.forRoot(),
    SlideshowModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    SocialLoginModule
  ],
  providers: [
    {provide: MatDialogRef, useValue: {}},
    {provide: MAT_DIALOG_DATA, useValue: []},
    JobService,
    PostService,
    LoginService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})


export class AppModule {}
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider("188542098570745")
      }
    ]
  );
  return config;
}

