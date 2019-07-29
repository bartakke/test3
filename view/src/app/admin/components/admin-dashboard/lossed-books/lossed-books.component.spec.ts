import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LossedBooksComponent } from './lossed-books.component';

describe('LossedBooksComponent', () => {
  let component: LossedBooksComponent;
  let fixture: ComponentFixture<LossedBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LossedBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LossedBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
