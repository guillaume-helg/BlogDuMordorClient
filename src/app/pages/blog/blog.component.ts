import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {FooterComponent} from "../../components/footer/footer.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {ArticleDetailComponent} from "../../components/article-detail/article-detail.component";
import {BlogDetailsComponent} from "../../components/blog-details/blog-details.component";

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    NavbarComponent,
    ArticleDetailComponent,
    BlogDetailsComponent,
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})

export class BlogComponent {
}
