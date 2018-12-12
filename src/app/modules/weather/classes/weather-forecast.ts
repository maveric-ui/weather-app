export interface Forecast {
  list: [{
    wind: {
      speed: string
    };
    main: {
      temp: number,
      pressure: number,
      humidity: number,
    };
  }];
}
