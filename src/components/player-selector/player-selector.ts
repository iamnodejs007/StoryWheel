import { Component, Input } from '@angular/core';

/**
 * Generated class for the PlayerSelector component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'player-selector',
  templateUrl: 'player-selector.html'
})
export class PlayerSelector {

  @Input()
  public players: Player[] = [
    {
      name: 'Adrian',
      percent: 0.4,
      color: '#FF0000'
    },
    {
      name: 'Monika',
      percent: 0.3,
      color: '#00CC00'
    },
    {
      name: 'Mikołaj',
      percent: 0.3,
      color: '#0000FF'
    }
  ];
  private radius1: number = 1;
  private radius2: number = 0.9;
  private radius3: number = 0.9;

  private cumulativePercent = 0;

  constructor() {


    this.setupPlayers();
  }

  private setupPlayers() {
    this.players.forEach(player => {
      player.pathOuter = this.createPath(this.cumulativePercent,
        player.percent,
        this.radius1, this.radius2);
      player.pathInner = this.createPath(this.cumulativePercent,    
        player.percent,
        this.radius2, this.radius3);

      this.cumulativePercent += player.percent;
    });
  }

  private createPath(cumulativePercent: number, percent: number, radius: number, innerRadius: number): string {
    // destructuring assignment sets the two variables at once
    const [startX, startY] = this.getCoordinatesForPercent(this.cumulativePercent);

    const [endX, endY] = this.getCoordinatesForPercent(this.cumulativePercent + percent);

    // if the slice is more than 50%, take the large arc (the long way around)
    const largeArcFlag = percent > .5 ? 1 : 0;

    // create an array and join it just for code readability
    return [
      `M ${startX * radius} ${startY * radius}`, // Move
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX * radius} ${endY * radius}`, // Arc
      `L ${endX * radius * innerRadius} ${endY * radius * innerRadius}`, // Line
      `A ${radius * innerRadius} ${radius * innerRadius} 0 ${largeArcFlag} 0 ${startX * radius * innerRadius} ${startY * radius * innerRadius}`
    ].join(' ');
  }

  private getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }

  public shadeBlend(p, c0, c1): string {
    var n = p < 0 ? p * -1 : p, u = Math.round, w = parseInt;
    if (c0.length > 7) {
      let f = c0.split(","), t = (c1 ? c1 : p < 0 ? "rgb(0,0,0)" : "rgb(255,255,255)").split(","), R = w(f[0].slice(4)), G = w(f[1]), B = w(f[2]);
      return "rgb(" + (u((w(t[0].slice(4)) - R) * n) + R) + "," + (u((w(t[1]) - G) * n) + G) + "," + (u((w(t[2]) - B) * n) + B) + ")"
    } else {
      let f = w(c0.slice(1), 16), t = w((c1 ? c1 : p < 0 ? "#000000" : "#FFFFFF").slice(1), 16), R1 = f >> 16, G1 = f >> 8 & 0x00FF, B1 = f & 0x0000FF;
      return "#" + (0x1000000 + (u(((t >> 16) - R1) * n) + R1) * 0x10000 + (u(((t >> 8 & 0x00FF) - G1) * n) + G1) * 0x100 + (u(((t & 0x0000FF) - B1) * n) + B1)).toString(16).slice(1)
    }
  }

}

class Player {
  name: string;
  percent: number;
  pathInner?: string;
  pathOuter?: string;
  color: string;
}
