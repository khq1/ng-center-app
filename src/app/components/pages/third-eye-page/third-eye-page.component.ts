import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-eye',
  templateUrl: './third-eye-page.component.html',
  styleUrls: ['./third-eye-page.component.sass'],
})
export class ThirdEyeComponent implements OnInit {
  panelOpenState = false;
  pagename = 'Third-Eye';
  constructor() {}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
