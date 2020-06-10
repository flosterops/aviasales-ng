import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketTicketMiniComponent } from './bucket-ticket-mini.component';

describe('BucketTicketMiniComponent', () => {
  let component: BucketTicketMiniComponent;
  let fixture: ComponentFixture<BucketTicketMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketTicketMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketTicketMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
