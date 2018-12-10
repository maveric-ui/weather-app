import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url = environment.baseUrl;
  private apiID = environment.apiID;
  private units = environment.units;

  constructor(private http: HttpClient) { }


  getWeatherToday(cityName: string) {
    const URL_WEATHER_TODAY = `${this.url}weather?q=${cityName}&appid=${this.apiID}&units=${this.units}`;
    return this.http.get(URL_WEATHER_TODAY);
  }

}
