import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPurchaseHistoryComponent } from './player-purchase-history.component';

describe('PlayerPurchaseHistoryComponent', () => {
  let component: PlayerPurchaseHistoryComponent;
  let fixture: ComponentFixture<PlayerPurchaseHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerPurchaseHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerPurchaseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
