import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherToday } from '../classes/weather-today';
import { Forecast } from '../classes/weather-forecast';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  protected configRequest = {
    url: environment.urlBase,
    apiID: environment.apiID,
    units: environment.units,
    lang: 'ru',
    cnt: 16,
  };

  constructor(private http: HttpClient) {
  }

  getWeatherToday(cityName: string): Observable<WeatherToday[]> {
    const {url, apiID, units, lang} = this.configRequest;
    const URL_WEATHER_TODAY = `${url}weather?q=${cityName}&units=${units}&lang=${lang}&appid=${apiID}`;
    return this.http.get<WeatherToday[]>(URL_WEATHER_TODAY);
  }

  getForecast(cityName: string): Observable<Forecast[]> {
    const {url, apiID, units, lang, cnt} = this.configRequest;
    const URL_WEATHER_FORECAST = `${url}forecast?q=${cityName}&appid=${apiID}&units=${units}&lang=${lang}&cnt=${cnt}`;
    return this.http.get<Forecast[]>(URL_WEATHER_FORECAST)
    .pipe(
      map((res: Forecast) => res.list)
    );
  }
}
