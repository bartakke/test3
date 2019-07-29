import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewStudBookComponent } from './view-stud-book.component';

describe('ViewStudBookComponent', () => {
  let component: ViewStudBookComponent;
  let fixture: ComponentFixture<ViewStudBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewStudBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewStudBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
