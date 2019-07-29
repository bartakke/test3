import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotolMembersComponent } from './totol-members.component';

describe('TotolMembersComponent', () => {
  let component: TotolMembersComponent;
  let fixture: ComponentFixture<TotolMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotolMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotolMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
