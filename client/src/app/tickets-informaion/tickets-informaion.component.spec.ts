import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsInformaionComponent } from './tickets-informaion.component';

describe('TicketsInformaionComponent', () => {
  let component: TicketsInformaionComponent;
  let fixture: ComponentFixture<TicketsInformaionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketsInformaionComponent]
    });
    fixture = TestBed.createComponent(TicketsInformaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
