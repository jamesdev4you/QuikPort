import React from 'react';
import Menu from '../Menu/menu.js';
import HowHeader from '../HowItWorks/howHeader.js';
import HowInfo from '../HowItWorks/howInfo.js';
import HowAbout1 from './howAbout1.js';
import HowAbout2 from './howAbout2.js';
import HowAbout3 from './howAbout3.js';

const howitworks = () => {
  return (
    <div>
      <Menu />
      <HowHeader />
      <HowInfo />
      <HowAbout1 />
      <HowAbout2 />
      <HowAbout3 />
    </div>
  );
};

export default howitworks;
