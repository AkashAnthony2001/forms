import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddcartService {

  constructor() { }


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

  cart:any[]=[]

  fetchprod(){
    return this.product;  
  }

  fetchcart(){
    return this.cart;
  }
  
}
