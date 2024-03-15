import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {EcritureFormComponent} from "./components/ecriture-form/ecriture-form.component";
import{ModifFormComponent} from "./components/modif-form/article-form.component.modif";
import {AuthGuard} from "./service/AuthGuard";

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full',  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  { path: '**', component: ConnexionComponent},
  { path: 'article/:id', component: ArticleComponent, canActivate: [AuthGuard] },
  { path: 'ecriture', component: EcritureFormComponent, canActivate: [AuthGuard]},
  { path: 'connexion', component: ConnexionComponent, canActivate: [AuthGuard] },
  {path: 'article/:id/modif', component:ModifFormComponent, canActivate: [AuthGuard]},
];
