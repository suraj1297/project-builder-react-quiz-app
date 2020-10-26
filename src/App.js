import React, { Component } from 'react';
import './App.css';
import HomeComponent from './Component/Home/HomeComponent';
import QuizComponent from './Component/Quiz/QuizComponent ';
import ResultComponent from './Component/Result/ResultComponent'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

export default class App extends Component {

  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <HomeComponent />
            </Route>
            <Route path="/home">
              <HomeComponent />
            </Route>
            <Route path="/quiz">
              <QuizComponent />
            </Route>
            <Route path="/result">
              <ResultComponent />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

