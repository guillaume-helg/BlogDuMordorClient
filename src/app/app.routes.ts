import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {EcritureFormComponent} from "./components/ecriture-form/ecriture-form.component";
import{ModifFormComponent} from "./components/modif-form/article-form.component.modif";
import { authGuard } from './auth.guard';
import {SignupFormComponent} from "./components/signup-form/signup-form.component";
import {MonCompteComponent} from "./pages/mon-compte/mon-compte.component";

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full',  },
  { path: 'article/:id', component: ArticleComponent},
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  { path: 'ecriture', component: EcritureFormComponent, canActivate: [authGuard]},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'inscription', component: SignupFormComponent},
  { path: 'compte', component: MonCompteComponent, canActivate: [authGuard]},
  { path: 'article/:id/modif', component: ModifFormComponent, canActivate: [authGuard]},
  { path: '**', component: ConnexionComponent, canActivate: [authGuard]},
];
