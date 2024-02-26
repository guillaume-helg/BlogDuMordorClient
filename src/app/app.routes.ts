import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {EcritureComponent} from "./pages/ecriture/ecriture.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'ecriture', component: EcritureComponent },
  { path: 'connexion', component: ConnexionComponent }
];
