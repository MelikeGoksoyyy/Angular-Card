import { Component, OnInit } from '@angular/core'
import {CarouselModule} from "angular2-carousel";
import {
  trigger,
  transition,
  query,
  style,
  animate,
  group
} from '@angular/animations';


import {AlarmService} from '../../alarm.service'

@Component({
  selector: 'alarm-view',
  templateUrl: './alarm-view.component.html',
  animations: [
    trigger('slider', [
      transition(":increment", group([
        query(':enter', [
          style({
            left: '100%'
          }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            left: '-100%'
          }))
        ])
      ])),
      transition(":decrement", group([
        query(':enter', [
          style({
            left: '-100%'
          }),
          animate('0.5s ease-out', style('*'))
        ]),
        query(':leave', [
          animate('0.5s ease-out', style({
            left: '100%'
          }))
        ])
      ])),
    ])
  ],
  styles: [`
  
  `]
})
export class AlarmViewComponent implements OnInit {

  constructor(private service : AlarmService) { }
  data = [];

  ngOnInit(){
    this.getDataFromService();
  }

  getDataFromService(){
    this.service.fetchAlarmView()
    .subscribe(result => {
      this.data = result;
    });    
  }

  
}