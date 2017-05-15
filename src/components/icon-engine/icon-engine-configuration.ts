export class IconEngineConfiguration {
    public nextIcon: boolean;
    public previousIcon: boolean;
    public players: PlayerConfig[];
    public showText: boolean;
    public turnTime: number;
    public playerClick: (PlayerConfig) => void;
}

export class PlayerConfig {
    public name: string;
}