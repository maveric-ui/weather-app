import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';

const components = [
  WeatherComponent,
  WeatherTodayComponent,
  WeatherForecastComponent,
  HeaderComponent
];

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [WeatherComponent],
  providers: [WeatherService]
})
export class WeatherModule { }
