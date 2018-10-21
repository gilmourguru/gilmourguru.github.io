import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFishingHolesComponent } from './my-fishing-holes.component';

describe('MyFishingHolesComponent', () => {
  let component: MyFishingHolesComponent;
  let fixture: ComponentFixture<MyFishingHolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyFishingHolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyFishingHolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
