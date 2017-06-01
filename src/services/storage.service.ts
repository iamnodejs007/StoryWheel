import { PlayerConfig } from './../components/icon-engine/icon-engine-configuration';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    private players: PlayerConfig[];
    public readonly configKey: string = 'config';

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

    public save<T>(name: string, players: T) {
        localStorage.setItem(name, JSON.stringify(players));
    }

    public get<T>(name: string): T {
        let data = localStorage.getItem(name);
        if (data) {
            return <T>JSON.parse(data);
        }
        return null;
    }
}