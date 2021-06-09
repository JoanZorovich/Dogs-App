import React from 'react'
import { Link } from 'react-router-dom';
import "./landing.css"



function Landing() {


    return (
        <div className="hero">
            <div className="contain">
                <Link to="/home">
                <button className="buttonLanding">Click Here!</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing;
