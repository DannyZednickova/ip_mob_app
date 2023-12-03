import { Component } from '@angular/core';
import {FindIpService} from "../../service/findIp/find-ip.service";
import {ModalController, ToastController} from "@ionic/angular";
import {MyIpGetStorageDataService} from "../../service/myIpGetStorageData/my-ip-get-storage-data.service";
import {FindIpGetStorageService} from "../../service/findIpGetStorage/find-ip-get-storage.service";

@Component({
  selector: 'app-findIp',
  templateUrl: 'find-ip-page.component.html',
  styleUrls: ['find-ip-page.component.scss']
})
export class FindIpPage {
  result: any = null;
  searchInput: string = '';
  toast: HTMLIonToastElement | null = null;

  constructor(
    private findIpService :FindIpService,
    private myIpGetStorageDataService: MyIpGetStorageDataService,
    private findIpGetStorageService:FindIpGetStorageService,
    public toastController: ToastController
  ) {}

  findIpSearcheBar(findIpS: string) {

    this.findIpService.findIpAdresses$(findIpS).subscribe(result => {
      this.result = result;
    })

  }


  public async saveIp() {
    console.log(this.result);
    const success = await this.findIpGetStorageService.addToStorage(this.result?.ip, this.result?.city, this.result?.region);

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
}
