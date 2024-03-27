import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../service/article.service';
import {BlogsService} from "../../service/blogs.service";
import { Blog } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {RouterLink} from "@angular/router";
import {ConnexionService} from "../../service/connexion.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@Component({
  selector: 'app-mon-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule, ReactiveFormsModule],
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
  user : number  = 0;
  constructor(private articleService: ArticleService, private blogService : BlogsService, private co : ConnexionService) { }

  ngOnInit(): void {
    this.blogService.getBlogsById(this.id).subscribe((blog) => {
      console.log(this.id)

      this.blog = blog;
      console.log(this.blog)
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

  setPublic(){
    if(this.blog)
    this.blogService.mettrePublic(this.blog.identifiant).subscribe(data => {
      console.log(data);
    });
  }

  setPrivate(){
    if(this.blog)
    this.blogService.mettrePriver(this.blog.identifiant).subscribe(data => {
      console.log(data);
    });
  }

  addUser(){
    if(this.blog)
    this.blogService.addUser(this.blog.identifiant,this.user).subscribe(data => {
      console.log(data);
    });
  }


}
