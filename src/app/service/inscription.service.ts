import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Utilisateur} from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})

export class InscriptionService {

  private apiUrl = 'http://localhost:3000/utilisateurs/add';

  constructor(private http: HttpClient) { }

  addutilisateur(utilisateur: Utilisateur | undefined): Observable<any> {
    return this.http.post(this.apiUrl , utilisateur,{ withCredentials: true})
  }
}
