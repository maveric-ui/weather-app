import {  Component, Input, OnInit } from '@angular/core';
import { WeatherToday } from '../../classes/weather-today';

@Component({
  selector: 'app-weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent implements OnInit {

  @Input() public weatherTodayData: WeatherToday;

  constructor() { }

  ngOnInit() {

  }


}
