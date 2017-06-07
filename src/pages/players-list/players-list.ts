import { StorageService } from './../../services/storage.service';
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
//@IonicPage()
@Component({
  selector: 'page-players-list',
  templateUrl: 'players-list.html',
})
export class PlayersListPage {

  public playerList: PlayerConfig[] = [
    new PlayerConfig('')
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private storageService: StorageService) {
    let players = storageService.getPlayers();
    if (players) {
      this.playerList = players;
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlayersList');
  }

  public addPlayer() {
    this.playerList.push(new PlayerConfig(''));
  }

  public removePlayer(player: PlayerConfig) {
    let index = this.playerList.indexOf(player);
    this.playerList.splice(index, 1);
  }

  public start() {
    this.storageService.savePlayers(this.playerList);
    this.navCtrl.push(MultiPlayerPage, <MultiPlayerParams>{ players: this.playerList });
  }

}
