import { SymbolService } from './../../services/symbol.service';
import { PlayerSelector } from './../player-selector/player-selector';
import { IconEngineConfiguration } from './icon-engine-configuration';
import { Component, Input, ViewChild } from '@angular/core';
import { ConfigService } from "../../services/config.service";

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

  public turnTime: number = 30;

  @ViewChild('playerSelector') private playerSelector: PlayerSelector;

  constructor(private symbolService: SymbolService, private configService: ConfigService) {
    console.log('Hello IconEngine Component');

    this.turnTime = configService.timeConfig.value;
  }

  public nextSymbol() {
    if (this.playerSelector) {
      this.playerSelector.next();
    }
  }

  public previousSymbol() {
    if (this.playerSelector) {
      this.playerSelector.previous();
    }
  }

}
