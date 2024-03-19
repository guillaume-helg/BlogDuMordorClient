import { Component } from '@angular/core';

@Component({
  selector: 'app-compte-form',
  standalone: true,
  imports: [],
  templateUrl: './compte-form.component.html',
  styleUrl: './compte-form.component.css'
})
export class CompteFormComponent {
  nom : string;
  prenom : string;
  email : string;
  numeroTel : string;
  password : string;

  constructor() {
  }
  modifierCompte() {

  }
}
