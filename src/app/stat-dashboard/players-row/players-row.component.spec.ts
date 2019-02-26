import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersRowComponent } from './players-row.component';

describe('PlayersRowComponent', () => {
  let component: PlayersRowComponent;
  let fixture: ComponentFixture<PlayersRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
