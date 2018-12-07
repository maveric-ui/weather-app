import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { AuthenticationComponent } from '../../authentication/authentication.component';

export const appRoutes: Routes = [
  {path: 'auth', component: AuthenticationComponent},
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

