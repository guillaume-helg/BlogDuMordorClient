import {Component} from '@angular/core';
import {SuppressionService} from "../../service/suppression.service";
import {ModificationService} from "../../service/modification.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-compte-form',
  standalone: true,
  imports: [],
  templateUrl: './compte-form.component.html',
  styleUrl: './compte-form.component.css'
})
export class CompteFormComponent {

  constructor( private suppression: SuppressionService, private modification: ModificationService, private router: Router) {
  }

  modifierCompte() {
    this.modification.updateutilisateur(this.modification.getUtilisateurs()).subscribe(data => {
      console.log(data);
  });
  }

  supprimerCompte() {
    const confirmation= confirm('Voulez vous supprimer le compte ?');
    if (confirmation) {
      this.suppression.deleteutilisateur(this.suppression.getUtilisateursId()).subscribe(data => {
        console.log(data);
        this.router.navigateByUrl('/connexion');
      });
    }
  }
}
