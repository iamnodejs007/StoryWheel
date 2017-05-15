import { IconEngineConfiguration, PlayerConfig } from './../../components/icon-engine/icon-engine-configuration';
import { Game } from './../game/game';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public iconConfiguration: IconEngineConfiguration = {
    nextIcon: true,
    previousIcon: true,
    showText: false,
    players: [
      {
        name: 'Adrian'
      },
      {
        name: 'Monika'
      },
      {
        name: 'Mikołaj'
      }
    ],
    turnTime: 10000,
    playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); }
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController) {
  }

  public startGame() {
    this.navCtrl.push(Game);
  }

}
