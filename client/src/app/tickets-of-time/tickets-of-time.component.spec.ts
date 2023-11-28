import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsOfTimeComponent } from './tickets-of-time.component';

describe('TicketsOfTimeComponent', () => {
  let component: TicketsOfTimeComponent;
  let fixture: ComponentFixture<TicketsOfTimeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsOfTimeComponent]
    });
    fixture = TestBed.createComponent(TicketsOfTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
