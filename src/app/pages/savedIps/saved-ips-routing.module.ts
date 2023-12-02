import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { savedIps } from './saved-ips.component';

const routes: Routes = [
  {
    path: '',
    component: savedIps,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
