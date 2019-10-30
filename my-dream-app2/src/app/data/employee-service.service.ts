import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Position } from '@angular/compiler';
import { of } from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Employee } from './employee';

@Injectable()
export class EmployeeServiceService {
  private empUrl = 'https://web422-api-team.herokuapp.com/employees';

  constructor(private http: HttpClient) { }
  // Emp : Employee[];
  // getPositions(): Observable<Position[]>{ 

  //   console.log("employees - service .service.ts");
  //   return this.http.get<Position[]>(this.empUrl)
  // }
  getEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.empUrl);
  }

}