import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThroatPageComponent } from './throat-page.component';

describe('ThroatPageComponent', () => {
  let component: ThroatPageComponent;
  let fixture: ComponentFixture<ThroatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThroatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThroatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
