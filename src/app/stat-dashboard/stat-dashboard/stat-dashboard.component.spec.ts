import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatDashboardComponent } from './stat-dashboard.component';

describe('StatDashboardComponent', () => {
  let component: StatDashboardComponent;
  let fixture: ComponentFixture<StatDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
