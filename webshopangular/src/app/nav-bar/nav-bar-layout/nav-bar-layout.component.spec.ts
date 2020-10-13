import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarLayoutComponent } from './nav-bar-layout.component';

describe('NavBarLayoutComponent', () => {
  let component: NavBarLayoutComponent;
  let fixture: ComponentFixture<NavBarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
