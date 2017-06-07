import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MultiPlayerPage } from './multi-player';

@NgModule({
  declarations: [
    MultiPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(MultiPlayerPage),
  ],
  exports: [
    MultiPlayerPage
  ]
})
export class MultiPlayerModule {}
