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
    turnTime: 10000,
    playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); }
  } as IconEngineConfiguration;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SinglePlayer');
  }

  private showHelp() {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'Thsi is ...  q',
      buttons: ['Ok']
    });
    alert.present();
  }

}
