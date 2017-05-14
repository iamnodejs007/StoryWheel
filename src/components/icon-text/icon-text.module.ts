import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IconText } from './icon-text';

@NgModule({
  declarations: [
    IconText,
  ],
  imports: [
    IonicPageModule.forChild(IconText),
  ],
  exports: [
    IconText
  ]
})
export class IconTextModule {}
