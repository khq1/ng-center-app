import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarPlexusPageComponent } from './solar-plexus-page.component';

describe('SolarPlexusPageComponent', () => {
  let component: SolarPlexusPageComponent;
  let fixture: ComponentFixture<SolarPlexusPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolarPlexusPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarPlexusPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
