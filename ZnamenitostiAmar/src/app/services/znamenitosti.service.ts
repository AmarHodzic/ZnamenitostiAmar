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

  getZnamenitosti():Observable<any[]>{
    return this.http.get<Znamenitost[]>(`${config.url}/znamenitost`)
  }

  getZnamenitostiByLevel(level):Observable<any[]>{
    return this.http.get<Znamenitost[]>(`${config.url}/znamenitost/${level}`)
  }
}
