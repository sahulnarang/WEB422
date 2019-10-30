import React, { Component } from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';
import axios from "axios";


class Employees extends Component{
    constructor(){
        super();
        this.state = {employees: []}
    }   

    componentDidMount(){
        
        axios.get("https://web422-api-team.herokuapp.com/employees").then((response)=> {
           this.setState({employees : response.data}) 
        })
    }

    
    render(){
        return (
            <MainContainer sidebar = 'Employees'>
               <h1 className="page-header">Employees</h1>
                    <div className="row">
                    <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>Name & Position</td>
                            <td>Address</td>
                            <td>Phone Num</td>
                            <td>Hire Date</td>
                            <td>Salary Bonus</td>
                        </tr>
                        {
                            this.state.employees.map(function(employees, index){
                                return (
                                    <tr>
                                    <td>{employees.FirstName} {employees.LastName} - {employees.Position.PositionName}</td>
                                    <td>{employees.AddressStreet}, {employees.AddressCity} {employees.AddressState}, {employees.AddressZip}</td>
                                    <td>{employees.PhoneNum} ext- {employees.Extension}</td>
                                    <td>{moment(employees.HireDate).format('LL')}</td>
                                    <td>$ { employees.SalaryBonus}</td>
                                    </tr>
                                  ) 
                            })
                        }
                        
                        </tbody>
                    </table> 
                    </div>
            </ MainContainer>
        );
    }
}

export default Employees;