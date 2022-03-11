import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';
import { ZnamenitostiService } from 'src/app/services/znamenitosti.service';
import { Znamenitost } from 'src/app/models/Znamenitost';

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
    images: "Molimo Vas unesite url slika.",
    coordination: "Molimo Vas unesite koordinate."
  }

  constructor(private uiService:UiService, private znamenitostiService: ZnamenitostiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
    this.znamenitostiService.getZnamenitostiByLevel(this.znamenitostLevel).subscribe(listaZnamenitosti=>{
      this.listaZnamenitosti = listaZnamenitosti
    })
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
    this.images[0] = this.images1
    this.images[1] = this.images2
    this.images[2] = this.images3
    
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

    console.log(znm);
    if(znm.title == undefined || znm.title == "")
      this.errorMessage.title = "Molimo Vas unesite naziv znamenitosti."
    else{
      this.znamenitostiService.postZnamenitost(znm).subscribe(znam=>{
        this.listaZnamenitosti = [...this.listaZnamenitosti,znam]
        this.title="",
        this.description="",
        this.images=["","",""],
        this.coordination="",
        this.active = true
        this.level = 1
        this.onToggle()
      })
    }

  }
}
