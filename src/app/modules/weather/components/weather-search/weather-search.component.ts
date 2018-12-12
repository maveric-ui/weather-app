import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SearchKeyService } from '../../../main/shared/search-key.service';

@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {

  @Output() searchKey: EventEmitter<string> = new EventEmitter<string>();

  constructor(private searchKeyService: SearchKeyService) { }

  ngOnInit() {}

  onSearchKey(event) {
    const value = event.target.value;
    this.searchKeyService.emitChange(value);
  }

  onSearchButton(value: string) {
    this.searchKeyService.emitChange(value);
  }

}
