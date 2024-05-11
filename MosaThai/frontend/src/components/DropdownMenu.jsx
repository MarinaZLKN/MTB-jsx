import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import close from "@images/img_1.png";

const DropdownMenu = ({ scrollToSection, onClose }) => {
    return (
        <div className="dropdown-menu">
            <div className="dropdown-pic" onClick={onClose}>
                <img src={close} className="dropdown-close"/>
            </div>
            <ul>
                <li onClick={() => { scrollToSection('about'); onClose(); }}>Meist</li>
                <li onClick={() => { scrollToSection('programs'); onClose(); }}>Kava</li>
                <li onClick={() => { scrollToSection('prices'); onClose(); }}>Hinnakiri</li>
                <li onClick={() => { scrollToSection('schedule'); onClose(); }}>Tunniplaan</li>
                <li onClick={() => { scrollToSection('coaches'); onClose(); }}>Treenerid</li>
                <li><Link to="/news" onClick={() => { window.scrollTo(0, 0); onClose(); }}>Uudised</Link></li>
                <li><Link to="/merch" onClick={() => { window.scrollTo(0, 0); onClose(); }}>Merch</Link></li>
                <li onClick={() => { scrollToSection('contact'); onClose(); }}>Kontakt</li>
                <li onClick={() => { window.scrollTo(0, 0); onClose(); }}>
                    <Link to="/register"><button className="header-btn">Registreeri</button></Link>
                </li>
            </ul>
        </div>
    );
};

export default DropdownMenu;