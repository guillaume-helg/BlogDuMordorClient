import { Component } from '@angular/core';
import {HeaderComponent} from "../../components/header/header.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {EcritureFormComponent} from "../../components/ecriture-form/ecriture-form.component";
import {NavbarComponent} from "../../components/navbar/navbar.component";

@Component({
  selector: 'app-ecriture',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    EcritureFormComponent,
    NavbarComponent
  ],
  templateUrl: './ecriture.component.html',
  styleUrl: './ecriture.component.css'
})
export class EcritureComponent {

}
