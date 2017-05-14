import { SymbolService } from './../../services/symbol.service';
import { Component } from '@angular/core';

/**
 * Generated class for the IconControls component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'icon-controls',
  templateUrl: 'icon-controls.html'
})
export class IconControls {

  text: string;

  constructor(private symbolService: SymbolService) {
    console.log('Hello IconControls Component');
    this.text = 'Hello World';

    this.symbolService.onChange.subscribe(symbol => { this.text = symbol.Tags; });
  }

  public next() {
    console.log('Next');
    this.symbolService.next();
    console.log(this.symbolService.currentSymbol.Tags);
  }

  public previous() {
    console.log("Prev");
    this.symbolService.prev();
  }

}
