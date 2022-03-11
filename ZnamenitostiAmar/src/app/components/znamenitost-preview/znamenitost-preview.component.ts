import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Znamenitost } from 'src/app/models/Znamenitost';
import { ZnamenitostiService } from 'src/app/services/znamenitosti.service';

@Component({
  selector: 'app-znamenitost-preview',
  templateUrl: './znamenitost-preview.component.html',
  styleUrls: ['./znamenitost-preview.component.css']
})
export class ZnamenitostPreviewComponent implements OnInit {

  currentRate:number = 3;
  test: boolean;
  // startingImg:string = 'https://sanapress.info/wp-content/uploads/2021/01/sinan-begova-dzamija.jpeg';
  currentZnam: Znamenitost
  id: number
  x:number = 0
  observedImages:any[] =[]
  startingImg: string;
  
  constructor(private route:ActivatedRoute,private znamenitostiService: ZnamenitostiService) { }

  ngOnInit(): void {
    this.test = false
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    
      this.znamenitostiService.getZnamenitost(this.id).subscribe(znm=>{
        this.currentZnam = znm
        this.startingImg = this.currentZnam[0]
        this.observedImages = this.currentZnam.images
        console.log(this.currentZnam);
        setTimeout(()=>{
          this.test = true
        },1000)
      })
    })
    
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
