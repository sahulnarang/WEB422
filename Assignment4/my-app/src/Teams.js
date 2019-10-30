import React, { Component } from 'react';
import MainContainer from './MainContainer';
import axios from "axios";


class Teams extends Component{
    constructor(){
        super();
        this.state = {teams: []}
    }   
    componentDidMount() {

        axios.get("https://web422-api-team.herokuapp.com/teams").then((response) => {
            this.setState({ teams: response.data })
        })
    }

    render(){
        return (
            <MainContainer sidebar = 'Teams'>
               <h1 className="page-header">Teams</h1>
                    <div className="row">
                    <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Projects</td>
                            <td>Employees</td>
                            <td>Team Lead</td>
                        </tr>
                        {
                            this.state.teams.map(function(teams, index){
                                return (
                                    <tr>
                                        <td>{teams.TeamName}</td>
                                        <td><ul>  {teams.Projects.map(function (project, index){
                                                    return ( <li>{project.ProjectName}</li> );
                                                })}
                                            </ul> </td>
                                        <td>{teams.Employees.length}</td>
                                        <td>{teams.TeamLead.FirstName} {teams.TeamLead.LastName}</td>
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

export default Teams;