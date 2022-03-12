import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string
  password:string

  message = {
    both:"Please fill username and password field.",
    usernameError:"Please enter your username.",
    passwordError:"Please enter your password.",
  }
  validationMessage: string = ""

  constructor(private authService: AuthService,private router: Router) { }

  ngOnInit(): void {
  }

  login(){
    if((this.username == "" || this.username == undefined) && (this.password == "" || this.password == undefined))
      this.validationMessage = this.message.both
    else if(this.username == "" || this.username == undefined){
      this.validationMessage = this.message.usernameError
    }
    else if(this.password == "" || this.password == undefined){
      this.validationMessage = this.message.passwordError
    }
    else{
      let u:User = {username:this.username,password:this.password}
      this.authService.login(u)
    }
    // console.log(this.router.url);
  }
}
