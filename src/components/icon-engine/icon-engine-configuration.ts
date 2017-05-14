export class IconEngineConfiguration {
    public nextIcon: boolean;
    public previousIcon: boolean;
    public players: PlayerConfig[];
    public playerClick: (any) => void;
    public showText: boolean;
    public turnTime: number;
}

export class PlayerConfig {
    public name: string;
}