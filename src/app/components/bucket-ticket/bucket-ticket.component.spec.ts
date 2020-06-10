import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketTicketComponent } from './bucket-ticket.component';

describe('BucketTicketComponent', () => {
  let component: BucketTicketComponent;
  let fixture: ComponentFixture<BucketTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
