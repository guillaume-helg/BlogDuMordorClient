import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Utilisateur} from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})

export class ModificationService {

  private apiUrl = 'http://localhost:3000/utilisateurs/modify';

  constructor(private http: HttpClient) { }

  updateutilisateur(utilisateur: Utilisateur | undefined): Observable<any>  {
    return this.http.post(this.apiUrl, utilisateur,{ withCredentials: true} )
  }

  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>('http://localhost:3000/utilisateurs', { withCredentials: true });
  }
}
