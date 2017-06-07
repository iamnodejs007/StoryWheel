import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SinglePlayerPage } from './single-player';

@NgModule({
  declarations: [
    SinglePlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(SinglePlayerPage),
  ],
  exports: [
    SinglePlayerPage
  ]
})
export class SinglePlayerModule {}
