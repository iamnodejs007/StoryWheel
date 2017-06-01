import { ConfigurationPage } from './../configuration/configuration';
import { PlayersListPage } from './../players-list/players-list';
import { FreePlayPage } from './../free-play/free-play';
import { Game } from './../game/game';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SinglePlayerPage } from "../single-player/single-player";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  public startGame() {
    this.navCtrl.push(Game, { animate: true });
  }

  public singlePlayer() {
    this.navCtrl.push(SinglePlayerPage, { animate: true });
  }

  public multiPlayer() {
    this.navCtrl.push(PlayersListPage, { animate: true });
  }

  public freePlay() {
    this.navCtrl.push(FreePlayPage, { animate: true });
  }

  public configuration() {
    this.navCtrl.push(ConfigurationPage, { animate: true });
  }

}
