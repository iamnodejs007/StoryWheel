import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
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

  text: string;
  private icons: IconDetail[];

  private history: IconDetail[] = [];
  private current: IconDetail;

  constructor(private sanitizer: DomSanitizer, private http: Http) {
    console.log('Hello IconChooser Component');
    this.text = 'Hello World';

    this.http.get('assets/icons/icons.json').subscribe(x => {
      this.icons = x.json();
      this.current = this.icons[250];
    });
  }

  private createIconUrl(icon: IconDetail) : SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons' + icon.FileName);
  }

  public getSafeIconUrl(): SafeResourceUrl {
    if (!this.current)
      return;
    return this.createIconUrl(this.current);
  }

  public next() {
    this.history.push(this.current);
    var number = Math.round(Math.random()*this.icons.length);
    this.current = this.icons[number];
  }

  public prev() {
    this.current = this.history.pop();
  }



}

class IconDetail {
  public FileName: string;
  public Tags: string[];
}