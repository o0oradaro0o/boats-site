import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesAggregateComponent } from './games-aggregate.component';

describe('GamesAggregateComponent', () => {
  let component: GamesAggregateComponent;
  let fixture: ComponentFixture<GamesAggregateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesAggregateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesAggregateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
