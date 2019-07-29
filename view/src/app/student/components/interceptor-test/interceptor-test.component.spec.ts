import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterceptorTestComponent } from './interceptor-test.component';

describe('InterceptorTestComponent', () => {
  let component: InterceptorTestComponent;
  let fixture: ComponentFixture<InterceptorTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterceptorTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterceptorTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
