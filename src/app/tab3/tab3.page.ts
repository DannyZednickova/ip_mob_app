import { Component } from '@angular/core';

import {key} from "ionicons/icons";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor( ) {
    this.getData();


  }

  mappedData: any[] = [];


  getData() {
    const data: { [key: string]: any } = {};


    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) {
        data[key] = localStorage.getItem(key);
        data[key] = JSON.parse(data[key]);

        const mapped = { type: key, value: data[key] };
        this.mappedData.push(mapped);
      }
    }

    console.log(this.mappedData);
    return this.mappedData;
  }

  protected readonly key = key;
  protected readonly Object = Object;
}
