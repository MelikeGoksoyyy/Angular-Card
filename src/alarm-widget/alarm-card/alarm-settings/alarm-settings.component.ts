import { Component, OnInit } from '@angular/core';
import { AlarmService } from '../../alarm.service'

@Component({
  selector: 'alarm-settings',
  templateUrl: './alarm-settings.component.html',
  styleUrls: ['./alarm-settings.component.css']
})
export class AlarmSettingsComponent implements OnInit {

  settingsData = [];
  constructor(private _service: AlarmService) { }

  ngOnInit() {
    this.fetchSettings();
  }

  fetchSettings() {
    this._service.fetchAlarmSettings().subscribe(result => {
      this.settingsData = result;
      console.log(result);
    })
  }
}
