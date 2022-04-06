import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crown-page',
  templateUrl: './crown-page.component.html',
  styleUrls: ['./crown-page.component.sass'],
})
export class CrownPageComponent implements OnInit {
  panelOpenState = false;
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
