import React, { Component } from 'react'
import "./Home.css"

import { Link } from "react-router-dom"

export default class HomeComponent extends Component {

    render() {
        return (
            <div className="home">
                <h3>Quiz App</h3>
                <Link to="/quiz" style={{ textDecoration: "inherit", color: "black" }}>
                    <div className="play">Play</div>
                </Link>
            </div>
        );
    }
}

