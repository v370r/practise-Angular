import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ""
  password = ""
  errorMessage = "invalid credentials"
  invalidLogin :boolean;
  handleLogin(){
    if(this.username ==="vijay" && this.password ==="dummy"){
      console.log(this.username)
      this.invalidLogin = false
      //redirect to welcome page
      this.router.navigate(["welcome",this.username])

    }
    else{
      console.log("Unauthorised!")
      this.invalidLogin = true
    }
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
