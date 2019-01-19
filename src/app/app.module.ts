import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NgbModule, NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppartementComponent } from './appartement/appartement.component';

import { CarouselComponent } from './carousel/carousel.component';
import { AppartementsComponent } from './appartements/appartements.component';
import { SelecteurComponent } from './selecteur/selecteur.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule,
   NgbPaginationModule, NgbAlertModule ],
  declarations: [ AppComponent, HelloComponent, AppartementComponent, CarouselComponent, AppartementsComponent, SelecteurComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
