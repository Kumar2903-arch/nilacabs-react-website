import React from 'react';
// import './aboutPage.css';
import OffLogoOne from '../img/OFFICE LOGO.png';
import OffLogoTwo from '../img/OFFICE LOGO.png';
import OffLogoThree from '../img/OFFICE LOGO.png';

const BackgroundLayout = () => {
  return (
    <div className="background-container">
        <img src={OffLogoOne} alt='Logo' className='img_fix_1'/>
        <img src={OffLogoTwo} alt='Logo' className='img_fix_2'/>
        <img src={OffLogoThree} alt='Logo' className='img_fix_3'/>
      <div className="content">
        <h1>Smart Commute Cab Services</h1>
      </div>
    </div>
  );
};

export default BackgroundLayout;
