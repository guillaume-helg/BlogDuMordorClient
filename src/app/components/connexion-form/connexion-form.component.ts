import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ConnexionService } from '../../service/connexion.service';
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {AuthGuard} from "../../service/AuthGuard";

@Component({
  selector: 'app-connexion-form',
  templateUrl: './connexion-form.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./connexion-form.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ConnexionFormComponent implements OnInit {
  email = '';
  password = '';
  noconnexion = false;

  constructor(private connexionService: ConnexionService, private router: Router, private auth: AuthGuard) {}

  ngOnInit(): void {
    // Initialisation
  }

  login() {
    this.noconnexion = false;
    this.connexionService.login(this.email, this.password).subscribe(result => {
      if (result) {
        this.auth.setLoggedIn(true);
        this.router.navigateByUrl('/home');
      } else {
        this.noconnexion = true;
      }
    }, error => {
      this.noconnexion = true;
    });
  }
}
