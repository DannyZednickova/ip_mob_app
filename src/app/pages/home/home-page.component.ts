import {Component} from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {ModalController} from "@ionic/angular";
import {MyIpService} from "../../service/myIp/my-ip.service";


import {MyIpGetModalPage} from "../getMyIp-modal/my-ip-get-modal.page";
import {WeatherServiceService} from "../../service/weatherService/weather-service.service";




@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePage {
  data: any = null;
  result:any = null;
  weather:any = null;


  constructor(private modalCtrl: ModalController,
              private myIp: MyIpService,
              private weatherService:WeatherServiceService



  ) {

    this.infoMyIpJson();

  }





  infoMyIpJson(){
    this.myIp.allOfMyIpDetails$().subscribe(result=>{
      this.result = result;
      this.showWeather(this.result.latitude, this.result.longitude);

    })
  }


  showInfoMyIpModal() {
    this.modalCtrl.create({
      component: MyIpGetModalPage
    }).then(modalres => modalres.present())
  }



showWeather(lat:string, lon:string) {
    this.weatherService.weatherDetails$(lat,lon).subscribe(   weather=>{
      this.  weather =   weather;
      console.log(weather)


      // I NEED THIS FUNCTION TO USE IN HOMEPAGE HTML... NOT LIKE BUTTON BUT AS FUNCTION GIVING ME SOME DATA ETC.
    })

  }


    protected readonly Math = Math;

}
