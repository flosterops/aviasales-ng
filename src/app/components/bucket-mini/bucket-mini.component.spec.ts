import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BucketMiniComponent } from './bucket-mini.component';

describe('BucketMiniComponent', () => {
  let component: BucketMiniComponent;
  let fixture: ComponentFixture<BucketMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BucketMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BucketMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
