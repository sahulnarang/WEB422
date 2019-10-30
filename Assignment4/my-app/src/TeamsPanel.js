import React, { Component } from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
class TeamsPanel extends Component {

    constructor() {
        super();
        this.state = { teams: [] }
    }

    componentDidMount() {

        axios.get("https://web422-api-team.herokuapp.com/teams").then((response) => {
            this.setState({ teams: response.data })
        })
    }

    render() {
        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Teams</h3>
                    </div>
                        <div className="panel-body">
                            <div className="table-responsive overview-table">
                                <table className="table table-striped table-bordered">
                                    <tbody>
                                        {this.state.teams.map(function (team, index) {
                                            return (
                                                <tr>
                                                    <td>{team.TeamName}</td>
                                                    <td>{team.Employees.length} Employees</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                        </div>
            </div>
        );
    }
}

export default TeamsPanel;