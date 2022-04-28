import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root-page',
  templateUrl: './root-page.component.html',
  styleUrls: ['./root-page.component.sass'],
})
export class RootPageComponent implements OnInit {
  panelOpenState = false;
  pagename = 'Root';
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
