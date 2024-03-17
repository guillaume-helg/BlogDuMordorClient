import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConnexionService } from '../../service/connexion.service';
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";


@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  styleUrls: ['./connexion-form.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConnexionFormComponent implements OnInit {
  email = '';
  password = '';
  noconnexion = false;

  constructor(private connexionService: ConnexionService, private router: Router) {}

  ngOnInit(): void {
    // Initialisation
  }

  login() {
    this.noconnexion = false;
    this.connexionService.login(this.email, this.password).subscribe(result => {
      if (result) {
        localStorage.setItem('token', Math.random().toString());
        this.router.navigateByUrl('/home');
      } else {
        this.noconnexion = true;
      }
    }, error => {
      this.noconnexion = true;
    });
  }

  logout() {
    const confirmation=confirm('Voulez vous vous déconnecter');
    if (confirmation){
      localStorage.removeItem('token');
      this.router.navigateByUrl('/connexion');
    }
  }
}
