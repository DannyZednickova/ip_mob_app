import {Component} from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {ModalController} from "@ionic/angular";
import {MyIpService} from "../../service/myIp/my-ip.service";


import {MyIpGetModalPage} from "../getMyIp-modal/my-ip-get-modal.page";




@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePage {
  data: any = null;
  result:any = null;


  constructor(private modalCtrl: ModalController,
              private myIp: MyIpService,

  ) {

    this.infoMyIpJson();

  }



  infoMyIpJson(){
    this.myIp.allOfMyIpDetails$().subscribe(result=>{
      this.result = result;
    })
  }


  showInfoMyIpModal() {
    this.modalCtrl.create({
      component: MyIpGetModalPage
    }).then(modalres => modalres.present())
  }







}
