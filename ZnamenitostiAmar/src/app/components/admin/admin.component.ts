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
    })
  }

}
