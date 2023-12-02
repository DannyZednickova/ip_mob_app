import { Component } from '@angular/core';
import {FindIpService} from "../../service/findIp/find-ip.service";

@Component({
  selector: 'app-findIp',
  templateUrl: 'find-ip-page.component.html',
  styleUrls: ['find-ip-page.component.scss']
})
export class FindIpPage {
  result: any = null;
  searchInput: string = '';

  constructor(private findIpService :FindIpService) {}

  findIpSearcheBar(findIpS: string) {

    this.findIpService.findIpAdresses$(findIpS).subscribe(result => {
      this.result = result;
    })

  }


  saveIp() {

  }
}
