import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom";
import Login from './components/AuthComponents/Login';
import Register from './components/AuthComponents/Register';


const routing = (
  <Router>
    <Route exact path="/" component={App}/>
    <Route path="/login" component={Login}/>
    <Route path="/register" component={Register}/>
  </Router>
)

ReactDOM.render(
    routing
  ,document.getElementById('root')
);
