import { Routes } from '@angular/router';
import { NotFoundComponent } from '../components/not-found/not-found.component';
import { SignUpComponent } from '../../authentication/components/sign-up/sign-up.component';
import { LoginComponent } from '../../authentication/components/login/login.component';
import { WeatherComponent } from '../../weather/weather.component';

export const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'weather', component: WeatherComponent},
  {path: '', redirectTo: 'weather', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

