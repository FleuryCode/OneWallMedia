import React from "react";
import './Navigation.styles.scss';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

const Navigation = () => {
    return (
        <nav className="mainNavigation pt-3">
            <div className="container-fluid m-0 p-0">
                <div className="row d-flex justify-content-center m-0 p-0">
                    <div className="col-5 navList justify-content-end">
                        <Link className="nav-item ms-5" to={'/#'} >Services</Link>
                        <Link className="nav-item ms-5" to={'/#'} >Pricing</Link>
                        <Link className="nav-item ms-5" to={'/#'} >About</Link>
                    </div>
                    <div className="col-1">
                        <Link className="logoContainer" to={'/#'} >
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-5 navList justify-content-start">
                        <Link className="nav-item me-5" to={'/#'} >Portfolio</Link>
                        <Link className="nav-item me-5" to={'/#'} >Booking</Link>
                        <Link className="nav-item me-5" to={'/#'} >Contact</Link>
                    </div>
                </div>
            </div>



        </nav>
    );
}

export default Navigation;