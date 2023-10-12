import React from 'react';
import Menu from '../Menu/menu.js';
import HomeHeader from '../Home/homeHeader.js';
import HomeBenefits from '../Home/homeBenefits.js';
import HomeWhyUs from '../Home/homeWhyUs.js';

export default function home() {
  return (
    <div>
      <Menu />
      <HomeHeader />
      <HomeBenefits />
      <HomeWhyUs />
    </div>
  );
}
