import React from 'react'
import tick from "./tickmark.png"
import "./Result.css"
import { Link } from "react-router-dom"

export default function ResultComponent(props) {

    return (
        <div className="result">
            <img src={tick} alt="" className="tick" />
            <p>Result</p>
            <div className="scoreCard">
                <p>{props.score < 70 ? "You need more practice" : "Well Played!"}</p>
                <p>Your Score: {props.score}%</p>
                <p className="details">
                    <span>Total number of questions </span>
                    <span>10</span>
                </p>
                <p className="details">
                    <span>Number of attempted questions</span>
                    <span>{props.correctAns + props.wrongAns}</span>
                </p>
                <p className="details">
                    <span>Number of correct Answers</span>
                    <span>{props.correctAns}</span>
                </p>
                <p className="details">
                    <span>Number of wrong answers</span>
                    <span>{props.wrongAns}</span>
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

