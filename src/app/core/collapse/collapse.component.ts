import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
	public isCollapsed = true;

	public isCollapsed1 = true;
  constructor() { }

  ngOnInit() {
  }

}
