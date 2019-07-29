import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudRequestComponent } from './stud-request.component';

describe('StudRequestComponent', () => {
  let component: StudRequestComponent;
  let fixture: ComponentFixture<StudRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
