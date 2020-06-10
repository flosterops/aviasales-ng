import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiterRowComponent } from './fiter-row.component';

describe('FiterRowComponent', () => {
  let component: FiterRowComponent;
  let fixture: ComponentFixture<FiterRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiterRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiterRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
