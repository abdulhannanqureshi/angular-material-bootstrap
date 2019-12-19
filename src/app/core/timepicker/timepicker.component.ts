import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timepicker',
  templateUrl: './timepicker.component.html',
  styleUrls: ['./timepicker.component.css']
})
export class TimepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
	timeSimple = {hour: 13, minute: 30};
		time = {hour: 13, minute: 30};
}
