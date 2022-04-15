import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-throat-page',
  templateUrl: './throat-page.component.html',
  styleUrls: ['./throat-page.component.sass'],
})
export class ThroatPageComponent implements OnInit {
  panelOpenState = false;
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
