import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyIpGetModalPage } from './my-ip-get-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MyIpGetModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyIpGetModalPageRoutingModule {}
