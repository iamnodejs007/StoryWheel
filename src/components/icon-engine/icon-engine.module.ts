import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconEngine } from './icon-engine';

@NgModule({
  declarations: [
    IconEngine
  ],
  imports: [
    IonicPageModule.forChild(IconEngine),
  ],
  exports: [
    IconEngine
  ]
})
export class IconEngineModule {}
