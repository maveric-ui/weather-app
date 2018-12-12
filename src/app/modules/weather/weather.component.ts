import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { SearchKeyService } from '../main/shared/search-key.service';
import { WeatherToday } from './classes/weather-today';
import { Forecast } from './classes/weather-forecast';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  private startKey: string;
  public weatherTodayData: WeatherToday[];
  public forecastData: Forecast[];

  constructor(private weatherService: WeatherService,
              private searchKeyService: SearchKeyService) { }

  ngOnInit() {
    this.startKey = 'London';
    this.getWeatherTodayData();
    this.filterWeatherTodayDataByName();
    this.getForecastData();
    this.filterForecastDataByName();
  }

  getWeatherTodayData() {
    this.weatherService.getWeatherToday(this.startKey)
      .subscribe((res: WeatherToday[]) => this.weatherTodayData = res );
  }

  filterWeatherTodayDataByName() {
    this.searchKeyService.emitChnages$
      .subscribe((searchKey) => {
      this.weatherService.getWeatherToday(searchKey)
        .subscribe((res: WeatherToday[]) => this.weatherTodayData = res );
    });
  }

  getForecastData() {
    this.weatherService.getForecast(this.startKey)
      .subscribe((res: Forecast[]) => this.forecastData = res);
  }

  filterForecastDataByName() {
    this.searchKeyService.emitChnages$
      .subscribe((searchKey) => {
        this.weatherService.getForecast(searchKey)
          .subscribe((res: Forecast[]) => this.forecastData = res);
      });
  }

  ngOnDestroy() {
  }

}
