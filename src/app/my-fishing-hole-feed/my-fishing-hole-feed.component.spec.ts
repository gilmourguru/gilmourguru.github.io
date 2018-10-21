
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFishingHoleFeedComponent } from './my-fishing-hole-feed.component';

describe('MyFishingHoleFeedComponent', () => {
  let component: MyFishingHoleFeedComponent;
  let fixture: ComponentFixture<MyFishingHoleFeedComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFishingHoleFeedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFishingHoleFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
