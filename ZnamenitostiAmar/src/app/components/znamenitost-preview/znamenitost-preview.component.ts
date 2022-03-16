import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Rating } from 'src/app/models/Rating';
import { Znamenitost } from 'src/app/models/Znamenitost';
import { GradService } from 'src/app/services/grad.service';
import { RatingService } from 'src/app/services/rating.service';
import { ZnamenitostiService } from 'src/app/services/znamenitosti.service';

@Component({
  selector: 'app-znamenitost-preview',
  templateUrl: './znamenitost-preview.component.html',
  styleUrls: ['./znamenitost-preview.component.css']
})
export class ZnamenitostPreviewComponent implements OnInit {

  test: boolean;
  // startingImg:string = 'https://sanapress.info/wp-content/uploads/2021/01/sinan-begova-dzamija.jpeg';
  currentZnam: Znamenitost
  id: number
  x:number = 0
  observedImages:any[] =[]
  startingImg: string;

  randomUser = this.randomIntFromInterval(1,100000)
  voted: boolean = true
  rateBar: number;
  

  constructor(private gradService:GradService, private route:ActivatedRoute,private znamenitostiService: ZnamenitostiService, private ratingService:RatingService) { }

  ngOnInit(): void {
    this.test = false
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
      this.znamenitostiService.getZnamenitost(this.id).subscribe(znm=>{
        this.currentZnam = znm
        this.startingImg = this.currentZnam.images[0]
        this.observedImages = this.currentZnam.images
        var j = this.observedImages.length
        while (j--) {
            if (this.observedImages[j] == null || this.observedImages[j]=="") { 
                this.observedImages.splice(j, 1);
            } 
        }
        console.log(this.currentZnam);
        this.gradService.getGrad().subscribe(grad=>{
          for(let i =0; i<grad.length; i++){
            for(let j = 0; j<grad[i].listaZnamenitosti.length; j++){
              if(grad[i].listaZnamenitosti[j].id == znm.id){
                this.currentZnam.gradName = grad[i].name
              }
            }
          }  
        })
        setTimeout(()=>{
          this.test = true
        },1000)
      })
    })
    
  }

  randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  rateZnam(){
    
    setTimeout(()=>{
      let ratingBar:Rating = {
        rate:this.rateBar,
        userId:this.randomUser
      }
      if(localStorage.getItem('randomUser') == '' || localStorage.getItem('randomUser') == undefined){
        this.ratingService.rateZnam(this.currentZnam.id,ratingBar.userId,ratingBar.rate).subscribe()
        localStorage.setItem('randomUser',this.randomUser.toString())
      }
      else{
        this.voted = false
      }
    },100)
  }

  nextImg(){
    if(this.x >= this.observedImages.length-1){
      this.x = -1  
    }
    this.x = this.x + 1;
    console.log(this.x);
    this.startingImg = this.observedImages[this.x]
    
  }

  prevImg(){
    if(this.x <= 0){
      this.x = this.observedImages.length;
    }
    this.x = this.x - 1;
    console.log(this.x);
    this.startingImg = this.observedImages[this.x]    
  }

}
