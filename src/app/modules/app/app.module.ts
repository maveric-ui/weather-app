import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from '../authentication/authentication.module';
import { AppRoutingModule } from './router/app-routing.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { WeatherModule } from '../weather/weather.module';

const modules = [
  BrowserModule,
  BrowserAnimationsModule,
  AppRoutingModule,
  AuthenticationModule,
  WeatherModule
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
