import React, { Component } from 'react';
import SideBar from './SideBar';
import NavBar from './NavBar';
class MainContainer extends Component {
    render() {
        return(
        <div>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <SideBar title = "Overview" subtitle1 = 'Projects' subtitle2 = 'Teams' subtitle3 = 'Employees'
                                    highlight = {this.props.sidebar} /> 
                    {/* // Add the correct "highlight" property here */}
                    <div className=" col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
                    {this.props.children}
                    {/* // be sure to add a reference to the "children" here */}
                    </div>
                </div>
            </div>
        </div>
        );


    }
}

export default MainContainer;