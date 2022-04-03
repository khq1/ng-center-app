import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-radio-menu',
  templateUrl: './radio-menu.component.html',
  styleUrls: ['./radio-menu.component.sass'],
})
export class RadioMenuComponent implements OnInit {
  constructor(private router: Router) {}

  public buttonClick(fragment: string): void {
    this.router.navigate(['/app-homepage']).then(() => {
      window.location.hash = fragment;
    });
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}
}