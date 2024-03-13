import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ArticleService } from '../../service/article.service';
import {Article} from "../../models/article.model";

@Component({
  selector: 'app-articl',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent implements OnInit{
  article: Article | undefined;
  private id: number = 0;

  constructor(private articleService: ArticleService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.articleService.getArticleById(this.id).subscribe((article: Article | undefined) => {
      this.article = article;
    });
  }
}
