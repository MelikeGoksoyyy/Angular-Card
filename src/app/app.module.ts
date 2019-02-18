import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {AlarmService} from '../alarm-widget/alarm.service';
import { HttpClientModule } from '@angular/common/http'; 

import {AlarmViewComponent} from '../alarm-widget/alarm-card/alarm-view/alarm-view.component';
import {AlarmSettingsComponent} from '../alarm-widget/alarm-card/alarm-settings/alarm-settings.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, AlarmViewComponent ,AlarmSettingsComponent],
  bootstrap:    [ AppComponent ],
  providers:    [AlarmService]
})
export class AppModule { }
