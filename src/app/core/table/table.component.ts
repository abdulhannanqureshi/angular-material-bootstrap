import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
 
 	public data : any
  
  constructor() { }

  ngOnInit() { }

  users = [
  {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  }, 
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  },
   {
   name: 'jondoe',
   email: 'abc@xyz.com',
   website: 'abc.com'   
  }
  ]
}
