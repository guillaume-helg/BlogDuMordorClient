import { Component } from '@angular/core';
import { Article } from '../../models/article.model';
import { ArticleService } from '../../service/article.service';
import {BlogsService} from "../../service/blogs.service";
import { Blog } from '../../models/blog.model';
import { CommonModule } from '@angular/common';
import {Observable} from "rxjs";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ConnexionService} from "../../service/connexion.service";


@Component({
  selector: 'app-blog-det',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  blogs: Blog[] = [];
  blog : Blog | undefined;
  afficheBlog: Blog[] = [];
  id: number | undefined =this.co.getCurrentUser().identifiant;
  articles: Article[] = [];
  article: Article | undefined;
  ida: number | undefined;

  constructor(private articleService: ArticleService, private blogService : BlogsService, private co : ConnexionService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    this.blogService.getBlogsByIdblog(this.id).subscribe((blog) => {
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
