import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesSummaryComponent } from './summary.component';

describe('GamesSummaryComponent', () => {
  let component: GamesSummaryComponent;
  let fixture: ComponentFixture<GamesSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
