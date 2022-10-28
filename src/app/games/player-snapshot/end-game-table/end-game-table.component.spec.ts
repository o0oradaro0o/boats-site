import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndGameTableComponent } from './end-game-table.component';

describe('EndGameTableComponent', () => {
  let component: EndGameTableComponent;
  let fixture: ComponentFixture<EndGameTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndGameTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndGameTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
