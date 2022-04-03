import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioMenuComponent } from './radio-menu.component';

describe('RadioMenuComponent', () => {
  let component: RadioMenuComponent;
  let fixture: ComponentFixture<RadioMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
