import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WijzigExamenvraagComponent } from './wijzig-examenvraag.component';

describe('WijzigExamenvraagComponent', () => {
  let component: WijzigExamenvraagComponent;
  let fixture: ComponentFixture<WijzigExamenvraagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WijzigExamenvraagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WijzigExamenvraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
