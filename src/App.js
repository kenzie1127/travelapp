import React, { Component } from 'react';
import Actions from './Components/Actions';
import Nav from './Components/Nav';
import { Link, Switch, Route, Router } from 'react-router';

class App extends Component {
  render() {
    return (
     <div> 
      <Nav />
      <Actions />
    {/* // //  <div className="App">
    // //   <Router>
    // //     <div>
    //      <Nav /> */}
    //      {/* <Switch>
    //       <Route exactly component={Actions} pattern='/actions' />
    //      </Switch> 
    //     </div> 
    //    </Router> */}
    //  </div>    
    );
  }
}
  


export default App;
