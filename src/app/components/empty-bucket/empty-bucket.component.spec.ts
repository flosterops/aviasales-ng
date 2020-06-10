import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBucketComponent } from './empty-bucket.component';

describe('EmptyBucketComponent', () => {
  let component: EmptyBucketComponent;
  let fixture: ComponentFixture<EmptyBucketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyBucketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyBucketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
