import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ArticleDetailComponent} from "../../components/article-detail/article-detail.component";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    NavbarComponent,
    ArticleDetailComponent,
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent  {
}
