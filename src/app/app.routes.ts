import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {EcritureFormComponent} from "./components/ecriture-form/ecriture-form.component";
import{ModifFormComponent} from "./components/modif-form/article-form.component.modif";
import { authGuard } from './auth.guard';
import {roleGuard} from "./role.guard";

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full',  },
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  { path: 'article/:id', component: ArticleComponent, canActivate: [authGuard]},
  { path: 'ecriture', component: EcritureFormComponent, canActivate: [authGuard]},
  { path: 'connexion', component: ConnexionComponent, canActivate: [authGuard] },
  {path: 'article/:id/modif', component:ModifFormComponent, canActivate: [authGuard]},
  { path: '**', component: ConnexionComponent, canActivate: [authGuard]},
];
