import { IconEngine } from './../../components/icon-engine/icon-engine';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { IconEngineConfiguration } from "../../components/icon-engine/icon-engine-configuration";

/**
 * Generated class for the FreePlay page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
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
  } as IconEngineConfiguration;

  public iconEngine: IconEngine;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FreePlay');
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
