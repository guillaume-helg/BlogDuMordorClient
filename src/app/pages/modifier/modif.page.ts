import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ArticleService} from "../../service/article.service";
import {Article} from "../../models/article.model";
import {ArticleComponent1} from "../../components/article/article.component";
import {ModifFormComponent} from "../../components/modif-form/article-form.component.modif";

@Component({
  selector: 'app-modif',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    NavbarComponent,
    ArticleComponent1,
    ModifFormComponent
  ],
  templateUrl: './modif.page.html',
  styleUrl: './modif.page.css'
})

export class ModifPage  {



}
