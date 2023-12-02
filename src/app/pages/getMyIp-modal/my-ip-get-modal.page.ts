import {Component, OnInit} from '@angular/core';
import {ModalController, ToastController} from "@ionic/angular";
import {MyIpService} from "../../service/myIp/my-ip.service";
import {MyIpGetStorageDataService} from "../../service/myIpGetStorageData/my-ip-get-storage-data.service";


@Component({
  selector: 'app-getMyIp-modal',
  templateUrl: './my-ip-get-modal.page.html',
  styleUrls: ['./my-ip-get-modal.page.scss'],
})
export class MyIpGetModalPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    private myIp: MyIpService,
    private myIpGetStorageDataService: MyIpGetStorageDataService,
    public toastController: ToastController
  ) {
    //this.Vypisinfo();
    this.getMyIpInfo();
  }

  data: any = {};
  toast: HTMLIonToastElement | null = null;


  getMyIpInfo() {
    this.myIp.allOfMyIpDetails$().subscribe((data) => {

      this.data = data;
    })
  }

  ngOnInit() {
  }


  public async saveMyIp() {
    console.log(this.data);
    const success = await this.myIpGetStorageDataService.addToStorage(this.data?.ip, this.data?.city, this.data?.region);

    // If a toast is already being displayed, dismiss it
    if (this.toast) {
      await this.toast.dismiss();
    }

    // Create a new toast
    this.toast = await this.toastController.create({
      message: success ? 'Ip was saved' : 'Ip already exists...',
      duration: 1000
    });

    // Listen for the dismiss event to nullify the toast reference
    this.toast.onDidDismiss().then(() => {
      this.toast = null;
    });

    await this.toast.present();
  }




   // this.modalCtrl.dismiss();



  close() {
    this.modalCtrl.dismiss();
  }

  // protected readonly console = console;

}
