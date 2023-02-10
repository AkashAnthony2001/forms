import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @Input() products:any

  constructor() { }

  ngOnInit(): void {
  }

}
