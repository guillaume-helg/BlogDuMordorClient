import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {MesBlogComponent} from "../../components/mes-blogs/mes-blog.component";
import {BlogDetailsComponent} from "../../components/blog-details/blog-details.component";
import {BlogComponent} from "../blog/blog.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    MesBlogComponent,
    BlogDetailsComponent,
    BlogComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class MesBlogsComponent {
}

