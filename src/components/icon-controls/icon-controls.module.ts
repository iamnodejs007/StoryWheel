import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconControls } from './icon-controls';

@NgModule({
  declarations: [
    IconControls,
  ],
  imports: [
    IonicPageModule.forChild(IconControls),
  ],
  exports: [
    IconControls
  ]
})
export class IconControlsModule {}
