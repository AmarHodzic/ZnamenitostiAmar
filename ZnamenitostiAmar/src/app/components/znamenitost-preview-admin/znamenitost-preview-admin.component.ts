import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Znamenitost } from 'src/app/models/Znamenitost';
import { ZnamenitostiService } from 'src/app/services/znamenitosti.service';

@Component({
  selector: 'app-znamenitost-preview-admin',
  templateUrl: './znamenitost-preview-admin.component.html',
  styleUrls: ['./znamenitost-preview-admin.component.css']
})
export class ZnamenitostPreviewAdminComponent implements OnInit {
  currentRate:number = 3;
  test: boolean;
  // startingImg:string = 'https://sanapress.info/wp-content/uploads/2021/01/sinan-begova-dzamija.jpeg';
  currentZnam: Znamenitost
  id: number
  x:number = 0
  observedImages:any[] =[]
  startingImg: string;
  edit: boolean=false;
  

  constructor(private route:ActivatedRoute,private znamenitostiService: ZnamenitostiService) { }

  ngOnInit(): void {
    this.test = false
    this.route.params.subscribe((params: Params) => {
      this.id = params['id']
    
      this.znamenitostiService.getZnamenitost(this.id).subscribe(znm=>{
        this.currentZnam = znm
        this.startingImg = this.currentZnam.images[0]
        this.observedImages = this.currentZnam.images
        console.log(this.currentZnam);
        setTimeout(()=>{
          this.test = true
        },1000)
      })
    })
  }

  editZnm(){
    this.edit = true
  }

  cancelEdit(){
    this.edit = false
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

  editZnam(){

  }

  saveEdit(){
    console.log(this.currentZnam.title,this.currentZnam.description,this.currentZnam.coordination);
    this.edit = false
    this.znamenitostiService.updateZnamenitostTitle(this.currentZnam.id,this.currentZnam.title,this.currentZnam.description,this.currentZnam.coordination,this.currentZnam.active).subscribe()
  }
}
