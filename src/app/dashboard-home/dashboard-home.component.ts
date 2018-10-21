import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})
export class DashboardHomeComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Trout', cols: 1, rows: 1, path: '/trout-cards', photo: '../../assets/images/brown_trout_1.jpg' },
          { title: 'Lures', cols: 1, rows: 1, path: '/lures', photo: '../../assets/images/rooster_tail_brown.png' },
          { title: 'Flies & Nymphs', cols: 1, rows: 1, path: '/flies', photo: '../../assets/images/blue_wing_olive.jpg' },
          { title: 'My Fishing Holes', cols: 1, rows: 1, path: '/my-fishing-holes', photo: '../../assets/images/fishing_hole.jpg' }
        ];
      }

      return [
        { title: 'Trout', cols: 1, rows: 1, path: '/trout-cards', photo: '../../assets/images/brown_trout_1.jpg' },
        { title: 'Lures', cols: 1, rows: 1, path: '/lures', photo: '../../assets/images/rooster_tail_brown.png' },
        { title: 'Flies & Nymphs', cols: 1, rows: 1, path: '/flies', photo: '../../assets/images/blue_wing_olive.jpg' },
        { title: 'My Fishing Holes', cols: 1, rows: 1, path: '/my-fishing-holes', photo: '../../assets/images/fishing_hole.jpg' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
