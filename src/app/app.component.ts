import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ArticleService} from "./service/article.service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {Publier} from "./service/publier";
import {ConnexionService} from "./service/connexion.service";

@Component({
  selector: 'app-root',
  standalone: true,
  providers: [ArticleService, Publier, ConnexionService],
  imports: [RouterOutlet,HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LeBlogDuMorDor';
}
