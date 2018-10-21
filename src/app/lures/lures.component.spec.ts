import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LuresComponent } from './lures.component';

describe('LuresComponent', () => {
  let component: LuresComponent;
  let fixture: ComponentFixture<LuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
