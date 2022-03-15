import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Grad } from '../models/Grad';

@Injectable({
  providedIn: 'root'
})
export class GradService {

  constructor(private http: HttpClient) { }

  getGrad(){
    return this.http.get<Grad[]>(`${config.url}/grad`)
  }
}
