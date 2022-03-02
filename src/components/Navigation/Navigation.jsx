import React, { useState } from "react";
import './Navigation.styles.scss';
import { Link } from "react-router-dom";
import logo from '../../logo.svg';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => {
        const menuClass = document.querySelector('.burgerMenu');
        menuClass.classList.toggle('open');
        setIsOpen(!isOpen);
    }
    return (
        <nav className="mainNavigation pt-3 m-0">
            <div className="container-fluid m-0 p-0">
                <div className="row d-none d-md-flex justify-content-center m-0 p-0 mainNav">
                    <div className="col-5 navList justify-content-end">
                        <Link className="nav-item ms-5" to={'/services'} >Services</Link>
                        <Link className="nav-item ms-5" to={'/pricing'} >Pricing</Link>
                        <Link className="nav-item ms-5" to={'/about'} >About</Link>
                    </div>
                    <div className="col-1">
                        <Link className="logoContainer" to={'/#'} >
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="col-5 navList justify-content-start">
                        <Link className="nav-item me-5" to={'/services'} >Portfolio</Link>
                        <Link className="nav-item me-5" to={'/booking'} >Booking</Link>
                        <Link className="nav-item me-5" to={'/contact'} >Contact</Link>
                    </div>
                </div>
                <div className="row m-0 p-0 mobileNav d-md-none">
                    <div className="col-5 ms-auto">
                        <div onClick={toggleOpen} className="burgerMenu ms-auto">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={`${isOpen ? 'menuOpen' : 'menuClosed'} col-12 mobileMenu`}>
                        <Link className="mobileNav-item" to={'/services'} >Services</Link>
                        <Link className="mobileNav-item" to={'/pricing'} >Pricing</Link>
                        <Link className="mobileNav-item" to={'/about'} >About</Link>
                        <Link className="mobileNav-item" to={'/services'} >Portfolio</Link>
                        <Link className="mobileNav-item" to={'/booking'} >Booking</Link>
                        <Link className="mobileNav-item" to={'/contact'} >Contact</Link>
                    </div>
                </div>
            </div>



        </nav>
    );
}

export default Navigation;