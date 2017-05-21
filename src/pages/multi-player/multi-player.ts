import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IconEngineConfiguration, PlayerConfig } from "../../components/icon-engine/icon-engine-configuration";

/**
 * Generated class for the MultiPlayer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-multi-player',
  templateUrl: 'multi-player.html',
})
export class MultiPlayerPage {

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
      }
    ],
    turnTime: 10000,
    playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); }
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.iconConfiguration.players = (<MultiPlayerParams>navParams.data).players;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiPlayer');
  }

}

export class MultiPlayerParams {
  public players: PlayerConfig[];
}
