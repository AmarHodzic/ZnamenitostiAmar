import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // auth:boolean;
  username:string;

  constructor(private authService:AuthService, private router: Router) {
    router.events.subscribe( (event) => ( event instanceof NavigationEnd ) && this.handleRouteChange() )
  }

  ngOnInit(): void {
    // if(this.router.)
    console.log(this.router.url);
  }
  
  handleRouteChange = () => {
    if(this.router.url.includes('/adminPage')){
      this.username = "admin"
      console.log(`Promenjena je ruta, sad je:${this.router.url}`);
    }
    else{
      this.username = ""
    }
  };

  logout(){
    this.handleRouteChange()
    this.router.navigate(['/']);
  }
}
