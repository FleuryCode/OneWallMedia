import React from "react";
import './Navigation.styles.scss';
import { Link } from "react-router-dom";
import logo from './logo.svg';

const Navigation = () => {
    return (
        <nav className="mainNavigation">
            <Link className="nav-item" to={'/#'} >Services</Link>
            <Link className="nav-item" to={'/#'} >Pricing</Link>
            <Link className="nav-item" to={'/#'} >About</Link>
            <Link className="nav-item" to={'/#'} >
                <img src={logo} className="logo" alt="logo" />
            </Link>
            <Link className="nav-link" to={'/#'} >Services</Link>
            <Link className="nav-link" to={'/#'} >Services</Link>
            <Link className="nav-link" to={'/#'} >Services</Link>
        </nav>
    );
}

export default Navigation;