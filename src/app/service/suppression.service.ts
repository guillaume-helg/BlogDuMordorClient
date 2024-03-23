import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Utilisateur} from "../models/utilisateur.model";

@Injectable({
  providedIn: 'root'
})

export class SuppressionService {

  private apiUrl = 'http://localhost:3000/utilisateurs';

  constructor(private http: HttpClient) { }

  deleteutilisateur(id: number | undefined): Observable<any> {
    return this.http.delete( `http://localhost:3000/utilisateurs/remove/${id}`,{ withCredentials: true})
  }

  getUtilisateursId(): Observable<number[]> {
    return this.http.get<Utilisateur[]>(this.apiUrl, { withCredentials: true }).pipe(
      map(utilisateurs => utilisateurs.map(utilisateur => utilisateur.identifiant))
    );
  }
}
