import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Form,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import {Publier} from "../../service/publier";
import {Article} from "../../models/article.model";
import {NgIf} from "@angular/common";
import {ArticleService} from "../../service/article.service";


@Component({
  selector: 'app-modif-form',
  standalone: true,
  imports: [
    NgIf,
    ReactiveFormsModule,
    FormsModule


  ],
  templateUrl: './article.component.modif.html',
  styleUrl: './article.component.modif.css'
})
export class ModifFormComponent implements OnInit{
 // articles: Article;
  currentDate: Date = new Date();
  private id: number = 0;
  articleaffichage: Article | undefined;
  titre: string = 'top';
  contenu: string | undefined = 'super';


  constructor( private pub: Publier,private route: ActivatedRoute, private articleService: ArticleService) {




  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticleById(this.id).subscribe((article: Article | undefined) => {
      this.articleaffichage = article;
      console.log(this.articleaffichage);
      this.contenu = this.articleaffichage?.contenu;
      this.titre = <string>this.articleaffichage?.titre;
    });


    }

  /*onSubmit(){
    //this.articles = this.article.value;
    this.pub.addArticle(this.articles).subscribe(data=>{console.log(data)
    });
    console.log(this.articles);

  }*/

  onSubmit() {

  }
}


