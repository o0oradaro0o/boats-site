import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { itemsSummaryComponent } from './summary.component';

describe('SummaryComponent', () => {
  let component: itemsSummaryComponent;
  let fixture: ComponentFixture<itemsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ itemsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(itemsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
