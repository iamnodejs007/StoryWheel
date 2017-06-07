import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconEngine } from './icon-engine';
import { IconChooser } from "../icon-chooser/icon-chooser";
import { CircleProgressBar } from "../circle-progress-bar/circle-progress-bar";
import { PlayerSelector } from "../player-selector/player-selector";
import { IconText } from "../icon-text/icon-text";

@NgModule({
  declarations: [
    IconEngine,
    IconChooser,
    CircleProgressBar,
    PlayerSelector,
    IconText,
  ],
  imports: [
    IonicPageModule.forChild(IconEngine),
  ],
  exports: [
    IconEngine
  ]
})
export class IconEngineModule {}
