import { Component , OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  username:string=""
  password:string=""
  warning:string=""
  user=["akash","gopi","gokul","siva"]
  pass=["akash","gopi","gokul","siva"]

  constructor(private route: Router) { }

  //Show Password Check Box
  changetype:boolean=true;
  isChecked="";
  toggle(evt:any){
    this.isChecked=evt.target.checked;
    this.changetype =! this.changetype;
  }

  //Submit Button 
  submit(){
    for(var i=0;i<=4;i++){
      if(this.username == this.user[i] && this.password == this.pass[i]){
        this.route.navigateByUrl("default")
      }
      else{
        let msg="Invalid Credentials !"
        this.warning=msg;
      }
}
}

//Form Controls
email = new FormControl('',[Validators.required,Validators.minLength(5)])
passs = new FormControl('',[Validators.required])


loginForm !: FormGroup;

ngOnInit(){
  this.loginForm = new FormGroup({
    'email' : new FormControl('',Validators.required),
    'passs' : new FormControl('',Validators.required)
  });
}
}
