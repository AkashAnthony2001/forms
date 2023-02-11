import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
selectedProduct:any;
  constructor(private route:Router){}
  product:any[]=[{
    id:101,
    name:"Empty Can",
    url:"../assets/01.jpg",
    description:"A empty can with no label on it .",
    price:20
  },
  {
    id:102,
    name:"Coke Can",
    url:"../assets/02.jpg",
    description:"A empty can with no label on it .",
    price:20
    
  },
  {
    id:103,
    name:"Coca Cola",
    url:"../assets/03.jpg",
    description:"A empty can with Coca Cola label on it .",
    price:20

  },
  {
    id:104,
    name:"Coke Tin",
    url:"../assets/04.jpg",
    description:"A empty can with Coke label on it .",
    price:20

  },
  {
    id:105,
    name:"Red Sipper",
    url:"../assets/05.jpg",
    description:"A empty sipper with no label on it .",
    price:20

  }];

  addtocart(){
    this.route.navigateByUrl("add")
  }
  addcart(i:any){
    this.selectedProduct = i ;
    this.route.navigateByUrl("add");
  }
}
