import { Component } from '@angular/core';

import {key} from "ionicons/icons";
import {IpAdress, MyIpGetStorageDataService} from "../../service/myIpGetStorageData/my-ip-get-storage-data.service";
import {Observable} from "rxjs";
import {FindIpGetStorageService} from "../../service/findIpGetStorage/find-ip-get-storage.service";

@Component({
  selector: 'app-savedIps',
  templateUrl: 'saved-ips.component.html',
  styleUrls: ['saved-ips.component.scss']
})
export class savedIps {

  selectedSegment = 'all';

  visitedIps$: Observable<IpAdress[]>
  findIps$: Observable<IpAdress[]>

  constructor(private myIpGetStorageDataService: MyIpGetStorageDataService, findIpGetStorageService:FindIpGetStorageService) {
    this.visitedIps$ = myIpGetStorageDataService.IpAdresses$;
    this.findIps$ = findIpGetStorageService.IpAdresses$;
  }

  deleteIp(i:number) {
    this.myIpGetStorageDataService.deleteIp(i);
  }
}
