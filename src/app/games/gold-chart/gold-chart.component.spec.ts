import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGoldChartComponent } from './gold-chart.component';

describe('GameGoldChartComponent', () => {
  let component: GameGoldChartComponent;
  let fixture: ComponentFixture<GameGoldChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGoldChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGoldChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
