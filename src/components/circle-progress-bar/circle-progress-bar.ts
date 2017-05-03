import { Component } from '@angular/core';

/**
 * Generated class for the CircleProgressBar component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'circle-progress-bar',
  templateUrl: 'circle-progress-bar.html'
})
export class CircleProgressBar {

  public percent: string;
  public percentValue: number = 20;
  public barR: number = 90;
  public strokeWidth: number = 10;
  public barStrokeDashoffset: number = 0;
  public barStyle: string;

  // private innerRadius: number = 0.9;
  private outerRadius: number = 1;

  public players: Player[] = [
    {
      name: 'Adrian',
      percent: 0.4,
      color: 'red'
    },
    {
      name: 'Monika',
      percent: 0.3,
      color: 'green'
    },
    {
      name: 'Mikołaj',
      percent: 0.3,
      color: 'blue'
    }
  ];

  private cumulativePercent = 0;

  constructor() {
    console.log('Hello CircleProgressBar Component');

    setInterval(x => {
      this.percentValue = (this.percentValue + 1) % 100;
      this.percentChanged();
    }, 500);

    this.setupPlayers();
  }

  private setupPlayers() {
    this.players.forEach(player => {
      player.pathOuter = this.createPath(this.cumulativePercent,    
        player.percent,
        this.outerRadius, 0.9);
      // player.pathInner = this.createPath(this.cumulativePercent,    
      //   player.percent,
      //   this.innerRadius);

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
      `L ${endX * radius*innerRadius} ${endY * radius*innerRadius}`, // Line
      `A ${radius*innerRadius} ${radius*innerRadius} 0 ${largeArcFlag} 0 ${startX * radius*innerRadius} ${startY * radius*innerRadius}`
    ].join(' ');
  }

  private getCoordinatesForPercent(percent) {
    const x = Math.cos(2 * Math.PI * percent);
    const y = Math.sin(2 * Math.PI * percent);
    return [x, y];
  }


  public percentChanged() {
    //this.percentValue = parseInt(this.percent);

    if (isNaN(this.percentValue)) {
      this.percentValue = 100;
    }
    else {
      var r = this.barR;
      var c = Math.PI * (r * 2);

      if (this.percentValue < 0) { this.percentValue = 0; }
      if (this.percentValue > 100) { this.percentValue = 100; }

      var pct = ((100 - this.percentValue) / 100) * c;

      this.barStrokeDashoffset = pct;
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
