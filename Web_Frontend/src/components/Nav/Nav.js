import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar">
            <div className="avatar"></div>
            <ul className="navLinks">
                <NavLink to='/' className="nav-item discover">Discover</NavLink>
                <NavLink to='/about' className="nav-item about">About</NavLink>
                <NavLink to='/tracker' className="nav-item tracker">Tracker</NavLink>
                <NavLink to='/help' className="nav-item help">Help</NavLink>
                <NavLink to='/login' className="cta track">Login</NavLink>
                <NavLink to='/signup' className="cta track">Sign Up</NavLink>
            </ul>
        </nav>
    );
}

export default Nav;