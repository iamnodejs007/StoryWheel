import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimatedTheme } from './animated-theme';

@NgModule({
  declarations: [
    AnimatedTheme,
  ],
  imports: [
    IonicPageModule.forChild(AnimatedTheme),
  ],
  exports: [
    AnimatedTheme
  ]
})
export class AnimatedThemeModule {}
