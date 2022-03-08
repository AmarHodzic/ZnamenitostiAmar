import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Znamenitost } from 'src/app/models/Znamenitost';
import { ZnamenitostiService } from 'src/app/services/znamenitosti.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  currentRate: number = 2;
  listaZnamenitosti: Znamenitost[];
  znamenitostLevel: number = 1; 

  constructor(private znamenitostiService: ZnamenitostiService) { }

  ngOnInit(): void {
    // let response = this.http.get("http://localhost:8080/api/v1/znamenitost");
    // response.subscribe((data)=>this.listaZnamenitosti=data);
    // this.znamenitostiService.getZnamenitosti().subscribe(listaZnamenitosti=>{
    //   this.listaZnamenitosti = listaZnamenitosti
    // })
    this.znamenitostiService.getZnamenitostiByLevel(this.znamenitostLevel).subscribe(listaZnamenitosti=>{
      this.listaZnamenitosti = listaZnamenitosti.filter(znamenitost=>znamenitost.level==this.znamenitostLevel)
    })
  }

}
