import { Injectable } from '@angular/core';


//TVORI SERVISU MEZI TAB1
@Injectable({
  providedIn: 'root'
})
export class MyIpInfosService {

  private data: { [key: string]: any } = {};

  setData(key: string, value: any) {
    this.data[key] = value;
  }

  getData(key: string) {
    return this.data[key];
  }

  constructor() { }
}
