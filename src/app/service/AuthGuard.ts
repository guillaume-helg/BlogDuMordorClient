import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ConnexionService } from './connexion.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private isLoggedIn: boolean = false;
  constructor( private router: Router) {}

  canActivate(): boolean {
    if (this.isLoggedIn) {
      return true;
    } else {
      this.router.navigateByUrl('/connexion'); // Rediriger vers la page de connexion
      return false; // Bloquer l'accès à la route
    }
  }

  setLoggedIn(value: boolean) {
    this.isLoggedIn = value;
  }
}
