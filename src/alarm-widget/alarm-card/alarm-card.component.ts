import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'alarm-card',
  template: `
<div class="scene">
  <button class="btn-primary btn-group-justified" ngbButton (click)="flipIt()">Flip: {{ flipped }}</button>
  <div id="card-animation" class="card" [class.voted]="flipped">
      <div class="card__face card__face--front">
          <alarm-settings></alarm-settings>
      </div>
      <div class="card__face card__face--back">
          <alarm-view></alarm-view>
      </div>
  </div>
</div>
  `,
  styleUrls: ['./alarm-card.component.css']
})
export class AlarmCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  flipped = true;
  flipIt() {
    this.flipped = !this.flipped;
  }

}