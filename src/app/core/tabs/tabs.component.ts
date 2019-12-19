import { Component, OnInit } from '@angular/core';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

constructor(config: NgbTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'start';
    config.type = 'pills';
  }

  ngOnInit() {
  }

}
