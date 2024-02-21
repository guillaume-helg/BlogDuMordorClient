import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ArticleService} from "../../service/article.service";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent implements OnInit {
  article: any;

  constructor(private route: ActivatedRoute, private articleService: ArticleService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const articleId = params['id'];
      this.articleService.getArticleById(articleId).subscribe((article: any) => {
        this.article = article;
      });
    });
  }
}
