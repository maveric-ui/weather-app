import { Component, OnInit, OnDestroy } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { SearchKeyService } from '../main/shared/search-key.service';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private unsubscribe: Subject<void> = new Subject();
  private startKey: string;

  constructor(private weatherService: WeatherService,
              private searchKeyService: SearchKeyService) { }

  ngOnInit() {
    this.startKey = 'London';
    this.getWeatherTodayData();
    this.filterWeatherTodayData();
  }

  getWeatherTodayData() {
    this.weatherService.getWeatherToday(this.startKey)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((res) => console.log(res));

  }

  filterWeatherTodayData() {
    this.searchKeyService.emitChnages$
      .pipe(takeUntil(this.unsubscribe))
      .subscribe((searchKey) => {
      this.weatherService.getWeatherToday(searchKey)
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(res => { console.log(res); });
    });
  }

  ngOnDestroy() {
    console.log('ngOnDestory');
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
