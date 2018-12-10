import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AppRoutingModule } from './router/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MainModule } from '../main/main.module';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  AuthenticationModule,
  MainModule
];

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [...modules],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
