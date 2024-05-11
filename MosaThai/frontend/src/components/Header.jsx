import React, {useState} from 'react';
import Logo from './Logo';
import '../styles/Header.scss';
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

const Header = ({ scrollToSection }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    return (
        <div className="container header-container">
            <div className="header-logo">
                <Logo alt="Header logo" className="logo-main" />
            </div>
            <div className="header-menu">
                <p className="header-menu-main" onClick={() => scrollToSection('about')}>Meist</p>
                <p className="header-menu-main" onClick={() => scrollToSection('programs')}>Kava</p>
                <p className="header-menu-main" onClick={() => scrollToSection('prices')}>Hinnad</p>
                <p className="header-menu-main" onClick={() => scrollToSection('schedule')}>Tunniplaan</p>
                <p className="header-menu-main" onClick={() => scrollToSection('coaches')}>Treenerid</p>
                <Link to="/news"onClick={() => window.scrollTo(0, 0)}><p className="header-menu-main">Uudised</p></Link>
                <Link to="/merch"onClick={() => window.scrollTo(0, 0)}><p className="header-menu-main">Merch</p></Link>
                <p className="header-menu-main" onClick={() => scrollToSection('contact')}>Kontakt</p>
            </div>
            <div className="registration-button">
                <Link to="/register"onClick={() => window.scrollTo(0, 0)}>
                    <button className="header-btn">Registreeri</button>
                </Link>
            </div>
            <div className="burger-menu" onClick={() => setMenuOpen(!isMenuOpen)}>
                &#9776;
            </div>
             {isMenuOpen && <DropdownMenu scrollToSection={scrollToSection} onClose={() => setMenuOpen(false)} />}
        </div>
    );
};

export default Header;

