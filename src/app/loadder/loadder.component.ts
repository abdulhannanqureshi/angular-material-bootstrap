import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loadder',
  templateUrl: './loadder.component.html',
  styleUrls: ['./loadder.component.css']
})
export class LoadderComponent implements OnInit {

  constructor() { }

  	 loading: boolean = false;
	
  startLoading() {
    
  }
  
  ngOnInit() {
  	setTimeout(function () {
        // document.getElementById('load').style.display='none';
         this.loading = false;
    }, 5000);
  }
  
 
}
