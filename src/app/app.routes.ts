import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {EcritureFormComponent} from "./components/ecriture-form/ecriture-form.component";
import{ModifFormComponent} from "./components/modif-form/article-form.component.modif";
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: ArticleComponent },
  { path: 'ecriture', component: EcritureFormComponent},
  { path: 'connexion', component: ConnexionComponent },
  {path: 'article/:id/modif', component:ModifFormComponent},
];
