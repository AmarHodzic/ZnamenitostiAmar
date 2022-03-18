import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from '../config';
import { User } from '../models/User';
import * as bcrypt from 'bcryptjs';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  myPw = 'admin'
  authenticated = new BehaviorSubject<boolean>(false);
  authenticatedAsObservable = this.authenticated.asObservable();


  // generateHash(password: string){
  //   const salt = bcrypt.genSaltSync(12)
  //   const hash = bcrypt.hashSync(password, salt)
  //   return hash
  // }

  // compareHash(password: string, hashed: string) {
  //   return bcrypt.compare(password,hashed)
  // }

  isAuthenticated(){
    this.http.get<boolean>(`${config.url}/user/auth`).subscribe(response=>{
      // moram da pitam sta mi je response u slucaju da nije authentifikovan, if response== true else this.auth.next(false)
      this.authenticated.next(response)
    })
  }

  constructor(private http:HttpClient, private router: Router) { }

  login(user: User){
    console.log(user)
  
    this.http.post<{token:string}>(`${config.url}/user/login`,{id:null,username:user.username,password:user.password}).subscribe(response=>{
      this.setAuthToken(response.token);
      this.router.navigate(['/adminPage'])    
      this.isAuthenticated()
    })
  }

  logout(){
    localStorage.removeItem('jwt')
    this.isAuthenticated()
  }

  setAuthToken(token){
    localStorage.setItem('jwt', token);
  }

  getAuthToken(){
    console.log(localStorage.getItem('jwt'))
    return localStorage.getItem('jwt');
  }
  
}
