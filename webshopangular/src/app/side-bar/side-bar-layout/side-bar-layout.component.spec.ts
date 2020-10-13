import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarLayoutComponent } from './side-bar-layout.component';

describe('SideBarLayoutComponent', () => {
  let component: SideBarLayoutComponent;
  let fixture: ComponentFixture<SideBarLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
