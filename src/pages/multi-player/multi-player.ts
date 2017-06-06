import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
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
    playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); }
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
    this.iconConfiguration.players = (<MultiPlayerParams>navParams.data).players;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MultiPlayer');
  }

  public showHelp() {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'Competetive mode.\n\nStart with your own story. When the symbol changed, other player can take your story and continue it using the sybmol on screen. Then he should tap his name to count points.',
      buttons: ['Ok']
    });
    alert.present();
  }

}

export class MultiPlayerParams {
  public players: PlayerConfig[];
}
