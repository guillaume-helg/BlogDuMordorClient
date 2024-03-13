import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConnexionComponent} from '../pages/connexion/connexion.component';
@Injectable({
  providedIn: 'root'
})
export class ConnexionService {

  private apiUrl = 'localhost:3000/utilisateurs/login';

  constructor(private http: HttpClient) { }



  getConnexion(): Observable<boolean> {
    return this.http.get<boolean>(this.apiUrl, { withCredentials: true });
  }
}
