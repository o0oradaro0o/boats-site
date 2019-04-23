import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSnapshotComponent } from './player-snapshot.component';

describe('PlayerSnapshotComponent', () => {
  let component: PlayerSnapshotComponent;
  let fixture: ComponentFixture<PlayerSnapshotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerSnapshotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSnapshotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
