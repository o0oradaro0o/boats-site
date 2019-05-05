import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsSummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: BoatsSummaryComponent;
  let fixture: ComponentFixture<BoatsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
