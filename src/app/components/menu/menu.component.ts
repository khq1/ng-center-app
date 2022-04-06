import { Component, Input, OnInit } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass'],
})
export class MenuComponent implements OnInit {
  constructor() {}
  title = 'ng-center-app';
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}
