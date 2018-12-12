import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';
import { Forecast } from '../../classes/weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherForecastComponent implements OnInit, OnChanges {

  @Input() private forecastData: Forecast[];
  public currentForecastData: Forecast[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.forecastData && !changes.forecastData.isFirstChange()) {
      this.getCurrentForecastData(changes.forecastData.currentValue);
    }
  }

  ngOnInit() {}

  getCurrentForecastData(currentData) {
    this.currentForecastData = currentData;
  }

}
