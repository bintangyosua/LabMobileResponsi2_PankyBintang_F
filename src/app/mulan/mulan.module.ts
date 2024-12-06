import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MulanPageRoutingModule } from './mulan-routing.module';

import { MulanPage } from './mulan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MulanPageRoutingModule
  ],
  declarations: [MulanPage]
})
export class MulanPageModule {}
