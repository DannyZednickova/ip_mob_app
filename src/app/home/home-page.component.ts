import {Component} from '@angular/core';
import {firstValueFrom, Observable} from "rxjs";
import {Test} from "../models/test.model";
import {ModalController} from "@ionic/angular";
import {MyIpService} from "../service/myIp/my-ip.service";


import {MyIpGetModalPage} from "../pages/my-ip-get-modal/my-ip-get-modal.page";




@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePage {
  data: any = null;
  result:any = null;
  myIp$: Observable<any>;


  constructor(private modalCtrl: ModalController,
              private myIp: MyIpService,

  ) {

    this.myIp$ = this.myIp.getMyInfo$("ip");
    this.fetchData();
    this.infoMyIpJson();

  }



//tohle musim nahradit upravit aby to bylo asynchrone... .subscribe ziskava data

  fetchData() {
    this.myIp.getMyInfo$("ip").subscribe(data => {
      // data získaná z requestu předám to proměnné this.data abych je mohl vypsat ve view (nahradím původní objekt uložený v data)
      this.data = data;

    })
  }

  infoMyIpJson(){
    this.myIp.vsechnyMojeUdaje$().subscribe(result=>{
      this.result = result;
    })
  }


  setting() {
    this.modalCtrl.create({
      component: MyIpGetModalPage
    }).then(modalres => modalres.present())
  }







}
