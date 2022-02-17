import React from "react";
import CustomButton from "../CustomButton/CustomButton.component";
import { Link } from "react-router-dom";
import './Footer.styles.scss';
import facebookLogo from '../../assets/facebookLogo.svg';
import instagramLogo from '../../assets/instagramLogo.svg';


const Footer = () => {
    return (
        <div className="footerContainer container-fluid">
            <div className="row">
                <div className="col-12 mt-3 d-flex flex-column align-items-center">
                    <h4>SCHEDULE YOUR APPOINTMENT</h4>
                    <Link className="footer-button mt-2" to={'/booking'}>
                        <CustomButton text={'START NOW'} page='footer' />
                    </Link>
                </div>
            </div>
            <div className="row d-flex justify-content-center mt-4">
                <nav className="col-12 bottom-nav">
                    <div className="footer-nav footer-nav-one d-none d-md-flex">
                        <Link className="footer-link" to={'/services'}>Services</Link>
                        <Link className="footer-link" to={'/pricing'}>Pricing</Link>
                        <Link className="footer-link" to={'/about'}>About</Link>
                    </div>
                    <div className="social">
                        <a className="image-container" target={'_blank'} href="https://www.instagram.com/onewallmedia">
                            <img src={instagramLogo} alt="Instagram logo" />
                        </a>
                        <a className="image-container" target={'_blank'} href="https://www.facebook.com/onewallmedia">
                            <img src={facebookLogo} alt="Facebook logo" />
                        </a>
                    </div>
                    <div className="footer-nav footer-nav-two d-none d-md-flex">
                        <Link className="footer-link" to={'/portfolio'}>Portfolio</Link>
                        <Link className="footer-link" to={'/booking'}>Booking</Link>
                        <Link className="footer-link" to={'/contact'}>Contact</Link>
                    </div>
                </nav>
            </div>
            <div className="row mt-3">
                <div className="col-12 service-terms">
                    <a href="#">
                        <p>TERMS OF SERVICE</p>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Footer;