import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  @Input() name : string | undefined;
  quantity: any;
  products: any;
  selectedProduct: any;

  constructor() { 
    
  }


  ngOnInit(): void {
    this.quantity = "";
    this.selectedProduct = "PC";
    this.products = ["Keyboard", "Mouse", "graphics card", "ram", "motherboard", "PSU", "monitor", "hdmi cable", "cpu", "windows 10 software"];
    
  }

  ngInfo()
  {
    this.selectedProduct = "";
    this.quantity = "";
  }

  onSubmit() 
  { 
    console.log("Quantity: " + this.quantity); 
    console.log("Selected product: " + this.selectedProduct);
  }

}
