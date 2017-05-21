import { MultiPlayerPage, MultiPlayerParams } from './../multi-player/multi-player';
import { PlayerConfig } from './../../components/icon-engine/icon-engine-configuration';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PlayersList page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-players-list',
  templateUrl: 'players-list.html',
})
export class PlayersListPage {

  public playerList: PlayerConfig[] = [
    <PlayerConfig>{ name: '' }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersList');
  }

  public addPlayer() {
    this.playerList.push(<PlayerConfig>{ name: '' });
  }

  public removePlayer(player: PlayerConfig) {
    let index = this.playerList.indexOf(player);
    this.playerList.splice(index, 1);
  }

  public start() {
    debugger;
    this.navCtrl.push(MultiPlayerPage, <MultiPlayerParams>{ players: this.playerList });
  }

}
