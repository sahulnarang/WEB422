import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Overview from './Overview';
import Teams from './Teams';
import Projects from './Projects';
import Employees from './Employees';
import NotFound from './NotFound';

class App extends Component {

  render() {    
    return ( 
      <Switch>
      <Route exact path='/' render={() => (
        <Overview title="Overview" dataSource={"https://web422-api-team.herokuapp.com/"} /> 
      )}/>
      <Route exact path='/projects' render={() => (
              <Projects title="Projects" dataSource={"https://web422-api-team.herokuapp.com/projects"} />
      )}/>
      <Route exact path='/employees' render={() => (
              <Employees title="Employees" dataSource={"https://web422-api-team.herokuapp.com/employees"} />
      )}/>
      <Route exact path='/teams' render={() => (
              <Teams title="Teams" dataSource={"https://web422-api-team.herokuapp.com/teams"} />
      )}/>
      <Route render={()=>(
        <NotFound/>
      )}/>
  </Switch>      

    ); 
  }  
}
export default App;