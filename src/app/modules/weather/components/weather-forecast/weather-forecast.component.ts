import { Component, Input, OnInit, ViewEncapsulation, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js';
import { ForecastArray, ForecastObject } from '../../classes/weather-forecast';
import { MatTabChangeEvent } from '@angular/material';

@Component({
  selector: 'app-weather-forecast',
  templateUrl: './weather-forecast.component.html',
  styleUrls: ['./weather-forecast.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class WeatherForecastComponent implements OnInit, OnChanges {

  @Input() private forecastData: ForecastArray[];
  public chartWind;
  public chartTemp;
  private windForecast: number[];
  private tempForecast: number[];
  private pressureForecast: number[];
  private humidityForecast: number[];
  private allDates: string[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes.forecastData && !changes.forecastData.isFirstChange()) {
      this.getForecastData(changes.forecastData.currentValue);
      this.chartWindInit();
      this.chartTempInit();
    }
  }

  ngOnInit() {}

  handleTabChanges(event: MatTabChangeEvent) {}

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

  chartWindInit() {
    const dataWind = {
      labels: this.allDates,
      datasets: [{
        label: 'Wind',
        data: this.windForecast,
        borderColor: '#ff9191',
        backgroundColor: '#ddd',
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

    this.chartWind = new Chart('canvasWind', {
      type: 'line',
      data: {...dataWind},
      options: {...options}
    });
  }

  chartTempInit() {
    const dataTemp = {
      labels: this.allDates,
      datasets: [{
        label: 'Temp',
        data: this.tempForecast,
        borderColor: '#ff9191',
        backgroundColor: '#ddd',
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

    this.chartTemp = new Chart('canvasTemp', {
      type: 'line',
      data: {...dataTemp},
      options: {...options}
    });

  }
}
