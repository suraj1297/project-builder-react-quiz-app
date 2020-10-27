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

	constructor() {
		super()
		this.state = {
			correctAns: 0,
			wrongAns: 0,
			score: 0
		}
	}


	updateScores = (correctAns, wrongAns, score) => {
		this.setState({
			correctAns: correctAns,
			wrongAns: wrongAns,
			score: score
		})
	}

	render() {
		return (
			<React.Fragment>
				<Router>
					<Switch>
						<Route exact path="/">
							<HomeComponent />
						</Route>
						<Route path="/home" >
							<HomeComponent />
						</Route>
						<Route path="/quiz">
							<QuizComponent updateScores={this.updateScores} />
						</Route>
						<Route path="/result">
							<ResultComponent {...this.state} />
						</Route>
					</Switch>
				</Router>
			</React.Fragment>
		);
	}
}

