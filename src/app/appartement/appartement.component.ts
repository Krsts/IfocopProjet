import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit {

  rate = 8;

  constructor() { }

  ngOnInit() {
  }
source: string ="Hello";
}