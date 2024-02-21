import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../service/article.service';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-article-box',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './article-box.component.html',
  styleUrls: ['./article-box.component.css']
})
export class ArticleBoxComponent {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit(): void {
    this.getArticles();
    console.log(this.articles);
  }

  getArticles(): void {
     this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }
}
