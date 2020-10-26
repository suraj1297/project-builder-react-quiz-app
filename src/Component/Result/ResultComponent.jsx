import React, { Component } from 'react'
import tick from "./tickmark.png"
import "./Result.css"
import { Link } from "react-router-dom"

export default class ResultComponent extends Component {
    render() {
        return (
            <div className="result">
                <img src={tick} alt="" className="tick" />
                <p>Result</p>
                <div className="scoreCard">
                    <p>You need more practice!</p>
                    <p>Your Score: 20%</p>
                    <p className="details">
                        <span>Total number of questions </span>
                        <span>15</span>
                    </p>
                    <p className="details">
                        <span>Number of attempted questions</span>
                        <span>9</span>
                    </p>
                    <p className="details">
                        <span>Number of correct Answers</span>
                        <span>3</span>
                    </p>
                    <p className="details">
                        <span>Number of wrong answers</span>
                        <span>6</span>
                    </p>
                </div>
                <div className="btns">
                    <Link to="/quiz" style={{ textDecoration: "inherit", color: "black" }}>
                        <div className="playAgain">Play Again</div>
                    </Link>
                    <Link to="/" style={{ textDecoration: "inherit", color: "black" }}>
                        <div className="back">Back to home</div>
                    </Link>
                </div>
            </div>
        )
    }
}
