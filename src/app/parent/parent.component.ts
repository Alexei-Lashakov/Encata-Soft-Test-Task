import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  transfered = 0;
  forSendingToFirst = 0;
  forSendingToSecond = 0;
  forSendingToThird = 0;

  transferToFirst(amount: number) {
    this.transfered = this.transfered + +amount;
    this.forSendingToFirst = amount;
  }

  transferToSecond(amount: number) {
    this.transfered = this.transfered + +amount;
    this.forSendingToSecond = amount;
  }

  transferToThird(amount: number) {
    this.transfered = this.transfered + +amount;
    this.forSendingToThird = amount;
  }
}
