import { IconEngine } from './../../components/icon-engine/icon-engine';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Platform } from 'ionic-angular';
import { IconEngineConfiguration } from "../../components/icon-engine/icon-engine-configuration";
import { AdmobFreeProvider } from "../../providers/admob-free-provider";

/**
 * Generated class for the FreePlay page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-free-play',
  templateUrl: 'free-play.html',
})
export class FreePlayPage {

  public iconConfiguration: IconEngineConfiguration = {
    nextIcon: true,
    previousIcon: true,
    showText: false,
    //playerClick: (aa: PlayerConfig) => { console.log('player click ' + aa.name); }
    timer: false
  } as IconEngineConfiguration;

  public iconEngine: IconEngine;

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

  public next() {
    debugger;
    if (this.iconEngine) {
      this.iconEngine.nextSymbol();
    }
  }

  public previous() {
    if (this.iconEngine) {
      this.iconEngine.previousSymbol();
    }
  }

  public showHelp() {
    let alert = this.alertCtrl.create({
      title: 'Help',
      subTitle: 'In this mode you can tell a story and <b>change the sybmol manually</b>, tapping left or right part of screen',
      buttons: ['Ok']
    });
    alert.present();
  }

}
