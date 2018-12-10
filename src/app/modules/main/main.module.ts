import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherModule } from '../weather/weather.module';
import { MatInputModule, MatIconModule, MatFormFieldModule } from '@angular/material';
import { ButtonsModule } from 'ngx-bootstrap';

const modules = [
  CommonModule,
  WeatherModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  ButtonsModule
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [...modules],
  exports: [MainComponent]
})
export class MainModule { }
