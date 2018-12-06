import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthenticationComponent,
    LoginComponent
  ]
})
export class AuthenticationModule { }
