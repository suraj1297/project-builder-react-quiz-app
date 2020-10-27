import React, { Component } from 'react'
import "./Quiz.css"
import axios from "axios"
import Question from './Question';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

export default class QuizComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            isLoading: true,
            currentQuestion: 0,
            score: 0,
            correctAns: 0,
            wrongAns: 0
        }
    }

    componentDidMount() {

        const url = "https://my-json-server.typicode.com/Naveen132895/quiz-api/questions"
        axios.get(url)
            .then(response => {
                this.setState({
                    questions: response.data,
                    isLoading: false
                })
            })
    }

    changeQuestion = (changeDirection) => {

        if (changeDirection === "next" && this.state.currentQuestion < 9) {
            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion + 1
                }
            })
        } else if (changeDirection === "previous" && this.state.currentQuestion > 0) {
            this.setState(prevState => {
                return {
                    currentQuestion: prevState.currentQuestion - 1
                }
            })
        }
    }

    verifyAnswer = async (correctAns, choosenAns) => {

        let score = 0
        let correct = 0
        let wrong = 0
        if (correctAns === choosenAns) {
            score = 10
            correct += 1
        } else {
            wrong += 1
        }
        await new Promise(resolve => {
            this.setState(prevState => {
                return {
                    score: prevState.score + score,
                    correctAns: prevState.correctAns + correct,
                    wrongAns: prevState.wrongAns + wrong,
                    currentQuestion: prevState.currentQuestion + 1
                }
            })

            resolve("done")
        })

    }

    // redirect = () => {
    //     if (this.state.currentQuestion === 10) {
    //         return ()
    //     }
    // }

    componentWillUnmount() {
        this.props.updateScores(this.state.correctAns, this.state.wrongAns, this.state.score)
    }


    render() {

        if (this.state.isLoading) {
            return (<div>Loading.....</div>)
        }
        else if (this.state.currentQuestion === 10) {
            return (
                <>
                    <Redirect to="/result" />
                </>
            )
        }
        else {
            return (
                < Question
                    {...this.state.questions[this.state.currentQuestion]}
                    currentQuestion={this.state.currentQuestion}
                    changeQuestion={this.changeQuestion}
                    verifyAnswer={this.verifyAnswer}
                />

            )
        }
    }
}