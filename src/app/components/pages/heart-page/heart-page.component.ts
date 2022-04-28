import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heart-page',
  templateUrl: './heart-page.component.html',
  styleUrls: ['./heart-page.component.sass'],
})
export class HeartPageComponent implements OnInit {
  panelOpenState = false;
  pagename = 'Heart';
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
