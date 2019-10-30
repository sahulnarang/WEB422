import { Component, OnInit } from '@angular/core';
import { Employee } from '../data/employee';
import {EmployeeServiceService} from '../data/employee-service.service';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
   employees : Employee[] ;
  getEmployeesSub: any;
  loadingError : boolean = false;

  constructor(private EmployeesService: EmployeeServiceService) { }

  ngOnInit() {
    
    //  this.getEmployees() =
    // this.EmployeesService.getEmployees()
    // .subscribe(employees => this.employees = employees);
    this.getEmployeesSub = this.EmployeesService.getEmployees().subscribe( data => {
      this.employees = data;
      }, () =>{
      this.loadingError = true;
    }); 
    // this.loadingError = true;
    
    
  }

  ngOnDestroy() {
    // this.getEmployeesSub.getEmployees().unsubscribe();
    if(this.getEmployeesSub){this.getEmployeesSub.unsubscribe();}

  }
  

}
