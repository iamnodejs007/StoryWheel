import { SymbolService } from './../../services/symbol.service';
import { Component, Output, EventEmitter, Input } from '@angular/core';

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

  @Output() percentChange:EventEmitter<number> = new EventEmitter<number>();

  get percent(): number {
    return this.percentValue;
  }
  set percent(val) {
    this.percentValue = val;
    this.percentChange.emit(this.percentValue);
    this.percentChanged();
  }

  @Input()
  public turnTime: number;
 
  private percentValue: number = 0;
  public barR: number = 0.8;
  public strokeWidth: number = 0.2;
  public barStrokeDashoffset: number = 0;
  public readonly animation: string = "stroke-dashoffset 0.1s linear";
  public animationStyle: string = this.animation;


  private startTime: number = performance.now();
  private timer: number;

  constructor(private symbolService: SymbolService) {
  }
  
  ngOnInit() {
    this.animationStyle = "";
    this.percent = 0;
    

    this.timer = setInterval(x => {
      let currentTime = performance.now();
      if (currentTime - this.startTime >= this.turnTime) {
        this.startTime = performance.now();
        this.animationStyle = "";

        this.symbolService.next();
      } else {
        this.animationStyle = this.animation;
      }
      this.percent = (currentTime - this.startTime) / this.turnTime * 100;
      this.percentChanged();
      this.percentChange.emit(this.percent);
    }, 100);
  }

  ngOnDestroy() {
    clearInterval(this.timer);
  }


  public percentChanged() {
    if (isNaN(this.percent)) {
      this.percent = 100;
    }
    else {
      var r = this.barR;
      var c = Math.PI * (r * 2);

      if (this.percent < 0) { this.percent = 0; }
      if (this.percent > 100) { this.percent = 100; }

      var pct = ((100 - this.percent) / 100) * c;

      this.barStrokeDashoffset = pct;
    }
  }
}
