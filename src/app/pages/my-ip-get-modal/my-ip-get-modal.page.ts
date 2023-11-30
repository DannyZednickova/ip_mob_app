import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {MyIpService} from "../../service/myIp/my-ip.service";
import {MyIpGetStorageDataService} from "../../service/myIpGetStorageData/my-ip-get-storage-data.service";


@Component({
  selector: 'app-my-ip-get-modal',
  templateUrl: './my-ip-get-modal.page.html',
  styleUrls: ['./my-ip-get-modal.page.scss'],
})
export class MyIpGetModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private myIp: MyIpService,
    private myIpGetStorageDataService: MyIpGetStorageDataService
  ) {
    //this.Vypisinfo();
    this.vypisMojeUdaje();
  }

  data: any = {};


  vypisMojeUdaje() {
    this.myIp.allOfMyIpDetails$().subscribe((data) => {
      this.data = data;
    })
  }

  ngOnInit() {
  }


  public uloz() {
    console.log(this.data);
    this.myIpGetStorageDataService.addToStorage(this.data?.ip, this.data?.city, this.data?.region);
    this.modalCtrl.dismiss();

  }


  close() {
    this.modalCtrl.dismiss();
  }

  // protected readonly console = console;

}
