import { Component, OnInit } from '@angular/core';
import {ModalController} from "@ionic/angular";
import {MyIpService} from "../../service/myIp/my-ip.service";


@Component({
  selector: 'app-my-ip-get-modal',
  templateUrl: './my-ip-get-modal.page.html',
  styleUrls: ['./my-ip-get-modal.page.scss'],
})
export class MyIpGetModalPage implements OnInit {

  constructor(private modalCtrl: ModalController, private myIp: MyIpService) {
    //this.Vypisinfo();
    this.vypisMojeUdaje();
  }

  data: any  = {};




  vypisMojeUdaje(){
    this.myIp.allOfMyIpDetails$().subscribe((data) =>{
      this.data= data;
    })
  }

  ngOnInit() {
  }


  public uloz() {
      console.log(this.data);
    localStorage.setItem(this.data.ip, JSON.stringify(this.data));
    this.modalCtrl.dismiss();

    }






  close(){
    this.modalCtrl.dismiss();
  }
  // protected readonly console = console;

}
