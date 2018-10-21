import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JumboHomeComponent } from './jumbo-home.component';

describe('JumboHomeComponent', () => {
  let component: JumboHomeComponent;
  let fixture: ComponentFixture<JumboHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JumboHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JumboHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
