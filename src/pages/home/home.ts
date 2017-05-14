import { IconEngineConfiguration } from './../../components/icon-engine/icon-engine-configuration';
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
    showText: true
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController) {

  }

  public startGame() {
    this.navCtrl.push(Game);
  }

}
