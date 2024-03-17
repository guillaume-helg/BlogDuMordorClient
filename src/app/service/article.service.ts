import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {catchError, map, Observable, of} from 'rxjs';
import { Article } from '../models/article.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiUrl = 'http://localhost:3000/articles/';

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.apiUrl, { withCredentials: true });
  }

  getArticleById(id: number): Observable<Article | undefined> {
    return this.http.get<Article>(`${this.apiUrl}/${id}`, { withCredentials: true }).pipe(
      map(article => article),
      catchError(error => {
        console.error('Error fetching article by ID:', error);
        return of(undefined); // Return an observable of undefined if an error occurs
      })
    );
  }

}
