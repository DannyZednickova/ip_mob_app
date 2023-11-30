import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindIpPage } from './find-ip-page.component';

const routes: Routes = [
  {
    path: '',
    component: FindIpPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab2PageRoutingModule {}
