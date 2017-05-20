import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Game } from './game';
import { SinglePlayerPage } from "../single-player/single-player";
import { MultiPlayerPage } from "../multi-player/multi-player";

@NgModule({
  declarations: [
    Game
  ],
  imports: [
    IonicPageModule.forChild(Game),
  ],
  exports: [
    Game
  ]
})
export class GameModule {}
