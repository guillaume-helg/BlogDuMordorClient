import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Publier} from "../../service/publier";
import {Article} from "../../models/article.model";
import {NgIf} from "@angular/common";
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-modif-form',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,

  ],
  templateUrl: './article.component.modif.html',
  styleUrl: './article.component.modif.css'
})
export class ModifFormComponent implements OnInit{
  article : FormGroup;
  articles: Article;
  currentDate: Date = new Date();
  private id: number = 0;
  articleaffichage: Article | undefined;

  constructor(private fb: FormBuilder, private pub: Publier,private route: ActivatedRoute, private articleService: ArticleService) {
    this.article = this.fb.group({
      identifiant:[this.articleaffichage?.identifiant, Validators.required],
      auteur: [this.articleaffichage?.auteur, Validators.required],
      titre: [this.articleaffichage?.titre, Validators.required],
      contenu: [ this.articleaffichage?.contenu, Validators.required],
      date_publication: [this.currentDate, Validators.required],

    });

    this.articles=this.article.value;

  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticleById(this.id).subscribe((article: Article | undefined) => {
      this.articleaffichage = article;
    });
    }

  onSubmit(){
    this.articles = this.article.value;
    this.pub.addArticle(this.articles).subscribe(data=>{console.log(data)
    });
    console.log(this.articles);

  }

}


