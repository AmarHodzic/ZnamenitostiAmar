import { Component, OnInit } from '@angular/core';
import { Znamenitost } from 'src/app/models/Znamenitost';
import { ZnamenitostiService } from 'src/app/services/znamenitosti.service';
import { FormsModule } from '@angular/forms';
import { Rating } from 'src/app/models/Rating';
import { RatingService } from 'src/app/services/rating.service';
import { Grad } from 'src/app/models/Grad';
import { GradService } from 'src/app/services/grad.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  search: string;
  currentRate: number = 2;
  listaZnamenitosti: Znamenitost[];
  searchLista: Znamenitost[];
  znamenitostLevel: number = 3;

  constructor(private gradService: GradService,private znamenitostiService: ZnamenitostiService) { }

  ngOnInit(): void { 
    
    this.znamenitostiService.getZnamenitostiByLevel(this.znamenitostLevel).subscribe(listaZnamenitosti=>{
      this.listaZnamenitosti = listaZnamenitosti
      var z = this.listaZnamenitosti.length
      while (z--) {
          if (this.listaZnamenitosti[z].active == false) { 
              this.listaZnamenitosti.splice(z, 1);
          }
      }
      
      this.gradService.getGrad().subscribe(grad=>{
        for(let i =0; i<grad.length; i++){
          for(let j = 0; j<grad[i].listaZnamenitosti.length; j++){
            for(let r = 0; r<listaZnamenitosti.length; r++){
              if(grad[i].listaZnamenitosti[j].id == listaZnamenitosti[r].id){
                this.listaZnamenitosti[r].gradName = grad[i].name
              }
            }
          }
        }  
      })
    })
  }

  // UrlExists(url) {
  //   var http = new XMLHttpRequest();
  //   http.open('HEAD', url, false);
  //   http.send();
  //   return http.status==200;
  // }

  handleLevel(level){
    this.znamenitostLevel = level;
    this.handleSearch(this.search)
  }

  handleSearch(search){

    if(search === undefined){
      this.ngOnInit()
    }

    else{
      if(search === ""){
        this.ngOnInit()
      }
      else{
        this.znamenitostiService.getZnamenitostiByKeyword(search).subscribe(listaZnamenitosti=>{
          let pomLista = []
          this.searchLista = listaZnamenitosti;
          for(let i = 0; i < this.searchLista.length; i++){
            if(this.searchLista[i].level == this.znamenitostLevel){
              pomLista.push(this.searchLista[i]) 
            }
          }
          this.listaZnamenitosti = pomLista
        })
      }
    }
  }

}
