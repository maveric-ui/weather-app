import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherToday } from '../../classes/weather-today';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit, OnChanges {

  @Input() private weatherTodayData: WeatherToday;

  public currentWeatherTodayData: WeatherToday;

  constructor() { }

  ngOnChanges( changes: SimpleChanges) {
    if (changes.weatherTodayData && !changes.weatherTodayData.isFirstChange()) {
      this.getCurrentWeatherTodayData(changes.weatherTodayData.currentValue);
    }
  }

  ngOnInit() {}

  getCurrentWeatherTodayData(currentData) {
    this.currentWeatherTodayData = currentData;
  }


}
