import { Component } from '@angular/core';
import {FindIpService} from "../../service/findIp/find-ip.service";
import {ModalController, ToastController} from "@ionic/angular";
import {MyIpGetStorageDataService} from "../../service/myIpGetStorageData/my-ip-get-storage-data.service";
import {FindIpGetStorageService} from "../../service/findIpGetStorage/find-ip-get-storage.service";
import {FormControl, Validators} from "@angular/forms";


@Component({
  selector: 'app-findIp',
  templateUrl: 'find-ip-page.component.html',
  styleUrls: ['find-ip-page.component.scss']
})



export class FindIpPage {

  result: any = null;
  searchInput: string = '';
  toast: HTMLIonToastElement | null = null;

  ipPattern: string = '^(?:[0-9]{1,3}\.){3}[0-9]{1,3}$'; // Regular expression for IP format


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
      duration: 1000,
      color: 'warning', // Example of using color
      position: 'bottom',
    });

    // Listen for the dismiss event to nullify the toast reference
    this.toast.onDidDismiss().then(() => {
      this.toast = null;
    });

    await this.toast.present();
  }
}
