import { Component, OnInit } from '@angular/core'
import {AlarmService} from '../../alarm.service'


@Component({
  selector: 'app-alarm-view',
  templateUrl: './alarm-view.component.html',
  styleUrls: ['./alarm-view.component.css']
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