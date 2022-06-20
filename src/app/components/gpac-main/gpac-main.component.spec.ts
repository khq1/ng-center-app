import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GpacMainComponent } from './gpac-main.component';

describe('GpacMainComponent', () => {
  let component: GpacMainComponent;
  let fixture: ComponentFixture<GpacMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GpacMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GpacMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
