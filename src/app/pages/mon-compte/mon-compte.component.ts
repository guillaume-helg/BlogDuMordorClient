import { Component } from '@angular/core';
import {ArticleBoxComponent} from "../../components/article-box/article-box.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HeaderComponent} from "../../components/header/header.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {CompteFormComponent} from "../../components/compte-form/compte-form.component";

@Component({
  selector: 'app-mon-compte',
  standalone: true,
  imports: [
    ArticleBoxComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    CompteFormComponent
  ],
  templateUrl: './mon-compte.component.html',
  styleUrl: './mon-compte.component.css'
})
export class MonCompteComponent {

}
