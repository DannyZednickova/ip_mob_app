import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  constructor(
    private http: HttpClient
  ) { }


  //https://api.openweathermap.org/data/2.5/weather?lat=0&lon=0&appid=8f5f484162a7f878b78f45ea4886f31c


  weatherDetails$(lat:string, lon:string){
    return this.http.get(environment.baseUrlweather + "lat=" + lat + "&lon=" + lon + "&units=metric&appid=6c6731090707d2e39a43360fcf1e504c");

  }

}
