import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from './components/AuthComponents/Login';
import Register from './components/AuthComponents/Register';


const routing = (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  </Router>
)

ReactDOM.render(
  routing
  , document.getElementById('root')
);
