
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroutCardsComponent } from './trout-cards.component';

describe('TroutCardsComponent', () => {
  let component: TroutCardsComponent;
  let fixture: ComponentFixture<TroutCardsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TroutCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TroutCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
