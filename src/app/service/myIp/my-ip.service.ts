import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MyIpService {

  constructor(
    private http: HttpClient
  ) { }


  allOfMyIpDetails$(){
    return this.http.get(environment.baseUrl + "json/");

  }
}
