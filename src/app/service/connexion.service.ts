import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ConnexionService {

  private apiUrl = 'http://localhost:3000/utilisateurs/login';

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string){
    return new Observable<boolean>((observer)=> {
      this.httpClient.post(this.apiUrl, {email, password}).subscribe(result =>{
        observer.next(true);
        observer.complete();
      }, error => {
        observer.error(false);
        observer.complete();
      });
    });
  }
}
