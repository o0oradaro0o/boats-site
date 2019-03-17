import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGeneralDataComponent } from './game-general-data.component';

describe('GameGeneralDataComponent', () => {
  let component: GameGeneralDataComponent;
  let fixture: ComponentFixture<GameGeneralDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGeneralDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGeneralDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
