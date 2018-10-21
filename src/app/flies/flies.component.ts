import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-flies',
  templateUrl: './flies.component.html',
  styleUrls: ['./flies.component.css']
})
export class FliesComponent implements OnInit {

  isExpand: boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  mayflyCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          {
            avatar: 'src/assets/icons/icon-blue-wing-olive-512x512.png', 
            title: ' Blue Wing Olive', cols: 1, rows: 1,
            season: ' September - April (winter)',
            colors: ' Green/Olive',
            sizes: " #16 - #24"
          },
          {
            avatar: 'src/assets/icons/icon-blue-wing-olive-512x512.png', 
            title: ' Green Drakes', cols: 1, rows: 1,
            season: ' June - August',
            colors: ' Olive/Green',
            sizes: " #8 - #14"
          },
          {
            avatar: 'src/assets/icons/icon-blue-wing-olive-512x512.png', 
            title: ' Mahogany Dun', cols: 1, rows: 1,
            season: ' September - October',
            colors: ' Red, Brown',
            sizes: " #10 - #16"
          },
          {
            avatar: 'src/assets/icons/icon-blue-wing-olive-512x512.png', 
            title: ' Pale Morning Dun', cols: 1, rows: 1,
            season: ' June - Mid September',
            colors: ' White, Yellow',
            sizes: " #14 - #20"
          },
          {
            avatar: 'src/assets/icons/icon-blue-wing-olive-512x512.png', 
            title: ' Trico Mayflies', cols: 1, rows: 1,
            season: ' Mid July - Mid September',
            colors: ' Black, White, Grey',
            sizes: " #18 - #26"
          }
        ];
      }

      return [
        {
          avatar: 'src/assets/icons/icon-blue-wing-olive-512x512.png', 
          title: ' Blue Wing Olive', cols: 1, rows: 1,
          season: ' September - April (winter)',
          colors: ' Green/Olive',
          sizes: " #16 - #24"
        },
        {
          avatar: 'src/assets/icons/icon-green-drake-512x512.png', 
          title: ' Green Drakes', cols: 1, rows: 1,
          season: ' June - August',
          colors: ' Olive/Green',
          sizes: " #8 - #14"
        },
        {
          avatar: 'icon-blue-wing-olive-512x512.png', 
          title: ' Mahogany Dun', cols: 1, rows: 1,
          season: ' September - October',
          colors: ' Red, Brown',
          sizes: " #10 - #16"
        },
        {
          avatar: 'icon-blue-wing-olive-512x512.png', 
          title: ' Pale Morning Dun', cols: 1, rows: 1,
          season: ' June - Mid September',
          colors: ' White, Yellow',
          sizes: " #14 - #20"
        },
        {
          avatar: 'icon-blue-wing-olive-512x512.png', 
          title: ' Trico Mayflies', cols: 1, rows: 1,
          season: ' Mid July - Mid September',
          colors: ' Black, White, Grey',
          sizes: " #18 - #26"
        }
      ];
    })
  );

  midgeCard = {
    title: 'Midges', cols: 1, rows: 1,
    content: 'Midges hatch year round, but their most effective time of year to attract trout is Sept - April (winter).',
    colors: 'Black, White, Gray, Cream, Olive, Red, Brown, Blue, and Purple',
    sizes: "#16 - #24"
  };
  pg_title = 'Flies & Nymphs';
  mayflyHdr = 'Mayfly Hatches';
  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    
  }
  togglePhotoExpand(){
    this.isExpand = !this.isExpand;
  }
}
