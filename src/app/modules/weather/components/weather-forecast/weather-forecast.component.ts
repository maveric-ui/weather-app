import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  ElementRef, ViewChild
} from '@angular/core';
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

  @ViewChild('canvasWind') canvasWind: ElementRef;
  @ViewChild('canvasTemp') canvasTemp: ElementRef;

  @Input() public forecastData: ForecastArray[];
  private chartForecast: Chart;

  private windForecastData: number[];
  private tempForecastData: number[];
  private pressureForecastData: number[];
  private humidityForecastData: number[];
  private allDates: string[];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.forecastData && !changes.forecastData.isFirstChange()) {
      this.getForecastData(changes.forecastData.currentValue);
      this.chartInit();
    }
  }

  ngOnInit() {}

  getForecastData(forecastData) {
    this.windForecastData = forecastData.map((data: ForecastObject) => data.wind.speed);
    this.tempForecastData = forecastData.map((data: ForecastObject) => data.main.temp);
    this.pressureForecastData = forecastData.map((data: ForecastObject) => data.main.pressure);
    this.humidityForecastData = forecastData.map((data: ForecastObject) => data.main.humidity);
    this.allDates = forecastData.map((data: ForecastObject) => {
      return new Date(data.dt_txt)
        .toLocaleDateString('en', {month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'});
    });
  }

  chartInit() {
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

    const data = {
      labels: this.allDates,
      datasets: [{
        label: 'Temp',
        data: this.tempForecastData,
        borderColor: '#ff9191',
        backgroundColor: '#ddd',
        fill: 'start'
      }]
    };

    this.chartForecast = new Chart(this.canvasTemp.nativeElement.getContext('2d'), {
      type: 'line',
      data: {...data},
      options: {...options}
    });
  }


  handleTabChanges(event: MatTabChangeEvent) {
    const index = event.index;
    switch (index) {
      case 0:
        console.log(this.windForecastData);
        break;
      case 1:
        console.log(this.tempForecastData);
        break;
      case 2:
        console.log(this.pressureForecastData);
        break;
      case 3:
        console.log(this.humidityForecastData);
        break;
      default:
        break;
    }
  }
}
