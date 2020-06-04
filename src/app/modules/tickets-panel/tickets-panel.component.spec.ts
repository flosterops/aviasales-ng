import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsPanelComponent } from './tickets-panel.component';

describe('TicketsPanelComponent', () => {
  let component: TicketsPanelComponent;
  let fixture: ComponentFixture<TicketsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
