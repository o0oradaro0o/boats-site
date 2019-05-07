import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerStatsOverviewComponent } from './player-stats-overview.component';

describe('PlayerStatsOverviewComponent', () => {
  let component: PlayerStatsOverviewComponent;
  let fixture: ComponentFixture<PlayerStatsOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerStatsOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerStatsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
