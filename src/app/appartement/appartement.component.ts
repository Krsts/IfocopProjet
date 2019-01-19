import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {
  description = ["Un","deux","Trois","Quatre","Cinq"]
  images: string[];
  descriptions: string[];
  // image = "https://picsum.photos/900/500?random&t=1"
  

  constructor() { }

  ngOnInit() {
    this.images = [1, 2, 3, 4].map(() => `https://picsum.photos/900/500?random&t=${Math.random()}`);
    this.descriptions = [1,2,3,4].map(() => this.description[Math.floor(Math.random()*Math.floor(this.description.length))])
  }
imageGen (){
  return this.images[Math.floor(Math.random()*Math.floor(this.images.length))]
}

  textgen(){
    return this.description[Math.floor(Math.random()*Math.floor(this.description.length))]
  }
}