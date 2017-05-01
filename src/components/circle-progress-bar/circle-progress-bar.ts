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
  public barStrokeDashoffset: number = 0;
  public barStyle: string;

  constructor() {
    console.log('Hello CircleProgressBar Component');

    setInterval(x => {
      this.percentValue = (this.percentValue + 1) % 100;
      this.percentChanged();
    }, 500);
  }

  public percentChanged() {
    //this.percentValue = parseInt(this.percent);

    if (isNaN(this.percentValue)) {
      this.percentValue = 100;
    }
    else
    {
      var r = this.barR;
      var c = Math.PI*(r*2);

      if (this.percentValue < 0) { this.percentValue = 0;}
      if (this.percentValue > 100) { this.percentValue = 100;}

      var pct = ((100-this.percentValue)/100)*c;

      this.barStrokeDashoffset = pct;
    }
  }




  // $('#percent').on('change', function(){
  // var val = parseInt($(this).val());
  // var $circle = $('#svg #bar');

  // if (isNaN(val)) {
  //  val = 100; 
  // }
  // else{
  //   var r = $circle.attr('r');
  //   var c = Math.PI*(r*2);

  //   if (val < 0) { val = 0;}
  //   if (val > 100) { val = 100;}

  //   var pct = ((100-val)/100)*c;

  //   $circle.css({ strokeDashoffset: pct});

  //   $('#cont').attr('data-pct',val);
  //    }
  // });

}
