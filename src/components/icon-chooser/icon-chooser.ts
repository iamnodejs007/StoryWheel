import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import {Http} from '@angular/http';


/**
 * Generated class for the IconChooser component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'icon-chooser',
  templateUrl: 'icon-chooser.html'
})
export class IconChooser {

  private icons: IconDetail[];

  private history: IconDetail[] = [];
  private current:  IconDetail;
  public svgIcon: SafeHtml;

  constructor(private sanitizer: DomSanitizer, private http: Http) {
    this.http.get('assets/icons/icons.json').subscribe(x => {
      this.icons = x.json();
      this.showIcon(this.icons[251]);
    });
  }

  private showIcon(icon: IconDetail): void {
    this.current = icon;
    this.getIconSvg(this.current);
  }

  private getIconSvg(icon: IconDetail) {
    this.http.get('assets/icons' + icon.FileName)
    .subscribe(x =>  {
      this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(x.text());
    });
  }

  public next() {
    this.history.push(this.current);
    var number = Math.round(Math.random()*this.icons.length);
    this.showIcon(this.icons[number]);
  }

  public prev() {
    this.showIcon(this.history.pop());
  }
}

class IconDetail {
  public FileName: string;
  public Tags: string[];
}