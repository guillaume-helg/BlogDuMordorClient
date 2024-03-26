import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://localhost:3000/articles';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl, { withCredentials: true });
  }

  getArticleById(id: number | undefined): Observable<Article | undefined> {
    return this.getArticles().pipe(
      map(articles => articles.find(article => article.identifiant === id))
    );
  }
}
