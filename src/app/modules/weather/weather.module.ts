import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherComponent } from './weather.component';
import { WeatherTodayComponent } from './components/weather-today/weather-today.component';
import { WeatherForecastComponent } from './components/weather-forecast/weather-forecast.component';
import { HttpClientModule } from '@angular/common/http';
import { WeatherService } from './services/weather.service';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { MatInputModule, MatIconModule, MatFormFieldModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  HttpClientModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule,
  FormsModule,
  MatButtonModule
];

@NgModule({
  declarations: [
    WeatherComponent,
    WeatherTodayComponent,
    WeatherForecastComponent,
    WeatherSearchComponent
  ],
  imports: [...modules],
  exports: [WeatherComponent, WeatherSearchComponent],
  providers: [WeatherService]
})
export class WeatherModule { }
