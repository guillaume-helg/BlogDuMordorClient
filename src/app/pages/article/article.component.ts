import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ArticleService} from "../../service/article.service";
import {Article} from "../../models/article.model";
import {ArticleComponent1} from "../../components/article/article.component";

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    NavbarComponent,
    ArticleComponent1
  ],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})

export class ArticleComponent  {


  constructor() {
  }


}
