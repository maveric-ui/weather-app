import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { SearchKeyService } from '../main/shared/search-key.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { WeatherToday } from './classes/weather-today';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  private unsubscribe: Subject<void> = new Subject();
  private startKey: string;

  public weatherTodayData: WeatherToday[];

  constructor(private weatherService: WeatherService,
              private searchKeyService: SearchKeyService) { }

  ngOnInit() {
    this.startKey = 'London';
    this.getWeatherTodayData();
    this.filterWeatherTodayData();
  }

  getWeatherTodayData() {
    this.weatherService.getWeatherToday(this.startKey)
      .subscribe((res) => this.weatherTodayData = res );

  }

  filterWeatherTodayData() {
    this.searchKeyService.emitChnages$
      .subscribe((searchKey) => {
      this.weatherService.getWeatherToday(searchKey)
        .subscribe((res) => this.weatherTodayData = res );
    });
  }

  ngOnDestroy() {
    // console.log('ngOnDestory');
    // this.unsubscribe.next();
    // this.unsubscribe.complete();
  }

}
