import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ConnexionService} from '../../service/connexion.service';
import {Observable} from "rxjs";

@Component({
  selector: 'app-connexion-form',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './connexion-form.component.html',
  styleUrl: './connexion-form.component.css'
})
export class ConnexionFormComponent {
  connexionObj: any = {
    "email": "",
    "password": ""
  };

  connexion: boolean | undefined;

  constructor(private connexionService: ConnexionService, http: HttpClient, private router: Router) {
  }

  signIn() {
    debugger;
    this.connexionService.getConnexion().subscribe((bool) => {
      this.connexion = bool;
      if (this.connexion) {
        alert('Connexion réussie !');
        this.router.navigateByUrl('/home');
      } else {
        console.log("Connexion non validée");
      }
    });
  }
}
