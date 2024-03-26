import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable} from 'rxjs';
import { Blog } from '../models/blog.model';
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  private apiUrl = 'http://localhost:3000/blogs';

  constructor(private http: HttpClient) { }

  public blogs: Blog[] = [];
  getBlogs(): Observable<Blog[]> {
    return this.http.get<Blog[]>(this.apiUrl, { withCredentials: true });
  }

  getBlogsById(id: number | undefined): Observable<Blog | undefined> {
    return this.getBlogs().pipe(
      map(blogs => blogs.find(blog => blog.idAuteur === id))
    );
  }
  getBlogsByIdpart(id: number ): Observable<Blog | undefined> {
    return this.getBlogs().pipe(
      map(blogs => blogs.find(blog => blog.droitAcces.includes(id)))
    );
  }
  getBlogsByIdblog(id: number ): Observable<Blog | undefined> {
    return this.getBlogs().pipe(
      map(blogs => blogs.find(blog => blog.identifiant === id))
    );
  }

  getBlog(): Blog[] {
    return this.blogs;
  }
}
