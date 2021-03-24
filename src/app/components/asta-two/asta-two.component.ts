import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-asta-two',
  template: `<p> {{number}} </p>`
})
export class AstaTwoComponent {

  @Output() counterEmitter = new EventEmitter<number>();

  number = 0;

  inc() {
    ++this.number;
    this.counterEmitter.emit(this.number);
  } 
  
  dec() {
    --this.number;
  }

}
