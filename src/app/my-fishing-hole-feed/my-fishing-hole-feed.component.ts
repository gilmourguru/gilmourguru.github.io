import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { MyFishingHoleFeedDataSource, MyFishingHoleFeedItem } from './my-fishing-hole-feed-datasource';
import { AngularFireDatabase } from 'angularfire2/database';
import { pipe, Subscription } from 'rxjs';
import { map, first } from 'rxjs/operators';

@Component({
  selector: 'my-fishing-hole-feed',
  templateUrl: './my-fishing-hole-feed.component.html',
  styleUrls: ['./my-fishing-hole-feed.component.css']
})
export class MyFishingHoleFeedComponent implements OnInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MyFishingHoleFeedDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nickName', 'river', 'accessRoad', 'city', 'state', 'geoCode', 'riverLevel'];
  subscription: Subscription;

  constructor(private db: AngularFireDatabase) {

  }

  ngOnInit() {
    this.subscription = this.db.list<MyFishingHoleFeedItem>('my-fishing-holes').valueChanges().pipe(first()).subscribe(d=>{
      console.log('data streaming');
      this.dataSource = new MyFishingHoleFeedDataSource(this.paginator, this.sort);
      this.dataSource.data = d;
    });
    
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

}
