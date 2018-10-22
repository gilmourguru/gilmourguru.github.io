import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { WeatherService } from '../weather.service';
import { startCase } from '../../../node_modules/lodash';

@Component({
  selector: 'my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
  
})



export class MyNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    title = 'Fishing the Taylor with Taylor';
    city = 'Almont, CO: ';
    
    weather = '?';
    temp: number;
    iconCode = '';
    night: boolean = false;
    month: number;
    date: number;
    year: number;
    hour: number;
    minute: number;
    sec: number;
    iconUrl: string;
    time: string;
    fullDate: string;
    amPm = 'am';
    
  constructor(private breakpointObserver: BreakpointObserver, public weatherService: WeatherService) {

  }

  ngOnInit() {
    this.weatherService.getCurrentWeather(this.city).subscribe(x => {
      

      this.weather = startCase(x.weather.description);
      let decTemp = x.temp;
      this.temp = Math.round(decTemp);
      this.iconCode = x.weather.icon;
      this.setWxIconUrl(this.iconCode);
      this.getCurrentTime();
    });
  }

  

  setWxIconUrl(code: string) {
    this.iconUrl = '../../assets/icons/weather/' + code + '.png';
    
  }

  getCurrentTime() {
    let today = new Date();
    this.hour = today.getHours();
    if (this.hour >= 12) {
      this.amPm = 'pm';
    }
    if (this.hour > 12) {
      this.hour = this.hour % 12;
    }
    this.minute = today.getMinutes();
    this.sec = today.getSeconds();
    this.time = this.hour + ':' + this.minute + ':' + this.sec + this.amPm;
    console.log(this.time);
    this.month = today.getMonth() + 1;
    this.date = today.getDate();
    this.year = today.getFullYear();
    this.fullDate = this.month + '/' + this.date + '/' + this.year;
    console.log(this.fullDate);
    let dateTime = [ this.fullDate, this.time ];
    
    return dateTime;

  }
  
  }
