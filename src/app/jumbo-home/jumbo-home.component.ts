import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jumbo-home',
  templateUrl: './jumbo-home.component.html',
  styleUrls: ['./jumbo-home.component.css']
})
export class JumboHomeComponent implements OnInit {

  title_1 = 'Fishing the Taylor';
  title_2 = 'with';
  title_3 = 'Taylor';

  constructor() { }

  ngOnInit() {
  }

}
