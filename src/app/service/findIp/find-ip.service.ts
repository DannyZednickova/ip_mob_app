import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FindIpService {

  constructor(
    private http: HttpClient
  ) {
  }
  findIpAdresses$(findIp:string){
    return this.http.get(environment.baseUrl + "/" + findIp +"/json/");

  }
}
