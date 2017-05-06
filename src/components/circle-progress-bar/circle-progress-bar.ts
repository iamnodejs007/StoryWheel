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

  @Output() percentChange = new EventEmitter();

  @Input()
  get percent(): number {
    return this.percentValue;
  }
  set percent(val) {
    this.percentValue = val;
    this.percentChange.emit(this.percentValue);
  }
 
  private percentValue: number = 20;
  public barR: number = 0.8;
  public strokeWidth: number = 0.2;
  public barStrokeDashoffset: number = 0;

  constructor() {

    setInterval(x => {
      this.percent = (this.percent + 1) % 100;
      this.percentChanged();
    }, 500);
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
