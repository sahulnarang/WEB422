import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Position } from '@angular/compiler';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
// import {catchError, tap} from 'rxjs/operators';

@Injectable()
export class PositionServiceService {
private postUrl = 'https://web422-api-team.herokuapp.com/positions';
  constructor(
    private http: HttpClient  ) { }

  getPositions(): Observable<Position[]>{
    return this.http.get<Position[]>(this.postUrl)
  }
}
