import React from 'react';
import arrow from '@images/arrow-up.png';
import '../../../styles/WhyMuayThai.scss';


const CustomPrevButton = ({ onClick }) => (
  <div  className="custom-prev-button" onClick={onClick}>
    <img  className="wmt_btn" src={arrow} alt="arrow" />
  </div>
);

export default CustomPrevButton;