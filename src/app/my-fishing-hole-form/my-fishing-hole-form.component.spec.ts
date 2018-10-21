
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFishingHoleFormComponent } from './my-fishing-hole-form.component';

describe('MyFishingHoleFormComponent', () => {
  let component: MyFishingHoleFormComponent;
  let fixture: ComponentFixture<MyFishingHoleFormComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFishingHoleFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyFishingHoleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
