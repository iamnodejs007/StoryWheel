import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { IconEngineConfiguration, PlayerConfig } from "../../components/icon-engine/icon-engine-configuration";
import { AdmobFreeProvider } from '../../providers/admob-free-provider';

/**
 * Generated class for the SinglePlayer page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-single-player',
  templateUrl: 'single-player.html',
})
export class SinglePlayerPage {

  public iconConfiguration: IconEngineConfiguration = {
    nextIcon: true,
    previousIcon: true,
    showText: false,
    playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); },
    timer: true
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private admobFree: AdmobFreeProvider, private platform: Platform) {
    
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
      subTitle: 'The main goal in this game is <b>telling the story</b>.\nYou should begin your story using the symbol shown on screen.\nEach time when the new symbol is shown, you should include it in your story',
      buttons: ['Ok']
    });
    alert.present();
  }
}
