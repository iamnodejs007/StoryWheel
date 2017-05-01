import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CircleProgressBar } from './circle-progress-bar';

@NgModule({
  declarations: [
    CircleProgressBar,
  ],
  imports: [
    IonicPageModule.forChild(CircleProgressBar),
  ],
  exports: [
    CircleProgressBar
  ]
})
export class CircleProgressBarModule {}
