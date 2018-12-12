export interface ForecastArray {
  list: ForecastObject[];
  city: object;
}

export interface ForecastObject {
  dt_txt: number;
  wind: {
    speed: string
  };
  main: {
    temp: number,
      pressure: number,
      humidity: number,
  };
}
