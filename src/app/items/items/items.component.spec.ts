import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { itemsComponent } from './items.component';

describe('itemsComponent', () => {
  let component: itemsComponent;
  let fixture: ComponentFixture<itemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ itemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(itemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
