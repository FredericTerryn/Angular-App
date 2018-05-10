import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackcreateComponent } from './feedbackcreate.component';

describe('FeedbackcreateComponent', () => {
  let component: FeedbackcreateComponent;
  let fixture: ComponentFixture<FeedbackcreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackcreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
