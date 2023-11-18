import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyIpGetModalPageRoutingModule } from './my-ip-get-modal-routing.module';

import { MyIpGetModalPage } from './my-ip-get-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyIpGetModalPageRoutingModule
  ],
  declarations: [MyIpGetModalPage]
})
export class MyIpGetModalPageModule {}
