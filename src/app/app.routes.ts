import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ArticleComponent} from "./pages/article/article.component";
import {ConnexionComponent} from "./pages/connexion/connexion.component";
import {EcritureFormComponent} from "./components/ecriture-form/ecriture-form.component";
import { authGuard } from './auth.guard';
import {SignupFormComponent} from "./components/signup-form/signup-form.component";
import {MonCompteComponent} from "./pages/mon-compte/mon-compte.component";
import {EcritureComponent} from "./pages/ecriture/ecriture.component";
import {MesBlogComponent} from "./components/mes-blogs/mes-blog.component";
import {MesBlogsComponent} from "./pages/mes-blogs/blogs.component";
import {BlogComponent} from "./pages/blog/blog.component";

export const routes: Routes = [
  { path: '', redirectTo: 'connexion', pathMatch: 'full',  },
  { path: 'article/:id', component: ArticleComponent},
  { path: 'home', component: HomeComponent, canActivate: [authGuard]},
  { path: 'ecriture', component: EcritureComponent, canActivate: [authGuard]},
  { path: 'connexion', component: ConnexionComponent},
  { path: 'inscription', component: SignupFormComponent},
  { path: 'compte', component: MonCompteComponent, canActivate: [authGuard]},
  { path: 'mes-blogs', component: MesBlogsComponent, canActivate: [authGuard]},
  { path: 'blog/:id', component: BlogComponent, canActivate: [authGuard]},
  { path: '**', component: ConnexionComponent, canActivate: [authGuard]},

];
