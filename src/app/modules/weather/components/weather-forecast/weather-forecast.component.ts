import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';
import { ForecastArray, ForecastObject } from '../../classes/weather-forecast';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherForecastComponent implements OnInit, OnChanges {

  @Input() private forecastData: ForecastArray[];
  public chartForecast: Chart;
  private windForecast: number[];
  private tempForecast: number[];
  private pressureForecast: number[];
  private humidityForecast: number[];
  private allDates: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.forecastData && !changes.forecastData.isFirstChange()) {
      this.getForecastData(changes.forecastData.currentValue);
      this.chartInit();
    }
  }

  ngOnInit() {}

  getForecastData(forecastData) {
    this.windForecast = forecastData.map((data: ForecastObject) => data.wind.speed);
    this.tempForecast = forecastData.map((data: ForecastObject) => data.main.temp);
    this.pressureForecast = forecastData.map((data: ForecastObject) => data.main.pressure);
    this.humidityForecast = forecastData.map((data: ForecastObject) => data.main.humidity);
    this.allDates = forecastData.map((data: ForecastObject) => {
      return new Date(data.dt_txt)
        .toLocaleDateString('en', {month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'});
    });
  }

  chartInit() {
    const data = {
      labels: this.allDates,
      datasets: [{
        label: 'Forecast',
        data: this.tempForecast,
        borderColor: '#ff9191',
        backgroundColor: '#ddd',
        height: '200px',
        fill: 'start'
      }]
    };

    const options = {
      legend: {
        display: false,
      },
      scalse: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }]
      }
    };

    this.chartForecast = new Chart('canvasTemp', {
      type: 'line',
      data: {...data},
      options: {...options}
    });
  }

}
