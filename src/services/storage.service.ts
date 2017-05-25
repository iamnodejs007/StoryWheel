import { PlayerConfig } from './../components/icon-engine/icon-engine-configuration';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    private players: PlayerConfig[];

    constructor() {

    }

    public savePlayers(players: PlayerConfig[]) {
        localStorage.setItem('storyPlayers', JSON.stringify(players));
        this.players = players;
    }

    public getPlayers(): PlayerConfig[] {
        let data = localStorage.getItem('storyPlayers');
        if (data) {
            return <PlayerConfig[]>JSON.parse(data);
        }
        return null;
    }
}