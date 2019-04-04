import {Component,ViewChild,AfterViewInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatAutocompleteTrigger} from '@angular/material'

/**
 * @title Simple autocomplete
 */
@Component({
  selector: 'autocomplete-simple-example',
  templateUrl: 'autocomplete-simple-example.html',
  styleUrls: ['autocomplete-simple-example.css'],
})
export class AutocompleteSimpleExample implements AfterViewInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  @ViewChild( 'typehead', {read:MatAutocompleteTrigger})  autoTrigger: MatAutocompleteTrigger; 
  checkVisible(event)
  {
    console.log(event)
  }
  ngAfterViewInit()
  {
    this.autoTrigger.panelClosingActions.subscribe( x =>{
      if (this.autoTrigger.activeOption)
      {
        console.log(this.autoTrigger.activeOption.value)
        this.myControl.setValue(this.autoTrigger.activeOption.value)
        }
    } )
  }
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */