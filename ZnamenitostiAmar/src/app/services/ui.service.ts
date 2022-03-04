import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddZnam: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddZnam(): void{
    console.log("RADI TOGGLE");
    this.showAddZnam = !this.showAddZnam;
    this.subject.next(this.showAddZnam)
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
