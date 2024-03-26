import { Component } from '@angular/core';
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {BlogsBoxComponent} from "../../components/blogs-box/blogs-box.component";

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    BlogsBoxComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class HomeComponent {
}
