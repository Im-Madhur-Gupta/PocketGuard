import React from 'react';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="avatar"></div>
            <ul className="navLinks">
                <button className="nav-item discover">Discover</button>
                <button className="nav-item about">About</button>
                <button className="nav-item tracker">Tracker</button>
                <button className="nav-item help">Help</button>
                <button className="cta track">Login / Sign Up</button>
            </ul>
        </nav>
    );
}

export default Nav;