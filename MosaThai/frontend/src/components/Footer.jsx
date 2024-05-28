import React from 'react';
import footer from '@images/footer2.png';
import '../styles/Footer.css';
import Logo from './Logo';
import fb from '@images/icon-facebook.png';
import ig from '@images/icon-instagram.png';

const Footer = () => {
  return (
    <div className="container footer-container">
      <img src={footer} alt="footer" className="footer_background" />
      <div className="footer-content">
        <div className="footer-title">
          Follow us on social media <br />for the exact dates and to stay updated!
        </div>
        <div className="footer-logo-container">
           <Logo alt="footer logo" className="footer-logo" />
        </div>
        <div className="footer-social">
          <img className="footer-social_logo" src={fb} alt="Facebook" />
          <a href="https://www.instagram.com/mosathaiboxing">
            <img className="footer-social_logo" src={ig} alt="Instagram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
