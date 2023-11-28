import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryOrderComponent } from './entry-order.component';

describe('EntryOrderComponent', () => {
  let component: EntryOrderComponent;
  let fixture: ComponentFixture<EntryOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EntryOrderComponent]
    });
    fixture = TestBed.createComponent(EntryOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
