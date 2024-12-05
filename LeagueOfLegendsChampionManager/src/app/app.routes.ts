import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './error/error.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { ProfileComponent } from './user/profile/profile.component';
import { ErrorMsgComponent } from './core/error-msg/error-msg.component';

import { ChampionListComponent } from './champion/list/list.component';
import { ChampionDetailComponent } from './champion/detail/detail.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },

  {
    path: 'champions',
    component: ChampionListComponent,  
  },
  {
    path: 'champions/:id',
    component: ChampionDetailComponent,  
  },

  { path: 'error', component: ErrorMsgComponent },
  { path: '404', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/404' }, 
];