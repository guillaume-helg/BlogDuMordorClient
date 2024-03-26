import {Component, OnInit} from '@angular/core';
import {Article} from "../../models/article.model";
import {ArticleService} from "../../service/article.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {Publier} from "../../service/publier";

@Component({
  selector: 'app-article-detail',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit{
  article: Article | undefined;
  private id: number = 0;

  constructor(private articleService: ArticleService,
              private route: ActivatedRoute,
              private pub: Publier,
              private routea : Router) { }
  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticleById(this.id).subscribe((article: Article | undefined) => {
      this.article = article || undefined;
    });
  }

  supr() {
    this.pub.supprimerArticle(this.article?.identifiant).subscribe(data => {
      console.log(data);
    });
    this.routea.navigateByUrl('/home');
  }
}
