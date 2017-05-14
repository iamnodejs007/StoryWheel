import { IconEngineConfiguration } from './icon-engine-configuration';
import { Component, Input } from '@angular/core';

/**
 * Generated class for the IconEngine component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'icon-engine',
  templateUrl: 'icon-engine.html'
})
export class IconEngine {
  @Input()
  public configuration: IconEngineConfiguration = {} as IconEngineConfiguration;

  constructor() {
    console.log('Hello IconEngine Component');
  }

}
