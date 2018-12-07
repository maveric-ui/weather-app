import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule
} from '@angular/material';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const modules = [
  CommonModule,
  FormsModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatButtonModule,
];

@NgModule({
  imports: [...modules],
  exports: [AuthenticationComponent],
  declarations: [
    AuthenticationComponent,
    LoginComponent,
    SignUpComponent,
  ]
})
export class AuthenticationModule { }
