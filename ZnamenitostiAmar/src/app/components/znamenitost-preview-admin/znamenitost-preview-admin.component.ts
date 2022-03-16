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
        
        var i = this.observedImages.length
        while (i--) {
            if (this.observedImages[i] == null || this.observedImages[i]=="") { 
                this.observedImages.splice(i, 1);
            } 
        }
        console.log(this.currentZnam);
        setTimeout(()=>{
          this.test = true
        },1000)
      })
    })
  }

  editZnm(){
    this.edit = true
    this.znamenitostiService.getZnamenitost(this.id).subscribe(znm=>{
      this.currentZnam.title = znm.title
      this.currentZnam.description = znm.description
      this.currentZnam.coordination = znm.coordination
      this.currentZnam.active = znm.active
    })
  }

  cancelEdit(){
    this.edit = false
    this.znamenitostiService.getZnamenitost(this.id).subscribe(znm=>{
      this.currentZnam.title = znm.title
      this.currentZnam.description = znm.description
      this.currentZnam.coordination = znm.coordination
      this.currentZnam.active = znm.active
    })
  }

  nextImg(){
    if(this.x >= this.observedImages.length-1){
      this.x = -1  
    }
    this.x = this.x + 1;
    console.log(this.x);
    this.startingImg = this.observedImages[this.x]
    console.log(this.startingImg);
    
  }

  prevImg(){
    
    if(this.x <= 0){
      this.x = this.observedImages.length;
    }
    this.x = this.x - 1;
    console.log(this.x);
    this.startingImg = this.observedImages[this.x]
    console.log(this.startingImg);    
  }

  editZnam(){

  }

  OnlyNumbersAllowed(event){
    const charCode = (event.which)?event.which: event.keyCode;
  
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 44 && charCode != 45){
      console.log('restrikcija '+charCode);
      return false
    }

    return true
  }

  saveEdit(){
    console.log(this.currentZnam.title,this.currentZnam.description,this.currentZnam.coordination);
    this.edit = false
    this.znamenitostiService.updateZnamenitostTitle(this.currentZnam.id,this.currentZnam.title,this.currentZnam.description,this.currentZnam.coordination,this.currentZnam.active).subscribe()
  }
}
