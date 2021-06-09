import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

import "./navbar.css"

function Navbar () {
    return ( 
        <div className="container">
                <div className="navbar">
                    <Link exact to="/">
                    <img src={logo} className="logo" alt='logo' />
                    </Link>
                    <Link to="/home" className="hover">Home</Link>
                    <Link to="/home/create" className="hover">Create breed</Link>
                    <Link to="/home/about" className="hover">About</Link>
                </div>
        </div>
     );
}
 
export default Navbar;