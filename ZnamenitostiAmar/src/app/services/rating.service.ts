import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { config } from '../config';
import { Rating } from '../models/Rating';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  constructor(private http:HttpClient) { }

  rateZnam(znamenitostId, userId, rate){
    return this.http.post<Rating>(`${config.urlRating}?znamenitostId=${znamenitostId}&userId=${userId}&rate=${rate}`,{})
  }
}
