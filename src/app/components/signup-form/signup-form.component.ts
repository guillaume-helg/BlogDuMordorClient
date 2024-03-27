import { Component } from '@angular/core';
import {Utilisateur} from "../../models/utilisateur.model";
import {InscriptionService} from "../../service/inscription.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './signup-form.component.html',
  styleUrl: './signup-form.component.css'
})
export class SignupFormComponent {
  utilisateur: Utilisateur = {
    identifiant: 0,
    nom: '',
    prenom: '',
    email: '',
    numeroTelephone: '',
    motDePasse: '',
    idBlog: 0
  };

  nom : string = ""
  prenom : string = ""
  email : string = ""
  numeroTel : string = ""
  password : string = ""

  constructor(private inscription : InscriptionService, private routeur: Router) { }


  inscire() {
    this.utilisateur.nom = this.nom;
    this.utilisateur.nom = this.nom;
    this.utilisateur.prenom = this.prenom;
    this.utilisateur.email = this.email;
    this.utilisateur.numeroTelephone = this.numeroTel;
    this.utilisateur.motDePasse = this.password;

    this.inscription.addutilisateur(this?.utilisateur).subscribe(data => {
      console.log(data);
    });
    this.routeur.navigateByUrl('/connexion');
  }
}
