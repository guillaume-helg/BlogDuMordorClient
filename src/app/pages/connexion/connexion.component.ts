import { Component } from '@angular/core';
import { ConnexionFormComponent } from "../../components/connexion-form/connexion-form.component";

@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    ConnexionFormComponent
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

}
