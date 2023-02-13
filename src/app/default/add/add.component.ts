import { Component, Input, OnInit } from '@angular/core';
import { AddcartService } from 'src/app/addcart.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  cartitem:any[]=[]

  constructor( private cartservice:AddcartService) { }
  ngOnInit(): void {
    this.cartitem=this.cartservice.fetchcart();
  }

}
