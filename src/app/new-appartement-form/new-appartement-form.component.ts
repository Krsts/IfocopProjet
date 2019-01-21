import { Component, OnInit } from '@angular/core';
import {Appartement } from '../appartement/appartement.model';

@Component({
  selector: 'app-new-appartement-form',
  templateUrl: './new-appartement-form.component.html',
  styleUrls: ['./new-appartement-form.component.css']
})
export class NewAppartementFormComponent implements OnInit {

  name:string;
  ville:string;
  appartement: Appartement[] = [
    new Appartement("123","Paris","imageadresse")
  ]
  constructor() { }

  ngOnInit() {
    this.appartement[0].nom = this.name;
    this.appartement[0].ville = this.ville;
  }

  
}
