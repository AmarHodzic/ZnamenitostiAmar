import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  btnText:string = "Dodaj znamenitost";
  currentRate: number = 2;
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => (this.showAddTask = value))
  }

  ngOnInit(): void {
  }

  onToggle(){
    if(this.showAddTask == false)
      this.btnText = 'Close'
    else
      this.btnText = 'Dodaj znamenitost'
    this.uiService.toggleAddZnam();
  }
}
