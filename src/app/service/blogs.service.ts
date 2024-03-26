import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Blog } from '../models/blog.model';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private apiUrl = 'http://localhost:3000/blog';

  constructor(private http: HttpClient) { }

  getblogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl, { withCredentials: true });
  }

  getblogsById(id: number): Observable< Blog| undefined> {
    return this.getblogs().pipe(
      map(blogs => blogs.find(blog => blog.droitAcces.includes(id)))
    );
  }
}
