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
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';

import 'hammerjs';
import {FlexLayoutModule} from '@angular/flex-layout';
import {Ng4LoadingSpinnerModule} from 'ng4-loading-spinner';
import {SlideshowModule} from 'ng-simple-slideshow';
/**
 * Import componenti
 */
import {AggiungiProdottoComponent} from './component/aggiungiProdotto/aggiungiProdotto.component';
import {MenuComponent} from './component/menu/menu.component';
import {SliderComponent} from './component/slider/slider.component';
import {RecensioniHomeComponent} from './component/recensioniHome/recensioniHome.component';
import {CercaComponent} from './component/cerca/cerca.component';
import {ProssimeOfferteComponent} from './component/prossimeOfferte/prossimeOfferte.component';
import {CategorieHomeComponent} from './component/categorieHome/categorieHome.component';
import {MigliorProdottoComponent} from './component/migliorProdotto/migliorProdotto.component';
import {CercaProdottoComponent} from './component/cercaProdotto/cercaProdotto.component';
import {LoginComponent} from './component/login/login.component';
import {SigninComponent} from './component/signin/signin.component';
import {HomeComponent} from './component/home/home.component';
import {ProdottoComponent} from './component/prodottoTemplate/prodotto.component';
import {ProdottoPostComponent} from './component/prodottoPost/prodottoPost.component';
import {NumberOnlyDirective} from './component/directive/number.directive';
import {LoaderComponent} from './component/loader/loader.component';
import {TruncatePipe} from './component/pipe/truncate-title.pipe';
import {SchedulingProssimeOfferteComponent} from './component/schedulingProssimeOfferte/schedulingProssimeOfferte.component';
import {AppComponent} from './app.component';
import {ProdottoOfferteComponent} from './component/prodottoTemplateOfferte/prodottoOfferte.component';
import {PriceFilterPipe} from './component/pipe/price-filter.pipe';



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
    PriceFilterPipe
  ],
  exports: [RouterModule],
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
    SlideshowModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
