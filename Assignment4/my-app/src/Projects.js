import React, { Component } from 'react';
import MainContainer from './MainContainer';
import moment from 'moment';
import axios from "axios";


class Projects extends Component{
    constructor(){
        super();
        this.state = {projects: []}
    }   

    componentDidMount(){
        
        axios.get("https://web422-api-team.herokuapp.com/projects").then((response)=> {
           this.setState({projects : response.data}) 
        })
    }

    
    render(){
        return (
            <MainContainer sidebar = 'Projects'>
               <h1 className="page-header">Projects</h1>
                    <div className="row">
                    <table className="table table-striped table-bordered">
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                        </tr>
                        {
                            this.state.projects.map(function(projects, index){
                                return (
                                    <tr>
                                    <td>{projects.ProjectName}</td>
                                    <td>{projects.ProjectDescription}</td>
                                    <td>{moment(projects.ProjectStartDate).format('LL')}</td>
                                    <td>{(projects.ProjectEndDate == null ? 'n/a': moment(projects.ProjectEndDate).format('LL'))}</td>
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

export default Projects;