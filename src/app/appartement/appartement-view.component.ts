import { Component, OnInit } from '@angular/core';
import {Appartement } from './appartement.model';
import { type } from 'os';

@Component({
  selector: 'app-appartement-view',
  templateUrl: './appartement-view.component.html',
  styleUrls: ['./appartement-view.component.css']
})
export class AppartementViewComponent implements OnInit {
  
  appartement : Appartement[] = [
    new Appartement("MonAppartement", "Paris", "https://cdn.pixabay.com/photo/2018/12/15/18/02/forest-3877365_960_720.jpg")
  ];

  
  description = ["Un","deux","Trois","Quatre","Cinq"]
  images: string[];
  descriptions: string[];
  // image = "https://picsum.photos/900/500?random&t=1"
  

  constructor() { 
    console.log(this.appartement[0])
  }

  ngOnInit() {
    this.images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    this.descriptions = [1,2,3,4].map(() => this.description[Math.floor(Math.random()*Math.floor(this.description.length))])
  }
imageGen (){
  // return this.images[Math.floor(Math.random()*Math.floor(this.images.length))]
  return this.appartement[0].img1
}

  textgen(){
    return this.description[Math.floor(Math.random()*Math.floor(this.description.length))]
  }

}