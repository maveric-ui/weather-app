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
import { AuthenticationComponent } from './authentication.component';
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

const components = [
  AuthenticationComponent,
  LoginComponent,
  SignUpComponent,
];

@NgModule({
  imports: [...modules],
  exports: [AuthenticationComponent],
  declarations: [...components]
})
export class AuthenticationModule { }
