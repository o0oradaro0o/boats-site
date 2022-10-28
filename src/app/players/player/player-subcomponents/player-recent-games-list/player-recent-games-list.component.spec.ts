import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerRecentGamesListComponent } from './player-recent-games-list.component';

describe('PlayerRecentGamesListComponent', () => {
  let component: PlayerRecentGamesListComponent;
  let fixture: ComponentFixture<PlayerRecentGamesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRecentGamesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRecentGamesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
