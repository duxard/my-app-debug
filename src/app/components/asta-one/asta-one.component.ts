import { Component, HostBinding, OnInit } from '@angular/core';
import { from } from 'rxjs';

import { increaseValueTimes, processValue } from './utils/helpers';

const fruit = ['apple','pear', 'plum', 'lemon', 'carrot'];

@Component({
  selector: 'app-asta-one',
  templateUrl: './asta-one.component.html',
  styleUrls: ['./asta-one.component.css']
})
export class AstaOneComponent implements OnInit {

  @HostBinding('class') className = 'dm-button';


  initialList: Array<string> = [...fruit];
  counter: number;
  finalResult: number;

  constructor() { 
    this.counter = 0;
    this.finalResult = 0;
  }

  ngOnInit(): void {
    this.startup();
  }

  startup() {
    debugger;
    console.log('startup');
    let increasedValue = increaseValueTimes(this.counter, 10);
    processValue(increasedValue)
      .then(data => {
        this.finalResult = data;
        console.log(this.finalResult);
      })
      .catch(err => console.error(err));
  }

}
