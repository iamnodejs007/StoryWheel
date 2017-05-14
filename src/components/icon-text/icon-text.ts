import { Component } from '@angular/core';

/**
 * Generated class for the IconText component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'icon-text',
  templateUrl: 'icon-text.html'
})
export class IconText {

  text: string;

  constructor() {
    console.log('Hello IconText Component');
    this.text = 'Hello World';
  }

}
