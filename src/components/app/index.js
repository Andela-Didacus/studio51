import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../login";
import Homepage from "../homepage";
import { ProtectedRoute } from "../auth/protectedRoute";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="main">
            <Switch>
              <ProtectedRoute exact component={ Homepage } path="/" />
              <Route exact component={Login} path="/login" />
              <Route exact path="*" component={()=> "404 Not Found"} />
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
