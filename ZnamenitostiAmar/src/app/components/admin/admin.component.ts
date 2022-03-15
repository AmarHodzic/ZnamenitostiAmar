import { Component, Input, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { ZnamenitostiService } from 'src/app/services/znamenitosti.service';
import { Znamenitost } from 'src/app/models/Znamenitost';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  search: string;
  listaZnamenitosti: Znamenitost[];
  searchLista: Znamenitost[];
  znamenitostLevel: number = 3;
  btnText:string = "Dodaj znamenitost";
  currentRate: number = 2;
  showAddTask: boolean = false;
  subscription: Subscription;


  errorMessage = {
    title: "",
    description: "Molimo Vas unesite opis znamenitosti.",
    images: "",
    coordination: ""
  }

  constructor(private uiService:UiService, private znamenitostiService: ZnamenitostiService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
    console.log(this.router.url);
    this.znamenitostiService.getZnamenitostiByLevel(this.znamenitostLevel).subscribe(listaZnamenitosti=>{
      this.listaZnamenitosti = listaZnamenitosti
    })
  }

  validation(){
    let filled: boolean
    console.log(this.title);
    if(this.title == "" || this.title == undefined){
      this.errorMessage.title = "Please enter title."
      filled = false
    }
    else if((this.images1 == "" || this.images1 == undefined) && (this.images2 == "" || this.images2 == undefined) && (this.images3 == "" || this.images3 == undefined)){
      this.errorMessage.images = "Please place atleast one image url."
      filled = false
    }
    else if(this.coordination == "" || this.coordination == undefined){
      this.errorMessage.coordination = "Please enter coordinations."
      filled = false
    }
    else{
      filled = true
    }
    return filled
  }

  onToggle(){
    if(this.showAddTask == false)
      this.btnText = 'Close'
    else
      this.btnText = 'Dodaj znamenitost'
    this.uiService.toggleAddZnam();
  }

  handleLevel(level){
    this.znamenitostLevel = level;
    this.handleSearch(this.search)
  }
  
  handleSearch(search){

    if(search === undefined){
      console.log(search);
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

  handleDelete(id){
    this.znamenitostiService.deleteZnamenitostById(id).subscribe(data=>{
      console.log(data);
      this.ngOnInit()
      // this.listaZnamenitosti = this.listaZnamenitosti.filter( el => el.id == id)
    })
  }

  formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
 
  images1: string;
  images2: string;
  images3: string;

  title: string
  description: string
  images: string[]
  coordination: string
  active: boolean = true
  rating: number = 0
  level: number = 1
  gradId: number = 1
  createdOn: string
  updatedOn: string

  saveZnamenitost(){

    let currentDate = new Date

    this.createdOn = this.formatDate(currentDate)
    this.updatedOn = this.formatDate(currentDate)

    this.images=[this.images1,this.images2,this.images3]
    // this.ratings = [1,2,4,1,5]
    
    let znm:Znamenitost = {
      title:this.title,
      description:this.description,
      images:this.images,
      coordination:this.coordination,
      active:this.active,
      rating:this.rating,
      level:this.level,
      gradId:this.gradId,
      createdOn:this.createdOn,
      updatedOn:this.updatedOn
    }

    this.validation()
    console.log(znm);
    let val:boolean
    val = this.validation()

    if(val){
        this.znamenitostiService.postZnamenitost(znm).subscribe(znam=>{
          this.listaZnamenitosti = [...this.listaZnamenitosti,znam]
          this.title="",
          this.description="",
          this.images=["","",""],
          this.coordination="",
          this.active = true
          this.level = 1
          this.onToggle() 
          this.ngOnInit()
        })
      
      this.errorMessage.title = ""
      this.errorMessage.images = ""
      this.errorMessage.coordination = ""
    }

  }

}
