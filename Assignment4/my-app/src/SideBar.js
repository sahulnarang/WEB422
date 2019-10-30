import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SideBar extends Component {
    render() {
        return (

    <div className="col-sm-3 col-md-2  sidebar">
                     <ul className="nav nav-sidebar">
                        <li className={(this.props.highlight === 'Overview' ? 'active' : '')}>
                            <Link to="/">{this.props.title}<span className="sr-only">(current)</span></Link>
                            </li>
                     </ul>
                     <ul className="nav nav-sidebar">
                            <li className={(this.props.highlight === 'Projects' ? 'active' : '')}>
                                <Link to="/projects">{this.props.subtitle1}</Link>
                                </li>
                            <li className={(this.props.highlight === 'Teams' ? 'active' : '')}>
                                <Link to="/teams">{this.props.subtitle2}</Link>
                                </li>
                             <li className={(this.props.highlight === 'Employees' ? 'active' : '')}>
                                 <Link to="/employees">{this.props.subtitle3}</Link>
                                 </li>
                    </ul>
            </div>
        );
    }
}
export default SideBar;