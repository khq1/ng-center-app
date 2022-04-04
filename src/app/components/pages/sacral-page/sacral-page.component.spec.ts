import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SacralPageComponent } from './sacral-page.component';

describe('SacralPageComponent', () => {
  let component: SacralPageComponent;
  let fixture: ComponentFixture<SacralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SacralPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SacralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
