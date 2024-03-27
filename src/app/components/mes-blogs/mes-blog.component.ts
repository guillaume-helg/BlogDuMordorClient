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
  selector: 'app-mes-blogs',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './mes-blog.component.html',
  styleUrls: ['./mes-blog.component.css']
})
export class MesBlogComponent {
  blogs: Blog[] = [];
  blog : Blog | undefined;
  id: number | undefined =this.co.getCurrentUser().identifiant;
  afficheBlog: Blog[] = [];
  constructor(private articleService: ArticleService, private blogService : BlogsService, private co : ConnexionService) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((blog) => {
      this.blogs = blog
      for (let i = 0; i < this.blogs.length; i++) {
        if (this.blogs[i].droitAcces.includes(<number>this.id) ||this.blogs[i].droitAcces.length === 0) {
          this.blog = this.blogs[i];
          this.afficheBlog.push(this.blog);
        }

      }
    });
  }




}
