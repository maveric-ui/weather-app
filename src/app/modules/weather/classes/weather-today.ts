export interface WeatherToday {
  weather: [{
    main: string,
    description: string,
    icon: string
  }];
  main: {
    temp: number,
    humidity: number,
    pressure: number
  };
  wind: {
    speed: number
  };
  clouds: {
    all: number
  };
  sys: {
    country: string
  };
  name: string;
}
