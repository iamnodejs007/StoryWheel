import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PlayerSelector } from './player-selector';

@NgModule({
  declarations: [
    PlayerSelector,
  ],
  imports: [
    IonicPageModule.forChild(PlayerSelector),
  ],
  exports: [
    PlayerSelector
  ]
})
export class PlayerSelectorModule {}
