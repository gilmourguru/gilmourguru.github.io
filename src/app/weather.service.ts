import { Injectable } from '@angular/core';
import { HttpClientModule, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  apiKey = 'e5243ceb729ba719ba274a0d2e1e1f2e';
  lat = 38.9631;
  lon = -106.6588;
  units = 'imperial';


  getCurrentWeather(city: string): Observable<any> {
    const apiCall = `https://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=${this.units}&APPID=${this.apiKey}`;
    console.log('apiCall', apiCall);
    return this.httpClient.get<any>(apiCall).pipe(map(resp => {
      console.log('Weather API Response', resp);
      const weather = resp.weather[0];
      const temp = resp.main.temp;
      const code = resp.main.icon;
      const x = { weather, temp, code };
      console.log(x);
      return x;
    }));
  }

}
