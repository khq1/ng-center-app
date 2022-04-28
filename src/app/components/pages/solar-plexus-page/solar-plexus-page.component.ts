import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solar-plexus-page',
  templateUrl: './solar-plexus-page.component.html',
  styleUrls: ['./solar-plexus-page.component.sass'],
})
export class SolarPlexusPageComponent implements OnInit {
  panelOpenState = false;
  pagename = 'Solar';
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
