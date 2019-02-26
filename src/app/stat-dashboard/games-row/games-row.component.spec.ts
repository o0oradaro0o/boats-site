import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesRowComponent } from './games-row.component';

describe('GamesRowComponent', () => {
  let component: GamesRowComponent;
  let fixture: ComponentFixture<GamesRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
