import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { IconEngineConfiguration, PlayerConfig } from "../../components/icon-engine/icon-engine-configuration";
import { AdmobFreeProvider } from "../../providers/admob-free-provider";

/**
 * Generated class for the MultiPlayer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
//@IonicPage()
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
    playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); },
    timer: true
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private admobFree: AdmobFreeProvider, private platform: Platform) {
    this.iconConfiguration.players = (<MultiPlayerParams>navParams.data).players;
  }

  ionViewDidLoad() {
    this.platform.ready().then(() => {
      this.admobFree.showBanner();
    });
  }

  ionViewWillLeave() {
    this.admobFree.hideBanner();
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
