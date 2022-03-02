import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-znamenitost-preview',
  templateUrl: './znamenitost-preview.component.html',
  styleUrls: ['./znamenitost-preview.component.css']
})
export class ZnamenitostPreviewComponent implements OnInit {

  currentRate:number = 3;
  startingImg:string = 'https://sanapress.info/wp-content/uploads/2021/01/sinan-begova-dzamija.jpeg';

  constructor() { }

  ngOnInit(): void {
  }

  nextImg(){
    console.log("go right");
  }

  prevImg(){
    console.log("go left");
  }

}
