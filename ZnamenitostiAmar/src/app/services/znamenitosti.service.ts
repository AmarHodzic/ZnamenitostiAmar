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
    return this.http.get<Znamenitost[]>(`${config.url}/znamenitost`)
  }

  getZnamenitostiByLevel(level){
    return this.http.get<Znamenitost[]>(`${config.url}/znamenitost/level/${level}`)
  }

  getZnamenitostiByTitle(title){
    return this.http.get<Znamenitost[]>(`${config.url}/znamenitost/title/${title}`)
  }

  getZnamenitostiByKeyword(keyword){
    return this.http.get<Znamenitost[]>(`${config.url}/znamenitost/keyword/${keyword}`)
  }

  deleteZnamenitostById(id){
    return this.http.delete<Znamenitost>(`${config.url}/znamenitost/${id}`)
  }

  postZnamenitost(znamenitost?: Znamenitost){
    return this.http.post<Znamenitost>(`${config.url}/znamenitost`,znamenitost,{headers:{"Content-Type":"application/json"}})
  }
}
