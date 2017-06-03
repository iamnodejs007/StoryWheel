import { AdMobFree, AdMobFreeBannerConfig } from '@ionic-native/admob-free';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IconEngineConfiguration, PlayerConfig } from "../../components/icon-engine/icon-engine-configuration";

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
    playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); }
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private admobFree: AdMobFree) {
    const bannerConfig: AdMobFreeBannerConfig = {
      // add your config here
      // for the sake of this example we will just use the test config      
      isTesting: true,
      autoShow: true
    };
    this.admobFree.banner.config(bannerConfig);

    this.admobFree.banner.prepare()
      .then(() => {
        alert('ok');
        // banner Ad is ready
        // if we set autoShow to false, then we will need to call the show method here
      })
      .catch(e => alert(e));


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePlayer');
  }

  public showHelp() {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'Thsi is ...  q',
      buttons: ['Ok']
    });
    alert.present();
  }

}
