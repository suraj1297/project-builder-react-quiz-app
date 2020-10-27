import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


export default function Question(props) {


    return (
        <div className="question">
            <p>Questions</p>
            <h3>{props.question}</h3>
            <div className="answers">
                {props.options.map(option => createOptions(props.answer, option, props.currentQuestion, props.verifyAnswer))}
            </div>
            <div className="buttons">
                <div className="previous" onClick={() => props.changeQuestion("previous")}>Previous</div>
                <div className="next" onClick={() => props.changeQuestion("next")}>Next</div>
                <Link to="/result" style={{ textDecoration: "inherit", color: "black" }}>
                    <div className="quit">Quit</div>
                </Link>
            </div>
        </div>
    )
}


function createOptions(answer, option, currentQuestion, verifyAnswer) {

    if (currentQuestion !== 9)
        return (
            <div className="option" onClick={() => verifyAnswer(answer, option)} key={Math.random()}>
                {option}
            </div>
        )
    else if (currentQuestion === 9)
        return (
            // <Link to="/result">
            <div className="option" onClick={() => verifyAnswer(answer, option)} key={Math.random()}>
                {option}
            </div>
            // </Link>
        )
}