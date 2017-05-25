export class IconEngineConfiguration {
    public nextIcon: boolean;
    public previousIcon: boolean;
    public players: PlayerConfig[];
    public showText: boolean;
    public turnTime: number;
    public playerClick: (PlayerConfig) => void;
}

export class PlayerConfig {

    constructor(name: string) {
        this.name = name;   
        this.points = 0;     
    }

    public name: string;
    public points: number = 0;
}