import React from 'react';
import Menu from '../Menu/menu.js';
import HomeHeader from '../Home/homeHeader.js';
import HomeBenefits from '../Home/homeBenefits.js';
import HomeWhyUs from '../Home/homeWhyUs.js';
import HomeAbout from '../Home/homeAbout.js';
import HomeAbout2 from '../Home/homeAbout2.js';
import HomeAbout3 from '../Home/homeAbout3.js';

export default function home() {
  return (
    <div>
      <Menu />
      <HomeHeader />
      <HomeBenefits />
      <HomeWhyUs />
      <HomeAbout />
      <HomeAbout2 />
      <HomeAbout3 />
    </div>
  );
}
