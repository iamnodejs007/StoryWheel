import { SymbolService } from './../../services/symbol.service';
import { CircleProgressBar } from './../circle-progress-bar/circle-progress-bar';
import { PlayerSelector } from './../player-selector/player-selector';
import { IconEngineConfiguration } from './icon-engine-configuration';
import { Component, Input, ViewChild } from '@angular/core';

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

  @ViewChild('playerSelector') private playerSelector: PlayerSelector;

  constructor(private symbolService: SymbolService) {
    console.log('Hello IconEngine Component');
  }

  public nextSymbol() {
    if (this.playerSelector) {
      debugger;
      this.playerSelector.next();
    }
  }

  public previousSymbol() {
    if (this.playerSelector) {
      this.playerSelector.previous();
    }
  }

}
