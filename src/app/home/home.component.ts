import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homeCard = {
    title: 'Welcome to Taylor Park: Trout Country', 
    content: 'I was named after, baptized in, fished, fell in, and rafted the Taylor river going back to age 2.  Let me show you what I\'ve learned after 35 years of visiting Taylor Park.', 
    photo: '../assets/images/cottonwood_pass_1.jpg'
  };

  constructor() { }

  ngOnInit() {
  }

}
