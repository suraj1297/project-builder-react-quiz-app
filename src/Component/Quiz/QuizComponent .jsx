import React, { Component } from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./Quiz.css"

export default class QuizComponent extends Component {
    render() {
        return (
            <div className="question">
                <p>Questions</p>
                <h3>Which is the only mammal that can't jump?</h3>
                <div className="answers">
                    <div className="option">Dog</div>
                    <div className="option">Goat</div>
                    <div className="option">Elephant</div>
                    <div className="option">Lion</div>
                </div>
                <div className="buttons">
                    <div className="previous">Previous</div>
                    <div className="next">Next</div>
                    <Link to="/result" style={{ textDecoration: "inherit", color: "black" }}>
                        <div className="quit">Quit</div>
                    </Link>
                </div>
            </div>
        );
    }
}