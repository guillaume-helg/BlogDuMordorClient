import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

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

  constructor(private http: HttpClient, private router: Router) {
  }

  signIn() {
    debugger;
    this.http.post('localhost:3000/utilisateurs/login', this.connexionObj).subscribe((res: any) => {
      if (res.result) {
        alert('Connexion réussie !');
        localStorage.setItem('loginToken', res.data.token);
        this.router.navigateByUrl('/home');

      } else {
        alert(res.message);
      }
    })
  }
}
