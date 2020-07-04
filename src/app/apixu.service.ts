import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {
 

  constructor(private http: HttpClient) { }

    getWeather(location)
    {
      return this.http.get('https://cors-anywhere.herokuapp.com/http://api.weatherstack.com/current?access_key=23624c5858ee047d959d79dfd9ba3844&query=' + location);
    }
  }

