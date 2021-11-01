import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']


  
})
export class ShopComponent implements OnInit {

  title = 'Activity 3 Part 1';
  question = 'Whats your name?';
  answer2 = 'unknown';

  appForm = new FormGroup({ 
    answer333: new FormControl(''), 
    
  }); 
  
  constructor() {
    
   }

  ngOnInit(): void {
    
  }

  onSubmit(data : any) 
  { 
    this.answer2 = data.answer333; 
    console.log("Your name is:: " + this.answer2); 
  } 

  

  
}