import React from 'react';
import logo from '@images/mosaMain.png';
import '../../../styles/Hero.scss';
import { Link } from "react-router-dom";
import pic from '@images/HINGERAUD.png';

const Hero = ({ alt }) => {
  return (
    <div className="hero">
      <img src={logo} alt={alt} className="hero-image" />
      <div className="image-title">
        <div className="main-page_pic-title"> hingeraud</div>
        {/*  <img src={pic} className="hero-title"/>*/}
        <div className="main-page_pic-subtitle"> Empower your spirit, unleash your strength <br />Muay Thai – more than a martial art, it's a way of life</div>
        <Link to="/register">
          <button id="main-page-pic-btn">Join Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
