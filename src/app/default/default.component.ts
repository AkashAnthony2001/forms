import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddcartService } from '../addcart.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent {
selectedProduct:any[]=[];
products:any[]=[]
  constructor(private route:Router , private add : AddcartService){
    this.products=this.add.fetchprod();
  }
  addcart(i:any){
    this.add.fetchcart(i)
    this.route.navigateByUrl("add");
  }
  dec(i:any){
    if(this.products[i.qty] > 0){
      this.products[i.qty]=this.products[i.qty] - 1;
    }
  }

  inc(i:any){
    
      this.products[i.qty]=this.products[i.qty] + 1;
    
  }

  
}
