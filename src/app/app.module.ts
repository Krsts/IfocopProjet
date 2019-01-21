import {AuthComponent} from './auth/auth.component';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppartementViewComponent } from './appartement/appartement-view.component';

import { CarouselComponent } from './carousel/carousel.component';
import { AppartementsComponent } from './appartements/appartements.component';
import { SelecteurComponent } from './selecteur/selecteur.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';

import { Routes, RouterModule } from '@angular/router';
import { NewAppartementFormComponent } from './new-appartement-form/new-appartement-form.component';


const appRoutes: Routes = [
  {path: "Home", component: HomeComponent},
  {path: "auth", component: AuthComponent},
  {path: "appartements", component: AppartementsComponent},
  {path: "", component: HomeComponent},
  {path: "newappartement", component: NewAppartementFormComponent},
  {path: "**", component: HomeComponent}
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule,
   NgbPaginationModule, NgbAlertModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, HelloComponent, AppartementViewComponent, CarouselComponent, AppartementsComponent, SelecteurComponent, PageNotFoundComponent, HomeComponent, AuthComponent, NewAppartementFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
