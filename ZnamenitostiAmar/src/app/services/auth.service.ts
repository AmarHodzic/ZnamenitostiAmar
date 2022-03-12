import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../config';
import { User } from '../models/User';
import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  myPw = 'admin'

  generateHash(password: string){
    const salt = bcrypt.genSaltSync(12)
    const hash = bcrypt.hashSync(password, salt)
    return hash
  }

  compareHash(password: string, hashed: string) {
    return bcrypt.compare(password,hashed)
  }

  constructor(private http:HttpClient, private router: Router) { }

  login(user: User){
  
    this.http.get<User[]>(`${config.url}/user`).subscribe(users=>{
      for(let userFromDB of users){
              
        if(userFromDB.username==user.username && this.compareHash(this.myPw,userFromDB.password)){
          
          // this.setAuthToken('ulogovan')
          // this.setUserType(userFromDB)
          if(userFromDB.username == 'admin' && this.compareHash(this.myPw,userFromDB.password))
            this.router.navigate(['/adminPage'])
          else
            this.router.navigate(['/'])
        }
      }
    })
  }
  
}
