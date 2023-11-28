import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";


// JEN ZISKAVA DATA O MOJI AKTUALNI IP ///

@Injectable({
  providedIn: 'root'
})
export class MyIpService {

  constructor(
    private http: HttpClient
  ) { }


  // tento request mi vraci STRING a ne json, takze to tu musim parsovat na responseTypeText...
  getMyInfo$(field: string) {
    return this.http.get(environment.baseUrl + field ,{ responseType: 'text' });
  }


  vsechnyMojeUdaje$(){
    return this.http.get(environment.baseUrl + "json/");

  }
}
