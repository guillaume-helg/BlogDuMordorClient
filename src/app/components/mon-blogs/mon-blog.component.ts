import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../service/article.service';
import {BlogsService} from "../../service/blogs.service";
import { Blog } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";
import {ConnexionService} from "../../service/connexion.service";


@Component({
  selector: 'app-mon-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mon-blog.component.html',
  styleUrls: ['./mon-blog.component.css']
})
export class MonBlogComponent {
  blogs: Blog[] = [];
  blog : Blog | undefined;
  id: number | undefined =this.co.getCurrentUser().identifiant;
  article: Article | undefined;
  articles: Article[] = [];
  ida: number | undefined = 0;
  constructor(private articleService: ArticleService, private blogService : BlogsService, private co : ConnexionService) { }

  ngOnInit(): void {
    this.blogService.getBlogsById(this.id).subscribe((blog) => {
      this.blog = blog;
      if(this.blog?.idArticles.length ){
      for (let i = 0; i < this.blog?.idArticles.length; i++) {
      this.ida = Number(this.blog?.idArticles[i]);
      this.articleService.getArticleById(this.ida).subscribe((article: Article | undefined) => {
        this.article = article;
        if (this.article) {
          this.articles.push(this.article);
        }
      });
      }
      }
    });
  }





 getArticles(): void {

 }
  getBlogs(): void {
    this.blogService.getBlogs().subscribe(blog => this.blogs = blog);
  }

}
