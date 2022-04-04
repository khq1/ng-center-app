import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdEyeComponent } from './third-eye-page.component';

describe('ThirdEyeComponent', () => {
  let component: ThirdEyeComponent;
  let fixture: ComponentFixture<ThirdEyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdEyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
