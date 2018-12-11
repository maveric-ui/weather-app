import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { HeaderComponent } from './components/header/header.component';
import { WeatherModule } from '../weather/weather.module';
import { SearchKeyService } from './shared/search-key.service';

const modules = [
  CommonModule,
  WeatherModule,
];

@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [...modules],
  exports: [MainComponent],
  providers: [SearchKeyService]
})
export class MainModule { }
