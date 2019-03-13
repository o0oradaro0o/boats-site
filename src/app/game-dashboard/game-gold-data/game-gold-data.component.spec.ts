import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGoldDataComponent } from './game-gold-data.component';

describe('GameGoldDataComponent', () => {
  let component: GameGoldDataComponent;
  let fixture: ComponentFixture<GameGoldDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGoldDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGoldDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
