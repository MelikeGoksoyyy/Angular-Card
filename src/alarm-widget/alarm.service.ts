import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlarmViewComponent } from './alarm-card/alarm-view/alarm-view.component';

 export type AlarmView = {
  id: string,
  name: string,
  time : string,
  roomName : string
}

export interface SpeedSetting {
  id:string,
  name:string,
  value:string
}

export interface AlarmType {
  alarmId:string,
  name:string,
  type:string
}

export type UserAlarmSettings = {
  id: string,
  userId : string,
  speed: SpeedSetting,
  userAlarms: AlarmType[],
}

export interface AlarmCardSettings {
  speedSettings : SpeedSetting[],
  alarmList : AlarmType[];
}

@Injectable()
export class AlarmService {

  constructor(private http: HttpClient) { }

  fetchAlarmView(){
    return this.http.get<any[]>('../../assets/data/alarmView.json');
  }

  fetchAlarmSettings(){
    return this.http.get<any[]>('../../assets/data/alarmSettings.json');
  }

}
