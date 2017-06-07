export class IconEngineConfiguration {
    public nextIcon: boolean;
    public previousIcon: boolean;
    public players: PlayerConfig[];
    public showText: boolean;
    public playerClick: (PlayerConfig) => void;
    public timer: boolean;
}

export class PlayerConfig {

    constructor(name: string) {
        this.name = name;   
        this.points = 0;     
    }

    public name: string;
    public points: number = 0;
}