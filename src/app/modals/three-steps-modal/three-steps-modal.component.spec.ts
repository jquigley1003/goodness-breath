import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThreeStepsModalComponent } from './three-steps-modal.component';

describe('ThreeStepsModalComponent', () => {
  let component: ThreeStepsModalComponent;
  let fixture: ComponentFixture<ThreeStepsModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeStepsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeStepsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
