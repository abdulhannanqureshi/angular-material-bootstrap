import { Component, OnInit } from '@angular/core';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.css']
})
export class AccordianComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
  	 config.closeOthers = true;
    config.type = 'info';
   }

  ngOnInit() {
  }

}
