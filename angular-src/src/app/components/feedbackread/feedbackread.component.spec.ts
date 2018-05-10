import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackreadComponent } from './feedbackread.component';

describe('FeedbackreadComponent', () => {
  let component: FeedbackreadComponent;
  let fixture: ComponentFixture<FeedbackreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedbackreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
