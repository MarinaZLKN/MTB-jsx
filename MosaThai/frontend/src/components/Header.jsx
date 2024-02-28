import React from 'react';
import Logo from './Logo';
import '../styles/Header.scss';
import { Link } from "react-router-dom";

const Header = ({ scrollToSection }) => {
    return (
        <div className="container header-container">
            <div className="header-logo">
                <Logo alt="Header logo" className="logo-main" />
            </div>
            <div className="header-menu">
                <div className="header-menu-main" onClick={() => scrollToSection('about')}>About</div>
                <div className="header-menu-main" onClick={() => scrollToSection('programs')}>Programs</div>
                <div className="header-menu-main" onClick={() => scrollToSection('prices')}>Prices</div>
                <div className="header-menu-main" onClick={() => scrollToSection('schedule')}>Schedule</div>
                <div className="header-menu-main" onClick={() => scrollToSection('coaches')}>Coaches</div>
                <Link to="/news"onClick={() => window.scrollTo(0, 0)}><div className="header-menu-main">News</div></Link>
                <div className="header-menu-main">Merch</div>
                <div className="header-menu-main" onClick={() => scrollToSection('contact')}>Contact</div>
            </div>
            <div className="registration-button">
                <Link to="/register"onClick={() => window.scrollTo(0, 0)}>
                    <button className="header-btn">Register</button>
                </Link>
            </div>
        </div>
    );
};

export default Header;
