import { Component, Input, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // auth:boolean;

  isAuthenticated:boolean;
  showLogin:boolean = true;

  constructor(private authService:AuthService, private router: Router) {
    // router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
  }

  ngOnInit(): void {
    // proveri da li sam authentifikovan.
    this.authService.authenticatedAsObservable.subscribe(auth=>{
      this.isAuthenticated = auth
      this.checkLoginButton()
    })
    this.authService.isAuthenticated()
  }
  
  checkLoginButton(){
    if(this.router.url.includes('/adminPage'))
      this.showLogin = false
    else if(this.router.url == '/') {
      this.showLogin = true
      // window.location.reload()
    }
  }
  // handleRouteChange = () => {
  //   if(this.router.url.includes('/adminPage')){
  //     this.username = "admin"
  //   }
  //   else{
  //     this.username = ""
  //   }
  // };

  logout(){
    // this.checkLoginButton()
    
    this.showLogin = true
    this.authService.logout();
    this.router.navigate(['/'])
    setTimeout(()=>{
      window.location.reload()
    },500)

  }
}
