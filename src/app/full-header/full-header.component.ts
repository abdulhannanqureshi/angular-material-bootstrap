import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full-header',
  templateUrl: './full-header.component.html',
  styleUrls: ['./full-header.component.css']
})
export class FullHeaderComponent implements OnInit {

  silcoLogo = 'assets/img/img_logo.png';
	
  constructor() { }

  ngOnInit() {
  }
  	// for toggle class start
  	statusB:boolean = false;
	clickEvent(){
    	this.statusB = !this.statusB;       
	}
  	// for toggle class end	
}
