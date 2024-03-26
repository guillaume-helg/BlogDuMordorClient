import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../service/article.service';
import {BlogsService} from "../../service/blogs.service";
import { Blog } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-blogs-box',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blogs-box.component.html',
  styleUrls: ['./blogs-box.component.css']
})
export class BlogsBoxComponent {
  articles: Article[] = [];
  blogs: Blog [] = [] ;
  id: number = 1;
  constructor(private articleService: ArticleService, private blogService : BlogsService) { }

  ngOnInit(): void {
    this.getblogs();
    console.log(this.articles);
  }

  getblogs(): void {
     this.blogService.getblogs().subscribe(blogs => this.blogs = blogs);
  }
  getArticles(): void {
    this.articleService.getArticles().subscribe(articles => this.articles = articles);
  }
}
