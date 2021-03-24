import { Component, HostBinding, OnInit } from '@angular/core';

const fruit = ['apple','pear', 'plum', 'lemon', 'carrot'];

@Component({
  selector: 'app-asta-one',
  templateUrl: './asta-one.component.html',
  styleUrls: ['./asta-one.component.css']
})
export class AstaOneComponent implements OnInit {

  @HostBinding('class') className = 'dm-button';


  initialList: Array<string> = [...fruit];

  constructor() { 

  }

  ngOnInit(): void {

  }

}
