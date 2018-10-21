import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lures',
  templateUrl: './lures.component.html',
  styleUrls: ['./lures.component.css']
})
export class LuresComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Brown Roostertail', cols: 1, rows: 1, 
          content: "1/8oz"},
          { title: 'Rainbow Roostertail', cols: 1, rows: 1, 
          content: "1/8oz"}
        ];
      }

      return [
        { title: 'Brown Roostertail', cols: 1, rows: 1, 
          content: "1/8oz"},
          { title: 'Rainbow Roostertail', cols: 1, rows: 1, 
          content: "1/8oz"}
      ];
    })
  );

  pg_title = 'Lures for Trout';

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
  }

}
