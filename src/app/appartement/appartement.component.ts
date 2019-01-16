import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {

  image = "https://picsum.photos/900/500?random&t=1"

  constructor() { }

  ngOnInit() {
  }

}