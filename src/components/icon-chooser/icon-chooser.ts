import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";


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
  public dataUrl: string = 'assets/icons/andymeneely/originals/svg/police-badge.svg';
  public safeDataUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dataUrl);

  constructor(private sanitizer: DomSanitizer) {
    console.log('Hello IconChooser Component');
    this.text = 'Hello World';
  }



}