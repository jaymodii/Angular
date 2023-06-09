import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDropDownAnimatedComponent } from './demo-drop-down-animated.component';

describe('DemoDropDownAnimatedComponent', () => {
  let component: DemoDropDownAnimatedComponent;
  let fixture: ComponentFixture<DemoDropDownAnimatedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DemoDropDownAnimatedComponent]
    });
    fixture = TestBed.createComponent(DemoDropDownAnimatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
