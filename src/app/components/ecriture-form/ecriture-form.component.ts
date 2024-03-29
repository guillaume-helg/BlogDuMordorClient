import {Component} from '@angular/core';
import {Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Publier} from "../../service/publier";
import {Article} from "../../models/article.model";
import {NgIf} from "@angular/common";
import {Router} from "@angular/router";
import {ConnexionService} from "../../service/connexion.service";

@Component({
  selector: 'app-ecriture-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,

  ],
  templateUrl: './ecriture-form.component.html',
  styleUrl: './ecriture-form.component.css'
})
export class EcritureFormComponent {
  article : FormGroup;
  articles: Article;
  count = 0;
  id: number | undefined =this.co.getCurrentUser().identifiant;
  nom : string | undefined = this.co.getCurrentUser().nom;

  constructor(private fb: FormBuilder, private pub: Publier, private router : Router, private co : ConnexionService) {
    let date: string= new Date().toDateString();

    this.article = this.fb.group({
      identifiant:[this.count, Validators.required],
      auteur: [this.nom, Validators.required],
      idAuteur: [this.id, Validators.required],
      titre: ['', Validators.required],
      contenu: [ '', Validators.required],
      date_publication: [date, Validators.required],

    });
    this.articles=this.article.value;

  }
  onSubmit(){
    this.articles=this.article.value;
    this.pub.addArticle(this.articles).subscribe(data=>{console.log(data)
    });
    console.log(this.articles);
    this.router.navigateByUrl('/home');
  }

}


