import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredBooksComponent } from './expired-books.component';

describe('ExpiredBooksComponent', () => {
  let component: ExpiredBooksComponent;
  let fixture: ComponentFixture<ExpiredBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
