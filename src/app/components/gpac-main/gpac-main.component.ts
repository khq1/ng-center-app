import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-gpac-main',
  templateUrl: './gpac-main.component.html',
  styleUrls: ['./gpac-main.component.sass'],
})
export class GpacMainComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  onChangeEvent(ob: MatCheckboxChange) {
    
    console.log(ob.source.id + ' checkbox set to ' + ob.checked);
  }
}
