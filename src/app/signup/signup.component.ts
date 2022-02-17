import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  email: string = "";
  confirm: string = "";
  create: string = "";
  verify: string = "";

  constructor() { }

  sendUserInfo(): void{
    if(this.confirm === this.create){
      this.verify = "";
      const data = {"email": this.email, "password": this.create}
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }
      fetch("http://localhost:4201/signup", options);
    }else{
      this.verify = "The password you confirmed must be the same as the one you created"
    }

  }

  ngOnInit(): void {

  }

}
