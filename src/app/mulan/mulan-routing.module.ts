import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulanPage } from './mulan.page';

const routes: Routes = [
  {
    path: '',
    component: MulanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulanPageRoutingModule {}
