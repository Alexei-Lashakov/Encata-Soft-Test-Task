import { Component, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Output() sended: EventEmitter<number> = new EventEmitter();
  @Input() nowReceived = 0;
  fruits = 100;
  fruitsForSending = 10;

  send(fruitsForSending) {
    this.fruits = this.fruits - this.fruitsForSending;
    this.sended.emit(fruitsForSending);
    this.fruitsForSending = null;
  }

  ngOnChanges() {
    this.fruits = this.fruits + +this.nowReceived;
  }
}