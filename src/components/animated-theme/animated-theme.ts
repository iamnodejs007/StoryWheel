import { Component } from '@angular/core';

/**
 * Generated class for the AnimatedTheme component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'animated-theme',
  templateUrl: 'animated-theme.html'
})
export class AnimatedTheme {

  text: string;

  constructor() {
    console.log('Hello AnimatedTheme Component');
    this.text = 'Hello World';
  }

}
