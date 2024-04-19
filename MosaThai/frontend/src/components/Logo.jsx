import React from 'react';
import '../styles/Header.scss';
import logo from '@images/logo_hingeraud .png';

const Logo = ({ alt, className = 'logo-main' }) => {
  return (
    <div className="logo">
      <img className={className} src={logo} alt={alt} width="150px" />
    </div>
  );
};

export default Logo;
