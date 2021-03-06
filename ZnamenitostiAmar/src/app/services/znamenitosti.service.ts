import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Observable } from 'rxjs';
import { Znamenitost } from '../models/Znamenitost';

@Injectable({
  providedIn: 'root'
})
export class ZnamenitostiService {

  constructor(private http:HttpClient) { }

  getZnamenitosti(){
    return this.http.get<Znamenitost[]>(`${config.urlZnam}`)
  }

  getZnamenitost(id){
    return this.http.get<Znamenitost>(`${config.urlZnam}/id/${id}`)
  }

  getZnamenitostiByLevel(level){
    return this.http.get<Znamenitost[]>(`${config.urlZnam}/level/${level}`)
  }

  getZnamenitostiByTitle(title){
    return this.http.get<Znamenitost[]>(`${config.urlZnam}/title/${title}`)
  }

  getZnamenitostiByKeyword(keyword){
    return this.http.get<Znamenitost[]>(`${config.urlZnam}/keyword/${keyword}`)
  }

  deleteZnamenitostById(id){
    return this.http.delete<Znamenitost>(`${config.urlZnam}/${id}`)
  }

  postZnamenitost(znamenitost?: Znamenitost){
    return this.http.post<Znamenitost>(`${config.urlZnam}`,znamenitost,{headers:{"Content-Type":"application/json"}})
  }

  updateZnamenitostTitle(id, title,description,coordination,active){
    return this.http.put<Znamenitost>(`${config.urlZnam}/updateZnam/${id}?title=${title}&description=${description}&coordination=${coordination}&active=${active}`,{})
  }

}
