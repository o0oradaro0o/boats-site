import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoatsComponent } from './boats.component';

describe('BoatsComponent', () => {
  let component: BoatsComponent;
  let fixture: ComponentFixture<BoatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
