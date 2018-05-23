import React, { Component } from 'react';
import { render } from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Actions from './Components/Actions';


render(
  <Router>
    <Route component={Main} path='app' history={browserHistory}>
    <Route path='/actions' component={Actions}/>
    </Route>
  </Router>,
  document.getElementById('container')  
);