import {Component} from '@angular/core';
import {SuppressionService} from "../../service/suppression.service";
import {ModificationService} from "../../service/modification.service";
import {Router} from "@angular/router";
import {ConnexionService} from "../../service/connexion.service";
import {FormsModule} from "@angular/forms";
import {Utilisateur} from "../../models/utilisateur.model";


@Component({
  selector: 'app-compte-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './compte-form.component.html',
  styleUrl: './compte-form.component.css'
})
export class CompteFormComponent {

  utilisateur: Utilisateur | undefined;
  name = "";
  prename = "";
  email = "";
  pass = "";
  tel = "";


  constructor(private suppression: SuppressionService, private modification: ModificationService, private router: Router, private connexion : ConnexionService) {
  }

  ngOnInit(): void {
    this.utilisateur = this.connexion.getCurrentUser();
    this.name = this.utilisateur.nom;
    this.prename = this.utilisateur.prenom;
    this.email = this.utilisateur.email;
    this.pass = this.utilisateur.motDePasse;
    this.tel = this.utilisateur.numeroTelephone;
  }

  modifierCompte() {
    if(this.utilisateur) {
      this.utilisateur.nom = this.name;
      this.utilisateur.prenom = this.prename;
      this.utilisateur.email = this.email;
      this.utilisateur.motDePasse = this.pass;
      this.utilisateur.numeroTelephone = this.tel;
    }

    this.modification.updateutilisateur(this.utilisateur).subscribe(data => {
      console.log(this.utilisateur);
  });
  }

  supprimerCompte() {
    const confirmation= confirm('Voulez vous supprimer le compte ?');
    if (confirmation) {
      this.suppression.deleteutilisateur(this.utilisateur?.identifiant).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/connexion');
      });
    }
  }
}
