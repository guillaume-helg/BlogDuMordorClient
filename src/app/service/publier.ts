import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {FormGroup} from "@angular/forms";
@Injectable({
  providedIn: 'root'
})
export class Publier {

  private apiUrl = 'http://localhost:3000/articles/add';

  constructor(private http: HttpClient) {}

  addArticle(article: Article): Observable<any> {
    return this.http.post(this.apiUrl , article,{ withCredentials: true})
  }

}

