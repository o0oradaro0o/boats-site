import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTimelineComponent } from './timeline.component';

describe('GameTimelineComponent', () => {
  let component: GameTimelineComponent;
  let fixture: ComponentFixture<GameTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
