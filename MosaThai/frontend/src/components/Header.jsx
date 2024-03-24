import React, {useState} from 'react';
import Logo from './Logo';
import '../styles/Header.scss';
import { Link } from "react-router-dom";

const Header = ({ scrollToSection }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container header-container">
            <div className="header-logo">
                <Logo alt="Header logo" className="logo-main" />
            </div>
            <div className="header-menu">
                <label className="header-menu-main" onClick={() => scrollToSection('about')}>About</label>
                <label className="header-menu-main" onClick={() => scrollToSection('programs')}>Programs</label>
                <label className="header-menu-main" onClick={() => scrollToSection('prices')}>Prices</label>
                <label className="header-menu-main" onClick={() => scrollToSection('schedule')}>Schedule</label>
                <label className="header-menu-main" onClick={() => scrollToSection('coaches')}>Coaches</label>
                <Link to="/news"onClick={() => window.scrollTo(0, 0)}><label className="header-menu-main">News</label></Link>
                 <Link to="/merch"onClick={() => window.scrollTo(0, 0)}><label className="header-menu-main">Merch</label></Link>
                <div className="header-menu-main" onClick={() => scrollToSection('contact')}>Contact</div>
            </div>
            <div className="registration-button">
                <Link to="/register"onClick={() => window.scrollTo(0, 0)}>
                    <button className="header-btn">Register</button>
                </Link>
            </div>
            <div className="burger-menu" onClick={() => setMenuOpen(!isMenuOpen)}>
                &#9776;
            </div>
        </div>
    );
};

export default Header;
